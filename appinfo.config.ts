export const regions: Region[] = ['cn', 'hk', 'mo', 'tw', 'us']

/**
 * 注意：这里默认写的是中文，做了多语言支持，以中文为key
 */
export const getRegionNameMap = () => ({
  cn: t('中国大陆'),
  hk: t('中国香港'),
  mo: t('中国澳门'),
  tw: t('中国台湾'),
  us: t('美国'),
})

/**
 * 注意：这里的 value 值是从浏览器打开应用详情页时，对应的 `App 内购买项目` 的标题
 * 文本内容一定要对得上，不然获取不到应用的内购信息
 */
export const regionInAppPurchasesTextMap: Record<Region, string> = {
  cn: 'App 内购买项目',
  hk: 'App 內購買項目',
  mo: 'App 內購買項目',
  tw: 'App 內購買',
  us: 'In-App Purchases',
}

/**
 * 注意：这里暂时规划是只有中文和英文
 */
export const regionLanguageCodeMap: Record<Region, string> = {
  cn: 'zh-CN',
  hk: 'zh-CN',
  mo: 'zh-CN',
  tw: 'zh-CN',
  us: 'en',
}

/**
 * 国家或地区对应的时区，用途是计算日期分类时，不同时区可以按其当地的时区归类
 * 值需要遵循 https://www.iana.org/time-zones 中的取值
 */
export const regionTimezoneMap: Record<Region, string> = {
  cn: 'Asia/Shanghai',
  hk: 'Asia/Hong_Kong',
  mo: 'Asia/Macau',
  tw: 'Asia/Taipei',
  us: 'America/New_York',
}

/**
 * 注意：新添加的应用写在最上面
 * Note: Newly added applications should be written at the top
 *
 * id 是应用的 ID
 * name 是应用名称，可以是多种类型
 * name 为 string 类型表示该应用在所有地区都是同一个名称
 * name 为 Partial<Record<Record, string>> 类型表示不同国家或地区的应用名称都不一样
 * name 为 [string, Partial<Record<Record, string>>] 类型表示多个地区的应用名称都相同，其他地区可能有不同的名称
 * 正常的话，中英文不一样就中英文各写一个就可以；这里的名称只有写代码的能看到
 */
export const appConfig: AppConfig[] = [
  {
    id: 1198176727,
    name: 'Controller for HomeKit',
  },
  {
    id: 904280696,
    name: 'Things 3',
  },
  {
    id: 1055511498,
    name: 'Day One',
  },
  {
    id: 1208145167,
    name: 'Picsew',
  },
  {
    id: 1444636541,
    name: 'Photomator',
  },
  {
    id: 1444383602,
    name: 'Goodnotes 6',
  },
  {
    id: 1473785373,
    name: ['钱迹记账-无广告随手记账本', { us: '钱迹-存钱记账小能手' }],
  },
  {
    id: 1461652639,
    name: ['TCP UDP Ping Socket 网络 调试 工具', { us: 'TCP UDP Debugger' }],
  },
  {
    id: 6499198824,
    name: ['蜂软扫描 - 全能扫描仪', { us: 'ScanGo:Scanner App free of ads' }],
  },
  {
    id: 1538124245,
    name: ['哪里哪里', { us: 'where I put it' }],
  },
  {
    id: 6446469093,
    name: [
      '口袋时钟 - StandBy待机Widget桌面翻页创意时钟',
      { us: 'Clock Pocket:standby widget' },
    ],
  },
  {
    id: 1610668825,
    name: [
      'FyTube - 没有广告的 YouTube',
      { us: 'FyTube - YouTube Without Ads' },
    ],
  },
  {
    id: 1175912897,
    name: ['EverMemo印象便签', { us: 'EverMemo - Fastest Note' }],
  },
  {
    id: 6504433140,
    name: 'LaxtTime',
  },
  {
    id: 920133658,
    name: ['解剖和生理学', { us: 'Anatomy & Physiology' }],
  },
  {
    id: 6463851696,
    name: ['功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼', { us: 'Zen++' }],
  },
  {
    id: 1358237203,
    name: '时间胶囊-寄往未来的信',
  },
  {
    id: 1316883372,
    name: '音乐世界赛特斯2',
  },
  {
    id: 956086985,
    name: ['美元折纸', { us: 'Dollar Bill Origami' }],
  },
  {
    id: 1436481293,
    name: ['迷失岛3宇宙的尘埃', { us: 'ISOLAND 3 Dust of the Universe' }],
  },
  {
    id: 1422480068,
    name: [
      'Notes Writer Pro: 笔记和 PDF 标注',
      { us: 'Notes Writer Pro 2024' },
    ],
  },
  {
    id: 6443915320,
    name: '发条日签-好心情制造机',
  },
  {
    id: 884153085,
    name: 'Remote, Mouse & Keyboard Pro',
  },
  {
    id: 1065802380,
    name: 'Stream Music Player',
  },
  {
    id: 533055404,
    name: ['夜星 (Night Stars)', { us: 'Night Stars' }],
  },
  {
    id: 1493379610,
    name: [
      '时光进度 - 进度管理&待办计划',
      { us: 'bProgress - Manage Daily Tasks' },
    ],
  },
  {
    id: 1255627901,
    name: [
      '方便面 - 朋友圈图文排版好帮手',
      { us: 'Instant Noodles: Original' },
    ],
  },
  {
    id: 1449020025,
    name: '不玩手机-自律习惯养成记',
  },
  {
    id: 1576004936,
    name: ['化学 - 元素周期表 2024', { us: 'Chemistry Periodic Table 2024' }],
  },
  {
    id: 827740598,
    name: ['小牛计算器(高级版)', { us: 'Xmart Calculator Pro' }],
  },
  {
    id: 355460798,
    name: 'Inspire Pro',
  },
  {
    id: 1595313870,
    name: [
      '瓦尔登 - 日程管理，一个就够',
      { us: 'Walden - Calendar/ToDo/Notes' },
    ],
  },
  {
    id: 6449383791,
    name: [
      'GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验',
      { us: 'GIF Recorder-ImproveEfficiency' },
    ],
  },
  {
    id: 1587301632,
    name: ['全能记(录音,备忘,流水)', { us: 'All In One Memo' }],
  },
  {
    id: 1464666446,
    name: ['我的足迹: GPS记录仪', { us: 'MyTracks: GPS Recorder' }],
  },
  {
    id: 1665759338,
    name: '坐在罐子里的人',
  },
  {
    id: 953426154,
    name: 'Be Focused Pro - Focus Timer',
  },
  {
    id: 1238778050,
    name: '纪念碑谷2',
  },
  {
    id: 1020541183,
    name: [
      '电影精灵 - 专业视频编辑和电影制作',
      { us: 'MovieSpirit - Movie Maker Pro' },
    ],
  },
  {
    id: 576718804,
    name: ['aTimeLogger - 时间记录工具', { us: 'aTimeLogger Time Tracker' }],
  },
  {
    id: 670400597,
    name: ['梁的挠度', { us: 'Deflection' }],
  },
  {
    id: 1400652313,
    name: '冰钓大师',
  },
  {
    id: 1551596643,
    name: '模拟地铁',
  },
  {
    id: 1437479513,
    name: '逃脱者：困境突围',
  },
  {
    id: 1314212521,
    name: [
      'PPHub For GitHub - 开发者必备',
      { us: 'PPHub For GitHub - Developer' },
    ],
  },
  {
    id: 1564383045,
    name: ['算法导论.助手', { us: 'CLRS.Helper' }],
  },
  {
    id: 1380582804,
    name: ['手机帝国', { us: 'Mobile Empire' }],
  },
  {
    id: 6466390901,
    name: '旋转音律 Rotaeno',
  },
  {
    id: 1596406400,
    name: '黄鸭证件照-最美求职考试证照制作神器',
  },
  {
    id: 598581396,
    name: [
      'Kingdom Rush Frontiers 塔防史诗冒险',
      { us: 'Kingdom Rush Frontiers TD' },
    ],
  },
  {
    id: 1157863540,
    name: '泰拉瑞亚',
  },
  {
    id: 1630541373,
    name: [
      '隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM',
      { us: 'Private Album - PRAM' },
    ],
  },
  {
    id: 1512838461,
    name: ['DayCircle - 倒数', { us: 'DayCircle - Day counter' }],
  },
  {
    id: 1400032769,
    name: 'Card.Note - 多彩卡片笔记',
  },
  {
    id: 460661291,
    name: ['安全笔记+ Pro', { us: 'Safety Note+ Pro' }],
  },
  {
    id: 505904421,
    name: 'AirDisk Pro',
  },
  {
    id: 1527841661,
    name: ['沙盒星球', { us: 'Sandbox Planet' }],
  },
  {
    id: 1159266744,
    name: '双子 Gemini',
  },
  {
    id: 1453808408,
    name: ['恶果之地', { us: 'Juicy Realm' }],
  },
  {
    id: 1458460469,
    name: '人类跌落梦境',
  },
  {
    id: 1481100296,
    name: 'BreatheIn: Calm Breathing',
  },
  {
    id: 431033044,
    name: [
      'Phone Drive - 云储存管理和文件共享',
      { us: 'Phone Drive: File Storage Sync' },
    ],
  },
  {
    id: 1309638846,
    name: [
      'Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜',
      { us: 'Vintage Camera - Goodak' },
    ],
  },
  {
    id: 1618180398,
    name: [
      '照片同步-导出备份相册照片视频',
      { us: 'PhotoSync-Backup your photos' },
    ],
  },
  {
    id: 456637671,
    name: ['安全监控照片+视频Pro', { us: 'Safety Photo+Video Pro' }],
  },
  {
    id: 1453318714,
    name: ['Vostok — 创建美丽快拍页面', { us: 'Vostok — Story Make' }],
  },
  {
    id: 931188326,
    name: ['DayCost', { us: 'Wafari - Watch Browser' }],
  },
  {
    id: 6449930220,
    name: ['手表浏览器 Wafari', { us: 'Wafari - Watch Browser' }],
  },
  {
    id: 818394449,
    name: ['时间轴-全球历史', { us: 'Timeline - World history' }],
  },
  { id: 1391571907, name: ['Fine修图', { us: 'Fine - Photo Edito' }] },
  { id: 6499125531, name: '完蛋！我被美女包围了！' },
  { id: 1485101937, name: 'Juice Watch' },
  {
    id: 703265535,
    name: ['FocusDots · Focus What Matters', { cn: 'FocusDots · 专注于当下' }],
  },
  { id: 6479307181, name: ['Ghostly Detector', { cn: '灵体侦测器' }] },
  {
    id: 488674899,
    name: [
      'RAIN RADAR °- sky weather NOAA',
      { cn: '雨雷達-實時天氣圖。 亞洲和中國。°' },
    ],
  },
  {
    id: 1636719674,
    name: [
      '锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局',
      { us: 'Lock Launcher - Screen Widgets' },
    ],
  },
  { id: 1543163106, name: '末剑二' },
  { id: 6443812780, name: '我的水世界求生' },
  { id: 1344655035, name: '蜡烛人' },
  { id: 6446614518, name: '画中世界' },
  { id: 1159700098, name: ['去月球-To the Moon', { us: 'To the Moon' }] },
  { id: 1271620263, name: ['艾希 - ICEY', { us: 'ICEY' }] },
  { id: 1361473095, name: ['Muse Dash 喵斯快跑', { us: 'Muse Dash' }] },
  { id: 6476010032, name: '拦截猫-垃圾短信电话拦截' },
  { id: 510249014, name: ['水平仪 HD', { us: 'Level HD.' }] },
  { id: 904237743, name: 'Things 3' },
  {
    id: 1622341132,
    name: [
      'iSleeper - 梦话鼾声记录与睡眠监测',
      { us: 'iSleeper: Sleep Tracker' },
    ],
  },
  { id: 900833042, name: 'Fliqlo' },
  { id: 1467880680, name: 'LEDot' },
  { id: 1455055663, name: '皮皮虾专业版' },
  {
    id: 1595901138,
    name: ['NES 模拟器', { us: 'Handheld Game - NES Emulator' }],
  },
  { id: 1163515895, name: '鲨鱼记账本Pro-管家理财必备工具' },
  { id: 754105884, name: ['NightCap Camera', { cn: 'NightCap相机' }] },
  { id: 1642364007, name: ['海拔指南针', { us: 'Altitude Compass' }] },
  { id: 1522215205, name: '拒之-骚扰电话批量拦截助手' },
  { id: 1484181693, name: '截图超人 - 微商专用的营销助手截图神器' },
  {
    id: 1117998129,
    name: ['Human Anatomy Atlas 2025', { cn: '2025人体解剖学图谱' }],
  },
  { id: 6444824570, name: 'ClashX - 服务监控面板' },
  { id: 469338840, name: '飞常准Pro-全球航班查询机票酒店预订' },
  { id: 1197275827, name: '金十数据(专业版)-为交易而生' },
  {
    id: 578665578,
    name: ['Threema. The Secure Messenger', { cn: 'Threema。安全的通讯工具' }],
  },
  { id: 1547418803, name: 'Incredibox - 好玩的音乐盒' },
  { id: 1210251567, name: ['SleepTown', { cn: 'SleepTown 睡眠小镇' }] },
  { id: 1080235640, name: 'CNU - 顶尖视觉精选' },
  {
    id: 1658579911,
    name: ['小特钥匙 - 手表隐私蓝牙钥匙', { us: 'XIAOTE Watch key' }],
  },
  { id: 1152396902, name: '凤凰新闻(专业版)-头条新闻阅读平台' },
  { id: 1633366918, name: 'Instant Lines' },
  {
    id: 6480159520,
    name: [
      '转录大师 - 录音转文字、实时离线转录',
      { us: 'Whisper Pen - Speech to Text' },
    ],
  },
  { id: 966489322, name: '生辰 — 桌面时间小组件' },
  {
    id: 898876435,
    name: [
      'Planit巧摄专业版：风光摄影计划神器',
      { us: 'Planit Pro: Photo Planner' },
    ],
  },
  {
    id: 1062745479,
    name: [
      'HeartWatch: Heart Rate Tracker',
      { cn: 'HeartWatch: 心脏和活动监测器' },
    ],
  },
  { id: 6476963352, name: '万能生成器' },
  { id: 1459076631, name: '隐形守护者' },
  { id: 1660014964, name: '飞越13号房' },
  { id: 730712409, name: ['ProCam - Pro Camera', { cn: 'ProCam - 专业相机' }] },
  { id: 6451239549, name: '全网短剧大全-热门短剧抢先看' },
  { id: 1633865171, name: '獬豸 · 民法典' },
  { id: 1492395549, name: '爱美剧-人人美剧天堂社区' },
  { id: 1661419573, name: 'atvTools' },
  { id: 6479683928, name: 'AMood' },
  { id: 6443798663, name: ['敲木鱼 - 打节拍敲音效解压神器', { us: 'MuYu' }] },
  { id: 373454750, name: '随手记Pro' },
  { id: 916366645, name: 'Procreate Pocket' },
  {
    id: 1164801111,
    name: [
      'AutoSleep Track Sleep on Watch',
      { cn: 'AutoSleep - 通过手表自动追踪睡眠' },
    ],
  },
  { id: 1625289361, name: ['空气投篮', { us: 'AirShot - AuditoryAR' }] },
  {
    id: 1261944766,
    name: ['Alook浏览器 - 8倍速', { us: 'Alook Browser - 8x Speed' }],
  },
  {
    id: 866450515,
    name: [
      'Forest: Focus for Productivity',
      { cn: 'Forest 专注森林 - 番茄钟学习计时器' },
    ],
  },
  { id: 1600873673, name: '炭炭背单词｜四六级考研等英语单词学习' },
  {
    id: 388624839,
    name: [
      '扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别',
      { us: 'CamScanner + | OCR Scanner' },
    ],
  },
  { id: 768160271, name: '航旅纵横PRO' },
  {
    id: 1439723850,
    name: [
      '时间规划局 - 倒计时与提醒事项',
      { us: 'Countdown! Reminders and Timer' },
    ],
  },
  { id: 6447023668, name: '爱韩剧 - 韩剧TV大全' },
  { id: 6468843723, name: 'GTA III – Definitive' },
  { id: 6468845173, name: 'GTA: Vice City – Definitive' },
  { id: 6468845068, name: 'GTA: San Andreas – Definitive' },
  { id: 1631331207, name: 'Hitman: Blood Money — Reprisal' },
  { id: 1598130789, name: 'Company of Heroes Collection' },
  { id: 1085114709, name: 'Parallels Desktop' },
  {
    id: 6450262949,
    name: [
      'Longshot - 截图 & OCR文字识别',
      { us: 'Longshot - Screenshot & OCR' },
    ],
  },
  { id: 6451498949, name: 'Stray' },
  { id: 1630403500, name: 'APTV' },
  {
    id: 1552536109,
    name: ['PasteNow - 剪贴板工具', { us: 'PasteNow - Instant Clipboard' }],
  },
  { id: 1558391784, name: 'Fileball' },
  {
    id: 1548711022,
    name: [
      'Barbee - 清理您的菜单栏图标',
      { us: 'Barbee - Hide Menu Bar Items' },
    ],
  },
  {
    id: 1575588022,
    name: [
      'MenubarX - 强大的菜单栏浏览器',
      { us: 'MenubarX - Floating Browser' },
    ],
  },
  { id: 1630034110, name: 'Bob - 翻译和 OCR 工具' },
  {
    id: 1009747025,
    name: ['zFuse - Video Player', { cn: 'zFuse - 影音播放器' }],
  },
  {
    id: 1054505347,
    name: ['zFuse - Media Player', { cn: 'zFuse - 视频播放器' }],
  },
  {
    id: 1659622164,
    name: [
      'VidHub - 高清影片视频播放器，快速播放云盘网盘',
      { us: 'VidHub -Video Library & Player' },
    ],
  },
  {
    id: 1136220934,
    name: ['Infuse • Video Player', { cn: 'Infuse - 智能视频播放器' }],
  },
  { id: 1476649036, name: ['帕斯卡契约', { us: `Pascal's Wager` }] },
  { id: 1635315427, name: '暖雪' },
  { id: 1523446532, name: '重生细胞' },
  { id: 1389752090, name: 'Dead Cells' },
  { id: 1640627334, name: 'Resident Evil Village' }, // Mac
  { id: 6450980545, name: 'Resident Evil Village' }, // iPhone/Ipad
  { id: 6462360082, name: 'Resident Evil 4' },
  { id: 1620883955, name: 'Little Nightmares' },
  { id: 1606703078, name: ['枪火重生', { us: 'Gunfire Reborn' }] },
  { id: 1373575045, name: 'The Gardens Between' }, // Mac
  { id: 1371965583, name: 'The Gardens Between' }, // iPhone/Ipad
  { id: 6450877530, name: '花园之间' },
  { id: 1601446687, name: 'Streets of Rage 4' },
  { id: 1587860402, name: ['笼中窥梦', { us: 'Moncage' }] },
  { id: 1584313012, name: '笼中窥梦' },
  { id: 1465779286, name: 'GRIS' }, // Mac
  { id: 1445379072, name: 'GRIS' }, // iPhone/Ipad
  { id: 1521190840, name: '格莉斯的旅程' },
  { id: 728293409, name: 'Monument Valley' },
  { id: 1582832845, name: '纪念碑谷' },
  { id: 1644917705, name: ['无处遁形：全网公敌', { us: `Cyber Manhunt` }] },
  { id: 1369179088, name: `Grimvalor` },
  { id: 1669723530, name: `原界之罪` },
  { id: 481629890, name: `Playdead's LIMBO` }, // Mac
  { id: 656951157, name: `Playdead's LIMBO` }, // iPhone/Ipad
  { id: 886561127, name: `Playdead's INSIDE` }, // Mac
  { id: 1201642309, name: `Playdead's INSIDE` }, // iPhone/Ipad/Apple TV
  { id: 1529448980, name: 'Reeder 5' }, // Mac
  { id: 1529445840, name: 'Reeder 5' }, // iPhone/Ipad
  { id: 1596063349, name: 'Stash' },
  { id: 6444029612, name: 'Loon Lite' },
  { id: 1373567447, name: 'Loon' },
  { id: 1442620678, name: 'Surge 5' },
  { id: 1443988620, name: 'Quantumult X' },
  { id: 932747118, name: 'Shadowrocket' },
  { id: 1642682818, name: '熊猫吃短信2 - 垃圾短信拦截' },
  { id: 1319191852, name: '熊猫吃短信 - 垃圾短信过滤' },
  { id: 1067198688, name: '彩云天气pro' },
]
