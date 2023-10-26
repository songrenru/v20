#!/usr/bin/env php
<?php
/**
 * Created by PhpStorm.
 * Author: zhubaodi
 * Date Time: 2022/1/6 13:35
 */
namespace think;

use Workerman\Mqtt\Client;
use Workerman\MySQL\Connection;
use Workerman\Worker;
use app\community\model\service\HouseNewEnerpyPileService;

require realpath( __DIR__ . '/../../vendor/autoload.php');
$database_config = include realpath(  __DIR__ . '/../../../conf/db.php');

$db = new Connection($database_config['DB_HOST'], $database_config['DB_PORT'], $database_config['DB_USER'], $database_config['DB_PWD'], $database_config['DB_NAME']);
$worker = new Worker();
$worker->onWorkerStart = function(){
    $address = "mqtt://127.0.0.1:1883";
    $optioins = [
       /* 'username'=>'admin',
        'password'=>'admin',*/
        'debug'=>true
    ];
    $mqtt = new Client($address,$optioins);
    $mqtt->onConnect = function($mqtt) {
        echo "订阅--->>".date('Y-m-d H:i:s') .PHP_EOL;
        publish($mqtt);
        //订阅设备上报的信息
        subscribe($mqtt);
    };
    $mqtt->onMessage = function($topic, $content,$mqtt){
        
        echo "onMessage【当客户端收到Publish报文时触发】-->>";
        echo "订阅--->>".date('Y-m-d H:i:s') .PHP_EOL;
        $content= bin2hex($content);
        var_dump($topic, $content);
        //设备上报的信息
       onMessage($topic, $content);
        publish($mqtt);
      
    };
    echo " ~~~~~~` ";
    
    $mqtt->connect();
};
Worker::runAll();



function onMessage($topic, $content) {
    echo "onMessage【当客户端收到Publish报文时触发】-->>";
    var_dump($topic, $content);
    $time=time();
    if (!empty($topic)){
        $sn_info=explode('/',$topic);
        if (count($sn_info)==5){
            $sn=$sn_info[3];
        }
        $data=[];
        $data['sn']=isset($sn)?$sn:'';
        $data['cmd']=$content;
        curlPost('https://s.gtcdz.com/v20/public/index.php/community/village_api.Pile/command_mqtt',$data);
    }
}

function subscribe($mqtt){
    global $db;
    $pile_list = $db->query('select id,equipment_num,status,socket_num,is_del,village_id from pigcms_house_new_pile_equipment where type=2 and is_del =1');
    if (!empty($pile_list)){
        foreach ($pile_list as $v){
            $sn=$v['equipment_num'];
            $topicuri = 'gtcdz/qccdz/system/'.$sn.'/seriaNet';
            $mqtt->subscribe($topicuri);
        }
    }
}


function subscribe1($mqtt){
    global $db;
    $pile_list = $db->query('select id,equipment_num,status,socket_num,is_del,village_id from pigcms_house_new_pile_equipment where type=2 and is_del =1 and status>2');
    if (!empty($pile_list)){
        foreach ($pile_list as $v){
            $sn=$v['equipment_num'];
            $topicuri = 'gtcdz/qccdz/system/'.$sn.'/seriaNet';
            $mqtt->subscribe($topicuri);
        }
    }
}

function publish($mqtt){
    global $db;
    $cmd_list = $db->query('select * from pigcms_house_new_pile_command where type=1 and status=1 and device_type=2');
    if (!empty($cmd_list)){
        foreach ($cmd_list as $v){
            $command = json_decode($v['command'],true);
            $topicuri = 'gtcdz/qccdz/dev/'.$command['sn'].'/seriaNet';
           //  $data=$command['cmd'];
            $data=pack("H*",$command['cmd']);
            $mqtt->publish($topicuri, $data);
            if ($v['flag']!=1){
                echo "Publish指令下发-->>".date('Y-m-d H:i:s').PHP_EOL;
                var_dump($v);
                $db->query('update pigcms_house_new_pile_command set status=2 where id="'.$v['id'].'" ');
            }
           
        }
	subscribe1($mqtt);
    }
}

/**
 * [opensslDecrypt description]
 * 使用openssl库进行加密
 * @param  [type] $sStr
 * @param  [type] $sKey
 * @return [type]
 */
 function opensslEncrypt($sStr, $sKey, $method = 'AES-128-ECB')
{
    $sKey= pack("H*",$sKey);
    $sStr= pack("H*",$sStr);
    $str = openssl_encrypt($sStr, $method, $sKey,OPENSSL_RAW_DATA);
    $str = bin2hex($str);
    return $str;
}

/**
 * [opensslDecrypt description]
 * 使用openssl库进行解密
 * @param  [type] $sStr
 * @param  [type] $sKey
 * @return [type]
 */
function opensslDecrypt($sStr, $sKey, $method = 'AES-128-ECB')
{
    $sKey= pack("H*",$sKey);
    $sStr= pack("H*",$sStr);
    $str = openssl_decrypt($sStr, $method, $sKey,OPENSSL_RAW_DATA);
    $str = bin2hex($str);
    return $str;
}


function curlPost($url,$data,$timeout=45,$header = "Content-type: application/x-www-form-urlencoded;charset=utf-8"){

    $ch = curl_init();
    $headers[] = $header;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    //  curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch ,CURLOPT_TIMEOUT ,$timeout);
    $result = curl_exec($ch);
    curl_close($ch);
    //  $result = json_decode($result, true);
    /*if ($result && $result['rstCode']) {
        $rstCodeMsg = $this->a4_rstCode($result['rstCode']);
        $result['rstCodeMsg'] = $rstCodeMsg;
    }*/
    return $result;
}


function wordStr($wordStr) {
    $wordStr = str_replace(' ','',$wordStr);
    $wordCmd = $wordStr;
    $wordStr .= '0000';
    $packStr = pack('H*',$wordStr);// 把数据装入一个二进制字符串[十六进制字符串，高位在前]
    $crc166Str = crc166($packStr);// 进行CRC16校验
    $unpackStr = unpack("H*", $crc166Str); // 从二进制字符串对数据进行解包[十六进制字符串，高位在前];
    return $wordCmd . strtoupper($unpackStr[1]);
}

function crc166($string, $length = 0)
{
    $auchCRCHi = array(0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81,
        0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0,
        0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01,
        0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
        0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81,
        0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0,
        0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01,
        0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
        0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81,
        0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0,
        0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01,
        0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
        0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81,
        0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0,
        0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01,
        0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
        0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81,
        0x40);
    $auchCRCLo = array(0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7, 0x05, 0xC5, 0xC4,
        0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E, 0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09,
        0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9, 0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD,
        0x1D, 0x1C, 0xDC, 0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
        0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32, 0x36, 0xF6, 0xF7,
        0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D, 0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A,
        0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38, 0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE,
        0x2E, 0x2F, 0xEF, 0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
        0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1, 0x63, 0xA3, 0xA2,
        0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4, 0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F,
        0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB, 0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB,
        0x7B, 0x7A, 0xBA, 0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
        0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0, 0x50, 0x90, 0x91,
        0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97, 0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C,
        0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E, 0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88,
        0x48, 0x49, 0x89, 0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
        0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83, 0x41, 0x81, 0x80,
        0x40);
    $length = ($length <= 0 ? strlen($string) : $length);
    $uchCRCHi = 0xFF;
    $uchCRCLo = 0xFF;
    $uIndex = 0;
    for ($i = 0; $i < $length; $i++) {
        $uIndex = $uchCRCLo ^ ord(substr($string, $i, 1));
        $uchCRCLo = $uchCRCHi ^ $auchCRCHi[$uIndex];
        $uchCRCHi = $auchCRCLo[$uIndex];
    }
    return(chr($uchCRCHi) . chr($uchCRCLo));
}

