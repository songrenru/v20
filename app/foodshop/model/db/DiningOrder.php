<?php
/**
 * 餐饮订单model
 * Created by vscode.
 * Author: hengtingmei
 * Date Time: 2020/5/30 17:28
 */

namespace app\foodshop\model\db;
use think\Model;
class DiningOrder extends Model {

    use \app\common\model\db\db_trait\CommonFunc;

    /**
     * 根据条件返回订单列表
     * @param $where array 条件
     * @param $order array 排序
     * @return array|bool|Model|null
     */
    public function getOrderListByCondition($where, $order, $page, $pageSize) {
        if(!$where){
            return null;
        }
        if($page>0){
            $result = $this->where($where)
                            ->where('is_temp','=', '0')
                            ->order($order)
                            ->page($page,$pageSize)
                            ->select();
        }else{
            $result = $this->where($where)->where('is_temp','=', '0')->order($order)->select();
        }
        return $result;
    }
    
    /**
     * 根据条件返回订单列表
     * @param $where array 条件
     * @param $order array 排序
     * @return array|bool|Model|null
     */
    public function getOrderListByJoin($where, $field, $order, $page, $pageSize,$pay_type='all') {
        // 表前缀
        $prefix = config('database.connections.mysql.prefix');
        if($pageSize==0){
            $result = $this ->alias('o')
                ->where($where)
                ->where('o.is_temp','=', '0')
                ->field($field)
                ->leftJoin($prefix.'merchant_store s','s.store_id=o.store_id')
                ->leftJoin($prefix.'merchant m','m.mer_id = s.mer_id')
//                            ->leftJoin($prefix.'card_userlist card','card.mer_id = o.mer_id AND card.uid = o.uid AND o.uid>0 AND card.status=1')
                ->leftJoin($prefix.'user u','u.uid = o.uid')
                ->leftJoin($prefix.'foodshop_table tab','tab.id = o.table_id')
                ->leftJoin($prefix.'foodshop_table_type tab_type','tab_type.id = o.table_type')
                ->order($order)
                ->group('o.order_id')
                ->select();

        }else{
            $result = $this ->alias('o')
                ->where($where)
                ->where('o.is_temp','=', '0')
                ->field($field)
                ->leftJoin($prefix.'merchant_store s','s.store_id=o.store_id')
                ->leftJoin($prefix.'merchant m','m.mer_id = s.mer_id')
//                            ->leftJoin($prefix.'card_userlist card','card.mer_id = o.mer_id AND card.uid = o.uid AND o.uid>0 AND card.status=1')
                ->leftJoin($prefix.'user u','u.uid = o.uid')
                ->leftJoin($prefix.'foodshop_table tab','tab.id = o.table_id')
                ->leftJoin($prefix.'foodshop_table_type tab_type','tab_type.id = o.table_type')
                ->order($order)
                ->group('o.order_id')
                ->page($page,$pageSize)
                ->select();

        }
        return $result;
    }

    /**
     * 根据条件返回订单总数
     * @param $where array 条件
     * @return array|bool|Model|null
     */
    public function getOrderCountByJoin($where,$pay_type='all') {
        // 表前缀
        $prefix = config('database.connections.mysql.prefix');

        $result = $this ->alias('o')
                        ->where($where)
                        ->where('o.is_temp','=', '0')
                        ->leftJoin($prefix.'merchant_store s','s.store_id=o.store_id')
                        ->leftJoin($prefix.'merchant m','m.mer_id = s.mer_id')
                        ->leftJoin($prefix.'user u','u.uid = o.uid')
                        ->leftJoin($prefix.'foodshop_table tab','tab.id = o.table_id')
                        ->leftJoin($prefix.'foodshop_table_type tab_type','tab_type.id = o.table_type');
        if($pay_type!='all'){
            $result=$result->leftJoin($prefix . 'foodshop_order_pay order_pay', 'order_pay.order_id = o.order_id')
                ->leftJoin($prefix . 'pay_order_info pay_order', 'pay_order.orderid = order_pay.third_id');
        }
        $result=$result->count();
        return $result;
    }

    /**
     * 根据条件返回订单总数
     * @param $where array 条件
     * @return array|bool|Model|null
     */
    public function getOrderSumByJoin($where,$pay_type='all',$field=true) {
        // 表前缀
        $prefix = config('database.connections.mysql.prefix');

        $result = $this ->alias('o')
                        ->field($field)
                        ->where($where)
                        ->where('o.is_temp','=', '0')
                        ->leftJoin($prefix.'merchant_store s','s.store_id=o.store_id')
                        ->leftJoin($prefix.'merchant m','m.mer_id = s.mer_id')
                        ->leftJoin($prefix.'user u','u.uid = o.uid')
                        ->leftJoin($prefix.'foodshop_table tab','tab.id = o.table_id')
                        ->leftJoin($prefix.'foodshop_table_type tab_type','tab_type.id = o.table_type');
        if($pay_type!='all'){
            $result=$result->leftJoin($prefix . 'foodshop_order_pay order_pay', 'order_pay.order_id = o.order_id')
                ->leftJoin($prefix . 'pay_order_info pay_order', 'pay_order.orderid = order_pay.third_id');
        }
        $result=$result->find();
        return $result;
    }

    

    /**
     * 根据条件返回订单线下支付总额
     * @param $where array 条件
     * @return array|bool|Model|null
     */
    public function getOrderOfflineMoneyTotal($where,$field=true) {
        // 表前缀
        $prefix = config('database.connections.mysql.prefix');

        $result = $this->name('dining_order_pay') ->alias('order_pay')
                        ->field($field)
                        ->where($where)
                        ->where('o.is_temp','=', '0')
                        ->join($prefix.'dining_order o','order_pay.order_id=o.order_id')
                        ->leftJoin($prefix . 'pay_order_info pay_order', 'pay_order.orderid = order_pay.third_id')
                        ->leftJoin($prefix.'merchant_store s','s.store_id=o.store_id')
                        ->leftJoin($prefix.'merchant m','m.mer_id = s.mer_id')
                        ->leftJoin($prefix.'foodshop_table tab','tab.id = o.table_id')
                        ->leftJoin($prefix.'foodshop_table_type tab_type','tab_type.id = o.table_type')
                        ->leftJoin($prefix.'user u','order_pay.uid = u.uid');
        
        $result=$result->find();
        return $result;
    }

    /**
     * 根据订单id条件返回订单
     * @param $orderId int 条件
     * @return array|bool|Model|null
     */
    public function getOrderByOrderId($orderId) {
        if(!$orderId){
            return null;
        }

        $where = [
            'order_id' => $orderId
        ];

        $result = $this->where($where)->find();
        return $result;
    }

    /**
     * 根据条件返回订单
     * @param $where int 条件
     * @return array|bool|Model|null
     */
    public function getOrderByCondition($where, $order) {
        if(!$where){
            return null;
        }

        $result = $this->where($where)->order($order)->find();
        return $result;
    }

    /**
     * 根据条件返回订单数量
     * @param $where array 条件
     * @return array
     */
    public function getOrderCountByCondition($where){
     
        $result = $this->where($where)
                        ->where('is_temp','=', '0')->count();
        return $result;
    }

    /**
     * 根据条件返回总数
     * @param $where array 条件 
     * @return array|bool|Model|null
     */
    public function getCount($where) {

        $result = $this->where($where)->where('is_temp','=', '0')->count();
        return $result;
    }

}