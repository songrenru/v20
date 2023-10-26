<?php

namespace emoji;

use think\Exception;

class Emoji
{
    public function emojiDB()
    {
        $list = [
            [
                "file"=> "/static/wxapp/emojiDB/100.gif",
                "code"=> "/::)",
                "title"=> "微笑",
                "reg"=> "/\/::\)/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/101.gif",
                "code"=> "/::~",
                "title"=> "伤心",
                "reg"=> "/\/::~/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/102.gif",
                "code"=> "/::B",
                "title"=> "美女",
                "reg"=> "/\/::B/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/103.gif",
                "code"=> "/::|",
                "title"=> "发呆",
                "reg"=> "/\/::\|/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/104.gif",
                "code"=> "/:8-)",
                "title"=> "墨镜",
                "reg"=> "/\/:8-\)/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/105.gif",
                "code"=> "/::<",
                "title"=> "哭",
                "reg"=> "/\/::</g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/106.gif",
                "code"=> "/::$",
                "title"=> "羞",
                "reg"=> "/\/::\$/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/107.gif",
                "code"=> "/::X",
                "title"=> "哑",
                "reg"=> "/\/::X/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/108.gif",
                "code"=> "/::Z",
                "title"=> "睡",
                "reg"=> "/\/::Z/g"
            ],
            [
                "file"=> "/static/wxapp/emojiDB/105.gif",
                "code"=> "/::<",
                "title"=> "哭",
                "reg"=> "/\/::</g"
            ],
          [
            "file"=> "/static/wxapp/emojiDB/110.gif",
            "code"=> "/::-|",
            "title"=> "囧",
            "reg"=> "/\/::-\|/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/111.gif",
            "code"=> "/::@",
            "title"=> "怒",
            "reg"=> "/\/::@/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/112.gif",
            "code"=> "/::P",
            "title"=> "调皮",
            "reg"=> "/\/::P/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/113.gif",
            "code"=> "/::D",
            "title"=> "笑",
            "reg"=> "/\/::D/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/114.gif",
            "code"=> "/::O",
            "title"=> "惊讶",
            "reg"=> "/\/::O/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/115.gif",
            "code"=> "/::(",
            "title"=> "难过",
            "reg"=> "/\/::\(/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/116.gif",
            "code"=> "/::+",
            "title"=> "酷",
            "reg"=> "/\/::\+/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/117.gif",
            "code"=> "/:--b",
            "title"=> "汗",
            "reg"=> "/\/:--b/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/118.gif",
            "code"=> "/::Q",
            "title"=> "抓狂",
            "reg"=> "/\/::Q/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/119.gif",
            "code"=> "/::T",
            "title"=> "吐",
            "reg"=> "/\/::T/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/120.gif",
            "code"=> "/:,@P",
            "title"=> "笑",
            "reg"=> "/\/:,@P/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/121.gif",
            "code"=> "/:,@-D",
            "title"=> "快乐",
            "reg"=> "/\/:,@-D/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/122.gif",
            "code"=> "/::d",
            "title"=> "奇",
            "reg"=> "/\/::d/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/123.gif",
            "code"=> "/:,@o",
            "title"=> "傲",
            "reg"=> "/\/:,@o/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/124.gif",
            "code"=> "/::g",
            "title"=> "饿",
            "reg"=> "/\/::g/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/125.gif",
            "code"=> "/:|-)",
            "title"=> "累",
            "reg"=> "/\/:\|-\)/g"
          ],
          [
            "file"=> "/static/wxapp/emojiDB/126.gif",
            "code"=> "/::!",
            "title"=> "吓",
            "reg"=> "/\/::!/g"
          ]];

        return $list;
    }
}