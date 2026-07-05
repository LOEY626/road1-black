"use strict";

const routeData = [

  {

    "day": 1,

    "type": "walking",

    "from": "北碚·兼善中学",

    "to": "澄江镇→草街",

    "province": "重庆",

    "dist": 30,

    "ascent": 320,

    "hours": 7.0,

    "startCoord": [

      29.83,

      106.43

    ],

    "endCoord": [

      30.03,

      106.36

    ],

    "accommodation": "草街镇旅馆/民宿",

    "food": "澄江豆花饭",

    "foodQuery": "北碚美食",

    "stayQuery": "草街住宿",

    "risk": "沿国道212，5点出发避开日晒",

    "transitAdvice": "",

    "photoTheme": "嘉陵江晨雾·澄江老渡口",

    "photoTime": "清晨·5:00",

    "photoSuggestions": [

      "澄江老渡口",

      "国道212延伸",

      "嘉陵江晨曦"

    ],

    "weather": {

      "temp": "25~35°C",

      "condition": "晴转多云",

      "wind": "微风"

    }

  },

  {

    "day": 2,

    "type": "walking",

    "from": "草街",

    "to": "合川城区",

    "province": "重庆",

    "dist": 25,

    "ascent": 200,

    "hours": 6.0,

    "startCoord": [

      30.03,

      106.36

    ],

    "endCoord": [

      30.28,

      106.27

    ],

    "accommodation": "合川经济型酒店",

    "food": "合川桃片、合川肉片",

    "foodQuery": "合川美食",

    "stayQuery": "合川住宿",

    "risk": "沿国道212/省道",

    "transitAdvice": "",

    "photoTheme": "合川钓鱼城·江畔城景",

    "photoTime": "傍晚·黄金时刻",

    "photoSuggestions": [

      "钓鱼城",

      "嘉陵江畔",

      "合川老城"

    ],

    "weather": {

      "temp": "26~35°C",

      "condition": "晴",

      "wind": "微风"

    }

  },

  {

    "day": 3,

    "type": "walking",

    "from": "合川",

    "to": "太和镇",

    "province": "重庆",

    "dist": 28,

    "ascent": 180,

    "hours": 6.5,

    "startCoord": [

      30.28,

      106.27

    ],

    "endCoord": [

      30.45,

      106.13

    ],

    "accommodation": "太和镇旅馆",

    "food": "太和镇农家菜",

    "foodQuery": "太和镇美食",

    "stayQuery": "太和镇住宿",

    "risk": "涪江乡道车少，注意防暑",

    "transitAdvice": "",

    "photoTheme": "涪江乡道·江岸平原",

    "photoTime": "清晨/午后",

    "photoSuggestions": [

      "涪江蜿蜒",

      "乡道田野",

      "太和镇老街"

    ],

    "weather": {

      "temp": "26~36°C",

      "condition": "晴转多云",

      "wind": "1-2级"

    }

  },

  {

    "day": 4,

    "type": "walking",

    "from": "太和镇",

    "to": "潼南",

    "province": "重庆",

    "dist": 30,

    "ascent": 150,

    "hours": 7.0,

    "startCoord": [

      30.45,

      106.13

    ],

    "endCoord": [

      30.19,

      105.84

    ],

    "accommodation": "潼南城区酒店",

    "food": "潼南太安鱼",

    "foodQuery": "潼南美食",

    "stayQuery": "潼南住宿",

    "risk": "可半程后坐公交",

    "transitAdvice": "",

    "photoTheme": "涪江日落·潼南告别",

    "photoTime": "傍晚",

    "photoSuggestions": [

      "涪江落日",

      "潼南大佛",

      "重庆段终点"

    ],

    "weather": {

      "temp": "26~36°C",

      "condition": "多云",

      "wind": "微风"

    }

  },

  {

    "day": 5,

    "type": "transit",

    "from": "潼南",

    "to": "广元站",

    "province": "重庆→四川",

    "dist": 0,

    "ascent": 0,

    "hours": 0,

    "startCoord": [

      30.19,

      105.84

    ],

    "endCoord": [

      32.44,

      105.84

    ],

    "accommodation": "广元酒店",

    "food": "广元蒸凉面",

    "foodQuery": "广元美食",

    "stayQuery": "广元住宿",

    "risk": "提前购票，成都中转",

    "transitAdvice": "潼南→成都→广元(动车2.5h)",

    "photoTheme": "车窗风景·广元入蜀",

    "photoTime": "全天",

    "photoSuggestions": [

      "成都东站",

      "川北田野",

      "广元站"

    ],

    "weather": {

      "temp": "24~33°C",

      "condition": "多云",

      "wind": "微风"

    }

  },

  {

    "day": 6,

    "type": "walking",

    "from": "广元",

    "to": "昭化古城→剑门关镇",

    "province": "四川",

    "dist": 30,

    "ascent": 350,

    "hours": 7.0,

    "startCoord": [

      32.44,

      105.84

    ],

    "endCoord": [

      32.18,

      105.56

    ],

    "accommodation": "剑门关镇客栈",

    "food": "剑门关豆腐宴",

    "foodQuery": "剑门关美食",

    "stayQuery": "剑门关住宿",

    "risk": "沿老108国道，注意弯道",

    "transitAdvice": "",

    "photoTheme": "昭化古城·剑门雄关",

    "photoTime": "清晨/傍晚",

    "photoSuggestions": [

      "昭化古城墙",

      "剑门关远眺",

      "老108国道"

    ],

    "weather": {

      "temp": "23~32°C",

      "condition": "晴",

      "wind": "微风"

    }

  },

  {

    "day": 7,

    "type": "walking",

    "from": "剑门关镇",

    "to": "汉阳镇→普安镇",

    "province": "四川",

    "dist": 28,

    "ascent": 300,

    "hours": 6.5,

    "startCoord": [

      32.18,

      105.56

    ],

    "endCoord": [

      32.02,

      105.46

    ],

    "accommodation": "普安镇旅馆",

    "food": "普安镇家常菜",

    "foodQuery": "普安镇美食",

    "stayQuery": "普安镇住宿",

    "risk": "古柏道拦马墙，注意绊脚",

    "transitAdvice": "",

    "photoTheme": "拦马墙·千年古柏道",

    "photoTime": "清晨·顺光",

    "photoSuggestions": [

      "拦马墙古道",

      "千年古柏",

      "蜀道青石板"

    ],

    "weather": {

      "temp": "22~31°C",

      "condition": "晴转多云",

      "wind": "2级"

    }

  },

  {

    "day": 8,

    "type": "walking",

    "from": "普安镇",

    "to": "柳沟镇→武连镇",

    "province": "四川",

    "dist": 32,

    "ascent": 350,

    "hours": 7.5,

    "startCoord": [

      32.02,

      105.46

    ],

    "endCoord": [

      31.88,

      105.3

    ],

    "accommodation": "武连镇旅馆",

    "food": "武连镇农家菜",

    "foodQuery": "武连镇美食",

    "stayQuery": "武连镇住宿",

    "risk": "蜀道与108穿插，傍晚前到镇",

    "transitAdvice": "",

    "photoTheme": "蜀道纵深·川北丘陵",

    "photoTime": "清晨/傍晚",

    "photoSuggestions": [

      "蜀道古桥",

      "川北丘陵",

      "柳沟镇老屋"

    ],

    "weather": {

      "temp": "22~31°C",

      "condition": "多云",

      "wind": "2级"

    }

  },

  {

    "day": 9,

    "type": "walking",

    "from": "武连镇",

    "to": "梓潼县",

    "province": "四川",

    "dist": 30,

    "ascent": 280,

    "hours": 7.0,

    "startCoord": [

      31.88,

      105.3

    ],

    "endCoord": [

      31.64,

      105.16

    ],

    "accommodation": "梓潼县城旅馆",

    "food": "梓潼酥饼",

    "foodQuery": "梓潼美食",

    "stayQuery": "梓潼住宿",

    "risk": "最后一段蜀道，约120km",

    "transitAdvice": "",

    "photoTheme": "梓潼终点·蜀道告别",

    "photoTime": "清晨/傍晚",

    "photoSuggestions": [

      "七曲山大庙",

      "蜀道终点",

      "四川告别"

    ],

    "weather": {

      "temp": "22~32°C",

      "condition": "晴",

      "wind": "1-2级"

    }

  },

  {

    "day": 10,

    "type": "transit",

    "from": "梓潼",

    "to": "绵阳→兰州→临夏县",

    "province": "四川→甘肃",

    "dist": 0,

    "ascent": 0,

    "hours": 0,

    "startCoord": [

      31.64,

      105.16

    ],

    "endCoord": [

      35.48,

      103.01

    ],

    "accommodation": "临夏县宾馆",

    "food": "临夏手抓羊肉",

    "foodQuery": "临夏美食",

    "stayQuery": "临夏住宿",

    "risk": "提前购票，入甘注意适应",

    "transitAdvice": "梓潼→绵阳(班车1h)→兰州(火车6h)→临夏县(班车2h)",

    "photoTheme": "入甘记·黄土高原",

    "photoTime": "全天",

    "photoSuggestions": [

      "绵阳站",

      "火车窗外秦岭",

      "兰州西站",

      "临夏晚霞"

    ],

    "weather": {

      "temp": "18~28°C",

      "condition": "晴",

      "wind": "2-3级"

    }

  },

  {

    "day": 11,

    "type": "walking",

    "from": "临夏县",

    "to": "耳子屲梁→太子山",

    "province": "甘肃",

    "dist": 30,

    "ascent": 500,

    "hours": 7.0,

    "startCoord": [

      35.48,

      103.01

    ],

    "endCoord": [

      35.4,

      103.2

    ],

    "accommodation": "太子山客栈",

    "food": "临夏面片",

    "foodQuery": "临夏美食",

    "stayQuery": "太子山住宿",

    "risk": "海拔2000-3000m，注意适应",

    "transitAdvice": "",

    "photoTheme": "太子山·高原天路",

    "photoTime": "清晨·顺光",

    "photoSuggestions": [

      "耳子屲梁",

      "太子山雪峰",

      "旅游大通道"

    ],

    "weather": {

      "temp": "12~24°C",

      "condition": "晴",

      "wind": "3级"

    }

  },

  {

    "day": 12,

    "type": "walking",

    "from": "太子山观景台",

    "to": "和政县方向",

    "province": "甘肃",

    "dist": 32,

    "ascent": 450,

    "hours": 7.5,

    "startCoord": [

      35.4,

      103.2

    ],

    "endCoord": [

      35.43,

      103.35

    ],

    "accommodation": "和政县城宾馆",

    "food": "和政手抓",

    "foodQuery": "和政美食",

    "stayQuery": "和政住宿",

    "risk": "高原草甸，牦牛群，防晒防风",

    "transitAdvice": "",

    "photoTheme": "高原草甸·牦牛群",

    "photoTime": "清晨/傍晚",

    "photoSuggestions": [

      "草甸花海",

      "牦牛群",

      "高原公路",

      "和政县城"

    ],

    "weather": {

      "temp": "10~23°C",

      "condition": "晴",

      "wind": "3-4级"

    }

  },

  {

    "day": 13,

    "type": "walking",

    "from": "和政县",

    "to": "积石山县方向",

    "province": "甘肃",

    "dist": 30,

    "ascent": 400,

    "hours": 7.0,

    "startCoord": [

      35.43,

      103.35

    ],

    "endCoord": [

      35.72,

      102.88

    ],

    "accommodation": "积石山宾馆",

    "food": "积石山手抓",

    "foodQuery": "积石山美食",

    "stayQuery": "积石山住宿",

    "risk": "游客极少，信号不稳定",

    "transitAdvice": "",

    "photoTheme": "积石山·无人之境",

    "photoTime": "清晨/傍晚",

    "photoSuggestions": [

      "积石山远景",

      "高原公路",

      "牧民帐篷"

    ],

    "weather": {

      "temp": "10~23°C",

      "condition": "多云",

      "wind": "3级"

    }

  },

  {

    "day": 14,

    "type": "walking",

    "from": "积石山县",

    "to": "班车→兰州七里河",

    "province": "甘肃",

    "dist": 30,

    "ascent": 200,

    "hours": 6.0,

    "startCoord": [

      35.72,

      102.88

    ],

    "endCoord": [

      36.07,

      103.78

    ],

    "accommodation": "兰州七里河酒店",

    "food": "兰州牛肉面",

    "foodQuery": "兰州美食",

    "stayQuery": "兰州住宿",

    "risk": "最后半天徒步收尾",

    "transitAdvice": "上午15km后积石山→兰州班车3h",

    "photoTheme": "抵达·黄河铁桥",

    "photoTime": "清晨",

    "photoSuggestions": [

      "中山桥",

      "黄河第一桥",

      "终点合影"

    ],

    "weather": {

      "temp": "18~29°C",

      "condition": "晴",

      "wind": "2级"

    }

  }

];

const totalDist = routeData.reduce((s,d)=>s+d.dist,0);

const LANDMARKS = [

  {name:"嘉陵江",lat:29.870,lng:106.350},

  {name:"钓鱼城",lat:29.988,lng:106.282},

  {name:"古蜀道",lat:32.115,lng:105.460},

  {name:"拦马墙",lat:32.118,lng:105.420},

  {name:"涪江岸",lat:30.250,lng:105.950},

  {name:"川北丘",lat:32.000,lng:105.400},

  {name:"高原草甸",lat:35.400,lng:102.950},

  {name:"太子山",lat:35.396,lng:102.902},

  {name:"积石山",lat:35.720,lng:102.877},

  {name:"黄河铁桥",lat:36.061,lng:103.817},

  {name:"剑门关",lat:32.148,lng:105.510}

];

const TOWN_LANDMARKS = [

  {name:"北碚·兼善中学",lat:29.836,lng:106.430},

  {name:"澄江镇",lat:29.865,lng:106.362},

  {name:"草街",lat:29.902,lng:106.305},

  {name:"合川",lat:29.970,lng:106.264},

  {name:"合川城区",lat:29.972,lng:106.260},

  {name:"太和镇",lat:30.283,lng:105.950},

  {name:"潼南",lat:30.183,lng:105.840},

  {name:"广元",lat:32.435,lng:105.850},

  {name:"广元站",lat:32.435,lng:105.848},

  {name:"昭化古城",lat:32.323,lng:105.640},

  {name:"剑门关镇",lat:32.150,lng:105.520},

  {name:"汉阳镇",lat:32.023,lng:105.443},

  {name:"普安镇",lat:32.128,lng:105.423},

  {name:"柳沟镇",lat:32.048,lng:105.335},

  {name:"武连镇",lat:31.983,lng:105.272},

  {name:"梓潼",lat:31.633,lng:105.163},

  {name:"梓潼县",lat:31.635,lng:105.160},

  {name:"绵阳",lat:31.470,lng:104.730},

  {name:"兰州",lat:36.060,lng:103.790},

  {name:"兰州七里河",lat:36.058,lng:103.782},

  {name:"临夏县",lat:35.497,lng:102.993},

  {name:"耳子屲梁",lat:35.442,lng:102.862},

  {name:"太子山观景台",lat:35.402,lng:102.895},

  {name:"和政县",lat:35.428,lng:103.342},

  {name:"和政县方向",lat:35.428,lng:103.342},

  {name:"积石山县",lat:35.720,lng:102.877},

  {name:"积石山县方向",lat:35.720,lng:102.877}

];

const photoData = [

  {

    "day": 1,

    "theme": "嘉陵江晨雾·澄江老渡口",

    "time": "清晨",

    "tags": [

      "Photo",

      "Video",

      "Drone"

    ],

    "desc": "北碚澄江老渡口"

  },

  {

    "day": 2,

    "theme": "合川钓鱼城·江畔城景",

    "time": "傍晚",

    "tags": [

      "Photo",

      "Drone"

    ],

    "desc": "合川钓鱼城"

  },

  {

    "day": 3,

    "theme": "涪江乡道·江岸平原",

    "time": "清晨",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "太和镇涪江乡道"

  },

  {

    "day": 4,

    "theme": "涪江日落·潼南告别",

    "time": "傍晚",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "潼南涪江落日"

  },

  {

    "day": 5,

    "theme": "车窗风景·广元入蜀",

    "time": "全天",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "动车入川"

  },

  {

    "day": 6,

    "theme": "昭化古城·剑门雄关",

    "time": "清晨/傍晚",

    "tags": [

      "Photo",

      "Drone"

    ],

    "desc": "昭化古城远眺剑门"

  },

  {

    "day": 7,

    "theme": "拦马墙·千年古柏道",

    "time": "清晨",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "剑阁拦马墙古道"

  },

  {

    "day": 8,

    "theme": "蜀道纵深·川北丘陵",

    "time": "清晨/傍晚",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "普安至武连"

  },

  {

    "day": 9,

    "theme": "梓潼终点·蜀道告别",

    "time": "抵达",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "梓潼七曲山大庙"

  },

  {

    "day": 10,

    "theme": "入甘记·黄土高原",

    "time": "全天",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "秦岭到黄土高原"

  },

  {

    "day": 11,

    "theme": "太子山·高原天路",

    "time": "清晨",

    "tags": [

      "Photo",

      "Drone"

    ],

    "desc": "太子山旅游大通道"

  },

  {

    "day": 12,

    "theme": "高原草甸·牦牛群",

    "time": "清晨/傍晚",

    "tags": [

      "Photo",

      "Video"

    ],

    "desc": "和政高原草甸"

  },

  {

    "day": 13,

    "theme": "积石山·无人之境",

    "time": "清晨/傍晚",

    "tags": [

      "Photo",

      "Drone"

    ],

    "desc": "积石山深处"

  },

  {

    "day": 14,

    "theme": "抵达·黄河铁桥",

    "time": "抵达时刻",

    "tags": [

      "Photo",

      "Video",

      "Drone"

    ],

    "desc": "中山桥抵达"

  }

];

const gearData = [

  {"category":"徒步装备","items":["30L主背包","徒步鞋","登山杖","头灯/手电","水壶/水袋","背包雨罩","防晒帽","墨镜","魔术头巾"]},

  {"category":"衣物","items":["硬壳冲锋衣","软壳","羽绒服","防晒外套","速干T恤x3","速干裤x2","徒步袜x3","内衣裤x3"]},

  {"category":"摄影","items":["10L摄影包","DJI Air 3S","DJI Action 4","DJI Pocket 3","手机","储存卡x2","读卡器","镜头清洁布"]},

  {"category":"电子","items":["25000mAh充电宝","数据线x3","多口充电器","耳机"]},

  {"category":"药品","items":["碘伏棉签","创可贴x10","布洛芬","蒙脱石散","999感冒灵","口服补液盐","驱蚊液","防晒霜"]},

  {"category":"路餐","items":["坚果面包","馒头x4","压缩饼干","混合坚果","鸡胸肉x4","卤牛肉x4","士力架x4"]},

  {"category":"证件","items":["身份证/学生证","银行卡","现金","哨子","雨衣","防水袋x3","压缩毛巾"]}

];

let currentRoutePlan=[],routeMap=null,mapPolyline=null,mapMarkers=[];

const $=id=>document.getElementById(id);

function showToast(m,d){let t=$("toast");if(!t)return;t.textContent=m;t.classList.add("active");clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove("active");},d||2200);}

function estimateWalkingTime(k){var h=Math.floor(k/4),m=Math.round((k/4-h)*60),s="";if(h)s+=h+"小时";if(m)s+=m+"分";if(!h&&!m)s+="<30分";return s;}

function estimateTransitTime(k){var h=Math.round(k/40);return h<1?"约30分":"约"+h+"小时";}

function renderDefaultRoute(){

var plan = routeData.map(function(d){

var dv = d.dist||0;

var h = d.hours||(dv>0?Math.round(dv/4*10)/10:0);

var hs = (h>0?Math.floor(h)+"小时":"")+(h%1>0?Math.round((h%1)*60)+"分":"");

var wt = d.weather||{};

var desc = d.risk||"";

var sup = d.food||(d.type==="transit"?"沿途可在车站补给":"沿途有补给");

if(d.type==="transit"){

return {day:d.day,start:d.from,end:d.to,distance:"接驳日",distanceNum:0,walkingTime:"公共交通接驳",isTransit:true,description:d.transitAdvice||desc,supply:sup,accommodation:d.accommodation||"",risk:d.risk||"",backupTransport:"",routeLandmarks:(d.from+"→"+d.to).split("→").filter(function(n){return n&&n!=="班车";}),weather:wt,startLng:d.startCoord[1],startLat:d.startCoord[0],endLng:d.endCoord[1],endLat:d.endCoord[0]};

}else{

return {day:d.day,start:d.from,end:d.to,distance:dv+"km",distanceNum:dv,walkingTime:hs||"约"+dv/3+"小时",isTransit:false,description:desc,supply:sup,accommodation:d.accommodation||"",risk:d.risk||"",backupTransport:"可找当地班车",routeLandmarks:(d.from+"→"+d.to).split("→").filter(function(n){return n&&n!=="班车";}),weather:wt,startLng:d.startCoord[1],startLat:d.startCoord[0],endLng:d.endCoord[1],endLat:d.endCoord[0]};

}});

renderItinerary(plan);}

function renderItinerary(plan){var list=$("itineraryList"),empty=$("itineraryEmpty");list.innerHTML="";if(!plan||plan.length===0){if(empty)empty.style.display="block";if($("progressFill"))$("progressFill").style.width="0%";return;}if(empty)empty.style.display="none";if(plan.needsAdjust){var nb=document.createElement("div");nb.className="day-adjust-note";nb.style.marginBottom="16px";nb.textContent="当前天数与距离不完全匹配，已重新分配。";list.appendChild(nb);}var totKm=0,walkDays=0,transitDays=0;plan.forEach(function(day){totKm+=day.distanceNum||0;if(day.isTransit)transitDays++;else walkDays++;var card=document.createElement("div");card.className="day-card"+(day.isTransit?" transit-day":"");var badges=day.isTransit?'<span class="day-badge transit">接驳</span>':'<span class="day-badge walking">徒步</span>';var se=encodeURIComponent(day.start),ee=encodeURIComponent(day.end);card.innerHTML='<div class="day-header"><span class="day-num">Day '+day.day+'</span>'+badges+'</div><div class="day-route"><strong>'+day.start+'</strong> &rarr; <strong>'+day.end+'</strong></div><div class="day-stats"><div class="day-stat"><div class="day-stat-label">距离</div><div class="day-stat-value">'+day.distance+'</div></div><div class="day-stat"><div class="day-stat-label">时间</div><div class="day-stat-value">'+day.walkingTime+'</div></div><div class="day-stat"><div class="day-stat-label">模式</div><div class="day-stat-value">'+(day.isTransit?"接驳":"徒步")+'</div></div></div><div class="day-detail-tags"><span class="detail-tag route-tag">路线：'+day.description+'</span><span class="detail-tag supply-tag">补给：'+day.supply+'</span><span class="detail-tag stay-tag">住宿：'+day.accommodation+'</span><span class="detail-tag risk-tag">风险：'+day.risk+'</span><span class="detail-tag transport-tag">交通：'+day.backupTransport+'</span></div><div class="service-plate"><a href="https://www.amap.com/dir?from[lng]='+day.startLng+'&from[lat]='+day.startLat+'&from[name]='+se+'&to[lng]='+day.endLng+'&to[lat]='+day.endLat+'&to[name]='+ee+'" target="_blank" class="service-btn service-amap">高德导航</a><a href="https://www.2bulu.com/search.htm?key='+ee+'" target="_blank" class="service-btn service-2bulu">两步路</a><a href="https://hotels.ctrip.com/hotel/?keyword='+ee+'" target="_blank" class="service-btn service-stay">订住宿</a><a href="https://www.dianping.com/search/keyword/'+ee+'/美食" target="_blank" class="service-btn service-food">美食</a><a href="https://www.windy.com/?lat=33.5,105.0,7" target="_blank" class="service-btn service-windy">Windy天气</a><a href="https://www.12306.cn/index/" target="_blank" class="service-btn service-ticket">订票</a></div>';list.appendChild(card);});setTimeout(function(){list.querySelectorAll(".day-card").forEach(function(c,i){setTimeout(function(){c.classList.add("visible");},i*60);});},50);var td=plan.length,avg=td>0?Math.round(totKm/td):0;["heroDays","heroTotalKm","heroDailyKm"].forEach(function(id){var e=$(id);if(e)e.textContent=["","",avg][["heroDays","heroTotalKm","heroDailyKm"].indexOf(id)];if(id==="heroDays")e.textContent=td;if(id==="heroTotalKm")e.textContent=totKm;if(id==="heroDailyKm")e.textContent=avg+"km/天";});$("statDays").textContent=td+"天";$("statTotalKm").textContent=totKm+"km";$("statWalkingDays").textContent=walkDays+"天";$("statTransitDays").textContent=transitDays+"天";var pct=td>0?Math.round((walkDays/td)*100):0;var pf=$("progressFill");if(pf)pf.style.width=pct+"%";["progressCompleted","progressCompletedKm","progressRemainingKm"].forEach(function(id){var e=$(id);if(!e)return;if(id==="progressCompleted")e.textContent=pct;else if(id==="progressCompletedKm")e.textContent="0";else if(id==="progressRemainingKm")e.textContent=totKm;});updateMap(plan);initPhotoGrid(plan);setTimeout(function(){document.querySelectorAll(".photo-card").forEach(function(c,i){setTimeout(function(){c.classList.add("visible");},i*60);});},200);initSafetyChecklist();currentRoutePlan=plan;}

function initMap(){
  if(routeMap)return;
  try{
    routeMap=L.map("routeMap",{center:[32,105],zoom:6,zoomControl:true});
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"&copy; OSM &copy; CARTO",maxZoom:19}).addTo(routeMap);
    setTimeout(function(){routeMap.invalidateSize();},300);
  }catch(e){console.warn("Map:",e);}
}

function updateMap(plan){

  if(!routeMap)initMap();

  if(!routeMap)return;

  if(mapPolyline)routeMap.removeLayer(mapPolyline);

  mapMarkers.forEach(function(m){routeMap.removeLayer(m);});

  mapMarkers=[];

  var allLm=LANDMARKS.concat(TOWN_LANDMARKS);

  var vis={},pts=[];

  plan.forEach(function(day){

    if(day.routeLandmarks)day.routeLandmarks.forEach(function(n){

      var lm=allLm.find(function(l){return l.name===n;});

      if(lm&&lm.lat&&lm.lng&&!vis[lm.name]){

        vis[lm.name]=true;

        pts.push([lm.lat,lm.lng]);

      }

    });

  });

  if(pts.length>0){console.log('Polyline pts: '+pts.length);
    mapPolyline=L.polyline(pts,{color:"#ff2d78",weight:3,opacity:0.9}).addTo(routeMap);
    setTimeout(function(){routeMap.invalidateSize();routeMap.fitBounds(mapPolyline.getBounds().pad(0.15));},400);
  }
  plan.forEach(function(day,i){
    var name=day.end;

    var em=allLm.find(function(l){return l.name===name;});

    if(em&&em.lat&&em.lng){

      mapMarkers.push(L.marker([em.lat,em.lng],{icon:L.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#00f0ff;box-shadow:0 0 8px rgba(0,240,255,0.7)"></div>',iconSize:[10,10],iconAnchor:[5,5]})}).addTo(routeMap).bindPopup("<strong>Day "+day.day+"</strong><br>"+day.start+"→"+day.end+"<br>"+day.distance));

    }

  });

  if(plan.length>0){

    var sm=allLm.find(function(l){return l.name===plan[0].start;});

    if(sm&&sm.lat&&sm.lng){

      mapMarkers.push(L.marker([sm.lat,sm.lng],{icon:L.divIcon({className:"",html:'<div style="width:12px;height:12px;border-radius:50%;background:#ff2d78;box-shadow:0 0 10px rgba(255,45,120,0.8)"></div>',iconSize:[12,12],iconAnchor:[6,6]})}).addTo(routeMap).bindPopup("<strong>起点</strong><br>"+plan[0].start));

    }

  }

  if(pts.length===0&&mapMarkers.length>0){console.log('No polyline, markers only: '+mapMarkers.length);
    var group=L.featureGroup(mapMarkers);
    setTimeout(function(){routeMap.invalidateSize();routeMap.fitBounds(group.getBounds().pad(0.2));},400);
  }
}

function initPhotoGrid(plan){var g=$("photoGrid");if(!g)return;g.innerHTML="";if(!plan||plan.length===0){g.innerHTML='<div class="photo-card"><div class="photo-placeholder">生成路书后查看摄影计划</div></div>';return;}var th=["嘉陵江","古蜀道","拦马墙","涪江岸","川北丘","高原草甸","太子山","积石山","无人区","黄河铁桥"];plan.forEach(function(day){var c=document.createElement("div");c.className="photo-card";c.innerHTML='<div class="photo-placeholder">Day '+day.day+' '+(day.isTransit?"接驳":"徒步")+'</div><div class="photo-info"><div class="photo-day">Day '+day.day+' '+day.start+'→'+day.end+'</div><div class="photo-theme">'+th[day.day%th.length]+'</div></div>';g.appendChild(c);});}

function renderGear(){var ct=$("gearContainer");if(!ct)return;ct.innerHTML="";gearData.forEach(function(cat,ci){var key="gk_"+ci;var saved=[];try{saved=JSON.parse(localStorage.getItem(key)||"[]");}catch(e){}var div=document.createElement("div");div.className="gear-category";var itemsHtml="";cat.items.forEach(function(it,ii){itemsHtml+='<div class="gear-item'+(saved.indexOf(ii)>=0?" checked":"")+'"><input type="checkbox" data-key="'+key+'" data-idx="'+ii+'"'+(saved.indexOf(ii)>=0?" checked":"")+'><label>'+it+'</label></div>';});div.innerHTML='<div class="gear-category-header" onclick="toggleGearCategory(this)"><span class="gear-cat-name">'+cat.category+'</span><span class="gear-cat-count">'+cat.items.length+'项</span><span class="gear-toggle">&#9660;</span></div><div class="gear-category-body">'+itemsHtml+'</div>';ct.appendChild(div);});ct.addEventListener("change",function(e){if(e.target.type!=="checkbox")return;var key=e.target.dataset.key,idx=parseInt(e.target.dataset.idx),saved=[];try{saved=JSON.parse(localStorage.getItem(key)||"[]");}catch(e){}if(e.target.checked){if(saved.indexOf(idx)<0)saved.push(idx);}else{saved=saved.filter(function(s){return s!==idx;});}localStorage.setItem(key,JSON.stringify(saved));e.target.closest(".gear-item").classList.toggle("checked",e.target.checked);});}

window.toggleGearCategory=function(h){h.closest(".gear-category").classList.toggle("open");};

function initSafetyChecklist(){var ct=$("checklistContainer");if(!ct)return;var items=ct.querySelectorAll(".checklist-item");var total=items.length;var pg=$("checklistProgress"),pt=$("checklistTotal");if(pt)pt.textContent=total;function upd(){var done=0;items.forEach(function(it){var cb=it.querySelector("input[type=checkbox]");if(cb&&cb.checked)done++;it.classList.toggle("checked",cb&&cb.checked);});if(pg)pg.textContent=done;}items.forEach(function(it){var cb=it.querySelector("input[type=checkbox]");if(!cb)return;var key=it.dataset.key||"";try{if(localStorage.getItem(key)==="1")cb.checked=true;}catch(e){}cb.addEventListener("change",function(){try{localStorage.setItem(key,this.checked?"1":"0");}catch(e){}upd();});it.addEventListener("click",function(e){if(e.target.tagName!=="INPUT"){cb.checked=!cb.checked;cb.dispatchEvent(new Event("change"));}});});upd();}

function initActions(){var cp=$("btnCopy"),ex=$("btnExport");if(cp)cp.addEventListener("click",function(){if(!currentRoutePlan||currentRoutePlan.length===0){showToast("先生成路书",2000);return;}var txt="";currentRoutePlan.forEach(function(d){txt+="Day "+d.day+" | "+d.start+"\u2192"+d.end+"\n\n  距离："+d.distance+"\n\n  路线："+d.description+"\n\n  补给："+d.supply+"\n\n  住宿："+d.accommodation+"\n\n  风险："+d.risk+"\n\n";});navigator.clipboard.writeText(txt).then(function(){showToast("已复制",1800);}).catch(function(){showToast("复制失败",2000);});});if(ex)ex.addEventListener("click",function(){if(!currentRoutePlan||currentRoutePlan.length===0){showToast("先生成路书",2000);return;}var txt="=== Loey 路书 ===\n\n"+new Date().toLocaleDateString("zh-CN")+"\n\n";currentRoutePlan.forEach(function(d){txt+="Day "+d.day+"\n\n"+d.start+"→"+d.end+"\n\n距离："+d.distance+"\n\n路线："+d.description+"\n\n补给："+d.supply+"\n\n住宿："+d.accommodation+"\n\n风险："+d.risk+"\n\n";});txt+="--- 安全第一 ---";var b=new Blob([txt],{type:"text/plain;charset=utf-8"});var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="Loey_"+new Date().toISOString().slice(0,10)+".txt";a.click();URL.revokeObjectURL(a.href);showToast("已导出",1800);});}

function initNav(){var its=document.querySelectorAll(".nav-item"),secs=document.querySelectorAll(".section,.hero");function upd(){var sy=window.scrollY+120,ai=0;secs.forEach(function(s,i){if(s.offsetTop<=sy)ai=i;});its.forEach(function(it,i){it.classList.toggle("active",i===ai);});}window.addEventListener("scroll",upd,{passive:true});window.addEventListener("resize",upd,{passive:true});upd();}

function initBackToTop(){var btn=$("backToTop");if(!btn)return;window.addEventListener("scroll",function(){btn.classList.toggle("visible",window.scrollY>400);},{passive:true});btn.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});}

function initBottomNavHide(){var nav=$("bottomNav"),ls=0;if(!nav)return;window.addEventListener("scroll",function(){var st=window.scrollY;if(st>ls&&st>200)nav.classList.add("hidden");else if(st<ls)nav.classList.remove("hidden");ls=st;},{passive:true});}

document.addEventListener("DOMContentLoaded",function(){initActions();renderGear();initNav();initBackToTop();initBottomNavHide();initMap();renderDefaultRoute();});

