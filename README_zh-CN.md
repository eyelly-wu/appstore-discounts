<div align="center">
  <p style="font-size: 18px;">开源的 App Store 折扣信息助手，基于 GitHub Actions 实现，支持 RSS，Telegram 和 钉钉 通知</p>


[English](https://github.com/eyelly-wu/appstore-discounts/tree/main#readme) | 简体中文



[![github-stars](https://img.shields.io/github/stars/eyelly-wu/appstore-discounts?style=social "github-stars")](https://github.com/eyelly-wu/appstore-discounts/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/eyelly-wu/appstore-discounts/dev "last-commit")](https://github.com/eyelly-wu/appstore-discounts/commits/dev "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/eyelly-wu/appstore-discounts "github-issues")](https://github.com/eyelly-wu/appstore-discounts/issues "github-issues")


</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [特性](#特性)<br/>
  [如何订阅](#如何订阅)<br/>
  &emsp;&emsp;[RSS](#rss)<br/>
  &emsp;&emsp;[Telegram](#telegram)<br/>
  &emsp;&emsp;[钉钉](#钉钉)<br/>
  [关注焦点](#关注焦点)<br/>
  [运行机制及流程](#运行机制及流程)<br/>
  [如何参与贡献](#如何参与贡献)<br/>
  &emsp;&emsp;[1. 补充 `国家或地区` 或 `应用` ](#1-补充-国家或地区-或-应用)<br/>
  &emsp;&emsp;[2. 其他](#2-其他)<br/>
  [Star History](#star-history)<br/>
  [License](#license)<br/>

</details>


# 愿景
成为 `App Store` 用户信赖的省钱助手，让更多人都能以优惠的价格购买到自己喜欢的应用
# 特性

* 支持任意 `国家或地区` 的 `App Store` （理论上🤔）
* 支持追踪 `应用本体` 的价格和 `App 内购买项目` 的价格
* 支持多种方式订阅折扣信息
   * RSS
   * Telegram
   * 钉钉
* 支持根据应用付费排行榜更新跟踪的应用列表
* 开源免费，任何人可参与贡献


# 如何订阅

> 友情提示:  
> 通过 `RSS` 和 `Telegram` 订阅需要科学上网才能有好的体验，[了解如何科学上网](https://github.com/eyelly-wu/vpn)
    
## RSS

|编码|国家或地区|RSS 源|
|:-|:-|:-|
|cn|中国大陆|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/cn.xml|
|hk|中国香港|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/hk.xml|
|mo|中国澳门|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/mo.xml|
|tw|中国台湾|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/tw.xml|
|us|美国|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/us.xml|
|tr|土耳其|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/tr.xml|

## Telegram
点击 [![telegram](https://img.shields.io/badge/Telegram-Channel-blue?style=flat&logo=telegram "telegram")](https://t.me/appstore_discounts "telegram-channel") 订阅
## 钉钉
点击 [![dingtalk](https://img.alicdn.com/imgextra/i3/O1CN01WMvMRG1ks3Ixc9x1v_!!6000000004738-55-tps-32-32.svg "dingtalk")](https://qr.dingtalk.com/action/joingroup?code=v1,k1,o9TXTPxGRNhCmrTUa4cHymeJCIcRiimCsH4FqEnbEWU=&_dt_no_comment=1&origin=11 "dingtalk") 订阅
# 关注焦点
当前已收录 `6` 个 `国家或地区` 和 `1031` 个 `应用` <br />只有下面罗列出的 `国家或地区` 的 `应用` 有折扣信息时，才会有推送，如果你所在 `国家或地区` 或喜欢的 `应用` 不在列表中，欢迎补充<br />
>特别说明：下表中 `❌` 表示在当前 `国家或地区` 的 `App Store` 不存在该应用<br />如果列表中的某些应用频繁的在打折，吸引你安装使用，你也成功被吸引安装使用了，但最终使用体验却很差卸载了应用。对于类似情况欢迎反馈到 `Issue` ，同一个应用反馈的次数超过 `10` 次，该应用的折扣信息推送极有可能会被禁止<br />目前被 ~~删除线~~ 标记的应用表示已被禁止推送通知

|序号|App ID|添加方式|中国大陆（cn）|中国香港（hk）|中国澳门（mo）|中国台湾（tw）|美国（us）|土耳其（tr）|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|1031|6742740688|自动|无声冲突|❌|❌|❌|❌|❌|
|1030|1369253556|自动|长时间曝光|長時間曝光|長時間曝光|長時間曝光|Light | Long Exposure|Light | Long Exposure|
|1029|6449251957|自动|❌|Motorsport Manager 4|Motorsport Manager 4|Motorsport Manager 4|Motorsport Manager 4|Motorsport Manager 4|
|1028|968820626|自动|Watch Tuner Lite|Watch Tuner Lite|Watch Tuner Lite|Watch Tuner Lite|Watch Tuner Lite|Watch Tuner Lite|
|1027|1065791514|自动|❌|開羅拉麵店|開羅拉麵店|開羅拉麵店|The Ramen Sensei|The Ramen Sensei|
|1026|1114127463|自动|❌|王權 (Reigns)|王權 (Reigns)|王權 (Reigns)|Reigns|Reigns|
|1025|1636439801|自动|❌|軌道連結:Railbound|軌道連結:Railbound|軌道連結:Railbound|Railbound|Railbound|
|1024|1479808939|自动|❌|孙美琪|孙美琪|孙美琪|孙美琪|孙美琪|
|1023|6451376191|自动|DumbPhone: 简约主屏幕|DumbPhone: 簡約主畫面|DumbPhone: 簡約主畫面|DumbPhone: 簡約主畫面|DumbPhone: Minimal Home Screen|DumbPhone: Minimal Home Screen|
|1022|6446912063|自动|❌|Disney Iwájú: Rising Chef|Disney Iwájú: Rising Chef|Disney Iwájú: Rising Chef|Disney Iwájú: Rising Chef|Disney Iwájú: Rising Chef|
|1021|1611723264|自动|❌|人類跌落夢境|人類跌落夢境|人類跌落夢境|❌|❌|
|1020|409818349|自动|Real Piano™ Classic|Real Piano™ Classic|Real Piano™ Classic|Real Piano™ Classic|Real Piano™ Classic|Real Piano™ Classic|
|1019|1141282192|自动|Advanced Comprehension Therapy|Advanced Comprehension Therapy|Advanced Comprehension Therapy|Advanced Comprehension Therapy|Advanced Comprehension Therapy|Advanced Comprehension Therapy|
|1018|6737434503|自动|❌|將星三國|將星三國|將星三國|將星三國|將星三國|
|1017|478289911|自动|iMMIG 記帳小秘書|iMMIG 記帳小秘書|iMMIG 記帳小秘書|iMMIG 記帳小秘書|iMMIG 記帳小秘書|iMMIG 記帳小秘書|
|1016|1269488509|自动|饥荒语音助手|饥荒语音助手|饥荒语音助手|饥荒语音助手|饥荒语音助手|饥荒语音助手|
|1015|426860241|自动|❌|Mini Motor Racing|Mini Motor Racing|Mini Motor Racing|Mini Motor Racing|Mini Motor Racing|
|1014|531727127|自动|CovertCam|CovertCam|CovertCam|CovertCam|CovertCam|CovertCam|
|1013|1102750714|自动|地牢求生|地牢求生 - 無盡的迷宮|地牢求生 - 無盡的迷宮|地牢求生 - 無盡的迷宮|Dungeon Survival|Dungeon Survival|
|1012|1387331406|自动|Flamelet|Flamelet|Flamelet|Flamelet|Flamelet|Flamelet|
|1011|1139588979|自动|位置伪装器 - 模拟地图当前位置,模拟GPS坐标|位置偽裝器 - 模擬地圖目前位置,模擬GPS坐標|位置偽裝器 - 模擬地圖目前位置,模擬GPS坐標|位置偽裝器 - 模擬地圖目前位置,模擬GPS坐標|LocFaker - Change Current Location on the Map|LocFaker - Change Current Location on the Map|
|1010|316491616|自动|❌|TowerMadness|TowerMadness|TowerMadness|TowerMadness|TowerMadness|
|1009|332636983|自动|哭翻译者|Cry Translator|Cry Translator|Cry Translator|Cry Translator|Cry Translator|
|1008|1419928720|自动|❌|起點小說（專業版）|起點小說（專業版）|❌|❌|❌|
|1007|892542000|自动|Board Game Stats|Board Game Stats|Board Game Stats|Board Game Stats|Board Game Stats|Board Game Stats|
|1006|728401013|自动|NoteWorks for iPhone|NoteWorks for iPhone|NoteWorks for iPhone|NoteWorks for iPhone|NoteWorks for iPhone|NoteWorks for iPhone|
|1005|729067952|自动|Purgatory|Purgatory|Purgatory|Purgatory|Purgatory|Purgatory|
|1004|950012304|自动|Cellular Info|Cellular Info|Cellular Info|Cellular Info|Cellular Info|Cellular Info|
|1003|1448241295|自动|小管家 - 垃圾短信拦截清理大师|小管家 - 短信拦截手机助手|小管家 - 短信拦截手机助手|小管家 - 短信拦截手机助手|Armor - SMS Spam Filter|Armor - Junk Messages Filter|
|1002|378503081|自动|❌|❌|❌|Groundwire: VoIP SIP Softphone|Groundwire: VoIP SIP Softphone|Groundwire: VoIP SIP Softphone|
|1001|535176909|自动|❌|BADLAND|BADLAND|BADLAND|BADLAND|BADLAND|
|1000|601831815|自动|❌|Ridiculous Fishing - A Tale of Redemption|Ridiculous Fishing - A Tale of Redemption|Ridiculous Fishing - A Tale of Redemption|Ridiculous Fishing - A Tale of Redemption|Ridiculous Fishing - A Tale of Redemption|
|999|1614795077|自动|❌|Otaku's Adventure|Otaku's Adventure|Otaku's Adventure|Otaku's Adventure|Otaku's Adventure|
|998|6744998205|自动|赛博神医-猜病每日挑战小测验|赛博神医-猜病每日挑战小测验|赛博神医-猜病每日挑战小测验|赛博神医-猜病每日挑战小测验|赛博神医-猜病每日挑战小测验|赛博神医-猜病每日挑战小测验|
|997|6477745183|自动|❌|Echo Ways|Echo Ways|Echo Ways|Echo Ways|Echo Ways|
|996|557168861|自动|香港法例 Legislation HK|香港法例 Legislation HK|香港法例 Legislation HK|香港法例 Legislation HK|香港法例 Legislation HK|香港法例 Legislation HK|
|995|586604476|自动|易爻(實用)|易爻(實用)|易爻(實用)|易爻(實用)|易爻(實用)|易爻(實用)|
|994|597758149|自动|❌|❌|❌|聽寫五十音專業版|Happy Learn Japanese Kana Pro|Happy Learn Japanese Kana Pro|
|993|625740630|自动|Hairtechapp - Cutting Diagrams|Hairtechapp - Cutting Diagrams|Hairtechapp - Cutting Diagrams|Hairtechapp - Cutting Diagrams|Hairtechapp - Cutting Diagrams|Hairtechapp - Cutting Diagrams|
|992|808296431|自动|❌|Crashlands|Crashlands|Crashlands|Crashlands|Crashlands|
|991|1116905928|自动|nPlayer|nPlayer|nPlayer|nPlayer|nPlayer|nPlayer|
|990|1292311498|自动|International One Night|International One Night|International One Night|International One Night|❌|❌|
|989|6473332700|自动|逐鹿 - 历史沙盘战棋|❌|❌|❌|❌|❌|
|988|6742526717|自动|WatchTube for YouTube|WatchTube for YouTube|WatchTube for YouTube|WatchTube for YouTube|WatchTube for YouTube|WatchTube for YouTube|
|987|6478398981|自动|IPTV Smart Pro - Live TV|IPTV Smart Pro - Live TV|IPTV Smart Pro - Live TV|IPTV Smart Pro - Live TV|IPTV Smart Pro - Live TV|IPTV Smart Pro - 4K Live TV|
|986|528181527|自动|行车记录仪 「TripREC」|行車記錄儀「TripREC」|行車記錄儀「TripREC」|行車記錄儀「TripREC」|TripREC Driving Recorder|TripREC Driving Recorder|
|985|545625741|自动|❌|數學之王：完整版|數學之王：完整版|數學之王：完整版|King of Math: Full Game|King of Maths: Full Game|
|984|592398757|自动|Perfect Tempo|Perfect Tempo|Perfect Tempo|Perfect Tempo|Perfect Tempo|Perfect Tempo|
|983|669835030|自动|WinZip完整版: 压缩/解压|WinZip完整版|WinZip完整版|WinZip完整版|WinZip Pro: zip, unzip & rar|WinZip Pro: zip, unzip & rar|
|982|672649451|自动|Panecal Plus 科学计算器|Panecal Plus 科學計算器|Panecal Plus 科學計算器|Panecal Plus 科學計算器|Panecal Plus Sci. Calculator|Panecal Plus Sci. Calculator|
|981|682046579|自动|人体探秘 - Tinybop出品|Tinybop 人體探秘|Tinybop 人體探秘|Tinybop 人體探秘|The Human Body by Tinybop|The Human Body by Tinybop|
|980|787148904|自动|❌|R-TYPE II|R-TYPE II|R-TYPE II|R-TYPE II|R-TYPE II|
|979|933113994|自动|❌|DRAGON QUEST V|DRAGON QUEST V|DRAGON QUEST V|DRAGON QUEST V|DRAGON QUEST V|
|978|1056920931|自动|❌|Iron Marines|Iron Marines|Iron Marines|Iron Marines: RTS offline game|Iron Marines: RTS offline game|
|977|1082806154|自动|❌|Age of Rivals|Age of Rivals|Age of Rivals|Age of Rivals|Age of Rivals|
|976|1354857517|自动|NotePad++ - Pro|NotePad++ - Pro|NotePad++ - Pro|NotePad++ - Pro|NotePad++ - Pro|NotePad++ - Pro|
|975|1463331841|自动|Oolimo Guitar Chords|Oolimo Guitar Chords|Oolimo Guitar Chords|Oolimo Guitar Chords|Oolimo Guitar Chords|Oolimo Guitar Chords|
|974|1476509317|自动|每日英语 听力学习版|每日英语 听力学习版|每日英语 听力学习版|每日英语 听力学习版|每日英语 听力学习版|每日英语 听力学习版|
|973|1599005073|自动|❌|KOF 2002 ACA NEOGEO|KOF 2002 ACA NEOGEO|KOF 2002 ACA NEOGEO|KOF 2002 ACA NEOGEO|KOF 2002 ACA NEOGEO|
|972|1623111026|自动|❌|口袋學院物語3|口袋學院物語3|口袋學院物語3|Pocket Academy 3|Pocket Academy 3|
|971|1671475521|自动|DNA Transform!|DNA Transform!|DNA Transform!|DNA Transform!|DNA Transform!|DNA Transform!|
|970|6479295005|自动|❌|住宅夢物語 DX|住宅夢物語 DX|住宅夢物語 DX|Dream House Days DX|Dream House Days DX|
|969|6744569015|自动|❌|❌|❌|❌|Neon Labyrinth|❌|
|968|6502905107|自动|❌|AListServer|AListServer|AListServer|AListServer|AListServer|
|967|400259071|自动|❌|降雨警報器 Pro|降雨警報器 Pro|降雨警報器 Pro|Rain Alarm Pro Weather Radar|❌|
|966|1139986977|自动|❌|軒轅劍參 雲和山的彼端 加強版|軒轅劍參 雲和山的彼端 加強版|軒轅劍參 雲和山的彼端 加強版|軒轅劍參 雲和山的彼端 加強版|軒轅劍參 雲和山的彼端 加強版|
|965|1197552569|自动|❌|Poly Bridge|Poly Bridge|Poly Bridge|Poly Bridge|Poly Bridge|
|964|1313164055|自动|EE35 Film Camera|EE35 Film Camera|EE35 Film Camera|EE35 Film Camera|EE35 Film Camera|EE35 Film Camera|
|963|1553774029|自动|❌|Taskmaster The App|Taskmaster The App|Taskmaster The App|Taskmaster The App|Taskmaster The App|
|962|6449433291|自动|❌|❌|❌|常春藤108課綱基礎單字|常春藤108課綱基礎單字|常春藤108課綱基礎單字|
|961|1403183441|自动|❌|Ala Mobile GP|Ala Mobile GP|Ala Mobile GP|Ala Mobile GP|Ala Mobile GP|
|960|1538900393|自动|❌|風雲拳擊物語|風雲拳擊物語|風雲拳擊物語|Boxing Gym Story|Boxing Gym Story|
|959|6476442028|自动|❌|❌|❌|❌|❌|Zelzele Türkiye|
|958|461659980|自动|❌|Phonics Genius|Phonics Genius|Phonics Genius|Phonics Genius|Phonics Genius|
|957|6458144503|自动|❌|Skul: The Hero Slayer|Skul: The Hero Slayer|Skul: The Hero Slayer|Skul: The Hero Slayer|Skul: The Hero Slayer|
|956|1552176109|自动|❌|Trials of Mana|Trials of Mana|Trials of Mana|Trials of Mana|Trials of Mana|
|955|1580067723|自动|❌|Wall of insanity|Wall of insanity|Wall of insanity|Wall of insanity|Wall of insanity|
|954|1621055260|自动|百分之一|❌|❌|❌|❌|❌|
|953|840811083|自动|❌|Rules!|Rules!|Rules!|Rules!|Rules!|
|952|1473749002|自动|Vergi Akademisi Pro|Vergi Akademisi Pro|Vergi Akademisi Pro|Vergi Akademisi Pro|Vergi Akademisi Pro|Vergi Akademisi Pro|
|951|6508165149|自动|❌|Dungeon Clawler|Dungeon Clawler|Dungeon Clawler|Dungeon Clawler|Dungeon Clawler|
|950|537280156|自动|❌|Raiden Legacy|Raiden Legacy|Raiden Legacy|Raiden Legacy|Raiden Legacy|
|949|635644097|自动|调音器 by Piascore|Tuner by Piascore|Tuner by Piascore|Tuner by Piascore|Tuner by Piascore|Tuner by Piascore|
|948|727544019|自动|❌|Street Kart #1 Go Kart Game|Street Kart #1 Go Kart Game|Street Kart #1 Go Kart Game|Street Kart #1 Go Kart Game|Street Kart #1 Esports Game|
|947|950812012|自动|❌|Alto's Adventure|Alto's Adventure|Alto's Adventure|Alto's Adventure|Alto's Adventure|
|946|1001096601|自动|❌|1941 Frozen Front Premium|1941 Frozen Front Premium|1941 Frozen Front Premium|1941 Frozen Front Premium|1941 Frozen Front Premium|
|945|1439889483|自动|❌|Construction Simulator 3|Construction Simulator 3|Construction Simulator 3|Construction Simulator 3|Construction Simulator 3|
|944|1562555975|自动|D2助手(专业版) for 暗黑破坏神2重制版|D2助手(專業版) for 暗黑破壞神2重製版|D2助手(專業版) for 暗黑破壞神2重製版|D2助手(專業版) for 暗黑破壞神2重製版|D2 Pal Pro for Diablo2|D2 Pal Pro for Diablo2|
|943|1567658979|自动|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|
|942|6467822375|自动|❌|Auto Redial App|Auto Redial App|Auto Redial App|Auto Redial App|Auto Redial App|
|941|329772936|自动|iDeco Pro|iDeco Pro|iDeco Pro|iDeco Pro|iDeco Pro|iDeco Pro|
|940|394057299|自动|❌|Battleheart|Battleheart|Battleheart|Battleheart|Battleheart|
|939|499470113|自动|FE文件管理器|FE File Explorer Pro|FE File Explorer Pro|FE File Explorer Pro|FE File Explorer Pro|FE File Explorer Pro|
|938|666508823|自动|❌|Battleheart Legacy|Battleheart Legacy|Battleheart Legacy|Battleheart Legacy|Battleheart Legacy|
|937|792638268|自动|❌|合戰忍者村物語|合戰忍者村物語|合戰忍者村物語|Ninja Village|Ninja Village|
|936|1095883970|自动|芳香乐活|芳香樂活|芳香樂活|芳香樂活|芳香樂活|芳香樂活|
|935|1232791258|自动|❌|Battleheart 2|Battleheart 2|Battleheart 2|Battleheart 2|Battleheart 2|
|934|1600925588|自动|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|
|933|6474479684|自动|Spark - Ren'Py 小说们|Spark - Ren'Py 小說們|Spark - Ren'Py 小說們|Spark - Ren'Py 小說們|Spark - Ren'Py Novels|Spark - Ren'Py Novels|
|932|6466296603|自动|❌|The Last Game|The Last Game|The Last Game|The Last Game|The Last Game|
|931|6670402289|自动|❌|Looking for Aliens|Looking for Aliens|Looking for Aliens|Looking for Aliens|Looking for Aliens|
|930|459947180|自动|LectroRM|LectroRM|LectroRM|LectroRM|LectroRM|LectroRM|
|929|1491196899|自动|❌|Papa's Bakeria To Go!|Papa's Bakeria To Go!|Papa's Bakeria To Go!|Papa's Bakeria To Go!|Papa's Bakeria To Go!|
|928|1559183447|自动|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|
|927|1041260001|自动|❌|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|
|926|1059218666|自动|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|
|925|1059911569|自动|❌|Rusty Lake Hotel|Rusty Lake Hotel|Rusty Lake Hotel|Rusty Lake Hotel|Rusty Lake Hotel|
|924|1202650514|自动|HealthFit|HealthFit|HealthFit|HealthFit|HealthFit|HealthFit|
|923|1230231705|自动|❌|The Witness|The Witness|The Witness|The Witness|The Witness|
|922|1441522083|自动|❌|Morphing LED Banner|Morphing LED Banner|Morphing LED Banner|Morphing LED Banner|Morphing LED Banner|
|921|1492041539|自动|❌|FINAL FANTASY VI|FINAL FANTASY VI|FINAL FANTASY VI|FINAL FANTASY VI|FINAL FANTASY VI|
|920|1498778559|自动|MindPage|MindPage|MindPage|MindPage|MindPage|MindPage|
|919|1533709428|自动|❌|Pocket City 2|Pocket City 2|Pocket City 2|Pocket City 2|Pocket City 2|
|918|1559871386|自动|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|
|917|1560779038|自动|伤寒论条阅|伤寒论条阅|伤寒论条阅|伤寒论条阅|伤寒论条阅|伤寒论条阅|
|916|6450680262|自动|❌|CMSPlayer|CMSPlayer|CMSPlayer|CMSPlayer|CMSPlayer|
|915|6443750571|自动|EmoGuard - 关键字拦截器|EmoGuard - 關鍵字攔截器|EmoGuard - 關鍵字攔截器|EmoGuard - 關鍵字攔截器|EmoGuard - Keyword Blocker|EmoGuard - Keyword Blocker|
|914|6466976437|自动|❌|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|
|913|424591347|自动|❌|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|
|912|563082328|自动|Military Retirement|Military Retirement|Military Retirement|Military Retirement|Military Retirement|Military Retirement|
|911|962291530|自动|Analog Beijing|Analog Beijing|Analog Beijing|Analog Beijing|Analog Beijing|Analog Beijing|
|910|1003660287|自动|❌|Dwarf Fortress Remote|Dwarf Fortress Remote|Dwarf Fortress Remote|Dwarf Fortress Remote|Dwarf Fortress Remote|
|909|1035220162|自动|Analog Budapest|Analog Budapest|Analog Budapest|Analog Budapest|Analog Budapest|Analog Budapest|
|908|1055650930|自动|❌|Codenames|Codenames|Codenames|Codenames|Codenames|
|907|1073576068|自动|电波表对时|電波表對時|電波表對時|電波表對時|Clock Wave|Clock Wave|
|906|1106831630|自动|❌|ROME: Total War|ROME: Total War|ROME: Total War|ROME: Total War|ROME: Total War|
|905|1138248035|自动|Analog Seoul|Analog Seoul|Analog Seoul|Analog Seoul|Analog Seoul|Analog Seoul|
|904|1373057849|自动|❌|三國志漢末霸業|三國志漢末霸業|三國志漢末霸業|ThreeKingdoms The Last Warlord|ThreeKingdoms The Last Warlord|
|903|1458977921|自动|照片保险箱Pro - 私密照片加密码相册管家|照片保險箱Pro - 密碼鎖加密隱藏隱私相片|照片保險箱Pro - 密碼鎖加密隱藏隱私相片|照片保險箱Pro - 密碼鎖加密隱藏隱私相片|Secret Vault - Hide Photos|SecretVault Pro - Lock Photos|
|902|1509252675|自动|❌|Lapse: 遗落的未来|Lapse: 遗落的未来|Lapse: 遗落的未来|Lapse: A Forgotten Future|Lapse: A Forgotten Future|
|901|1554691584|自动|Naturalisation en France|Naturalisation en France|Naturalisation en France|Naturalisation en France|Naturalisation en France|Naturalisation en France|
|900|1574339556|自动|❌|Game Booster 4x|Game Booster 4x|Game Booster 4x|Game Booster 4x|Game Booster 4x|
|899|6453763474|自动|❌|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|
|898|6477535804|自动|❌|虛空穹牢|虛空穹牢|虛空穹牢|Vault of the Void|Vault of the Void|
|897|6730126160|自动|戏曲锣鼓 - 传统乐器新体验|戲曲鑼鼓 - 傳統樂器新體驗|戲曲鑼鼓 - 傳統樂器新體驗|戲曲鑼鼓 - 傳統樂器新體驗|戏曲锣鼓 - 传统乐器新体验|戏曲锣鼓 - 传统乐器新体验|
|896|6449986941|自动|❌|❌|❌|常春藤108課綱核心單字|常春藤108課綱核心單字|常春藤108課綱核心單字|
|895|1115520522|自动|姬魔恋战纪-单机剧情手游戏|❌|❌|❌|姬魔恋战纪-单机剧情手游戏|姬魔恋战纪-单机剧情手游戏|
|894|1322877018|自动|地震 - DataX Earthquake|地震 - DataX Earthquake|地震 - DataX Earthquake|地震 - DataX Earthquake|DataX Earthquake|DataX Earthquake|
|893|379485721|自动|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|
|892|1537362903|自动|❌|Neighbours back From Hell|Neighbours back From Hell|Neighbours back From Hell|Neighbours back From Hell|Neighbours back From Hell|
|891|338893931|自动|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|
|890|596026805|自动|PhotoPills|PhotoPills|PhotoPills|PhotoPills|PhotoPills|PhotoPills|
|889|1448573670|自动|冒险与征服-暗黑单机RPG角色扮演挂机游戏|Adventurer Legends|Adventurer Legends|Adventurer Legends|Adventurer Legends|暗黑冒险者放置版-单机rpg角色扮演挂机手游|
|888|1619733202|自动|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|
|887|6450058135|自动|❌|Unpacking|Unpacking|Unpacking|Unpacking|Unpacking|
|886|304731501|自动|Tempo - Metronome 节拍器|Tempo - Metronome 節拍器|Tempo - Metronome 節拍器|Tempo - Metronome 節拍器|Tempo - Metronome with Setlist|Tempo - Metronome with Setlist|
|885|954982733|自动|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|
|884|979048658|自动|❌|❌|❌|新多益必考選擇題型1000|新多益必考選擇題型1000|新多益必考選擇題型1000|
|883|1050535507|自动|❌|Lanota - 動感節奏音樂遊戲|Lanota - 動感節奏音樂遊戲|Lanota - 動感節奏音樂遊戲|Lanota - Music game with story|Lanota - Music game with story|
|882|1078553162|自动|❌|超級單字王Pro|超級單字王Pro|超級單字王Pro|超級單字王Pro|❌|
|881|1384164285|自动|AR鲁班尺|AR魯班尺|AR魯班尺|AR魯班尺|AR鲁班尺|AR鲁班尺|
|880|1586762439|自动|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|
|879|1598843625|自动|❌|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|
|878|6445905944|自动|❌|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|
|877|6449941289|自动|❌|Spirit of the Island|Spirit of the Island|Spirit of the Island|Spirit of the Island|Spirit of the Island|
|876|384363262|自动|13:20:玛雅历|13:20:Sync|13:20:Sync|13:20:Sync|13:20:Sync|13:20:Sync|
|875|1561136737|自动|❌|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|
|874|6451224796|自动|❌|藏武|藏武|藏武|藏武|❌|
|873|6504192378|自动|❌|B.ROLL - 青春濾鏡相機|B.ROLL - 青春濾鏡相機|B.ROLL - 青春濾鏡相機|B.ROLL - Youth Filter Camera|B.ROLL - Youth Filter Camera|
|872|1462324486|自动|❌|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|
|871|344844888|自动|天元乌兔万年历 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|
|870|349242632|自动|六爻装卦|六爻裝卦|六爻裝卦|六爻裝卦|六爻装卦|六爻装卦|
|869|936694037|自动|录音机专业版: 高清录制|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|
|868|1101997011|自动|论藏甲-奇门(实用)|奇門(實用)|奇門(實用)|奇門(實用)|奇門(實用)|奇門(實用)|
|867|1147297267|自动|❌|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|
|866|1205486761|自动|❌|Beholder|Beholder|Beholder|Beholder|Beholder|
|865|1506620807|自动|麻将AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|Mahjong AI Analyze Calculator|麻将人工智能辅助工具 - 小番|
|864|1513506417|自动|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|
|863|1563906582|自动|❌|Bus Simulator|Bus Simulator|Bus Simulator|Bus Simulator|Bus Simulator|
|862|1586437121|自动|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|
|861|1599393574|自动|❌|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|
|860|1642715290|自动|❌|Little Big Workshop|Little Big Workshop|Little Big Workshop|Little Big Workshop|Little Big Workshop|
|859|1672004303|自动|❌|探險頑皮動物園|探險頑皮動物園|探險頑皮動物園|Zoo Park Story|Zoo Park Story|
|858|6463115144|自动|❌|開拍！電視製作物語|開拍！電視製作物語|開拍！電視製作物語|TV Studio Story|TV Studio Story|
|857|6448530928|自动|❌|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|
|856|6502455111|自动|❌|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|
|855|295462558|自动|❌|Toobz|Toobz|Toobz|Toobz|Toobz|
|854|329233299|自动|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|
|853|329981776|自动|❌|Sudoku ″|Sudoku ″|Sudoku ″|Sudoku ″|Sudoku ″|
|852|363738376|自动|forScore|forScore|forScore|forScore|forScore|forScore|
|851|479431697|自动|❌|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|
|850|525176875|自动|太阳测量师(Sun Surveyor)|Sun Surveyor (太陽測量師)|Sun Surveyor (太陽測量師)|Sun Surveyor (太陽測量師)|Sun Surveyor (Sun & Moon)|Sun Surveyor (Sun & Moon)|
|849|922155038|自动|aprs.fi|aprs.fi|aprs.fi|aprs.fi|aprs.fi|aprs.fi|
|848|989630809|自动|❌|Malody|Malody|Malody|Malody|Malody|
|847|1001613037|自动|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|
|846|1029588869|自动|❌|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|
|845|1043963852|自动|Pipefitter|Pipefitter|Pipefitter|Pipefitter|Pipefitter|Pipefitter|
|844|1086617993|自动|时间块 - 快速记录时间规划日程安排|時間塊 - 快速記錄時間規劃日程安排|時間塊 - 快速記錄時間規劃日程安排|時間塊 - 快速記錄時間規劃日程安排|BlockyTime|BlockyTime|
|843|1104795347|自动|iFiles 2|iFiles 2|iFiles 2|iFiles 2|iFiles 2|iFiles 2|
|842|1184336299|自动|NAS Detector|NAS Detector|NAS Detector|NAS Detector|NAS Detector|NAS Detector|
|841|1270659758|自动|如果可以回家早一点|如果可以回家早一點|如果可以回家早一點|如果可以回家早一點|If only I could go home early|If only I could go home early|
|840|1308038634|自动|❌|修真风云录|修真风云录|修真风云录|修真风云录|修真风云录|
|839|1486110292|自动|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|
|838|1531068181|自动|TimeGlance - 并发症|TimeGlance - 複雜功能|TimeGlance - 複雜功能|TimeGlance - 複雜功能|TimeGlance - Complication|TimeGlance - Complication|
|837|1551539091|自动|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|
|836|1552157188|自动|Ace Subtitle Converter：字幕转换器|轉換字幕格式|轉換字幕格式|轉換字幕格式|Ace Subtitle Converter|Ace Subtitle Converter|
|835|1577762239|自动|❌|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|
|834|1613920866|自动|金價即時通|金價即時通|金價即時通|金價即時通|金價即時通|金價即時通|
|833|1617006551|自动|❌|南國度假島物語|南國度假島物語|南國度假島物語|Tropical Resort Story|Tropical Resort Story|
|832|6447693393|自动|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|
|831|6446021269|自动|❌|ROCKMAN X DiVE Offline|ROCKMAN X DiVE Offline|ROCKMAN X DiVE Offline|MEGA MAN X DiVE Offline|MEGA MAN X DiVE Offline|
|830|6446337236|自动|新概念英语-新概念英语全四册单词听力口语|新概念英語--新概念英語全四册單詞聽力口語|新概念英語--新概念英語全四册單詞聽力口語|新概念英語--新概念英語全四册單詞聽力口語|New Concept English Study|New Concept English Study|
|829|6475892753|自动|❌|Listenify|❌|Listenify|Listenify|Listenify|
|828|6739755879|自动|百名店map|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|
|827|6443849085|自动|❌|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|
|826|6744893097|自动|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|
|825|463295925|自动|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|
|824|1115022026|自动|朗达·拜恩创作的《金钱的秘密》|The Secret To Money|The Secret To Money|The Secret To Money|The Secret To Money|The Secret To Money|
|823|1442440203|自动|大家的日语初级-第二版|❌|❌|大家的日本語初級1-改訂版|❌|❌|
|822|1453820315|自动|❌|This Is the Police 2|This Is the Police 2|This Is the Police 2|This Is the Police 2|This Is the Police 2|
|821|1453875289|自动|❌|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|
|820|1543161449|自动|❌|冒險村物語2|冒險村物語2|冒險村物語2|Dungeon Village 2|Dungeon Village 2|
|819|1616652599|自动|❌|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|
|818|6444435974|自动|❌|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|
|817|755018884|自动|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|❌|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|
|816|1319618742|自动|❌|Getting Over It|Getting Over It|Getting Over It|Getting Over It|Getting Over It|
|815|1423115391|自动|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|
|814|6474207287|自动|❌|Wagotabi（和語旅）：學習日語|Wagotabi（和語旅）：學習日語|Wagotabi（和語旅）：學習日語|Wagotabi: Learn Japanese|Wagotabi: Learn Japanese|
|813|497880658|自动|J23 - 发布日期和补货|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|
|812|1108935309|自动|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|
|811|1410053842|自动|小渔排班 - 倒班工作者的专属日历|小漁輪班|小漁輪班|小漁輪班|小渔排班 - 倒班工作者的专属日历|小渔排班 - 倒班工作者的专属日历|
|810|1519508653|自动|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt|Nomad Sculpt|
|809|6446826650|自动|❌|創造都市島物語|創造都市島物語|創造都市島物語|Dream Town Island|Dream Town Island|
|808|998437590|自动|西语背单词|西语背单词|西语背单词|西语背单词|西语背单词|西语背单词|
|807|430388524|自动|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|
|806|592155900|自动|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|
|805|625274950|自动|漢語詞典繁體版|國語辭典|國語辭典|國語辭典|中國漢語辭典 Chinese Dictionary|中國漢語辭典 Chinese Dictionary|
|804|998834675|自动|❌|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|
|803|1232529101|自动|❌|歸家異途|歸家異途|歸家異途|Home Behind|Home Behind|
|802|1573482724|自动|❌|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|
|801|1602772289|自动|❌|7 Days to End with You|7 Days to End with You|7 Days to End with You|7 Days to End with You|7 Days to End with You|
|800|1613295180|自动|❌|青春敘曲|青春敘曲|青春敘曲|Growing Up: Life of the '90s|Growing Up: Life of the '90s|
|799|1614666556|自动|❌|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|
|798|1624777523|自动|❌|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|
|797|413943804|自动|Real Piano™|Real Piano™|Real Piano™|Real Piano™|Real Piano™|Real Piano™|
|796|508064644|自动|地震讯息|地震訊息|地震訊息|地震訊息|Earthquakes Pro|Earthquakes Pro|
|795|1038014543|自动|❌|Day R Premium: last world war|Day R Premium: last world war|Day R Premium: last world war|Day R Premium: last world war|Day R Premium|
|794|1084793426|自动|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|
|793|1596863467|自动|❌|LoveChoice 揀愛|LoveChoice 揀愛|LoveChoice 揀愛|LoveChoice|LoveChoice|
|792|1602403259|自动|Webmail App|Webmail App|Webmail App|Webmail App|Webmail App|Webmail App|
|791|1622064157|自动|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|
|790|6447606411|自动|❌|創意咖啡店物語|創意咖啡店物語|創意咖啡店物語|Cafe Master Story|Cafe Master Story|
|789|6449046261|自动|❌|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|Crystania Wars 2-Roguelike TD|Crystania Wars 2-Roguelike TD|
|788|336543029|自动|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|
|787|583922375|自动|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|
|786|608540795|自动|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|
|785|975770717|自动|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|
|784|1056698678|自动|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|
|783|1062022008|自动|LumaFusion|LumaFusion|LumaFusion|LumaFusion|LumaFusion|LumaFusion|
|782|1207867591|自动|❌|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|
|781|1326740784|自动|❌|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|
|780|1372408358|自动|ARGun2018|ARGun2018|ARGun2018|ARGun2018|ARGun2018|ARGun2018|
|779|1438597800|自动|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|
|778|1448798374|自动|❌|CAR++|CAR++|CAR++|CAR++|CAR++|
|777|1450908177|自动|❌|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|
|776|1509817154|自动|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|
|775|1513814705|自动|计算器键盘 - 快人一步|計算器鍵盤 - 快人一步|計算器鍵盤 - 快人一步|計算器鍵盤 - 快人一步|Calculator Keyboard - Faster|Calculator Keyboard - Faster|
|774|1543183092|自动|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|
|773|6744311159|自动|魔王终局|❌|❌|❌|❌|❌|
|772|6740014272|自动|水果合成 - 手表游戏|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|
|771|6742253703|自动|❌|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|
|770|6463440317|自动|❌|❌|❌|Online Kaza Tutanağı|Online Kaza Tutanağı|Online Kaza Tutanağı|
|769|6502287918|自动|❌|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|
|768|400666114|自动|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|
|767|562989701|自动|❌|Vector Classic|Vector Classic|Vector Classic|Vector Classic|Vector Classic|
|766|1127680609|自动|吾龟 - 记录乌龟生长，制作生长曲线|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|
|765|1171627280|自动|❌|魔窟-無盡的地下城：暗黑世界|魔窟-無盡的地下城：暗黑世界|魔窟-無盡的地下城：暗黑世界|魔窟-无尽的地下城: 暗黑世界|魔窟-无尽的地下城: 暗黑世界|
|764|1179421849|自动|❌|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|
|763|1260311003|自动|五线谱照片扫描仪 - 乐谱图像识别|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - Sheet Music|Notation Scanner - Sheet Music|
|762|1291427111|自动|❌|Evoland 2|Evoland 2|Evoland 2|Evoland 2|Evoland 2|
|761|1437715202|自动|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|
|760|1519571900|自动|Luwian|Luwian|Luwian|Luwian|Luwian|Luwian|
|759|1544947623|自动|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|
|758|1575192531|自动|❌|遊樂園夢物語|遊樂園夢物語|遊樂園夢物語|Dream Park Story|Dream Park Story|
|757|6742311454|自动|伏魔诀-阴阳秘术诡道修仙录|❌|❌|❌|❌|❌|
|756|6444396120|自动|挺进地牢|❌|❌|❌|❌|❌|
|755|6738590491|自动|KennysGifs|KennysGifs|KennysGifs|KennysGifs|KennysGifs|KennysGifs|
|754|6444311205|自动|❌|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|
|753|6477660875|自动|❌|大海賊探險物語DX|大海賊探險物語DX|大海賊探險物語DX|High Sea Saga DX|High Sea Saga DX|
|752|6447090616|自动|Whisper Notes - 离线 AI 语音转文字|Whisper Notes - 離線AI語音輸入轉錄文字辨識|Whisper Notes - 離線AI語音輸入轉錄文字辨識|Whisper Notes - 離線AI語音輸入轉錄文字辨識|Whisper Notes - Speech To Text|Whisper Notes - Speech To Text|
|751|414371107|自动|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|
|750|510119487|自动|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|
|749|561396899|自动|❌|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|
|748|634158738|自动|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|
|747|814977594|自动|❌|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|
|746|958889621|自动|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|
|745|1066366174|自动|❌|Concentration Grid|Concentration Grid|Concentration Grid|Concentration Grid|Concentration Grid|
|744|1397002811|自动|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|
|743|1447509164|自动|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|
|742|1456714022|自动|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|
|741|1459520638|自动|❌|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|
|740|1463480017|自动|❌|韭菜投資公司|韭菜投資公司|韭菜投資公司|Leek Inc.|Leek Inc.|
|739|1466120520|自动|❌|iVerify Basic|iVerify Basic|iVerify Basic|iVerify Basic|iVerify Basic|
|738|1499085878|自动|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|
|737|1522425038|自动|Alien10|Alien10|Alien10|Alien10|Alien10|Alien10|
|736|1541290982|自动|GPSPlus Pro|GPSPlus Pro|GPSPlus Pro|GPSPlus Pro|GPSPlus - Location Editor Pro|GPSPlus - Location Editor Pro|
|735|1551579024|自动|❌|創意漢堡物語|創意漢堡物語|創意漢堡物語|Burger Bistro Story|Burger Bistro Story|
|734|1562608316|自动|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|
|733|1601177112|自动|❌|便利商店開業日記|便利商店開業日記|便利商店開業日記|Convenience Stories|Convenience Stories|
|732|1609059358|自动|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|
|731|6702013134|自动|FOCUS - 猫猫专注计时器和学习番茄钟|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - Kitty Focus Timer|Cat Flow - Kitty Focus Timer|
|730|6740487579|自动|❌|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|
|729|6451009326|自动|❌|LMP - Music Hub|LMP - Music Hub|LMP - Music Hub|LMP - Music Hub|LMP - Music Hub|
|728|6473789128|自动|❌|星落湖傳說-魔法騎士團|星落湖傳說-魔法騎士團|星落湖傳說-魔法騎士團|❌|❌|
|727|299021909|自动|圣经工具(新标点和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|
|726|407078169|自动|❌|⋆數獨+|⋆數獨+|⋆數獨+|⋆Sudoku+|⋆Sudoku+|
|725|418751595|自动|GyrOSC|GyrOSC|GyrOSC|GyrOSC|GyrOSC|GyrOSC|
|724|667362389|自动|❌|❌|The Room Two|❌|The Room Two|The Room Two|
|723|768379887|自动|Eye Meter|Eye Meter|Eye Meter|Eye Meter|Eye Meter|Eye Meter|
|722|814323051|自动|❌|中世紀Bridge Constructor|中世紀Bridge Constructor|中世紀Bridge Constructor|Bridge Constructor Medieval|Bridge Constructor Medieval|
|721|911205290|自动|❌|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|
|720|983145797|自动|超注音|超注音|超注音|超注音|超注音|超注音|
|719|1033342465|自动|Just Press Record|Just Press Record|Just Press Record|Just Press Record|Just Press Record|Just Press Record|
|718|1112850631|自动|❌|樂秀專業版-影片編輯與影片剪輯|樂秀專業版-影片編輯與影片剪輯|樂秀專業版-影片編輯與影片剪輯|VideoShow PRO - Video Editor|VideoShow PRO - Video Editor|
|717|1126386264|自动|❌|AdGuard Pro — adblock|AdGuard Pro — adblock|AdGuard Pro — adblock|AdGuard Pro — adblock&privacy|AdGuard Pro — adblock|
|716|1182456409|自动|❌|奧托的奧德賽|奧托的奧德賽|奧托的奧德賽|Alto's Odyssey|Alto's Odyssey|
|715|1238247658|自动|❌|Cluedo: Classic Edition|Cluedo: Classic Edition|❌|❌|Cluedo: Classic Edition|
|714|1260271235|自动|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|
|713|1260967308|自动|WhatCall|WhatCall|WhatCall|WhatCall|WhatCall|WhatCall|
|712|1423585518|自动|ROMAN: 进食计画、减肥、减脂一体化。 体重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|Roman: budget weight loss|Roman: budget weight loss|
|711|1508108761|自动|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|
|710|1550721625|自动|JAMMATES|JAMMATES|JAMMATES|JAMMATES|JAMMATES|JAMMATES|
|709|1582355047|自动|❌|❌|❌|❌|❌|Hacker Başlangıç|
|708|1610305853|自动|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|
|707|1616391834|自动|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|❌|❌|
|706|1668418644|自动|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|
|705|6477756843|自动|❌|Final Girl Companion|Final Girl Companion|Final Girl Companion|Final Girl Companion|Final Girl Companion|
|704|6698876690|自动|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|
|703|6742457882|自动|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|
|702|6471914901|自动|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|
|701|300132735|自动|专业万年历 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|
|700|430234732|自动|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|
|699|602990197|自动|❌|METAL SLUG X|METAL SLUG X|METAL SLUG X|METAL SLUG X|METAL SLUG X|
|698|898697688|自动|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|
|697|1304822713|自动|无尽坦克大战 - 八位元单机王者 完美模拟穿越旧经典电视手游|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|Infinity Tank Battle|Infinity Tank Battle|
|696|1400579543|自动|❌|❌|❌|❌|imo video calls and chat HD|❌|
|695|1435461053|自动|❌|This Is the Police|This Is the Police|This Is the Police|This Is the Police|This Is the Police|
|694|1471323296|自动|❌|籃球熱潮物語|籃球熱潮物語|籃球熱潮物語|Basketball Club Story|Basketball Club Story|
|693|1472184189|自动|❌|The White Door|The White Door|The White Door|The White Door|The White Door|
|692|1478611992|自动|❌|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|
|691|1498550832|自动|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|
|690|6739975257|自动|乐桥|樂橋|樂橋|樂橋|TuneShift|TuneShift|
|689|6670190133|自动|❌|哆啦A夢的銅鑼燒店物語|哆啦A夢的銅鑼燒店物語|哆啦A夢的銅鑼燒店物語|Doraemon Dorayaki Shop Story|Doraemon Dorayaki Shop Story|
|688|6744862281|自动|iPlayer - 本地音乐播放器&离线音乐专业版|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|
|687|6473001577|自动|❌|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|
|686|327963391|自动|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|
|685|398463868|自动|❌|詰将棋|詰将棋|詰将棋|詰将棋|詰将棋|
|684|419606496|自动|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|
|683|435871950|自动|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|
|682|459189186|自动|❌|機械迷城 (Machinarium)|機械迷城 (Machinarium)|機械迷城 (Machinarium)|Machinarium|Machinarium|
|681|580008932|自动|❌|Real Badminton|Real Badminton|Real Badminton|Real Badminton|Real Badminton|
|680|1253855339|自动|❌|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|
|679|1330055286|自动|比手划脚 - 你说我猜合家欢聚会神器|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 亲子互动游戏你画我猜|
|678|1453117329|自动|❌|Yume Nikki|Yume Nikki|Yume Nikki|Yume Nikki|Yume Nikki|
|677|1456547302|自动|❌|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|
|676|1457316711|自动|❌|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|
|675|1481181827|自动|❌|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|
|674|1505174740|自动|❌|VFUN - 你的興趣社區|VFUN - 你的興趣社區|VFUN - 你的興趣社區|VFUN - Find your interests|VFUN - Find your interests|
|673|1517281147|自动|行星小时|行星小時|行星小時|行星小時|Planetary Hours + Widget|Planetary Hours|
|672|1530149693|自动|心岛日记-难过的人不孤独|心岛日记-温柔的心情树洞|心岛日记-温柔的心情树洞|心岛日记-温柔的心情树洞|心岛日记-难过的人不孤独|❌|
|671|1548281314|自动|❌|倉頡打字2V|倉頡打字2V|倉頡打字2V|倉頡打字2V|倉頡打字2V|
|670|1607511516|自动|❌|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|
|669|1612615618|自动|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|
|668|1617390109|自动|❌|我们的大航海|我们的大航海|我们的大航海|我们的大航海|我们的大航海|
|667|1621065119|自动|❌|逆轉裁判123成步堂精選集|逆轉裁判123成步堂精選集|逆轉裁判123成步堂精選集|Ace Attorney Trilogy|Ace Attorney Trilogy|
|666|1626320298|自动|极速变色龙|❌|❌|❌|❌|❌|
|665|6738272916|自动|全球电视 - 国际电视直播|全球電視 - 國際電視直播|全球電視 - 國際電視直播|全球電視 - 國際電視直播|NetTV: Watch Global TV|NetTV: Watch Global TV|
|664|6446178861|自动|PlayNav - 影片内无广告！|PlayNav - 影片內無廣告！|PlayNav - 影片內無廣告！|PlayNav - 影片內無廣告！|PlayNav - No ads in videos!|PlayNav - No ads in videos!|
|663|363385252|自动|DTMFdec|DTMFdec|DTMFdec|DTMFdec|DTMFdec|DTMFdec|
|662|430270438|自动|Astro Gold|Astro Gold|Astro Gold|Astro Gold|Astro Gold|Astro Gold|
|661|679454835|自动|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|
|660|911201894|自动|❌|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|
|659|921954809|自动|❌|❌|❌|❌|Craft The World-Pocket Edition|Craft The World-Pocket Edition|
|658|1093859891|自动|djembeföla!|djembeföla!|djembeföla!|djembeföla!|djembeföla!|djembeföla!|
|657|1232097854|自动|❌|棒球學院物語|棒球學院物語|棒球學院物語|Home Run High|Home Run High|
|656|1261834568|自动|❌|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|
|655|1555459868|自动|❌|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|
|654|1563121109|自动|❌|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|
|653|6744629398|自动|汉界|汉界|汉界|汉界|汉界|汉界|
|652|6738784151|自动|❌|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|
|651|6470642337|自动|❌|來自星塵|來自星塵|來自星塵|Ex Astris|Ex Astris|
|650|6483862844|自动|❌|光遇樂隊|光遇樂隊|光遇樂隊|Sky Band|Sky Band|
|649|314192799|自动|❌|❌|❌|Acrobits Softphone|Acrobits Softphone|Acrobits Softphone|
|648|466388978|自动|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|
|647|512142109|自动|❌|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|
|646|904737816|自动|❌|王國保衛戰：起源 Kingdom Rush Origins|王國保衛戰：起源 Kingdom Rush Origins|王國保衛戰：起源 Kingdom Rush Origins|Kingdom Rush Origins TD|Kingdom Rush Origins TD|
|645|952625011|自动|每日精選-國家地理每日精選|每日精選-國家地理每日精選|每日精選-國家地理每日精選|每日精選-國家地理每日精選|❌|NG Daily|
|644|958202096|自动|❌|❌|❌|❌|❌|Dukan Diet Classic|
|643|1085978097|自动|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|
|642|1148321705|自动|❌|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|
|641|1286255182|自动|Filmlike|Filmlike Camera|Filmlike Camera|Filmlike Camera|Filmlike Camera|Filmlike Camera|
|640|1449584007|自动|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|
|639|1523025509|自动|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|
|638|1536419933|自动|❌|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|
|637|1574175808|自动|❌|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|
|636|1622935612|自动|❌|DYSMANTLE|DYSMANTLE|DYSMANTLE|❌|❌|
|635|1633879571|自动|❌|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|
|634|6504841512|自动|❌|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|
|633|6476902290|自动|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|
|632|6479512734|自动|❌|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|
|631|6740051873|自动|数字华容道：手表版|數位華容道：手錶版|數位華容道：手錶版|數位華容道：手錶版|Classic Number Games for Watch|Classic Number Games for Watch|
|630|6444109272|自动|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|
|629|318639200|自动|❌|Crush the Castle|Crush the Castle|Crush the Castle|Crush the Castle|Crush the Castle|
|628|325915322|自动|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|
|627|365729342|自动|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|
|626|414469628|自动|面部和躯体照片编辑器|臉部及身體修圖工具|臉部及身體修圖工具|臉部及身體修圖工具|Face & Body Photo editor|Face & Body Photo editor|
|625|459313476|自动|Tenuto|Tenuto|Tenuto|Tenuto|Tenuto|Tenuto|
|624|478126577|自动|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|
|623|493493802|自动|RhymeZone|RhymeZone|RhymeZone|RhymeZone|RhymeZone|RhymeZone|
|622|555612465|自动|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|CWMoney Pro - Expense Tracker|CWMoney Pro - Expense Tracker|
|621|564730202|自动|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|
|620|582584117|自动|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|
|619|633600716|自动|432 Player|432 Player|432 Player|432 Player|432 Player|432 Player|
|618|683353582|自动|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|
|617|777310222|自动|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|
|616|887877435|自动|f8 镜头大师|f8 镜头大师|f8 镜头大师|f8 镜头大师|f8 Lens Toolkit|f8 Lens Toolkit|
|615|908905093|自动|Lumy - 太阳追踪器与黄金时刻|Lumy|Lumy|Lumy|Lumy|Lumy|
|614|961339405|自动|❌|監獄人生 RPG|監獄人生 RPG|監獄人生 RPG|Prison Life RPG|Prison Life RPG|
|613|994157520|自动|❌|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|
|612|1048509287|自动|❌|龍紀冒險棋|龍紀冒險棋|龍紀冒險棋|龙纪冒险棋|龙纪冒险棋|
|611|1087099916|自动|铅笔素描 高清版|鉛筆素描 高清版|鉛筆素描 高清版|鉛筆素描 高清版|Pencil Sketch HD|Pencil Sketch HD|
|610|1107320261|自动|❌|Splitter Critters|Splitter Critters|Splitter Critters|Splitter Critters|Splitter Critters|
|609|1241909999|自动|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|
|608|1293681293|自动|❌|Pocket Build|Pocket Build|Pocket Build|Pocket Build|Pocket Build|
|607|1330717186|自动|❌|The Golf Tracer|The Golf Tracer|The Golf Tracer|The Golf Tracer|The Golf Tracer|
|606|1357651989|自动|❌|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|
|605|1385258906|自动|❌|Mindustry|Mindustry|Mindustry|Mindustry|Mindustry|
|604|1402080820|自动|❌|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|
|603|1439262206|自动|❌|Root Board Game|Root Board Game|Root Board Game|Root Board Game|Root Board Game|
|602|1450194251|自动|Kişiye Özel Diyet|Kişiye Özel Diyet|Kişiye Özel Diyet|Kişiye Özel Diyet|Weight Loss in 28 Days|Weight Loss in 28 Days|
|601|1477229754|自动|❌|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|
|600|1514329124|自动|❌|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|
|599|1553055273|自动|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|❌|Chairgun Elite Ballistic Tool|
|598|1573220858|自动|❌|環球酒店大亨|環球酒店大亨|環球酒店大亨|环球酒店大亨|环球酒店大亨|
|597|1580509302|自动|❌|伊格利亞戰記|伊格利亞戰記|伊格利亞戰記|The Heroic Legend of Eagarlnia|The Heroic Legend of Eagarlnia|
|596|1614771445|自动|❌|Rotaeno - 旋轉音律|Rotaeno - 旋轉音律|Rotaeno - 旋轉音律|Rotaeno|Rotaeno|
|595|6742396803|自动|DaDaDaDa - 空气枪|DaDaDaDa - Air Gun Simulator|DaDaDaDa - Air Gun Simulator|DaDaDaDa - Air Gun Simulator|DaDaDaDa - Air Gun Simulator|DaDaDaDa - Air Gun Simulator|
|594|6740943002|自动|BaMai|BaMai|BaMai|BaMai|BaMai|❌|
|593|6743459503|自动|❌|逐鹿|逐鹿|逐鹿|逐鹿|逐鹿|
|592|6480251529|自动|体育集换卡制作专业版|體育集換卡製作專業版|體育集換卡製作專業版|體育集換卡製作專業版|Ultimate Card Creator|Ultimate Card Creator|
|591|6739179322|自动|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|
|590|6744837914|自动|块块爱消除-手表游戏经典快乐休闲益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|Block Jam Blast For Watch|Block Jam Blast For Watch|
|589|6502623166|自动|❌|金武江湖|金武江湖|金武江湖|金武江湖|金武江湖|
|588|6468033830|自动|❌|憶我: 一個性格測試遊戲|憶我: 一個性格測試遊戲|憶我: 一個性格測試遊戲|Refind Self|Refind Self|
|587|6738138603|自动|❌|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|
|586|6739185971|自动|❌|❌|❌|❌|Earnifi: Rent, Early Pay, Cash|❌|
|585|284972998|自动|SoundHound∞ 音乐搜索识别和播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ - Music Discovery|SoundHound∞ - Music Discovery|
|584|288419283|自动|❌|❌|❌|❌|RadarScope|RadarScope|
|583|292421271|自动|❌|Fieldrunners|Fieldrunners|Fieldrunners|Fieldrunners|Fieldrunners|
|582|294934058|自动|HotSchedules|HotSchedules|HotSchedules|HotSchedules|HotSchedules|HotSchedules|
|581|298206806|自动|iReal Pro|iReal Pro|iReal Pro|iReal Pro|iReal Pro|iReal Pro|
|580|299117180|自动|Airports|Airports|Airports|Airports|Airports|Airports|
|579|301387274|自动|❌|Pocket God|Pocket God|Pocket God|Pocket God|Pocket God|
|578|305557780|自动|换脸 (iSwap Faces Pro)|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|
|577|306938028|自动|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|
|576|307132353|自动|❌|Sally's Spa|Sally's Spa|Sally's Spa|Sally's Spa|Sally's Spa|
|575|307727765|自动|❌|Doodle Jump|Doodle Jump|Doodle Jump|Doodle Jump|Doodle Jump|
|574|307751675|自动|❌|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|
|573|315021242|自动|❌|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|
|572|315514944|自动|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|
|571|317809458|自动|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|
|570|323048611|自动|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|
|569|329670577|自动|Camera+旧版|Camera+傳統|Camera+傳統|Camera+傳統|Camera+ Legacy|Camera+ Legacy|
|568|332424440|自动|❌|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|
|567|333212604|自动|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|
|566|335029050|自动|❌|Catan Classic|Catan Classic|Catan Classic|Catan Classic|Catan Classic|
|565|335709058|自动|Stylebook|Stylebook|Stylebook|Stylebook|Stylebook|Stylebook|
|564|335862325|自动|Blower|Blower|Blower|Blower|Blower|Blower|
|563|342115564|自动|Hipstamatic 相机|Hipstamatic 相機|Hipstamatic 相機|Hipstamatic 相機|Classic Camera by Hipstamatic|Classic Camera by Hipstamatic|
|562|344784375|自动|播放器OPlayer|OPlayer - video player|OPlayer - video player|OPlayer - video player|OPlayer - video player|OPlayer - video player|
|561|351850196|自动|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|
|560|352247139|自动|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|
|559|355281169|自动|❌|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|
|558|357404131|自动|慢快门相机 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|Slow Shutter Cam|Slow Shutter Cam|
|557|357421934|自动|PeakFinder|PeakFinder|PeakFinder|PeakFinder|PeakFinder|PeakFinder|
|556|367327563|自动|秘密照片管理 - i照片文件夹|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|
|555|373493387|自动|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|
|554|388130466|自动|❌|iSlash|iSlash|iSlash|iSlash|iSlash|
|553|388857410|自动|❌|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|
|552|392531952|自动|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|
|551|395680819|自动|AVPlayer|AVPlayer|AVPlayer|AVPlayer|AVPlayer|AVPlayer|
|550|396085661|自动|❌|遊戲發展國++|遊戲發展國++|遊戲發展國++|Game Dev Story|Game Dev Story|
|549|402012828|自动|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|
|548|402656416|自动|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|
|547|403684733|自动|Badoo高级版|Badoo進階版|Badoo進階版|Badoo進階版|Badoo Premium|Badoo Premium|
|546|404990064|自动|SkyView®|SkyView®|SkyView®|SkyView®|SkyView®|SkyView®|
|545|405835358|自动|MilGPS|MilGPS|MilGPS|MilGPS|MilGPS|MilGPS|
|544|406239138|自动|❌|Puffin Cloud Browser|Puffin Cloud Browser|Puffin Cloud Browser|Puffin Browser Pro|Puffin Browser Pro|
|543|406541444|自动|8毫米相机|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|
|542|407933070|自动|怀旧日历 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|
|541|408697793|自动|❌|King of Opera|King of Opera|King of Opera|King of Opera|King of Opera|
|540|408854559|自动|❌|溫泉物語|溫泉物語|溫泉物語|Hot Springs Story|Hot Springs Story|
|539|417817520|自动|❌|Tiny Wings|Tiny Wings|Tiny Wings|Tiny Wings|Tiny Wings|
|538|424403441|自动|瑕疵清除器 (Pimple Eraser)|Pimple Eraser|Pimple Eraser|Pimple Eraser|Pimple Eraser|Pimple Eraser|
|537|430163724|自动|智能风水罗盘-专业版|智能風水羅庚-專業版|智能風水羅庚-專業版|智能風水羅庚-專業版|智能风水罗盘-专业版|智能风水罗盘-专业版|
|536|432850619|自动|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|
|535|433596395|自动|❌|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|
|534|449735650|自动|❌|鱷魚小頑皮愛洗澡|鱷魚小頑皮愛洗澡|鱷魚小頑皮愛洗澡|Where's My Water?|Where's My Water?|
|533|450542233|自动|❌|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|
|532|452990487|自动|RushPlayer|RushPlayer|RushPlayer|RushPlayer|RushPlayer|RushPlayer|
|531|454086751|自动|❌|Flick Home Run !|Flick Home Run !|Flick Home Run !|Flick Home Run !|Flick Home Run !|
|530|469343554|自动|❌|洛克人X|洛克人X|洛克人X|❌|❌|
|529|479516143|自动|❌|Minecraft|Minecraft|Minecraft|Minecraft: Dream it, Build it!|Minecraft: Dream it, Build it!|
|528|479662730|自动|❌|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto 3|
|527|482303584|自动|❌|❌|❌|❌|PDG PROmote 2025+|PDG PROmote 2025+|
|526|485246824|自动|❌|Cytus|Cytus|Cytus|Cytus|Cytus|
|525|491231653|自动|❌|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|
|524|497716362|自动|TonalEnergy 调音器—节拍器|TonalEnergy 調音器—節拍器|TonalEnergy 調音器—節拍器|TonalEnergy 調音器—節拍器|TonalEnergy Tuner & Metronome|TonalEnergy Tuner & Metronome|
|523|498732510|自动|❌|Blitzer.de PRO|❌|Blitzer.de PRO|Blitzer.de PRO|Blitzer.de PRO|
|522|501695715|自动|儿歌童谣 - 国语+粤语(广东话)儿歌连歌词|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|
|521|503190232|自动|❌|Bridge Constructor|Bridge Constructor|Bridge Constructor|Bridge Constructor|Bridge Constructor|
|520|504176984|自动|论子平-论八字(实用)|論八字(實用)|論八字(實用)|論八字(實用)|论子平-论八字(实用)|论子平-论八字(实用)|
|519|504300412|自动|❌|歐陸戰爭3|歐陸戰爭3|歐陸戰爭3|European War 3|European War 3|
|518|505367096|自动|世界迷雾|世界迷霧|世界迷霧|世界迷霧|Fog of World|Fog of World|
|517|519411018|自动|iGuzheng - 爱古筝|iGuzheng - 愛古箏|iGuzheng - 愛古箏|iGuzheng - 愛古箏|iGuzheng|iGuzheng|
|516|520231936|自动|eDrawings|eDrawings|eDrawings|eDrawings|eDrawings|eDrawings|
|515|524387892|自动|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|
|514|525818839|自动|❌|Plague Inc. (瘟疫公司)|Plague Inc. (瘟疫公司)|Plague Inc. (瘟疫公司)|Plague Inc.|Plague Inc.|
|513|530425820|自动|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|
|512|540925500|自动|❌|Need for Speed™ Most Wanted|Need for Speed™ Most Wanted|Need for Speed™ Most Wanted|❌|Need for Speed™ Most Wanted|
|511|549105915|自动|❌|True Skate|True Skate|True Skate|True Skate|True Skate|
|510|549432607|自动|❌|Townsmen Premium|Townsmen Premium|Townsmen Premium|Townsmen Premium|Townsmen Premium|
|509|554937499|自动|❌|Earn to Die|Earn to Die|Earn to Die|Earn to Die|Earn to Die|
|508|555642577|自动|晋硕万年历|晉碩萬年曆|晉碩萬年曆|晉碩萬年曆|Chinsoft Lunar Calendar|Chinsoft Lunar Calendar|
|507|563718995|自动|❌|Bloons TD 5|Bloons TD 5|Bloons TD 5|Bloons TD 5|Bloons TD 5|
|506|575154654|自动|❌|Pou|Pou|Pou|Pou|Pou|
|505|577628510|自动|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|
|504|578448682|自动|❌|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|
|503|586149216|自动|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|
|502|594117733|自动|❌|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|
|501|600626116|自动|❌|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|
|500|623592465|自动|❌|Heads Up!|Heads Up!|Heads Up!|Heads Up!|Heads Up!|
|499|625334537|自动|❌|Geometry Dash|Geometry Dash|Geometry Dash|Geometry Dash|Geometry Dash|
|498|634235735|自动|❌|Duet Game|Duet Game|Duet Game|Duet Game|Duet Game|
|497|640364616|自动|❌|❌|❌|❌|Terraria|Terraria|
|496|646256209|自动|Photo Eraser|照片橡皮擦|照片橡皮擦|照片橡皮擦|Photo Eraser for iPhone|Photo Eraser for iPhone|
|495|657016140|自动|Good Maps - 谷歌地图,离线,街景,公交,地铁,导航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - for Google Maps, with Offline Map, Directions, Street Views and More|Good Maps - for Google Maps, with Offline Map, Directions, Street Views and More|
|494|679044544|自动|AndroMoney|理財幫手 AndroMoney|理財幫手 AndroMoney|理財幫手 AndroMoney|AndroMoney|AndroMoney|
|493|687236545|自动|Adv. Learner’s Dictionary (TC)|劍橋高階英漢雙解詞典：英語— 繁體中文|劍橋高階英漢雙解詞典：英語— 繁體中文|劍橋高階英漢雙解詞典：英語— 繁體中文|Adv. Learner’s Dictionary (TC)|Adv. Learner’s Dictionary (TC)|
|492|697885605|自动|❌|❌|❌|常春藤基礎英文字彙|常春藤基礎英文字彙|常春藤基礎英文字彙|
|491|700637744|自动|❌|DEEMO|DEEMO|DEEMO|DEEMO|DEEMO|
|490|736683061|自动|❌|A Dark Room|A Dark Room|A Dark Room|A Dark Room|A Dark Room|
|489|741990930|自动|❌|Walkout Song DJ|❌|❌|Walkout Song DJ|❌|
|488|763692274|自动|❌|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|
|487|784373321|自动|❌|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|
|486|807317212|自动|每日精选-天文地理人文照片之美&壁纸|每日精選-天文地理人文照片之美|每日精選-天文地理人文照片之美|每日精選-天文地理人文照片之美|Daily Dozen-Culture in Photos|Daily Dozen-Culture in Photos|
|485|824305459|自动|❌|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|
|484|829581836|自动|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|
|483|837860959|自动|❌|迷你地鐵|迷你地鐵|迷你地鐵|Mini Metro|Mini Metro|
|482|860809977|自动|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|
|481|870322730|自动|❌|Implosion 聚爆|Implosion 聚爆|Implosion 聚爆|Implosion - Never Lose Hope|Implosion - Never Lose Hope|
|480|890791581|自动|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|
|479|891194610|自动|❌|戰車撞殭屍2 (Earn to Die 2)|戰車撞殭屍2 (Earn to Die 2)|戰車撞殭屍2 (Earn to Die 2)|Earn to Die 2|Earn to Die 2|
|478|901738789|自动|地下城堡: 炼金术师的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|Dungeon Survivor|Dungeon Survivor|
|477|904278510|自动|❌|刺客任務：狙擊 (Hitman Sniper)|刺客任務：狙擊 (Hitman Sniper)|刺客任務：狙擊 (Hitman Sniper)|Hitman Sniper|Hitman Sniper|
|476|912536422|自动|❌|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|
|475|916976066|自动|短语键盘|短語鍵盤|短語鍵盤|短語鍵盤|Phraseboard Keyboard|Phraseboard Keyboard|
|474|918609651|自动|Money Pro: Personal Finance AR|Money Pro: 個人財務|Money Pro: 個人財務|Money Pro: 個人財務|Money Pro: Personal Finance AR|Money Pro: Personal Finance AR|
|473|924695435|自动|Pixelmator|Pixelmator|Pixelmator|Pixelmator|Pixelmator|Pixelmator|
|472|925494667|自动|❌|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|
|471|926015463|自动|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|
|470|926076608|自动|秒速记账 1SecMoney|秒速記帳 1SecMoney|秒速記帳 1SecMoney|秒速記帳 1SecMoney|1SecMoney|1SecMoney|
|469|927098908|自动|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|
|468|932389062|自动|❌|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|Give It Up! - Jump to the Beat|Give It Up! - Jump to the Beat|
|467|935216956|自动|❌|Papers, Please|Papers, Please|Papers, Please|Papers, Please|Papers, Please|
|466|935528099|自动|同步音律|同步音律|同步音律|同步音律|MUSYNX|MUSYNX|
|465|941143328|自动|❌|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|
|464|945322477|自动|❌|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|
|463|946477821|自动|❌|Evoland|Evoland|Evoland|Evoland|Evoland|
|462|948944368|自动|全屏浏览器 - 用得全屏才是好浏览器！|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|
|461|954724812|自动|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|
|460|955687901|自动|kirakira+|kirakira+|kirakira+|kirakira+|kirakira+|kirakira+|
|459|961932335|自动|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|
|458|963034692|自动|Streaks|Streaks|Streaks|Streaks|Streaks|Streaks|
|457|964708975|自动|古诗文网|古诗文网|古诗文网|古诗文网|古诗文网|古诗文网|
|456|973482987|自动|❌|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|
|455|975683986|自动|❌|Door Kickers|Door Kickers|Door Kickers|Door Kickers|Door Kickers|
|454|982175678|自动|❌|This War of Mine|This War of Mine|This War of Mine|This War of Mine|This War of Mine|
|453|982227026|自动|聚爆Implosion|❌|❌|❌|❌|❌|
|452|992047786|自动|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|
|451|998437582|自动|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|
|450|1010311475|自动|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|
|449|1012298403|自动|❌|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|
|448|1023146677|自动|❌|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|
|447|1028950091|自动|贪婪洞窟：猿神降临|貪婪洞窟：猿神降临|貪婪洞窟：猿神降临|貪婪洞窟：猿神降临|The Greedy Cave|The Greedy Cave|
|446|1029932207|自动|❌|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|
|445|1035219553|自动|Analog London|Analog London|Analog London|Analog London|Analog London|Analog London|
|444|1035219562|自动|Analog Paris|Analog Paris|Analog Paris|Analog Paris|Analog Paris|Analog Paris|
|443|1065360416|自动|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|
|442|1065599938|自动|❌|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|
|441|1077639630|自动|说剑The Swords|❌|❌|❌|❌|❌|
|440|1093131935|自动|❌|Incredibox|Incredibox|Incredibox|Incredibox|Incredibox|
|439|1094038347|自动|❌|Only You Are Here|Only You Are Here|Only You Are Here|Only You Are Here|Only You Are Here|
|438|1095903651|自动|【约吗】-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|
|437|1099088440|自动|火柴人联盟2|火柴人联盟2|火柴人联盟2|火柴人联盟2|❌|❌|
|436|1108479411|自动|❌|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Racing Games|
|435|1110646984|自动|地下城堡2: 黑暗觉醒|❌|❌|❌|❌|❌|
|434|1111420122|自动|❌|Hear My Baby Heartbeat App|Hear My Baby Heartbeat App|Hear My Baby Heartbeat App|Hear My Baby Heartbeat Monitor|Hear My Baby Heartbeat App|
|433|1112429079|自动|物种起源|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|
|432|1113736426|自动|❌|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|
|431|1118115766|自动|❌|Bloons TD 6|Bloons TD 6|Bloons TD 6|Bloons TD 6|Bloons TD 6|
|430|1121484538|自动|❌|箱庭鐵道物語|箱庭鐵道物語|箱庭鐵道物語|Station Manager|Station Manager|
|429|1128464707|自动|❌|Death Road to Canada|Death Road to Canada|Death Road to Canada|Death Road to Canada|Death Road to Canada|
|428|1129429340|自动|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|
|427|1134805859|自动|迷失岛|迷失島|迷失島|迷失島|Isoland|Isoland|
|426|1137257203|自动|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Muslim Prayer Times Pro, Adhan|Muslim Prayer Times Pro, Adhan|
|425|1142016085|自动|❌|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|
|424|1160608318|自动|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|
|423|1166143148|自动|❌|暴力街區2|暴力街區2|暴力街區2|Brutal Street 2|Brutal Street 2|
|422|1169282239|自动|活下去-丧尸题材末日生存冒险游戏|❌|❌|❌|❌|❌|
|421|1184204602|自动|ProMovie + 专业摄像机|ProMovie + 專業攝像機|ProMovie + 專業攝像機|ProMovie + 專業攝像機|ProMovie Recorder +|ProMovie Recorder +|
|420|1187265767|自动|❌|Monument Valley 2|Monument Valley 2|Monument Valley 2|Monument Valley 2|Monument Valley 2|
|419|1189781891|自动|❌|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|
|418|1195035357|自动|❌|地牢防禦 : 勇士的侵入|地牢防禦 : 勇士的侵入|地牢防禦 : 勇士的侵入|Dungeon Defense : The Gate|Dungeon Defense : The Gate|
|417|1217732174|自动|TA - 一对一聊天，遇见对的人|❌|❌|❌|❌|❌|
|416|1237692856|自动|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|
|415|1239299402|自动|❌|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|
|414|1241383990|自动|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|
|413|1247397901|自动|❌|奧德瑪|奧德瑪|奧德瑪|Oddmar|Oddmar|
|412|1248033433|自动|❌|王國保衛戰：復仇|王國保衛戰：復仇|王國保衛戰：復仇|Kingdom Rush Vengeance TD Game|Kingdom Rush Vengeance TD|
|411|1249864455|自动|❌|Peace, Death!|Peace, Death!|Peace, Death!|Peace, Death!|Peace, Death!|
|410|1250144822|自动|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|
|409|1259067036|自动|❌|發現動物公園|發現動物公園|發現動物公園|Wild Park Manager|Wild Park Manager|
|408|1262474519|自动|❌|Monoposto|Monoposto|Monoposto|Monoposto|Monoposto|
|407|1264608487|自动|❌|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|
|406|1290687550|自动|❌|Cytus II|Cytus II|Cytus II|Cytus II|Cytus II|
|405|1291429551|自动|❌|60 Parsecs!|60 Parsecs!|60 Parsecs!|60 Parsecs!|60 Parsecs!|
|404|1291730054|自动|❌|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|
|403|1296085645|自动|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|
|402|1298544927|自动|❌|❌|❌|❌|My Child Lebensborn|My Child Lebensborn|
|401|1303222868|自动|Paprika食谱管理3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|
|400|1312534841|自动|MyText Widget|MyText Widget|MyText Widget|MyText Widget|MyText Widget|MyText Widget|
|399|1329434099|自动|乱斗堂3|❌|❌|❌|❌|❌|
|398|1330314351|自动|微剪辑-微视频编辑助手|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|
|397|1336793944|自动|❌|勇敢的哈克|勇敢的哈克|勇敢的哈克|HAAK|HAAK|
|396|1339516665|自动|奥特曼传奇英雄VIP版|❌|❌|❌|❌|❌|
|395|1351652600|自动|❌|Boolean!|Boolean!|Boolean!|Boolean!|Boolean!|
|394|1359107338|自动|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|
|393|1359652100|自动|❌|DungeonMaker|DungeonMaker|DungeonMaker|Dungeon Maker : Dark Lord|Dungeon Maker : Dark Lord|
|392|1391339323|自动|❌|Zaptiye|Zaptiye|Zaptiye|Zaptiye|Zaptiye|
|391|1392608717|自动|❌|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|
|390|1406710800|自动|❌|Stardew Valley|Stardew Valley|Stardew Valley|Stardew Valley|Stardew Valley|
|389|1435004182|自动|❌|❌|❌|❌|❌|Hermes: KAYIP|
|388|1436429074|自动|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - Vintage Film Camera|FILCA - SLR Film Camera|
|387|1437096541|自动|❌|Rush Rally 3|Rush Rally 3|Rush Rally 3|Rush Rally 3|Rush Rally 3|
|386|1438245901|自动|❌|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|
|385|1439187947|自动|❌|Rebel Inc. (反叛公司)|Rebel Inc. (反叛公司)|Rebel Inc. (反叛公司)|Rebel Inc.|Rebel Inc.|
|384|1439881811|自动|RadarOmega|RadarOmega|RadarOmega|RadarOmega|RadarOmega|RadarOmega|
|383|1441969889|自动|❌|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|
|382|1442776789|自动|❌|槍與香蕉 - Pirates Outlaws|槍與香蕉 - Pirates Outlaws|槍與香蕉 - Pirates Outlaws|Pirates Outlaws|Pirates Outlaws|
|381|1444761746|自动|❌|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|
|380|1449893235|自动|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|
|379|1450064785|自动|山林日志|山林日誌|山林日誌|山林日誌|Hiking Logger|❌|
|378|1450144092|自动|❌|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|
|377|1451873044|自动|❌|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|
|376|1453838527|自动|❌|Age of History II|Age of History II|Age of History II|Age of History II|Age of History II|
|375|1455781522|自动|❌|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|
|374|1459749978|自动|List背单词|List背单词|List背单词|List背单词|List背单词|List背单词|
|373|1461751938|自动|❌|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|
|372|1464850921|自动|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|
|371|1474716211|自动|❌|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|
|370|1477203766|自动|❌|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|
|369|1477854253|自动|大家的日本语 初级 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|
|368|1477966166|自动|❌|❌|MONOPOLY: The Board Game|MONOPOLY: The Board Game|MONOPOLY: The Board Game|MONOPOLY: The Board Game|
|367|1477991646|自动|❌|王國：兩個皇冠|王國：兩個皇冠|王國：兩個皇冠|Kingdom Two Crowns|Kingdom Two Crowns|
|366|1479608271|自动|❌|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|
|365|1480844881|自动|❌|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|
|364|1481006495|自动|倒计时应用 Countdown App|倒計時應用 Countdown App|倒計時應用 Countdown App|倒計時應用 Countdown App|Countdown App|Countdown App|
|363|1482339363|自动|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|
|362|1484622401|自动|❌|Religion inc.上帝模擬器|Religion inc.上帝模擬器|Religion inc.上帝模擬器|Religion inc. God Simulator|Religion inc. God Simulator|
|361|1485875855|自动|❌|❌|❌|❌|❌|Başkanlar|
|360|1491530147|自动|❌|❌|❌|Slay the Spire|Slay the Spire|Slay the Spire|
|359|1497120981|自动|LUCH: Photo Effects & Filters|LUCH — Filters & Bokeh Effect|LUCH — Filters & Bokeh Effect|LUCH — Filters & Bokeh Effect|LUCH: Photo Effects & Filters|LUCH: Photo Effects & Presets|
|358|1499849161|自动|❌|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|
|357|1500098830|自动|❌|視頻大師 Pro|視頻大師 Pro|視頻大師 Pro|❌|Video Master Pro|
|356|1503486239|自动|❌|大富翁10|大富翁10|大富翁10|Richman10|Richman10|
|355|1504662191|自动|❌|❌|❌|❌|❌|Monarşi|
|354|1504760106|自动|❌|Eco inc. Earth Planet|Eco inc. Earth Planet|Eco inc. Earth Planet|Eco inc.|Eco inc.|
|353|1504952058|自动|❌|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|
|352|1505636751|自动|❌|TeleGuard|TeleGuard|TeleGuard|TeleGuard|TeleGuard|
|351|1509344823|自动|Ezberle|Ezberle|Ezberle|Ezberle|Ezberle|Ezberle|
|350|1512751689|自动|❌|The Game of Life 2|The Game of Life 2|The Game of Life 2|The Game of Life 2|The Game of Life 2|
|349|1515215584|自动|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|
|348|1515382132|自动|❌|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|
|347|1516531425|自动|JSPS APP|JSPS APP|JSPS APP|JSPS APP|JSPS APP|JSPS APP|
|346|1517349382|自动|群雄时代 - 单机三国战棋策略游戏|❌|❌|❌|❌|❌|
|345|1518841947|自动|ATSU|ATSU|ATSU|ATSU|ATSU|ATSU|
|344|1519386476|自动|❌|MiniGames - 觀看遊戲街機|MiniGames - 觀看遊戲街機|MiniGames - 觀看遊戲街機|MiniGames - Watch Games Arcade|MiniGames - Watch Games Arcade|
|343|1523633394|自动|❌|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants: BfBB|
|342|1525735418|自动|❌|❌|❌|❌|❌|Mesih|
|341|1528199331|自动|❌|崩潰大陸 2|崩潰大陸 2|崩潰大陸 2|Crashlands 2|Crashlands 2|
|340|1531462734|自动|桂林字牌手机版|桂林字牌手机版|桂林字牌手机版|桂林字牌手机版|❌|❌|
|339|1531654315|自动|❌|画師牆紙|画師牆紙|画師牆紙|MayLikeWallpaper - best hiapk|MayLikeWallpaper - best hiapk|
|338|1536762482|自动|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|
|337|1544190466|自动|避难所：生存|❌|❌|❌|❌|❌|
|336|1544412558|自动|航海奇闻|❌|❌|❌|❌|❌|
|335|1544722749|自动|拣爱|❌|❌|❌|❌|❌|
|334|1548185534|自动|❌|Musical Maze|Musical Maze|Musical Maze|Musical Maze|Musical Maze|
|333|1551207253|自动|❌|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|
|332|1551263854|自动|打金传奇:官方正版 搬砖回收永不关服超爆加强版，传奇王者霸业|❌|❌|❌|❌|❌|
|331|1555857229|自动|2048 for watch|2048_watch|2048_watch|2048_watch|2048_watch|2048_watch|
|330|1556671822|自动|合成大西瓜 for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|
|329|1559869450|自动|❌|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|❌|❌|
|328|1562560561|自动|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|
|327|1563932741|自动|❌|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|
|326|1569963107|自动|❌|❌|❌|❌|❌|Aylık Distopya|
|325|1576329230|自动|传奇1.76官方正版盛大首发(重置版)今日开服送点卡迷失传说|❌|❌|❌|❌|❌|
|324|1576763082|自动|女帝的日常|女帝的日常|女帝的日常|女帝的日常|女帝的日常|女帝的日常|
|323|1577392165|自动|❌|Monster Train|Monster Train|Monster Train|Monster Train|Monster Train|
|322|1578203914|自动|电子宠物机|电子宠物机|电子宠物机|电子宠物机|Peggy Cat - A Virtual Pet|Peggy Cat - A Virtual Pet|
|321|1581640677|自动|❌|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|
|320|1587674627|自动|爱琳诗篇:异世界冒险 少女放置卡牌手游|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|❌|❌|
|319|1590622755|自动|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|
|318|1591627945|自动|❌|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|
|317|1592505377|自动|❌|Wreckfest|Wreckfest|Wreckfest|Wreckfest|Wreckfest|
|316|1592660274|自动|❌|天際牧場物語-模擬經營自己的牧場|天際牧場物語-模擬經營自己的牧場|天際牧場物語-模擬經營自己的牧場|天际牧场物语-模拟经营自己的牧场|天际牧场物语-模拟经营自己的牧场|
|315|1595739885|自动|❌|❌|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|
|314|1596736236|自动|❌|❌|Rovio Classics: Angry Birds|Rovio Classics: Angry Birds|Red's First Flight|Red's First Flight|
|313|1600307023|自动|❌|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|
|312|1603421749|自动|传奇高爆99999% 攻速9999倍PC同款三职业:战无不胜|❌|❌|❌|❌|❌|
|311|1603553413|自动|手表浏览器|手表浏览器|手表浏览器|手表浏览器|手表浏览器|手表浏览器|
|310|1606405358|自动|❌|Dealer's Life|Dealer's Life|Dealer's Life|Dealer's Life|Dealer's Life|
|309|1609910024|自动|❌|泰拉瑞亞|泰拉瑞亞|泰拉瑞亞|❌|❌|
|308|1610947489|自动|❌|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|
|307|1612952507|自动|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|
|306|1614200925|自动|部落与弯刀|❌|❌|❌|❌|❌|
|305|1622869542|自动|❌|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|
|304|1624326561|自动|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|
|303|1631859420|自动|❌|After Inc.|After Inc.|After Inc.|After Inc.|After Inc.|
|302|1631867592|自动|❌|珍寶機場物語|珍寶機場物語|珍寶機場物語|Jumbo Airport Story|Jumbo Airport Story|
|301|1633243177|自动|Ableton Note|Ableton Note|Ableton Note|Ableton Note|Ableton Note|Ableton Note|
|300|1633253544|自动|消除星星 - 益智的星星消消乐经典手表游戏|消除星星-益智的星星消消樂經典手錶消除遊戲|消除星星-益智的星星消消樂經典手錶消除遊戲|消除星星-益智的星星消消樂經典手錶消除遊戲|Pop The Stars Game For Watch|Pop The Stars Game For Watch|
|299|1636342413|自动|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|
|298|1642601792|自动|❌|The Past Within|The Past Within|The Past Within|The Past Within|The Past Within|
|297|1642733080|自动|❌|DungeonSquad|DungeonSquad|DungeonSquad|DungeonSquad|DungeonSquad|
|296|1643199620|自动|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|
|295|1659271912|自动|❌|東京電車２|東京電車２|東京電車２|Train Dispatcher!2|Train Dispatcher!2|
|294|1659316190|自动|钢铁战队(R)|❌|❌|❌|❌|❌|
|293|1662217862|自动|Wipr 2|Wipr 2|Wipr 2|Wipr 2|Wipr 2|Wipr 2|
|292|1665706687|自动|❌|Underground Blossom|Underground Blossom|Underground Blossom|Underground Blossom|Underground Blossom|
|291|1668755109|自动|❌|Brotato:Premium|Brotato:Premium|Brotato:Premium|Brotato:Premium|Brotato:Premium|
|290|1669877091|自动|光明记忆：无限|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|
|289|1671505630|自动|迷失岛外传南瓜镇|❌|❌|❌|❌|❌|
|288|6737795387|自动|鬼谷八荒|❌|❌|❌|❌|❌|
|287|6448477521|自动|BiuBiuBiu - 空气枪|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|
|286|6472380172|自动|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|
|285|6443786927|自动|全面憨憨战争模拟器|❌|❌|❌|❌|❌|
|284|6502489827|自动|大侠立志传|❌|❌|❌|❌|❌|
|283|6742129099|自动|群英打三国-超休闲国风放置卡牌巅峰巨作|❌|❌|❌|❌|❌|
|282|6443916065|自动|WiFi万能钥匙专业版-无线热点密码安全万能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|❌|❌|
|281|6737512463|自动|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|
|280|6462190343|自动|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|
|279|6444782083|自动|王国保卫战4|❌|❌|❌|❌|❌|
|278|6450148077|自动|干中学！偷偷|干中学！偷偷|干中学！偷偷|干中学！偷偷|❌|干中学！偷偷|
|277|6449766387|自动|合成大西瓜 : 专为手表设计的合成类休闲解压小游戏|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|
|276|6740246950|自动|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|
|275|6550914957|自动|打造世界-经典沙盒建造|❌|❌|❌|❌|❌|
|274|6742537442|自动|努力活着 - 自由人生重开模拟器|❌|❌|❌|❌|❌|
|273|6741474933|自动|Berryfilm|Berryfilm|Berryfilm|Berryfilm|Berryfilm|Berryfilm|
|272|6742221550|自动|魔卡棋旅|❌|❌|❌|❌|❌|
|271|6738767315|自动|便利店开业日记|❌|❌|❌|❌|❌|
|270|6737987084|自动|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|CatLight Pro: Selfie Light Cam|CatLight Pro: Selfie Light Cam|
|269|6446607609|自动|佛系传奇:君王天下|❌|❌|❌|❌|❌|
|268|6499512726|自动|浮岛冒险|❌|❌|❌|❌|❌|
|267|6483210281|自动|生物原型|❌|❌|❌|❌|❌|
|266|6738767322|自动|森丘露营地|❌|❌|❌|❌|❌|
|265|6737434454|自动|暗夜地城 - 单机暗黑刷装备挂机游戏|❌|❌|❌|❌|❌|
|264|6743117370|自动|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|
|263|6740705851|自动|手表变身器：时空驱动器 - iWatch发声器|手錶變身器：時空驅動器 - iWatch發聲器|手錶變身器：時空驅動器 - iWatch發聲器|手錶變身器：時空驅動器 - iWatch發聲器|Henshin Hero - Game for watch|Henshin Hero - Game for watch|
|262|6743487416|自动|黄金矿工 for Watch - 经典复刻|黃金礦工 - 手錶遊戲 經典複刻|黃金礦工 - 手錶遊戲 經典複刻|黃金礦工 - 手錶遊戲 經典複刻|Gold Miner - Watch Games|Gold Miner - Watch Games|
|261|6478843819|自动|❌|家園、異星與獵人|家園、異星與獵人|家園、異星與獵人|Home, Planet & Hunters|Home, Planet & Hunters|
|260|6502453075|自动|❌|Balatro|Balatro|Balatro|Balatro|Balatro|
|259|6670749900|自动|❌|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|
|258|6711347049|自动|❌|大俠立志傳|大俠立志傳|大俠立志傳|Hero's Adventure|Hero's Adventure|
|257|6547834967|自动|❌|動物森友會 口袋露營廣場 集合版|動物森友會 口袋露營廣場 集合版|動物森友會 口袋露營廣場 集合版|Animal Crossing: Pocket Camp C|❌|
|256|6452276410|自动|❌|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|
|255|6471479898|自动|猫历 - 可爱清新日历和日程表提醒事项|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：Schedule Planner|Cat Calendar：Schedule Planner|
|254|6738371720|自动|❌|銀盤滑冰場物語|銀盤滑冰場物語|銀盤滑冰場物語|Skating Rink Story|Skating Rink Story|
|253|6456751953|自动|❌|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|
|252|6469114836|自动|❌|スイカゲーム-Aladdin X|スイカゲーム-Aladdin X|スイカゲーム-Aladdin X|Suika Game-Aladdin X|Suika Game-Aladdin X|
|251|6743648252|自动|❌|終焉車站|終焉車站|終焉車站|Saihate Station|Saihate Station|
|250|6738636631|自动|❌|烈焰同盟|❌|烈焰同盟|❌|❌|
|249|6480082872|自动|Dumbify|Dumbify|Dumbify|Dumbify|Dumbify|Dumbify|
|248|6738769251|自动|❌|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|❌|
|247|6621207768|自动|❌|聖劍同盟|❌|聖劍同盟|❌|❌|
|246|6743420230|自动|❌|夢魘騎士團|❌|夢魘騎士團|❌|❌|
|245|6736642117|自动|櫻花最前線 - 2025年預測|櫻花最前線 - 2025年預測|❌|櫻花最前線 - 2025年預測|❌|❌|
|244|6498879077|自动|❌|平安古都物語|平安古都物語|平安古都物語|Heian City Story|Heian City Story|
|243|6738636602|自动|❌|光輝同盟|❌|光輝同盟|❌|❌|
|242|6504323939|自动|❌|勇者鬥惡龍X　覺醒的五種族　OFFLINE|勇者鬥惡龍X　覺醒的五種族　OFFLINE|勇者鬥惡龍X　覺醒的五種族　OFFLINE|❌|❌|
|241|6505046490|自动|❌|摔角擂臺物語|摔角擂臺物語|摔角擂臺物語|Pro Wrestler Story|Pro Wrestler Story|
|240|6443723657|自动|❌|filmhwa (필름화) - 화민 필터|filmhwa (필름화) - 화민 필터|filmhwa (필름화) - 화민 필터|filmhwa - @hwa.min's filter|filmhwa - @hwa.min's filter|
|239|6743342476|自动|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|
|238|6742773178|自动|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|
|237|6476663854|自动|❌|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|
|236|6670469064|自动|❌|8號出口|8號出口|8號出口|The Exit 8|The Exit 8|
|235|6447508479|自动|❌|暖雪|暖雪|❌|Warm Snow|Warm Snow|
|234|6470958985|自动|❌|完美的一天 - 無限流劇情向解謎游戲|完美的一天 - 無限流劇情向解謎游戲|完美的一天 - 無限流劇情向解謎游戲|A Perfect Day: Go back to 1999|A Perfect Day: Go back to 1999|
|233|6445875391|自动|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|
|232|6443923265|自动|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|
|231|6739839815|自动|❌|RogueVana|RogueVana|RogueVana|RogueVana|RogueVana|
|230|6505052301|自动|❌|碧海蒼雲錄|碧海蒼雲錄|碧海蒼雲錄|❌|❌|
|229|6642649684|自动|❌|韭菜投資公司2|韭菜投資公司2|韭菜投資公司2|Leek Inc. 2|Leek Inc. 2|
|228|6738784092|自动|❌|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|
|227|6450724928|自动|❌|租戶賭財運|租戶賭財運|租戶賭財運|Luck be a Landlord|Luck be a Landlord|
|226|6740814979|自动|❌|Follow the meaning|Follow the meaning|Follow the meaning|Follow the meaning|Follow the meaning|
|225|6456886656|自动|❌|Layla|Layla|Layla|Layla|Layla|
|224|6498623389|自动|Folium|Folium|Folium|Folium|Folium|Folium|
|223|6738342400|自动|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|
|222|6744355637|自动|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|
|221|6476064417|自动|❌|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|
|220|6463710522|自动|❌|勇者的傳奇|勇者的傳奇|勇者的傳奇|勇者的传奇|勇者的传奇|
|219|6468572535|自动|❌|洞窟冒險團物語|洞窟冒險團物語|洞窟冒險團物語|Cavern Adventurers|Cavern Adventurers|
|218|6471947612|自动|❌|召喚騎士團|召喚騎士團|召喚騎士團|召喚騎士團|召喚騎士團|
|217|6480501528|自动|TODO：猫咪待办事项 & 提醒事项 & 备忘录|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo：To do list & Reminder|Cat Todo：To do list & Reminder|
|216|6714479204|自动|❌|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|
|215|6740349666|自动|❌|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|
|214|6473097811|自动|❌|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|
|213|6463616555|自动|❌|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|
|212|6477835115|自动|❌|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|
|211|6449003064|自动|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|
|210|6670199903|自动|❌|StreetPro Racing|StreetPro Racing|StreetPro Racing|StreetPro Racing|StreetPro Racing|
|209|6505058041|自动|❌|QUAKELINE|QUAKELINE|QUAKELINE|QUAKELINE|QUAKELINE|
|208|6744445187|自动|❌|The Platform - Survive|The Platform - Survive|The Platform - Survive|The Platform - Survive|The Platform - Survive|
|207|6469419567|自动|❌|Overwinter Survival|Overwinter Survival|Overwinter Survival|Overwinter Survival|Overwinter Survival|
|206|6444400410|自动|❌|Farming Simulator 23|Farming Simulator 23|Farming Simulator 23|Farming Simulator 23 Mobile|Farming Simulator 23 Mobile|
|205|6474616013|自动|❌|Trump Is Back|Trump Is Back|Trump Is Back|Trump Is Back|Trump Is Back|
|204|6471594918|自动|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|
|203|6686394372|自动|❌|Age of History 3|Age of History 3|Age of History 3|Age of History 3|Age of History 3|
|202|6740471827|自动|手表经典迷宫游戏|手錶經典迷宮遊戲|手錶經典迷宮遊戲|手錶經典迷宮遊戲|Classic Maze Game for Watch|Classic Maze Game for Watch|
|201|1481853033|手动|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|
|200|1581140954|手动|Noir - 为Safari添加深色模式|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|
|199|1592917505|手动|Noir – 为Safari添加深色模式|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|
|198|1591620171|手动|Stay for Safari - 浏览器伴侣|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari|Stay for Safari|
|197|1438243180|手动|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|
|196|625206080|手动|❌|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|
|195|1108032375|手动|❌|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|
|194|1439569401|手动|❌|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|
|193|6459738231|手动|❌|Lies of P|Lies of P|Lies of P|Lies of P|Lies of P|
|192|1441532941|手动|❌|神界：原罪2|神界：原罪2|神界：原罪2|Divinity: Original Sin 2|Divinity: Original Sin 2|
|191|6449748961|手动|❌|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|
|190|6499559693|手动|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|
|189|6475002485|手动|❌|Reeder.|Reeder.|Reeder.|Reeder.|Reeder.|
|188|1198176727|手动|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|
|187|904280696|手动|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|186|1055511498|手动|Day One 日記：私人日記|Day One Journal|Day One Journal|Day One Journal|Day One|Day One|
|185|1208145167|手动|Picsew - 滚动截图 & 长图拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - Scrollshot & Collage|Picsew - Scrollshot & Collage|
|184|1444636541|手动|Photomator|Photomator|Photomator|Photomator|Photomator – Photo Editor|Photomator|
|183|1444383602|手动|Goodnotes 6：笔记，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6: AI Notes & Docs|Goodnotes 6: AI Notes & Docs|
|182|1473785373|手动|钱迹记账-无广告自动记账软件 & 预算 & 资产管理|錢跡記帳: 無廣告超簡潔 & 資產管理 & 預算|錢跡記帳: 無廣告超簡潔 & 資產管理 & 預算|錢跡記帳: 無廣告超簡潔 & 資產管理 & 預算|MoneyTrack: Expense & Budget|MoneyTrack: Expense & Budget|
|181|1461652639|手动|网络调试精灵|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|iSocketTool|iSocketTool|
|180|6499198824|手动|蜂软扫描 - 全能扫描仪|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|
|179|1538124245|手动|哪里哪里|where I put it|where I put it|where I put it|where I put it|where I put it|
|178|6446469093|手动|口袋时钟 - StandBy待机Widget桌面翻页创意时钟|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|Clock Pocket:standby widget|Clock Pocket:standby widget|
|177|1610668825|手动|FyTube - 没有广告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube - YouTube Without Ads|FyTube - YouTube Without Ads|
|176|1175912897|手动|EverMemo印象便签|EverMemo印象便簽|EverMemo印象便簽|EverMemo印象便簽|EverMemo - Fastest Note|EverMemo|
|175|6504433140|手动|LaxtTime - 日常记录/循环提醒/习惯养成/倒计时|LaxtTime|LaxtTime|LaxtTime|LaxtTime - Remember Last Time|LaxtTime - Remember Last Time|
|174|920133658|手动|解剖和生理学|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|
|173|6463851696|手动|功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼|Zen++|Zen++|Zen++|Zen++|❌|
|172|1358237203|手动|时间胶囊-寄往未来的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|时间胶囊-寄往未来的信|时间胶囊-寄往未来的信|
|171|1316883372|手动|音乐世界赛特斯2|❌|❌|❌|❌|❌|
|170|956086985|手动|美元折纸|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|
|169|1436481293|手动|迷失岛3宇宙的尘埃|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|
|168|1422480068|手动|Notes Writer Pro: 笔记和 PDF 标注|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|
|167|6443915320|手动|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|
|166|884153085|手动|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|
|165|1065802380|手动|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|
|164| ~~533055404~~ |手动| ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~Night Stars~~ | ~~Night Stars~~ |
|163|1493379610|手动|时光进度 - 进度管理&待办计划|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|bProgress - Manage Daily Tasks|bProgress - Manage Daily Tasks|
|162|1255627901|手动|方便面 - 朋友圈图文排版好帮手|泡麵｜經典原味|泡麵｜經典原味|泡麵｜經典原味|Instant Noodles: Original|Instant Noodles: Original|
|161|1449020025|手动|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|
|160|1576004936|手动|化学 - 元素周期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|Chemistry Periodic Table 2025|Chemistry Periodic Table 2025|
|159|827740598|手动|小牛计算器(高级版)|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|
|158|355460798|手动|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|
|157|1595313870|手动|瓦尔登 - 日程管理，一个就够|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|Walden - Calendar/ToDo/Notes|Walden - Calendar/ToDo/Notes|
|156|6449383791|手动|GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|
|155|1587301632|手动|全能记(录音,备忘,流水)|全能備忘錄|全能備忘錄|全能備忘錄|All In One Memo|All In One Memo|
|154|1464666446|手动|我的足迹: GPS记录仪|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|MyTracks: GPS Recorder|MyTracks: GPS Recorder|
|153|1665759338|手动|坐在罐子里的人|❌|❌|❌|❌|❌|
|152|953426154|手动|Be Focused Pro - Focus Timer|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro - Focus Timer|Be Focused Pro- Pomodoro Timer|
|151|1238778050|手动|纪念碑谷2|❌|❌|❌|❌|❌|
|150|1020541183|手动|电影精灵 - 专业视频编辑和电影制作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|MovieSpirit - Movie Maker Pro|MovieSpirit - Movie Maker Pro|
|149|576718804|手动|aTimeLogger - 时间记录工具|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger Time Tracker|aTimeLogger Time Tracker|
|148|670400597|手动|梁的挠度|樑的撓度|樑的撓度|樑的撓度|Deflection|Deflection|
|147|1400652313|手动|冰钓大师|❌|❌|❌|❌|❌|
|146|1551596643|手动|模拟地铁|❌|❌|❌|❌|❌|
|145|1437479513|手动|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|❌|❌|
|144|1314212521|手动|PPHub For GitHub - 开发者必备|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|
|143|1564383045|手动|算法导论.助手|算法導論.助手|算法導論.助手|算法導論.助手|CLRS.Helper|CLRS.Helper|
|142|1380582804|手动|手机帝国|手機帝國|手機帝國|手機帝國|Mobile Empire|Mobile Empire|
|141|6466390901|手动|旋转音律 Rotaeno|❌|❌|❌|❌|❌|
|140|1596406400|手动|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|
|139|598581396|手动|Kingdom Rush Frontiers 塔防史诗冒险|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers TD|Kingdom Rush Frontiers TD|
|138|1157863540|手动|泰拉瑞亚|❌|❌|❌|❌|❌|
|137|1630541373|手动|隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|
|136|1512838461|手动|DayCircle - 倒数|DayCircle - 倒數|DayCircle - 倒數|DayCircle - 倒數|DayCircle - Day counter|DayCircle - Day counter|
|135|1400032769|手动|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|
|134| ~~460661291~~ |手动| ~~安全笔记+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ |
|133| ~~505904421~~ |手动| ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ |
|132| ~~1527841661~~ |手动| ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~Sandbox Planet~~ | ~~Sandbox Planet~~ |
|131|1159266744|手动|双子 Gemini|雙子 Gemini|雙子 Gemini|雙子 Gemini|❌|❌|
|130|1453808408|手动|恶果之地|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|
|129|1458460469|手动|人类跌落梦境|❌|❌|❌|❌|❌|
|128|1481100296|手动|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|
|127| ~~431033044~~ |手动| ~~Phone Drive - 云储存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive: File Storage Sync~~ | ~~Phone Drive: File Storage Sync~~ |
|126|1309638846|手动|Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Vintage Camera - Goodak|Vintage Camera - Goodak|
|125|1618180398|手动|照片同步-导出备份相册照片视频|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|PhotoSync-Backup your photos|PhotoSync-Backup your photos|
|124| ~~456637671~~ |手动| ~~安全监控照片+视频Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~Safety Photo+Video Pro~~ | ~~Safety Photo+Video Pro~~ |
|123|1453318714|手动|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — Story Maker|Vostok — Story Maker|
|122|931188326|手动|DayCost|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|
|121|6449930220|手动|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|Wafari - Watch Browser|Wafari - Watch Browser|
|120| ~~818394449~~ |手动| ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~Timeline - World history~~ | ~~Timeline - World history~~ |
|119|1391571907|手动|Fine修图|Fine修圖|Fine修圖|Fine修圖|Fine - Photo Editor|Fine - Photo Editor|
|118|6499125531|手动|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|
|117| ~~1485101937~~ |手动| ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ |
|116|703265535|手动|FocusDots · 专注于当下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · Focus What Matters|FocusDots · Focus What Matters|
|115|6479307181|手动|灵体侦测器|靈體偵測器|靈體偵測器|靈體偵測器|Ghostly Detector|Ghostly Detector|
|114| ~~488674899~~ |手动| ~~雨雷達-實時天氣圖。 亞洲和中國。°~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~RAIN RADAR °- sky weather NOAA~~ | ~~RAIN RADAR ° live weather maps~~ |
|113|1636719674|手动|锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|Lock Launcher - Screen Widgets|Lock Launcher - Screen Widgets|
|112|1543163106|手动|末剑二|❌|❌|❌|❌|❌|
|111|6443812780|手动|我的水世界求生|❌|❌|❌|❌|❌|
|110|1344655035|手动|蜡烛人|❌|❌|❌|❌|❌|
|109|6446614518|手动|画中世界|❌|❌|❌|❌|❌|
|108|1159700098|手动|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|To the Moon|To the Moon|
|107|1271620263|手动|艾希 - ICEY|ICEY|ICEY|ICEY|ICEY|ICEY|
|106|1361473095|手动|喵斯快跑|MuseDash|MuseDash|MuseDash|MuseDash|MuseDash|
|105|6476010032|手动|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|
|104|510249014|手动|水平仪 HD|水準管 HD|水準管 HD|水準管 HD|Level HD.|Level HD.|
|103|904237743|手动|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|102|1622341132|手动|iSleeper - 梦话鼾声记录与睡眠监测|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper: Sleep Tracker|iSleeper: Sleep Tracker|
|101|900833042|手动|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|
|100|1467880680|手动|LEDot|LEDot|LEDot|LEDot|LEDot|LEDot - Realistic Portable LED|
|99|1455055663|手动|皮皮虾专业版|❌|❌|❌|❌|❌|
|98|1595901138|手动|NES 模拟器 - 吞食天地|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|
|97|1163515895|手动|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账本Pro-管家理财必备工具|鲨鱼记账本Pro-管家理财必备工具|
|96|754105884|手动|NightCap相机|NightCap相機|NightCap相機|NightCap相機|NightCap Camera|NightCap Camera|
|95|1642364007|手动|海拔指南针|海拔指南针|海拔指南针|海拔指南针|Altitude Compass|Altitude Compass|
|94|1522215205|手动|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|
|93|1484181693|手动|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|
|92|1117998129|手动|2025人体解剖学图谱|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|
|91|6444824570|手动|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|
|90|469338840|手动|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|
|89|1197275827|手动|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|
|88|578665578|手动|Threema。安全的通讯工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|Threema. The Secure Messenger|Threema. The Secure Messenger|
|87|1547418803|手动|Incredibox - 好玩的音乐盒|❌|❌|❌|❌|❌|
|86|1210251567|手动|SleepTown 睡眠小镇|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown|SleepTown|
|85|1080235640|手动|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|
|84|1658579911|手动|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|XIAOTE - Tesla BLE Watch key|XIAOTE - Tesla BLE Watch key|
|83|1152396902|手动|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|
|82|1633366918|手动|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|
|81|6480159520|手动|转录大师 - 录音转文字、实时离线转录|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - Speech to Text|Whisper Pen - Speech to Text|
|80|966489322|手动|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|
|79|898876435|手动|Planit巧摄专业版：风光摄影计划神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit Pro: Photo Planner|Planit Pro: Photo Planner|
|78|1062745479|手动|HeartWatch: 心脏和活动监测器|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: Heart Rate Tracker|HeartWatch: Heart Rate Tracker|
|77|6476963352|手动|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|
|76|1459076631|手动|隐形守护者|隐形守护者|隐形守护者|❌|隐形守护者|❌|
|75|1660014964|手动|飞越13号房|❌|❌|❌|❌|❌|
|74|730712409|手动|ProCam - 专业相机|ProCam - 專業相機|ProCam - 專業相機|ProCam - 專業相機|ProCam - Pro Camera|ProCam - Pro Camera|
|73|6451239549|手动|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|
|72|1633865171|手动|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|
|71|1492395549|手动|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|❌|
|70|1661419573|手动|atvTools|atvTools|atvTools|atvTools|atvTools|atvTools|
|69|6479683928|手动|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|
|68|6443798663|手动|敲木鱼 - 打节拍敲音效解压神器|敲木魚|敲木魚|敲木魚|MuYu|MuYu|
|67|373454750|手动|随手记Pro–个人家庭生意记账|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|随手记Pro|随手记Pro–记账财务管理软件|
|66|916366645|手动|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|
|65|1164801111|手动|AutoSleep - 通过手表自动追踪睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep Track Sleep on Watch|AutoSleep Track Sleep on Watch|
|64|1625289361|手动|空气投篮|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|
|63|1261944766|手动|Alook浏览器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook Browser - 8x Speed|Alook Browser - 8x Speed|
|62|866450515|手动|Forest 专注森林 - 番茄钟学习计时器|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest: Focus for Productivity|Forest: Focus for Productivity|
|61|1600873673|手动|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|❌|❌|❌|
|60|388624839|手动|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别|CamScanner+|CamScanner+|CamScanner+|CamScanner + | OCR Scanner|CamScanner + | PDF Scanner|
|59|768160271|手动|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|
|58|1439723850|手动|时间规划局 - 倒计时与提醒事项|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|
|57|6447023668|手动|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|
|56|6468843723|手动|❌|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|
|55|6468845173|手动|❌|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|
|54|6468845068|手动|❌|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – Definitive|GTA: San Andreas – Definitive|
|53|1631331207|手动|❌|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|
|52|1598130789|手动|❌|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|
|51|1085114709|手动|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|
|50|6450262949|手动|Longshot - 截图 & OCR文字识别|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|
|49|6451498949|手动|❌|Stray|Stray|Stray|Stray|Stray|
|48|1630403500|手动|APTV|APTV|APTV|APTV|APTV|APTV|
|47|1552536109|手动|PasteNow - 剪贴板工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - Instant Clipboard|PasteNow - Instant Clipboard|
|46|1558391784|手动|Filebar|Filebar|Filebar|Filebar|Filebar - media player|Filebar - media player|
|45|1548711022|手动|Barbee - 清理您的菜单栏图标|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|
|44|1575588022|手动|MenubarX - 强大的菜单栏浏览器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - Floating Browser|MenubarX - Floating Browser|
|43|1630034110|手动|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|
|42|1009747025|手动|zFuse - 影音播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - Video Player|zFuse - Video Player|
|41|1054505347|手动|zFuse - 视频播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - Media Player|zFuse - Media Player|
|40|1659622164|手动|VidHub - 高清影片视频播放器，快速播放云盘网盘|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|
|39|1136220934|手动|Infuse|Infuse|Infuse|Infuse|Infuse|Infuse|
|38|1476649036|手动|帕斯卡契约|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|
|37|1635315427|手动|暖雪|❌|❌|❌|❌|❌|
|36|1523446532|手动|重生细胞|❌|❌|❌|❌|❌|
|35|1389752090|手动|❌|Dead Cells|Dead Cells|Dead Cells|Dead Cells|Dead Cells|
|34|1640627334|手动|❌|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|
|33|6450980545|手动|❌|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|
|32|6462360082|手动|❌|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|
|31|1620883955|手动|❌|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|
|30|1606703078|手动|❌|槍火重生|槍火重生|槍火重生|Gunfire Reborn|❌|
|29|1373575045|手动|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|28|1371965583|手动|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|27|6450877530|手动|花园之间|❌|❌|❌|❌|❌|
|26|1601446687|手动|❌|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|
|25|1587860402|手动|❌|籠中窺夢|籠中窺夢|籠中窺夢|Moncage|Moncage|
|24|1584313012|手动|笼中窥梦|❌|❌|❌|❌|❌|
|23|1465779286|手动|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|22|1445379072|手动|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|21|1521190840|手动|格莉斯的旅程|❌|❌|❌|❌|❌|
|20|728293409|手动|❌|紀念碑谷|紀念碑谷|紀念碑谷|Monument Valley|Monument Valley|
|19|1582832845|手动|纪念碑谷|❌|❌|❌|❌|❌|
|18|1644917705|手动|无处遁形：全网公敌|無處遁形：全網公敵|無處遁形：全網公敵|無處遁形：全網公敵|Cyber Manhunt|Cyber Manhunt|
|17|1369179088|手动|❌|Grimvalor|Grimvalor|Grimvalor|Grimvalor|Grimvalor|
|16|1669723530|手动|原界之罪|❌|❌|❌|❌|❌|
|15|481629890|手动|❌|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|
|14|656951157|手动|❌|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|
|13|886561127|手动|❌|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|
|12|1201642309|手动|❌|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|
|11|1529448980|手动|❌|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|
|10|1529445840|手动|❌|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|
|9|1596063349|手动|❌|Stash|Stash|Stash|Stash - Rule Based Proxy|Stash - Rule Based Proxy|
|8|6444029612|手动|❌|Loon Lite|Loon Lite|Loon Lite|Loon Lite|Loon Lite|
|7|1373567447|手动|❌|Loon|Loon|Loon|Loon|Loon|
|6|1442620678|手动|❌|Surge 5|Surge 5|Surge 5|Surge 5|Surge 5|
|5|1443988620|手动|❌|Quantumult X|Quantumult X|Quantumult X|Quantumult X|Quantumult X|
|4|932747118|手动|❌|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|
|3|1642682818|手动|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|
|2|1319191852|手动|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|
|1|1067198688|手动|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|

# 运行机制及流程
整个机制依赖于 `GitHub Actions` 提供的定时任务，每隔 `60分钟` 执行一次，整体流程如下：
1. 获取付费排行榜的应用信息
2. 更新跟踪的应用列表
3. 获取应用最新价格信息
   1. 通过 [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1) 获取应用详细信息和 `应用本体` 的价格
   2. 基于上一步获取的应用详情链接，解析链接获取 `App 内购买项目` 的价格
4. 读取已存储价格信息
5. 计算出折扣信息
6. 储存最新价格信息
7. 更新 `RSS` 文件
8. 推送通知到 `Telegram` 
9. 推送通知到 `钉钉` 
10. 更新 `README.md` 
11. 提交 `Git` 更新

以上流程走完，如果有折扣信息，订阅了 `RSS 源` 和 `Telegram 频道` 的朋友，会收到推送
# 如何参与贡献

## 1. 补充 `国家或地区` 或 `应用` 
需要有一定的 `TypeScript` 语言基础，下面是大致的操作步骤，如果觉得上手有难度，可以提 `Issue` 
* 补充 `国家或地区` 
   1. 获取 `国家或地区` 的 `编码` 
      1. 在你的苹果设备打开 `App Store` 应用
      2. 打开 `App Store` 中任何一个应用的详情
      3. 点击 `分享按钮` 
      4. 点击 `拷贝链接` 
      5. 将拷贝的 `链接` 粘贴至任何可以输入的地方，例如记事本
         * 你将获得类似的一个链接地址：https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * 它的规则是：协议://apps.apple.com/国家或地区的编码/app/应用的名称/id应用的ID?x1=x1&x2=x2
         * 例如从这个 https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US 链接获取到的 `编码` 就是 `us` 
   2. 修改 `global.d.ts` 
      * 假如你获取的编码是 `xxx `
      * 修改前类型是： `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us'` 
      * 修改后的类型： `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us' | 'xxx'` 
   3. 修改 `appinfo.config.ts` 
      1. 补充 `regions` 变量声明
      2. 补充 `getRegionNameMap` 变量声明
      3. 补充 `regionInAppPurchasesTextMap` 变量声明
      4. 补充 `regionLanguageCodeMap` 变量声明
      5. 补充 `regionTimezoneMap` 变量声明
* 补充 `应用` 
   1. 获取 `应用` 的 `ID` 
      1. 在你的苹果设备打开 `App Store` 应用
      2. 打开 `App Store` 中你想添加应用的详情
      3. 点击 `分享按钮` 
      4. 点击 `拷贝链接` 
      5. 将拷贝的 `链接` 粘贴至任何可以输入的地方，例如记事本
         * 你将获得类似的一个链接地址：https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * 它的规则是：协议://apps.apple.com/国家或地区的编码/app/应用的名称/id应用的ID?x1=x1&x2=x2
         * 例如从这个 https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US 链接获取到的 `ID` 就是 `409201541` 
   2. 修改 `appinfo.config.ts` 
      1. 补充 `appConfig` 变量声明
* 最后将你的提交合并到本项目的 `main` 分支


## 2. 其他
若不想参与编码实现，只是有好的想法或者是发现 bug 直接提 `Issue` <br />若想参与编码实现，由于现有的逻辑较多，贸然改动可能会影响已储存数据，也是先提 `Issue` ，后续可以根据其影响模块或难易程度来决定指派任务
# Star History
<a href="https://star-history.com/#eyelly-wu/appstore-discounts&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)"srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date&theme=dark"></source><source media="(prefers-color-scheme: light)"srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date"></source><img alt="Star History Chart"src="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date" />
  </picture>
</a>

# License
[MIT](./LICENSE)

Copyright (c) 2024-present Eyelly Wu