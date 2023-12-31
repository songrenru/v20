<?php
namespace redis;

use think\cache\Driver;

/**
 * Redis缓存驱动，适合单机部署、有前端代理实现高可用的场景，性能最好
 * 有需要在业务层实现读写分离、或者使用RedisCluster的需求，请使用Redisd驱动
 *
 * 要求安装phpredis扩展：https://github.com/nicolasff/phpredis
 * @author    尘缘 <130775@qq.com>
 */
class Redis extends Driver
{
    /** @var \Predis\Client|\Redis */
    protected $handler;

    /**
     * 配置参数
     * @var array
     */
    protected $options = [];

    /**
     * 架构函数
     * @access public
     * @param array $options 缓存参数
     */
    public function __construct(array $options = [])
    {
        if(empty(config('redis.connections.host'))){
            throw new \Exception('Redis参数未配置');
        }

        $this->options = [
            'host'       =>  config('redis.connections.host'),
            'port'       => config('redis.connections.port'),
            'password'   =>  config('redis.connections.password'),
            'select'     =>  config('redis.connections.select'),
            'timeout'    =>  config('redis.connections.timeout'),
            'expire'     =>  config('redis.connections.expire'),
            'persistent' =>  config('redis.connections.persistent'),
            'prefix'     =>  config('redis.connections.prefix'),
            'tag_prefix' =>  config('redis.connections.tag_prefix'),
            'serialize'  =>  config('redis.connections.serialize'),
        ];

        if (!empty($options)) {
            $this->options = array_merge($this->options, $options);
        }
       
        if (extension_loaded('redis')) {
            $this->handler = new \Redis;

            if ($this->options['persistent']) {
                $this->handler->pconnect($this->options['host'], (int) $this->options['port'], (int) $this->options['timeout'], 'persistent_id_' . $this->options['select']);
            } else {
                $this->handler->connect($this->options['host'], (int) $this->options['port'], (int) $this->options['timeout']);
            }

            if ('' != $this->options['password']) {
                $this->handler->auth($this->options['password']);
            }
        } elseif (class_exists('\Predis\Client')) {
            $params = [];
            foreach ($this->options as $key => $val) {
                if (in_array($key, ['aggregate', 'cluster', 'connections', 'exceptions', 'prefix', 'profile', 'replication', 'parameters'])) {
                    $params[$key] = $val;
                    unset($this->options[$key]);
                }
            }

            if ('' == $this->options['password']) {
                unset($this->options['password']);
            }

            $this->handler = new \Predis\Client($this->options, $params);

            $this->options['prefix'] = '';
        } else {
            throw new \BadFunctionCallException('not support: redis');
        }

        if (0 != $this->options['select']) {
            $this->handler->select($this->options['select']);
        }
    }



    public function rPush($key,$value){
        return  $this->handler->rPush($key,$value);
    }

    public function lPop($key){
        return  $this->handler->lPop($key);
    }

    public function LREM($key,$count,$value){
        return  $this->handler->LREM($key,$value,$count);
    }
    public function lLen($key){
        return  $this->handler->lLen($key);
    }
    public function lRange($key,$start=0,$end='-1'){
        return  $this->handler->lRange($key,$start,$end);
    }

    public function lTrim($key,$start=0,$end='-1'){
        return  $this->handler->lTrim($key,$start,$end);
    }
    public function Hgetall($key){
        return  $this->handler->Hgetall($key);
    }
    public function discard(){
        return  $this->handler->discard();
    }
    public function multi(){
        return  $this->handler->multi();
    }


    /**
     * 判断缓存
     * @access public
     * @param string $name 缓存变量名
     * @return bool
     */
    public function has($name): bool
    {
        return $this->handler->exists($this->getCacheKey($name)) ? true : false;
    }

    /**
     * 读取缓存
     * @access public
     * @param string $name    缓存变量名
     * @param mixed  $default 默认值
     * @return mixed
     */
    public function get($name, $default = null)
    {
        $this->readTimes++;

        $value = $this->handler->get($this->getCacheKey($name));

        if (false === $value || is_null($value)) {
            return $default;
        }

        return $this->unserialize($value);
    }

    /**
     * 写入缓存
     * @access public
     * @param string            $name   缓存变量名
     * @param mixed             $value  存储数据
     * @param integer|\DateTime $expire 有效时间（秒）
     * @return bool
     */
    public function set($name, $value, $expire = null): bool
    {
        $this->writeTimes++;

        if (is_null($expire)) {
            $expire = $this->options['expire'];
        }

        $key    = $this->getCacheKey($name);
        $expire = $this->getExpireTime($expire);
        $value  = $this->serialize($value);

        if ($expire) {
            $this->handler->setex($key, $expire, $value);
        } else {
            $this->handler->set($key, $value);
        }

        return true;
    }

    /**
     * 自增缓存（针对数值缓存）
     * @access public
     * @param string $name 缓存变量名
     * @param int    $step 步长
     * @return false|int
     */
    public function inc(string $name, int $step = 1)
    {
        $this->writeTimes++;

        $key = $this->getCacheKey($name);

        return $this->handler->incrby($key, $step);
    }

    /**
     * 自减缓存（针对数值缓存）
     * @access public
     * @param string $name 缓存变量名
     * @param int    $step 步长
     * @return false|int
     */
    public function dec(string $name, int $step = 1)
    {
        $this->writeTimes++;

        $key = $this->getCacheKey($name);

        return $this->handler->decrby($key, $step);
    }

    /**
     * 删除缓存
     * @access public
     * @param string $name 缓存变量名
     * @return bool
     */
    public function delete($name): bool
    {
        $this->writeTimes++;

        $result = $this->handler->del($this->getCacheKey($name));
        return $result > 0;
    }

    /**
     * 清除缓存
     * @access public
     * @return bool
     */
    public function clear(): bool
    {
        $this->writeTimes++;

        $this->handler->flushDB();
        return true;
    }

    /**
     * 删除缓存标签
     * @access public
     * @param array $keys 缓存标识列表
     * @return void
     */
    public function clearTag(array $keys): void
    {
        // 指定标签清除
        $this->handler->del($keys);
    }

    /**
     * 追加（数组）缓存数据
     * @access public
     * @param string $name  缓存标识
     * @param mixed  $value 数据
     * @return void
     */
    public function push(string $name, $value): void
    {
        $this->handler->sAdd($name, $value);
    }

    /**
     * 获取标签包含的缓存标识
     * @access public
     * @param string $tag 缓存标签
     * @return array
     */
    public function getTagItems(string $tag): array
    {
        return $this->handler->sMembers($tag);
    }

}

