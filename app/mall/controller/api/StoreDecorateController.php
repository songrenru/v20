<?php
/**
 * StoreDecorateController.php
 * 店铺首页装修
 * Create on 2020/10/31 9:14
 * Created by zhumengqun
 */

namespace app\mall\controller\api;

use app\BaseController;
use app\mall\model\service\MallDecorateService;

class StoreDecorateController extends BaseController
{
    public function getStoreDecorate()
    {
        $store_id = $this->request->param('store_id', '', 'intval');
        $uid = request()->log_uid;
        $mallDecorateService = new MallDecorateService();
        try {
            $res = $mallDecorateService->getStoreDecorate($store_id, $uid);
            return api_output(0, $res, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }

    /**
     * 收藏
     */
    public function storeCollection()
    {
        $store_id = $this->request->param('store_id', '', 'intval');
        $uid = request()->log_uid;
        $mallDecorateService = new MallDecorateService();
        try {
            $res = $mallDecorateService->storeCollection($store_id, $uid);
            return api_output(0, $res, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }

    /**
     * 全部宝贝/分类宝贝
     */
    public function getStoreGoodsList()
    {
        $store_id = $this->request->param('store_id', '', 'intval');
        $page = $this->request->param('page', 1, 'intval');
        $pageSize = $this->request->param('pageSize', 10, 'intval');
        $order = $this->request->param('order', 0, 'intval'); //排序规则：0综合，1销量倒序，2销量正序，3价格倒序，4价格正序
        $keyword = $this->request->param('keyword', '', 'trim');
        $sort_id = $this->request->param('sort_id', '', 'intval');
        $sort_level = $this->request->param('sort_level', '', 'intval');
        $mallDecorateService = new MallDecorateService();
        try {
            $res = $mallDecorateService->getStoreGoodsList($store_id, $order, $page, $pageSize, $keyword, $sort_id, $sort_level);
            return api_output(0, $res, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }

    /**
     * 获取分类
     */
    public function getSortsList()
    {
        $store_id = $this->request->param('store_id', '', 'intval');
        $mallDecorateService = new MallDecorateService();
        try {
            $res = $mallDecorateService->getSortsList($store_id);
            return api_output(0, $res, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }

    public function getStoreNewList()
    {
        $store_id = $this->request->param('store_id', '', 'intval');
        $order = $this->request->param('order', 0, 'intval'); //排序规则：0综合，1销量倒序，2销量正序，3价格倒序，4价格正序
        $mallDecorateService = new MallDecorateService();
        try {
            $res = $mallDecorateService->getStoreNewList($store_id, $order);
            return api_output(0, $res, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }
}