// 渲染侧边栏 + 顶部栏 + 工具方法
(function () {
  // 以 layout.js 所在目录反推应用根路径（prototype/），避免 PATH_PREFIX 算错导致菜单跳转异常
  function getAppRootUrl() {
    const script = document.querySelector('script[src*="layout.js"]');
    if (script && script.getAttribute('src')) {
      try {
        return new URL('../../', script.src);
      } catch (e) { /* fall through */ }
    }
    return new URL('./', location.href);
  }

  function getPathPrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    const segs = path.split('/').filter(Boolean);
    if (segs.length === 0) return './';
    if (segs[segs.length - 1].endsWith('.html')) segs.pop();
    return segs.length === 0 ? './' : '../'.repeat(segs.length);
  }
  window.PATH_PREFIX = getPathPrefix();

  function resolveHref(href) {
    if (!href) return '#';
    if (/^https?:\/\//i.test(href)) return href;
    try {
      const root = getAppRootUrl();
      const target = href.startsWith('/') ? href.slice(1) : href;
      const resolved = new URL(target, root);
      return resolved.pathname + resolved.search + resolved.hash;
    } catch (e) {
      if (href.startsWith('/')) return window.PATH_PREFIX + href.slice(1);
      return href;
    }
  }

  function renderSidebar(activeKey) {
    const menu = window.SIDEBAR_MENU || [];
    const html = [];
    html.push(`
      <div class="sidebar-logo">
        <span class="sidebar-logo-icon">阿</span>
        <span>阿洛酮糖生产平台</span>
      </div>
      <div class="sidebar-menu">
    `);
    menu.forEach((g) => {
      if (g.group) html.push(`<div class="menu-group-title">${g.group}</div>`);
      g.items.forEach((it) => {
        if (it.children && it.children.length) {
          const childActive = it.children.some(c => c.key === activeKey);
          const collapsed = childActive ? '' : 'collapsed';
          const submenuCollapsed = childActive ? '' : 'collapsed';
          html.push(`
            <div class="menu-item has-children ${collapsed}" data-toggle="${it.key}">
              <span class="menu-item-icon">${window.ICONS[it.icon] || ''}</span>
              <span>${it.label}</span>
            </div>
            <div class="submenu ${submenuCollapsed}" data-submenu="${it.key}">
          `);
          it.children.forEach((c) => {
            const active = c.key === activeKey ? 'active' : '';
            html.push(`<a class="menu-item ${active}" href="${resolveHref(c.href)}"><span>${c.label}</span></a>`);
          });
          html.push(`</div>`);
        } else {
          const active = it.key === activeKey ? 'active' : '';
          html.push(`
            <a class="menu-item ${active}" href="${resolveHref(it.href)}">
              <span class="menu-item-icon">${window.ICONS[it.icon] || ''}</span>
              <span>${it.label}</span>
            </a>
          `);
        }
      });
    });
    html.push('</div>');
    return html.join('');
  }

  function renderTopbar(breadcrumb) {
    const role = (window.localStorage.getItem('role')) || '系统管理员';
    const userName = (window.localStorage.getItem('userName')) || '王尚革';
    const initial = userName.charAt(0);
    const crumbHtml = (breadcrumb || []).map((c, i, arr) => {
      const last = i === arr.length - 1;
      if (last) return `<b>${c.label}</b>`;
      if (c.href) return `<a href="${resolveHref(c.href)}" style="color:var(--text-2)">${c.label}</a><span class="sep">/</span>`;
      return `<span>${c.label}</span><span class="sep">/</span>`;
    }).join(' ');
    return `
      <div class="breadcrumb">${crumbHtml}</div>
      <div class="topbar-spacer" style="flex:1"></div>
      <div class="topbar-action" title="应用中心">${window.ICONS.apps}</div>
      <div class="topbar-action" title="通知">${window.ICONS.bell}<span class="dot"></span></div>
      <div class="user-chip" id="user-chip" title="点击切换角色">
        <span class="avatar">${initial}</span>
        <div class="user-chip-info">
          <div class="user-chip-name">${userName}</div>
          <div class="user-chip-role">${role}</div>
        </div>
      </div>
    `;
  }

  function bindMenuToggle() {
    document.querySelectorAll('.menu-item.has-children').forEach((el) => {
      el.addEventListener('click', () => {
        const k = el.getAttribute('data-toggle');
        const sub = document.querySelector(`[data-submenu="${k}"]`);
        if (sub) sub.classList.toggle('collapsed');
        el.classList.toggle('collapsed');
      });
    });
  }

  function bindRoleSwitch() {
    const chip = document.getElementById('user-chip');
    if (!chip) return;
    const roles = [
      { name: '王尚革', role: '系统管理员' },
      { name: '张三', role: '操作人员（发酵工段）' },
      { name: '李四', role: '操作人员（中间体1）' },
      { name: '王五', role: '质检科人员' },
      { name: '赵六', role: '班组长' },
      { name: '刘七', role: '生产管理人员' }
    ];
    chip.addEventListener('click', () => {
      const cur = window.localStorage.getItem('role') || '系统管理员';
      const idx = roles.findIndex(r => r.role === cur);
      const next = roles[(idx + 1) % roles.length];
      window.localStorage.setItem('role', next.role);
      window.localStorage.setItem('userName', next.name);
      window.toast(`已切换到角色：${next.role}`, 'success');
      setTimeout(() => location.reload(), 300);
    });
  }

  // ====== Toast ======
  window.toast = function (msg, type = 'success') {
    let c = document.querySelector('.toast-container');
    if (!c) {
      c = document.createElement('div');
      c.className = 'toast-container';
      document.body.appendChild(c);
    }
    const t = document.createElement('div');
    t.className = 'toast ' + (type === 'error' ? 'error' : type === 'warning' ? 'warning' : '');
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  };

  // ====== Modal ======
  window.confirmDialog = function (title, content, onOk, okLabel, onInit) {
    const mask = document.createElement('div');
    mask.className = 'modal-mask open';
    mask.innerHTML = `
      <div class="modal">
        <div class="modal-header">${title}<span style="cursor:pointer;color:#94a3b8" data-close>×</span></div>
        <div class="modal-body">${content}</div>
        <div class="modal-footer">
          <button class="btn" data-close>取消</button>
          <button class="btn btn-primary" data-ok>${okLabel || '确认'}</button>
        </div>
      </div>
    `;
    document.body.appendChild(mask);
    mask.addEventListener('click', (e) => {
      if (e.target.dataset.close !== undefined || e.target === mask) {
        mask.remove();
      } else if (e.target.dataset.ok !== undefined) {
        // 先执行 onOk（让回调能读取弹窗内表单值），再移除弹窗
        // onOk 返回 false 时阻止关闭（用于校验失败保留弹窗）
        const ret = onOk ? onOk(mask) : undefined;
        if (ret !== false) mask.remove();
      }
    });
    // 初始化回调
    if (onInit) {
      setTimeout(() => onInit(mask), 0);
    }
  };

  // ====== Render ======
  window.renderLayout = function (opts) {
    opts = opts || {};
    const root = document.getElementById('app');
    if (!root) return;
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = renderSidebar(opts.activeKey);

    const main = document.createElement('div');
    main.className = 'main';

    const topbar = document.createElement('div');
    topbar.className = 'topbar';
    topbar.innerHTML = renderTopbar(opts.breadcrumb);

    const page = document.createElement('div');
    page.className = 'page';
    page.id = 'page';

    main.appendChild(topbar);
    main.appendChild(page);

    const layout = document.createElement('div');
    layout.className = 'layout';
    layout.appendChild(sidebar);
    layout.appendChild(main);

    root.innerHTML = '';
    root.appendChild(layout);

    bindMenuToggle();
    bindRoleSwitch();

    return page;
  };

  // ====== Full-Featured Pagination V2 ======
  // options: { total, pageSize, currentPage, pageSizes, onPageChange }
  window.renderPaginationV2 = function (options) {
    const total = options.total || 0;
    const pageSize = options.pageSize || 100;
    const currentPage = options.currentPage || 1;
    const pageSizes = options.pageSizes || [100, 200, 300, 400];
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const p = currentPage;

    let pageBtns = '';
    const maxShow = 5;
    let start = Math.max(1, p - Math.floor(maxShow / 2));
    let end = Math.min(totalPages, start + maxShow - 1);
    if (end - start < maxShow - 1) start = Math.max(1, end - maxShow + 1);

    for (let i = start; i <= end; i++) {
      pageBtns += `<button class="${i === p ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    const selectId = 'ps-' + Math.random().toString(36).slice(2, 8);
    const jumperId = 'pj-' + Math.random().toString(36).slice(2, 8);

    const html = `
      <div class="pagination-v2" data-pagination-v2>
        <span class="pagination-total">共 ${total} 条</span>
        <select class="pagination-size" id="${selectId}">
          ${pageSizes.map(s => `<option value="${s}" ${s === pageSize ? 'selected' : ''}>${s}条/页</option>`).join('')}
        </select>
        <button data-action="first" ${p <= 1 ? 'disabled' : ''}>«</button>
        <button data-action="prev" ${p <= 1 ? 'disabled' : ''}>‹</button>
        ${pageBtns}
        <button data-action="next" ${p >= totalPages ? 'disabled' : ''}>›</button>
        <button data-action="last" ${p >= totalPages ? 'disabled' : ''}>»</button>
        <span class="pagination-jumper">跳至 <input type="number" id="${jumperId}" min="1" max="${totalPages}" value="${p}" /> 页</span>
      </div>
    `;

    setTimeout(() => {
      const el = document.getElementById(selectId);
      const jp = document.getElementById(jumperId);
      if (el && options.onPageSizeChange) {
        el.addEventListener('change', function () { options.onPageSizeChange(parseInt(this.value)); });
      }
      if (jp && options.onPageChange) {
        jp.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') {
            const v = parseInt(this.value);
            if (v >= 1 && v <= totalPages) options.onPageChange(v);
          }
        });
      }
      const container = document.querySelector('[data-pagination-v2]');
      if (container && options.onPageChange) {
        container.querySelectorAll('button[data-page]').forEach(btn => {
          btn.addEventListener('click', function () {
            options.onPageChange(parseInt(this.dataset.page));
          });
        });
        container.querySelectorAll('button[data-action]').forEach(btn => {
          btn.addEventListener('click', function () {
            const action = this.dataset.action;
            if (action === 'first') options.onPageChange(1);
            else if (action === 'prev') options.onPageChange(currentPage - 1);
            else if (action === 'next') options.onPageChange(currentPage + 1);
            else if (action === 'last') options.onPageChange(totalPages);
          });
        });
      }
    }, 0);

    return html;
  };

  // ====== Reusable Column Config for Table Pages ======
  window.createColumnManager = function(storageKey, allColumns) {
    let visibleColumns = loadColumnConfig() || allColumns.map(c => c.key);

    function loadColumnConfig() {
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
        return saved;
      } catch (e) {
        return null;
      }
    }

    function saveColumnConfig() {
      localStorage.setItem(storageKey, JSON.stringify(visibleColumns));
    }

    function getVisibleColumns() {
      return allColumns.filter(c => visibleColumns.includes(c.key));
    }

    function openConfig(onSave) {
      let tempVisible = [...visibleColumns];
      let draggedItem = null;

      function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, s => ({
          '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[s]));
      }

      const renderDialog = () => {
        const selectedCols = allColumns.filter(c => tempVisible.includes(c.key));
        return `
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;min-height:300px">
            <div>
              <div style="font-weight:600;margin-bottom:12px;font-size:14px">全部字段</div>
              <div style="border:1px solid var(--border);border-radius:4px;padding:12px;background:var(--bg-soft)">
                ${allColumns.map(col => `
                  <label style="display:flex;align-items:center;padding:8px;cursor:pointer;border-radius:4px;transition:background 0.2s" onmouseover="this.style.background='#fff'" onmouseout="this.style.background='transparent'">
                    <input type="checkbox" ${tempVisible.includes(col.key) ? 'checked' : ''} onchange="window._toggleColumn('${col.key}')" style="margin-right:8px;cursor:pointer" />
                    <span>${escapeHtml(col.label)}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div>
              <div style="font-weight:600;margin-bottom:12px;font-size:14px">列表显示字段</div>
              <div id="sortable-list" style="border:1px solid var(--border);border-radius:4px;padding:12px;min-height:260px;background:var(--bg-soft)">
                ${selectedCols.length ? selectedCols.map((col, idx) => `
                  <div class="sortable-item" data-key="${col.key}" draggable="true" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;margin-bottom:6px;background:#fff;border:1px solid var(--border);border-radius:4px;cursor:move;user-select:none">
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="color:var(--text-3);font-size:18px">☰</span>
                      <span>${escapeHtml(col.label)}</span>
                    </div>
                    <button class="btn-text danger" onclick="window._removeColumn('${col.key}')" style="padding:2px 8px;font-size:20px;line-height:1">×</button>
                  </div>
                `).join('') : '<div style="color:var(--text-3);text-align:center;padding:40px 20px">请从左侧选择字段</div>'}
              </div>
            </div>
          </div>
        `;
      };

      window._toggleColumn = function(key) {
        if (tempVisible.includes(key)) {
          tempVisible = tempVisible.filter(k => k !== key);
        } else {
          tempVisible.push(key);
        }
        updateDialogContent();
      };

      window._removeColumn = function(key) {
        tempVisible = tempVisible.filter(k => k !== key);
        updateDialogContent();
      };

      const updateDialogContent = () => {
        const content = document.querySelector('.modal-body');
        if (content) {
          content.innerHTML = renderDialog();
          initDragAndDrop();
        }
      };

      const initDragAndDrop = () => {
        const items = document.querySelectorAll('.sortable-item');
        items.forEach(item => {
          item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            item.style.opacity = '0.5';
          });
          item.addEventListener('dragend', (e) => {
            item.style.opacity = '1';
            draggedItem = null;
          });
          item.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (draggedItem && draggedItem !== item) {
              const list = item.parentNode;
              const allItems = [...list.querySelectorAll('.sortable-item')];
              const draggedIdx = allItems.indexOf(draggedItem);
              const targetIdx = allItems.indexOf(item);
              if (draggedIdx < targetIdx) {
                item.after(draggedItem);
              } else {
                item.before(draggedItem);
              }
              const newOrder = [...list.querySelectorAll('.sortable-item')].map(el => el.dataset.key);
              tempVisible = newOrder;
            }
          });
        });
      };

      confirmDialog(
        '配置列表字段',
        renderDialog(),
        () => {
          if (tempVisible.length === 0) {
            window.toast('至少需要选择一个字段', 'error');
            return false;
          }
          visibleColumns = tempVisible;
          saveColumnConfig();
          window.toast('列表字段配置已保存', 'success');
          if (onSave) onSave(visibleColumns);
        },
        '保存',
        (mask) => {
          const modal = mask.querySelector('.modal');
          if (modal) modal.classList.add('modal-wide');
          initDragAndDrop();
        }
      );
    }

    return {
      getVisibleColumns,
      openConfig,
      getVisibleKeys: () => visibleColumns
    };
  };


  // options: { fields, visibleKeys, storageKey, onSave }
  window.openColumnConfig = function (options) {
    const fields = options.fields || [];
    const visibleKeys = options.visibleKeys || fields.map(f => f.key);
    const storageKey = options.storageKey || 'default.columnConfig';

    function escapeHtml(value) {
      return String(value ?? '').replace(/[&<>"']/g, s => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      }[s]));
    }

    function fieldOf(key) { return fields.find(f => f.key === key); }

    function selectedFieldHtml(keys) {
      return keys.map((key, idx) => {
        const f = fieldOf(key);
        if (!f) return '';
        return `
          <div class="selected-field" draggable="true" data-key="${key}">
            <span class="drag-handle">☰</span>
            <span class="name">${escapeHtml(f.label)}</span>
            <span class="field-meta">${idx + 1}</span>
            <button class="btn btn-sm" onclick="window._moveFieldInModal('${key}', -1)">上移</button>
            <button class="btn btn-sm" onclick="window._moveFieldInModal('${key}', 1)">下移</button>
          </div>
        `;
      }).join('');
    }

    window._syncSelectedFields = function () {
      const checked = Array.from(document.querySelectorAll('[data-field-check]:checked')).map(x => x.value);
      const current = Array.from(document.querySelectorAll('.selected-field')).map(x => x.dataset.key);
      const ordered = current.filter(k => checked.includes(k)).concat(checked.filter(k => !current.includes(k)));
      const el = document.getElementById('selected-fields-cfg');
      if (el) el.innerHTML = selectedFieldHtml(ordered);
      window._bindModalDrag();
    };

    window._moveFieldInModal = function (key, step) {
      const list = Array.from(document.querySelectorAll('.selected-field')).map(x => x.dataset.key);
      const idx = list.indexOf(key);
      const next = idx + step;
      if (idx < 0 || next < 0 || next >= list.length) return;
      [list[idx], list[next]] = [list[next], list[idx]];
      const el = document.getElementById('selected-fields-cfg');
      if (el) el.innerHTML = selectedFieldHtml(list);
      window._bindModalDrag();
    };

    window._bindModalDrag = function () {
      document.querySelectorAll('.selected-field').forEach(el => {
        el.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', this.dataset.key); });
        el.addEventListener('dragover', function (e) { e.preventDefault(); });
        el.addEventListener('drop', function (e) {
          e.preventDefault();
          const from = e.dataTransfer.getData('text/plain');
          const to = this.dataset.key;
          const list = Array.from(document.querySelectorAll('.selected-field')).map(x => x.dataset.key);
          const fromIdx = list.indexOf(from);
          const toIdx = list.indexOf(to);
          if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return;
          list.splice(toIdx, 0, list.splice(fromIdx, 1)[0]);
          const el2 = document.getElementById('selected-fields-cfg');
          if (el2) el2.innerHTML = selectedFieldHtml(list);
          window._bindModalDrag();
        });
      });
    };

    const content = `
      <div class="field-config">
        <div class="field-panel">
          <div class="field-panel-title">全部字段 <span class="field-meta">支持多选</span></div>
          <label style="display:flex;gap:6px;margin-bottom:10px;font-size:13px">
            <input type="checkbox" onchange="document.querySelectorAll('[data-field-check]').forEach(x => x.checked = this.checked); window._syncSelectedFields()" ${visibleKeys.length === fields.length ? 'checked' : ''} />
            全部
          </label>
          <div class="field-check-list">
            ${fields.map(f => `
              <label>
                <input data-field-check type="checkbox" value="${f.key}" onchange="window._syncSelectedFields()" ${visibleKeys.includes(f.key) ? 'checked' : ''} />
                <span>${escapeHtml(f.label)}</span>
              </label>
            `).join('')}
          </div>
        </div>
        <div class="field-panel">
          <div class="field-panel-title">列表显示字段 <span class="field-meta">拖拽或按钮调整顺序</span></div>
          <div id="selected-fields-cfg" class="selected-fields">${selectedFieldHtml(visibleKeys)}</div>
        </div>
      </div>
    `;

    confirmDialog('配置列表字段', content, function () {
      const keys = Array.from(document.querySelectorAll('.selected-field')).map(x => x.dataset.key);
      if (!keys.length) {
        window.toast('请至少保留一列', 'warning');
        return false;
      }
      try { localStorage.setItem(storageKey, JSON.stringify(keys)); } catch (e) {}
      window.toast('已保存列表字段配置', 'success');
      if (options.onSave) options.onSave(keys);
    }, '保存');

    setTimeout(window._bindModalDrag, 0);
  };

  // ====== Simple Column Config Button (for pages without complex field config) ======
  window.renderColumnConfigBtn = function (fields, visibleKeys, storageKey, onSave) {
    if (!fields || !fields.length) return '';
    return `<button class="btn" onclick="window.openColumnConfig({fields:${JSON.stringify(fields).replace(/"/g, '&quot;')}, visibleKeys:${JSON.stringify(visibleKeys)}, storageKey:'${storageKey}', onSave: window._colCfgCb})">配置列表字段</button>`;
  };
})();
