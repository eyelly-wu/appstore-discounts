<div align="center">
  <p style="font-size: 18px;">An open-source App Store discounts tracker built on GitHub Actions, supporting RSS, Telegram and DingTalk notifications</p>


English | [简体中文](https://github.com/eyelly-wu/appstore-discounts/blob/main/README_zh-CN.md)



[![github-stars](https://img.shields.io/github/stars/eyelly-wu/appstore-discounts?style=social "github-stars")](https://github.com/eyelly-wu/appstore-discounts/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/eyelly-wu/appstore-discounts/dev "last-commit")](https://github.com/eyelly-wu/appstore-discounts/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/eyelly-wu/appstore-discounts "github-issues")](https://github.com/eyelly-wu/appstore-discounts/issues "github-issues")


</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Features](#features)<br/>
  [How to Subscribe](#how-to-subscribe)<br/>
  &emsp;&emsp;[RSS](#rss)<br/>
  &emsp;&emsp;[Telegram](#telegram)<br/>
  &emsp;&emsp;[DingTalk](#dingtalk)<br/>
  [Focus](#focus)<br/>
  [Operating Mechanism and Process](#operating-mechanism-and-process)<br/>
  [How to Contribute](#how-to-contribute)<br/>
  &emsp;&emsp;[1. Add  `Country or Region`  or  `App` ](#1-add--country-or-region--or--app)<br/>
  &emsp;&emsp;[2. Other](#2-other)<br/>
  [License](#license)<br/>

</details>


# Vision
Become the trusted savings assistant for  `App Store`  users, helping more people buy their favorite apps at discounted prices
# Features

* Support any  `App Store`  of any  `Country or Region`  (theoretically 🤔)
* Support tracking the price of  `App`  and  `In-App Purchases` 
* Support multiple ways to subscribe to discount information
   * RSS
   * Telegram
   * DingTalk
* Open source and free, anyone can contribute


# How to Subscribe

## RSS

|Code|Country or Region|RSS  Source|
|:-|:-|:-|
|cn|Mainland China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/cn.xml|
|hk|Hong Kong, China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/hk.xml|
|mo|Macao, China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/mo.xml|
|tw|Taiwan, China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/tw.xml|
|us|United States|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/us.xml|

## Telegram
Click  [![telegram](https://img.shields.io/badge/Telegram-Channel-blue?style=flat&logo=telegram "telegram")](https://t.me/appstore_discounts "telegram-channel")  to Subscribe
## DingTalk
Click  [![dingtalk](https://img.alicdn.com/imgextra/i3/O1CN01WMvMRG1ks3Ixc9x1v_!!6000000004738-55-tps-32-32.svg "dingtalk")](https://qr.dingtalk.com/action/joingroup?code=v1,k1,o9TXTPxGRNhCmrTUa4cHymeJCIcRiimCsH4FqEnbEWU=&_dt_no_comment=1&origin=11 "dingtalk")  to Subscribe
# Focus
So far, we've covered `5` `Countries or Regions` and  `118` `Apps` <br />Push notifications will only be sent when there are discounts for the listed  `Country or Region`  and  `App`  below. If your  `Country or Region`  or favorite  `App`  is not on the list, feel free to add it<br />
>Special Note:  `❌`  in the table below indicates that the app does not exist in the current  `Country or Region` 's  `App Store` 

|Serial Number|App ID|Mainland China（cn）|Hong Kong, China（hk）|Macao, China（mo）|Taiwan, China（tw）|United States（us）|
|:-|:-|:-|:-|:-|:-|:-|
|1|6499125531|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|
|2|1485101937|Juice Watch|Juice Watch|Juice Watch|Juice Watch|Juice Watch|
|3|703265535|FocusDots · 专注于当下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · Focus What Matters|
|4|6479307181|灵体侦测器|靈體偵測器|靈體偵測器|靈體偵測器|Ghostly Detector|
|5|488674899|雨雷達-實時天氣圖。 亞洲和中國。°|雨雷達 ° -實時天氣圖|雨雷達 ° -實時天氣圖|雨雷達 ° -實時天氣圖|RAIN RADAR °- sky weather NOAA|
|6|1636719674|锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局|鎖屏啟動 - 萬能桌面小組件&靈動島一鍵快捷指令手機捷徑佈局|鎖屏啟動 - 萬能桌面小組件&靈動島一鍵快捷指令手機捷徑佈局|鎖屏啟動 - 萬能桌面小組件&靈動島一鍵快捷指令手機捷徑佈局|Lock Launcher - Screen Widgets|
|7|1543163106|末剑二|❌|❌|❌|❌|
|8|6443812780|我的水世界求生|❌|❌|❌|❌|
|9|1344655035|蜡烛人|❌|❌|❌|❌|
|10|6446614518|画中世界|❌|❌|❌|❌|
|11|1159700098|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|To the Moon|
|12|1271620263|艾希 - ICEY|ICEY|ICEY|ICEY|ICEY|
|13|1361473095|Muse Dash 喵斯快跑|Muse Dash|Muse Dash|Muse Dash|Muse Dash|
|14|6476010032|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|
|15|510249014|水平仪 HD|水準管 HD|水準管 HD|水準管 HD|Level HD.|
|16|904237743|Things 3|Things 3|Things 3|Things 3|Things 3|
|17|1622341132|iSleeper - 梦话鼾声记录与睡眠监测|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper: Sleep Tracker|
|18|900833042|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|
|19|1467880680|LEDot|LEDot|LEDot|LEDot|LEDot|
|20|1455055663|皮皮虾专业版|❌|❌|❌|❌|
|21|1595901138|NES 模拟器|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|
|22|1163515895|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账本Pro-管家理财必备工具|
|23|754105884|NightCap相机|NightCap相機|NightCap相機|NightCap相機|NightCap Camera|
|24|1642364007|海拔指南针|海拔指南针|海拔指南针|海拔指南针|Altitude Compass|
|25|1522215205|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|
|26|1484181693|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|
|27|1117998129|2025人体解剖学图谱|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|
|28|6444824570|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|
|29|469338840|飞常准Pro-全球航班查询机票酒店预订|飞常准Pro-全球航班查询机票酒店预订|飞常准Pro-全球航班查询机票酒店预订|飞常准Pro-全球航班查询机票酒店预订|飞常准Pro-全球航班查询机票酒店预订|
|30|1197275827|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|
|31|578665578|Threema。安全的通讯工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|Threema. The Secure Messenger|
|32|1547418803|Incredibox - 好玩的音乐盒|❌|❌|❌|❌|
|33|1210251567|SleepTown 睡眠小镇|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown|
|34|1080235640|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|
|35|1658579911|小特钥匙 - 手表隐私蓝牙钥匙|XIAOTE Watch key|XIAOTE Watch key|XIAOTE Watch key|XIAOTE Watch key|
|36|1152396902|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|
|37|1633366918|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|
|38|6480159520|转录大师 - 录音转文字、实时离线转录|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - Speech to Text|
|39|966489322|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|
|40|898876435|Planit巧摄专业版：风光摄影计划神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit Pro: Photo Planner|
|41|1062745479|HeartWatch: 心脏和活动监测器|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: Heart Rate Tracker|
|42|6476963352|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|
|43|1459076631|隐形守护者|隐形守护者|隐形守护者|❌|隐形守护者|
|44|1660014964|飞越13号房|❌|❌|❌|❌|
|45|730712409|ProCam - 专业相机|ProCam - 專業相機|ProCam - 專業相機|ProCam - 專業相機|ProCam - Pro Camera|
|46|6451239549|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|
|47|1633865171|獬豸 · 民法典|獬豸 · 民法典|獬豸 · 民法典|獬豸 · 民法典|獬豸 · 民法典|
|48|1492395549|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|
|49|1661419573|atvTools|atvTools|atvTools|atvTools|atvTools|
|50|6479683928|AMood|AMood|AMood|AMood|AMood|
|51|6443798663|敲木鱼 - 打节拍敲音效解压神器|敲木魚|敲木魚|敲木魚|MuYu|
|52|373454750|随手记Pro–个人家庭生意记账|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|随手记Pro|
|53|916366645|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|
|54|1164801111|AutoSleep - 通过手表自动追踪睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep Track Sleep on Watch|
|55|1625289361|空气投篮|AirShot - AuditoryAR|AirShot - AuditoryAR|AirShot - AuditoryAR|AirShot - AuditoryAR|
|56|1261944766|Alook浏览器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook Browser - 8x Speed|
|57|866450515|Forest 专注森林 - 番茄钟学习计时器|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest: Focus for Productivity|
|58|1600873673|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|❌|❌|
|59|388624839|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别|CamScanner+|CamScanner+|CamScanner+|CamScanner + | OCR Scanner|
|60|768160271|航旅纵横PRO|航旅纵横PRO|航旅纵横PRO|航旅纵横PRO|航旅纵横PRO|
|61|1439723850|时间规划局 - 倒计时与提醒事项|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|
|62|6447023668|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|
|63|6468843723|❌|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|
|64|6468845173|❌|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|
|65|6468845068|❌|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – Definitive|
|66|1631331207|❌|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|
|67|1598130789|❌|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|
|68|1085114709|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|
|69|6450262949|Longshot - 截图 & OCR文字识别|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|
|70|6451498949|❌|Stray|Stray|Stray|Stray|
|71|1630403500|APTV|APTV|APTV|APTV|APTV|
|72|1552536109|PasteNow - 剪贴板工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - Instant Clipboard|
|73|1558391784|Fileball|Fileball|Fileball|Fileball|Fileball|
|74|1548711022|Barbee - 清理您的菜单栏图标|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|
|75|1575588022|MenubarX - 强大的菜单栏浏览器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - Floating Browser|
|76|1630034110|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|
|77|1009747025|zFuse - 影音播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - Video Player|
|78|1054505347|zFuse - 视频播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - Media Player|
|79|1659622164|VidHub - 高清影片视频播放器，快速播放云盘网盘|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|
|80|1136220934|Infuse - 智能视频播放器|Infuse - 智能視頻播放器|Infuse - 智能視頻播放器|Infuse - 智能視頻播放器|Infuse • Video Player|
|81|1476649036|帕斯卡契约|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|
|82|1635315427|暖雪|❌|❌|❌|❌|
|83|1523446532|重生细胞|❌|❌|❌|❌|
|84|1389752090|❌|Dead Cells|Dead Cells|Dead Cells|Dead Cells|
|85|1640627334|❌|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|
|86|6450980545|❌|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|
|87|6462360082|❌|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|
|88|1620883955|❌|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|
|89|1606703078|❌|槍火重生|槍火重生|槍火重生|Gunfire Reborn|
|90|1373575045|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|91|1371965583|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|92|6450877530|花园之间|❌|❌|❌|❌|
|93|1601446687|❌|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|
|94|1587860402|❌|籠中窺夢|籠中窺夢|籠中窺夢|Moncage|
|95|1584313012|笼中窥梦|❌|❌|❌|❌|
|96|1465779286|❌|GRIS|GRIS|GRIS|GRIS|
|97|1445379072|❌|GRIS|GRIS|GRIS|GRIS|
|98|1521190840|格莉斯的旅程|❌|❌|❌|❌|
|99|728293409|❌|紀念碑谷|紀念碑谷|紀念碑谷|Monument Valley|
|100|1582832845|纪念碑谷|❌|❌|❌|❌|
|101|1644917705|无处遁形：全网公敌|無處遁形：全網公敵|無處遁形：全網公敵|無處遁形：全網公敵|Cyber Manhunt|
|102|1369179088|❌|Grimvalor|Grimvalor|Grimvalor|Grimvalor|
|103|1669723530|原界之罪|❌|❌|❌|❌|
|104|481629890|❌|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|
|105|656951157|❌|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|
|106|886561127|❌|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|
|107|1201642309|❌|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|
|108|1529448980|❌|Reeder 5.|Reeder 5.|Reeder 5.|Reeder 5.|
|109|1529445840|❌|Reeder 5|Reeder 5|Reeder 5|Reeder 5|
|110|1596063349|❌|Stash|Stash|Stash|Stash - Rule Based Proxy|
|111|6444029612|❌|Loon Lite|Loon Lite|Loon Lite|Loon Lite|
|112|1373567447|❌|Loon|Loon|Loon|Loon|
|113|1442620678|❌|Surge 5|Surge 5|Surge 5|Surge 5|
|114|1443988620|❌|Quantumult X|Quantumult X|Quantumult X|Quantumult X|
|115|932747118|❌|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|
|116|1642682818|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|
|117|1319191852|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|
|118|1067198688|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|

# Operating Mechanism and Process
The entire mechanism relies on scheduled tasks provided by  `GitHub Actions` , executed every  `60 minutes` . The overall process is as follows:
1. Get the latest price information for apps
   1. Get app details and the price of  `App`  through  [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1) 
   2. Based on the app details link obtained in the previous step, parse the link to get the price of  `In-App Purchases` 
2. Read stored price information
3. Calculate discount information
4. Store the latest price information
5. Update  `RSS`  files
6. Push notification to  `Telegram` 
7. Push notification to  `DingTalk` 
8. Update  `README.md` 
9. Submit  `Git`  update

After the above process, if there is discount information, friends who subscribed to  `RSS Source`  and  `Telegram Channel`  will receive a push notification
# How to Contribute

## 1. Add  `Country or Region`  or  `App` 
A basic understanding of  `TypeScript`  is required. Here are the general steps. If you find it difficult, you can open an  `Issue` 
* Add  `Country or Region` 
   1. Get the  `Code`  of  `Country or Region` 
      1. Open the  `App Store`  app on your Apple device
      2. Open the details of any app in  `App Store` 
      3. Click  `Share Button` 
      4. Click  `Copy Link` 
      5. Paste the copied  `Link`  to any input field, such as Notepad
         * You will get a similar link address: https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * Its rules are: Protocol://apps.apple.com/Country or Region's Code/app/App Name/idApp ID?x1=x1&x2=x2
         * For example, the  `Code`  obtained from this  https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US  link is  `us` 
   2. Modify  `global.d.ts` 
      * If the code you get is  `xxx `
      * Type before modification:  `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us'` 
      * Type after modified:  `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us' | 'xxx'` 
   3. Modify  `appinfo.config.ts` 
      1. Add  `regions`  Variable Declaration
      2. Add  `getRegionNameMap`  Variable Declaration
      3. Add  `regionInAppPurchasesTextMap`  Variable Declaration
      4. Add  `regionLanguageCodeMap`  Variable Declaration
      5. Add  `regionTimezoneMap`  Variable Declaration
* Add  `App` 
   1. Get the  `ID`  of  `App` 
      1. Open the  `App Store`  app on your Apple device
      2. Open the details of the app you want to add in  `App Store` 
      3. Click  `Share Button` 
      4. Click  `Copy Link` 
      5. Paste the copied  `Link`  to any input field, such as Notepad
         * You will get a similar link address: https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * Its rules are: Protocol://apps.apple.com/Country or Region's Code/app/App Name/idApp ID?x1=x1&x2=x2
         * For example, the  `ID`  obtained from this  https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US  link is  `409201541` 
   2. Modify  `appinfo.config.ts` 
      1. Add  `appConfig`  Variable Declaration
* Finally, pull request your commit to the  `dev`  branch of this project


## 2. Other
If you don't want to participate in coding implementation, you can open an  `Issue`  if you have good ideas or find bugs<br />If you want to participate in coding implementation, due to the complexity of existing logic, rash changes may affect stored data. It's best to open an  `Issue`  first. Follow-up tasks can be assigned based on the affected modules or difficulty
# License
[MIT](./LICENSE)

Copyright (c) 2024-present Eyelly Wu