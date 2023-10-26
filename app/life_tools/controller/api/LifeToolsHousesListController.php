<?php


namespace app\life_tools\controller\api;


use app\life_tools\model\service\LifeToolsHousesListService;

class LifeToolsHousesListController extends ApiBaseController
{
    /**
     * 在售楼盘前端头部
     */
    public function getApiHeader()
    {
        $out['data']=[
            [
                'header'=>"距离",
                'search_juli'=>"asc"
            ],
            [
                'header'=>"价格",
                'search_price'=>"asc"
            ],
        ];
        return api_output(0, $out, 'success');
    }

     /**
     * 在售楼盘列表
     */
     public function getApiList(){
         $param['sort_type'] = $this->request->param('sort_type', 'juli', 'trim');//排序方式默认距离升序
         $param['sort_name'] = $this->request->param('sort_name', 'asc', 'trim');//排序方式默认距离升序
         $param['search_price'] = $this->request->param('search_price', 'asc', 'trim');//排序方式默认价格升序
         $param['page'] = $this->request->param('page', 1, 'intval');
         $param['pageSize'] = $this->request->param('pageSize', 10, 'intval');
         $param['long'] = $this->request->param('long', '', 'trim');
         $param['lat'] = $this->request->param('lat', '', 'trim');
         $param['content'] = $this->request->param('content', '', 'trim');
         $list=(new LifeToolsHousesListService())->getApiList($param);
         return api_output(0, $list, 'success');
     }

    /**
     * @return \json
     * 详情
     */
     public function getDetail(){
         $param['houses_id'] = $this->request->param('houses_id', '0', 'intval');
         if(empty($param['houses_id'])){
             return api_output_error(1003, "缺少必要参数");
         }
         $detail=(new LifeToolsHousesListService())->getDetail($param);
         return api_output(0, $detail, 'success');
     }
}