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
当前已收录 `6` 个 `国家或地区` 和 `886` 个 `应用` <br />只有下面罗列出的 `国家或地区` 的 `应用` 有折扣信息时，才会有推送，如果你所在 `国家或地区` 或喜欢的 `应用` 不在列表中，欢迎补充<br />
>特别说明：下表中 `❌` 表示在当前 `国家或地区` 的 `App Store` 不存在该应用<br />如果列表中的某些应用频繁的在打折，吸引你安装使用，你也成功被吸引安装使用了，但最终使用体验却很差卸载了应用。对于类似情况欢迎反馈到 `Issue` ，同一个应用反馈的次数超过 `10` 次，该应用的折扣信息推送极有可能会被禁止<br />目前被 ~~删除线~~ 标记的应用表示已被禁止推送通知

|序号|App ID|中国大陆（cn）|中国香港（hk）|中国澳门（mo）|中国台湾（tw）|美国（us）|土耳其（tr）|
|:-|:-|:-|:-|:-|:-|:-|:-|
|1|304731501|Tempo - Metronome 节拍器|Tempo - Metronome 節拍器|Tempo - Metronome 節拍器|Tempo - Metronome 節拍器|Tempo - Metronome with Setlist|Tempo - Metronome with Setlist|
|2|954982733|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|
|3|979048658|❌|❌|❌|新多益必考選擇題型1000|新多益必考選擇題型1000|新多益必考選擇題型1000|
|4|1050535507|❌|Lanota - 動感節奏音樂遊戲|Lanota - 動感節奏音樂遊戲|Lanota - 動感節奏音樂遊戲|Lanota - Music game with story|Lanota - Music game with story|
|5|1078553162|❌|超級單字王Pro|超級單字王Pro|超級單字王Pro|超級單字王Pro|❌|
|6|1384164285|AR鲁班尺|AR魯班尺|AR魯班尺|AR魯班尺|AR鲁班尺|AR鲁班尺|
|7|1586762439|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|
|8|1598843625|❌|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|
|9|6445905944|❌|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|
|10|6449941289|❌|Spirit of the Island|Spirit of the Island|Spirit of the Island|Spirit of the Island|Spirit of the Island|
|11|384363262|13:20:玛雅历|13:20:Sync|13:20:Sync|13:20:Sync|13:20:Sync|13:20:Sync|
|12|1561136737|❌|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|
|13|6451224796|❌|藏武|藏武|藏武|藏武|❌|
|14|6504192378|❌|B.ROLL - 青春濾鏡相機|B.ROLL - 青春濾鏡相機|B.ROLL - 青春濾鏡相機|B.ROLL - Youth Filter Camera|B.ROLL - Youth Filter Camera|
|15|1462324486|❌|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|
|16|344844888|天元乌兔万年历 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|
|17|349242632|六爻装卦|六爻裝卦|六爻裝卦|六爻裝卦|六爻装卦|六爻装卦|
|18|936694037|录音机专业版: 高清录制|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|
|19|1101997011|论藏甲-奇门(实用)|奇門(實用)|奇門(實用)|奇門(實用)|奇門(實用)|奇門(實用)|
|20|1147297267|❌|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|
|21|1205486761|❌|Beholder|Beholder|Beholder|Beholder|Beholder|
|22|1506620807|麻将AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|Mahjong AI Analyze Calculator|麻将人工智能辅助工具 - 小番|
|23|1513506417|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|
|24|1563906582|❌|Bus Simulator|Bus Simulator|Bus Simulator|Bus Simulator|Bus Simulator|
|25|1586437121|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|
|26|1599393574|❌|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|
|27|1642715290|❌|Little Big Workshop|Little Big Workshop|Little Big Workshop|Little Big Workshop|Little Big Workshop|
|28|1672004303|❌|探險頑皮動物園|探險頑皮動物園|探險頑皮動物園|Zoo Park Story|Zoo Park Story|
|29|6463115144|❌|開拍！電視製作物語|開拍！電視製作物語|開拍！電視製作物語|TV Studio Story|TV Studio Story|
|30|6448530928|❌|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|
|31|6502455111|❌|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|
|32|295462558|❌|Toobz|Toobz|Toobz|Toobz|Toobz|
|33|329233299|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|
|34|329981776|❌|Sudoku ″|Sudoku ″|Sudoku ″|Sudoku ″|Sudoku ″|
|35|363738376|forScore|forScore|forScore|forScore|forScore|forScore|
|36|479431697|❌|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|
|37|525176875|太阳测量师(Sun Surveyor)|Sun Surveyor (太陽測量師)|Sun Surveyor (太陽測量師)|Sun Surveyor (太陽測量師)|Sun Surveyor (Sun & Moon)|Sun Surveyor (Sun & Moon)|
|38|922155038|aprs.fi|aprs.fi|aprs.fi|aprs.fi|aprs.fi|aprs.fi|
|39|989630809|❌|Malody|Malody|Malody|Malody|Malody|
|40|1001613037|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|
|41|1029588869|❌|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|
|42|1043963852|Pipefitter|Pipefitter|Pipefitter|Pipefitter|Pipefitter|Pipefitter|
|43|1086617993|时间块 - 快速记录时间规划日程安排|時間塊 - 快速記錄時間規劃日程安排|時間塊 - 快速記錄時間規劃日程安排|時間塊 - 快速記錄時間規劃日程安排|BlockyTime|BlockyTime|
|44|1104795347|iFiles 2|iFiles 2|iFiles 2|iFiles 2|iFiles 2|iFiles 2|
|45|1184336299|NAS Detector|NAS Detector|NAS Detector|NAS Detector|NAS Detector|NAS Detector|
|46|1270659758|如果可以回家早一点|如果可以回家早一點|如果可以回家早一點|如果可以回家早一點|If only I could go home early|If only I could go home early|
|47|1308038634|❌|修真风云录|修真风云录|修真风云录|修真风云录|修真风云录|
|48|1486110292|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|
|49|1531068181|TimeGlance - 并发症|TimeGlance - 複雜功能|TimeGlance - 複雜功能|TimeGlance - 複雜功能|TimeGlance - Complication|TimeGlance - Complication|
|50|1551539091|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|
|51|1552157188|Ace Subtitle Converter：字幕转换器|轉換字幕格式|轉換字幕格式|轉換字幕格式|Ace Subtitle Converter|Ace Subtitle Converter|
|52|1577762239|❌|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|
|53|1613920866|金價即時通|金價即時通|金價即時通|金價即時通|金價即時通|金價即時通|
|54|1617006551|❌|南國度假島物語|南國度假島物語|南國度假島物語|Tropical Resort Story|Tropical Resort Story|
|55|6447693393|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|
|56|6446021269|❌|ROCKMAN X DiVE Offline|ROCKMAN X DiVE Offline|ROCKMAN X DiVE Offline|MEGA MAN X DiVE Offline|MEGA MAN X DiVE Offline|
|57|6446337236|新概念英语-新概念英语全四册单词听力口语|新概念英語--新概念英語全四册單詞聽力口語|新概念英語--新概念英語全四册單詞聽力口語|新概念英語--新概念英語全四册單詞聽力口語|New Concept English Study|New Concept English Study|
|58|6475892753|❌|Listenify|❌|Listenify|Listenify|Listenify|
|59|6739755879|百名店map|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|
|60|6443849085|❌|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|
|61|6744893097|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|
|62|463295925|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|
|63|1115022026|朗达·拜恩创作的《金钱的秘密》|The Secret To Money|The Secret To Money|The Secret To Money|The Secret To Money|The Secret To Money|
|64|1442440203|大家的日语初级-第二版|❌|❌|大家的日本語初級1-改訂版|❌|❌|
|65|1453820315|❌|This Is the Police 2|This Is the Police 2|This Is the Police 2|This Is the Police 2|This Is the Police 2|
|66|1453875289|❌|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|
|67|1543161449|❌|冒險村物語2|冒險村物語2|冒險村物語2|Dungeon Village 2|Dungeon Village 2|
|68|1616652599|❌|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|
|69|6444435974|❌|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|
|70|755018884|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|❌|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|
|71|1319618742|❌|Getting Over It|Getting Over It|Getting Over It|Getting Over It|Getting Over It|
|72|1423115391|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|
|73|6474207287|❌|Wagotabi（和語旅）：學習日語|Wagotabi（和語旅）：學習日語|Wagotabi（和語旅）：學習日語|Wagotabi: Learn Japanese|Wagotabi: Learn Japanese|
|74|497880658|J23 - 发布日期和补货|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|
|75|1108935309|❌|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|
|76|1410053842|小渔排班 - 倒班工作者的专属日历|小漁輪班|小漁輪班|小漁輪班|小渔排班 - 倒班工作者的专属日历|小渔排班 - 倒班工作者的专属日历|
|77|1519508653|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt|Nomad Sculpt|
|78|6446826650|❌|創造都市島物語|創造都市島物語|創造都市島物語|Dream Town Island|Dream Town Island|
|79|998437590|西语背单词|西语背单词|西语背单词|西语背单词|西语背单词|西语背单词|
|80|430388524|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|
|81|592155900|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|
|82|625274950|漢語詞典繁體版|國語辭典|國語辭典|國語辭典|中國漢語辭典 Chinese Dictionary|中國漢語辭典 Chinese Dictionary|
|83|998834675|❌|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|
|84|1232529101|❌|歸家異途|歸家異途|歸家異途|Home Behind|Home Behind|
|85|1573482724|❌|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|
|86|1602772289|❌|7 Days to End with You|7 Days to End with You|7 Days to End with You|7 Days to End with You|7 Days to End with You|
|87|1613295180|❌|青春敘曲|青春敘曲|青春敘曲|Growing Up: Life of the '90s|Growing Up: Life of the '90s|
|88|1614666556|❌|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|
|89|1624777523|❌|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|
|90|413943804|Real Piano™|Real Piano™|Real Piano™|Real Piano™|Real Piano™|Real Piano™|
|91|508064644|地震讯息|地震訊息|地震訊息|地震訊息|Earthquakes Pro|Earthquakes Pro|
|92|1038014543|❌|Day R Premium: last world war|Day R Premium: last world war|Day R Premium: last world war|Day R Premium: last world war|Day R Premium|
|93|1084793426|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|
|94|1596863467|❌|LoveChoice 揀愛|LoveChoice 揀愛|LoveChoice 揀愛|LoveChoice|LoveChoice|
|95|1602403259|Webmail App|Webmail App|Webmail App|Webmail App|Webmail App|Webmail App|
|96|1622064157|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|
|97|6447606411|❌|創意咖啡店物語|創意咖啡店物語|創意咖啡店物語|Cafe Master Story|Cafe Master Story|
|98|6449046261|❌|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|Crystania Wars 2-Roguelike TD|Crystania Wars 2-Roguelike TD|
|99|336543029|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|
|100|583922375|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|
|101|608540795|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|
|102|975770717|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|
|103|1056698678|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|
|104|1062022008|LumaFusion|LumaFusion|LumaFusion|LumaFusion|LumaFusion|LumaFusion|
|105|1207867591|❌|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|
|106|1326740784|❌|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|
|107|1372408358|ARGun2018|ARGun2018|ARGun2018|ARGun2018|ARGun2018|ARGun2018|
|108|1438597800|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|
|109|1448798374|❌|CAR++|CAR++|CAR++|CAR++|CAR++|
|110|1450908177|❌|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|
|111|1509817154|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|
|112|1513814705|计算器键盘 - 快人一步|計算器鍵盤 - 快人一步|計算器鍵盤 - 快人一步|計算器鍵盤 - 快人一步|Calculator Keyboard - Faster|Calculator Keyboard - Faster|
|113|1543183092|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|
|114|6744311159|魔王终局|❌|❌|❌|❌|❌|
|115|6740014272|水果合成 - 手表游戏|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|
|116|6742253703|❌|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|
|117|6463440317|❌|❌|❌|Online Kaza Tutanağı|Online Kaza Tutanağı|Online Kaza Tutanağı|
|118|6502287918|❌|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|
|119|400666114|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|
|120|562989701|❌|Vector Classic|Vector Classic|Vector Classic|Vector Classic|Vector Classic|
|121|1127680609|吾龟 - 记录乌龟生长，制作生长曲线|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|
|122|1171627280|❌|魔窟-無盡的地下城：暗黑世界|魔窟-無盡的地下城：暗黑世界|魔窟-無盡的地下城：暗黑世界|魔窟-无尽的地下城: 暗黑世界|魔窟-无尽的地下城: 暗黑世界|
|123|1179421849|❌|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|
|124|1260311003|五线谱照片扫描仪 - 乐谱图像识别|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - Sheet Music|Notation Scanner - Sheet Music|
|125|1291427111|❌|Evoland 2|Evoland 2|Evoland 2|Evoland 2|Evoland 2|
|126|1437715202|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|
|127|1519571900|Luwian|Luwian|Luwian|Luwian|Luwian|Luwian|
|128|1544947623|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|
|129|1575192531|❌|遊樂園夢物語|遊樂園夢物語|遊樂園夢物語|Dream Park Story|Dream Park Story|
|130|6742311454|伏魔诀-阴阳秘术诡道修仙录|❌|❌|❌|❌|❌|
|131|6444396120|挺进地牢|❌|❌|❌|❌|❌|
|132|6738590491|KennysGifs|KennysGifs|KennysGifs|KennysGifs|KennysGifs|KennysGifs|
|133|6444311205|❌|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|
|134|6477660875|❌|大海賊探險物語DX|大海賊探險物語DX|大海賊探險物語DX|High Sea Saga DX|High Sea Saga DX|
|135|6447090616|Whisper Notes - 离线 AI 语音输入转录文字|Whisper Notes - 離線 AI 語音輸入轉錄文字|Whisper Notes - 離線 AI 語音輸入轉錄文字|Whisper Notes - 離線 AI 語音輸入轉錄文字|Whisper Notes - Speech To Text|Whisper Notes - Speech To Text|
|136|414371107|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|
|137|510119487|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|
|138|561396899|❌|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|
|139|634158738|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|
|140|814977594|❌|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|
|141|958889621|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|
|142|1066366174|❌|Concentration Grid|Concentration Grid|Concentration Grid|Concentration Grid|Concentration Grid|
|143|1397002811|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|
|144|1447509164|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|
|145|1456714022|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|
|146|1459520638|❌|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|
|147|1463480017|❌|韭菜投資公司|韭菜投資公司|韭菜投資公司|Leek Inc.|Leek Inc.|
|148|1466120520|❌|iVerify Basic|iVerify Basic|iVerify Basic|iVerify Basic|iVerify Basic|
|149|1499085878|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|
|150|1522425038|Alien10|Alien10|Alien10|Alien10|Alien10|Alien10|
|151|1541290982|GPSPlus Pro|GPSPlus Pro|GPSPlus Pro|GPSPlus Pro|GPSPlus - Location Editor Pro|GPSPlus - Location Editor Pro|
|152|1551579024|❌|創意漢堡物語|創意漢堡物語|創意漢堡物語|Burger Bistro Story|Burger Bistro Story|
|153|1562608316|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|
|154|1601177112|❌|便利商店開業日記|便利商店開業日記|便利商店開業日記|Convenience Stories|Convenience Stories|
|155|1609059358|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|
|156|6702013134|FOCUS - 猫猫专注计时器和学习番茄钟|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - Kitty Focus Timer|Cat Flow - Kitty Focus Timer|
|157|6740487579|❌|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|
|158|6451009326|❌|LMP|LMP|LMP|LMP|LMP|
|159|6473789128|❌|星落湖傳說-魔法騎士團|星落湖傳說-魔法騎士團|星落湖傳說-魔法騎士團|❌|❌|
|160|299021909|圣经工具(新标点和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|
|161|407078169|❌|⋆數獨+|⋆數獨+|⋆數獨+|⋆Sudoku+|⋆Sudoku+|
|162|418751595|GyrOSC|GyrOSC|GyrOSC|GyrOSC|GyrOSC|GyrOSC|
|163|667362389|❌|❌|The Room Two|❌|The Room Two|The Room Two|
|164|768379887|Eye Meter|Eye Meter|Eye Meter|Eye Meter|Eye Meter|Eye Meter|
|165|814323051|❌|中世紀Bridge Constructor|中世紀Bridge Constructor|中世紀Bridge Constructor|Bridge Constructor Medieval|Bridge Constructor Medieval|
|166|911205290|❌|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|
|167|983145797|超注音|超注音|超注音|超注音|超注音|超注音|
|168|1033342465|Just Press Record|Just Press Record|Just Press Record|Just Press Record|Just Press Record|Just Press Record|
|169|1112850631|❌|樂秀專業版-影片編輯與影片剪輯|樂秀專業版-影片編輯與影片剪輯|樂秀專業版-影片編輯與影片剪輯|VideoShow PRO - Video Editor|VideoShow PRO - Video Editor|
|170|1126386264|❌|AdGuard Pro — adblock|AdGuard Pro — adblock|AdGuard Pro — adblock|AdGuard Pro — adblock&privacy|AdGuard Pro — adblock|
|171|1182456409|❌|奧托的奧德賽|奧托的奧德賽|奧托的奧德賽|Alto's Odyssey|Alto's Odyssey|
|172|1238247658|❌|Cluedo: Classic Edition|Cluedo: Classic Edition|❌|❌|Cluedo: Classic Edition|
|173|1260271235|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|
|174|1260967308|WhatCall|WhatCall|WhatCall|WhatCall|WhatCall|WhatCall|
|175|1423585518|ROMAN: 进食计画、减肥、减脂一体化。 体重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|Roman: budget weight loss|Roman: budget weight loss|
|176|1508108761|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|
|177|1550721625|JAMMATES|JAMMATES|JAMMATES|JAMMATES|JAMMATES|JAMMATES|
|178|1582355047|❌|❌|❌|❌|❌|Hacker Başlangıç|
|179|1610305853|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|
|180|1616391834|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|❌|❌|
|181|1668418644|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|
|182|6477756843|❌|Final Girl Companion|Final Girl Companion|Final Girl Companion|Final Girl Companion|Final Girl Companion|
|183|6698876690|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|
|184|6742457882|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|
|185|6471914901|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|
|186|300132735|专业万年历 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|
|187|430234732|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|
|188|602990197|❌|METAL SLUG X|METAL SLUG X|METAL SLUG X|METAL SLUG X|METAL SLUG X|
|189|898697688|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|
|190|1304822713|无尽坦克大战 - 八位元单机王者 完美模拟穿越旧经典电视手游|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|Infinity Tank Battle|Infinity Tank Battle|
|191|1400579543|❌|❌|❌|❌|imo video calls and chat HD|❌|
|192|1435461053|❌|This Is the Police|This Is the Police|This Is the Police|This Is the Police|This Is the Police|
|193|1471323296|❌|籃球熱潮物語|籃球熱潮物語|籃球熱潮物語|Basketball Club Story|Basketball Club Story|
|194|1472184189|❌|The White Door|The White Door|The White Door|The White Door|The White Door|
|195|1478611992|❌|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|
|196|1498550832|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|
|197|6739975257|乐桥|樂橋|樂橋|樂橋|TuneShift|TuneShift|
|198|6670190133|❌|哆啦A夢的銅鑼燒店物語|哆啦A夢的銅鑼燒店物語|哆啦A夢的銅鑼燒店物語|Doraemon Dorayaki Shop Story|Doraemon Dorayaki Shop Story|
|199|6744862281|iPlayer - 本地音乐播放器&离线音乐专业版|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|
|200|6473001577|❌|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|
|201|327963391|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|
|202|398463868|❌|詰将棋|詰将棋|詰将棋|詰将棋|詰将棋|
|203|419606496|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|
|204|435871950|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|
|205|459189186|❌|機械迷城 (Machinarium)|機械迷城 (Machinarium)|機械迷城 (Machinarium)|Machinarium|Machinarium|
|206|580008932|❌|Real Badminton|Real Badminton|Real Badminton|Real Badminton|Real Badminton|
|207|1253855339|❌|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|
|208|1330055286|比手划脚 - 你说我猜合家欢聚会神器|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 亲子互动游戏你画我猜|
|209|1453117329|❌|Yume Nikki|Yume Nikki|Yume Nikki|Yume Nikki|Yume Nikki|
|210|1456547302|❌|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|
|211|1457316711|❌|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|
|212|1481181827|❌|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|
|213|1505174740|❌|VFUN - 你的興趣社區|VFUN - 你的興趣社區|VFUN - 你的興趣社區|VFUN - Find your interests|VFUN - Find your interests|
|214|1517281147|行星小时|行星小時|行星小時|行星小時|Planetary Hours + Widget|Planetary Hours|
|215|1530149693|心岛日记-难过的人不孤独|心岛日记-温柔的心情树洞|心岛日记-温柔的心情树洞|心岛日记-温柔的心情树洞|心岛日记-难过的人不孤独|❌|
|216|1548281314|❌|倉頡打字2V|倉頡打字2V|倉頡打字2V|倉頡打字2V|倉頡打字2V|
|217|1607511516|❌|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|
|218|1612615618|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|
|219|1617390109|❌|我们的大航海|我们的大航海|我们的大航海|我们的大航海|我们的大航海|
|220|1621065119|❌|逆轉裁判123成步堂精選集|逆轉裁判123成步堂精選集|逆轉裁判123成步堂精選集|Ace Attorney Trilogy|Ace Attorney Trilogy|
|221|1626320298|极速变色龙|❌|❌|❌|❌|❌|
|222|6738272916|全球电视 - 国际电视直播|全球電視 - 國際電視直播|全球電視 - 國際電視直播|全球電視 - 國際電視直播|NetTV: Watch Global TV|NetTV: Watch Global TV|
|223|6446178861|PlayNav - 影片内无广告！|PlayNav - 影片內無廣告！|PlayNav - 影片內無廣告！|PlayNav - 影片內無廣告！|PlayNav - No ads in videos!|PlayNav - No ads in videos!|
|224|363385252|DTMFdec|DTMFdec|DTMFdec|DTMFdec|DTMFdec|DTMFdec|
|225|430270438|Astro Gold|Astro Gold|Astro Gold|Astro Gold|Astro Gold|Astro Gold|
|226|679454835|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|
|227|911201894|❌|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|
|228|921954809|❌|❌|❌|❌|Craft The World-Pocket Edition|Craft The World-Pocket Edition|
|229|1093859891|djembeföla!|djembeföla!|djembeföla!|djembeföla!|djembeföla!|djembeföla!|
|230|1232097854|❌|棒球學院物語|棒球學院物語|棒球學院物語|Home Run High|Home Run High|
|231|1261834568|❌|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|
|232|1555459868|❌|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|
|233|1563121109|❌|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|
|234|6744629398|汉界|汉界|汉界|汉界|汉界|汉界|
|235|6738784151|❌|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|
|236|6470642337|❌|來自星塵|來自星塵|來自星塵|Ex Astris|Ex Astris|
|237|6483862844|❌|光遇樂隊|光遇樂隊|光遇樂隊|Sky Band|Sky Band|
|238|314192799|❌|❌|❌|Acrobits Softphone|Acrobits Softphone|Acrobits Softphone|
|239|466388978|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|
|240|512142109|❌|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|
|241|904737816|❌|王國保衛戰：起源 Kingdom Rush Origins|王國保衛戰：起源 Kingdom Rush Origins|王國保衛戰：起源 Kingdom Rush Origins|Kingdom Rush Origins TD|Kingdom Rush Origins TD|
|242|952625011|每日精選-國家地理每日精選|每日精選-國家地理每日精選|每日精選-國家地理每日精選|每日精選-國家地理每日精選|❌|NG Daily|
|243|958202096|❌|❌|❌|❌|❌|Dukan Diet Classic|
|244|1085978097|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|
|245|1148321705|❌|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|
|246|1286255182|Filmlike|Filmlike Camera|Filmlike Camera|Filmlike Camera|Filmlike Camera|Filmlike Camera|
|247|1449584007|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|
|248|1523025509|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|
|249|1536419933|❌|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|
|250|1574175808|❌|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|
|251|1622935612|❌|DYSMANTLE|DYSMANTLE|DYSMANTLE|❌|❌|
|252|1633879571|❌|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|
|253|6504841512|❌|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|
|254|6476902290|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|
|255|6479512734|❌|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|
|256|6740051873|数字华容道：手表版|數位華容道：手錶版|數位華容道：手錶版|數位華容道：手錶版|Classic Number Games for Watch|Classic Number Games for Watch|
|257|6444109272|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|
|258|318639200|❌|Crush the Castle|Crush the Castle|Crush the Castle|Crush the Castle|Crush the Castle|
|259|325915322|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|
|260|365729342|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|
|261|414469628|面部和躯体照片编辑器|臉部及身體修圖工具|臉部及身體修圖工具|臉部及身體修圖工具|Face & Body Photo editor|Face & Body Photo editor|
|262|459313476|Tenuto|Tenuto|Tenuto|Tenuto|Tenuto|Tenuto|
|263|478126577|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|
|264|493493802|RhymeZone|RhymeZone|RhymeZone|RhymeZone|RhymeZone|RhymeZone|
|265|555612465|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|CWMoney Pro - Expense Tracker|CWMoney Pro - Expense Tracker|
|266|564730202|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|
|267|582584117|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|
|268|633600716|432 Player|432 Player|432 Player|432 Player|432 Player|432 Player|
|269|683353582|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|
|270|777310222|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|
|271|887877435|f8 镜头大师|f8 镜头大师|f8 镜头大师|f8 镜头大师|f8 Lens Toolkit|f8 Lens Toolkit|
|272|908905093|Lumy - 太阳追踪器与黄金时刻|Lumy|Lumy|Lumy|Lumy|Lumy|
|273|961339405|❌|監獄人生 RPG|監獄人生 RPG|監獄人生 RPG|Prison Life RPG|Prison Life RPG|
|274|994157520|❌|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|
|275|1048509287|❌|龍紀冒險棋|龍紀冒險棋|龍紀冒險棋|龙纪冒险棋|龙纪冒险棋|
|276|1087099916|铅笔素描 高清版|鉛筆素描 高清版|鉛筆素描 高清版|鉛筆素描 高清版|Pencil Sketch HD|Pencil Sketch HD|
|277|1107320261|❌|Splitter Critters|Splitter Critters|Splitter Critters|Splitter Critters|Splitter Critters|
|278|1241909999|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|
|279|1293681293|❌|Pocket Build|Pocket Build|Pocket Build|Pocket Build|Pocket Build|
|280|1330717186|❌|The Golf Tracer|The Golf Tracer|The Golf Tracer|The Golf Tracer|The Golf Tracer|
|281|1357651989|❌|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|
|282|1385258906|❌|Mindustry|Mindustry|Mindustry|Mindustry|Mindustry|
|283|1402080820|❌|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|
|284|1439262206|❌|Root Board Game|Root Board Game|Root Board Game|Root Board Game|Root Board Game|
|285|1450194251|Kişiye Özel Diyet|Kişiye Özel Diyet|Kişiye Özel Diyet|Kişiye Özel Diyet|Weight Loss in 28 Days|Weight Loss in 28 Days|
|286|1477229754|❌|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|
|287|1514329124|❌|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|
|288|1553055273|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|❌|Chairgun Elite Ballistic Tool|
|289|1573220858|❌|環球酒店大亨|環球酒店大亨|環球酒店大亨|环球酒店大亨|环球酒店大亨|
|290|1580509302|❌|伊格利亞戰記|伊格利亞戰記|伊格利亞戰記|The Heroic Legend of Eagarlnia|The Heroic Legend of Eagarlnia|
|291|1614771445|❌|Rotaeno - 旋轉音律|Rotaeno - 旋轉音律|Rotaeno - 旋轉音律|Rotaeno|Rotaeno|
|292|6742396803|DaDaDaDa - 空气枪|DaDaDaDa - AirGun|DaDaDaDa - AirGun|DaDaDaDa - AirGun|DaDaDaDa - AirGun|DaDaDaDa - AirGun|
|293|6740943002|BaMai|BaMai|BaMai|BaMai|BaMai|❌|
|294|6743459503|❌|逐鹿|逐鹿|逐鹿|逐鹿|逐鹿|
|295|6480251529|体育集换卡制作专业版|體育集換卡製作專業版|體育集換卡製作專業版|體育集換卡製作專業版|Ultimate Card Creator|Ultimate Card Creator|
|296|6739179322|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|
|297|6744837914|块块爱消除-手表游戏经典快乐休闲益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|Block Jam Blast For Watch|Block Jam Blast For Watch|
|298|6502623166|❌|金武江湖|金武江湖|金武江湖|金武江湖|金武江湖|
|299|6468033830|❌|憶我: 一個性格測試遊戲|憶我: 一個性格測試遊戲|憶我: 一個性格測試遊戲|Refind Self|Refind Self|
|300|6738138603|❌|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|
|301|6739185971|❌|❌|❌|❌|Earnifi: Rent, Early Pay, Cash|❌|
|302|284972998|SoundHound∞ 音乐搜索识别和播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ - Music Discovery|SoundHound∞ - Music Discovery|
|303|288419283|❌|❌|❌|❌|RadarScope|RadarScope|
|304|292421271|❌|Fieldrunners|Fieldrunners|Fieldrunners|Fieldrunners|Fieldrunners|
|305|294934058|HotSchedules|HotSchedules|HotSchedules|HotSchedules|HotSchedules|HotSchedules|
|306|298206806|iReal Pro|iReal Pro|iReal Pro|iReal Pro|iReal Pro|iReal Pro|
|307|299117180|Airports|Airports|Airports|Airports|Airports|Airports|
|308|301387274|❌|Pocket God|Pocket God|Pocket God|Pocket God|Pocket God|
|309|305557780|换脸 (iSwap Faces Pro)|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|
|310|306938028|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|
|311|307132353|❌|Sally's Spa|Sally's Spa|Sally's Spa|Sally's Spa|Sally's Spa|
|312|307727765|❌|Doodle Jump|Doodle Jump|Doodle Jump|Doodle Jump|Doodle Jump|
|313|307751675|❌|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|
|314|315021242|❌|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|
|315|315514944|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|
|316|317809458|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|
|317|323048611|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|
|318|329670577|Camera+旧版|Camera+傳統|Camera+傳統|Camera+傳統|Camera+ Legacy|Camera+ Legacy|
|319|332424440|❌|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|
|320|333212604|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|
|321|335029050|❌|Catan Classic|Catan Classic|Catan Classic|Catan Classic|Catan Classic|
|322|335709058|Stylebook|Stylebook|Stylebook|Stylebook|Stylebook|Stylebook|
|323|335862325|Blower|Blower|Blower|Blower|Blower|Blower|
|324|342115564|Hipstamatic 相机|Hipstamatic 相機|Hipstamatic 相機|Hipstamatic 相機|Classic Camera by Hipstamatic|Classic Camera by Hipstamatic|
|325|344784375|播放器OPlayer|OPlayer - video player|OPlayer - video player|OPlayer - video player|OPlayer - video player|OPlayer - video player|
|326|351850196|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|
|327|352247139|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|
|328|355281169|❌|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|
|329|357404131|慢快门相机 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|Slow Shutter Cam|Slow Shutter Cam|
|330|357421934|PeakFinder|PeakFinder|PeakFinder|PeakFinder|PeakFinder|PeakFinder|
|331|367327563|秘密照片管理 - i照片文件夹|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|
|332|373493387|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|
|333|388130466|❌|iSlash|iSlash|iSlash|iSlash|iSlash|
|334|388857410|❌|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|
|335|392531952|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|
|336|395680819|AVPlayer|AVPlayer|AVPlayer|AVPlayer|AVPlayer|AVPlayer|
|337|396085661|❌|遊戲發展國++|遊戲發展國++|遊戲發展國++|Game Dev Story|Game Dev Story|
|338|402012828|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|
|339|402656416|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|
|340|403684733|Badoo高级版|Badoo進階版|Badoo進階版|Badoo進階版|Badoo Premium|Badoo Premium|
|341|404990064|SkyView®|SkyView®|SkyView®|SkyView®|SkyView®|SkyView®|
|342|405835358|MilGPS|MilGPS|MilGPS|MilGPS|MilGPS|MilGPS|
|343|406239138|❌|Puffin Cloud Browser|Puffin Cloud Browser|Puffin Cloud Browser|Puffin Browser Pro|Puffin Browser Pro|
|344|406541444|8毫米相机|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|
|345|407933070|怀旧日历 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|
|346|408697793|❌|King of Opera|King of Opera|King of Opera|King of Opera|King of Opera|
|347|408854559|❌|溫泉物語|溫泉物語|溫泉物語|Hot Springs Story|Hot Springs Story|
|348|417817520|❌|Tiny Wings|Tiny Wings|Tiny Wings|Tiny Wings|Tiny Wings|
|349|424403441|瑕疵清除器 (Pimple Eraser)|Pimple Eraser|Pimple Eraser|Pimple Eraser|Pimple Eraser|Pimple Eraser|
|350|430163724|智能风水罗盘-专业版|智能風水羅庚-專業版|智能風水羅庚-專業版|智能風水羅庚-專業版|智能风水罗盘-专业版|智能风水罗盘-专业版|
|351|432850619|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|
|352|433596395|❌|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|
|353|449735650|❌|鱷魚小頑皮愛洗澡|鱷魚小頑皮愛洗澡|鱷魚小頑皮愛洗澡|Where's My Water?|Where's My Water?|
|354|450542233|❌|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|
|355|452990487|RushPlayer|RushPlayer|RushPlayer|RushPlayer|RushPlayer|RushPlayer|
|356|454086751|❌|Flick Home Run !|Flick Home Run !|Flick Home Run !|Flick Home Run !|Flick Home Run !|
|357|469343554|❌|洛克人X|洛克人X|洛克人X|❌|❌|
|358|479516143|❌|Minecraft|Minecraft|Minecraft|Minecraft: Dream it, Build it!|Minecraft: Dream it, Build it!|
|359|479662730|❌|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto 3|
|360|482303584|❌|❌|❌|❌|PDG PROmote 2025+|PDG PROmote 2025+|
|361|485246824|❌|Cytus|Cytus|Cytus|Cytus|Cytus|
|362|491231653|❌|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|
|363|497716362|TonalEnergy 调音器—节拍器|TonalEnergy 調音器—節拍器|TonalEnergy 調音器—節拍器|TonalEnergy 調音器—節拍器|TonalEnergy Tuner & Metronome|TonalEnergy Tuner & Metronome|
|364|498732510|❌|Blitzer.de PRO|❌|Blitzer.de PRO|Blitzer.de PRO|Blitzer.de PRO|
|365|501695715|儿歌童谣 - 国语+粤语(广东话)儿歌连歌词|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|
|366|503190232|❌|Bridge Constructor|Bridge Constructor|Bridge Constructor|Bridge Constructor|Bridge Constructor|
|367|504176984|论子平-论八字(实用)|論八字(實用)|論八字(實用)|論八字(實用)|论子平-论八字(实用)|论子平-论八字(实用)|
|368|504300412|❌|歐陸戰爭3|歐陸戰爭3|歐陸戰爭3|European War 3|European War 3|
|369|505367096|世界迷雾|世界迷霧|世界迷霧|世界迷霧|Fog of World|Fog of World|
|370|519411018|iGuzheng - 爱古筝|iGuzheng - 愛古箏|iGuzheng - 愛古箏|iGuzheng - 愛古箏|iGuzheng|iGuzheng|
|371|520231936|eDrawings|eDrawings|eDrawings|eDrawings|eDrawings|eDrawings|
|372|524387892|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|
|373|525818839|❌|Plague Inc. (瘟疫公司)|Plague Inc. (瘟疫公司)|Plague Inc. (瘟疫公司)|Plague Inc.|Plague Inc.|
|374|530425820|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|
|375|540925500|❌|Need for Speed™ Most Wanted|Need for Speed™ Most Wanted|Need for Speed™ Most Wanted|❌|Need for Speed™ Most Wanted|
|376|549105915|❌|True Skate|True Skate|True Skate|True Skate|True Skate|
|377|549432607|❌|Townsmen Premium|Townsmen Premium|Townsmen Premium|Townsmen Premium|Townsmen Premium|
|378|554937499|❌|Earn to Die|Earn to Die|Earn to Die|Earn to Die|Earn to Die|
|379|555642577|晋硕万年历|晉碩萬年曆|晉碩萬年曆|晉碩萬年曆|Chinsoft Lunar Calendar|Chinsoft Lunar Calendar|
|380|563718995|❌|Bloons TD 5|Bloons TD 5|Bloons TD 5|Bloons TD 5|Bloons TD 5|
|381|575154654|❌|Pou|Pou|Pou|Pou|Pou|
|382|577628510|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|
|383|578448682|❌|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|
|384|586149216|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|
|385|594117733|❌|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|
|386|600626116|❌|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|
|387|623592465|❌|Heads Up!|Heads Up!|Heads Up!|Heads Up!|Heads Up!|
|388|625334537|❌|Geometry Dash|Geometry Dash|Geometry Dash|Geometry Dash|Geometry Dash|
|389|634235735|❌|Duet Game|Duet Game|Duet Game|Duet Game|Duet Game|
|390|640364616|❌|❌|❌|❌|Terraria|Terraria|
|391|646256209|Photo Eraser|照片橡皮擦|照片橡皮擦|照片橡皮擦|Photo Eraser for iPhone|Photo Eraser for iPhone|
|392|657016140|Good Maps - 谷歌地图,离线,街景,公交,地铁,导航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - for Google Maps, with Offline Map, Directions, Street Views and More|Good Maps - for Google Maps, with Offline Map, Directions, Street Views and More|
|393|679044544|AndroMoney|理財幫手 AndroMoney|理財幫手 AndroMoney|理財幫手 AndroMoney|AndroMoney|AndroMoney|
|394|687236545|Adv. Learner’s Dictionary (TC)|劍橋高階英漢雙解詞典：英語— 繁體中文|劍橋高階英漢雙解詞典：英語— 繁體中文|劍橋高階英漢雙解詞典：英語— 繁體中文|Adv. Learner’s Dictionary (TC)|Adv. Learner’s Dictionary (TC)|
|395|697885605|❌|❌|❌|常春藤基礎英文字彙|常春藤基礎英文字彙|常春藤基礎英文字彙|
|396|700637744|❌|DEEMO|DEEMO|DEEMO|DEEMO|DEEMO|
|397|736683061|❌|A Dark Room|A Dark Room|A Dark Room|A Dark Room|A Dark Room|
|398|741990930|❌|Walkout Song DJ|❌|❌|Walkout Song DJ|❌|
|399|763692274|❌|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|
|400|784373321|❌|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|
|401|807317212|每日精选-天文地理人文照片之美&壁纸|每日精選-天文地理人文照片之美|每日精選-天文地理人文照片之美|每日精選-天文地理人文照片之美|Daily Dozen-Culture in Photos|Daily Dozen-Culture in Photos|
|402|824305459|❌|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|
|403|829581836|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|
|404|837860959|❌|迷你地鐵|迷你地鐵|迷你地鐵|Mini Metro|Mini Metro|
|405|860809977|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|
|406|870322730|❌|Implosion 聚爆|Implosion 聚爆|Implosion 聚爆|Implosion - Never Lose Hope|Implosion - Never Lose Hope|
|407|890791581|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|
|408|891194610|❌|戰車撞殭屍2 (Earn to Die 2)|戰車撞殭屍2 (Earn to Die 2)|戰車撞殭屍2 (Earn to Die 2)|Earn to Die 2|Earn to Die 2|
|409|901738789|地下城堡: 炼金术师的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|Dungeon Survivor|Dungeon Survivor|
|410|904278510|❌|刺客任務：狙擊 (Hitman Sniper)|刺客任務：狙擊 (Hitman Sniper)|刺客任務：狙擊 (Hitman Sniper)|Hitman Sniper|Hitman Sniper|
|411|912536422|❌|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|
|412|916976066|短语键盘|短語鍵盤|短語鍵盤|短語鍵盤|Phraseboard Keyboard|Phraseboard Keyboard|
|413|918609651|Money Pro: Personal Finance AR|Money Pro: 個人財務|Money Pro: 個人財務|Money Pro: 個人財務|Money Pro: Personal Finance AR|Money Pro: Personal Finance AR|
|414|924695435|Pixelmator|Pixelmator|Pixelmator|Pixelmator|Pixelmator|Pixelmator|
|415|925494667|❌|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|
|416|926015463|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|
|417|926076608|秒速记账 1SecMoney|秒速記帳 1SecMoney|秒速記帳 1SecMoney|秒速記帳 1SecMoney|1SecMoney|1SecMoney|
|418|927098908|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|
|419|932389062|❌|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|Give It Up! - Jump to the Beat|Give It Up! - Jump to the Beat|
|420|935216956|❌|Papers, Please|Papers, Please|Papers, Please|Papers, Please|Papers, Please|
|421|935528099|同步音律|同步音律|同步音律|同步音律|MUSYNX|MUSYNX|
|422|941143328|❌|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|
|423|945322477|❌|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|
|424|946477821|❌|Evoland|Evoland|Evoland|Evoland|Evoland|
|425|948944368|全屏浏览器 - 用得全屏才是好浏览器！|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|
|426|954724812|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|
|427|955687901|kirakira+|kirakira+|kirakira+|kirakira+|kirakira+|kirakira+|
|428|961932335|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|
|429|963034692|Streaks|Streaks|Streaks|Streaks|Streaks|Streaks|
|430|964708975|古诗文网|古诗文网|古诗文网|古诗文网|古诗文网|古诗文网|
|431|973482987|❌|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|
|432|975683986|❌|Door Kickers|Door Kickers|Door Kickers|Door Kickers|Door Kickers|
|433|982175678|❌|This War of Mine|This War of Mine|This War of Mine|This War of Mine|This War of Mine|
|434|982227026|聚爆Implosion|❌|❌|❌|❌|❌|
|435|992047786|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|
|436|998437582|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|
|437|1010311475|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|
|438|1012298403|❌|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|
|439|1023146677|❌|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|
|440|1028950091|贪婪洞窟：猿神降临|貪婪洞窟：猿神降临|貪婪洞窟：猿神降临|貪婪洞窟：猿神降临|The Greedy Cave|The Greedy Cave|
|441|1029932207|❌|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|
|442|1035219553|Analog London|Analog London|Analog London|Analog London|Analog London|Analog London|
|443|1035219562|Analog Paris|Analog Paris|Analog Paris|Analog Paris|Analog Paris|Analog Paris|
|444|1065360416|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|
|445|1065599938|❌|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|
|446|1077639630|说剑The Swords|❌|❌|❌|❌|❌|
|447|1093131935|❌|Incredibox|Incredibox|Incredibox|Incredibox|Incredibox|
|448|1094038347|❌|Only You Are Here|Only You Are Here|Only You Are Here|Only You Are Here|Only You Are Here|
|449|1095903651|【约吗】-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|
|450|1099088440|火柴人联盟2|火柴人联盟2|火柴人联盟2|火柴人联盟2|❌|❌|
|451|1108479411|❌|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Racing Games|
|452|1110646984|地下城堡2: 黑暗觉醒|❌|❌|❌|❌|❌|
|453|1111420122|❌|Hear My Baby Heartbeat App|Hear My Baby Heartbeat App|Hear My Baby Heartbeat App|Hear My Baby Heartbeat Monitor|Hear My Baby Heartbeat App|
|454|1112429079|物种起源|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|
|455|1113736426|❌|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|
|456|1118115766|❌|Bloons TD 6|Bloons TD 6|Bloons TD 6|Bloons TD 6|Bloons TD 6|
|457|1121484538|❌|箱庭鐵道物語|箱庭鐵道物語|箱庭鐵道物語|Station Manager|Station Manager|
|458|1128464707|❌|Death Road to Canada|Death Road to Canada|Death Road to Canada|Death Road to Canada|Death Road to Canada|
|459|1129429340|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|
|460|1134805859|迷失岛|迷失島|迷失島|迷失島|Isoland|Isoland|
|461|1137257203|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Muslim Prayer Times Pro, Adhan|Muslim Prayer Times Pro, Adhan|
|462|1142016085|❌|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|
|463|1160608318|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|
|464|1166143148|❌|暴力街區2|暴力街區2|暴力街區2|Brutal Street 2|Brutal Street 2|
|465|1169282239|活下去-丧尸题材末日生存冒险游戏|❌|❌|❌|❌|❌|
|466|1184204602|ProMovie + 专业摄像机|ProMovie + 專業攝像機|ProMovie + 專業攝像機|ProMovie + 專業攝像機|ProMovie Recorder +|ProMovie Recorder +|
|467|1187265767|❌|Monument Valley 2|Monument Valley 2|Monument Valley 2|Monument Valley 2|Monument Valley 2|
|468|1189781891|❌|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|
|469|1195035357|❌|地牢防禦 : 勇士的侵入|地牢防禦 : 勇士的侵入|地牢防禦 : 勇士的侵入|Dungeon Defense : The Gate|Dungeon Defense : The Gate|
|470|1217732174|TA - 一对一聊天，遇见对的人|❌|❌|❌|❌|❌|
|471|1237692856|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|
|472|1239299402|❌|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|
|473|1241383990|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|
|474|1247397901|❌|奧德瑪|奧德瑪|奧德瑪|Oddmar|Oddmar|
|475|1248033433|❌|王國保衛戰：復仇|王國保衛戰：復仇|王國保衛戰：復仇|Kingdom Rush Vengeance TD Game|Kingdom Rush Vengeance TD|
|476|1249864455|❌|Peace, Death!|Peace, Death!|Peace, Death!|Peace, Death!|Peace, Death!|
|477|1250144822|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|
|478|1259067036|❌|發現動物公園|發現動物公園|發現動物公園|Wild Park Manager|Wild Park Manager|
|479|1262474519|❌|Monoposto|Monoposto|Monoposto|Monoposto|Monoposto|
|480|1264608487|❌|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|
|481|1290687550|❌|Cytus II|Cytus II|Cytus II|Cytus II|Cytus II|
|482|1291429551|❌|60 Parsecs!|60 Parsecs!|60 Parsecs!|60 Parsecs!|60 Parsecs!|
|483|1291730054|❌|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|
|484|1296085645|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|
|485|1298544927|❌|❌|❌|❌|My Child Lebensborn|My Child Lebensborn|
|486|1303222868|Paprika食谱管理3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|
|487|1312534841|MyText Widget|MyText Widget|MyText Widget|MyText Widget|MyText Widget|MyText Widget|
|488|1329434099|乱斗堂3|❌|❌|❌|❌|❌|
|489|1330314351|微剪辑-微视频编辑助手|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|
|490|1336793944|❌|勇敢的哈克|勇敢的哈克|勇敢的哈克|HAAK|HAAK|
|491|1339516665|奥特曼传奇英雄VIP版|❌|❌|❌|❌|❌|
|492|1351652600|❌|Boolean!|Boolean!|Boolean!|Boolean!|Boolean!|
|493|1359107338|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|
|494|1359652100|❌|DungeonMaker|DungeonMaker|DungeonMaker|Dungeon Maker : Dark Lord|Dungeon Maker : Dark Lord|
|495|1391339323|❌|Zaptiye|Zaptiye|Zaptiye|Zaptiye|Zaptiye|
|496|1392608717|❌|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|
|497|1406710800|❌|Stardew Valley|Stardew Valley|Stardew Valley|Stardew Valley|Stardew Valley|
|498|1435004182|❌|❌|❌|❌|❌|Hermes: KAYIP|
|499|1436429074|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - Vintage Film Camera|FILCA - SLR Film Camera|
|500|1437096541|❌|Rush Rally 3|Rush Rally 3|Rush Rally 3|Rush Rally 3|Rush Rally 3|
|501|1438245901|❌|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|
|502|1439187947|❌|Rebel Inc. (反叛公司)|Rebel Inc. (反叛公司)|Rebel Inc. (反叛公司)|Rebel Inc.|Rebel Inc.|
|503|1439881811|RadarOmega|RadarOmega|RadarOmega|RadarOmega|RadarOmega|RadarOmega|
|504|1441969889|❌|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|
|505|1442776789|❌|槍與香蕉 - Pirates Outlaws|槍與香蕉 - Pirates Outlaws|槍與香蕉 - Pirates Outlaws|Pirates Outlaws|Pirates Outlaws|
|506|1444761746|❌|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|
|507|1449893235|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|
|508|1450064785|山林日志|山林日誌|山林日誌|山林日誌|Hiking Logger|❌|
|509|1450144092|❌|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|
|510|1451873044|❌|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|
|511|1453838527|❌|Age of History II|Age of History II|Age of History II|Age of History II|Age of History II|
|512|1455781522|❌|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|
|513|1459749978|List背单词|List背单词|List背单词|List背单词|List背单词|List背单词|
|514|1461751938|❌|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|
|515|1464850921|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|
|516|1474716211|❌|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|
|517|1477203766|❌|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|
|518|1477854253|大家的日本语 初级 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|
|519|1477966166|❌|❌|MONOPOLY: The Board Game|MONOPOLY: The Board Game|MONOPOLY: The Board Game|MONOPOLY: The Board Game|
|520|1477991646|❌|王國：兩個皇冠|王國：兩個皇冠|王國：兩個皇冠|Kingdom Two Crowns|Kingdom Two Crowns|
|521|1479608271|❌|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|
|522|1480844881|❌|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|
|523|1481006495|倒计时应用 Countdown App|倒計時應用 Countdown App|倒計時應用 Countdown App|倒計時應用 Countdown App|Countdown App|Countdown App|
|524|1482339363|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|
|525|1484622401|❌|Religion inc.上帝模擬器|Religion inc.上帝模擬器|Religion inc.上帝模擬器|Religion inc. God Simulator|Religion inc. God Simulator|
|526|1485875855|❌|❌|❌|❌|❌|Başkanlar|
|527|1491530147|❌|❌|❌|Slay the Spire|Slay the Spire|Slay the Spire|
|528|1497120981|LUCH: Photo Effects & Filters|LUCH — Filters & Bokeh Effect|LUCH — Filters & Bokeh Effect|LUCH — Filters & Bokeh Effect|LUCH: Photo Effects & Filters|LUCH: Photo Effects & Presets|
|529|1499849161|❌|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|
|530|1500098830|❌|視頻大師 Pro|視頻大師 Pro|視頻大師 Pro|❌|Video Master Pro|
|531|1503486239|❌|大富翁10|大富翁10|大富翁10|Richman10|Richman10|
|532|1504662191|❌|❌|❌|❌|❌|Monarşi|
|533|1504760106|❌|Eco inc. Earth Planet|Eco inc. Earth Planet|Eco inc. Earth Planet|Eco inc.|Eco inc.|
|534|1504952058|❌|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|
|535|1505636751|❌|TeleGuard|TeleGuard|TeleGuard|TeleGuard|TeleGuard|
|536|1509344823|Ezberle|Ezberle|Ezberle|Ezberle|Ezberle|Ezberle|
|537|1512751689|❌|The Game of Life 2|The Game of Life 2|The Game of Life 2|The Game of Life 2|The Game of Life 2|
|538|1515215584|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|
|539|1515382132|❌|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|
|540|1516531425|JSPS APP|JSPS APP|JSPS APP|JSPS APP|JSPS APP|JSPS APP|
|541|1517349382|群雄时代 - 单机三国战棋策略游戏|❌|❌|❌|❌|❌|
|542|1518841947|ATSU|ATSU|ATSU|ATSU|ATSU|ATSU|
|543|1519386476|❌|MiniGames - 觀看遊戲街機|MiniGames - 觀看遊戲街機|MiniGames - 觀看遊戲街機|MiniGames - Watch Games Arcade|MiniGames - Watch Games Arcade|
|544|1523633394|❌|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants: BfBB|
|545|1525735418|❌|❌|❌|❌|❌|Mesih|
|546|1528199331|❌|崩潰大陸 2|崩潰大陸 2|崩潰大陸 2|Crashlands 2|Crashlands 2|
|547|1531462734|桂林字牌手机版|桂林字牌手机版|桂林字牌手机版|桂林字牌手机版|❌|❌|
|548|1531654315|❌|画師牆紙|画師牆紙|画師牆紙|MayLikeWallpaper - best hiapk|MayLikeWallpaper - best hiapk|
|549|1536762482|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|
|550|1544190466|避难所：生存|❌|❌|❌|❌|❌|
|551|1544412558|航海奇闻|❌|❌|❌|❌|❌|
|552|1544722749|拣爱|❌|❌|❌|❌|❌|
|553|1548185534|❌|Musical Maze|Musical Maze|Musical Maze|Musical Maze|Musical Maze|
|554|1551207253|❌|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|
|555|1551263854|打金传奇:官方正版 搬砖回收永不关服超爆加强版，传奇王者霸业|❌|❌|❌|❌|❌|
|556|1555857229|2048 for watch|2048_watch|2048_watch|2048_watch|2048_watch|2048_watch|
|557|1556671822|合成大西瓜 for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|
|558|1559869450|❌|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|❌|❌|
|559|1562560561|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|
|560|1563932741|❌|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|
|561|1569963107|❌|❌|❌|❌|❌|Aylık Distopya|
|562|1576329230|传奇1.76官方正版盛大首发(重置版)今日开服送点卡迷失传说|❌|❌|❌|❌|❌|
|563|1576763082|女帝的日常|女帝的日常|女帝的日常|女帝的日常|女帝的日常|女帝的日常|
|564|1577392165|❌|Monster Train|Monster Train|Monster Train|Monster Train|Monster Train|
|565|1578203914|电子宠物机|电子宠物机|电子宠物机|电子宠物机|Peggy Cat - A Virtual Pet|Peggy Cat - A Virtual Pet|
|566|1581640677|❌|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|
|567|1587674627|爱琳诗篇:异世界冒险 少女放置卡牌手游|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|❌|❌|
|568|1590622755|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|
|569|1591627945|❌|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|
|570|1592505377|❌|Wreckfest|Wreckfest|Wreckfest|Wreckfest|Wreckfest|
|571|1592660274|❌|天際牧場物語-模擬經營自己的牧場|天際牧場物語-模擬經營自己的牧場|天際牧場物語-模擬經營自己的牧場|天际牧场物语-模拟经营自己的牧场|天际牧场物语-模拟经营自己的牧场|
|572|1595739885|❌|❌|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|
|573|1596736236|❌|❌|Rovio Classics: Angry Birds|Rovio Classics: Angry Birds|Red's First Flight|Red's First Flight|
|574|1600307023|❌|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|
|575|1603421749|传奇高爆99999% 攻速9999倍PC同款三职业:战无不胜|❌|❌|❌|❌|❌|
|576|1603553413|手表浏览器|手表浏览器|手表浏览器|手表浏览器|手表浏览器|手表浏览器|
|577|1606405358|❌|Dealer's Life|Dealer's Life|Dealer's Life|Dealer's Life|Dealer's Life|
|578|1609910024|❌|泰拉瑞亞|泰拉瑞亞|泰拉瑞亞|❌|❌|
|579|1610947489|❌|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|
|580|1612952507|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|
|581|1614200925|部落与弯刀|❌|❌|❌|❌|❌|
|582|1622869542|❌|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|
|583|1624326561|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|
|584|1631859420|❌|After Inc.|After Inc.|After Inc.|After Inc.|After Inc.|
|585|1631867592|❌|珍寶機場物語|珍寶機場物語|珍寶機場物語|Jumbo Airport Story|Jumbo Airport Story|
|586|1633243177|Ableton Note|Ableton Note|Ableton Note|Ableton Note|Ableton Note|Ableton Note|
|587|1633253544|消除星星 - 益智的星星消消乐经典手表游戏|消除星星-益智的星星消消樂經典手錶消除遊戲|消除星星-益智的星星消消樂經典手錶消除遊戲|消除星星-益智的星星消消樂經典手錶消除遊戲|Pop The Stars Game For Watch|Pop The Stars Game For Watch|
|588|1636342413|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|
|589|1642601792|❌|The Past Within|The Past Within|The Past Within|The Past Within|The Past Within|
|590|1642733080|❌|DungeonSquad|DungeonSquad|DungeonSquad|DungeonSquad|DungeonSquad|
|591|1643199620|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|
|592|1659271912|❌|東京電車２|東京電車２|東京電車２|Tokyo Train 2|Tokyo Train 2|
|593|1659316190|钢铁战队(R)|❌|❌|❌|❌|❌|
|594|1662217862|Wipr 2|Wipr 2|Wipr 2|Wipr 2|Wipr 2|Wipr 2|
|595|1665706687|❌|Underground Blossom|Underground Blossom|Underground Blossom|Underground Blossom|Underground Blossom|
|596|1668755109|❌|Brotato:Premium|Brotato:Premium|Brotato:Premium|Brotato:Premium|Brotato:Premium|
|597|1669877091|光明记忆：无限|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|
|598|1671505630|迷失岛外传南瓜镇|❌|❌|❌|❌|❌|
|599|6737795387|鬼谷八荒|❌|❌|❌|❌|❌|
|600|6448477521|BiuBiuBiu - 空气枪|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|
|601|6472380172|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|
|602|6443786927|全面憨憨战争模拟器|❌|❌|❌|❌|❌|
|603|6502489827|大侠立志传|❌|❌|❌|❌|❌|
|604|6742129099|群英打三国-超休闲国风放置卡牌巅峰巨作|❌|❌|❌|❌|❌|
|605|6443916065|WiFi万能钥匙专业版-无线热点密码安全万能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|❌|❌|
|606|6737512463|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|
|607|6462190343|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|
|608|6444782083|王国保卫战4|❌|❌|❌|❌|❌|
|609|6450148077|干中学！偷偷|干中学！偷偷|干中学！偷偷|干中学！偷偷|❌|干中学！偷偷|
|610|6449766387|合成大西瓜 : 专为手表设计的合成类休闲解压小游戏|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|
|611|6740246950|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|
|612|6550914957|打造世界-经典沙盒建造|❌|❌|❌|❌|❌|
|613|6742537442|努力活着 - 自由人生重开模拟器|❌|❌|❌|❌|❌|
|614|6741474933|Berryfilm|Berryfilm|Berryfilm|Berryfilm|Berryfilm|Berryfilm|
|615|6742221550|魔卡棋旅|❌|❌|❌|❌|❌|
|616|6738767315|便利店开业日记|❌|❌|❌|❌|❌|
|617|6737987084|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|CatLight Pro: Selfie Light Cam|CatLight Pro: Selfie Light Cam|
|618|6446607609|佛系传奇:君王天下|❌|❌|❌|❌|❌|
|619|6499512726|浮岛冒险|❌|❌|❌|❌|❌|
|620|6483210281|生物原型|❌|❌|❌|❌|❌|
|621|6738767322|森丘露营地|❌|❌|❌|❌|❌|
|622|6737434454|暗夜地城 - 单机暗黑刷装备挂机游戏|❌|❌|❌|❌|❌|
|623|6743117370|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|
|624|6740705851|手表变身器：时空驱动器 - iWatch发声器|手錶變身器：時空驅動器 - iWatch發聲器|手錶變身器：時空驅動器 - iWatch發聲器|手錶變身器：時空驅動器 - iWatch發聲器|Henshin Hero - Game for watch|Henshin Hero - Game for watch|
|625|6743487416|黄金矿工 for Watch - 经典复刻|黃金礦工 - 手錶遊戲 經典複刻|黃金礦工 - 手錶遊戲 經典複刻|黃金礦工 - 手錶遊戲 經典複刻|Gold Miner - Watch Games|Gold Miner - Watch Games|
|626|6478843819|❌|家園、異星與獵人|家園、異星與獵人|家園、異星與獵人|Home, Planet & Hunters|Home, Planet & Hunters|
|627|6502453075|❌|Balatro|Balatro|Balatro|Balatro|Balatro|
|628|6670749900|❌|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|
|629|6711347049|❌|大俠立志傳|大俠立志傳|大俠立志傳|Hero's Adventure|Hero's Adventure|
|630|6547834967|❌|動物森友會 口袋露營廣場 集合版|動物森友會 口袋露營廣場 集合版|動物森友會 口袋露營廣場 集合版|Animal Crossing: Pocket Camp C|❌|
|631|6452276410|❌|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|
|632|6471479898|猫历 - 可爱清新日历和日程表提醒事项|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：Schedule Planner|Cat Calendar：Schedule Planner|
|633|6738371720|❌|銀盤滑冰場物語|銀盤滑冰場物語|銀盤滑冰場物語|Skating Rink Story|Skating Rink Story|
|634|6456751953|❌|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|
|635|6469114836|❌|スイカゲーム-Aladdin X|スイカゲーム-Aladdin X|スイカゲーム-Aladdin X|Suika Game-Aladdin X|Suika Game-Aladdin X|
|636|6743648252|❌|終焉車站|終焉車站|終焉車站|Saihate Station|Saihate Station|
|637|6738636631|❌|烈焰同盟|❌|烈焰同盟|❌|❌|
|638|6480082872|Dumbify|Dumbify|Dumbify|Dumbify|Dumbify|Dumbify|
|639|6738769251|❌|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|❌|
|640|6621207768|❌|聖劍同盟|❌|聖劍同盟|❌|❌|
|641|6743420230|❌|夢魘騎士團|❌|夢魘騎士團|❌|❌|
|642|6736642117|櫻花最前線 - 2025年預測|櫻花最前線 - 2025年預測|❌|櫻花最前線 - 2025年預測|❌|❌|
|643|6498879077|❌|平安古都物語|平安古都物語|平安古都物語|Heian City Story|Heian City Story|
|644|6738636602|❌|光輝同盟|❌|光輝同盟|❌|❌|
|645|6504323939|❌|勇者鬥惡龍X　覺醒的五種族　OFFLINE|勇者鬥惡龍X　覺醒的五種族　OFFLINE|勇者鬥惡龍X　覺醒的五種族　OFFLINE|❌|❌|
|646|6505046490|❌|摔角擂臺物語|摔角擂臺物語|摔角擂臺物語|Pro Wrestler Story|Pro Wrestler Story|
|647|6443723657|❌|filmhwa (필름화) - 화민 필터|filmhwa (필름화) - 화민 필터|filmhwa (필름화) - 화민 필터|filmhwa - @hwa.min's filter|filmhwa - @hwa.min's filter|
|648|6743342476|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|
|649|6742773178|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|
|650|6476663854|❌|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|
|651|6670469064|❌|8號出口|8號出口|8號出口|The Exit 8|The Exit 8|
|652|6447508479|❌|暖雪|暖雪|❌|Warm Snow|Warm Snow|
|653|6470958985|❌|完美的一天 - 無限流劇情向解謎游戲|完美的一天 - 無限流劇情向解謎游戲|完美的一天 - 無限流劇情向解謎游戲|A Perfect Day: Go back to 1999|A Perfect Day: Go back to 1999|
|654|6445875391|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|
|655|6443923265|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|
|656|6739839815|❌|RogueVana|RogueVana|RogueVana|RogueVana|RogueVana|
|657|6505052301|❌|碧海蒼雲錄|碧海蒼雲錄|碧海蒼雲錄|❌|❌|
|658|6642649684|❌|韭菜投資公司2|韭菜投資公司2|韭菜投資公司2|Leek Inc. 2|Leek Inc. 2|
|659|6738784092|❌|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|
|660|6450724928|❌|租戶賭財運|租戶賭財運|租戶賭財運|Luck be a Landlord|Luck be a Landlord|
|661|6740814979|❌|Follow the meaning|Follow the meaning|Follow the meaning|Follow the meaning|Follow the meaning|
|662|6456886656|❌|Layla|Layla|Layla|Layla|Layla|
|663|6498623389|Folium|Folium|Folium|Folium|Folium|Folium|
|664|6738342400|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|
|665|6744355637|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|
|666|6476064417|❌|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|
|667|6463710522|❌|勇者的傳奇|勇者的傳奇|勇者的傳奇|勇者的传奇|勇者的传奇|
|668|6468572535|❌|洞窟冒險團物語|洞窟冒險團物語|洞窟冒險團物語|Cavern Adventurers|Cavern Adventurers|
|669|6471947612|❌|召喚騎士團|召喚騎士團|召喚騎士團|召喚騎士團|召喚騎士團|
|670|6480501528|TODO：猫咪待办事项 & 提醒事项 & 备忘录|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo：To do list & Reminder|Cat Todo：To do list & Reminder|
|671|6714479204|❌|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|
|672|6740349666|❌|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|
|673|6473097811|❌|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|
|674|6463616555|❌|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|
|675|6477835115|❌|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|
|676|6449003064|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|
|677|6670199903|❌|StreetPro Racing|StreetPro Racing|StreetPro Racing|StreetPro Racing|StreetPro Racing|
|678|6505058041|❌|❌|❌|❌|❌|QUAKELINE|
|679|6744445187|❌|The Platform - Survive|The Platform - Survive|The Platform - Survive|The Platform - Survive|The Platform - Survive|
|680|6469419567|❌|Overwinter Survival|Overwinter Survival|Overwinter Survival|Overwinter Survival|Overwinter Survival|
|681|6444400410|❌|Farming Simulator 23|Farming Simulator 23|Farming Simulator 23|Farming Simulator 23 Mobile|Farming Simulator 23 Mobile|
|682|6474616013|❌|Trump Is Back|Trump Is Back|Trump Is Back|Trump Is Back|Trump Is Back|
|683|6471594918|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|
|684|6686394372|❌|Age of History 3|Age of History 3|Age of History 3|Age of History 3|Age of History 3|
|685|6740471827|手表经典迷宫游戏|手錶經典迷宮遊戲|手錶經典迷宮遊戲|手錶經典迷宮遊戲|Classic Maze Game for Watch|Classic Maze Game for Watch|
|686|1481853033|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|
|687|1581140954|Noir - 为Safari添加深色模式|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|
|688|1592917505|Noir – 为Safari添加深色模式|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|
|689|1591620171|Stay for Safari - 浏览器伴侣|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari|Stay for Safari|
|690|1438243180|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|
|691|625206080|❌|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|
|692|1108032375|❌|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|
|693|1439569401|❌|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|
|694|6459738231|❌|Lies of P|Lies of P|Lies of P|Lies of P|Lies of P|
|695|1441532941|❌|神界：原罪2|神界：原罪2|神界：原罪2|Divinity: Original Sin 2|Divinity: Original Sin 2|
|696|6449748961|❌|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|
|697|6499559693|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|
|698|6475002485|❌|Reeder.|Reeder.|Reeder.|Reeder.|Reeder.|
|699|1198176727|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|
|700|904280696|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|701|1055511498|Day One 日記：私人日記|Day One|Day One|Day One|Day One|Day One|
|702|1208145167|Picsew - 滚动截图 & 长图拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - Scrollshot & Collage|Picsew - Scrollshot & Collage|
|703|1444636541|Photomator|Photomator|Photomator|Photomator|Photomator – Photo Editor|Photomator|
|704|1444383602|Goodnotes 6：笔记，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6: AI Notes & Docs|Goodnotes 6: AI Notes & Docs|
|705|1473785373|钱迹记账-无广告超快捷记账存钱&资产管理&预算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|Qianji - Ad-Free Bookkeeping|Qianji - Ad-Free Bookkeeping|
|706|1461652639|网络调试精灵|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|iSocketTool|iSocketTool|
|707|6499198824|蜂软扫描 - 全能扫描仪|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|
|708|1538124245|哪里哪里|where I put it|where I put it|where I put it|where I put it|where I put it|
|709|6446469093|口袋时钟 - StandBy待机Widget桌面翻页创意时钟|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|Clock Pocket:standby widget|Clock Pocket:standby widget|
|710|1610668825|FyTube - 没有广告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube - YouTube Without Ads|FyTube - YouTube Without Ads|
|711|1175912897|EverMemo印象便签|EverMemo印象便簽|EverMemo印象便簽|EverMemo印象便簽|EverMemo - Fastest Note|EverMemo|
|712|6504433140|LaxtTime - 日常记录/循环提醒/习惯养成/倒计时|LaxtTime|LaxtTime|LaxtTime|LaxtTime - Remember Last Time|LaxtTime - Remember Last Time|
|713|920133658|解剖和生理学|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|
|714|6463851696|功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼|Zen++|Zen++|Zen++|Zen++|❌|
|715|1358237203|时间胶囊-寄往未来的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|时间胶囊-寄往未来的信|时间胶囊-寄往未来的信|
|716|1316883372|音乐世界赛特斯2|❌|❌|❌|❌|❌|
|717|956086985|美元折纸|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|
|718|1436481293|迷失岛3宇宙的尘埃|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|
|719|1422480068|Notes Writer Pro: 笔记和 PDF 标注|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|
|720|6443915320|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|
|721|884153085|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|
|722|1065802380|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|
|723| ~~533055404~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~Night Stars~~ | ~~Night Stars~~ |
|724|1493379610|时光进度 - 进度管理&待办计划|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|bProgress - Manage Daily Tasks|bProgress - Manage Daily Tasks|
|725|1255627901|方便面 - 朋友圈图文排版好帮手|泡麵｜經典原味|泡麵｜經典原味|泡麵｜經典原味|Instant Noodles: Original|Instant Noodles: Original|
|726|1449020025|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|
|727|1576004936|化学 - 元素周期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|Chemistry Periodic Table 2025|Chemistry Periodic Table 2025|
|728|827740598|小牛计算器(高级版)|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|
|729|355460798|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|
|730|1595313870|瓦尔登 - 日程管理，一个就够|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|Walden - Calendar/ToDo/Notes|Walden - Calendar/ToDo/Notes|
|731|6449383791|GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|
|732|1587301632|全能记(录音,备忘,流水)|全能備忘錄|全能備忘錄|全能備忘錄|All In One Memo|All In One Memo|
|733|1464666446|我的足迹: GPS记录仪|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|MyTracks: GPS Recorder|MyTracks: GPS Recorder|
|734|1665759338|坐在罐子里的人|❌|❌|❌|❌|❌|
|735|953426154|Be Focused Pro - Focus Timer|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro - Focus Timer|Be Focused Pro- Pomodoro Timer|
|736|1238778050|纪念碑谷2|❌|❌|❌|❌|❌|
|737|1020541183|电影精灵 - 专业视频编辑和电影制作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|MovieSpirit - Movie Maker Pro|MovieSpirit - Movie Maker Pro|
|738|576718804|aTimeLogger - 时间记录工具|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger Time Tracker|aTimeLogger Time Tracker|
|739|670400597|梁的挠度|樑的撓度|樑的撓度|樑的撓度|Deflection|Deflection|
|740|1400652313|冰钓大师|❌|❌|❌|❌|❌|
|741|1551596643|模拟地铁|❌|❌|❌|❌|❌|
|742|1437479513|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|❌|❌|
|743|1314212521|PPHub For GitHub - 开发者必备|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|
|744|1564383045|算法导论.助手|算法導論.助手|算法導論.助手|算法導論.助手|CLRS.Helper|CLRS.Helper|
|745|1380582804|手机帝国|手機帝國|手機帝國|手機帝國|Mobile Empire|Mobile Empire|
|746|6466390901|旋转音律 Rotaeno|❌|❌|❌|❌|❌|
|747|1596406400|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|
|748|598581396|Kingdom Rush Frontiers 塔防史诗冒险|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers TD|Kingdom Rush Frontiers TD|
|749|1157863540|泰拉瑞亚|❌|❌|❌|❌|❌|
|750|1630541373|隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|
|751|1512838461|DayCircle - 倒数|DayCircle - 倒數|DayCircle - 倒數|DayCircle - 倒數|DayCircle - Day counter|DayCircle - Day counter|
|752|1400032769|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|
|753| ~~460661291~~ | ~~安全笔记+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ |
|754| ~~505904421~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ |
|755| ~~1527841661~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~Sandbox Planet~~ | ~~Sandbox Planet~~ |
|756|1159266744|双子 Gemini|雙子 Gemini|雙子 Gemini|雙子 Gemini|❌|❌|
|757|1453808408|恶果之地|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|
|758|1458460469|人类跌落梦境|❌|❌|❌|❌|❌|
|759|1481100296|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|
|760| ~~431033044~~ | ~~Phone Drive - 云储存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive: File Storage Sync~~ | ~~Phone Drive: File Storage Sync~~ |
|761|1309638846|Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Vintage Camera - Goodak|Vintage Camera - Goodak|
|762|1618180398|照片同步-导出备份相册照片视频|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|PhotoSync-Backup your photos|PhotoSync-Backup your photos|
|763| ~~456637671~~ | ~~安全监控照片+视频Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~Safety Photo+Video Pro~~ | ~~Safety Photo+Video Pro~~ |
|764|1453318714|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — Story Maker|Vostok — Story Maker|
|765|931188326|DayCost|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|
|766|6449930220|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|Wafari - Watch Browser|Wafari - Watch Browser|
|767| ~~818394449~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~Timeline - World history~~ | ~~Timeline - World history~~ |
|768|1391571907|Fine修图|Fine修圖|Fine修圖|Fine修圖|Fine - Photo Editor|Fine - Photo Editor|
|769|6499125531|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|
|770| ~~1485101937~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ |
|771|703265535|FocusDots · 专注于当下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · Focus What Matters|FocusDots · Focus What Matters|
|772|6479307181|灵体侦测器|靈體偵測器|靈體偵測器|靈體偵測器|Ghostly Detector|Ghostly Detector|
|773| ~~488674899~~ | ~~雨雷達-實時天氣圖。 亞洲和中國。°~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~RAIN RADAR °- sky weather NOAA~~ | ~~RAIN RADAR ° live weather maps~~ |
|774|1636719674|锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|Lock Launcher - Screen Widgets|Lock Launcher - Screen Widgets|
|775|1543163106|末剑二|❌|❌|❌|❌|❌|
|776|6443812780|我的水世界求生|❌|❌|❌|❌|❌|
|777|1344655035|蜡烛人|❌|❌|❌|❌|❌|
|778|6446614518|画中世界|❌|❌|❌|❌|❌|
|779|1159700098|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|To the Moon|To the Moon|
|780|1271620263|艾希 - ICEY|ICEY|ICEY|ICEY|ICEY|ICEY|
|781|1361473095|喵斯快跑|MuseDash|MuseDash|MuseDash|MuseDash|MuseDash|
|782|6476010032|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|
|783|510249014|水平仪 HD|水準管 HD|水準管 HD|水準管 HD|Level HD.|Level HD.|
|784|904237743|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|785|1622341132|iSleeper - 梦话鼾声记录与睡眠监测|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper: Sleep Tracker|iSleeper: Sleep Tracker|
|786|900833042|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|
|787|1467880680|LEDot|LEDot|LEDot|LEDot|LEDot|LEDot - Realistic Portable LED|
|788|1455055663|皮皮虾专业版|❌|❌|❌|❌|❌|
|789|1595901138|NES 模拟器 - 吞食天地|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|
|790|1163515895|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账本Pro-管家理财必备工具|鲨鱼记账本Pro-管家理财必备工具|
|791|754105884|NightCap相机|NightCap相機|NightCap相機|NightCap相機|NightCap Camera|NightCap Camera|
|792|1642364007|海拔指南针|海拔指南针|海拔指南针|海拔指南针|Altitude Compass|Altitude Compass|
|793|1522215205|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|
|794|1484181693|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|
|795|1117998129|2025人体解剖学图谱|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|
|796|6444824570|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|
|797|469338840|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|
|798|1197275827|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|
|799|578665578|Threema。安全的通讯工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|Threema. The Secure Messenger|Threema. The Secure Messenger|
|800|1547418803|Incredibox - 好玩的音乐盒|❌|❌|❌|❌|❌|
|801|1210251567|SleepTown 睡眠小镇|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown|SleepTown|
|802|1080235640|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|
|803|1658579911|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|XIAOTE - Tesla BLE Watch key|XIAOTE - Tesla BLE Watch key|
|804|1152396902|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|
|805|1633366918|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|
|806|6480159520|转录大师 - 录音转文字、实时离线转录|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - Speech to Text|Whisper Pen - Speech to Text|
|807|966489322|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|
|808|898876435|Planit巧摄专业版：风光摄影计划神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit Pro: Photo Planner|Planit Pro: Photo Planner|
|809|1062745479|HeartWatch: 心脏和活动监测器|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: Heart Rate Tracker|HeartWatch: Heart Rate Tracker|
|810|6476963352|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|
|811|1459076631|隐形守护者|隐形守护者|隐形守护者|❌|隐形守护者|❌|
|812|1660014964|飞越13号房|❌|❌|❌|❌|❌|
|813|730712409|ProCam - 专业相机|ProCam - 專業相機|ProCam - 專業相機|ProCam - 專業相機|ProCam - Pro Camera|ProCam - Pro Camera|
|814|6451239549|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|
|815|1633865171|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|
|816|1492395549|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|❌|
|817|1661419573|atvTools|atvTools|atvTools|atvTools|atvTools|atvTools|
|818|6479683928|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|
|819|6443798663|敲木鱼 - 打节拍敲音效解压神器|敲木魚|敲木魚|敲木魚|MuYu|MuYu|
|820|373454750|随手记Pro–个人家庭生意记账|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|随手记Pro|随手记Pro–记账财务管理软件|
|821|916366645|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|
|822|1164801111|AutoSleep - 通过手表自动追踪睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep Track Sleep on Watch|AutoSleep Track Sleep on Watch|
|823|1625289361|空气投篮|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|
|824|1261944766|Alook浏览器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook Browser - 8x Speed|Alook Browser - 8x Speed|
|825|866450515|Forest 专注森林 - 番茄钟学习计时器|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest: Focus for Productivity|Forest: Focus for Productivity|
|826|1600873673|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|❌|❌|❌|
|827|388624839|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别|CamScanner+|CamScanner+|CamScanner+|CamScanner + | OCR Scanner|CamScanner + | PDF Scanner|
|828|768160271|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|
|829|1439723850|时间规划局 - 倒计时与提醒事项|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|
|830|6447023668|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|
|831|6468843723|❌|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|
|832|6468845173|❌|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|
|833|6468845068|❌|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – Definitive|GTA: San Andreas – Definitive|
|834|1631331207|❌|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|
|835|1598130789|❌|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|
|836|1085114709|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|
|837|6450262949|Longshot - 截图 & OCR文字识别|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|
|838|6451498949|❌|Stray|Stray|Stray|Stray|Stray|
|839|1630403500|APTV|APTV|APTV|APTV|APTV|APTV|
|840|1552536109|PasteNow - 剪贴板工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - Instant Clipboard|PasteNow - Instant Clipboard|
|841|1558391784|Filebar|Filebar|Filebar|Filebar|Filebar - media player|Filebar - media player|
|842|1548711022|Barbee - 清理您的菜单栏图标|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|
|843|1575588022|MenubarX - 强大的菜单栏浏览器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - Floating Browser|MenubarX - Floating Browser|
|844|1630034110|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|
|845|1009747025|zFuse - 影音播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - Video Player|zFuse - Video Player|
|846|1054505347|zFuse - 视频播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - Media Player|zFuse - Media Player|
|847|1659622164|VidHub - 高清影片视频播放器，快速播放云盘网盘|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|
|848|1136220934|Infuse|Infuse|Infuse|Infuse|Infuse|Infuse|
|849|1476649036|帕斯卡契约|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|
|850|1635315427|暖雪|❌|❌|❌|❌|❌|
|851|1523446532|重生细胞|❌|❌|❌|❌|❌|
|852|1389752090|❌|Dead Cells|Dead Cells|Dead Cells|Dead Cells|Dead Cells|
|853|1640627334|❌|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|
|854|6450980545|❌|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|
|855|6462360082|❌|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|
|856|1620883955|❌|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|
|857|1606703078|❌|槍火重生|槍火重生|槍火重生|Gunfire Reborn|❌|
|858|1373575045|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|859|1371965583|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|860|6450877530|花园之间|❌|❌|❌|❌|❌|
|861|1601446687|❌|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|
|862|1587860402|❌|籠中窺夢|籠中窺夢|籠中窺夢|Moncage|Moncage|
|863|1584313012|笼中窥梦|❌|❌|❌|❌|❌|
|864|1465779286|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|865|1445379072|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|866|1521190840|格莉斯的旅程|❌|❌|❌|❌|❌|
|867|728293409|❌|紀念碑谷|紀念碑谷|紀念碑谷|Monument Valley|Monument Valley|
|868|1582832845|纪念碑谷|❌|❌|❌|❌|❌|
|869|1644917705|无处遁形：全网公敌|無處遁形：全網公敵|無處遁形：全網公敵|無處遁形：全網公敵|Cyber Manhunt|Cyber Manhunt|
|870|1369179088|❌|Grimvalor|Grimvalor|Grimvalor|Grimvalor|Grimvalor|
|871|1669723530|原界之罪|❌|❌|❌|❌|❌|
|872|481629890|❌|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|
|873|656951157|❌|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|
|874|886561127|❌|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|
|875|1201642309|❌|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|
|876|1529448980|❌|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|
|877|1529445840|❌|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|
|878|1596063349|❌|Stash|Stash|Stash|Stash - Rule Based Proxy|Stash - Rule Based Proxy|
|879|6444029612|❌|Loon Lite|Loon Lite|Loon Lite|Loon Lite|Loon Lite|
|880|1373567447|❌|Loon|Loon|Loon|Loon|Loon|
|881|1442620678|❌|Surge 5|Surge 5|Surge 5|Surge 5|Surge 5|
|882|1443988620|❌|Quantumult X|Quantumult X|Quantumult X|Quantumult X|Quantumult X|
|883|932747118|❌|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|
|884|1642682818|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|
|885|1319191852|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|
|886|1067198688|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|

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