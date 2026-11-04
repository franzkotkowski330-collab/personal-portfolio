/**
 * 通用字典列表与编辑弹窗
 */
(function (win) {
  const getMock = () => win.MOCK || {};
  const getPS = () => win.ProcessStageSelect;

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, s => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  function getDictTypeNames() {
    return (getMock().dictionaries || []).map(d => d.type);
  }

  function formatEnumText(dict) {
    return (dict.items || []).map(it => {
      if (dict.type === '班组' && it.code) return it.name + '（' + it.code + '）';
      return it.name;
    }).join('、');
  }

  function getFilteredDicts(typeFilter) {
    const all = getMock().dictionaries || [];
    const type = (typeFilter || '').trim();
    if (!type) return all;
    return all.filter(d => d.type === type);
  }

  function renderTableRows(list, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = list.map((d, idx) => `
      <tr data-type="${escapeAttr(d.type)}">
        <td>${idx + 1}</td>
        <td style="color:#000">${escapeHtml(d.type)}</td>
        <td class="dict-enum-text" style="color:#000">${formatEnumText(d)}</td>
        <td class="col-actions">
          <button type="button" class="btn-text" style="color:#000" data-edit="${escapeAttr(d.type)}">编辑</button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('[data-edit]').forEach(btn => {
      btn.addEventListener('click', () => openDictEditModal(btn.getAttribute('data-edit')));
    });
  }

  function bindDragRows(container, items, onUpdate) {
    let dragIndex = null;
    container.querySelectorAll('.dict-item-row').forEach(row => {
      row.addEventListener('dragstart', e => {
        dragIndex = Number(row.dataset.idx);
        row.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
      });
      row.addEventListener('dragend', () => {
        dragIndex = null;
        row.classList.remove('dragging');
        container.querySelectorAll('.dict-item-row').forEach(r => r.classList.remove('drag-over'));
      });
      row.addEventListener('dragover', e => {
        e.preventDefault();
        row.classList.add('drag-over');
      });
      row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
      row.addEventListener('drop', e => {
        e.preventDefault();
        row.classList.remove('drag-over');
        const toIdx = Number(row.dataset.idx);
        if (dragIndex === null || dragIndex === toIdx) return;
        const moved = items.splice(dragIndex, 1)[0];
        items.splice(toIdx, 0, moved);
        dragIndex = null;
        onUpdate();
      });
    });
  }

  function renderEditRows(container, items, dictType) {
    container.innerHTML = items.map((it, idx) => `
      <div class="dict-item-row" draggable="true" data-idx="${idx}">
        <span class="dict-drag" title="拖动排序">⋮⋮</span>
        <input class="form-input dict-enum-input" style="flex:1;max-width:100%;color:#000" maxlength="100"
          data-idx="${idx}" value="${escapeAttr(it.name)}" placeholder="请输入枚举值" />
        <button type="button" class="btn-text" style="color:#000" data-del="${idx}">删除</button>
      </div>
    `).join('');

    container.querySelectorAll('.dict-enum-input').forEach(inp => {
      inp.addEventListener('input', () => {
        items[Number(inp.dataset.idx)].name = inp.value;
      });
    });

    container.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!confirm('是否确认删除？')) return;
        items.splice(Number(btn.dataset.del), 1);
        renderEditRows(container, items, dictType);
      });
    });

    bindDragRows(container, items, () => renderEditRows(container, items, dictType));
  }

  function openDictEditModal(dictType) {
    const dictRow = (getMock().dictionaries || []).find(d => d.type === dictType);
    if (!dictRow) {
      win.toast('未找到对应字典', 'error');
      return;
    }
    if (typeof win.confirmDialog !== 'function') {
      alert('页面组件未加载完成，请刷新后重试');
      return;
    }

    const items = dictRow.items.map(it => ({ name: it.name, code: it.code || '' }));
    const refsMap = getMock().dictionaryReferencedValues || {};

    win.confirmDialog(
      '编辑字典',
      `
        <div style="color:#000">
          <div class="form-item" style="margin-bottom:12px">
            <label class="form-label" style="color:#000">字典名称</label>
            <div style="padding:6px 0">${escapeHtml(dictType)}</div>
          </div>
          <div class="form-item">
            <label class="form-label" style="color:#000"><span class="required">*</span> 枚举值</label>
            <div id="dict-edit-items"></div>
            <button type="button" class="btn mt-8" id="dict-btn-add" style="color:#000">+ 添加枚举值</button>
            <div id="dict-edit-msg" style="font-size:13px;margin-top:8px;color:#000"></div>
          </div>
        </div>
      `,
      (mask) => {
        const msgEl = mask.querySelector('#dict-edit-msg');
        const names = items.map(it => it.name.trim());
        if (names.some(n => !n)) {
          msgEl.textContent = '枚举值为必填项';
          return false;
        }
        const seen = new Set();
        for (const n of names) {
          if (seen.has(n)) {
            msgEl.textContent = '枚举值重复，请修改';
            return false;
          }
          seen.add(n);
        }
        const refs = refsMap[dictType] || [];
        const removed = dictRow.items.map(it => it.name).filter(n => !names.includes(n));
        for (const r of removed) {
          if (refs.includes(r)) {
            msgEl.textContent = '该枚举值正在被基础数据引用，无法删除';
            return false;
          }
        }
        const shiftCodes = ['1', '2'];
        const teamCodes = ['01', '02', '03'];
        dictRow.items = names.map((name, i) => {
          let code = items[i].code || '';
          if (dictType === '班次') code = shiftCodes[i] || name;
          if (dictType === '班组') code = teamCodes[i] || String(i + 1).padStart(2, '0');
          return { name, code };
        });
        win.toast('保存成功', 'success');
        if (win._dictPageRefresh) win._dictPageRefresh();
        return true;
      },
      '确定',
      (mask) => {
        const modal = mask.querySelector('.modal');
        if (modal) modal.classList.add('modal-wide');
        const container = mask.querySelector('#dict-edit-items');
        renderEditRows(container, items, dictType);
        mask.querySelector('#dict-btn-add').addEventListener('click', () => {
          items.push({ name: '', code: '' });
          renderEditRows(container, items, dictType);
          const inputs = container.querySelectorAll('.dict-enum-input');
          inputs[inputs.length - 1]?.focus();
        });
      }
    );
  }

  function renderFilterBar(opts) {
    opts = opts || {};
    const filterValue = opts.filterValue || '';
    const PS = getPS();
    const selectHtml = PS
      ? PS.render({
          rootId: opts.rootId || 'dict-name-filter-select',
          hiddenId: opts.hiddenId || 'dict-name-filter',
          inputId: opts.inputId || 'dict-name-filter-input',
          dropdownId: opts.dropdownId || 'dict-name-filter-dropdown',
          toggleId: opts.toggleId || 'dict-name-filter-toggle',
          value: filterValue,
          placeholder: '全部'
        })
      : `<select id="${opts.hiddenId || 'dict-name-filter'}" class="form-input" style="width:200px;color:#000">
          <option value="">全部</option>
          ${getDictTypeNames().map(t => `<option value="${escapeAttr(t)}"${filterValue === t ? ' selected' : ''}>${escapeHtml(t)}</option>`).join('')}
        </select>`;

    return `
      <div class="filter-bar" style="margin-bottom:12px">
        <span class="query-field q-w-lg">
          <label><b>字典名称:</b></label>
          ${selectHtml}
        </span>
        <span class="filter-actions">
          <button type="button" class="btn" id="${opts.resetId || 'dict-filter-reset'}">重置</button>
          <button type="button" class="btn btn-primary" id="${opts.queryId || 'dict-filter-query'}">查询</button>
        </span>
      </div>
    `;
  }

  function initDictPage(opts) {
    opts = opts || {};
    const tbodyId = opts.tbodyId || 'dict-tbody';
    const outsideEl = opts.outsideEl || document;
    const queryId = opts.queryId || 'dict-filter-query';
    const resetId = opts.resetId || 'dict-filter-reset';
    const hiddenId = opts.filterHiddenId || 'dict-name-filter';
    let filterType = opts.initialFilter || '';

    function refresh() {
      renderTableRows(getFilteredDicts(filterType), tbodyId);
    }

    win._dictPageRefresh = refresh;

    const PS = getPS();
    let filterSelect = null;
    if (PS) {
      filterSelect = PS.init({
        rootId: opts.filterRootId || 'dict-name-filter-select',
        hiddenId: hiddenId,
        inputId: opts.filterInputId || 'dict-name-filter-input',
        dropdownId: opts.filterDropdownId || 'dict-name-filter-dropdown',
        toggleId: opts.filterToggleId || 'dict-name-filter-toggle',
        stages: getDictTypeNames(),
        value: filterType,
        includeAll: true,
        allowCreate: false,
        outsideEl: outsideEl
      });
    }

    function readFilter() {
      if (filterSelect) return filterSelect.getValue();
      const el = document.getElementById(hiddenId);
      return el ? el.value : '';
    }

    document.getElementById(queryId)?.addEventListener('click', () => {
      filterType = readFilter();
      refresh();
    });

    document.getElementById(resetId)?.addEventListener('click', () => {
      filterType = '';
      if (filterSelect) filterSelect.setValue('');
      else {
        const el = document.getElementById(hiddenId);
        if (el) el.value = '';
      }
      refresh();
    });

    refresh();
    return { refresh, getFilter: () => filterType };
  }

  win.DictionaryPage = {
    getDictTypeNames,
    formatEnumText,
    getFilteredDicts,
    renderTableRows,
    renderFilterBar,
    initDictPage,
    openDictEditModal,
    escapeHtml
  };
})(window);
