<?php
/**
 * MallOrderAutoRefundService.php
 * 满足到期时间自动同意退款
 * Create on 2020/11/4 17:34
 * Created by zhumengqun
 */

namespace app\common\model\service\plan\file;

use app\mall\model\db\MallOrder;
use app\mall\model\db\MallOrderDetail;
use app\mall\model\service\MallOrderRefundService;
use app\mall\model\service\MallOrderService;
use think\facade\Db;

class MallOrderAutoRefundService
{
    /**
     * @param $order_id
     * 自动同意退款计划任务
     */
    public function runTask()
    {
        $mallOrderService = new MallOrderService();
        $time = cfg('mall_order_refund_time') * 24 * 60 * 60;
        $where = [
            ['status', '=', 0],
            ['create_time', '<', time() - $time],
        ];
        //获取该自动同意退款的退款订单记录
        $refundInfo = (new MallOrderRefundService())->getAllRefundByOrderId($where);
        if (!empty($refundInfo)) {
            foreach ($refundInfo as $key => $val) {
                $mallOrderService->AgreeRefund($val['order_id'], $val['refund_id'], $val['is_all'],2);
            }
        }
    }
}