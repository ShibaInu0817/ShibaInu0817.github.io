// All portfolio content lives here. Edit this file to update the site; index.html only lays it out.
// Text is { en, zh }. Text inside project "story" and "rows" may use <b>…</b> for bold.
// Images and videos are paths under images/ and videos/.
export default {
  profile: {
    name: "Tee Tian Xiang",
    role: { en: "Backend Engineer", zh: "后端工程师" },
    bio: [
      { en: "Backend engineer with 7+ years in TypeScript and Node.js, now mostly NestJS, with workflows on Temporal and data in MongoDB.", zh: "后端工程师，拥有 7 年以上 TypeScript 和 Node.js 经验，目前主要使用 NestJS，用 Temporal 编排工作流，数据存放在 MongoDB。" },
      { en: "At tawk.to I built the backend of the omnichannel inbox end to end: the channel-neutral core and five channel integrations. Before tawk.to I led a team of 8–12 developers at Fusionex.", zh: "在 tawk.to，我从头到尾构建了全渠道收件箱的后端：与渠道无关的核心，以及五个渠道集成。加入 tawk.to 之前，我在 Fusionex 带领一支 8–12 人的开发团队。" },
      { en: "Outside work I build browser games and Claude Code skills.", zh: "工作之外，我喜欢做浏览器游戏和 Claude Code 技能。" },
    ],
    contacts: [
      {
        kind: "github",
        label: "GITHUB",
        value: "github.com/ShibaInu0817",
        href: "https://github.com/ShibaInu0817",
      },
      {
        kind: "linkedin",
        label: "LINKEDIN",
        value: "linkedin.com/in/tee-tian-xiang-139a7615a",
        href: "https://www.linkedin.com/in/tee-tian-xiang-139a7615a/",
      },
    ],
    education: { en: "BSc (Hons) Computer Science, University of Lincoln, dual award with KDU Penang University College, 2019. Dean's List.", zh: "计算机科学荣誉学士，林肯大学（与 KDU 槟城大学学院双联学位），2019。院长嘉许名单。" },
    interests: { en: "Distributed Systems · Browser Games · Claude Code Skills", zh: "分布式系统 · 浏览器游戏 · Claude Code 技能" },
    handle: "ShibaInu0817",
    email: "kyoxiang99@gmail.com",
  },
  stats: {
    businesses: 6000000,
    highlights: [
      { n: 7, suf: "+", en: "years of TypeScript and Node.js", zh: "年 TypeScript 与 Node.js 经验" },
      { n: 5, suf: "", en: "channels running on the core I built", zh: "个渠道运行在我构建的核心上" },
      { n: 8, suf: "–12", en: "developers led at Fusionex", zh: "人的开发团队，由我在 Fusionex 带领" },
    ],
  },
  experience: [
    {
      company: "tawk.to",
      when: { en: "2023 – now", zh: "2023 至今" },
      role: { en: "Back End Developer", zh: "后端开发工程师" },
      text: { en: "Built the backend of the omnichannel inbox end to end: the channel-neutral core and five channel integrations. NestJS, Temporal, Kafka, MongoDB.", zh: "从头到尾构建了全渠道收件箱的后端：与渠道无关的核心和五个渠道集成。NestJS、Temporal、Kafka、MongoDB。" },
    },
    {
      company: "Fusionex",
      when: { en: "2021 – 2023", zh: "2021 – 2023" },
      role: { en: "Senior Consultant", zh: "高级顾问" },
      text: { en: "Led a team of 8–12 developers. Reworked the application architecture and moved projects from Node.js to TypeScript.", zh: "带领一支 8–12 人的开发团队。重整应用架构，并把项目从 Node.js 迁移到 TypeScript。" },
    },
    {
      company: "Kerry Logistics",
      when: { en: "2019 – 2021", zh: "2019 – 2021" },
      role: { en: "Junior Software Engineer", zh: "初级软件工程师" },
      text: { en: "Built web apps front to back and their REST APIs in a Scrum team.", zh: "在 Scrum 团队中前后端开发 Web 应用及其 REST API。" },
    },
  ],
  projectCategories: [
    {
      id: "work",
      code: "WRK",
      name: { en: "At tawk.to", zh: "tawk.to 工作" },
      summary: { en: "Case studies from my day job.", zh: "日常工作中的案例。" },
      covers: ["images/projects/channels.svg"],
    },
    {
      id: "games",
      code: "GME",
      name: { en: "Games", zh: "游戏" },
      summary: { en: "Browser and party games.", zh: "浏览器游戏与聚会游戏。" },
      covers: ["images/projects/wf-moth.jpg", "images/projects/cl-turn.jpg", "images/projects/ll-pirates.jpg"],
    },
    {
      id: "tools",
      code: "TLS",
      name: { en: "Tools", zh: "工具" },
      summary: { en: "Claude Code plugins and bots.", zh: "Claude Code 插件与机器人。" },
      covers: ["images/projects/c4-containers.jpg", "images/projects/standup.svg"],
    },
  ],
  projects: [
    {
      code: "WRK-01",
      category: "work",
      chip: { en: "CASE STUDY", zh: "案例" },
      name: { en: "Omnichannel inbox", zh: "全渠道收件箱" },
      summary: { en: "tawk.to's shared inbox: one place to answer every channel.", zh: "tawk.to 的共享收件箱：在一个地方回复所有渠道。" },
      overview: { en: "A support team answers live chat, Messenger, WhatsApp, email, SMS and Telegram from one inbox, with each customer's full history.", zh: "客服团队在同一个收件箱里回复在线聊天、Messenger、WhatsApp、邮件、短信和 Telegram，并能看到每位客户的完整历史。" },
      gallery: [
        {
          image: "images/projects/channels.svg",
          caption: { en: "Five channels on one neutral core", zh: "五个渠道，一个中立核心" },
        },
        {
          image: "images/projects/intake.svg",
          caption: { en: "Webhook intake", zh: "Webhook 接收" },
        },
        {
          image: "images/projects/outbound.svg",
          caption: { en: "Outbound delivery", zh: "消息发送" },
        },
      ],
      facts: [
        {
          label: { en: "ROLE", zh: "角色" },
          value: { en: "Back End Developer", zh: "后端开发工程师" },
        },
        {
          label: { en: "PERIOD", zh: "时间" },
          value: { en: "Nov 2023 – present", zh: "2023 年 11 月至今" },
        },
        {
          label: { en: "CHANNELS", zh: "渠道" },
          value: { en: "5 on my core", zh: "我的核心上有 5 个" },
        },
      ],
      pointsTitle: { en: "DECISIONS", zh: "关键决策" },
      points: [],
      result: { en: "Five channels run on the core I built: Messenger, WhatsApp, Email, SMS and Telegram.", zh: "五个渠道运行在我构建的核心上：Messenger、WhatsApp、邮件、短信和 Telegram。" },
      stack: ["typescript", "nestjs", "kafka", "temporal", "mongodb", "elasticsearch"],
      links: { product: "https://www.tawk.to/products/inbox/" },
      org: "tawk.to",
      layout: "inbox",
      caption: { en: "Messages from every channel land in one inbox; each reply goes back out through the customer's own channel.", zh: "各渠道的消息汇入同一个收件箱；每条回复都会从客户原来的渠道发回去。" },
      rows: [
        {
          k: { en: "What it is", zh: "它是什么" },
          v: { en: "tawk.to's shared inbox: a support team answers every channel in one place.", zh: "tawk.to 的共享收件箱：客服团队在一个地方回复所有渠道。" },
        },
        {
          k: { en: "My part", zh: "我的部分" },
          v: { en: "Part of every step, from requirements and event storming to the architecture. Then I built the backend end to end: the channel-neutral core and five channel integrations.", zh: "参与了从需求、事件风暴到架构设计的每一步，然后从头到尾构建了后端：与渠道无关的核心和五个渠道集成。" },
        },
        {
          k: { en: "Key decisions", zh: "关键设计" },
          v: { en: "A channel-neutral core, Kafka for intake, handlers safe to run twice, and Temporal for sending.", zh: "与渠道无关的核心、用 Kafka 接收、可安全重复执行的处理程序、用 Temporal 发送。" },
        },
      ],
      story: [
        {
          h: { en: "What it is", zh: "它是什么" },
          p: [
            { en: "The omnichannel inbox is <b>tawk.to's shared inbox</b>. A support team answers live chat, Messenger, WhatsApp, email, SMS and Telegram from one place, and every conversation stays under one customer, with its full history.", zh: "全渠道收件箱是 <b>tawk.to 的共享收件箱</b>。客服团队在一个地方回复在线聊天、Messenger、WhatsApp、邮件、短信和 Telegram，每段对话都归在同一位客户名下，保留完整历史。" },
            { en: "Before it, tawk.to had live chat and tickets, but nowhere to hold conversations from outside channels. After gathering requirements with stakeholders and about four months of event storming with the team, <b>I built the backend end to end</b>: the channel-neutral core and the five channel integrations.", zh: "在此之前，tawk.to 只有在线聊天和工单，无法承载来自外部渠道的对话。在与相关方梳理需求、并与团队进行约四个月的事件风暴之后，<b>我从头到尾构建了后端</b>：与渠道无关的核心，以及五个渠道集成。" },
          ],
        },
        {
          h: { en: "Why it was hard", zh: "难在哪里" },
          p: [
            { en: "Every outside channel works differently, and <b>none of them is under our control</b>. Their webhooks can arrive more than once. A reply can fail halfway through sending.", zh: "每个外部渠道的机制都不一样，而且<b>没有一个在我们的控制之下</b>。它们的 Webhook 可能重复送达，回复也可能在发送途中失败。" },
            { en: "The inbox still has to <b>show each message once and get every reply out</b>. A customer doesn't care which channel misbehaved.", zh: "收件箱仍然必须<b>让每条消息只出现一次，并把每条回复送出去</b>。客户不会在意是哪个渠道出了问题。" },
          ],
        },
        {
          h: { en: "How it works", zh: "工作原理" },
          p: [
            { en: "I was part of the design from the first requirement to the final architecture, and I built all of it. To set up the repo for microservices, I studied the popular public Nx + NestJS monorepos and adapted their structure. The design comes down to four ideas.", zh: "我从最初的需求到最终的架构全程参与设计，并实现了全部内容。为了把仓库搭建成微服务结构，我研究了主流的公开 Nx + NestJS 单仓库项目，并借鉴了它们的结构。整个设计可以归结为四个要点。" },
          ],
          ul: [
            { en: "<b>A channel-neutral core.</b> The core never needs to know which channel a message came from. Each channel plugs in through its own adapter, so adding one doesn't change the core.", zh: "<b>与渠道无关的核心。</b>核心不需要知道消息来自哪个渠道。每个渠道通过自己的适配器接入，新增渠道不需要改动核心。" },
            { en: "<b>Kafka for intake.</b> Incoming webhooks go onto Kafka and are acknowledged straight away, then processed, so a slow step further down never keeps the channel waiting.", zh: "<b>用 Kafka 接收。</b>收到的 Webhook 先写入 Kafka 并立即确认，再进行处理，后面的步骤再慢也不会让渠道一直等待。" },
            { en: "<b>Safe to run twice.</b> A webhook that arrives again changes nothing, so a repeat never shows up as a duplicate message.", zh: "<b>可安全重复执行。</b>重复送达的 Webhook 不会产生任何变化，所以不会出现重复消息。" },
            { en: "<b>Temporal for sending.</b> Each reply is sent by a workflow that records every finished step. When something fails, it <b>resumes from the step that failed</b> instead of starting over.", zh: "<b>用 Temporal 发送。</b>每条回复由一个工作流发送，它记录每个已完成的步骤。出错时，它<b>从失败的那一步继续</b>，而不是从头再来。" },
          ],
          imgs: true,
        },
        {
          h: { en: "Result", zh: "成果" },
          p: [
            { en: "<b>Facebook Messenger went live first</b>, then WhatsApp, Email, SMS and Telegram: <b>five channels on the core I built</b>. Live chat, tawk.to's original product, sits beside them in the same inbox.", zh: "<b>Facebook Messenger 最先上线</b>，随后是 WhatsApp、邮件、短信和 Telegram：<b>五个渠道都运行在我构建的核心上</b>。tawk.to 最初的产品在线聊天，也在同一个收件箱里。" },
          ],
          link: "product",
        },
        {
          h: { en: "What went wrong", zh: "踩过的坑" },
          p: [
            { en: "This was <b>our first project on NestJS in a monorepo</b>, built on domain-driven design, event-driven design and clean architecture. Some of those ideas clashed with how NestJS organises code, especially its modules. <b>The code got harder to change</b>: domain logic leaked into framework code, and a small change touched too many files.", zh: "这是<b>我们第一个基于 NestJS 和单仓库的项目</b>，采用了领域驱动设计、事件驱动设计和整洁架构。其中一些理念与 NestJS 组织代码的方式冲突，尤其是它的模块设计。<b>代码变得难改</b>：领域逻辑渗进了框架代码，一个小改动要牵动太多文件。" },
            { en: "We reshaped the Nest modules to follow our <b>bounded contexts</b> instead of the framework's default layout, and made the build enforce the boundaries between them.", zh: "我们把 Nest 模块改为按<b>限界上下文</b>划分，而不是沿用框架默认的结构，并让构建强制执行它们之间的边界。" },
            { en: "Validation was the other clash. We needed the same rules in a legacy JavaScript app and the new NestJS app, partly to read events the old system still sends. NestJS's default, class-validator, works through decorators on TypeScript classes, which the JavaScript side can't share. So we <b>switched to TypeBox</b>: its schemas are plain JSON Schema objects that both apps can use.", zh: "另一个冲突是校验。我们需要在旧的 JavaScript 应用和新的 NestJS 应用里使用同一套规则，部分原因是要读取旧系统仍在发出的事件。NestJS 默认的 class-validator 依赖 TypeScript 类上的装饰器，JavaScript 那边无法共用。所以我们<b>改用了 TypeBox</b>：它的 schema 是普通的 JSON Schema 对象，两个应用都能用。" },
          ],
        },
      ],
    },
    {
      code: "WRK-02",
      category: "work",
      chip: { en: "CASE STUDY", zh: "案例" },
      name: { en: "Channel integration template", zh: "渠道集成模板" },
      summary: { en: "A template that limits what a new channel can change, so review means reading one package.", zh: "一个限制新渠道可改动范围的模板，让审查只需阅读一个包。" },
      overview: { en: "Every new channel used to be a monorepo of several microservices, copied from the last one. Reviewers couldn't tell what was kept and what was changed, so they read everything, and AI-written copies drifted even further. On my own, I built a template that limits what a new channel can change.", zh: "过去每个新渠道都是一个包含多个微服务的单仓库，从上一个渠道复制而来。审查者分不清哪些保留、哪些改动，只能全部重读；AI 写出的副本偏离得更远。我独立构建了一个模板，限制新渠道可以改动的范围。" },
      gallery: [
        {
          image: "images/projects/layers.svg",
          caption: { en: "The shared template and one package per channel", zh: "共享模板，每个渠道一个包" },
        },
      ],
      facts: [
        {
          label: { en: "ROLE", zh: "角色" },
          value: { en: "Back End Developer", zh: "后端开发工程师" },
        },
        {
          label: { en: "YEAR", zh: "年份" },
          value: { en: "2026", zh: "2026" },
        },
        {
          label: { en: "NEW CHANNEL", zh: "新渠道" },
          value: { en: "One package", zh: "一个包" },
        },
        {
          label: { en: "TESTS", zh: "测试" },
          value: { en: "Shared end-to-end suite", zh: "共用端到端测试" },
        },
      ],
      pointsTitle: { en: "HOW THE LINE HOLDS", zh: "如何守住边界" },
      points: [
        { en: "Shared code for everything other than channel logic; a channel fills in a connector and two mappers.", zh: "除渠道逻辑之外的一切都是共享代码；渠道只需填写一个连接器和两个映射器。" },
        { en: "Build-enforced boundaries: the build fails if shared code reaches into a channel.", zh: "由构建强制的边界：共享代码一旦依赖某个渠道，构建就会失败。" },
        { en: "My own skill for creating a channel sets which files the AI agent may create or touch.", zh: "我自己编写的渠道创建技能规定 AI 代理可以创建或修改哪些文件。" },
        { en: "One shared end-to-end suite runs the same scenarios on every channel, so no channel is tested differently.", zh: "同一套端到端测试对每个渠道运行相同的场景，不会有渠道被测得不一样。" },
      ],
      result: { en: "The next channels were built on the template; older channels will move onto it.", zh: "之后的新渠道都基于这个模板构建；旧渠道也将迁移过来。" },
      stack: ["typescript", "nestjs", "nx", "temporal", "kafka", "mongodb", "redis"],
      links: {  },
      org: "tawk.to",
      layout: "template",
      caption: { en: "Before: a copied channel means reviewing every file. With the template: only the channel's own package, checked by the shared tests.", zh: "以前：复制出的渠道意味着要审查每个文件。使用模板后：只需审查渠道自己的包，并由共用测试检查。" },
      rows: [
        {
          k: { en: "Problem", zh: "问题" },
          v: { en: "Each new channel was a monorepo of several microservices, copied from the last one, so <b>every review meant reading everything</b>. AI made the copies drift further.", zh: "每个新渠道都是一个包含多个微服务的单仓库，从上一个渠道复制而来，<b>每次审查都要全部重读</b>；AI 让副本偏离得更远。" },
        },
        {
          k: { en: "What I built", zh: "我做了什么" },
          v: { en: "A template I built on my own. It holds what channels share, <b>limits what a new channel can change</b>, and tests every channel the same way.", zh: "一个由我独立构建的模板：承载各渠道的共同部分，<b>限制新渠道的改动范围</b>，并用同一种方式测试每个渠道。" },
        },
      ],
      story: [
        {
          h: { en: "What it is", zh: "它是什么" },
          p: [
            { en: "Every new channel in tawk.to's omnichannel inbox is built on <b>one shared template</b>. The template holds everything the channels have in common, so a new channel only adds what makes it different. <b>I designed and built it on my own.</b>", zh: "tawk.to 全渠道收件箱的每个新渠道都建立在<b>同一个共享模板</b>之上。模板承载所有渠道的共同部分，新渠道只需补上自己与众不同的地方。<b>它由我独立设计和构建。</b>" },
          ],
        },
        {
          h: { en: "Why it was hard", zh: "难在哪里" },
          p: [
            { en: "Before the template, <b>each new channel was a monorepo of several microservices, copied from the last channel</b> and then changed to fit. That was fast right up until review. A reviewer couldn't tell what was kept, what was changed and what should have been shared, so <b>every new channel meant reading everything again</b>.", zh: "在有模板之前，<b>每个新渠道都是一个包含多个微服务的单仓库，从上一个渠道复制而来</b>，再按需修改。这样写起来很快，直到审查的时候。审查者分不清哪些保留、哪些改动、哪些本该共享，所以<b>每个新渠道都要从头再读一遍</b>。" },
            { en: "<b>AI coding made it worse.</b> Unless the developer holds it back, an agent happily changes far more than the task needs. Each copy drifted a little further from the last, and each review took longer.", zh: "<b>AI 编程让情况更糟。</b>除非开发者严格约束，AI 代理会改动远超任务所需的范围。每个副本都比上一个偏离得更远，审查也一次比一次更久。" },
          ],
        },
        {
          h: { en: "How it works", zh: "工作原理" },
          p: [
            { en: "The idea is simple: <b>limit what a new channel is allowed to change.</b> Four pieces make that hold.", zh: "思路很简单：<b>限制新渠道可以改动的范围。</b>由四个部分来保证这一点。" },
          ],
          ul: [
            { en: "<b>Shared code for everything other than channel logic.</b> Webhook intake, the Temporal send workflow and the typed contracts between them live in the template. A channel fills in three slots: a connector to the channel's API, an inbound mapper and an outbound mapper.", zh: "<b>除渠道逻辑之外的一切都是共享代码。</b>Webhook 接收、Temporal 发送工作流以及它们之间的类型化契约都在模板里。渠道只需填写三个部分：对接渠道 API 的连接器、入站映射器和出站映射器。" },
            { en: "<b>Build-enforced boundaries.</b> The build fails if shared code reaches into a channel, so channel-specific logic can't leak into the template.", zh: "<b>由构建强制的边界。</b>共享代码一旦依赖某个渠道，构建就会失败，渠道专属逻辑无法渗入模板。" },
            { en: "<b>My own skill for creating a channel.</b> It's a Claude Code skill I wrote. The agent follows one procedure that lists the files it may create or touch, so its changes stay inside the channel's own package.", zh: "<b>我自己的渠道创建技能。</b>这是我编写的 Claude Code 技能。AI 代理遵循一份流程，其中列出它可以创建或修改的文件，让改动留在渠道自己的包里。" },
            { en: "<b>A shared end-to-end suite.</b> Every channel fills in the same contracts, so the same scenarios test them all. That stopped a problem the team kept hitting: <b>one developer tested A and B in channel A, while another tested B and C in channel B</b>.", zh: "<b>共用的端到端测试。</b>所有渠道实现相同的契约，因此同一套场景可以测试全部渠道。这解决了团队一再遇到的问题：<b>一位开发者在渠道 A 测试 A 和 B，另一位在渠道 B 测试 B 和 C</b>。" },
          ],
          code: true,
          imgs: true,
        },
        {
          h: { en: "Result", zh: "成果" },
          p: [
            { en: "The next channels were built on the template, and the older ones will move onto it. <b>Reviewing a new channel now means reading its own package.</b> The shared flows were reviewed once, and the same tests run against every channel.", zh: "之后的新渠道都基于模板构建，旧渠道也将迁移过来。<b>现在审查一个新渠道，只需阅读它自己的包。</b>共享流程只审查过一次，同一套测试覆盖每个渠道。" },
            { en: "The skill is the same kind of tool as my draw-c4-skill: <b>written rules that keep an AI agent's work reviewable.</b>", zh: "这个技能和我的 draw-c4-skill 是同一类工具：<b>用书面规则让 AI 代理的产出可以被审查。</b>" },
          ],
        },
        {
          h: { en: "What went wrong", zh: "踩过的坑" },
          p: [
            { en: "<b>The template is never finished.</b> One channel brings features A, B and C; the next one needs D. So the template keeps changing, and it has to.", zh: "<b>模板永远不会完成。</b>一个渠道带来功能 A、B、C，下一个又需要 D。所以模板一直在变，而且必须如此。" },
            { en: "That puts the weight on people. Developers need to <b>pull template changes regularly</b>, and to notice when a change falls outside the channel's own area and really belongs in the template. No build rule can make that call. <b>It takes team practice.</b>", zh: "这让责任落在人身上。开发者需要<b>定期拉取模板的更新</b>，并能察觉某个改动超出了渠道自己的范围、其实应该放进模板。没有任何构建规则能替你做这个判断。<b>它需要团队的习惯。</b>" },
          ],
        },
      ],
    },
    {
      code: "GME-01",
      category: "games",
      chip: { en: "PLAYABLE", zh: "可游玩" },
      name: { en: "Wickfall", zh: "Wickfall" },
      summary: { en: "Every flame goes out. Not yours.", zh: "每一簇火焰都会熄灭，除了你。" },
      overview: { en: "A small candle goes down into the dark, where every flame is going out. Wickfall is a short platformer with keepers to put to rest, three heroes, hidden alcoves and a boss rush.", zh: "一支小小的蜡烛走入黑暗，那里的每一簇火焰都在熄灭。Wickfall 是一款短篇平台跳跃游戏，有需要安息的守护者、三位英雄、隐藏壁龛和 Boss 连战。" },
      gallery: [
        {
          video: "videos/wickfall-trailer.mp4",
          image: "images/projects/wf-title.jpg",
          caption: { en: "Trailer", zh: "预告片" },
          sound: true,
        },
        {
          image: "images/projects/wf-title.jpg",
          caption: { en: "Title card", zh: "标题画面" },
        },
        {
          image: "images/projects/wf-descent.jpg",
          caption: { en: "Going down into the dark", zh: "深入黑暗" },
        },
        {
          image: "images/projects/wf-warden.jpg",
          caption: { en: "Boss: the Tallow Warden", zh: "Boss：The Tallow Warden" },
        },
        {
          image: "images/projects/wf-moth.jpg",
          caption: { en: "Boss: the Cinder Moth", zh: "Boss：The Cinder Moth" },
        },
        {
          image: "images/projects/wf-camp.jpg",
          caption: { en: "Three heroes at camp", zh: "营地里的三位英雄" },
        },
      ],
      facts: [
        {
          label: { en: "GENRE", zh: "类型" },
          value: { en: "Candle-lit platformer", zh: "烛光平台跳跃" },
        },
        {
          label: { en: "RUNS ON", zh: "平台" },
          value: { en: "Desktop and phone browsers", zh: "电脑与手机浏览器" },
        },
        {
          label: { en: "CONTROLS", zh: "操作" },
          value: { en: "Keyboard, gamepad, touch", zh: "键盘、手柄、触屏" },
        },
        {
          label: { en: "HEROES", zh: "英雄" },
          value: { en: "3", zh: "3" },
        },
      ],
      pointsTitle: { en: "HIGHLIGHTS", zh: "亮点" },
      points: [
        { en: "No download, account or server. Progress stays on your device.", zh: "无需下载、账号或服务器，进度保存在你的设备上。" },
        { en: "Installs to a phone home screen as a PWA.", zh: "可作为 PWA 安装到手机主屏幕。" },
        { en: "Trailer and screenshots are recorded by script, and regression tests run in a real browser.", zh: "预告片和截图由脚本录制，回归测试在真实浏览器中运行。" },
      ],
      stack: ["javascript", "canvas", "pwa"],
      links: {
        play: "https://shibainu0817.github.io/wickfall/",
        site: "https://shibainu0817.github.io/wickfall/homepage/",
        github: "https://github.com/ShibaInu0817/wickfall",
      },
      blurb: { en: "No server: a Canvas platformer that installs as a PWA, with regression tests in a real browser.", zh: "无需服务器：一款 Canvas 平台跳跃游戏，可作为 PWA 安装，并在真实浏览器中跑回归测试。" },
    },
    {
      code: "GME-02",
      category: "games",
      chip: { en: "PLAYABLE", zh: "可游玩" },
      name: { en: "Who Killed the Guest?", zh: "谁杀了客人？" },
      summary: { en: "A Chinese New Year murder mystery for phones and a TV.", zh: "为手机和电视打造的新春谋杀推理游戏。" },
      overview: { en: "On the first night of Chinese New Year, a guest nobody recognises comes to dinner, and someone at the table kills him. Players work out who, where and with what from their own phones, while an optional TV shows the board, the turns and the big moments.", zh: "大年初一的晚上，一位无人认识的客人来吃饭，然后被桌上的某个人杀了。玩家在自己的手机上推理凶手、地点和凶器，电视可选，用来显示棋盘、回合和精彩时刻。" },
      gallery: [
        {
          video: "videos/who-killed-teaser.mp4",
          image: "images/projects/cl-turn.jpg",
          caption: { en: "Teaser", zh: "先导预告" },
        },
        {
          image: "images/projects/cl-turn.jpg",
          caption: { en: "The TV: whose turn it is, for the whole room", zh: "电视：全场都能看到轮到谁" },
        },
        {
          image: "images/projects/cl-accuse.jpg",
          caption: { en: "The TV: an accusation and its verdict, never the guess", zh: "电视：指控和裁决，但不显示猜测内容" },
        },
        {
          image: "images/projects/cl-lobby.jpg",
          caption: { en: "Lobby: pick your character, fill with bots", zh: "大厅：选择角色，用机器人补位" },
        },
        {
          image: "images/projects/cl-board.jpg",
          caption: { en: "Your turn: roll and move around the house", zh: "你的回合：掷骰并在房子里移动" },
        },
        {
          image: "images/projects/cl-reveal.jpg",
          caption: { en: "A wrong accusation shows the answer to the accuser only", zh: "错误指控的答案只向指控者显示" },
        },
      ],
      facts: [
        {
          label: { en: "PLAYERS", zh: "玩家" },
          value: { en: "3–6, bots fill seats", zh: "3–6 人，机器人补位" },
        },
        {
          label: { en: "JOIN WITH", zh: "加入方式" },
          value: { en: "4-digit code or QR", zh: "4 位数字码或二维码" },
        },
        {
          label: { en: "SCREENS", zh: "屏幕" },
          value: { en: "Phones, optional TV", zh: "手机，电视可选" },
        },
        {
          label: { en: "BOARDS", zh: "棋盘" },
          value: { en: "Theme packs", zh: "主题包" },
        },
      ],
      pointsTitle: { en: "HIGHLIGHTS", zh: "亮点" },
      points: [
        { en: "The TV never shows anyone's cards, so one screen can serve the whole room.", zh: "电视永远不显示任何人的手牌，一块屏幕就能服务全场。" },
        { en: "Every board is a theme pack: a new mystery is a new folder of art and data, not new code.", zh: "每个棋盘都是主题包：新的谜案只是一个新的美术和数据文件夹，不需要新代码。" },
        { en: "The server handles rooms, the game, bots and turn timers in real time.", zh: "服务器实时处理房间、游戏、机器人和回合计时。" },
      ],
      stack: ["typescript", "react", "socketio"],
      links: {
        play: "https://classic-cluedo-party-game.onrender.com",
        site: "https://classic-cluedo-party-game.onrender.com/homepage/",
        github: "https://github.com/ShibaInu0817/classic-cluedo-party-game",
      },
      blurb: { en: "A real-time server runs rooms, bots and turn timers over Socket.IO. A new mystery is a data pack, not new code.", zh: "实时服务器通过 Socket.IO 处理房间、机器人和回合计时。新的谜案只是一个数据包，不需要新代码。" },
    },
    {
      code: "GME-03",
      category: "games",
      chip: { en: "PLAYABLE", zh: "可游玩" },
      name: { en: "Landlord Island", zh: "Landlord Island" },
      summary: { en: "Buy lots, build, collect rent.", zh: "买地、盖楼、收租。" },
      overview: { en: "A property-trading board game in 3D, played in the browser. Pick a board and a character, buy the lots you land on, finish colour sets, build them up and charge rent until everyone else is broke.", zh: "一款在浏览器中游玩的 3D 地产交易棋盘游戏。选择棋盘和角色，买下踩到的地块，集齐颜色组，盖楼收租，直到其他人破产。" },
      gallery: [
        {
          video: "videos/landlord-island-teaser.mp4",
          image: "images/projects/ll-pirates.jpg",
          caption: { en: "Teaser", zh: "先导预告" },
        },
        {
          image: "images/projects/ll-pirates.jpg",
          caption: { en: "Pirate Cove", zh: "Pirate Cove" },
        },
        {
          image: "images/projects/ll-malaysia.jpg",
          caption: { en: "Jalan Malaysia: Melaka to KLCC, priced in RM", zh: "Jalan Malaysia：从马六甲到 KLCC，以令吉计价" },
        },
        {
          image: "images/projects/ll-ipoh.jpg",
          caption: { en: "怡保美食: the Ipoh food board", zh: "怡保美食棋盘" },
        },
        {
          image: "images/projects/ll-rolled.jpg",
          caption: { en: "Landing on an unclaimed lot: buy it or move along", zh: "踩到无主地块：买下或离开" },
        },
        {
          image: "images/projects/ll-home.jpg",
          caption: { en: "Home screen over a live 3D board", zh: "实时 3D 棋盘上的主页" },
        },
      ],
      facts: [
        {
          label: { en: "PLAYERS", zh: "玩家" },
          value: { en: "2–4, up to 3 bots", zh: "2–4 人，最多 3 个机器人" },
        },
        {
          label: { en: "BOARDS", zh: "棋盘" },
          value: { en: "4", zh: "4" },
        },
        {
          label: { en: "MODES", zh: "模式" },
          value: { en: "One device, bots, online", zh: "同屏、机器人、在线" },
        },
        {
          label: { en: "RUNS ON", zh: "平台" },
          value: { en: "Phone, tablet, computer", zh: "手机、平板、电脑" },
        },
      ],
      pointsTitle: { en: "HIGHLIGHTS", zh: "亮点" },
      points: [
        { en: "Four boards, each with its own lots, prices, cards, pieces and island: 怡保美食, Jalan Malaysia, Hustle City and Pirate Cove.", zh: "四个棋盘，各有自己的地块、价格、卡牌、棋子和中央岛屿：怡保美食、Jalan Malaysia、Hustle City 和 Pirate Cove。" },
        { en: "Online rooms use a short code, and each player joins from their own device.", zh: "在线房间使用短代码，每位玩家用自己的设备加入。" },
        { en: "No build step: plain ES modules, with Three.js and MQTT.js loaded through an import map.", zh: "没有构建步骤：纯 ES 模块，通过 import map 加载 Three.js 和 MQTT.js。" },
      ],
      stack: ["javascript", "threejs", "mqtt"],
      links: {
        play: "https://shibainu0817.github.io/landlord-island/",
        github: "https://github.com/ShibaInu0817/landlord-island",
      },
      blurb: { en: "A 3D board in Three.js. Online rooms sync over MQTT, with each player on their own device.", zh: "用 Three.js 做的 3D 棋盘。在线房间通过 MQTT 同步，每位玩家用自己的设备加入。" },
    },
    {
      code: "TLS-01",
      category: "tools",
      chip: { en: "LIVE DEMO", zh: "在线演示" },
      name: { en: "draw-c4-skill", zh: "draw-c4-skill" },
      summary: { en: "Turns a codebase into an interactive C4 diagram.", zh: "把代码库变成可交互的 C4 架构图。" },
      overview: { en: "Ask for a diagram in plain words and get one self-contained HTML file with drill-down levels, pan and zoom, an inspector and a step-through player for runtime flows.", zh: "用日常语言要一张图，就能得到一个独立的 HTML 文件，支持逐层下钻、平移缩放、检查器，以及逐步播放运行时流程。" },
      gallery: [
        {
          video: "videos/draw-c4-flow.mp4",
          image: "images/projects/c4-containers.jpg",
          caption: { en: "The flow player in action", zh: "流程播放器演示" },
        },
        {
          image: "images/projects/c4-containers.jpg",
          caption: { en: "Example: Immich, diagrammed (unofficial)", zh: "示例：Immich 架构图（非官方）" },
        },
        {
          image: "images/projects/c4-flow.jpg",
          caption: { en: "The flow player, step 8 of the upload path", zh: "流程播放器：上传路径第 8 步" },
        },
        {
          image: "images/projects/c4-components.jpg",
          caption: { en: "Inside the job worker", zh: "任务 worker 的内部组件" },
        },
        {
          image: "images/projects/c4-inspector.jpg",
          caption: { en: "The inspector lists what each part talks to", zh: "检查器列出每个部件的依赖关系" },
        },
      ],
      facts: [
        {
          label: { en: "TYPE", zh: "类型" },
          value: { en: "Claude Code plugin", zh: "Claude Code 插件" },
        },
        {
          label: { en: "OUTPUT", zh: "产出" },
          value: { en: "One HTML file + model.json", zh: "一个 HTML 文件 + model.json" },
        },
      ],
      pointsTitle: { en: "HIGHLIGHTS", zh: "亮点" },
      points: [
        { en: "Built to refuse guesses: every box is meant to trace back to a file, a config entry or a route handler.", zh: "设计上拒绝猜测：每个方框都应能追溯到文件、配置项或路由处理程序。" },
        { en: "Keep model.json and the next update starts from it.", zh: "保留 model.json，下次更新就从它开始。" },
        { en: "The Immich example was built from source and differs from its official architecture page in three places.", zh: "Immich 示例基于源码生成，与其官方架构页面有三处不同。" },
      ],
      stack: ["claude-code", "c4", "html"],
      links: {
        demo: "https://shibainu0817.github.io/draw-c4-skill/examples/immich/architecture.html",
        github: "https://github.com/ShibaInu0817/draw-c4-skill",
        toolSite: "https://shibainu0817.github.io/draw-c4-skill/",
      },
      layout: "tool",
      tag: { en: "Claude Code skill", zh: "Claude Code 技能" },
      what: { en: "A Claude Code skill that turns a codebase into an interactive C4 diagram in one HTML file.", zh: "一个 Claude Code 技能，把代码库变成单个 HTML 文件里的可交互 C4 架构图。" },
      rows: [
        {
          k: { en: "Problem", zh: "问题" },
          v: { en: "With many services and queues, no single picture showed how a request moves through the system.", zh: "服务和队列一多，就没有一张图能说明一个请求如何在系统中流转。" },
        },
        {
          k: { en: "My decision", zh: "我的决策" },
          v: { en: "Read the code, not the docs, so the diagram can't inherit documentation that has gone out of date.", zh: "读代码，而不是读文档，这样图不会继承已经过时的文档。" },
        },
        {
          k: { en: "In use", zh: "实际使用" },
          v: { en: "The generated diagram is what we bring to design discussions at work. I regenerate it when the code changes.", zh: "在工作中，我们直接拿生成的图做设计讨论；代码有变更时我再重新生成。" },
        },
        {
          k: { en: "How it was built", zh: "构建方式" },
          v: { en: "Built with Claude Code inside guardrails I designed: the architecture, the rules and the checks. I reviewed every change.", zh: "在我设计的约束内用 Claude Code 构建：架构、规则和检查都由我制定，每一处改动由我审查。" },
        },
      ],
      resultLine: { en: "Run on Immich, an open-source project, the diagram disagreed with Immich's own architecture page in three places.", zh: "在开源项目 Immich 上运行后，生成的图与 Immich 官方架构页有三处不一致。" },
      story: [
        {
          h: { en: "What it is", zh: "它是什么" },
          p: [
            { en: "draw-c4 is a Claude Code skill I built. You type /draw-c4 inside a repository, and it reads the source code (routes, config files, queues) and draws the system's architecture as a single web page.", zh: "draw-c4 是我做的一个 Claude Code 技能。在代码仓库里输入 /draw-c4，它会读取源代码（路由、配置文件、队列），把系统架构画成一个网页。" },
            { en: "The page is a C4 diagram, a common way to draw software at zoom levels: from the whole system down to the parts inside one service. You click into each level, and press play to follow one request step by step through the code that handles it.", zh: "这个网页是一张 C4 架构图。C4 是常见的软件架构画法，按层级缩放：从整个系统，一直到某个服务内部的组件。你可以逐层点进去，也可以按播放，一步步跟着一个请求走过处理它的代码。" },
          ],
        },
        {
          h: { en: "Why I built it", zh: "为什么做它" },
          p: [
            { en: "In a system with many services and queues, no single picture showed how a request actually moves through it, and hand-drawn diagrams go out of date. So I set one rule: draw only what the code proves. If it can't trace a connection to a file, a config entry or a route, it leaves it out.", zh: "服务和队列一多，就没有一张图能说明请求到底如何流转，手画的图也会过时。所以我定了一条规则：只画代码能证明的东西。追溯不到具体文件、配置项或路由的连接，一律不画。" },
          ],
        },
        {
          h: { en: "Tested on a real project", zh: "在真实项目上验证" },
          p: [
            { en: "To test it on code I didn't write, I ran it on Immich, an open-source photo server. That diagram is the live demo. It mapped 18 background job queues and 4 request flows you can play step by step, such as backing up a photo.", zh: "为了在不是我写的代码上验证，我用它跑了开源照片服务器 Immich。那张图就是在线演示。它梳理出 18 个后台任务队列，以及 4 条可以逐步播放的请求流程，比如备份一张照片。" },
            { en: "It also caught three places where Immich's own architecture page no longer matches the code:", zh: "它还发现了 Immich 官方架构页与代码不一致的三处：" },
          ],
          ul: [
            { en: "The docs show background jobs in a separate container. In the code, they run from the same image as the API.", zh: "文档里后台任务在独立容器中运行；代码里它们和 API 用的是同一个镜像。" },
            { en: "The docs show a separate web server. In the code, the API serves the web app itself.", zh: "文档里有独立的 Web 服务器；代码里网页由 API 直接提供。" },
            { en: "Redis does two jobs, the job queues and passing websocket messages between servers.", zh: "Redis 身兼两职：任务队列，以及在服务器之间传递 WebSocket 消息。" },
          ],
        },
        {
          h: { en: "How I use it at work", zh: "我在工作中怎么用" },
          p: [
            { en: "We bring the generated diagram to design discussions. When someone changes the code, I regenerate it so the picture stays current.", zh: "我们拿生成的图来做设计讨论。有人改了代码，我就重新生成，让图保持最新。" },
          ],
        },
        {
          h: { en: "How it was built", zh: "它是怎么做出来的" },
          p: [
            { en: "I built it with Claude Code, inside guardrails I designed: I set the architecture, the rules the agent works within and the checks it must pass, and I reviewed every change. Its built-in check catches broken references and overlapping boxes, but it can't tell whether a claim is wrong, so each new diagram still needs a human review.", zh: "我在自己设计的约束内用 Claude Code 构建了它：架构、AI 代理遵循的规则以及必须通过的检查都由我制定，每一处改动都由我审查。内置检查能发现失效的引用和重叠的方框，但判断不了结论是否正确，所以每张新图仍需要人工审阅。" },
          ],
        },
      ],
      film: {
        video: "videos/draw-c4-film.mp4",
        image: "images/projects/c4-film-poster.jpg",
        caption: { en: "The 47-second film: from a repository to a diagram you can walk through.", zh: "47 秒短片：从一个代码仓库，到一张可以逐步浏览的架构图。" },
      },
    },
  ],
  skills: [
    {
      group: "LANGUAGE & BACKEND",
      items: [
        {
          id: "typescript",
          name: "TypeScript",
          level: 3,
          years: { en: "7+ yrs", zh: "7 年以上" },
          note: { en: "My main language, including the omnichannel inbox at tawk.to.", zh: "我的主要语言，包括 tawk.to 的全渠道收件箱。" },
          logo: "images/logos/typescript.svg",
        },
        {
          id: "nodejs",
          name: "Node.js",
          level: 3,
          years: { en: "7+ yrs", zh: "7 年以上" },
          note: { en: "The runtime behind my backend work.", zh: "我后端工作的运行环境。" },
          logo: "images/logos/nodejs.svg",
        },
        {
          id: "nestjs",
          name: "NestJS",
          level: 3,
          note: { en: "What I mostly build backends with now, including the omnichannel inbox.", zh: "目前主要使用的后端框架，包括全渠道收件箱。" },
          logo: "images/logos/nestjs.svg",
        },
        {
          id: "nx",
          name: "Nx",
          level: 3,
          note: { en: "TODO: where you used Nx.", zh: "TODO：在哪里用过 Nx。" },
        },
      ],
    },
    {
      group: "EVENTS & WORKFLOWS",
      items: [
        {
          id: "kafka",
          name: "Kafka",
          level: 3,
          note: { en: "Webhook intake for the omnichannel inbox, with events keyed per customer to keep them in order.", zh: "用于全渠道收件箱的 Webhook 接收，事件按客户分区以保持顺序。" },
          logo: "images/logos/kafka.svg",
        },
        {
          id: "temporal",
          name: "Temporal",
          level: 3,
          note: { en: "One workflow per conversation sends replies in order, with retries.", zh: "每个会话一个工作流，按顺序发送回复并支持重试。" },
          logo: "images/logos/temporal.svg",
        },
      ],
    },
    {
      group: "DATA",
      items: [
        {
          id: "mongodb",
          name: "MongoDB",
          level: 3,
          note: { en: "Where my backend work at tawk.to keeps its data.", zh: "我在 tawk.to 后端工作的数据存储。" },
          logo: "images/logos/mongodb.svg",
        },
        {
          id: "elasticsearch",
          name: "Elasticsearch",
          level: 3,
          note: { en: "TODO: what you used Elasticsearch for.", zh: "TODO：用 Elasticsearch 做过什么。" },
        },
        {
          id: "redis",
          name: "Redis",
          level: 3,
          note: { en: "TODO: what you used Redis for.", zh: "TODO：用 Redis 做过什么。" },
        },
      ],
    },
    {
      group: "SHIP",
      items: [
        {
          id: "docker",
          name: "Docker",
          level: 3,
          note: { en: "TODO: where you used Docker.", zh: "TODO：在哪里用过 Docker。" },
        },
        {
          id: "github-actions",
          name: "GitHub Actions",
          level: 3,
          note: { en: "TODO: where you used GitHub Actions.", zh: "TODO：在哪里用过 GitHub Actions。" },
        },
      ],
    },
    {
      group: "PRACTICES",
      items: [
        {
          id: "event-driven",
          name: "Event-driven design",
          level: 3,
          note: { en: "Webhooks go onto Kafka and are acknowledged at once, and every handler is safe to run twice.", zh: "Webhook 进入 Kafka 后立即确认，每个处理程序都可以安全地重复执行。" },
        },
        {
          id: "clean-architecture",
          name: "Clean architecture",
          level: 3,
          note: { en: "Channel-specific code stays in its own package, outside a shared core.", zh: "渠道专属代码放在独立的包中，与共享核心分离。" },
        },
        {
          id: "ddd",
          name: "Domain-driven design",
          level: 3,
          note: { en: "About four months of event storming before the omnichannel inbox was built.", zh: "在构建全渠道收件箱之前，进行了约四个月的事件风暴。" },
        },
        {
          id: "c4",
          name: "C4 model",
          level: 3,
          note: { en: "Designed the omnichannel inbox with it, and built draw-c4-skill around it.", zh: "用它设计全渠道收件箱，并围绕它开发了 draw-c4-skill。" },
        },
      ],
    },
    {
      group: "SIDE PROJECTS",
      items: [
        {
          id: "javascript",
          name: "JavaScript",
          level: 3,
          note: { en: "Wickfall and Landlord Island.", zh: "Wickfall 和 Landlord Island。" },
        },
        {
          id: "react",
          name: "React",
          level: 3,
          note: { en: "Who Killed the Guest?", zh: "《谁杀了客人？》" },
        },
        {
          id: "socketio",
          name: "Socket.IO",
          level: 3,
          note: { en: "Real-time play in Who Killed the Guest?", zh: "《谁杀了客人？》的实时游戏通信。" },
        },
        {
          id: "canvas",
          name: "Canvas",
          level: 3,
          note: { en: "Wickfall.", zh: "Wickfall。" },
        },
        {
          id: "pwa",
          name: "PWA",
          level: 3,
          note: { en: "Wickfall, playable on desktop or phone.", zh: "Wickfall，可在电脑或手机上游玩。" },
        },
        {
          id: "claude-code",
          name: "Claude Code",
          level: 3,
          note: { en: "draw-c4-skill and other Claude Code skills.", zh: "draw-c4-skill 以及其他 Claude Code 技能。" },
        },
        {
          id: "threejs",
          name: "Three.js",
          level: 3,
          note: { en: "The 3D board in Landlord Island.", zh: "Landlord Island 的 3D 棋盘。" },
        },
        {
          id: "mqtt",
          name: "MQTT.js",
          level: 3,
          note: { en: "Online rooms in Landlord Island.", zh: "Landlord Island 的在线房间。" },
        },
        {
          id: "html",
          name: "HTML",
          level: 3,
          note: { en: "The self-contained diagrams draw-c4-skill produces.", zh: "draw-c4-skill 生成的独立图表文件。" },
        },
      ],
    },
  ],
  dailyStack: ["typescript", "nodejs", "nestjs", "kafka", "temporal", "mongodb"],
  text: {
    about: { en: "About", zh: "关于" },
    work: { en: "Work", zh: "作品" },
    games: { en: "Games", zh: "游戏" },
    tools: { en: "Tools", zh: "工具" },
    skills: { en: "Skills", zh: "技能" },
    contact: { en: "Contact", zh: "联系" },
    intro: { en: "Intro", zh: "首页" },
    at: { en: "Backend Engineer at tawk.to", zh: "tawk.to 后端工程师" },
    hi: { en: "Hi, I'm {name}.", zh: "你好，我是 {name}。" },
    h1: { en: "I built the event-driven backend of the omnichannel inbox at tawk.to, ¶ a platform trusted by over § businesses.", zh: "我构建了 tawk.to 全渠道收件箱的事件驱动后端， ¶ 这是一个超过 § 家企业信赖的平台。" },
    see: { en: "View my work", zh: "查看作品" },
    email: { en: "Email", zh: "邮件" },
    scroll: { en: "SCROLL", zh: "向下滚动" },
    aboutH: { en: "Backend engineer with 7+ years in TypeScript and Node.js.", zh: "后端工程师，7 年以上 TypeScript 与 Node.js 经验。" },
    xp: { en: "Experience", zh: "经历" },
    aboutShort: { en: "A bit about me.", zh: "关于我。" },
    aboutAi: { en: "I use Claude Code daily, inside guardrails I design: clear boundaries, every change reviewed, and tooling that keeps the architecture visible.", zh: "我每天使用 Claude Code，并在自己设计的约束内工作：清晰的边界、每一处改动都经过审查，以及让架构保持可见的工具。" },
    toolSite: { en: "Project site", zh: "项目网站" },
    codeCap: { en: "Not real code: only the shape of what a new channel fills in", zh: "并非真实代码：仅示意新渠道需要填写的部分" },
    seeProduct: { en: "See the product", zh: "查看产品" },
    summaryH: { en: "Summary", zh: "概要" },
    openDemo: { en: "Open the Immich demo", zh: "打开 Immich 演示" },
    facets: [
      { en: "Stack", zh: "技术栈" },
      { en: "Projects", zh: "项目" },
      { en: "Practices", zh: "实践" },
      { en: "Interests", zh: "兴趣" },
    ],
    pick: { en: "Pick a tile to see where I used it.", zh: "点击方块，查看用在哪里。" },
    inGroup: { en: "My day-to-day stack", zh: "我的日常技术栈" },
    openP: { en: "Open project", zh: "打开项目" },
    now: { en: "Now", zh: "现在" },
    before: { en: "Before", zh: "此前" },
    caseStudy: { en: "Full case study", zh: "完整案例" },
    details: { en: "Details", zh: "详情" },
    toTop: { en: "Back to top", zh: "回到顶部" },
    hobby: { en: "Hobby", zh: "业余" },
    hobbyEy: { en: "Outside work · hobby projects", zh: "工作之外 · 业余项目" },
    hobbyH: { en: "After hours, I build games.", zh: "下班后，我做游戏。" },
    hobbyP: { en: "Not part of my day job. Small games I design, build and ship on my own, playable in the browser right now.", zh: "与日常工作无关。这些是我独立设计、开发并发布的小游戏，现在就能在浏览器里玩。" },
    gamesH: { en: "Games I built. Play them right now.", zh: "我做的游戏，现在就能玩。" },
    toolsH: { en: "Tools for other developers.", zh: "为其他开发者做的工具。" },
    skillsH: { en: "What I work with.", zh: "我使用的技术。" },
    skillsP: { en: "The codes open the project each skill was used in.", zh: "点击编号可打开用到该技能的项目。" },
    endH: { en: "Let's |talk.|", zh: "聊聊 |吧。|" },
    endP: { en: "I'm reachable on LinkedIn, and my code is on GitHub.", zh: "可以通过 LinkedIn 联系我，代码都在 GitHub 上。" },
    // the Shiba's speech bubble on Contact: shibaHi at rest, the others while a button is hovered
    shibaHi: { en: "Leave a hi. I'll wag back.", zh: "打个招呼吧，我会摇尾巴回应。" },
    shiba_github: { en: "My code lives here.", zh: "我的代码都在这里。" },
    shiba_linkedin: { en: "DMs open.", zh: "私信开着。" },
    shiba_email: { en: "Fastest way to reach me.", zh: "最快联系到我的方式。" },
    play: { en: "▶ Play now", zh: "▶ 立即游玩" },
    demo: { en: "▶ Live demo", zh: "▶ 在线演示" },
    site: { en: "Homepage", zh: "主页" },
    github: { en: "GitHub", zh: "GitHub" },
    ovw: { en: "Overview", zh: "简介" },
    result: { en: "Result", zh: "成果" },
    stack: { en: "Tech stack", zh: "技术栈" },
    frame: { en: "Frame", zh: "画面" },
    close: { en: "Close", zh: "关闭" },
    prev: { en: "Previous", zh: "上一个" },
    next: { en: "Next", zh: "下一个" },
    prevF: { en: "Previous frame", zh: "上一画面" },
    nextF: { en: "Next frame", zh: "下一画面" },
    eduH: { en: "Education", zh: "教育背景" },
  },
};
