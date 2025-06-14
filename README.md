<div align="center">
  <p style="font-size: 18px;">An open-source App Store discounts tracker built on GitHub Actions, supporting RSS, Telegram and DingTalk notifications</p>


English | [简体中文](https://github.com/appstore-discounts/appstore-discounts/blob/main/README_zh-CN.md)



[![github-stars](https://img.shields.io/github/stars/eyelly-wu/appstore-discounts?style=social "github-stars")](https://github.com/appstore-discounts/appstore-discounts/stargazers "github-stars")
[![github-issues](https://img.shields.io/github/issues-raw/eyelly-wu/appstore-discounts "github-issues")](https://github.com/appstore-discounts/appstore-discounts/issues "github-issues")


</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Features](#features)<br/>
  [Sponsors](#sponsors)<br/>
  [How to Subscribe](#how-to-subscribe)<br/>
  &emsp;&emsp;[RSS](#rss)<br/>
  &emsp;&emsp;[Telegram](#telegram)<br/>
  &emsp;&emsp;[DingTalk](#dingtalk)<br/>
  [Operating Mechanism and Process](#operating-mechanism-and-process)<br/>
  [Related Documents](#related-documents)<br/>
  [Star History](#star-history)<br/>
  [License](#license)<br/>

</details>


# Vision
Become the trusted savings assistant for  `App Store`  users, helping more people buy their favorite apps at discounted prices
# Features

* Support any  `App Store`  of any  `Country or Region`  (theoretically 🤔)
* Track  `App`  and  `In-App Purchases`  prices
* Multiple subscription options available
   * RSS
   * Telegram
   * DingTalk
* Automatically update tracking apps based on paid app rankings
* Open source for free, welcome to contribute


# Sponsors


<div align="center">
  <a href="https://cdn.jsdelivr.net/gh/appstore-discounts/appstore-discounts@refs/heads/main/docs/src/readme/Sponsors/sponsors.svg" target="_blank">
    <img src="https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/refs/heads/main/docs/src/readme/Sponsors/sponsors.svg" alt="Sponsors" />
  </a>
</div>


# How to Subscribe

## RSS

|Code|Country or Region|RSS  Source|
|:-|:-|:-|
|cn|Mainland China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/cn.xml|
|hk|Hong Kong, China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/hk.xml|
|mo|Macao, China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/mo.xml|
|tw|Taiwan, China|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/tw.xml|
|us|United States|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/us.xml|
|tr|Türkiye|https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/main/rss/tr.xml|

## Telegram
Click  [![telegram](https://img.shields.io/badge/Telegram-Channel-blue?style=flat&logo=telegram "telegram")](https://t.me/appstore_discounts "telegram-channel")  to Subscribe
## DingTalk
Click  [![dingtalk](https://img.alicdn.com/imgextra/i3/O1CN01WMvMRG1ks3Ixc9x1v_!!6000000004738-55-tps-32-32.svg "dingtalk")](https://qr.dingtalk.com/action/joingroup?code=v1,k1,o9TXTPxGRNhCmrTUa4cHymeJCIcRiimCsH4FqEnbEWU=&_dt_no_comment=1&origin=11 "dingtalk")  to Subscribe
# Operating Mechanism and Process
This project automatically executes the following process based on  `GitHub Actions`  timing tasks (every  `60`  minutes):
1. Fetches app information from the paid rankings
2. Update the tracking app list
3. Get the latest price information for apps
   1. Get app details and the price of  `App`  through  [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1) 
   2. Resolve the app details link to get the price of  `In-App Purchases` （Data scraping powered by [Scrapeless](https://www.scrapeless.com/en "Scrapeless - Effortless Web Scraping Toolkit for Business and Developers") ）
4. Read stored price information
5. Calculate discount information
6. Update the latest price information
7. Update  `RSS`  files
8. Push notification to  `Telegram` 
9. Push notification to  `DingTalk` 
10. Update  `README.md`  and related documents
11. Submit  `Git`  update

Subscribers will receive a push if there is a discount
# Related Documents

* [❤️ The currently tracked  `Country or Region`  and corresponding App list](https://github.com/appstore-discounts/appstore-discounts/blob/main/docs/dist/FOCUS.md)
* [🤝 How to Contribute](https://github.com/appstore-discounts/appstore-discounts/blob/main/docs/dist/CONTRIBUTION_GUIDELINES.md)


# Star History
<a href="https://star-history.com/#eyelly-wu/appstore-discounts&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date&theme=dark"></source><source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date"></source><img alt="Star History Chart" src="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date" />
  </picture>
</a>

# License
[MIT](./LICENSE)

Copyright (c) 2024-present Eyelly Wu