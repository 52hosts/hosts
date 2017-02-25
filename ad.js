/*


     ::::::::   :::::::::    ::::::::   ::::::::::        ::::::::   :::::::::: 
    :+:    :+:  :+:    :+:  :+:    :+:  :+:              :+:    :+:  :+:        
    +:+         +:+    +:+  +:+         +:+              +:+         +:+        
    +#+         +#+    +:+  +#+         +#++:++#         +#+         :#::+::#   
    +#+         +#+    +#+  +#+         +#+              +#+         +#+        
    #+#    #+#  #+#    #+#  #+#    #+#  #+#         #+#  #+#    #+#  #+#        
     ########   #########    ########   ##########  ###   ########   ###        


*/

function FindProxyForURL(url, host){

    /********************************************
    *                                           *
    *            关于 “mode = ” 的说明            *
    *                                           *
    *  0: 不使用代理 (仅屏蔽广告)                  *
    *  1: 使用http代理 (请在下方设置服务器和端口)    *
    *  2: 使用pac规则代理 (使用方法请看文件底部注释)  *
    *                                           *
    ********************************************/

    var mode = 0;

    //【以下http代理设置仅在 “mode = 1” 时有效】
    var domain = "203.210.7.41";
    //var port = "443";

    var hosts = [
//=========域名Start=========
//<ad.js_test>
"www.google.com",
"ssl.gstatic.com",
"lh3.googleusercontent.com",
"www.gstatic.com",
"ogs.google.com",
"www.google.com.hk",
//<youku>
"ad.api.3g.youku.com",
"statis.api.3g.youku.com",
"atm.youku.com",
"stat.youku.com",
//<sohu>
"agn.aty.sohu.com",
"mmg.aty.sohu.com",
/**********************************************
* version=201610061417                        *
* url=https://github.com/vokins/yhosts        *
* ( Baidu's domain name temporarily removed ) *
**********************************************/

//=========域名End=========
//【在分界线上面可以追加域名，两边加上双引号，使用逗号分隔。】
    ]
    var ips = [
//=========IP地址Start=========
//<iqiyi>
"101.227.14.80",
"101.227.14.81",
"101.227.14.82",
"101.227.14.83",
"101.227.14.84",
"101.227.14.85",
"101.227.14.86"
//=========IP地址End=========
//【在分界线上面可以追加IP地址，两边加上双引号，使用逗号分隔。】
    ]
    var rules = [
//【iOS 9.3.2 以上的系统由于系统限制，无法享受URL规则功能。】
//=========URL规则Start=========
"*pg.dmclock.com:8011/ec54.html*",
"*pg.dmclock.com/ec54.html*",
"http://x.jd.com/exsites?spread_type=*",
"http://ope.tanx.com/wap?i=*",
"http://mjs.sinaimg.cn/wap/cms/ad/*.js",
"*sdkapp.mobile.sina.cn/interface/sdk/sdkad.php",
"http://lives.l.qq.com/*&live=*",
"*/advert-sdk/*",
"*/?op=adv&*",
"*?adslot=*",
"*&product=adpublish&*",
"*/ad/getAd.*",
"*/AdvertList.xml",
"*/getads?*",
"*/getadsmetadata?*",
"*/ashx/Ad/*",
"*/MobileAdServer/*",
"*.adsense.*.js",
"*/advertise/*",
"*/adsense/*",
"*/baidustatic/cpro/ui/cm.js*",
"*/advertclient/*",
"*/api/advertising/*",
"*/resource/advert/*",
"*/advertisements?*",
"*/ad?service=getad&*",
"*/advert/list?*",
"*/json/ad/*",
"*/adv/list/*",
"*/mobileads/adsconf?*",
"*/ad_list.php?*",
"*.com/advert/*",
"*/api/advert/*",
"*.com/ad-bucket/*",
"*/get_ads.json?*",
"*/pushad/html/*",
"*/api/getNewAdInfo?*",
"*.com/i.js",
"*/ad_footer.js*",
"*.com/ad.js",
"*/stickyad.js",
"*/js/ad.*.js",
"*/js/ads_*.js",
"*.popunder.js",
"*/popunder/*.js",
"*.js?advertid=*",
"*/ad_show.js",
"*/cache/ad_js/*.js",
"http://guanggao.*.js",
"*/advert/*.js",
"*/advert.js",
"*/adv3.js",
"*/adv2.js",
"*/adv1.js",
"*/ads1.js",
"*/ads2.js",
"*/ads3.js",
"*/ads4.js",
"*/ads_images/*.js",
"*_advert.js",
"*.com/ads.js",
"*.com/advt/*.js",
"*/google_ads.js",
"*/doubleclick.js",
"*/js/tc.js",
"*/showad.js",
"*/guanggao.js",
"*.net/ad/*.js",
"*.com/ad/*.js",
"*/floatad.js",
"*/duilian.js",
"*/adfile/*.js",
"*/adbox.asp*",
"*/adshow.asp*",
"*/js/ads.*",
"*/ad/files/*",
"*.cn/adv/ad/*",
"*/advertising/*&id=*",
"*/adShow.*?id=*",
"http://adtag.*",
"*/html/ad/*",
"*/www/delivery/*",
"*.com/ads_*",
"*/main/s?*&local=yes",
"*.com/adsys/*",
"http://adv2.*",
"*/ad/index/*",
"*.php?ad_pos=*",
"*/advertpro/servlet/*",
"http://us-ads.*",
"*.cn/js/ads/*",
"*/json/advertise_list.*",
"*/getAdList.*",
"*/getad?*",
"*service/advertising/*",
"*cc/js/ads/*",
"*.com/js/ads/*",
"http://gg.*.js",
//=========URL规则End=========
//【在分界线上面可以追加URL规则，两边加上双引号，使用逗号分隔。】
    ]

    dnsResolve("baidu.com");
    var IS_AD = "PROXY example.com:443";
    switch (mode){
      case 0:
          IS_NOT_AD = "DIRECT";
          break;
      case 1:
          IS_NOT_AD = "PROXY " + domain + ":" + port;
          break;
      case 2:
          IS_NOT_AD = FindUserProxyForURL(url, host);
          break;
    }
    for (var n = 0; n < hosts.length; n++){
        if (dnsDomainIs(host, hosts[n])){
            return IS_AD;
        }
    }
    for (var n = 0; n < ips.length; n++){
        if (isInNet(host, ips[n], "203.210.7.41")){
            return IS_AD;
        }
    }
    for (var n = 0; n < rules.length; n++){
        if (shExpMatch(url, rules[n])){
            return IS_AD;
        }
    }
    return IS_NOT_AD;
}

/**********************************************
*                                             *
*            使用pac规则代理的方法               *
*                                             *
*  1. 设置“mode = 2”。                         *
*  2. 打开pac文件，将里面的“FindProxyForURL”替换  *
*     为“FindUserProxyForURL“后粘贴在下方即可。  *
*                                             *
**********************************************/
