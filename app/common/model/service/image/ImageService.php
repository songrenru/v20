<?php
/**
 * 图片处理服务
 * Author: hengtingmei
 * Date Time: 2020/12/26
 */

namespace app\common\model\service\image;
use app\traits\ImageHandleTraits;
use think\Exception;

class ImageService {
	
	use ImageHandleTraits;
	
    /**
     * 生成海报
     * @param $config array 数据
     * @param $filename string 生成的图片地址 项目完整目录
     * @return array
     */
    public function createPoster($config=array(),$filename=""){
        $imageDefault = array(
            'left'=>0,
            'top'=>0,
            'right'=>0,
            'bottom'=>0,
            'width'=>100,
            'height'=>100,
            'opacity'=>100
        );
        $background = $config['background'];//海报最底层得背景

        //处理背景图片
        $backgroundInfo = getimagesize($background);

        $backgroundFun = 'imagecreatefrom'.image_type_to_extension($backgroundInfo[2], false);
        $background = $backgroundFun($background);
        $backgroundWidth = imagesx($background);  //背景宽度
        $backgroundHeight = imagesy($background);  //背景高度
        $imageRes = imageCreatetruecolor($backgroundWidth,$backgroundHeight);
        $color = imagecolorallocate($imageRes, 0, 0, 0);
        imagefill($imageRes, 0, 0, $color);
        imagecopyresampled($imageRes,$background,0,0,0,0,imagesx($background),imagesy($background),imagesx($background),imagesy($background));

        //处理合成图片
        if(!empty($config['image'])){
            foreach ($config['image'] as $key => $val) {
                $val = array_merge($imageDefault,$val);

                //建立画板 ，缩放图片至指定尺寸
                $info = getimagesize($val['url']);
                $function = 'imagecreatefrom' . image_type_to_extension($info[2], false);
                if ($val['stream']) {   //如果传的是字符串图像流
                    $info = getimagesizefromstring($val['url']);
                    $function = 'imagecreatefromstring';
                }

                $res = $function($val['url']);

                $resWidth = $info[0];
                $resHeight = $info[1];

                $canvas = imagecreatetruecolor($val['width'], $val['height']);
                if ($val['is_unhyaline']) {
                    $c = imagecolorallocate($canvas, 245 ,245 ,245);
                }else{
                    $c = imagecolorallocate($canvas, 255, 255, 255);
                }
                $color = imagecolortransparent($canvas,$c);
                imagefill($canvas, 0, 0, $color);

                //关键函数，参数（目标资源，源，目标资源的开始坐标x,y, 源资源的开始坐标x,y,目标资源的宽高w,h,源资源的宽高w,h）
                imagecopyresampled($canvas, $res, 0, 0, 0, 0, $val['width'], $val['height'],$resWidth,$resHeight);
                $val['left'] = $val['left']<0?$backgroundWidth- abs($val['left']) - $val['width']:$val['left'];
                $val['top'] = $val['top']<0?$backgroundHeight- abs($val['top']) - $val['height']:$val['top'];

                //放置图像
                imagecopymerge($imageRes,$canvas, $val['left'],$val['top'],$val['right'],$val['bottom'],$val['width'],$val['height'],$val['opacity']);//左，上，右，下，宽度，高度，透明度
            }
        }

        //生成图片
        // 项目根目录
        $DOCUMENT_ROOT = request()->server('DOCUMENT_ROOT');
        $res = imagejpeg ($imageRes,$filename,90); //保存到本地
        imagedestroy($imageRes);

        if(!$res){
            return false;
        }
        return cfg('site_url').str_replace( $DOCUMENT_ROOT,'',$filename);
    }

    /**
     * 生成特定尺寸缩略图 解决原版缩略图不能满足特定尺寸的问题 PS：会裁掉图片不符合缩略图比例的部分
     * @static
     * @access public
     * @param string $image  原图
     * @param string $type 图像格式
     * @param string $thumbname 缩略图文件名
     * @param string $maxWidth  宽度
     * @param string $maxHeight  高度
     * @param boolean $interlace 启用隔行扫描
     * @return void
     */
    static function thumb2($image, $thumbname, $type='', $maxWidth=200, $maxHeight=50, $interlace=true) {
        ini_set('memory_limit', '512M');
        // 获取原图信息
        $info = self::getImageInfo($image);
        if ($info !== false) {
            $srcWidth = $info['width'];
            $srcHeight = $info['height'];
            $type = empty($type) ? $info['type'] : $type;
            $type = strtolower($type);
            $interlace = $interlace ? 1 : 0;
            unset($info);
            $scale = max($maxWidth / $srcWidth, $maxHeight / $srcHeight); // 计算缩放比例
            //判断原图和缩略图比例 如原图宽于缩略图则裁掉两边 反之..
            if($maxWidth / $srcWidth > $maxHeight / $srcHeight){
                //高于
                $srcX = 0;
                $srcY = ($srcHeight - $maxHeight / $scale) / 2 ;
                $cutWidth = $srcWidth;
                $cutHeight = $maxHeight / $scale;
            }else{
                //宽于
                $srcX = ($srcWidth - $maxWidth / $scale) / 2;
                $srcY = 0;
                $cutWidth = $maxWidth / $scale;
                $cutHeight = $srcHeight;
            }

            // 载入原图
            $createFun = 'ImageCreateFrom' . ($type == 'jpg' ? 'jpeg' : $type);
            $srcImg = $createFun($image);

            //创建缩略图
            if ($type != 'gif' && function_exists('imagecreatetruecolor'))
                $thumbImg = imagecreatetruecolor($maxWidth, $maxHeight);
            else
                $thumbImg = imagecreate($maxWidth, $maxHeight);

            //png和gif的透明处理
            if ('png' == $type) {
                imagealphablending($thumbImg, false);//取消默认的混色模式（为解决阴影为绿色的问题）
                imagesavealpha($thumbImg, true);//设定保存完整的 alpha 通道信息（为解决阴影为绿色的问题）
            } elseif ('gif' == $type) {
                $trnprt_indx = imagecolortransparent($srcImg);
                if ($trnprt_indx >= 0) {
                    //its transparent
                    $trnprt_color = imagecolorsforindex($srcImg, $trnprt_indx);
                    $trnprt_indx = imagecolorallocate($thumbImg, $trnprt_color['red'], $trnprt_color['green'], $trnprt_color['blue']);
                    imagefill($thumbImg, 0, 0, $trnprt_indx);
                    imagecolortransparent($thumbImg, $trnprt_indx);
                }
            }
            // 复制图片
            if (function_exists("ImageCopyResampled"))
                imagecopyresampled($thumbImg, $srcImg, 0, 0, $srcX, $srcY, $maxWidth, $maxHeight, $cutWidth, $cutHeight);
            else
                imagecopyresized($thumbImg, $srcImg, 0, 0, $srcX, $srcY, $maxWidth, $maxHeight, $cutWidth, $cutHeight);
            if ('gif' == $type || 'png' == $type) {
                $background_color = imagecolorallocate($thumbImg, 0, 255, 0);  //  指派一个绿色
                imagecolortransparent($thumbImg, $background_color);  //  设置为透明色，若注释掉该行则输出绿色的图
            }

            // 对jpeg图形设置隔行扫描
            if ('jpg' == $type || 'jpeg' == $type)
                imageinterlace($thumbImg, $interlace);

            // 生成图片
            $imageFun = 'image' . ($type == 'jpg' ? 'jpeg' : $type);
            if($imageFun == 'imagejpeg'){
                $imageFun($thumbImg, $thumbname, 100);
            }else{
                $imageFun($thumbImg, $thumbname);
            }

            imagedestroy($thumbImg);
            imagedestroy($srcImg);
            return $thumbname;
        }
        return false;
    }


    /**
     * 取得图像信息
     * @static
     * @access public
     * @param string $image 图像文件名
     * @return mixed
     */

    static function getImageInfo($img) {
        $imageInfo = getimagesize($img);
        if ($imageInfo !== false) {
            $imageType = strtolower(substr(image_type_to_extension($imageInfo[2]), 1));
            // $imageSize = filesize($img);
            $info = array(
                "width" => $imageInfo[0],
                "height" => $imageInfo[1],
                "type" => $imageType,
                // "size" => $imageSize,
                "mime" => $imageInfo['mime']
            );
            return $info;
        } else {
            return false;
        }
    }


    /**
     *等比例缩放函数（以保存新图片的方式实现）
     * @param string $picName 被缩放的处理图片源
     * @param string $savePath 保存路径
     * @param int $maxx 缩放后图片的最大宽度
     * @param int $maxy 缩放后图片的最大高度
     * @param string $pre 缩放后图片的前缀名
     * @return $string 返回后的图片名称（） 如a.jpg->s.jpg
     *
     **/
    public function scaleImg($picName,$savePath, $maxx = 800, $maxy = 450, $pre = '')
    {
        $info = getimageSize($picName);//获取图片的基本信息
        $w = $info[0];//获取宽度
        $h = $info[1];//获取高度

        if($w<=$maxx&&$h<=$maxy){
            return $picName;
        }
        //获取图片的类型并为此创建对应图片资源
        switch ($info[2]) {
            case 1://gif
                $im = imagecreatefromgif($picName);
                break;
            case 2://jpg
                $im = imagecreatefromjpeg($picName);
                break;
            case 3://png
                $im = imagecreatefrompng($picName);
                break;
            default:
                die("图像类型错误");
        }

        //计算缩放比例
        if (($maxx / $w) > ($maxy / $h)) {
            $b = $maxy / $h;
        } else {
            $b = $maxx / $w;
        }
        //计算出缩放后的尺寸
        $nw = floor($w * $b);
        $nh = floor($h * $b);
        //创建一个新的图像源（目标图像）
        $nim = imagecreatetruecolor($nw, $nh);

        //透明背景变黑处理
        //2.上色
        $color=imagecolorallocate($nim,255,255,255);
        //3.设置透明
        imagecolortransparent($nim,$color);
        imagefill($nim,0,0,$color);


        //执行等比缩放
        imagecopyresampled($nim, $im, 0, 0, 0, 0, $nw, $nh, $w, $h);
        //输出图像（根据源图像的类型，输出为对应的类型）
        $picInfo = pathinfo($picName);//解析源图像的名字和路径信息
        if($pre){
            $savePath = $savePath. "/".$pre . $picInfo["basename"];
        }

        $temp = explode(".", $savePath); //判断图片文件后缀名
        $extension = end($temp);
        if(in_array($extension, array('jpg', 'jpeg'))){
            imagejpeg($nim, $savePath);
        } elseif(in_array($extension, array('gif'))) {
            imagegif($nim, $savePath);
        } else {
            imagepng($nim, $savePath);
        }
        // switch ($info[2]) {
        //     case 1:
        //         imagegif($nim, $savePath);
        //         break;
        //     case 2:
        //         break;
        //     case 3:
        //         imagepng($nim, $savePath);
        //         break;

        // }
        //释放图片资源
        imagedestroy($im);
        imagedestroy($nim);
        //返回结果
        return $savePath;
    }


    /**
     * 将图片处理成圆形
     * @author Nd
     * @date 2022/4/11
     * @param string $imgpath 图片本地位置
     * @return false|resource
     */
    public function changeCircularImg($imgpath)
    {
        $src_img = null;
        $src_img = @imagecreatefromstring(file_get_contents($imgpath));
        //如果如果$imgpath为本地图片地址
        $wh = getimagesize($imgpath);
        $w = $wh[0];
        $h = $wh[1];
        $w = min($w, $h);
        $h = $w;
        $img = imagecreatetruecolor($w, $h); //这一句一定要有
        imagesavealpha($img, true);
        //拾取一个完全透明的颜色,最后一个参数127为全透明
        $bg = imagecolorallocatealpha($img, 255, 255, 255, 127);
        imagefill($img, 0, 0, $bg);
        imagesavealpha($img , true);
        $r = $w / 2;
        //圆半径
        $y_x = $r; //圆心X坐标
        $y_y = $r; //圆心Y坐标
        for ($x = 0; $x < $w;
             $x++) {
            for ($y = 0; $y < $h; $y++) {
                $rgbColor = imagecolorat($src_img, $x,$y);
                //根据数学公式圆的计算方式 算的 (x-r)(x-r)+(y-r)(y-r)=r*r (x,y坐标点 r半径)
                if (((($x - $r) * ($x - $r) + ($y - $r) * ($y - $r)) < ($r * $r))) {
                    imagesetpixel($img, $x, $y, $rgbColor);
                }
            }
        }
        return $img;
    }
	
	public function encodeImgToDataUrl(array $params)
	{
		$imgPath    = $params['imgPath'];
		$with       = isset($params['with'])   ?  $params['with']   : 460;
		$heiht      = isset($params['heiht'])  ?  $params['heiht']  : 358;
		$format     = isset($params['format']) ?  $params['format'] : 'data-url';
		$quality    = 80;
		try {
			return	$this->traitEncodeImgFormat($imgPath, $with, $heiht, $format, $quality);
		}catch (Exception $e){
			return $e->getMessage();
		}
	}

	public function encodePngToJpg(array $params)
	{
		$imgPath    = $params['imgPath'];
		$savePath   = $params['savePath'];
		$with       = isset($params['with'])   ?  $params['with']   : 460;
		$heiht      = isset($params['heiht'])  ?  $params['heiht']  : 358;
		$format     = isset($params['format']) ?  $params['format'] : 'jpg';
		$quality    = 80;
		try {
			return	$this->traitEncodeImgFormatAndSaveAs($imgPath,$savePath,$with,$heiht, $format , $quality);
		}catch (Exception $e){
			return $e->getMessage();
		}
	}
	
	/**
     * 绘制圆角矩形
     */
	public function arcRec($imageObj, $arcRec_SX, $arcRec_SY, $arcRec_W, $arcRec_H, $redius, $color)
    {
        imagefilledrectangle($imageObj, $arcRec_SX + $redius, $arcRec_SY, $arcRec_SX + ($arcRec_W - $redius), $arcRec_SY + $redius, $color); //矩形一
        imagefilledrectangle($imageObj, $arcRec_SX, $arcRec_SY + $redius, $arcRec_SX + $arcRec_W, $arcRec_SY + ($arcRec_H - ($redius * 1)), $color);//矩形二
        imagefilledrectangle($imageObj, $arcRec_SX + $redius, $arcRec_SY + ($arcRec_H - ($redius * 1)), $arcRec_SX + ($arcRec_W - ($redius * 1)), $arcRec_SY + $arcRec_H, $color);//矩形三
        imagefilledarc($imageObj, $arcRec_SX + $redius, $arcRec_SY + $redius, $redius * 2, $redius * 2, 180, 270, $color, IMG_ARC_PIE); //四分之一圆 - 左上
        imagefilledarc($imageObj, $arcRec_SX + ($arcRec_W - $redius), $arcRec_SY + $redius, $redius * 2, $redius * 2, 270, 360, $color, IMG_ARC_PIE); //四分之一圆 - 右上
        imagefilledarc($imageObj, $arcRec_SX + $redius, $arcRec_SY + ($arcRec_H - $redius), $redius * 2, $redius * 2, 90, 180, $color, IMG_ARC_PIE); //四分之一圆 - 左下
        imagefilledarc($imageObj, $arcRec_SX + ($arcRec_W - $redius), $arcRec_SY + ($arcRec_H - $redius), $redius * 2, $redius * 2, 0, 90, $color, IMG_ARC_PIE); //四分之一圆 - 右下
    }
}