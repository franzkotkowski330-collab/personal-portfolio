// 侧边栏菜单配置
window.SIDEBAR_MENU = [
  {
    group: '',
    items: [
      { key: 'home', icon: 'home', label: '门户首页', href: '/index.html' }
    ]
  },
  {
    group: '质量管理',
    items: [
      {
        key: 'incoming-inspection',
        icon: 'inbox',
        label: '来料检验',
        href: '/incoming-inspection/list.html'
      },
      {
        key: 'finished-product',
        icon: 'package',
        label: '成品检验',
        children: [
          { key: 'fp-record-list', label: '成品检验记录', href: '/finished-product/list.html' },
          { key: 'fp-day-report', label: '成品日检验报告', href: '/finished-product/day-report-list.html' }
        ]
      },
      {
        key: 'quality',
        icon: 'flask',
        label: '工序检验',
        children: [
          { key: 'quality-list-im1', label: '中间体检验', href: '/quality/list.html?type=im1' },
          { key: 'quality-list-qc', label: '质检科检验', href: '/quality/list.html?type=qc' },
          { key: 'quality-inspection-record-report', label: '检验记录表', href: '/quality/inspection-record-report.html' }
        ]
      },
      {
        key: 'records',
        icon: 'file',
        label: '原始记录表',
        children: [
          { key: 'records-all', label: '原始记录表', href: '/records/list.html' },
          { key: 'records-alt-isomer', label: '阿糖异构原始记录', href: '/records/alt-isomer-list.html' }
        ]
      },
      {
        key: 'fermentation',
        icon: 'beaker',
        label: '发酵记录',
        children: [
          { key: 'fm-recipe', label: '发酵配料表', href: '/fermentation/recipe-list.html' },
          { key: 'fm-production', label: '发酵生产记录', href: '/fermentation/production-list.html' }
        ]
      },
      {
        key: 'shift',
        icon: 'clipboard',
        label: '班报表',
        children: [
          { key: 'sr-aux', label: '班报表', href: '/shift-report/auxiliary-list.html' },
          { key: 'sr-fm', label: '辅料班报表', href: '/shift-report/fermentation-list.html' }
        ]
      }
    ]
  },
  {
    group: '数据&配置',
    items: [
      { key: 'query', icon: 'search', label: '跨模块数据查询', href: '/query.html' },
      { key: 'inspection-form-config', icon: 'layout', label: '检验表单配置', href: '/form-config/list.html' }
    ]
  },
  {
    group: '基础数据管理',
    items: [
      {
        key: 'process-management',
        icon: 'database',
        label: '工序管理',
        href: '/basic-data/processes.html'
      },
      { key: 'basic-devices', icon: 'database', label: '设备管理', href: '/basic-data/devices.html' },
      { key: 'basic-auxiliary-materials', icon: 'database', label: '辅料管理', href: '/basic-data/auxiliary-materials.html' },
      { key: 'basic-units', icon: 'database', label: '单位管理', href: '/basic-data/units.html' },
      { key: 'basic-dictionaries', icon: 'database', label: '通用字典', href: '/basic-data/dictionaries.html' },
      { key: 'basic-inspection-items', icon: 'database', label: '检验项目管理', href: '/basic-data/inspection-items.html' }
    ]
  },
  {
    group: '系统管理',
    items: [
      {
        key: 'system-mgmt',
        icon: 'shield',
        label: '系统管理',
        children: [
          { key: 'sys-home', label: '模块导航', href: '/system/index.html' },
          { key: 'sys-users', label: '用户管理', href: '/system/users.html' },
          { key: 'sys-roles', label: '角色管理', href: '/system/roles.html' },
          { key: 'sys-orgs', label: '组织管理', href: '/system/organizations.html' },
          { key: 'sys-template', label: '质检模板配置', href: '/system/template-config.html' },
          { key: 'sys-scada', label: 'SCADA点位映射', href: '/system/scada-mapping.html' },
          { key: 'sys-config', label: '系统配置', href: '/system/system-config.html' }
        ]
      }
    ]
  }
];

// SVG图标库
window.ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12L12 4l9 8v9a1 1 0 0 1-1 1h-5v-7H10v7H4a1 1 0 0 1-1-1v-9z"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3h6m-5 0v7L4 20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1l-6-10V3"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"/></svg>',
  beaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4.5 3h15M6 3v18l3-3h6l3 3V3"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5 M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16l2 10v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5L4 4z"/><path d="M2 14h6l2 3h4l2-3h6"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>',
  org: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M12 9v3 M6 15v-3h12v3"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18 M9 9v12"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3 M15 1v3 M9 20v3 M15 20v3 M20 9h3 M20 14h3 M1 9h3 M1 14h3"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10 21a2 2 0 0 0 4 0"/></svg>',
  apps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'
};
