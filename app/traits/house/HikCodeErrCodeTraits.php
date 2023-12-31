<?php
/**
 * +----------------------------------------------------------------------
 * 版权所有 2018~2022 合肥快鲸科技有限公司 [ https://www.kuaijing.com.cn ]
 * +----------------------------------------------------------------------
 * @author    合肥快鲸科技有限公司
 * @copyright 合肥快鲸科技有限公司
 * @link      https://www.kuaijing.com.cn
 * @Desc      海康错误码
 */


namespace app\traits\house;


trait HikCodeErrCodeTraits
{

    protected $hikCode = [
        '510001' => '参数错误', // 必填项为空、参数长度不符合等参数异常情况
        '511000' => '社区不存在',
        '511001' => '该社区下楼栋已存在，无法添加',
        '511004' => '楼栋编号已经存在',
        '511002' => '您所选择的区域已存在子区域，无法添加社区',// 新增社区会在系统默认区域下，若默认区域异常则报此异常
        '511003' => '已存在相同名称的社区， 请修改',
        '511015' => '手机格式错误',
        '511046' => '该人员不存在', // 社区负责人不存在
        '511047' =>	'社区面积(万㎡) 最多8位整数, 2位小数',
        '511059' => '租户信息不匹配', // 不能对其他租户的社区进行操作 不能在其他租户的社区下新增房屋
        '511093' => '省市区县代码错误', //省市区县代码包含非法字符
        '511094' => '经纬度坐标不合法',
    ];
    public function traitCodeErrCode($code)
    {
        if (isset($this->hikCode[$code])) {
            return $this->hikCode[$code];
        } else {
            return '未知错误';
        }
    }
}