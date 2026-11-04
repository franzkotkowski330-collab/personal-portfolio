'use strict';

const projectNotes = {
  vivic: {
    kicker: '01 / AI PRODUCT', title: 'Vivic', subtitle: '把 AI 长文本，变成可交互的卡片式工作空间。',
    role: '产品功能设计、UI/UX、主要前端开发', time: '2026.09 至今', type: 'AI 产品 / 团队项目', image: 'assets/vivic.jpg', alt: 'Vivic 卡片式工作空间实际界面',
    sections: [
      ['问题从哪里来', '<p>日常生活与办公中，副屏常常没有被充分使用，AI 的长文本回答也难以直观组织。这个项目尝试让主屏交互与副屏展示分工，把回复转化成能够查看、编辑和关联提问的卡片。</p>'],
      ['我的工作', '<ul><li><strong>需求与功能设计：</strong>把屏幕利用和信息整理需求转化为卡片化回复、多 Space 分类管理等功能方案。</li><li><strong>体验与前端实现：</strong>负责核心 UI/UX、新手引导和主要前端落地，让方案可以直接被体验与验证。</li><li><strong>场景验证：</strong>结合规则、决策模型与大模型的分层机制，开展 100 余条场景化测试，检验意图识别与卡片生成效果。</li></ul>'],
      ['设计中的取舍', '<p>卡片需要根据用户的实际意图选择合适的表达形式。设计重点在于信息如何呈现、如何修改，以及用户能否围绕已有内容继续提问。独立展示窗口则为副屏提供持续可见的信息空间。</p>'],
    ],
    outcome: '项目成果：北美高校联盟黑客松三等奖；苏客松 AI+生活赛道第四名。',
    href: 'https://edsionc.top/vivic/', cta: '访问 Vivic 官网', note: '官网提供产品介绍与体验入口，具体开放状态以产品页面为准。',
  },
  makeagain: {
    kicker: '02 / AI COMPANIONSHIP', title: 'Make Again', subtitle: 'AI 情绪陪伴微信小程序 · 陪伴、来信与回忆留存',
    role: '产品方案设计、用户旅程、前端开发', time: '2026.06 至今', type: 'AI 产品 / 微信小程序',
    screens: [
      { src: 'assets/makeagain-dialogue.png', label: '深聊后的来信', alt: 'AI 陪伴者 Wakey 在第一次深聊后递来一封信', caption: '用一封来信承接第一次深聊，把倾诉延续成陪伴。' },
      { src: 'assets/makeagain-profile.png', label: '关系画像', alt: '关系画像与回忆记录，支持收进时间看板', caption: '通过引导式对话了解关系背景，把被认真听见的内容沉淀为一份记录。' },
      { src: 'assets/makeagain-letter.png', label: '匿名信件', alt: '写一封匿名信的编辑界面', caption: '保留表达的空间，也让经历相似的人有机会收到来自他人的回信。' },
      { src: 'assets/makeagain-archive.png', label: '记忆收藏', alt: '纪念书、留白日记与记忆玻璃瓶的设计预览', caption: '纪念书、留白日记与记忆玻璃瓶的设计预览，探索不同形式的记忆保存。' },
      { src: 'assets/makeagain-membership.png', label: '会员方案', alt: 'Make Again 小程序按月或按季订阅的会员方案界面', caption: '按月与按季的陪伴方案，在产品设计中为结束一段旅程保留空间。' },
    ],
    sections: [
      ['用户与问题', '<p>面对分手、亲人离世或宠物离世，用户可能同时需要情绪出口、记忆保存，以及恢复日常节奏的支持。Make Again 围绕这些不同的关系背景，探索 AI 在持续陪伴中的产品形态。</p>'],
      ['我的工作', '<ul><li><strong>用户旅程：</strong>围绕初次倾诉、日常陪伴、回忆沉淀与结束旅程，设计完整的使用路径。</li><li><strong>建档与对话：</strong>用引导式对话了解关系背景、情绪困扰和陪伴需求，规划结合用户画像与长期记忆的个性化回应。</li><li><strong>产品与前端：</strong>参与产品方案设计和前端开发，把对话、信件、照片记录等内容组织成可以持续使用的陪伴体验。</li></ul>'],
      ['设计思考', '<p>来信和关系画像承接即时对话，时间看板让回忆可以被保存、再次打开。匿名信件为用户提供与他人连接的方式；结束旅程则是体验的一部分，让陪伴有机会回到用户自己的生活。</p>'],
    ],
    outcome: '阶段进展：首版已于 2026 年 9 月 18 日上线，覆盖首次引导、信息建档、文字与语音记录及信件收藏等流程，后续功能持续迭代中。',
    href: 'assets/makeagain-dialogue.png', cta: '查看当前界面原图', note: '截图来自产品介绍演示文稿，其中记忆收藏部分为设计预览。',
  },
  shanghai: {
    kicker: '03 / INDUSTRIAL AI', title: '上海电气', subtitle: 'AI 质量归因分析平台 · 质量洞察报告',
    role: '需求分析、HTML 原型与 PRD、研发协作', time: '2026.04–2026.09', type: '上海算法创新研究院 / 实习项目', image: 'assets/shanghai-electric.jpg', alt: '质量洞察报告原型中的特征重要性与统计分析图',
    sections: [
      ['业务背景', '<p>面向工业制造质量分析场景，平台结合多 Agent 协同工作流、机器学习与大语言模型，识别关键质量影响因素并生成分析报告。业务需要理解分析结果，也需要追溯指标口径与分析过程。</p>'],
      ['我的工作', '<ul><li><strong>需求与报告设计：</strong>对接客户梳理分析诉求，将需求转化为功能模块与可视化方案，独立完成 HTML 原型和 PRD，推动报告迭代。</li><li><strong>研发协作：</strong>与算法、前后端团队明确核心指标的数据口径、计算逻辑和接口规范，参与需求评审与研发联调。</li><li><strong>AI 流程设计：</strong>参与意图识别与任务触发机制设计，梳理全流程、局部任务和异常输入的处理逻辑；划分算法输出与大模型生成的能力边界，用结构化 Prompt 约束输出。</li></ul>'],
      ['原型展示重点', '<p>报告以主要结论为入口，再展开特征相关性、模型训练与评估、模型解读等内容。特征重要性、统计分析和作用关系可视化共同服务于业务理解，读者可以通过目录进入具体章节。</p>'],
    ],
    outcome: '阶段结果：设计方案基本被研发采纳，并通过客户评审验证。当前可打开完整的质量洞察报告 HTML 原型。',
    href: 'demos/shanghai-electric/index.html', cta: '打开完整报告原型', note: '此处展示报告原型，重点呈现信息结构与分析结果的表达方式。',
  },
  shounong: {
    kicker: '04 / ENTERPRISE PRODUCT', title: '首农集团', subtitle: '阿洛酮糖智能制造平台 · 基础数据管理',
    role: '基础数据模块业务梳理、原型与 PRD、验收', time: '2026.04–2026.09', type: '上海算法创新研究院 / 实习项目', image: 'assets/shounong.jpg', alt: '阿洛酮糖生产管理平台通用字典页面',
    sections: [
      ['业务背景', '<p>项目面向生产数字化与智能化需求，构建数据层、模型层、应用层一体化的生产管理体系。当前阶段聚焦生产与质检数据线上化，为后续智能建模和生产调控提供数据基础。</p>'],
      ['我负责的模块', '<ul><li><strong>梳理业务与数据：</strong>基于工厂生产流程和现场原始记录，整理业务数据结构与核心规则，完成期初数据结构化整理。</li><li><strong>基础数据管理设计：</strong>负责模块原型与 PRD，支持基础数据增删改查，以及跨场景表单配置。</li><li><strong>协作与交付：</strong>对接前后端和测试团队，通过 Jira 跟进需求变更与功能问题，协调方案调整和功能验收。</li></ul>'],
      ['可以体验什么', '<p>演示从通用字典页面进入，可以查看字典枚举、编辑数据，也可以通过侧边栏切换工序、设备、单位等基础数据页面。这里展示平台原型，我的负责范围为基础数据管理模块。</p>'],
    ],
    outcome: '交付结果：推动负责模块正式上线并投入工厂实际使用。作品集中提供可交互原型，用于展示模块设计。',
    href: 'demos/shounong/basic-data/dictionaries.html', cta: '体验交互原型', note: '原型使用演示数据；所做修改保存在当前浏览器，不连接工厂生产系统。',
  },
};

const filters = [...document.querySelectorAll('[data-filter]')];
const workGroups = [...document.querySelectorAll('[data-category]')];
const counts = { all: 6, ai: 2, enterprise: 2, games: 2 };
function selectFilter(value) {
  if (!(value in counts)) return;
  for (const button of filters) {
    const active = button.dataset.filter === value;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
  for (const group of workGroups) group.hidden = value !== 'all' && value !== group.dataset.category;
  document.querySelector('.filter-result').textContent = `共 ${counts[value]} 个作品`;
}
for (const button of filters) button.addEventListener('click', () => selectFilter(button.dataset.filter));
for (const link of document.querySelectorAll('[data-filter-link]')) link.addEventListener('click', () => selectFilter(link.dataset.filterLink));

const dialog = document.querySelector('.case-dialog');
const caseContent = document.querySelector('#case-content');
function renderProjectVisual(p) {
  if (!p.screens) return `<figure class="case-image"><img src="${p.image}" alt="${p.alt}"></figure>`;
  const first = p.screens[0];
  return `<section class="case-gallery" aria-label="Make Again 小程序实际界面"><div class="gallery-heading"><h3>小程序界面</h3><span class="gallery-counter">01 / ${String(p.screens.length).padStart(2, '0')}</span></div><div class="gallery-tabs" role="group" aria-label="选择小程序界面">${p.screens.map((screen, index) => `<button type="button" class="gallery-tab${index === 0 ? ' active' : ''}" aria-pressed="${index === 0}" data-screen="${index}">${screen.label}</button>`).join('')}</div><figure class="gallery-preview"><img class="gallery-image" src="${first.src}" alt="${first.alt}"><figcaption class="gallery-caption" aria-live="polite">${first.caption}</figcaption></figure></section>`;
}
function openProject(id) {
  const p = projectNotes[id];
  if (!p) return;
  caseContent.innerHTML = `<article class="case-inner"><p class="case-kicker">${p.kicker}</p><h2 id="case-title">${p.title}</h2><p class="case-subtitle">${p.subtitle}</p><dl class="case-meta"><div><dt>我的职责</dt><dd>${p.role}</dd></div><div><dt>时间</dt><dd>${p.time}</dd></div><div><dt>项目背景</dt><dd>${p.type}</dd></div></dl>${renderProjectVisual(p)}${p.sections.map(([title, content]) => `<section class="case-section"><h3>${title}</h3><div>${content}</div></section>`).join('')}<p class="case-outcome">${p.outcome}</p><div class="case-footer"><a class="button button-dark${p.screens ? ' gallery-original' : ''}" href="${p.href}" target="_blank" rel="noopener noreferrer">${p.cta} <span aria-hidden="true">↗</span></a><p>${p.note}</p></div></article>`;
  if (p.screens) {
    for (const button of caseContent.querySelectorAll('[data-screen]')) button.addEventListener('click', () => {
      const index = Number(button.dataset.screen);
      const screen = p.screens[index];
      for (const tab of caseContent.querySelectorAll('[data-screen]')) {
        const active = tab === button;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-pressed', String(active));
      }
      const image = caseContent.querySelector('.gallery-image');
      image.src = screen.src;
      image.alt = screen.alt;
      caseContent.querySelector('.gallery-caption').textContent = screen.caption;
      caseContent.querySelector('.gallery-counter').textContent = `${String(index + 1).padStart(2, '0')} / ${String(p.screens.length).padStart(2, '0')}`;
      caseContent.querySelector('.gallery-original').href = screen.src;
    });
  }
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
}
for (const button of document.querySelectorAll('[data-project]')) button.addEventListener('click', () => openProject(button.dataset.project));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', '打开导航'); mobileNav.hidden = true; }
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  mobileNav.hidden = !open;
});
for (const link of mobileNav.querySelectorAll('a')) link.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
matchMedia('(min-width: 641px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

let toastTimer;
function notify(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
}
document.querySelector('[data-copy-email]').addEventListener('click', async e => {
  const email = e.currentTarget.dataset.copyEmail;
  try {
    await navigator.clipboard.writeText(email);
    notify('邮箱已复制，期待和你交流');
  } catch {
    notify('请点击邮箱地址发送邮件');
  }
});
const header = document.querySelector('.site-header');
function updateHeader() { header.classList.toggle('scrolled', scrollY > 20); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
