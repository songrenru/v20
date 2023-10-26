<?php
namespace app\appoint\controller\api;

use app\appoint\model\service\MerchantWorkService;
use app\common\controller\CommonBaseController;

class MerchantWorkController extends CommonBaseController
{
    public function getWorkInfo(){
        try {
            $param['work_id'] = $this->request->param('work_id', 0, 'trim,intval');

            $data = (new MerchantWorkService())->getWorkInfo($param);
            return api_output(0, $data);
        } catch (\Exception $e) {
            return api_output(1003, [], $e->getMessage());
        }
    }
}