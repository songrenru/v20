<?php

// +----------------------------------------------------------------------
// | 缓存设置
// +----------------------------------------------------------------------

return [
    // 默认缓存驱动
    'default' => env('cache.driver', 'file'),

    // 缓存连接方式配置
    'stores'  => [
        'file' => [
            // 驱动方式
            'type'       => 'File',
            // 缓存保存目录
            'path'       => '../runtime/file/',
            // 缓存前缀
            'prefix'     => '',
            // 缓存有效期 0表示永久缓存
            'expire'     => 0,
            // 缓存标签前缀
            'tag_prefix' => 'tag:',
            // 序列化机制 例如 ['serialize', 'unserialize']
            'serialize'  => [],
        ],
        // 更多的缓存连接
	    // redis缓存
        'redis'   =>  [
	        // 驱动方式
	        'type'   => 'redis',
	        'host'          => '127.0.0.1', // 端口 //TODO 上线前需要修改为 127.0.0.1
	        'port'          => 6379, // 密码
	        'password'      => '',
	        'select'        => 3,
	        'timeout'       => 3,
	        'expire'        => 0,
	        'prefix'        => 'cache-data:',
	        'tag_prefix'    => 'cache-data:',
        ],
	    //队列缓存，该配置项务必要保持和 v20/config/queue.php 一致
        'queueRedis'    => [
	        'type'       => 'redis',
	        'queue'      => 'default',
	        'host'       => '127.0.0.1',
	        'port'       => 6379,
	        'password'   => '',
	        'select'     => 1,
	        'timeout'    => 0,
	        'persistent' => false,
        ],
    ],
];
