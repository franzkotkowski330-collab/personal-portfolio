// 基础数据（班次/班组/单位/字典）详情页通用渲染
window.renderBasicDetailPage = function (cfg) {
  const params = new URLSearchParams(location.search);
  const rawId = params.get(cfg.paramKey) || cfg.defaultId || '';
  const id = rawId ? decodeURIComponent(String(rawId)) : '';
  const row = cfg.findRow(id);

  const page = renderLayout({
    activeKey: cfg.activeKey,
    breadcrumb: [
      { label: '基础数据管理' },
      { label: cfg.listLabel, href: cfg.listHref },
      { label: row ? (row.name || row.type || id) : id }
    ]
  });

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, s => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
  }

  function renderExtra() {
    if (!cfg.renderExtra || !row) return '';
    return cfg.renderExtra(row, escapeHtml);
  }

  if (!row) {
    page.innerHTML = `
      <div class="card">
        <div class="empty" style="padding:40px">未找到对应的基础数据</div>
        <div style="margin-top:12px">
          <button class="btn" onclick="location.href='${cfg.listHref}'">返回列表</button>
        </div>
      </div>
    `;
    return page;
  }

  const metaHtml = cfg.fields.map(f => {
    const raw = row[f.key];
    const val = f.format ? f.format(raw, row) : (raw ?? '—');
    const safe = typeof val === 'string' && val.includes('<') ? val : escapeHtml(val);
    return `<div class="detail-meta-item"><div class="lbl">${escapeHtml(f.label)}</div><div class="val">${safe}</div></div>`;
  }).join('');

  page.innerHTML = `
    <div class="detail-page-stack">
      <div class="card">
        <div class="card-header"><div class="card-title">${escapeHtml(cfg.title)}</div></div>
        <div class="detail-meta">${metaHtml}</div>
        ${renderExtra()}
      </div>

      <div class="card" style="background:var(--info-light);box-shadow:none">
        <div style="font-weight:600;color:var(--info);margin-bottom:8px">数据用途</div>
        <div class="text-2" style="font-size:13px;line-height:1.8">${cfg.usage}</div>
      </div>

      <div style="display:flex;gap:8px">
        <button class="btn" onclick="location.href='${cfg.listHref}'">返回列表</button>
      </div>
    </div>
  `;

  return page;
};
