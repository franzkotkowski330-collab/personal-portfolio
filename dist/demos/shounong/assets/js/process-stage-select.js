/**
 * 工段选择器 — 对齐 Element UI el-select filterable 交互
 * - 点击/聚焦：展开全部选项
 * - 输入：实时筛选选项（filterable）
 * - 选择：回填并关闭
 * - allowCreate：失焦时保留手动输入（编辑场景）
 */
(function () {
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, s => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
  }

  function render(opts) {
    opts = opts || {};
    const rootId = opts.rootId || 'stage-search-select';
    const hiddenId = opts.hiddenId || 'form-stage';
    const inputId = opts.inputId || hiddenId + '-input';
    const dropdownId = opts.dropdownId || hiddenId + '-dropdown';
    const toggleId = opts.toggleId || hiddenId + '-toggle';
    const placeholder = opts.placeholder || '请选择';
    const value = opts.value || '';

    return `
      <div class="search-select" id="${rootId}">
        <div class="search-select-control">
          <input type="text" id="${inputId}" class="search-select-input" placeholder="${escapeHtml(placeholder)}" autocomplete="off" value="${escapeHtml(value)}" />
          <span class="search-select-arrow" id="${toggleId}" title="展开选项">▼</span>
        </div>
        <input type="hidden" id="${hiddenId}" value="${escapeHtml(value)}" />
        <div class="search-select-dropdown" id="${dropdownId}"></div>
      </div>
    `;
  }

  function init(opts) {
    opts = opts || {};
    const root = document.getElementById(opts.rootId || 'stage-search-select');
    const input = document.getElementById(opts.inputId || (opts.hiddenId || 'form-stage') + '-input');
    const hidden = document.getElementById(opts.hiddenId || 'form-stage');
    const dropdown = document.getElementById(opts.dropdownId || (opts.hiddenId || 'form-stage') + '-dropdown');
    const toggle = document.getElementById(opts.toggleId || (opts.hiddenId || 'form-stage') + '-toggle');
    if (!root || !input || !hidden || !dropdown) return null;

    if (root.dataset.stageSelectBound === '1') return null;
    root.dataset.stageSelectBound = '1';

    const includeAll = !!opts.includeAll;
    const allowCreate = opts.allowCreate !== false;
    const outsideEl = opts.outsideEl || document;
    const control = root.querySelector('.search-select-control') || root;
    const list = (opts.stages || []).map(stage => ({ value: stage, label: stage }));
    const allOption = { value: '', label: '全部' };

    let visible = false;
    let selectedValue = opts.value || '';

    hidden.value = selectedValue;
    input.value = selectedValue;

    function hideDropdown() {
      dropdown.style.display = 'none';
      root.classList.remove('is-open');
      visible = false;
    }

    function positionDropdown() {
      const rect = control.getBoundingClientRect();
      dropdown.style.left = rect.left + 'px';
      dropdown.style.top = (rect.bottom + 4) + 'px';
      dropdown.style.width = rect.width + 'px';
      dropdown.style.minWidth = '0';
    }

    function getFilteredOptions(query) {
      const q = (query || '').trim().toLowerCase();
      let matched = q
        ? list.filter(item => item.label.toLowerCase().includes(q))
        : list.slice();
      if (includeAll && (!q || '全部'.includes(q))) {
        matched = [allOption, ...matched];
      }
      return matched;
    }

    function renderDropdown(options) {
      dropdown.innerHTML = options.length
        ? options.map(item => {
          const val = item.value;
          const active = selectedValue === val ? ' active' : '';
          return `<div class="search-select-option${active}" data-value="${escapeHtml(val)}">${escapeHtml(item.label)}</div>`;
        }).join('')
        : '<div class="search-select-empty">无匹配数据</div>';
      positionDropdown();
      dropdown.style.display = 'block';
      root.classList.add('is-open');
      visible = true;
    }

    function openDropdown() {
      renderDropdown(getFilteredOptions(''));
    }

    function closeDropdown(commit) {
      hideDropdown();
      if (commit && allowCreate) {
        const text = input.value.trim();
        setValue(text);
      } else {
        input.value = selectedValue;
        hidden.value = selectedValue;
      }
    }

    function setValue(val) {
      selectedValue = val;
      hidden.value = val;
      input.value = val;
      if (opts.onChange) opts.onChange(val);
    }

    function toggleDropdown() {
      if (visible) {
        closeDropdown(true);
      } else {
        input.focus();
        openDropdown();
      }
    }

    function onOutsidePointer(e) {
      if (!root.contains(e.target) && e.target !== dropdown) {
        closeDropdown(true);
      }
    }

    input.addEventListener('focus', () => openDropdown());

    input.addEventListener('click', () => {
      if (!visible) openDropdown();
    });

    input.addEventListener('input', () => {
      if (!visible) openDropdown();
      else renderDropdown(getFilteredOptions(input.value));
    });

    input.addEventListener('blur', () => {
      setTimeout(() => {
        if (!visible) return;
        closeDropdown(true);
      }, 150);
    });

    if (toggle) {
      toggle.addEventListener('mousedown', (e) => {
        e.preventDefault();
      });
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
      });
    }

    dropdown.addEventListener('mousedown', (e) => {
      const opt = e.target.closest('.search-select-option');
      if (!opt) return;
      e.preventDefault();
      const val = opt.getAttribute('data-value') ?? '';
      setValue(val);
      hideDropdown();
    });

    function onResize() {
      if (visible) positionDropdown();
    }

    function onScroll() {
      closeDropdown(false);
    }

    outsideEl.addEventListener('mousedown', onOutsidePointer);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, true);

    return {
      getValue() { return selectedValue; },
      setValue(val) { setValue(val); },
      destroy() {
        outsideEl.removeEventListener('mousedown', onOutsidePointer);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('scroll', onScroll, true);
        hideDropdown();
        delete root.dataset.stageSelectBound;
      }
    };
  }

  window.ProcessStageSelect = { render, init, escapeHtml };
})();
