<?php


namespace app\group\controller\platform;


use app\group\model\service\GroupHomeMenuService;

class GroupHomeMenuController extends AuthBaseController
{
    /**
     * 团购首页配置-附近好店是否展示
     */
    public function changeShow(){
        $is_show = $this->request->param('is_show', 1, 'intval');
        $service = new GroupHomeMenuService();
        try {
            $res = $service->changeShow($is_show);
            return api_output(0, $res, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }

    /**
     * 团购首页配置-附近好店显示状态
     * @return \json
     */
    public function getShow(){
        $service = new GroupHomeMenuService();
        try {
            $res = $service->getShow();
            return api_output(0, $res, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }
}