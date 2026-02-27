<script setup lang="ts">
import { onMounted } from 'vue'

// 前端纸质简历 - 硬编码数据，不依赖resume.ts
onMounted(() => {
  document.title = '吕金鹏 | 前端开发工程师'
})
</script>

<template>
  <div class="print-page">
    <!-- 下载按钮（仅屏幕显示，打印时隐藏） -->
    <a href="/resume-frontend.pdf" download="吕金鹏-前端开发工程师.pdf" class="download-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      下载PDF简历
    </a>
    <div class="resume">
      <!-- 头部区域 -->
      <header class="header">
        <h1 class="header__name">吕金鹏</h1>
        <p class="header__title">求职意向：前端开发工程师</p>
        <div class="header__contact">
          <span>15338859106（微信同号）</span>
          <span class="header__dot">·</span>
          <span>1813197353@qq.com</span>
          <span class="header__dot">·</span>
          <span>@在线简历：lvkingroc.icu</span>
        </div>
      </header>

      <!-- 教育背景 -->
      <section class="section">
        <h2 class="section__title">教育背景</h2>
        <div class="section__content">
          <div class="row-header">
            <span class="row-header__period">2022.09 - 2026.06</span>
            <span class="row-header__main">广东理工学院</span>
            <span class="row-header__sub">软件工程 | 全日制本科学历</span>
          </div>
          <ul class="list">
            <li><strong>主修课程：</strong>Web-Vue开发、Spring Boot后端开发、数据库原理、数据结构、Java编程</li>
            <li><strong>辅修课程：</strong>Python编程、Python神经网络与深度学习、Linux</li>
            <li><strong>荣誉奖项：</strong>国家奖学金（2023、2024、2025连续三年）、三好学生、优秀班干部、培优奖学金、校能力卓越奖学金</li>
          </ul>
        </div>
      </section>

      <!-- 技术技能 -->
      <section class="section">
        <h2 class="section__title">技术技能</h2>
        <div class="section__content">
          <ul class="list">
            <li><strong>前端核心：</strong>Vue3（Composition API + Pinia）、TypeScript、HTML5/CSS3/JavaScript ES6+</li>
            <li><strong>后端基础：</strong>Java + Spring Boot + MyBatis、MySQL、PostgreSQL、TimescaleDB</li>
            <li><strong>UI组件库：</strong>Element Plus（PC端）、Vant（移动端）、ECharts数据可视化、Google Maps API</li>
            <li><strong>跨端开发：</strong>Electron桌面应用、Capacitor混合APP、Vite构建工具</li>
            <li><strong>实时通信：</strong>WebSocket双向通信、SSE服务端推送、Web Audio API音频处理</li>
          </ul>
        </div>
      </section>

      <!-- 项目经历 -->
      <section class="section">
        <h2 class="section__title">项目经历</h2>
        <div class="section__content">
          <!-- REEM Insight -->
          <div class="project">
            <div class="row-header">
              <span class="row-header__period">2025.11 - 2025.12</span>
              <span class="row-header__main">REEM Insight</span>
              <span class="row-header__sub">房地产数据可视化平台</span>
            </div>
            <p class="project__desc">面向阿联酋阿布扎比Al Reem Island区域的房地产数据可视化与分析平台，提供地图交互+房源筛选+多层级聚合统计+详情与走势的一体化查询体验，同时支持Web端与Electron桌面端。</p>
            <p class="project__tech"><strong>技术栈：</strong>Vue 3、Pinia、Google Maps API、Electron 28、Vue I18n</p>
            <ul class="list">
              <li>基于Google Maps JavaScript API实现地图可视化，支持标准/卫星地图切换、自定义样式、POI过滤</li>
              <li>采用OverlayView自定义浮标，支持任意HTML/CSS渲染，实现hover层级控制与tooltip展示</li>
              <li>设计多层级数据聚合架构（国家→城市→区域→社区→小区→房源），Zoom级别动态切换数据层</li>
            </ul>
          </div>

          <!-- OfferHub -->
          <div class="project">
            <div class="row-header">
              <span class="row-header__period">2025.08 - 2025.11</span>
              <span class="row-header__main">OfferHub</span>
              <span class="row-header__sub">智能面试辅助平台</span>
            </div>
            <p class="project__desc">智能面试辅助平台，支持Electron和Web双平台。核心功能：实时辅助面试、模拟面试、面试总结报告、错题本管理、个人知识库（自定义项目描述供AI参考）。</p>
            <p class="project__tech"><strong>技术栈：</strong>Vue 3、TypeScript、Electron 29、Element Plus、WebSocket、SSE、Web Audio API</p>
            <ul class="list">
              <li>基于Web Audio API实现系统音频+麦克风双路采集，WebSocket双向传输音频流</li>
              <li>实时语音转文字(STT)，端到端延迟≤500ms，SSE流式推送AI建议</li>
              <li>Electron端特有浮动窗口实时显示AI建议，支持窗口置顶、隐藏、拖拽移动</li>
            </ul>
          </div>

          <!-- 道威管理系统 -->
          <div class="project">
            <div class="row-header">
              <span class="row-header__period">2024.09 - 2025.12</span>
              <span class="row-header__main">道威管理系统</span>
              <span class="row-header__sub">企业级全栈管理平台</span>
            </div>
            <p class="project__desc">面向小团队的企业管理系统，提供PC端管理后台(Element Plus)和移动端H5/APP(Vant + Capacitor)双端应用，实现订单管理、样品管理、权限控制、实时数据同步等企业级功能，已服务于实际生产环境。</p>
            <p class="project__tech"><strong>技术栈：</strong>Vue 3、Pinia、Element Plus、Vant、Capacitor</p>
            <ul class="list">
              <li>PC/移动双端同仓开发，共享core核心模块(API封装、认证工具、SSE、心跳等)</li>
              <li>Capacitor封装WebView加载线上地址，服务器更新后APP无需重新发版</li>
              <li>基于SSE实现多用户实时数据同步，订单/样品操作即时推送，支持断线自动重连</li>
            </ul>
          </div>

          <!-- EpClient -->
          <div class="project project--page-break">
            <div class="row-header">
              <span class="row-header__period">2024.07 - 2024.09</span>
              <span class="row-header__main">EpClient</span>
              <span class="row-header__sub">输液实时监控系统</span>
            </div>
            <p class="project__desc">面向病区/护士站的输液状态实时监控系统，集中展示床位输液过程数据(滴速、状态、电量、输液量进度等)，帮助医护人员提升巡视效率与异常响应速度。</p>
            <p class="project__tech"><strong>技术栈：</strong>Electron、Vue 3、Pinia、ECharts、WebSocket</p>
            <ul class="list">
              <li>基于WebSocket实现双向实时通信，监控数据推送延迟≤100ms，支持断线自动重连</li>
              <li>实时展示床位号、输液状态、设定/当前滴速、电量、计时、输液量进度、在线状态</li>
              <li>异常突出显示：过快/过慢/告警/离线等状态在UI上快速识别(颜色/标识/优先级)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 校园经历 -->
      <section class="section">
        <h2 class="section__title">校园经历</h2>
        <div class="section__content">
          <div class="row-header">
            <span class="row-header__period">2022.09 - 至今</span>
            <span class="row-header__main">广东理工学院</span>
            <span class="row-header__sub">副班长 / 项目团队负责人 / 轮滑社副社长</span>
          </div>
          <ul class="list">
            <li><strong>班级管理：</strong>协助辅导员管理班级事务，组织班会、考勤统计，提高班级出勤率至98%，策划班级团建活动参与率达85%</li>
            <li><strong>省级大创：</strong>带领团队完成「太阳能智能分类垃圾桶」和「高校贫困甄别系统」两个创新项目，已通过省级验收</li>
            <li><strong>竞赛荣誉：</strong>多次参加创新创业大赛，最高获广东省互联网+省级二等奖、挑战杯创新创业校级二等奖</li>
            <li><strong>社团运营：</strong>负责轮滑社日常运营与活动策划，组织新生培训、校园表演、联谊赛等活动，累计发展社员100+人</li>
          </ul>
        </div>
      </section>

      <!-- 自我评价 -->
      <section class="section section--last">
        <h2 class="section__title">自我评价</h2>
        <div class="section__content">
          <p class="summary">Java全栈开发者，熟练掌握Spring Boot后端开发与Vue3前端技术栈，具备独立完成企业级全栈项目的能力。累计完成5个完整项目，涵盖企业管理、实时监控、AI应用、数据可视化等多个领域，具备多项目并行开发经验，部分项目已服务于生产环境。</p>
          <p class="summary">擅长实时通信技术，精通WebSocket、SSE等长连接方案，在多个项目中实现毫秒级数据同步。后端熟悉JWT鉴权、AOP日志、接口限流等安全实践；前端精通Electron桌面应用、地图可视化等进阶技术。</p>
          <p class="summary">注重系统设计和代码质量，后端遵循RESTful API规范，前端采用组件化、模块化开发。具备TimescaleDB时序数据库、Redis缓存、AI API集成等技术实践经验。</p>
          <p class="summary">连续三年国家奖学金获得者，具备优秀的学习能力和自驱力。担任副班长和社团副社长，具备良好的团队管理与组织协调能力。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// A4尺寸打印样式 - 参考专业简历风格
.print-page {
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  background: #fff;
  color: #333;
  font-family: 'Microsoft YaHei', 'PingFang SC', -apple-system, sans-serif;
  font-size: 11pt;
  line-height: 1.6;
  box-sizing: border-box;
}

.resume {
  padding: 12mm 15mm;
}

// 头部
.header {
  text-align: center;
  margin-bottom: 4mm;
  padding-bottom: 3mm;
  border-bottom: 2px solid #1a365d;
  
  &__name {
    font-size: 28pt;
    font-weight: 700;
    color: #1a365d;
    margin: 0;
    letter-spacing: 5px;
  }
  
  &__title {
    font-size: 12pt;
    color: #2563eb;
    margin: 1.5mm 0;
    font-weight: 500;
  }
  
  &__contact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2mm;
    font-size: 10pt;
    color: #475569;
    margin-bottom: 1mm;
  }
  
  &__dot {
    color: #94a3b8;
  }
  
}

// 区块 - 覆盖全局样式
.section {
  margin-bottom: 3mm;
  padding: 0 !important;
  
  &__title {
    font-size: 12pt;
    font-weight: 700;
    color: #1a365d;
    margin: 0 0 1.5mm;
    padding: 1mm 0 1mm 3mm;
    background: #e2e8f0;
    border-left: 3px solid #1a365d;
  }
  
  &__content {
    padding: 1mm 0 0 0;
  }
  
  &--last {
    margin-bottom: 0;
  }
}

// 行头部（通用）
.row-header {
  display: flex;
  align-items: baseline;
  gap: 3mm;
  margin-bottom: 1mm;
  
  &__period {
    font-size: 9.5pt;
    color: #64748b;
    font-weight: 500;
    min-width: 25mm;
  }
  
  &__main {
    font-size: 10.5pt;
    font-weight: 600;
    color: #1a365d;
  }
  
  &__sub {
    font-size: 9.5pt;
    color: #475569;
    margin-left: auto;
  }
}

// 校园经历
.campus {
  margin-bottom: 2mm;
  
  &:last-child {
    margin-bottom: 0;
  }
}

// 通用列表
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    position: relative;
    padding-left: 3mm;
    font-size: 10.5pt;
    color: #374151;
    margin-bottom: 0.5mm;
    line-height: 1.5;
    text-align: justify;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #1a365d;
    }
    
    strong {
      color: #1a365d;
    }
  }
}

// 项目
.project {
  margin-bottom: 2.5mm;
  padding-bottom: 2mm;
  border-bottom: 1px dashed #d1d5db;
  
  &--page-break {
    @media print {
      page-break-before: always;
      padding-top: 12mm;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  
  &__desc {
    font-size: 10pt;
    color: #374151;
    margin: 0 0 0.5mm;
    line-height: 1.5;
    text-align: justify;
  }
  
  &__tech {
    font-size: 9.5pt;
    color: #475569;
    margin: 0 0 0.5mm;
    line-height: 1.4;
    
    strong {
      color: #1a365d;
    }
  }
}

// 自我评价
.summary {
  font-size: 10.5pt;
  color: #374151;
  margin: 0 0 1.5mm;
  line-height: 1.6;
  text-align: justify;
  text-indent: 2em;
  
  &:last-child {
    margin-bottom: 0;
  }
}

// 打印样式
@media print {
  @page {
    size: A4;
    margin: 0;
  }
  
  .print-page {
    width: 210mm;
    height: 297mm;
    page-break-after: always;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}

// 屏幕预览时添加阴影
@media screen {
  .print-page {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin: 20px auto;
  }
}

// 下载按钮 - 悬浮在简历右侧
.download-btn {
  position: fixed;
  top: 5%;
  left: calc(50% + 105mm + 20px);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #1a365d, #2563eb);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  z-index: 100;
  white-space: nowrap;
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  &:hover {
    transform: translateY(-50%) translateX(2px);
    box-shadow: 0 6px 16px rgba(26, 54, 93, 0.4);
  }
  
  @media print {
    display: none;
  }
}
</style>
