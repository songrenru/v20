<?php

/**
 * Created by PhpStorm.
 * Author: wanziyang
 * Date Time: 2020/5/21 14:43
 */

namespace app\community\controller\street_community;

use app\community\controller\CommunityBaseController;

use app\community\model\service\StreetCommunityMenuService;
use app\community\model\service\AdminLoginService;
class AdminMenuController extends CommunityBaseController{


    /**
     * desc: 返回网站菜单信息,用于菜单展示
     * return :array
     */
    public function menuList(){

        $adminUser = $this->adminUser;
        // 菜单
        $adminLoginService= new AdminLoginService();
        $systemMenuService = new StreetCommunityMenuService();
        $systemMenu = $systemMenuService->formartMenuList([],$adminUser);
        if(isset($adminUser['street_worker']) && !empty($adminUser['street_worker']) && !empty($adminUser['street_worker']['menus'])){
            $menus=explode(',',$adminUser['street_worker']['menus']);
            if(!empty($menus)){
                $newSystemMenu=array();
                foreach ($systemMenu as $smu){
                    if($smu['name']==='street_index'){
                        $newSystemMenu[]=$smu;
                    }else if(in_array($smu['id'],$menus)){
                        $newSystemMenu[]=$smu;
                    }
                }
                $systemMenu=$newSystemMenu;
            }
        }else if($this->login_role==$adminLoginService::STREET_COMMUNITY_USER_LOGIN){
            $newSystemMenu=array();
            foreach ($systemMenu as $smu){
                if($smu['name']==='street_index'){
                    $newSystemMenu[]=$smu;
                }
            }
            $systemMenu=$newSystemMenu;
        }
        $returnArr['systemMenu'] = $systemMenu;
        return api_output(0, $returnArr);
    }
}