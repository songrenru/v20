<?php

namespace app\pay\model\service\libs\icbc;

use Exception;

class RSA{
	public static function sign($content,$privateKey,$algorithm){
		if(IcbcConstants::$SIGN_SHA1RSA_ALGORITHMS == $algorithm){
			openssl_sign($content,$signature,"-----BEGIN PRIVATE KEY-----\n".$privateKey."\n-----END PRIVATE KEY-----", OPENSSL_ALGO_SHA1);
		}elseif (IcbcConstants::$SIGN_SHA256RSA_ALGORITHMS == $algorithm) {
			openssl_sign($content,$signature,"-----BEGIN PRIVATE KEY-----\n".$privateKey."\n-----END PRIVATE KEY-----", OPENSSL_ALGO_SHA256);
		}else{
			throw new Exception("Only support OPENSSL_ALGO_SHA1 or OPENSSL_ALGO_SHA256 algorithm signature!");
		}
		return base64_encode($signature);
	}

	public static function verify($content,$signature,$publicKey,$algorithm){
		if(IcbcConstants::$SIGN_SHA1RSA_ALGORITHMS == $algorithm){
			return openssl_verify($content,base64_decode($signature),"-----BEGIN PUBLIC KEY-----\n".$publicKey."\n-----END PUBLIC KEY-----", OPENSSL_ALGO_SHA1);
		}elseif (IcbcConstants::$SIGN_SHA256RSA_ALGORITHMS == $algorithm) {
			return openssl_verify($content,base64_decode($signature),"-----BEGIN PUBLIC KEY-----\n".$publicKey."\n-----END PUBLIC KEY-----", OPENSSL_ALGO_SHA256);
		}else{
			throw new Exception("Only support OPENSSL_ALGO_SHA1 or OPENSSL_ALGO_SHA256 algorithm signature verify!");
		}
	}
}
?>