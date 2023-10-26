<?php

namespace app\common\controller\api;

use app\common\model\service\user\UserNoticeService;
use emoji\Emoji;

class UserNoticeController extends ApiBaseController
{
    /**
     * 查询消息板块列表
     */
    public function getNoticeType()
    {
        $param['page']     = $this->request->param('page', 1, 'intval');
        $param['pageSize'] = $this->request->param('pageSize', 10, 'intval');
        $param['uid'] = $this->uid;
        try {
            $arr = (new UserNoticeService())->getNoticeType($param);
            return api_output(0, $arr, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }
    
    /**
     * 消息板块-置顶
     */
    public function topNoticeType()
    {
        $param['id']     = $this->request->param('id', 0, 'intval');
        $param['uid'] = $this->uid;
        $param['status'] = $this->request->param('status', 1, 'intval');
        try {
            $arr = (new UserNoticeService())->topNoticeType($param);
            return api_output(0, $arr, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }

    /**
     * 消息板块-删除
     */
    public function delNoticeType()
    {
        $param['id']     = $this->request->param('id', 0, 'intval');
        $param['uid'] = $this->uid;
        try {
            $arr = (new UserNoticeService())->delNoticeType($param);
            return api_output(0, $arr, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }
    
    /**
     * 查询订单消息列表（查询是否已读，没的话，改为已读）
     */
    public function getOrderNoticeList()
    {
        $param['page']     = $this->request->param('page', 1, 'intval');
        $param['pageSize'] = $this->request->param('pageSize', 10, 'intval');
        $param['uid'] = $this->uid;
        try {
            $arr = (new UserNoticeService())->getOrderNoticeList($param);
            return api_output(0, $arr, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }

    /**
     * 全部已读
     */
    public function readAll()
    {
        $param['uid'] = $this->uid;
        $param['read_all'] = $this->request->param('pageSize', 1, 'intval');//1：全部已读
        try {
            $arr = (new UserNoticeService())->readNotice($param);
            return api_output(0, $arr, 'success');
        } catch (\Exception $e) {
            return api_output_error(1003, $e->getMessage());
        }
    }
    
    /**
     * 查询表情数组
     */
    public function getEmojiDB()
    {
        $arr = (new Emoji())->emojiDB();
        return api_output(0, $arr, 'success');
    }

}