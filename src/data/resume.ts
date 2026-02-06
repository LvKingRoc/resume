import type { PersonalInfo, Education, SkillCategory, Project, Experience, CampusRole } from '@/types'

// 个人信息
export const personalInfo: PersonalInfo = {
  name: '吕金鹏',
  age: 22,
  title: 'Java全栈工程师',
  phone: '15338859106',
  email: '1813197353@qq.com',
  avatar: 'images/preview.webp'
}

// 教育背景
export const education: Education = {
  school: '广东理工学院',
  major: '软件工程',
  degree: '全日制本科学历',
  period: '2022.09 - 2026.06',
  mainCourses: ['Web-Vue开发', 'Spring Boot后端开发', '数据库原理', '数据结构', 'Java编程'],
  minorCourses: ['Python编程', 'Python神经网络与深度学习', 'Linux']
}

// 技术技能
export const skillCategories: SkillCategory[] = [
  {
    name: '后端核心',
    icon: 'server',
    skills: [
      'Java 编程',
      'Spring Boot 框架',
      'MyBatis / MyBatis-Plus',
      'RESTful API 设计',
      { name: 'Spring Security 鉴权', advanced: true },
      { name: 'JWT + AOP 日志切面', advanced: true },
      { name: 'AI API 集成', advanced: true }
    ]
  },
  {
    name: '数据库',
    icon: 'database',
    skills: [
      'MySQL 数据库',
      'PostgreSQL',
      'Redis 缓存',
      { name: 'TimescaleDB 时序库', advanced: true },
      { name: 'SQL 优化', advanced: true }
    ]
  },
  {
    name: '前端技术',
    icon: 'code',
    skills: [
      'Vue3 + TypeScript',
      'Pinia 状态管理',
      'Element Plus / Vant',
      { name: 'Electron 桌面应用', advanced: true },
      { name: 'ECharts 数据可视化', advanced: true },
      { name: 'Google Maps API', advanced: true }
    ]
  },
  {
    name: '实时通信',
    icon: 'wifi',
    skills: [
      'WebSocket 双向通信',
      'SSE 服务端推送',
      { name: 'Web Audio API', advanced: true },
      { name: '音频流处理', advanced: true }
    ]
  },
  {
    name: '工程化部署',
    icon: 'tool',
    skills: [
      'Maven 构建',
      'Git 版本控制',
      'Nginx 反向代理',
      { name: 'Linux 服务器部署', advanced: true },
      { name: 'Capacitor 混合APP', advanced: true }
    ]
  },
  {
    name: 'AI开发',
    icon: 'code',
    skills: [
      'OpenAI API 集成',
      'Claude API 集成',
      'AI 问答与总结',
      { name: 'STT/TTS 语音服务', advanced: true },
      { name: 'GitHub Copilot', advanced: true }
    ]
  }
]

// 项目经历（按时间倒序排列）
export const projects: Project[] = [
  {
    id: 0,
    name: '个人简历网站',
    subtitle: '响应式简历展示页',
    description: '基于Vue3 + TypeScript + SCSS构建的个人简历网站，采用组件化架构设计，支持PC端与移动端自适应布局，展示个人技能、项目经历、教育背景等信息。',
    image: 'images/preview.webp',
    images: ['images/preview.webp'],
    techStack: ['Vue 3', 'TypeScript', 'SCSS', 'Vite', 'Composition API'],
    highlights: [
      '基于Vue3 Composition API构建，组件化架构设计，代码结构清晰易维护',
      'PC端与移动端分离设计，设备检测动态加载对应组件',
      'SCSS变量与Mixins统一管理样式，支持主题配色快速切换',
      '项目图片弹窗查看功能，支持多图切换与键盘导航',
      '数据驱动设计，简历内容统一管理，便于维护和更新'
    ],
    period: 'all time'
  },
  {
    id: 1,
    name: 'REEM Insight',
    subtitle: '房地产数据可视化平台',
    description: '面向阿联酋阿布扎比Al Reem Island区域的房地产数据可视化与分析平台，提供地图交互+房源筛选+多层级聚合统计+详情与走势的一体化查询体验，同时支持Web端与Electron桌面端。',
    image: 'images/REEM/1.webp',
    images: ['images/REEM/1.webp', 'images/REEM/2.webp', 'images/REEM/3.webp', 'images/REEM/4.webp', 'images/REEM/5.webp', 'images/REEM/6.webp'],
    techStack: ['Vue 3', 'Pinia', 'Google Maps API', 'Electron 28', 'Vue I18n', 'Spring Boot', 'MyBatis-Plus', 'PostgreSQL'],
    highlights: [
      '基于Google Maps JavaScript API实现地图可视化，支持标准/卫星地图切换、自定义样式、POI过滤',
      '采用OverlayView自定义浮标，支持任意HTML/CSS渲染，实现hover层级控制与tooltip展示',
      '设计多层级数据聚合架构（国家→城市→区域→社区→小区→房源），Zoom级别动态切换数据层',
      '实现视口联动刷新，地图平移/缩放后自动加载当前区域数据，配合防抖(300ms)避免请求风暴',
      '支持多维度筛选：类别、卧室、卫浴、用途、装修、完工状态、价格/面积区间',
      '社区/小区详情页展示均价走势图(3m/6m/1y/3y)，基于ECharts实现数据可视化',
      '支持中英文切换(Vue I18n)，语言状态持久化到localStorage',
      'Google Maps API Key由后端配置接口下发，前端动态加载，避免密钥泄露',
      'Electron端自定义标题栏、窗口控制，外链调用系统浏览器打开'
    ],
    period: '2025.11 - 至今'
  },
  {
    id: 2,
    name: 'OfferHub',
    subtitle: '智能面试辅助平台',
    description: '智能面试辅助平台，支持Electron桌面端和Web端双平台。核心功能包括：实时辅助面试（采集系统+麦克风音频，语音转文字后AI生成建议）、模拟面试（AI出题语音播报，用户作答后AI评分总结）、面试总结报告、错题本管理、个人知识库（自定义项目描述供AI参考）。',
    image: 'images/OfferHub/1.webp',
    images: ['images/OfferHub/1.webp', 'images/OfferHub/2.webp', 'images/OfferHub/3.webp', 'images/OfferHub/4.webp', 'images/OfferHub/5.webp', 'images/OfferHub/6.webp', 'images/OfferHub/7.webp', 'images/OfferHub/8.webp', 'images/OfferHub/9.webp', 'images/OfferHub/10.webp', 'images/OfferHub/11.webp', 'images/OfferHub/12.webp', 'images/OfferHub/13.webp'],
    techStack: ['Vue 3', 'TypeScript', 'Electron 29', 'Element Plus', 'Spring Boot', 'MyBatis-Plus', 'MySQL', 'Redis', 'AI API'],
    highlights: [
      '基于Web Audio API实现系统音频+麦克风双路采集，支持PCM和Blob格式，背压控制防止内存溢出',
      'WebSocket双向传输音频流，实时语音转文字(STT)，端到端延迟≤500ms',
      '采用SSE服务端推送AI建议，实现打字机效果的流式输出',
      'Spring Boot后端集成OpenAI/Claude API，实现智能问答与面试总结生成',
      'Redis缓存用户会话与面试配置，JWT实现无状态身份认证',
      '模拟面试功能：AI生成题目并TTS语音播报，支持低/中/高三档难度',
      '支持屏幕录制、系统音频捕获、音频设备枚举、文件系统访问（Web/Electron双端）',
      'Electron端特有浮动窗口实时显示AI建议，支持窗口置顶、隐藏、拖拽移动',
      '支持内容保护模式(防截图)，保护面试过程隐私',
      '设计面试知识库系统，支持题目搜索、参考答案、标签分类',
      '实现错题本功能：支持普通/压力/行为/技术分类，添加错题、更新状态、导出复习',
      '支持中英文切换(Vue I18n)，语言状态与路由同步',
      '基于Token身份验证，路由级权限控制，Token过期自动跳转登录'
    ],
    period: '2025.08 - 2025.11'
  },
  {
    id: 3,
    name: '道威管理系统',
    subtitle: '企业级全栈管理平台',
    description: '面向小团队的企业管理系统，提供PC端管理后台(Element Plus)和移动端H5/APP(Vant + Capacitor)双端应用，实现订单管理、样品管理、权限控制、实时数据同步等企业级功能，已服务于实际生产环境。',
    image: 'images/daowei/1.webp',
    images: ['images/daowei/1.webp', 'images/daowei/2.webp', 'images/daowei/3.webp', 'images/daowei/4.webp', 'images/daowei/5.webp', 'images/daowei/6.webp', 'images/daowei/7.webp', 'images/daowei/8.webp', 'images/daowei/9.webp'],
    techStack: ['Vue 3', 'Pinia', 'Element Plus', 'Vant', 'Capacitor', 'Spring Boot', 'MyBatis', 'PostgreSQL'],
    highlights: [
      'PC/移动双端同仓开发，共享core核心模块(API封装、认证工具、SSE、心跳等)',
      'Capacitor封装WebView加载线上地址，服务器更新后APP无需重新发版',
      '基于SSE实现多用户实时数据同步，订单/样品操作即时推送，支持断线自动重连',
      'JWT认证 + tokenVersion实现单点登录/踢下线，自定义错误码4011/4012统一处理',
      '基于IP的接口限流，登录接口更严格限制，防止暴力登录和脚本误操作',
      'AOP注解实现操作日志自动记录，含URL/Method/IP/User-Agent、修改前后数据对比',
      '前端心跳检测(1分钟/次)，解析JWT的exp字段提前5分钟预判过期',
      '后端统一代理第三方API(天气/日历/OCR)，前端不持有密钥，降低泄露风险',
      '支持样品图片上传与缩略图生成，Nginx反向代理图片访问路径',
      '集成DDNS动态域名更新服务，后端定时任务自动更新IP映射'
    ],
    period: '2024.09 - 至今'
  },
  {
    id: 4,
    name: 'EpClient',
    subtitle: '输液实时监控系统',
    description: '面向病区/护士站的输液状态实时监控系统，集中展示床位输液过程数据(滴速、状态、电量、输液量进度等)，帮助医护人员提升巡视效率与异常响应速度。',
    image: 'images/EpClient/1.webp',
    images: ['images/EpClient/1.webp', 'images/EpClient/2.webp', 'images/EpClient/3.webp', 'images/EpClient/4.webp', 'images/EpClient/5.webp', 'images/EpClient/6.webp'],
    techStack: ['Electron', 'Vue 3', 'Pinia', 'ECharts', 'WebSocket', 'Spring Boot', 'MyBatis', 'PostgreSQL', 'TimescaleDB'],
    highlights: [
      '基于WebSocket实现双向实时通信，监控数据推送延迟≤100ms，支持断线自动重连',
      '实时展示床位号、输液状态、设定/当前滴速、电量、计时、输液量进度、在线状态',
      '异常突出显示：过快/过慢/告警/离线等状态在UI上快速识别(颜色/标识/优先级)',
      '设计空闲床位视图，区分在线空闲和设备离线，降低主屏噪音',
      '采用TimescaleDB时序数据库，通过Hypertable超表分区优化高频写入与查询',
      '支持历史记录查询，按床位/时间范围检索，ECharts展示滴速趋势曲线',
      '支持床位统计汇总(启动次数、总时长、总容量)，支撑质控分析',
      '终端设备与床位绑定管理，支持设备列表、状态查看、无效设备清理',
      '内置心跳超时策略，设备超过5秒未上报则判定离线，自动结束进行中的输液记录',
      '支持演示模拟器，用于无设备环境的功能演示、数据联调、压力测试',
      '支持白天/夜间/自动主题切换，适配护士站大屏场景'
    ],
    period: '2024.07 - 2024.09'
  }
]

// 校园经历
export const experience: Experience = {
  school: '广东理工学院',
  role: '软件工程专业',
  period: '2022.09 - 2026.06',
  achievements: [
    '连续三年获得国家奖学金（2023、2024、2025），专业成绩名列前茅'
  ]
}

// 荣誉奖项
export const honors: string[] = [
  '2023年 培优奖学金',
  '2023年 国家奖学金',
  '2023年 三好学生',
  '2024年 校能力卓越奖学金',
  '2024年 国家奖学金',
  '2024年 优秀班干部',
  '2024年 三好学生',
  '2025年 国家奖学金',
  '2025年 优秀班干部'
]

// 校园角色
export const campusRoles: CampusRole[] = [
  {
    title: '省级大创项目负责人',
    period: '2023.03 - 至今',
    achievements: [
      '带领团队完成「太阳能智能分类垃圾桶」和「高校贫困甄别系统」两个创新项目，已通过省级验收',
      '多次参加创新创业大赛，最高获广东省互联网+省级二等奖'
    ]
  },
  {
    title: '副班长',
    period: '2022.09 - 至今',
    achievements: [
      '协助辅导员管理班级事务，组织班会、考勤统计',
      '提高班级出勤率至98%',
      '策划班级团建活动，参与率达到85%'
    ]
  },
  {
    title: '轮滑社副社长',
    period: '2023.09 - 至今',
    achievements: [
      '负责社团日常运营与活动策划',
      '组织新生培训、校园表演、联谊赛等活动',
      '累计发展社员100+人'
    ]
  }
]

// 自我评价
export const selfEvaluation: string[] = [
  'Java全栈开发者，熟练掌握Spring Boot后端开发与Vue3前端技术栈，具备独立完成企业级全栈项目的能力。累计完成6个完整项目，涵盖企业管理、实时监控、AI应用、数据可视化等多个领域，具备多项目并行开发经验，部分项目已服务于生产环境。',
  '擅长实时通信技术，精通WebSocket、SSE等长连接方案，在多个项目中实现毫秒级数据同步。后端熟悉JWT鉴权、AOP日志、接口限流等安全实践；前端精通Electron桌面应用、地图可视化等进阶技术。',
  '注重系统设计和代码质量，后端遵循RESTful API规范，前端采用组件化、模块化开发。具备TimescaleDB时序数据库、Redis缓存、AI API集成等技术实践经验。',
  '连续三年国家奖学金获得者，具备优秀的学习能力和自驱力。担任副班长和社团副社长，具备良好的团队管理与组织协调能力。'
]

// 导航配置
export const navItems = [
  { id: 'hero', label: '首页' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '项目' },
  { id: 'education', label: '教育' },
  { id: 'experience', label: '经历' },
  { id: 'about', label: '关于' }
]
