// Mock数据
window.MOCK = {
  // ===== 质检数据列表 =====
  qualityList: [
    {
      id: 'QC-20260507-0023',
      type: 'fermentation', typeLabel: '发酵工段质检单',
      date: '2026-05-07', shift: '白班', team: '甲班',
      processes: ['一级种子罐'], device: 'A罐', round: '1h',
      itemsCount: 4, exceedCount: 1, creator: '张三',
      submitTime: '2026-05-07 09:45', status: 'submitted'
    },
    {
      id: 'QC-20260507-0022',
      type: 'fermentation', typeLabel: '发酵工段质检单',
      date: '2026-05-07', shift: '白班', team: '甲班',
      processes: ['二级种子罐'], device: 'B罐', round: '初始样',
      itemsCount: 3, exceedCount: 0, creator: '张三',
      submitTime: '2026-05-07 08:20', status: 'reviewed'
    },
    {
      id: 'QC-20260507-0021',
      type: 'im1', typeLabel: '中间体检验单',
      date: '2026-05-07', shift: '白班', team: '甲班',
      division: '中间体 1',
      processes: ['阿糖脱色'], device: '—', round: '—',
      itemsCount: 4, exceedCount: 0, creator: '李四', inspector: '李四',
      sampleTime: '2026-05-07 09:30', inspectTime: '2026-05-07 10:10', createdAt: '2026-05-07 09:50',
      submitTime: '2026-05-07 10:15', status: 'submitted'
    },
    {
      id: 'QC-20260506-0085',
      type: 'im1', typeLabel: '中间体检验单',
      date: '2026-05-06', shift: '夜班', team: '乙班',
      division: '中间体 2',
      processes: ['果糖色谱', '阿糖异构'], device: '—', round: '—',
      itemsCount: 5, exceedCount: 1, creator: '马晓东', inspector: '马晓东',
      sampleTime: '2026-05-06 20:15', createdAt: '2026-05-06 20:40',
      submitTime: '2026-05-06 21:05', status: 'submitted'
    },
    {
      id: 'QC-20260506-0098',
      type: 'im2', typeLabel: '中间体2质检单',
      date: '2026-05-06', shift: '夜班', team: '乙班',
      processes: ['果糖色谱'], device: '—', round: '—',
      itemsCount: 1, exceedCount: 0, creator: '马晓东',
      sampleTime: '2026-05-06 21:50',
      submitTime: '2026-05-06 22:38', status: 'rejected', rejectReason: '果糖浓度数据异常，请重新检验'
    },
    {
      id: 'QC-20260506-0095',
      type: 'qc', typeLabel: '质检科检验单',
      date: '2026-05-06', shift: '白班', team: '甲班',
      processes: ['成品阿洛酮糖'], device: '—', round: '—',
      sampleTime: '2026-05-06 15:20',
      inspectTime: '2026-05-06 15:40',
      itemsCount: 3, exceedCount: 0, creator: '王五',
      submitTime: '2026-05-06 16:50', status: 'reviewed'
    },
    {
      id: 'QC-20260513-0011',
      type: 'qc', typeLabel: '质检科检验单',
      date: '2026-05-13', shift: '白班', team: '甲班',
      processes: ['成品阿洛酮糖', '包装'], device: '—', round: '—',
      sampleTime: '2026-05-13 09:15',
      inspectTime: '2026-05-13 09:40',
      itemsCount: 6, exceedCount: 0, creator: '王五',
      submitTime: '—', status: 'draft'
    },
    {
      id: 'QC-20260506-0090',
      type: 'fermentation', typeLabel: '发酵工段质检单',
      date: '2026-05-06', shift: '白班', team: '丙班',
      processes: ['发酵罐'], device: 'F1#', round: '4h',
      itemsCount: 5, exceedCount: 0, creator: '陈刚',
      submitTime: '—', status: 'draft'
    }
  ],

  // ===== 检验记录表：由工序检验各单「工序 × 检验项目 × 测定值」展开，供汇总报表 =====
  qualityInspectionReportRows: [
    { billId: 'QC-20260507-0021', billType: 'im1', billTypeLabel: '中间体检验', date: '2026-05-07', shift: '白班', team: '甲班', division: '中间体 1', process: '阿糖脱色', device: '—', item: 'PH', specText: '6.0 ~ 7.0', unit: '—', measuredValue: '6.72', result: '合格', exceed: false, inspector: '李四' },
    { billId: 'QC-20260507-0021', billType: 'im1', billTypeLabel: '中间体检验', date: '2026-05-07', shift: '白班', team: '甲班', division: '中间体 1', process: '阿糖脱色', device: '—', item: '电导', specText: '≤ 50 μS/cm', unit: 'μS/cm', measuredValue: '38', result: '合格', exceed: false, inspector: '李四' },
    { billId: 'QC-20260507-0021', billType: 'im1', billTypeLabel: '中间体检验', date: '2026-05-07', shift: '白班', team: '甲班', division: '中间体 1', process: '阿糖脱色', device: '—', item: '色度', specText: '≤ 20 度', unit: '度', measuredValue: '12', result: '合格', exceed: false, inspector: '李四' },
    { billId: 'QC-20260507-0021', billType: 'im1', billTypeLabel: '中间体检验', date: '2026-05-07', shift: '白班', team: '甲班', division: '中间体 1', process: '阿糖脱色', device: '—', item: '浓度', specText: '40 ~ 50 %', unit: '%', measuredValue: '44.2', result: '合格', exceed: false, inspector: '李四' },
    { billId: 'QC-20260506-0085', billType: 'im1', billTypeLabel: '中间体检验', date: '2026-05-06', shift: '夜班', team: '乙班', division: '中间体 2', process: '果糖色谱', device: '—', item: '果糖浓度', specText: '40 ~ 60 %', unit: '%', measuredValue: '48.1', result: '合格', exceed: false, inspector: '马晓东' },
    { billId: 'QC-20260506-0085', billType: 'im1', billTypeLabel: '中间体检验', date: '2026-05-06', shift: '夜班', team: '乙班', division: '中间体 2', process: '阿糖异构', device: '3#', item: 'PH', specText: '6.0 ~ 7.5', unit: '—', measuredValue: '6.9', result: '合格', exceed: false, inspector: '马晓东' },
    { billId: 'QC-20260506-0085', billType: 'im1', billTypeLabel: '中间体检验', date: '2026-05-06', shift: '夜班', team: '乙班', division: '中间体 2', process: '阿糖异构', device: '3#', item: '浓度', specText: '40 ~ 60 %', unit: '%', measuredValue: '62.5', result: '不合格', exceed: true, inspector: '马晓东' },
    { billId: 'QC-20260506-0095', billType: 'qc', billTypeLabel: '质检科检验', date: '2026-05-06', shift: '白班', team: '甲班', division: '—', process: '成品阿洛酮糖', device: '—', item: '阿洛酮糖含量', specText: '≥ 95 %', unit: '%', measuredValue: '97.2', result: '合格', exceed: false, inspector: '王五' },
    { billId: 'QC-20260506-0095', billType: 'qc', billTypeLabel: '质检科检验', date: '2026-05-06', shift: '白班', team: '甲班', division: '—', process: '成品阿洛酮糖', device: '—', item: 'PH', specText: '6.0 ~ 7.5', unit: '—', measuredValue: '6.55', result: '合格', exceed: false, inspector: '王五' },
    { billId: 'QC-20260506-0095', billType: 'qc', billTypeLabel: '质检科检验', date: '2026-05-06', shift: '白班', team: '甲班', division: '—', process: '成品阿洛酮糖', device: '—', item: '水分', specText: '≤ 5 %', unit: '%', measuredValue: '3.1', result: '合格', exceed: false, inspector: '王五' },
    { billId: 'QC-20260513-0011', billType: 'qc', billTypeLabel: '质检科检验', date: '2026-05-13', shift: '白班', team: '甲班', division: '—', process: '包装', device: '—', item: 'PH', specText: '6.0 ~ 7.5', unit: '—', measuredValue: '6.4', result: '合格', exceed: false, inspector: '王五' },
    { billId: 'QC-20260513-0011', billType: 'qc', billTypeLabel: '质检科检验', date: '2026-05-13', shift: '白班', team: '甲班', division: '—', process: '包装', device: '—', item: '水分', specText: '≤ 5 %', unit: '%', measuredValue: '4.2', result: '合格', exceed: false, inspector: '王五' },
    { billId: 'QC-20260513-0011', billType: 'qc', billTypeLabel: '质检科检验', date: '2026-05-13', shift: '白班', team: '甲班', division: '—', process: '包装', device: '—', item: '阿洛酮糖含量', specText: '≥ 95 %', unit: '%', measuredValue: '96.0', result: '合格', exceed: false, inspector: '王五' },
    { billId: 'QC-20260507-0023', billType: 'fermentation', billTypeLabel: '发酵工段质检', date: '2026-05-07', shift: '白班', team: '甲班', division: '—', process: '一级种子罐', device: 'A罐', item: 'PH', specText: '6.5 ~ 7.5', unit: '—', measuredValue: '7.8', result: '超规格', exceed: true, inspector: '张三' },
    { billId: 'QC-20260507-0023', billType: 'fermentation', billTypeLabel: '发酵工段质检', date: '2026-05-07', shift: '白班', team: '甲班', division: '—', process: '一级种子罐', device: 'A罐', item: 'OD值（10倍）', specText: '0.3 ~ 0.6', unit: '—', measuredValue: '0.48', result: '合格', exceed: false, inspector: '张三' },
    { billId: 'QC-20260507-0022', billType: 'fermentation', billTypeLabel: '发酵工段质检', date: '2026-05-07', shift: '白班', team: '甲班', division: '—', process: '二级种子罐', device: 'B罐', item: 'PH', specText: '6.5 ~ 7.5', unit: '—', measuredValue: '7.0', result: '合格', exceed: false, inspector: '张三' },
    { billId: 'QC-20260506-0098', billType: 'im2', billTypeLabel: '中间体2质检', date: '2026-05-06', shift: '夜班', team: '乙班', division: '—', process: '果糖色谱', device: '—', item: '果糖浓度', specText: '40 ~ 60 %', unit: '%', measuredValue: '39.2', result: '不合格', exceed: true, inspector: '马晓东' }
  ],

  // ===== 4类质检单的工序+检验项目映射（来自PRD 3.1.2~3.1.5） =====
  qualityFormConfig: {
    // 发酵工段质检：3个工序，每工序对应设备列表，检验项目相对统一
    fermentation: {
      label: '发酵工段质检单',
      mode: 'multi', // 支持多选工序+设备+检验次序，批量录入多条记录
      processes: [
        { name: '一级种子罐', devices: ['A罐', 'B罐', 'C罐'] },
        { name: '二级种子罐', devices: ['A罐', 'B罐', 'C罐'] },
        { name: '发酵罐', devices: ['F1#', 'F2#', 'F3#'] }
      ],
      rounds: ['空白', '初始样', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h'],
      // 默认检验项目（实际由质检模板配置驱动）
      items: [
        { name: 'PH', dataType: '数值型', unit: '—', specMin: '6.5', specMax: '7.5', desc: '正常发酵范围', required: true },
        { name: 'OD值（10倍）', dataType: '数值型', unit: '—', specMin: '0.3', specMax: '0.6', desc: '生长稳定期OD范围', required: true },
        { name: 'OD值（100倍）', dataType: '数值型', unit: '—', specMin: '0.03', specMax: '0.06', desc: '稀释100倍OD', required: true },
        { name: '温度', dataType: '数值型', unit: '℃', specMin: '30', specMax: '35', desc: 'SCADA自动回填', required: false },
        { name: '镜检', dataType: '文本型', unit: '—', specMin: '—', specMax: '—', desc: '细胞形态正常/异常', required: false }
      ]
    },
    // 中间体检验（《中间体检验》）：列表含检验工序分组（与新建页一致）；记录编号、取样时间、班次班组、检验结果等
    im1: {
      label: '中间体检验单',
      mode: 'single', // 单工序逐条录入
      processes: [
        { name: '阿糖脱色', devices: [] },
        { name: '离交', devices: [] },
        { name: '离交后的蒸发（新蒸发四效）', devices: [] },
        { name: '重相脱色', devices: [] },
        { name: 'AD1混床', devices: ['1#', '2#'] },
        { name: 'AD1脱味', devices: ['1#', '2#'] },
        { name: 'AD2脱味', devices: [] },
        { name: '重相3#', devices: [] },
        { name: '水混床', devices: [] },
        { name: 'AD2脱色', devices: [] }
      ],
      items: [
        { name: 'PH', dataType: '数值型', unit: '—', specMin: '6.0', specMax: '7.0', desc: '中性偏弱酸', required: true },
        { name: '电导', dataType: '数值型', unit: 'μS/cm', specMin: '—', specMax: '50', desc: '电导率上限50 μS/cm，越低越好', required: true },
        { name: '色度', dataType: '数值型', unit: '度', specMin: '—', specMax: '20', desc: '色度上限20度', required: true },
        { name: '浓度', dataType: '数值型', unit: '%', specMin: '40', specMax: '50', desc: '工艺要求浓度区间', required: true }
      ]
    },
    // 中间体2：8个工序，每个工序的检验项目不同
    im2: {
      label: '中间体2质检单',
      mode: 'single',
      processes: [
        { name: '果糖来料', devices: [], items: ['浓度', 'PH'] },
        { name: '果糖色谱', devices: [], items: ['果糖浓度'] },
        { name: '阿糖异构', devices: ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#'], items: ['PH', '浓度'] },
        { name: '离交', devices: [], items: ['PH', '浓度'] },
        { name: 'A97色谱', devices: ['进水', '进料'], itemsByDevice: {
          '进水': ['PH'],
          '进料': ['电导', 'PH']
        }},
        { name: 'A97四效', devices: [], items: ['浓度', 'PH'] },
        { name: 'AD2蒸发（AD2二效）', devices: [], items: ['浓度', 'PH'] },
        { name: '成品液体阿糖（重相三效）', devices: [], items: ['浓度', 'PH'] }
      ],
      // 检验项目元数据（被工序items引用）
      itemsMeta: {
        'PH': { dataType: '数值型', unit: '—', specMin: '6.0', specMax: '7.5', desc: 'PH值', required: true },
        '浓度': { dataType: '数值型', unit: '%', specMin: '40', specMax: '60', desc: '浓度', required: true },
        '果糖浓度': { dataType: '数值型', unit: '%', specMin: '40', specMax: '60', desc: '果糖含量', required: true },
        '电导': { dataType: '数值型', unit: 'μS/cm', specMin: '—', specMax: '50', desc: '电导率', required: true }
      }
    },
    // 质检科：21个工序（详见PRD 3.1.5）
    qc: {
      label: '质检科检验单',
      mode: 'single',
      processes: [
        { name: '发酵罐', devices: ['A罐', 'B罐', 'C罐'], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量', '转化率'] },
        { name: '储液罐', devices: [], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量', '转化率'] },
        { name: '果糖来料', devices: [], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '果糖色谱', devices: ['提取液罐(AD)', '提余液罐(BD)'], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '果糖蒸发', devices: [], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '阿糖异构', devices: ['1#'], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '阿糖脱色', devices: [], items: ['色度'] },
        { name: '离交', devices: [], items: ['色度'] },
        { name: '离交后的蒸发', devices: [], items: ['色度', '干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: 'A97色谱', devices: ['提取液罐1#(AD1)', '提取液罐2#(AD2)', '提余液罐(BD)'], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: 'AD1脱味后的蒸发', devices: [], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '煮糖（预结晶/浓缩）', devices: ['1#', '2#', '3#'], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '离心分离', devices: ['1#', '2#', '3#'], items: ['水分', '干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '摇摆筛', devices: [], items: ['PH', '水分', '阿洛酮糖含量'] },
        { name: '包装', devices: [], items: ['PH', '水分', '阿洛酮糖含量'] },
        { name: 'AD2蒸发', devices: [], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量', '色度'] },
        { name: '成品液体阿糖', devices: [], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '纳膜重相', devices: [], items: ['干物质', '果糖含量', '葡萄糖含量', '麦芽糖含量', '阿洛酮糖含量'] },
        { name: '成品阿洛酮糖', devices: [], items: ['阿洛酮糖含量', 'PH', '水分'] },
        { name: '成品固体阿糖发货', devices: [], items: ['阿洛酮糖含量'] },
        { name: '清液头/清液中/清液尾/浓缩液', devices: [], items: ['酶活'] }
      ],
      itemsMeta: {
        'PH': { dataType: '数值型', unit: '—', specMin: '6.0', specMax: '7.5', desc: 'PH', required: true },
        '水分': { dataType: '数值型', unit: '%', specMin: '—', specMax: '5', desc: '水分含量上限5%', required: true },
        '阿洛酮糖含量': { dataType: '数值型', unit: '%', specMin: '95', specMax: '—', desc: '阿洛酮糖含量', required: true },
        '果糖含量': { dataType: '数值型', unit: '%', specMin: '—', specMax: '—', desc: '果糖含量', required: false },
        '葡萄糖含量': { dataType: '数值型', unit: '%', specMin: '—', specMax: '—', desc: '葡萄糖含量', required: false },
        '麦芽糖含量': { dataType: '数值型', unit: '%', specMin: '—', specMax: '—', desc: '麦芽糖含量', required: false },
        '干物质': { dataType: '数值型', unit: '%', specMin: '—', specMax: '—', desc: '干物质比例', required: true },
        '转化率': { dataType: '数值型', unit: '%', specMin: '—', specMax: '—', desc: '转化率', required: false },
        '色度': { dataType: '数值型', unit: '度', specMin: '—', specMax: '20', desc: '色度上限20度', required: true },
        '酶活': { dataType: '数值型', unit: 'U/mL', specMin: '—', specMax: '—', desc: '酶活力', required: true }
      }
    }
  },

  // ===== 操作记录（详情页用） =====
  oplog: [
    {
      time: '2026-05-07 10:15', user: '张三', action: '编辑保存', type: 'edit',
      diff: [
        { field: 'PH值', old: '6.8', new: '7.1' },
        { field: 'OD值', old: '0.42', new: '0.45' },
        { field: '浓度', old: '12.3%', new: '12.6%' }
      ]
    },
    {
      time: '2026-05-07 09:45', user: '张三', action: '正式提交', type: 'submit'
    },
    {
      time: '2026-05-07 09:32', user: 'SCADA系统', action: '系统自动回填', type: 'edit',
      diff: [
        { field: '温度（℃）', old: '—', new: '32.5' },
        { field: '罐压（MPa）', old: '—', new: '0.045' }
      ]
    },
    {
      time: '2026-05-07 09:30', user: '张三', action: '编辑保存', type: 'edit',
      diff: [
        { field: '检验次序', old: '空白', new: '1h' }
      ]
    },
    {
      time: '2026-05-07 09:00', user: '张三', action: '创建', type: 'create'
    }
  ],

  // ===== 原始记录列表 =====
  recordList: [
    { id: 'REC-20260507-0512', type: 'F42果糖检验', date: '2026-05-07', shift: '白班', team: '甲班', process: 'F42果糖来料', rows: 1, scada: false, creator: '陈刚', status: 'submitted' },
    { id: 'REC-20260507-0510', type: '发酵', date: '2026-05-07', shift: '白班', team: '甲班', process: '发酵罐F1#', rows: 8, scada: true, creator: '张三', status: 'submitted' },
    { id: 'REC-20260507-0508', type: '色谱', date: '2026-05-07', shift: '白班', team: '甲班', process: '色谱A塔', rows: 6, scada: true, creator: '王伟', status: 'draft' },
    { id: 'REC-20260507-0506', type: '蒸发', date: '2026-05-07', shift: '白班', team: '甲班', process: '蒸发四效', rows: 4, scada: true, creator: '李明', status: 'reviewed' },
    { id: 'REC-20260506-0498', type: '离心机', date: '2026-05-06', shift: '夜班', team: '乙班', process: '离心机1#', rows: 3, scada: false, creator: '赵亮', status: 'reviewed' },
    { id: 'REC-20260506-0495', type: '包装', date: '2026-05-06', shift: '夜班', team: '乙班', process: '包装线1', rows: 12, scada: false, creator: '钱丽', status: 'rejected', rejectReason: '包装数量与产量不匹配' },
    { id: 'REC-20260506-0490', type: '糖化异构', date: '2026-05-06', shift: '夜班', team: '乙班', process: '异构柱2#', rows: 5, scada: true, creator: '孙强', status: 'reviewed' }
  ],

  // ===== 17类原始记录表的字段模板（来自PRD 3.2.3~3.2.18） =====
  recordFormConfig: {
    'F42果糖检验': {
      mode: 'single-row', // 单行表单
      sections: [{
        title: 'F42果糖检验', fields: [
          { name: '日期', type: 'date', required: true },
          { name: '批次', type: 'text', required: true, placeholder: '原料批次号' },
          { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] },
          { name: '取样时间', type: 'time', required: true },
          { name: '浓度', type: 'number', required: true, unit: '%', min: 1, max: 100, step: 0.1 },
          { name: '果糖含量', type: 'number', required: true, unit: '%', min: 1, step: 0.01 },
          { name: '有无异味', type: 'select', required: true, options: ['无', '有'] },
          { name: '有无杂质', type: 'select', required: true, options: ['无', '有'] },
          { name: '取样人', type: 'text', required: true, autoFill: true },
          { name: '化验员', type: 'text', required: true },
          { name: '审核', type: 'text', required: false, hint: '提交后由审核人填写' }
        ]
      }]
    },
    '发酵': {
      mode: 'multi-row', // 多行时序表
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] },
        { name: '工序', type: 'select', required: true, options: ['一级种子罐', '二级种子罐', '发酵罐', '发酵储液罐'] },
        { name: '设备', type: 'select', required: true, options: ['A罐', 'B罐', 'C罐', 'F1#', 'F2#', 'F3#'] },
        { name: '批次', type: 'text', required: true }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '发酵时长', type: 'number', unit: 'h', width: 90 },
        { name: 'PH值', type: 'number', required: true, step: 0.01, min: 1, max: 14, width: 90 },
        { name: 'OD值（10倍）', type: 'number', required: true, width: 110 },
        { name: 'OD值（100倍）', type: 'number', required: true, width: 110 },
        { name: '镜检（10倍）', type: 'select', options: ['正常', '异常'], width: 100 },
        { name: '镜检（100倍）', type: 'select', options: ['正常', '异常'], width: 100 },
        { name: '温度', type: 'number', unit: '℃', scada: true, width: 90 },
        { name: '罐压', type: 'number', unit: 'MPa', scada: true, step: 0.001, width: 90 }
      ]
    },
    '色谱': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] },
        { name: '色谱类型', type: 'select', required: true, options: ['F97色谱', 'A97色谱'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: 'F97-AD-浓度', type: 'number', unit: '%', step: 0.1 },
        { name: 'F97-AD-含量', type: 'number', unit: '%', step: 0.01 },
        { name: 'F97-BD-浓度', type: 'number', unit: '%' },
        { name: 'F97-BD-含量', type: 'number', unit: '%' },
        { name: 'A97-AD1-浓度', type: 'number', unit: '%' },
        { name: 'A97-AD1-含量', type: 'number', unit: '%' },
        { name: 'A97-AD2-浓度', type: 'number', unit: '%' },
        { name: 'A97-AD2-含量', type: 'number', unit: '%' },
        { name: 'A97-BD-浓度', type: 'number', unit: '%' },
        { name: 'A97-BD-含量', type: 'number', unit: '%' }
      ]
    },
    '糖化异构': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] },
        { name: '工段', type: 'text', required: true }
      ],
      rowFields: [
        { name: '罐号', type: 'select', required: true, options: ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#'], width: 80 },
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '浓度', type: 'number', required: true, unit: '%', width: 90 },
        { name: '满罐温度', type: 'number', required: true, unit: '℃', scada: true, width: 100 },
        { name: '满罐PH', type: 'number', required: true, step: 0.01, width: 90 },
        { name: '满罐-果糖', type: 'number', unit: '%', width: 90 },
        { name: '满罐-葡萄糖', type: 'number', unit: '%', width: 100 },
        { name: '满罐-麦芽糖', type: 'number', unit: '%', width: 100 },
        { name: '满罐-阿糖', type: 'number', unit: '%', width: 90 },
        { name: '出料-果糖', type: 'number', unit: '%', width: 90 },
        { name: '出料-葡萄糖', type: 'number', unit: '%', width: 100 },
        { name: '加酶量-体积', type: 'number', unit: 'm³', width: 100 },
        { name: '加酶量', type: 'number', unit: 'm³', width: 90 }
      ]
    },
    '脱色': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] },
        { name: '工段', type: 'select', required: true, options: ['脱色'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '位号', type: 'text', required: true, width: 100 },
        { name: '进料压力', type: 'number', required: true, unit: 'MPa', max: 0.6, scada: true, width: 110 },
        { name: '料液情况', type: 'select', options: ['正常', '异常'], width: 100 },
        { name: '加炭量', type: 'number', unit: 'm³/h', width: 90 },
        { name: '活性炭使用量', type: 'number', unit: 'kg', width: 110 },
        { name: '活性炭名称', type: 'text', width: 110 },
        { name: '活性炭厂家', type: 'text', width: 110 },
        { name: '活性炭批次', type: 'text', width: 100 },
        { name: '活性炭情况', type: 'text', width: 110 }
      ]
    },
    '离交': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '离交-浓度', type: 'number', unit: '%', width: 100 },
        { name: '离交-PH', type: 'number', step: 0.01, width: 90 },
        { name: '离交-电导', type: 'number', unit: 'μS/cm', width: 100 },
        { name: 'AD1混床-浓度', type: 'number', unit: '%', width: 110 },
        { name: 'AD1混床-PH', type: 'number', step: 0.01, width: 100 },
        { name: 'AD1混床-电导', type: 'number', unit: 'μS/cm', width: 110 },
        { name: 'AD1混床-温度', type: 'number', unit: '℃', scada: true, width: 110 },
        { name: 'AD1脱味-浓度', type: 'number', unit: '%', width: 110 },
        { name: 'AD1脱味-PH', type: 'number', step: 0.01, width: 100 },
        { name: 'AD1脱味-品味', type: 'select', options: ['正常', '异常'], width: 100 }
      ]
    },
    '超滤': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '供料泵频率', type: 'number', required: true, unit: 'Hz', scada: true, width: 110 },
        { name: '过滤器进口压力', type: 'number', required: true, unit: 'MPa', scada: true, width: 130 },
        { name: '过滤器出口压力', type: 'number', required: true, unit: 'MPa', scada: true, width: 130 },
        { name: '工作温度', type: 'number', required: true, unit: '℃', scada: true, width: 100 },
        { name: '一级增压泵频率', type: 'number', required: true, unit: 'Hz', width: 130 },
        { name: '一级流量', type: 'number', required: true, unit: 'm³/h', scada: true, width: 100 },
        { name: '产水流量', type: 'number', required: true, unit: 'm³/h', scada: true, width: 100 },
        { name: '浓液流量', type: 'number', required: true, unit: 'm³/h', width: 100 }
      ]
    },
    '纳滤': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '一级循环泵频率', type: 'number', unit: 'Hz', width: 130 },
        { name: '一级增压泵频率', type: 'number', unit: 'Hz', width: 130 },
        { name: '一级进口压力', type: 'number', unit: 'MPa', scada: true, width: 120 },
        { name: '一级出口压力', type: 'number', unit: 'MPa', scada: true, width: 120 },
        { name: '一级流量', type: 'number', unit: 'm³/h', scada: true, width: 100 },
        { name: '五级循环泵频率', type: 'number', unit: 'Hz', width: 130 },
        { name: '五级流量', type: 'number', unit: 'm³/h', width: 100 }
      ]
    },
    '蒸发': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '新蒸发-进料流量', type: 'number', unit: 'm³/h', scada: true, width: 130 },
        { name: '新蒸发-出料浓度', type: 'number', unit: '%', width: 130 },
        { name: 'A97蒸发-进料流量', type: 'number', unit: 'm³/h', scada: true, width: 140 },
        { name: 'A97蒸发-出料浓度', type: 'number', unit: '%', width: 140 },
        { name: 'AD2蒸发-进料流量', type: 'number', unit: 'm³/h', scada: true, width: 140 },
        { name: 'AD2蒸发-出料浓度', type: 'number', unit: '%', width: 140 },
        { name: '重相蒸发-出料浓度', type: 'number', unit: '%', width: 150 }
      ]
    },
    '煮糖': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '罐号', type: 'select', required: true, options: ['1#', '2#', '3#'], width: 70 },
        { name: '检验时间', type: 'time', required: true, width: 100 },
        { name: '阿贝测浓', type: 'number', required: true, unit: '%', width: 100 },
        { name: '显示浓度', type: 'number', required: true, unit: '%', scada: true, width: 100 },
        { name: '料位', type: 'number', unit: 'T', width: 80 },
        { name: '真空度', type: 'number', unit: 'mbar', scada: true, width: 100 },
        { name: '蒸汽压力', type: 'number', unit: 'bar', scada: true, width: 100 },
        { name: '蒸汽温度', type: 'number', unit: '℃', scada: true, width: 100 },
        { name: '煮糖温度', type: 'number', unit: '℃', scada: true, width: 100 },
        { name: '搅拌电流', type: 'number', unit: 'A', scada: true, width: 100 },
        { name: '出料时间', type: 'time', width: 100 },
        { name: '出料吨数', type: 'number', unit: 'T', width: 100 },
        { name: '出料浓度', type: 'number', unit: '%', width: 100 },
        { name: '出料罐号', type: 'text', width: 100 }
      ]
    },
    '结晶': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '结晶机编号', type: 'select', required: true, options: ['1#', '2#', '3#'], width: 110 },
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '进料时间', type: 'time', width: 100 },
        { name: '放料时间', type: 'time', width: 100 },
        { name: '放料温度', type: 'number', unit: '℃', scada: true, width: 100 },
        { name: '降温时长', type: 'number', unit: 'h', width: 100 },
        { name: '阶段一温度', type: 'number', unit: '℃', scada: true, width: 110 },
        { name: '阶段二温度', type: 'number', unit: '℃', scada: true, width: 110 },
        { name: '阶段三温度', type: 'number', unit: '℃', scada: true, width: 110 },
        { name: '阶段四温度', type: 'number', unit: '℃', scada: true, width: 110 }
      ]
    },
    '离心机': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] },
        { name: '离心机编号', type: 'select', required: true, options: ['1#', '2#', '3#'] }
      ],
      rowFields: [
        { name: '进料时间', type: 'time', required: true, width: 100 },
        { name: '出料时间', type: 'time', required: true, width: 100 },
        { name: '离心时长（min）', type: 'number', required: true, unit: 'min', width: 130, hint: '可由进出料时间自动计算' },
        { name: '水分', type: 'number', required: true, unit: '%', width: 90 }
      ]
    },
    '烘干': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '热风温度', type: 'number', required: true, unit: '℃', max: 100, scada: true, width: 110 },
        { name: '冷风温度', type: 'number', required: true, unit: '℃', max: 100, scada: true, width: 110 },
        { name: '回风管道压力', type: 'number', required: true, unit: 'Pa', scada: true, width: 130 },
        { name: '回风管道温度', type: 'number', required: true, unit: '℃', scada: true, width: 130 }
      ]
    },
    '包装': {
      mode: 'mixed', // 含包装检验、包装物使用、包装质检三块
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      sections: [
        {
          title: '包装检验数据（每袋/每批）', mode: 'multi-row',
          rowFields: [
            { name: '批号', type: 'text', required: true, width: 100 },
            { name: '水分', type: 'number', required: true, unit: '%', max: 100, width: 90 },
            { name: '阿糖含量', type: 'number', required: true, unit: '%', min: 1, width: 100 },
            { name: '浓度', type: 'number', unit: '%', width: 90 },
            { name: 'PH', type: 'number', required: true, min: 1, max: 14, step: 0.1, width: 90 },
            { name: '净重', type: 'number', required: true, unit: 'kg', width: 90 }
          ]
        },
        {
          title: '包装物使用记录', mode: 'multi-row',
          rowFields: [
            { name: '包装物名称', type: 'select', required: true, options: ['白纸塑袋', '黄纸塑袋', '内膜袋', '其他'], width: 130 },
            { name: '上班结存', type: 'number', required: true, width: 100 },
            { name: '本班领用', type: 'number', required: true, width: 100 },
            { name: '本班耗用', type: 'number', required: true, width: 100 },
            { name: '作废损坏', type: 'number', width: 100 },
            { name: '本班结存', type: 'number', autoCalc: true, width: 100, hint: '= 上班结存+本班领用-本班耗用-作废损坏' }
          ]
        },
        {
          title: '包装质检（CJ-ALTT-12新）', mode: 'single-row',
          fields: [
            { name: '外观污染', type: 'select', options: ['正常', '异常'] },
            { name: '有无破损', type: 'select', options: ['正常', '异常'] },
            { name: '有无异物', type: 'select', options: ['正常', '异常'] },
            { name: '印刷情况', type: 'select', options: ['正常', '异常'] },
            { name: '抽检-第一袋', type: 'number', unit: 'kg' },
            { name: '抽检-第二袋', type: 'number', unit: 'kg' },
            { name: '抽检-第三袋', type: 'number', unit: 'kg' },
            { name: '抽检-平均', type: 'number', unit: 'kg', autoCalc: true },
            { name: '生产日期', type: 'date' },
            { name: '生产批号', type: 'text' },
            { name: '内外封口情况', type: 'select', options: ['严密整齐', '异常'] },
            { name: '热合温度', type: 'text' },
            { name: '热合时间', type: 'text' },
            { name: '缝包情况', type: 'select', options: ['正常', '异常'] },
            { name: '备注', type: 'text' }
          ]
        }
      ]
    },
    '摇摆筛': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '时间', type: 'time', required: true, width: 90 },
        { name: '摇摆筛电机', type: 'select', required: true, options: ['正常', '异常'], width: 110 },
        { name: '筛网杂物', type: 'select', required: true, options: ['无', '有'], width: 100 },
        { name: '产品目数', type: 'text', required: true, width: 100 },
        { name: '备注', type: 'text', width: 160 }
      ]
    },
    'QC检查': {
      mode: 'multi-row',
      header: [
        { name: '日期', type: 'date', required: true },
        { name: '班次', type: 'select', required: true, options: ['白班', '夜班'] }
      ],
      rowFields: [
        { name: '糖计划-品种', type: 'text', required: true, width: 110 },
        { name: '糖计划-浓度', type: 'number', required: true, unit: '%', width: 110 },
        { name: '色度', type: 'number', required: true, unit: '度', width: 90 },
        { name: '阿洛酮糖含量', type: 'number', required: true, unit: '%', width: 130 },
        { name: 'PH', type: 'number', required: true, min: 1, max: 14, step: 0.1, width: 90 },
        { name: '电导', type: 'number', required: true, unit: 'μS/cm', width: 100 },
        { name: '数量', type: 'number', unit: 'T', width: 90 },
        { name: '去成品罐号', type: 'text', width: 110 }
      ]
    }
  },

  // ===== 发酵记录列表 =====
  fermentationList: [
    { id: 'FM-20260507-0012', type: '发酵生产记录', level: '20KL发酵罐', batch: 'F1#-20260507', rows: 24, configTime: '—', creator: '张三', date: '2026-05-07', status: 'submitted' },
    { id: 'FM-20260507-0011', type: '发酵配料表', level: '发酵罐底料', batch: 'F1#-20260507', rows: 8, configTime: '2026-05-07 06:30', creator: '张三', date: '2026-05-07', status: 'reviewed' },
    { id: 'FM-20260506-0010', type: '发酵生产记录', level: '2000L种子罐', batch: 'S2-20260506', rows: 18, configTime: '—', creator: '陈刚', date: '2026-05-06', status: 'reviewed' },
    { id: 'FM-20260506-0009', type: '发酵配料表', level: '一级种子罐', batch: 'S1-20260506', rows: 5, configTime: '2026-05-06 22:00', creator: '钱丽', date: '2026-05-06', status: 'reviewed' }
  ],

  // ===== 班报表列表 =====
  shiftList: [
    { id: 'SR-20260507-0034', type: '辅料班报表', date: '2026-05-07', shift: '白班', team: '甲班', overuse: false, creator: '赵六', status: 'submitted' },
    { id: 'SR-20260507-0033', type: '发酵班报表', date: '2026-05-07', shift: '白班', team: '甲班', overuse: false, creator: '赵六', status: 'submitted' },
    { id: 'SR-20260506-0032', type: '辅料班报表', date: '2026-05-06', shift: '夜班', team: '乙班', overuse: true, creator: '孙强', status: 'reviewed' },
    { id: 'SR-20260506-0031', type: '发酵班报表', date: '2026-05-06', shift: '夜班', team: '乙班', overuse: false, creator: '孙强', status: 'reviewed' }
  ],

  // ===== 来料检验（来自《需求文档_副本.xlsx》质检科检验） =====
  incomingInspectionFields: [
    { key: 'id', label: '记录编号', query: '模糊查询', sortable: true, required: false, source: '系统自动生成' },
    { key: 'sampleTime', label: '取样时间', type: 'datetime-local', query: '时间范围查询，精确到分钟', sortable: true, required: true, source: '表单录入' },
    { key: 'batchNo', label: '批次号', type: 'text', query: '模糊查询', sortable: false, required: true, source: '表单录入' },
    { key: 'shift', label: '班次', type: 'select', options: ['白班', '夜班'], query: '下拉单选', sortable: false, required: true, source: '表单录入' },
    { key: 'team', label: '班组', type: 'select', options: ['甲班', '乙班', '丙班'], query: '下拉单选', sortable: false, required: true, source: '表单录入' },
    { key: 'fructoseConcentration', label: '果糖浓度', type: 'number', unit: '%', query: '/', sortable: false, required: true, source: '表单录入' },
    { key: 'fructoseContent', label: '果糖含量', type: 'number', unit: '%', query: '/', sortable: false, required: true, source: '从质检科的检验数据中选择' },
    { key: 'odor', label: '有无异味', type: 'select', options: ['无', '有'], query: '/', sortable: false, required: true, source: '表单录入' },
    { key: 'impurity', label: '有无杂质', type: 'select', options: ['无', '有'], query: '/', sortable: false, required: true, source: '表单录入' },
    { key: 'result', label: '测定结果', type: 'select', options: ['合格', '不合格'], query: '下拉单选', sortable: false, required: false, source: '系统判断：任一检验项目不合格则该条数据不合格' },
    { key: 'sampler', label: '取样人', type: 'text', query: '/', sortable: false, required: true, source: '表单录入' },
    { key: 'chemist', label: '化验员', type: 'text', query: '/', sortable: false, required: true, source: '默认当前填写用户' },
    { key: 'status', label: '状态', type: 'status', query: '下拉单选', sortable: false, required: false, source: '系统状态' },
    { key: 'creator', label: '创建人', type: 'text', query: '/', sortable: false, required: false, source: '数据创建人姓名' },
    { key: 'createdAt', label: '创建时间', type: 'datetime', query: '/', sortable: true, defaultSort: 'desc', required: false, source: '输出创建时间，列表默认按创建时间倒序' }
  ],
  incomingInspectionList: [
    { id: 'IQC-20260512-0008', sampleTime: '2026-05-12 08:40', batchNo: 'F42-20260512-A01', shift: '白班', team: '甲班', fructoseConcentration: '42.5', fructoseContent: '96.8', odor: '无', impurity: '无', result: '合格', sampler: '陈刚', chemist: '王五', status: 'submitted', creator: '王五', createdAt: '2026-05-12 09:10' },
    { id: 'IQC-20260512-0007', sampleTime: '2026-05-12 07:35', batchNo: 'F42-20260512-A00', shift: '白班', team: '甲班', fructoseConcentration: '41.2', fructoseContent: '95.9', odor: '无', impurity: '无', result: '合格', sampler: '陈刚', chemist: '王五', status: 'reviewed', creator: '王五', createdAt: '2026-05-12 08:05' },
    { id: 'IQC-20260511-0032', sampleTime: '2026-05-11 21:20', batchNo: 'F42-20260511-N05', shift: '夜班', team: '乙班', fructoseConcentration: '39.8', fructoseContent: '94.1', odor: '无', impurity: '有', result: '不合格', sampler: '孙强', chemist: '马晓东', status: 'rejected', creator: '马晓东', createdAt: '2026-05-11 22:00' },
    { id: 'IQC-20260511-0031', sampleTime: '2026-05-11 19:05', batchNo: 'F42-20260511-D03', shift: '白班', team: '丙班', fructoseConcentration: '43.0', fructoseContent: '97.2', odor: '无', impurity: '无', result: '合格', sampler: '李明', chemist: '王五', status: 'draft', creator: '王五', createdAt: '2026-05-11 19:20' }
  ],
  incomingInspectionOpLog: [
    {
      time: '2026-05-12 09:10',
      user: '王五',
      action: '正式提交',
      type: 'submit'
    },
    {
      time: '2026-05-12 09:02',
      user: '王五',
      action: '编辑保存',
      type: 'edit',
      diff: [
        { field: '果糖浓度', old: '42.1%', new: '42.5%' },
        { field: '化验员', old: '—', new: '王五' }
      ]
    },
    {
      time: '2026-05-12 08:55',
      user: '王五',
      action: '从质检科检验数据选择果糖含量',
      type: 'edit',
      diff: [
        { field: '果糖含量', old: '—', new: '96.8%' }
      ]
    },
    {
      time: '2026-05-12 08:50',
      user: '王五',
      action: '创建',
      type: 'create'
    }
  ],

  // ===== 成品检验记录（《成品检验记录.xlsx》） / 成品日检验报告 + 金属探测器 CCP 明细 =====
  finishedProductInspectionFields: [
    { key: 'id', label: '记录编号', query: '模糊查询', sortable: true, source: '系统自动生成' },
    { key: 'inspectTime', label: '检验时间', type: 'datetime-local', query: '时间范围', sortable: true, source: '表单录入' },
    { key: 'shift', label: '班次', type: 'select', options: ['白班', '夜班'], query: '下拉', sortable: false, source: '表单录入' },
    { key: 'team', label: '班组', type: 'select', options: ['甲班', '乙班', '丙班'], query: '下拉', sortable: false, source: '表单录入' },
    { key: 'batchNo', label: '批次号', type: 'text', query: '模糊', sortable: false, source: '表单录入' },
    { key: 'inspectResult', label: '检验结果', type: 'passfail', query: '/', sortable: false, source: '全部子项正常为正常，否则异常' },
    { key: 'inspector', label: '检验人', type: 'text', query: '/', sortable: false, source: '表单录入' },
    { key: 'linkedReport', label: '关联检验报告', type: 'link', query: '/', sortable: false, source: '汇总至成品日检验报告后显示报告编号' },
    { key: 'status', label: '状态', type: 'fpstatus', query: '下拉', sortable: false, source: '草稿/待审核/已通过/已驳回' },
    { key: 'creator', label: '创建人', type: 'text', query: '/', sortable: false, source: '/' },
    { key: 'createdAt', label: '创建时间', type: 'datetime', query: '/', sortable: true, defaultSort: 'desc', source: '/' }
  ],
  finishedProductInspectionList: [
    {
      id: 'FPI-20260513-0003',
      inspectTime: '2026-05-13 14:20',
      shift: '白班',
      team: '甲班',
      batchNo: 'PKG-20260513-A',
      fe15: true,
      sus: true,
      no11: true,
      totalBags: 1200,
      passBags: 1200,
      abnormal: '',
      correction: '',
      inspectResult: '正常',
      inspector: '王五',
      linkedReport: 'FPR-20260513-DAY',
      status: '已通过',
      creator: '王五',
      createdAt: '2026-05-13 14:35'
    },
    {
      id: 'FPI-20260513-0002',
      inspectTime: '2026-05-13 10:00',
      shift: '白班',
      team: '甲班',
      batchNo: 'PKG-20260513-B',
      fe15: true,
      sus: false,
      no11: true,
      totalBags: 800,
      passBags: 780,
      abnormal: 'Sus 通道一次异常已复测',
      correction: '重新校准后复测合格',
      inspectResult: '异常',
      inspector: '赵六',
      linkedReport: '—',
      status: '草稿',
      creator: '赵六',
      createdAt: '2026-05-13 10:25'
    },
    {
      id: 'FPI-20260512-0001',
      inspectTime: '2026-05-12 22:10',
      shift: '夜班',
      team: '乙班',
      batchNo: 'PKG-20260512-N',
      fe15: true,
      sus: true,
      no11: true,
      totalBags: 600,
      passBags: 600,
      abnormal: '',
      correction: '',
      inspectResult: '正常',
      inspector: '马晓东',
      linkedReport: 'FPR-20260512-NIGHT',
      status: '待审核',
      creator: '马晓东',
      createdAt: '2026-05-12 22:40'
    }
  ],
  finishedProductDayReportList: [
    {
      id: 'FPR-20260513-DAY',
      reportNo: 'FPR-20260513-DAY',
      inspectDate: '2026-05-13',
      shift: '白班',
      team: '甲班',
      batchNo: 'PKG-20260513-A',
      status: '已通过',
      recordCount: 1,
      recorder: '王五',
      reviewer: '刘七',
      reviewDate: '2026-05-13',
      formCode: 'CJ(HA)-02',
      ccpName: '金属探测器（小包）',
      hazard: 'P:金属异物',
      criticalLimit: '终产品中不得存在：Φ≥1.5mm 铁金属、Φ≥2.0mm 的非铁金属和 Φ≥2.5mm 的不锈钢金属异物',
      monitorFreq: '班前、班后、班中每两小时验证（厂家每年校验一次）',
      detailRows: [
        { time: '08:00', fe15: true, sus: true, nonFe: true, totalBags: 400, passBags: 400, abnormal: '', correction: '' },
        { time: '10:00', fe15: true, sus: true, nonFe: true, totalBags: 400, passBags: 400, abnormal: '', correction: '' },
        { time: '14:20', fe15: true, sus: true, nonFe: true, totalBags: 400, passBags: 400, abnormal: '', correction: '' }
      ],
      remark: '交接班时已对金探设备进行空试。',
      note: '交接班时需对金探设备进行空试，再每 2 小时测试并记录；打 √ 表示正常，打 × 表示异常。'
    },
    {
      id: 'FPR-20260512-NIGHT',
      reportNo: 'FPR-20260512-NIGHT',
      inspectDate: '2026-05-12',
      shift: '夜班',
      team: '乙班',
      batchNo: 'PKG-20260512-N',
      status: '待审核',
      recordCount: 1,
      recorder: '马晓东',
      reviewer: '',
      reviewDate: '',
      formCode: 'CJ(HA)-02',
      ccpName: '金属探测器（小包）',
      hazard: 'P:金属异物',
      criticalLimit: '终产品中不得存在：Φ≥1.5mm 铁金属、Φ≥2.0mm 的非铁金属和 Φ≥2.5mm 的不锈钢金属异物',
      monitorFreq: '班前、班后、班中每两小时验证（厂家每年校验一次）',
      detailRows: [
        { time: '22:10', fe15: true, sus: true, nonFe: true, totalBags: 600, passBags: 600, abnormal: '', correction: '' }
      ],
      remark: '',
      note: '交接班时需对金探设备进行空试，再每 2 小时测试并记录；打 √ 表示正常，打 × 表示异常。'
    }
  ],

  // ===== 辅料班报表 - 物料清单（来自PRD 3.4.2） =====
  auxReportConfig: {
    auxiliaries: [
      { name: '活性炭', unit: 'kg' },
      { name: '盐酸', unit: 't' },
      { name: '液碱', unit: 't' },
      { name: '硅藻土', unit: 'kg' },
      { name: '珍珠岩', unit: 'kg' },
      { name: '纯碱', unit: 'kg' },
      { name: '99.7%酒精', unit: 'L' },
      { name: '75%酒精', unit: 'L' }
    ],
    rawMaterials: [
      { name: 'F42干基' },
      { name: 'BD回葡萄糖' },
      { name: '重相回干基' }
    ],
    energy: [
      { name: '自来水', unit: 't' },
      { name: '纯水', unit: 't' },
      { name: '电', unit: '度' },
      { name: '汽', unit: 't' },
      { name: '污水', unit: 'm³' }
    ]
  },

  // ===== 发酵班报表 - 辅料清单（来自PRD 3.4.2） =====
  fmReportConfig: {
    auxiliaries: [
      { name: '四环素', unit: 'kg' },
      { name: '磷酸', unit: 'kg' },
      { name: '氨水', unit: 'kg' },
      { name: '消泡剂', unit: 'kg' },
      { name: '75%乙醇', unit: 'L' },
      { name: '99.7%乙醇', unit: 'L' },
      { name: '酵母粉', unit: 'kg' },
      { name: '胰蛋白胨', unit: 'kg' },
      { name: '氯化钠', unit: 'kg' },
      { name: '大豆蛋白胨', unit: 'kg' },
      { name: '玉米浆干粉', unit: 'kg' },
      { name: '柠檬酸三铵', unit: 'kg' },
      { name: '甘油', unit: 'kg' },
      { name: '磷酸氢二钾', unit: 'kg' },
      { name: '磷酸二氢钾', unit: 'kg' },
      { name: '硫酸镁', unit: 'kg' },
      { name: '氯化钙', unit: 'kg' },
      { name: '硫酸锌', unit: 'g' },
      { name: '硫酸锰', unit: 'g' },
      { name: '氯化铁', unit: 'g' },
      { name: '硫酸铜', unit: 'g' },
      { name: '氯化钴', unit: 'kg' },
      { name: '骨蛋白胨', unit: 'kg' }
    ]
  },

  // ===== 发酵生产记录 - 5种规格的字段差异（来自PRD 3.3.2） =====
  fmProductionConfig: {
    levels: ['100mL摇瓶', '20L种子罐', '200L种子罐', '2000L种子罐', '20KL发酵罐'],
    initFields: [
      { name: '罐体积', type: 'number', required: true, unit: 'mL/L' },
      { name: '培养液体积', type: 'number', required: true, unit: 'mL/L' },
      { name: '初始pH', type: 'number', required: true, step: 0.01 },
      { name: '转速', type: 'number', required: true, unit: 'rpm' },
      { name: '温度', type: 'number', required: true, unit: '℃' },
      { name: '空气流量', type: 'number', required: true, unit: 'L/min或VVM' },
      { name: '压力', type: 'number', required: true, unit: 'bar' },
      { name: '初始OD', type: 'number' }
    ],
    rowFields: [
      { name: '日期', type: 'date', required: true, width: 130 },
      { name: '时间', type: 'time', required: true, width: 90 },
      { name: 'pH', type: 'number', required: true, step: 0.01, width: 80 },
      { name: '转速', type: 'number', unit: 'rpm', width: 80 },
      { name: '温度', type: 'number', unit: '℃', scada: true, width: 80, applies: ['20L种子罐', '200L种子罐', '2000L种子罐', '20KL发酵罐'] },
      { name: '空气流量', type: 'number', width: 100 },
      { name: '压力', type: 'number', unit: 'bar', scada: true, width: 80 },
      { name: 'DO', type: 'number', unit: '%', width: 80, applies: ['20L种子罐', '200L种子罐', '2000L种子罐', '20KL发酵罐'] },
      { name: 'OD', type: 'number', width: 80 },
      { name: '镜检', type: 'select', options: ['正常', '异常'], width: 90 },
      { name: '酶活', type: 'number', width: 80, applies: ['100mL摇瓶', '20KL发酵罐'] },
      { name: '备注', type: 'text', width: 140 }
    ]
  },

  // ===== 用户管理 =====
  users: [
    { username: 'wangshangge', name: '王尚革', org: '生产管理部', roles: ['系统管理员'], status: true, lastLogin: '2026-05-07 09:00' },
    { username: 'zhangsan', name: '张三', org: '发酵车间-甲班', roles: ['操作人员（发酵工段）'], status: true, lastLogin: '2026-05-07 08:00' },
    { username: 'lisi', name: '李四', org: '中间体车间-甲班', roles: ['操作人员（中间体1）'], status: true, lastLogin: '2026-05-07 08:05' },
    { username: 'wangwu', name: '王五', org: '质检科', roles: ['质检科人员'], status: true, lastLogin: '2026-05-06 16:00' },
    { username: 'zhaoliu', name: '赵六', org: '发酵车间-甲班', roles: ['班组长'], status: true, lastLogin: '2026-05-07 07:50' },
    { username: 'liuqi', name: '刘七', org: '生产管理部', roles: ['生产管理人员'], status: true, lastLogin: '2026-05-07 09:30' },
    { username: 'maxiaodong', name: '马晓东', org: '中间体车间-乙班', roles: ['操作人员（中间体2）'], status: true, lastLogin: '2026-05-06 22:00' },
    { username: 'qianli', name: '钱丽', org: '发酵车间-丙班', roles: ['操作人员（发酵工段）'], status: false, lastLogin: '2026-04-20 15:00' }
  ],

  // ===== 角色 =====
  roles: [
    { name: '系统管理员', desc: '全系统配置权限', userCount: 1, builtin: true },
    { name: '操作人员（发酵工段）', desc: '发酵工段质检+原始记录录入', userCount: 12, builtin: true },
    { name: '操作人员（中间体1）', desc: '中间体检验录入（检验工序分组含中间体1/中间体2）', userCount: 6, builtin: true },
    { name: '操作人员（中间体2）', desc: '中间体2质检录入', userCount: 6, builtin: true },
    { name: '质检科人员', desc: '质检科检验录入', userCount: 4, builtin: true },
    { name: '班组长', desc: '所辖班组数据查看与审核', userCount: 9, builtin: true },
    { name: '生产管理人员', desc: '全部数据查看与审核', userCount: 3, builtin: true }
  ],

  // ===== 组织 =====
  orgs: [
    { name: '阿洛酮糖股份有限公司', type: '公司', children: [
      { name: '生产部', type: '部门', children: [
        { name: '发酵车间', type: '车间', children: [
          { name: '甲班', type: '班组', users: 4 },
          { name: '乙班', type: '班组', users: 4 },
          { name: '丙班', type: '班组', users: 4 }
        ]},
        { name: '中间体车间', type: '车间', children: [
          { name: '甲班', type: '班组', users: 4 },
          { name: '乙班', type: '班组', users: 4 },
          { name: '丙班', type: '班组', users: 4 }
        ]}
      ]},
      { name: '质检科', type: '部门', users: 4 },
      { name: '生产管理部', type: '部门', users: 3 }
    ]}
  ],

  // ===== 检验项目主数据 =====
  inspectionItems: [
    { code: 'PH', name: 'PH', dataType: '数值型', enabled: true, refCount: 8, desc: '酸碱度' },
    { code: 'OD', name: 'OD值', dataType: '数值型', enabled: true, refCount: 4, desc: '光密度' },
    { code: 'CONC', name: '浓度', dataType: '数值型', enabled: true, refCount: 12, desc: '溶液浓度（百分比）' },
    { code: 'COND', name: '电导率', dataType: '数值型', enabled: true, refCount: 10, desc: '溶液导电能力' },
    { code: 'COLOR', name: '色度', dataType: '数值型', enabled: true, refCount: 8, desc: '溶液颜色深浅' },
    { code: 'AL_CONTENT', name: '阿洛酮糖含量', dataType: '数值型', enabled: true, refCount: 3, desc: '阿洛酮糖纯度' },
    { code: 'MICRO', name: '镜检', dataType: '文本型', enabled: true, refCount: 1, desc: '显微镜观察结果' },
    { code: 'ENZ', name: '酶活', dataType: '数值型', enabled: false, refCount: 1, desc: '酶活力（已停用）' }
  ],

  // ===== 质检模板配置 =====
  templates: [
    {
      formType: '发酵工段质检单',
      processes: ['一级种子罐', '二级种子罐', '发酵罐'],
      items: [
        { name: 'PH', dataType: '数值型', unit: '—', specMin: '6.5', specMax: '7.5', desc: '正常发酵范围', freq: '每1小时1次', required: true, enabled: true },
        { name: 'OD值', dataType: '数值型', unit: '—', specMin: '0.3', specMax: '0.6', desc: '生长稳定期OD范围', freq: '每1小时1次', required: true, enabled: true },
        { name: '温度', dataType: '数值型', unit: '℃', specMin: '30', specMax: '35', desc: 'SCADA自动回填', freq: '每1小时1次', required: false, enabled: true },
        { name: '镜检', dataType: '文本型', unit: '—', specMin: '—', specMax: '—', desc: '观察细胞形态', freq: '每4小时1次', required: false, enabled: true }
      ]
    },
    {
      formType: '中间体检验单',
      processes: ['阿糖脱色', '离交', '离交后的蒸发'],
      items: [
        { name: 'PH', dataType: '数值型', unit: '—', specMin: '6.0', specMax: '7.0', desc: '中性偏弱酸', freq: '每批次1次', required: true, enabled: true },
        { name: '电导率', dataType: '数值型', unit: 'μS/cm', specMin: '—', specMax: '50', desc: '越低越好', freq: '每批次1次', required: true, enabled: true },
        { name: '色度', dataType: '数值型', unit: '度', specMin: '—', specMax: '20', desc: '色度上限20', freq: '每批次1次', required: true, enabled: true },
        { name: '浓度', dataType: '数值型', unit: '%', specMin: '40', specMax: '50', desc: '工艺要求', freq: '每批次1次', required: true, enabled: true }
      ]
    }
  ],

  // ===== 基础数据 =====
  processManagementList: [
    { code: 'PB', name: '平板', stage: '发酵', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:30:15', updatedBy: '王尚革', updatedAt: '2026-05-12 08:30:15' },
    { code: 'YY', name: '一级摇瓶', stage: '发酵', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:31:20', updatedBy: '王尚革', updatedAt: '2026-05-12 08:31:20' },
    { code: 'EY', name: '二级摇瓶', stage: '发酵', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:32:30', updatedBy: '王尚革', updatedAt: '2026-05-12 08:32:30' },
    { code: 'ZZ', name: '20L种子罐', stage: '发酵', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:33:45', updatedBy: '王尚革', updatedAt: '2026-05-12 08:33:45' },
    { code: 'YK', name: '一级种子罐扩培', stage: '发酵', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:34:10', updatedBy: '王尚革', updatedAt: '2026-05-12 08:34:10' },
    { code: 'EK', name: '二级种子罐扩培', stage: '发酵', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:35:25', updatedBy: '王尚革', updatedAt: '2026-05-12 08:35:25' },
    { code: 'FJ', name: '发酵', stage: '发酵', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:36:40', updatedBy: '王尚革', updatedAt: '2026-05-12 08:36:40' },
    { code: 'GL', name: '果糖来料', stage: '果糖色谱分离', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:37:55', updatedBy: '王尚革', updatedAt: '2026-05-12 08:37:55' },
    { code: 'GS', name: 'F97色谱分离', stage: '果糖色谱分离', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:38:10', updatedBy: '王尚革', updatedAt: '2026-05-12 08:38:10' },
    { code: 'GZ', name: '果糖蒸发', stage: '果糖色谱分离', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:39:25', updatedBy: '王尚革', updatedAt: '2026-05-12 08:39:25' },
    { code: 'YG', name: '异构', stage: '阿糖异构', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:40:40', updatedBy: '王尚革', updatedAt: '2026-05-12 08:40:40' },
    { code: 'TS', name: '脱色', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:41:15', updatedBy: '王尚革', updatedAt: '2026-05-12 08:41:15' },
    { code: 'LJ', name: '离交', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:42:30', updatedBy: '王尚革', updatedAt: '2026-05-12 08:42:30' },
    { code: 'ZF', name: '蒸发', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:43:45', updatedBy: '王尚革', updatedAt: '2026-05-12 08:43:45' },
    { code: 'AS', name: 'A97色谱', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:44:20', updatedBy: '王尚革', updatedAt: '2026-05-12 08:44:20' },
    { code: 'HC', name: 'AD1混床', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:45:35', updatedBy: '王尚革', updatedAt: '2026-05-12 08:45:35' },
    { code: 'TW', name: 'AD1脱味', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:46:50', updatedBy: '王尚革', updatedAt: '2026-05-12 08:46:50' },
    { code: 'AZ', name: 'A97蒸发', stage: '蒸发结晶', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:47:05', updatedBy: '王尚革', updatedAt: '2026-05-12 08:47:05' },
    { code: 'YJ', name: '预结晶', stage: '蒸发结晶', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:48:20', updatedBy: '王尚革', updatedAt: '2026-05-12 08:48:20' },
    { code: 'JJ', name: '结晶', stage: '蒸发结晶', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:49:35', updatedBy: '王尚革', updatedAt: '2026-05-12 08:49:35' },
    { code: 'LX', name: '离心', stage: '离心烘干', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:50:50', updatedBy: '王尚革', updatedAt: '2026-05-12 08:50:50' },
    { code: 'HG', name: '烘干', stage: '离心烘干', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:51:05', updatedBy: '王尚革', updatedAt: '2026-05-12 08:51:05' },
    { code: 'BZ', name: '包装', stage: '固体包装', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:52:20', updatedBy: '王尚革', updatedAt: '2026-05-12 08:52:20' },
    { code: 'JT', name: '金探', stage: '固体包装', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:53:35', updatedBy: '王尚革', updatedAt: '2026-05-12 08:53:35' },
    { code: 'AT', name: '阿糖脱色', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:53:50', updatedBy: '王尚革', updatedAt: '2026-05-12 08:53:50' },
    { code: 'LZF', name: '离交后的蒸发（新蒸发四效）', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:54:05', updatedBy: '王尚革', updatedAt: '2026-05-12 08:54:05' },
    { code: 'ZXT', name: '重相脱色', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:54:20', updatedBy: '王尚革', updatedAt: '2026-05-12 08:54:20' },
    { code: 'AD2W', name: 'AD2脱味', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:54:35', updatedBy: '王尚革', updatedAt: '2026-05-12 08:54:35' },
    { code: 'ZX3', name: '重相3#', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:54:50', updatedBy: '王尚革', updatedAt: '2026-05-12 08:54:50' },
    { code: 'SHB', name: '水混床', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:55:05', updatedBy: '王尚革', updatedAt: '2026-05-12 08:55:05' },
    { code: 'AD2S', name: 'AD2脱色', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:55:20', updatedBy: '王尚革', updatedAt: '2026-05-12 08:55:20' },
    { code: 'GTSP', name: '果糖色谱', stage: '果糖色谱分离', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:55:35', updatedBy: '王尚革', updatedAt: '2026-05-12 08:55:35' },
    { code: 'ATS', name: '阿糖异构', stage: '阿糖异构', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:55:50', updatedBy: '王尚革', updatedAt: '2026-05-12 08:55:50' },
    { code: 'A97S', name: 'A97四效', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:56:05', updatedBy: '王尚革', updatedAt: '2026-05-12 08:56:05' },
    { code: 'AD2Z', name: 'AD2蒸发（AD2二效）', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:56:20', updatedBy: '王尚革', updatedAt: '2026-05-12 08:56:20' },
    { code: 'CPYT', name: '成品液体阿糖（重相三效）', stage: '固体精制', processType: '流程工序', creator: '王尚革', createdAt: '2026-05-12 08:56:35', updatedBy: '王尚革', updatedAt: '2026-05-12 08:56:35' },
    // 与 qualityFormConfig.qc 工序名称一致，供【检验表单配置】─ 质检科 工序下拉匹配
    { code: 'Q-FJG', name: '发酵罐', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:00:10', updatedBy: '王尚革', updatedAt: '2026-05-12 10:00:10' },
    { code: 'Q-CYG', name: '储液罐', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:00:25', updatedBy: '王尚革', updatedAt: '2026-05-12 10:00:25' },
    { code: 'Q-LJZF', name: '离交后的蒸发', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:00:40', updatedBy: '王尚革', updatedAt: '2026-05-12 10:00:40' },
    { code: 'Q-AD1ZF', name: 'AD1脱味后的蒸发', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:00:55', updatedBy: '王尚革', updatedAt: '2026-05-12 10:00:55' },
    { code: 'Q-ZT', name: '煮糖（预结晶/浓缩）', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:01:10', updatedBy: '王尚革', updatedAt: '2026-05-12 10:01:10' },
    { code: 'Q-LXFL', name: '离心分离', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:01:25', updatedBy: '王尚革', updatedAt: '2026-05-12 10:01:25' },
    { code: 'Q-YBS', name: '摇摆筛', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:01:40', updatedBy: '王尚革', updatedAt: '2026-05-12 10:01:40' },
    { code: 'Q-AD2ZFQ', name: 'AD2蒸发', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:01:55', updatedBy: '王尚革', updatedAt: '2026-05-12 10:01:55' },
    { code: 'Q-CPYTQ', name: '成品液体阿糖', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:02:10', updatedBy: '王尚革', updatedAt: '2026-05-12 10:02:10' },
    { code: 'Q-NMZX', name: '纳膜重相', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:02:25', updatedBy: '王尚革', updatedAt: '2026-05-12 10:02:25' },
    { code: 'Q-CPALT', name: '成品阿洛酮糖', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:02:40', updatedBy: '王尚革', updatedAt: '2026-05-12 10:02:40' },
    { code: 'Q-CPGTH', name: '成品固体阿糖发货', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:02:55', updatedBy: '王尚革', updatedAt: '2026-05-12 10:02:55' },
    { code: 'Q-QYNZ', name: '清液头/清液中/清液尾/浓缩液', stage: '质检科', processType: '质检专用工序', creator: '王尚革', createdAt: '2026-05-12 10:03:10', updatedBy: '王尚革', updatedAt: '2026-05-12 10:03:10' }
  ],
  processManagementLogs: {
    PB: [
      { time: '2026-05-12 09:10:30', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '工段', old: '发酵段', new: '发酵' }] },
      { time: '2026-05-12 08:30:15', user: '王尚革', action: '创建', type: 'create' }
    ],
    FJ: [
      { time: '2026-05-12 09:18:45', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '工序名称', old: '发酵罐', new: '发酵' }] },
      { time: '2026-05-12 08:36:40', user: '王尚革', action: '创建', type: 'create' }
    ],
    AS: [
      { time: '2026-05-12 09:28:20', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '工段', old: '蒸发结晶', new: '固体精制' }] },
      { time: '2026-05-12 08:44:20', user: '王尚革', action: '创建', type: 'create' }
    ]
  },
  deviceManagementList: [
    { code: '1', name: 'A罐', process: '一级种子罐扩培', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:00', updatedBy: '王尚革', updatedAt: '2026-05-12 09:00' },
    { code: '2', name: 'B罐', process: '一级种子罐扩培', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:01', updatedBy: '王尚革', updatedAt: '2026-05-12 09:01' },
    { code: '3', name: 'C罐', process: '一级种子罐扩培', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:02', updatedBy: '王尚革', updatedAt: '2026-05-12 09:02' },
    { code: '4', name: 'A罐', process: '二级种子罐扩培', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:03', updatedBy: '王尚革', updatedAt: '2026-05-12 09:03' },
    { code: '5', name: 'B罐', process: '二级种子罐扩培', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:04', updatedBy: '王尚革', updatedAt: '2026-05-12 09:04' },
    { code: '6', name: 'C罐', process: '二级种子罐扩培', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:05', updatedBy: '王尚革', updatedAt: '2026-05-12 09:05' },
    { code: '7', name: 'A罐', process: '发酵', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:06', updatedBy: '王尚革', updatedAt: '2026-05-12 09:06' },
    { code: '8', name: 'B罐', process: '发酵', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:07', updatedBy: '王尚革', updatedAt: '2026-05-12 09:07' },
    { code: '9', name: 'C罐', process: '发酵', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:08', updatedBy: '王尚革', updatedAt: '2026-05-12 09:08' },
    { code: '10', name: 'AD1#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:09', updatedBy: '王尚革', updatedAt: '2026-05-12 09:09' },
    { code: '11', name: 'AD2#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:10', updatedBy: '王尚革', updatedAt: '2026-05-12 09:10' },
    { code: '12', name: 'AD3#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:11', updatedBy: '王尚革', updatedAt: '2026-05-12 09:11' },
    { code: '13', name: 'AD4#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:12', updatedBy: '王尚革', updatedAt: '2026-05-12 09:12' },
    { code: '14', name: 'AD5#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:13', updatedBy: '王尚革', updatedAt: '2026-05-12 09:13' },
    { code: '15', name: 'AD6#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:14', updatedBy: '王尚革', updatedAt: '2026-05-12 09:14' },
    { code: '16', name: 'BD1#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:15', updatedBy: '王尚革', updatedAt: '2026-05-12 09:15' },
    { code: '17', name: 'BD2#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:16', updatedBy: '王尚革', updatedAt: '2026-05-12 09:16' },
    { code: '18', name: 'BD3#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:17', updatedBy: '王尚革', updatedAt: '2026-05-12 09:17' },
    { code: '19', name: 'BD4#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:18', updatedBy: '王尚革', updatedAt: '2026-05-12 09:18' },
    { code: '20', name: 'BD5#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:19', updatedBy: '王尚革', updatedAt: '2026-05-12 09:19' },
    { code: '21', name: 'BD6#', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:20', updatedBy: '王尚革', updatedAt: '2026-05-12 09:20' },
    { code: '22', name: 'AD', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:21', updatedBy: '王尚革', updatedAt: '2026-05-12 09:21' },
    { code: '23', name: 'BD', process: 'F97色谱分离', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:22', updatedBy: '王尚革', updatedAt: '2026-05-12 09:22' },
    { code: '24', name: '1#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:23', updatedBy: '王尚革', updatedAt: '2026-05-12 09:23' },
    { code: '25', name: '2#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:24', updatedBy: '王尚革', updatedAt: '2026-05-12 09:24' },
    { code: '26', name: '3#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:25', updatedBy: '王尚革', updatedAt: '2026-05-12 09:25' },
    { code: '27', name: '4#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:26', updatedBy: '王尚革', updatedAt: '2026-05-12 09:26' },
    { code: '28', name: '5#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:27', updatedBy: '王尚革', updatedAt: '2026-05-12 09:27' },
    { code: '29', name: '6#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:28', updatedBy: '王尚革', updatedAt: '2026-05-12 09:28' },
    { code: '30', name: '7#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:29', updatedBy: '王尚革', updatedAt: '2026-05-12 09:29' },
    { code: '31', name: '8#', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:30', updatedBy: '王尚革', updatedAt: '2026-05-12 09:30' },
    { code: '32', name: '水膜除尘', process: '离交', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:31', updatedBy: '王尚革', updatedAt: '2026-05-12 09:31' },
    { code: '33', name: '甜水', process: '离交', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:32', updatedBy: '王尚革', updatedAt: '2026-05-12 09:32' },
    { code: '34', name: '污水', process: '离交', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:33', updatedBy: '王尚革', updatedAt: '2026-05-12 09:33' },
    { code: '35', name: 'AD1 1#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:34', updatedBy: '王尚革', updatedAt: '2026-05-12 09:34' },
    { code: '36', name: 'AD1 2#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:35', updatedBy: '王尚革', updatedAt: '2026-05-12 09:35' },
    { code: '37', name: 'AD1 3#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:36', updatedBy: '王尚革', updatedAt: '2026-05-12 09:36' },
    { code: '38', name: 'AD1 4#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:37', updatedBy: '王尚革', updatedAt: '2026-05-12 09:37' },
    { code: '39', name: 'AD1 5#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:38', updatedBy: '王尚革', updatedAt: '2026-05-12 09:38' },
    { code: '40', name: 'AD1 6#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:39', updatedBy: '王尚革', updatedAt: '2026-05-12 09:39' },
    { code: '41', name: 'AD2 1#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:40', updatedBy: '王尚革', updatedAt: '2026-05-12 09:40' },
    { code: '42', name: 'AD2 2#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:41', updatedBy: '王尚革', updatedAt: '2026-05-12 09:41' },
    { code: '43', name: 'AD2 3#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:42', updatedBy: '王尚革', updatedAt: '2026-05-12 09:42' },
    { code: '44', name: 'AD2 4#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:43', updatedBy: '王尚革', updatedAt: '2026-05-12 09:43' },
    { code: '45', name: 'AD2 5#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:44', updatedBy: '王尚革', updatedAt: '2026-05-12 09:44' },
    { code: '46', name: 'AD2 6#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:45', updatedBy: '王尚革', updatedAt: '2026-05-12 09:45' },
    { code: '47', name: 'BD1 1#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:46', updatedBy: '王尚革', updatedAt: '2026-05-12 09:46' },
    { code: '48', name: 'BD1 2#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:47', updatedBy: '王尚革', updatedAt: '2026-05-12 09:47' },
    { code: '49', name: 'BD1 3#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:48', updatedBy: '王尚革', updatedAt: '2026-05-12 09:48' },
    { code: '50', name: 'BD1 4#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:49', updatedBy: '王尚革', updatedAt: '2026-05-12 09:49' },
    { code: '51', name: 'BD1 5#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:50', updatedBy: '王尚革', updatedAt: '2026-05-12 09:50' },
    { code: '52', name: 'BD1 6#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:51', updatedBy: '王尚革', updatedAt: '2026-05-12 09:51' },
    { code: '53', name: 'BD2 1#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:52', updatedBy: '王尚革', updatedAt: '2026-05-12 09:52' },
    { code: '54', name: 'BD2 2#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:53', updatedBy: '王尚革', updatedAt: '2026-05-12 09:53' },
    { code: '55', name: 'BD2 3#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:54', updatedBy: '王尚革', updatedAt: '2026-05-12 09:54' },
    { code: '56', name: 'BD2 4#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:55', updatedBy: '王尚革', updatedAt: '2026-05-12 09:55' },
    { code: '57', name: 'BD2 5#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:56', updatedBy: '王尚革', updatedAt: '2026-05-12 09:56' },
    { code: '58', name: 'BD2 6#', process: 'A97色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:57', updatedBy: '王尚革', updatedAt: '2026-05-12 09:57' },
    { code: '59', name: '1#', process: 'AD1混床', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:58', updatedBy: '王尚革', updatedAt: '2026-05-12 09:58' },
    { code: '60', name: '2#', process: 'AD1混床', enabled: true, creator: '王尚革', createdAt: '2026-05-12 09:59', updatedBy: '王尚革', updatedAt: '2026-05-12 09:59' },
    { code: '61', name: '1#', process: 'AD1脱味', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:00', updatedBy: '王尚革', updatedAt: '2026-05-12 10:00' },
    { code: '62', name: '2#', process: 'AD1脱味', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:01', updatedBy: '王尚革', updatedAt: '2026-05-12 10:01' },
    { code: '63', name: '脱色线 1#', process: '阿糖脱色', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:02', updatedBy: '王尚革', updatedAt: '2026-05-12 10:02' },
    { code: '64', name: '脱色线 2#', process: '阿糖脱色', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:03', updatedBy: '王尚革', updatedAt: '2026-05-12 10:03' },
    { code: '65', name: '重相脱色 A', process: '重相脱色', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:04', updatedBy: '王尚革', updatedAt: '2026-05-12 10:04' },
    { code: '66', name: '重相脱色 B', process: '重相脱色', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:05', updatedBy: '王尚革', updatedAt: '2026-05-12 10:05' },
    { code: '67', name: '来料罐 T1', process: '果糖来料', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:06', updatedBy: '王尚革', updatedAt: '2026-05-12 10:06' },
    { code: '68', name: '色谱进料泵 P1', process: '果糖色谱', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:07', updatedBy: '王尚革', updatedAt: '2026-05-12 10:07' }
  ],
  deviceManagementLogs: {
    1: [
      { time: '2026-05-12 10:20', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '关联工序', old: '一级种子罐', new: '一级种子罐扩培' }] },
      { time: '2026-05-12 09:00', user: '王尚革', action: '创建', type: 'create' }
    ],
    10: [
      { time: '2026-05-12 10:24', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '设备名称', old: 'AD1', new: 'AD1#' }] },
      { time: '2026-05-12 09:09', user: '王尚革', action: '创建', type: 'create' }
    ]
  },
  inspectionItemManagementList: [
    { name: 'PH', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:10', updatedBy: '王尚革', updatedAt: '2026-05-12 10:10' },
    { name: 'OD', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:11', updatedBy: '王尚革', updatedAt: '2026-05-12 10:11' },
    { name: '干物质', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:12', updatedBy: '王尚革', updatedAt: '2026-05-12 10:12' },
    { name: '果糖含量', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:13', updatedBy: '王尚革', updatedAt: '2026-05-12 10:13' },
    { name: '葡萄糖含量', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:14', updatedBy: '王尚革', updatedAt: '2026-05-12 10:14' },
    { name: '麦芽糖含量', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:15', updatedBy: '王尚革', updatedAt: '2026-05-12 10:15' },
    { name: '阿洛酮糖含量', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:16', updatedBy: '王尚革', updatedAt: '2026-05-12 10:16' },
    { name: '转化率', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:17', updatedBy: '王尚革', updatedAt: '2026-05-12 10:17' },
    { name: '果糖浓度', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:18', updatedBy: '王尚革', updatedAt: '2026-05-12 10:18' },
    { name: '阿洛酮糖浓度', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:19', updatedBy: '王尚革', updatedAt: '2026-05-12 10:19' },
    { name: '电导', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:20', updatedBy: '王尚革', updatedAt: '2026-05-12 10:20' },
    { name: '色度', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:21', updatedBy: '王尚革', updatedAt: '2026-05-12 10:21' },
    { name: '水分', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:22', updatedBy: '王尚革', updatedAt: '2026-05-12 10:22' },
    { name: '酶活', dataType: '文本型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:23', updatedBy: '王尚革', updatedAt: '2026-05-12 10:23' },
    { name: '稀酸', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:24', updatedBy: '王尚革', updatedAt: '2026-05-12 10:24' },
    { name: '稀碱', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:25', updatedBy: '王尚革', updatedAt: '2026-05-12 10:25' },
    { name: '镜检', dataType: '文本型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:26', updatedBy: '王尚革', updatedAt: '2026-05-12 10:26' },
    { name: '有无异味', dataType: '布尔型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:27', updatedBy: '王尚革', updatedAt: '2026-05-12 10:27' },
    { name: '有无杂质', dataType: '布尔型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:28', updatedBy: '王尚革', updatedAt: '2026-05-12 10:28' },
    { name: '品味', dataType: '文本型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:29', updatedBy: '王尚革', updatedAt: '2026-05-12 10:29' },
    { name: '阿贝测浓', dataType: '数值型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:30', updatedBy: '王尚革', updatedAt: '2026-05-12 10:30' },
    { name: '筛完有无杂物', dataType: '文本型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:31', updatedBy: '王尚革', updatedAt: '2026-05-12 10:31' },
    { name: '铁（Fe）1.5mm', dataType: '布尔型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:32', updatedBy: '王尚革', updatedAt: '2026-05-12 10:32' },
    { name: '不锈钢（Sus）', dataType: '布尔型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:33', updatedBy: '王尚革', updatedAt: '2026-05-12 10:33' },
    { name: 'NO11-Fe2.0mm', dataType: '布尔型', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:34', updatedBy: '王尚革', updatedAt: '2026-05-12 10:34' }
  ],
  inspectionItemManagementLogs: {
    PH: [
      { time: '2026-05-12 10:40', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '数据类型', old: '文本型', new: '数值型' }] },
      { time: '2026-05-12 10:10', user: '王尚革', action: '创建', type: 'create' }
    ],
    '有无异味': [
      { time: '2026-05-12 10:45', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '数据类型', old: '文本型', new: '布尔型' }] },
      { time: '2026-05-12 10:27', user: '王尚革', action: '创建', type: 'create' }
    ]
  },
  auxiliaryMaterialList: [
    { code: '1', name: '硫酸锰', manufacturer: '江苏科伦多食品配料有限公司', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:50', updatedBy: '王尚革', updatedAt: '2026-05-12 10:50' },
    { code: '2', name: '酶制剂', manufacturer: '山东福宽生物工程有限公司', process: '异构', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:51', updatedBy: '王尚革', updatedAt: '2026-05-12 10:51' },
    { code: '3', name: '炭', manufacturer: '江苏良友', process: '脱色', enabled: true, creator: '王尚革', createdAt: '2026-05-12 10:52', updatedBy: '王尚革', updatedAt: '2026-05-12 10:52' }
  ],
  auxiliaryMaterialLogs: {
    1: [
      { time: '2026-05-12 11:05', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '生产厂家', old: '江苏科伦多', new: '江苏科伦多食品配料有限公司' }] },
      { time: '2026-05-12 10:50', user: '王尚革', action: '创建', type: 'create' }
    ],
    2: [
      { time: '2026-05-12 11:08', user: '王尚革', action: '编辑保存', type: 'edit', diff: [{ field: '使用工序', old: '发酵', new: '异构' }] },
      { time: '2026-05-12 10:51', user: '王尚革', action: '创建', type: 'create' }
    ]
  },
  inspectionFormDepartments: [
    { code: 'QC', name: '质检科', configCount: 88, updatedBy: '王尚革', updatedAt: '2026-05-12 11:20' },
    { code: 'IM', name: '中间体', configCount: 53, updatedBy: '王尚革', updatedAt: '2026-05-13 12:00' }
  ],
  inspectionFormConfigs: {
    // 质检科：工序×检验项目与 qualityFormConfig.qc 完全一致（21 工序、itemsMeta 规格同步）
    QC: [
      { id: 'QC-FRM-001', process: '发酵罐', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-002', process: '发酵罐', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-003', process: '发酵罐', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-004', process: '发酵罐', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-005', process: '发酵罐', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-006', process: '发酵罐', item: '转化率', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '转化率', required: false, enabled: true },
      { id: 'QC-FRM-007', process: '储液罐', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-008', process: '储液罐', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-009', process: '储液罐', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-010', process: '储液罐', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-011', process: '储液罐', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-012', process: '储液罐', item: '转化率', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '转化率', required: false, enabled: true },
      { id: 'QC-FRM-013', process: '果糖来料', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-014', process: '果糖来料', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-015', process: '果糖来料', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-016', process: '果糖来料', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-017', process: '果糖来料', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-018', process: '果糖色谱', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-019', process: '果糖色谱', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-020', process: '果糖色谱', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-021', process: '果糖色谱', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-022', process: '果糖色谱', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-023', process: '果糖蒸发', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-024', process: '果糖蒸发', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-025', process: '果糖蒸发', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-026', process: '果糖蒸发', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-027', process: '果糖蒸发', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-028', process: '阿糖异构', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-029', process: '阿糖异构', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-030', process: '阿糖异构', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-031', process: '阿糖异构', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-032', process: '阿糖异构', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-033', process: '阿糖脱色', item: '色度', dataType: '数值型', unit: '度', specMin: '—', specMax: '20', standard: '色度上限20度', required: true, enabled: true },
      { id: 'QC-FRM-034', process: '离交', item: '色度', dataType: '数值型', unit: '度', specMin: '—', specMax: '20', standard: '色度上限20度', required: true, enabled: true },
      { id: 'QC-FRM-035', process: '离交后的蒸发', item: '色度', dataType: '数值型', unit: '度', specMin: '—', specMax: '20', standard: '色度上限20度', required: true, enabled: true },
      { id: 'QC-FRM-036', process: '离交后的蒸发', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-037', process: '离交后的蒸发', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-038', process: '离交后的蒸发', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-039', process: '离交后的蒸发', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-040', process: '离交后的蒸发', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-041', process: 'A97色谱', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-042', process: 'A97色谱', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-043', process: 'A97色谱', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-044', process: 'A97色谱', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-045', process: 'A97色谱', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-046', process: 'AD1脱味后的蒸发', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-047', process: 'AD1脱味后的蒸发', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-048', process: 'AD1脱味后的蒸发', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-049', process: 'AD1脱味后的蒸发', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-050', process: 'AD1脱味后的蒸发', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-051', process: '煮糖（预结晶/浓缩）', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-052', process: '煮糖（预结晶/浓缩）', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-053', process: '煮糖（预结晶/浓缩）', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-054', process: '煮糖（预结晶/浓缩）', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-055', process: '煮糖（预结晶/浓缩）', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-056', process: '离心分离', item: '水分', dataType: '数值型', unit: '%', specMin: '—', specMax: '5', standard: '水分含量上限5%', required: true, enabled: true },
      { id: 'QC-FRM-057', process: '离心分离', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-058', process: '离心分离', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-059', process: '离心分离', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-060', process: '离心分离', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-061', process: '离心分离', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-062', process: '摇摆筛', item: 'PH', dataType: '数值型', unit: '—', specMin: '6.0', specMax: '7.5', standard: 'PH', required: true, enabled: true },
      { id: 'QC-FRM-063', process: '摇摆筛', item: '水分', dataType: '数值型', unit: '%', specMin: '—', specMax: '5', standard: '水分含量上限5%', required: true, enabled: true },
      { id: 'QC-FRM-064', process: '摇摆筛', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-065', process: '包装', item: 'PH', dataType: '数值型', unit: '—', specMin: '6.0', specMax: '7.5', standard: 'PH', required: true, enabled: true },
      { id: 'QC-FRM-066', process: '包装', item: '水分', dataType: '数值型', unit: '%', specMin: '—', specMax: '5', standard: '水分含量上限5%', required: true, enabled: true },
      { id: 'QC-FRM-067', process: '包装', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-068', process: 'AD2蒸发', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-069', process: 'AD2蒸发', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-070', process: 'AD2蒸发', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-071', process: 'AD2蒸发', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-072', process: 'AD2蒸发', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-073', process: 'AD2蒸发', item: '色度', dataType: '数值型', unit: '度', specMin: '—', specMax: '20', standard: '色度上限20度', required: true, enabled: true },
      { id: 'QC-FRM-074', process: '成品液体阿糖', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-075', process: '成品液体阿糖', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-076', process: '成品液体阿糖', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-077', process: '成品液体阿糖', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-078', process: '成品液体阿糖', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-079', process: '纳膜重相', item: '干物质', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '干物质比例', required: true, enabled: true },
      { id: 'QC-FRM-080', process: '纳膜重相', item: '果糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '果糖含量', required: false, enabled: true },
      { id: 'QC-FRM-081', process: '纳膜重相', item: '葡萄糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '葡萄糖含量', required: false, enabled: true },
      { id: 'QC-FRM-082', process: '纳膜重相', item: '麦芽糖含量', dataType: '数值型', unit: '%', specMin: '—', specMax: '—', standard: '麦芽糖含量', required: false, enabled: true },
      { id: 'QC-FRM-083', process: '纳膜重相', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-084', process: '成品阿洛酮糖', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-085', process: '成品阿洛酮糖', item: 'PH', dataType: '数值型', unit: '—', specMin: '6.0', specMax: '7.5', standard: 'PH', required: true, enabled: true },
      { id: 'QC-FRM-086', process: '成品阿洛酮糖', item: '水分', dataType: '数值型', unit: '%', specMin: '—', specMax: '5', standard: '水分含量上限5%', required: true, enabled: true },
      { id: 'QC-FRM-087', process: '成品固体阿糖发货', item: '阿洛酮糖含量', dataType: '数值型', unit: '%', specMin: '95', specMax: '—', standard: '阿洛酮糖含量', required: true, enabled: true },
      { id: 'QC-FRM-088', process: '清液头/清液中/清液尾/浓缩液', item: '酶活', dataType: '数值型', unit: 'U/mL', specMin: '—', specMax: '—', standard: '酶活力', required: true, enabled: true }
    ],
    // 中间体：工序×检验项目来自 qualityFormConfig.im1 / im2（离交合并为一套 PH/电导/色度/浓度）
    IM: [
      {
        "id": "IM-001",
        "process": "阿糖脱色",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-002",
        "process": "阿糖脱色",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-003",
        "process": "阿糖脱色",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-004",
        "process": "阿糖脱色",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-005",
        "process": "离交",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-006",
        "process": "离交",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-007",
        "process": "离交",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-008",
        "process": "离交",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-009",
        "process": "离交后的蒸发（新蒸发四效）",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-010",
        "process": "离交后的蒸发（新蒸发四效）",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-011",
        "process": "离交后的蒸发（新蒸发四效）",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-012",
        "process": "离交后的蒸发（新蒸发四效）",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-013",
        "process": "重相脱色",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-014",
        "process": "重相脱色",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-015",
        "process": "重相脱色",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-016",
        "process": "重相脱色",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-017",
        "process": "AD1混床",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-018",
        "process": "AD1混床",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-019",
        "process": "AD1混床",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-020",
        "process": "AD1混床",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-021",
        "process": "AD1脱味",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-022",
        "process": "AD1脱味",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-023",
        "process": "AD1脱味",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-024",
        "process": "AD1脱味",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-025",
        "process": "AD2脱味",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-026",
        "process": "AD2脱味",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-027",
        "process": "AD2脱味",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-028",
        "process": "AD2脱味",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-029",
        "process": "重相3#",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-030",
        "process": "重相3#",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-031",
        "process": "重相3#",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-032",
        "process": "重相3#",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-033",
        "process": "水混床",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-034",
        "process": "水混床",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-035",
        "process": "水混床",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-036",
        "process": "水混床",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-037",
        "process": "AD2脱色",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.0",
        "standard": "中性偏弱酸",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-038",
        "process": "AD2脱色",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率上限50 μS/cm",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-039",
        "process": "AD2脱色",
        "item": "色度",
        "dataType": "数值型",
        "unit": "度",
        "specMin": "—",
        "specMax": "20",
        "standard": "色度上限20度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-040",
        "process": "AD2脱色",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "50",
        "standard": "工艺要求浓度区间",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-041",
        "process": "果糖来料",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "60",
        "standard": "浓度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-042",
        "process": "果糖来料",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.5",
        "standard": "PH值",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-043",
        "process": "果糖色谱",
        "item": "果糖浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "60",
        "standard": "果糖含量",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-044",
        "process": "阿糖异构",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.5",
        "standard": "PH值",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-045",
        "process": "阿糖异构",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "60",
        "standard": "浓度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-046",
        "process": "A97色谱",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.5",
        "standard": "PH值",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-047",
        "process": "A97色谱",
        "item": "电导",
        "dataType": "数值型",
        "unit": "μS/cm",
        "specMin": "—",
        "specMax": "50",
        "standard": "电导率",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-048",
        "process": "A97四效",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "60",
        "standard": "浓度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-049",
        "process": "A97四效",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.5",
        "standard": "PH值",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-050",
        "process": "AD2蒸发（AD2二效）",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "60",
        "standard": "浓度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-051",
        "process": "AD2蒸发（AD2二效）",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.5",
        "standard": "PH值",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-052",
        "process": "成品液体阿糖（重相三效）",
        "item": "浓度",
        "dataType": "数值型",
        "unit": "%",
        "specMin": "40",
        "specMax": "60",
        "standard": "浓度",
        "required": true,
        "enabled": true
      },
      {
        "id": "IM-053",
        "process": "成品液体阿糖（重相三效）",
        "item": "PH",
        "dataType": "数值型",
        "unit": "—",
        "specMin": "6.0",
        "specMax": "7.5",
        "standard": "PH值",
        "required": true,
        "enabled": true
      }
    
    ]
  },
  /** 中间体检验部门：工序与分组（中间体 1 / 中间体 2）对应关系，供检验表单配置「检验工序分组」页使用 */
  inspectionFormImDivision: [
    
      {
        "id": "IM-D-01",
        "process": "阿糖脱色",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-02",
        "process": "离交后的蒸发（新蒸发四效）",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-03",
        "process": "重相脱色",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-04",
        "process": "AD1混床",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-05",
        "process": "AD1脱味",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-06",
        "process": "AD2脱味",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-07",
        "process": "重相3#",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-08",
        "process": "水混床",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-09",
        "process": "AD2脱色",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-10",
        "process": "离交",
        "division": "中间体 1"
      },
      {
        "id": "IM-D-11",
        "process": "离交",
        "division": "中间体 2"
      },
      {
        "id": "IM-D-12",
        "process": "果糖来料",
        "division": "中间体 2"
      },
      {
        "id": "IM-D-13",
        "process": "果糖色谱",
        "division": "中间体 2"
      },
      {
        "id": "IM-D-14",
        "process": "阿糖异构",
        "division": "中间体 2"
      },
      {
        "id": "IM-D-15",
        "process": "A97色谱",
        "division": "中间体 2"
      },
      {
        "id": "IM-D-16",
        "process": "A97四效",
        "division": "中间体 2"
      },
      {
        "id": "IM-D-17",
        "process": "AD2蒸发（AD2二效）",
        "division": "中间体 2"
      },
      {
        "id": "IM-D-18",
        "process": "成品液体阿糖（重相三效）",
        "division": "中间体 2"
      }
    
  ],
  shifts: [
    { name: '早班', code: 'DAY', desc: '07:30-19:30', sort: 1, enabled: true },
    { name: '晚班', code: 'NIGHT', desc: '19:30-次日07:30', sort: 2, enabled: true }
  ],
  teams: [
    { name: '甲班', code: '01', desc: '—', sort: 1, enabled: true },
    { name: '乙班', code: '02', desc: '—', sort: 2, enabled: true },
    { name: '丙班', code: '03', desc: '—', sort: 3, enabled: true }
  ],
  processes: [
    { name: '一级种子罐', code: 'P-S1', alias: '种子罐1', line: '阿洛酮糖生产线', type: '发酵工段', sort: 1, enabled: true },
    { name: '二级种子罐', code: 'P-S2', alias: '种子罐2', line: '阿洛酮糖生产线', type: '发酵工段', sort: 2, enabled: true },
    { name: '发酵罐', code: 'P-FM', alias: '20KL发酵罐', line: '阿洛酮糖生产线', type: '发酵工段', sort: 3, enabled: true },
    { name: '阿糖脱色', code: 'P-DC1', alias: '一次脱色', line: '阿洛酮糖生产线', type: '中间体1', sort: 4, enabled: true },
    { name: '离交', code: 'P-IX', alias: '阴阳离子交换', line: '阿洛酮糖生产线', type: '中间体1/中间体2共用', sort: 5, enabled: true },
    { name: '果糖色谱', code: 'P-CHRO-F', alias: '色谱-F42', line: '阿洛酮糖生产线', type: '中间体2', sort: 6, enabled: true },
    { name: '蒸发', code: 'P-EVA', alias: '四效蒸发', line: '阿洛酮糖生产线', type: '原始记录', sort: 7, enabled: true }
  ],
  devices: [
    { name: 'A罐', code: 'D-S1-A', process: '一级种子罐', sort: 1, enabled: true },
    { name: 'B罐', code: 'D-S1-B', process: '一级种子罐', sort: 2, enabled: true },
    { name: 'C罐', code: 'D-S1-C', process: '一级种子罐', sort: 3, enabled: true },
    { name: 'F1#', code: 'D-FM-1', process: '发酵罐', sort: 1, enabled: true },
    { name: 'F2#', code: 'D-FM-2', process: '发酵罐', sort: 2, enabled: true },
    { name: '色谱A塔', code: 'D-CHRO-A', process: '果糖色谱', sort: 1, enabled: true },
    { name: '色谱B塔', code: 'D-CHRO-B', process: '果糖色谱', sort: 2, enabled: true }
  ],
  units: [
    { name: '%', display: '百分比', desc: '百分比单位', enabled: true },
    { name: 'μS/cm', display: '微西门子/厘米', desc: '电导率', enabled: true },
    { name: '度', display: '度', desc: '色度等', enabled: true },
    { name: 'h', display: '小时', desc: '时间', enabled: true },
    { name: '℃', display: '摄氏度', desc: '温度', enabled: true },
    { name: 'MPa', display: '兆帕', desc: '压力', enabled: true },
    { name: 'rpm', display: '转/分钟', desc: '转速', enabled: true },
    { name: 'T', display: '吨', desc: '重量', enabled: true }
  ],
  dictionaries: [
    { type: '判定结果', items: [{ name: '合格', code: 'PASS' }, { name: '不合格', code: 'FAIL' }] },
    { type: '检验阶段', items: [{ name: '来料检', code: 'IN' }, { name: '过程检', code: 'PROC' }, { name: '成品检', code: 'OUT' }] },
    { type: '状态', items: [{ name: '草稿', code: 'DRAFT' }, { name: '已提交', code: 'SUBMITTED' }, { name: '已审核', code: 'REVIEWED' }, { name: '被驳回', code: 'REJECTED' }] },
    { type: '镜检结果', items: [{ name: '正常', code: 'NORMAL' }, { name: '异常', code: 'ABNORMAL' }] },
    { type: '工段', items: [
      { name: '发酵', code: 'FERMENTATION' },
      { name: '果糖色谱分离', code: 'FRUCTOSE_CHROMATOGRAPHY' },
      { name: '阿糖异构', code: 'ALT_ISOMERIZATION' },
      { name: '固体精制', code: 'SOLID_REFINING' },
      { name: '蒸发结晶', code: 'EVAPORATION_CRYSTALLIZATION' },
      { name: '离心烘干', code: 'CENTRIFUGAL_DRYING' },
      { name: '固体包装', code: 'SOLID_PACKAGING' },
      { name: '质检科', code: 'QC_DEPT' }
    ]},
    { type: '工序类型', items: [
      { name: '流程工序', code: 'PROCESS' },
      { name: '质检专用工序', code: 'QC_ONLY' }
    ]},
    { type: '班次', items: [
      { name: '1', code: '1' },
      { name: '2', code: '2' }
    ]},
    { type: '班组', items: [
      { name: '甲班', code: '01' },
      { name: '乙班', code: '02' },
      { name: '丙班', code: '03' }
    ]}
  ],

  // 通用字典枚举值引用关系（演示删除校验）
  dictionaryReferencedValues: {
    '判定结果': ['合格'],
    '班次': ['1'],
    '班组': ['甲班']
  },

  // ===== SCADA点位映射 =====
  scadaMappings: [
    { pointId: 'TI-1001', desc: '发酵罐温度', process: '发酵罐', device: 'F1#', formField: '温度（℃）', unit: '℃', enabled: true },
    { pointId: 'PI-1002', desc: '发酵罐压力', process: '发酵罐', device: 'F1#', formField: '罐压（MPa）', unit: 'MPa', enabled: true },
    { pointId: 'FI-1003', desc: '通气量', process: '发酵罐', device: 'F1#', formField: '空气流量', unit: 'L/min', enabled: true },
    { pointId: 'TI-2001', desc: '蒸发四效温度', process: '蒸发', device: '四效', formField: '蒸发温度', unit: '℃', enabled: true },
    { pointId: 'PI-2002', desc: '蒸发四效真空度', process: '蒸发', device: '四效', formField: '真空度', unit: 'MPa', enabled: true }
  ],

  // ===== 待办&通知 =====
  todos: [
    { title: '审核 张三 提交的《发酵工段质检单 QC-20260507-0023》', meta: '截止 2026-05-07 18:00', priority: 'high' },
    { title: '驳回处理：QC-20260506-0098 电导数据异常', meta: '截止 2026-05-07 12:00', priority: 'high' },
    { title: '审核 SR-20260507-0033 发酵班报表', meta: '截止 2026-05-07 22:00', priority: 'medium' },
    { title: '处理 SCADA 集成异常告警 5 条', meta: '截止 2026-05-08', priority: 'low' }
  ],
  notices: [
    { title: '【系统】关于2026-Q2 质检模板新版本上线的通知', date: '2026-05-06' },
    { title: '【生产】发酵罐F2#定于2026-05-08进行设备维护', date: '2026-05-05' },
    { title: '【质量】中间体检验工序色度规格上限调整通知', date: '2026-05-04' },
    { title: '【系统】用户角色权限调整生效说明', date: '2026-05-03' }
  ],

  // ===== 阿糖异构原始记录（CJ-ALTT-03 扩展版） =====
  // 列表字段定义（图示：1.列表字段）
  //   category：所属模块分类，用于「配置列表字段」弹窗中按父级分组展示
  //   defaultVisible：默认是否在列表中显示
  //   sortable：是否支持点击表头升降序
  //   query：列表查询方式说明（鼠标悬停可见，前端不强校验）
  altIsomerRecordFields: [
    { key: 'id', label: '记录编号', category: '基础信息', source: '系统自动生成', defaultVisible: true, sortable: true, query: '模糊查询' },
    { key: 'date', label: '日期', category: '基础信息', source: '取最新塔页面"进料时间"的日期', defaultVisible: true, sortable: true, query: '/' },
    { key: 'shift', label: '班次', category: '基础信息', source: '取自【班次管理】', defaultVisible: true, sortable: false, query: '下拉单选' },
    { key: 'team', label: '班组', category: '基础信息', source: '取自【班组管理】', defaultVisible: true, sortable: false, query: '下拉单选' },
    { key: 'recorder', label: '记录人', category: '基础信息', source: '表单录入', defaultVisible: true, sortable: false, query: '/' },
    { key: 'tankNo', label: '罐号', category: '基础信息', source: '取自【设备管理】"异构"工序关联设备', defaultVisible: true, sortable: false, query: '下拉单选' },
    { key: 'batchNo', label: '批号', category: '基础信息', source: '文本输入', defaultVisible: true, sortable: false, query: '模糊查询' },
    { key: 'feedTime', label: '进料时间', category: '基础信息', source: '精确到分钟', defaultVisible: true, sortable: true, query: '时间范围' },
    { key: 'fullTime', label: '满罐时间', category: '基础信息', source: '精确到分钟', defaultVisible: true, sortable: true, query: '时间范围' },
    { key: 'fullVolume', label: '满罐体积(m³)', category: '基础信息', source: '数字输入', defaultVisible: false, sortable: false, query: '/' },
    { key: 'fullConcentration', label: '满罐浓度(%)', category: '控制指标', source: '数字输入（10~20）', defaultVisible: false, sortable: false, query: '/' },
    { key: 'fullTemperature', label: '满罐温度(℃)', category: '控制指标', source: '数字输入（10~20）', defaultVisible: false, sortable: false, query: '/' },
    { key: 'fullPh', label: '满罐PH', category: '控制指标', source: '数字输入（4~9）', defaultVisible: false, sortable: false, query: '/' },
    { key: 'enzymeVendor', label: '酶制剂厂家', category: '辅料明细', source: '取自【辅料管理】"异构"工序-"酶制剂"', defaultVisible: false, sortable: false, query: '下拉单选' },
    { key: 'enzymeBatch', label: '酶制剂批号', category: '辅料明细', source: '文本输入', defaultVisible: false, sortable: false, query: '/' },
    { key: 'enzymeVolume', label: '酶制剂加酶量(m³)', category: '辅料明细', source: '数字输入', defaultVisible: false, sortable: false, query: '/' },
    { key: 'mnVendor', label: '硫酸锰厂家', category: '辅料明细', source: '取自【辅料管理】"异构"工序-"硫酸锰"', defaultVisible: false, sortable: false, query: '下拉单选' },
    { key: 'mnBatch', label: '硫酸锰批号', category: '辅料明细', source: '文本输入', defaultVisible: false, sortable: false, query: '/' },
    { key: 'mnAmount', label: '硫酸锰用量(kg)', category: '辅料明细', source: '数字输入', defaultVisible: false, sortable: false, query: '/' },
    { key: 'dischargeTime', label: '出料时间', category: '出料', source: '精确到分钟', defaultVisible: true, sortable: true, query: '时间范围' },
    { key: 'altConcentration', label: '阿糖浓度(%)', category: '出料', source: '匹配【质检科检验】出料色谱数据，选中后回填', defaultVisible: true, sortable: false, query: '/' },
    { key: 'altContent', label: '阿糖含量(%)', category: '出料', source: '匹配【质检科检验】出料色谱数据', defaultVisible: false, sortable: false, query: '/' },
    { key: 'fructoseContent', label: '果糖含量(%)', category: '出料', source: '匹配【质检科检验】出料色谱数据', defaultVisible: false, sortable: false, query: '/' },
    { key: 'glucoseContent', label: '葡萄糖含量(%)', category: '出料', source: '匹配【质检科检验】出料色谱数据', defaultVisible: false, sortable: false, query: '/' },
    { key: 'remark', label: '备注', category: '备注', source: '文本输入', defaultVisible: false, sortable: false, query: '/' },
    { key: 'creator', label: '创建人', category: '系统', source: '/', defaultVisible: true, sortable: false, query: '/' },
    { key: 'createdAt', label: '创建时间', category: '系统', source: '/', defaultVisible: true, sortable: true, query: '/' }
  ],
  // 异构工序设备（取自【设备管理】中"异构"工序）
  altIsomerTanks: ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#'],
  // 异构工序-酶制剂 厂家列表（取自【辅料管理】）
  altIsomerEnzymeVendors: ['诺维信酶制剂(中国)有限公司', '杰能科生物工程', '青岛蔚蓝生物', '尤特尔生化'],
  // 异构工序-硫酸锰 厂家列表（取自【辅料管理】）
  altIsomerMnVendors: ['湖南汇通锰业', '广西大锰新材料', '贵州红星发展', '锦州七彩化学'],
  // 列表数据
  altIsomerRecordList: [
    {
      id: 'ALT-20260513-008',
      date: '2026-05-13', shift: '白班', team: '甲班', recorder: '张三',
      tankNo: '3#', batchNo: 'ISO-20260513-A03',
      feedTime: '2026-05-13 08:20', fullTime: '2026-05-13 11:05',
      fullVolume: 65.0,
      fullConcentration: 14.5, fullTemperature: 12.5, fullPh: 7.5,
      enzymeVendor: '诺维信酶制剂(中国)有限公司', enzymeBatch: 'NVS-2604-12', enzymeVolume: 0.32,
      mnVendor: '湖南汇通锰业', mnBatch: 'HT-2603-06', mnAmount: 4.8,
      dischargeTime: '2026-05-13 18:40',
      altConcentration: 30.2, altContent: 28.9, fructoseContent: 42.1, glucoseContent: 22.6,
      remark: '满罐温度按工艺中限运行',
      creator: '张三', createdAt: '2026-05-13 11:20',
      qcLinkId: 'QC-IM2-20260513-005',
      status: 'submitted'
    },
    {
      id: 'ALT-20260513-007',
      date: '2026-05-13', shift: '白班', team: '甲班', recorder: '张三',
      tankNo: '1#', batchNo: 'ISO-20260513-A01',
      feedTime: '2026-05-13 07:10', fullTime: '2026-05-13 09:55',
      fullVolume: 64.5,
      fullConcentration: 15.0, fullTemperature: 13.0, fullPh: 7.6,
      enzymeVendor: '诺维信酶制剂(中国)有限公司', enzymeBatch: 'NVS-2604-12', enzymeVolume: 0.33,
      mnVendor: '湖南汇通锰业', mnBatch: 'HT-2603-06', mnAmount: 5.0,
      dischargeTime: '2026-05-13 17:30',
      altConcentration: 30.5, altContent: 29.4, fructoseContent: 41.7, glucoseContent: 22.0,
      remark: '',
      creator: '张三', createdAt: '2026-05-13 10:10',
      qcLinkId: 'QC-IM2-20260513-002',
      status: 'reviewed'
    },
    {
      id: 'ALT-20260512-006',
      date: '2026-05-12', shift: '夜班', team: '乙班', recorder: '孙强',
      tankNo: '2#', batchNo: 'ISO-20260512-N02',
      feedTime: '2026-05-12 20:45', fullTime: '2026-05-12 23:40',
      fullVolume: 65.2,
      fullConcentration: 14.2, fullTemperature: 12.0, fullPh: 7.4,
      enzymeVendor: '杰能科生物工程', enzymeBatch: 'GNC-2604-08', enzymeVolume: 0.30,
      mnVendor: '广西大锰新材料', mnBatch: 'DM-2604-02', mnAmount: 4.6,
      dischargeTime: '2026-05-13 06:20',
      altConcentration: 29.8, altContent: 28.5, fructoseContent: 42.8, glucoseContent: 23.0,
      remark: '夜间能耗略高，但产品色谱合格',
      creator: '孙强', createdAt: '2026-05-12 23:55',
      qcLinkId: 'QC-IM2-20260513-001',
      status: 'reviewed'
    },
    {
      id: 'ALT-20260512-005',
      date: '2026-05-12', shift: '白班', team: '丙班', recorder: '王伟',
      tankNo: '6#', batchNo: 'ISO-20260512-A06',
      feedTime: '2026-05-12 09:00', fullTime: '2026-05-12 11:50',
      fullVolume: 63.8,
      fullConcentration: 16.0, fullTemperature: 13.5, fullPh: 7.8,
      enzymeVendor: '青岛蔚蓝生物', enzymeBatch: 'WL-2604-15', enzymeVolume: 0.34,
      mnVendor: '贵州红星发展', mnBatch: 'HX-2603-09', mnAmount: 5.2,
      dischargeTime: '2026-05-12 19:10',
      altConcentration: 30.0, altContent: 28.7, fructoseContent: 41.9, glucoseContent: 22.8,
      remark: '',
      creator: '王伟', createdAt: '2026-05-12 12:05',
      qcLinkId: '',
      status: 'draft'
    },
    {
      id: 'ALT-20260511-004',
      date: '2026-05-11', shift: '夜班', team: '甲班', recorder: '李明',
      tankNo: '8#', batchNo: 'ISO-20260511-N08',
      feedTime: '2026-05-11 19:30', fullTime: '2026-05-11 22:20',
      fullVolume: 66.0,
      fullConcentration: 13.8, fullTemperature: 11.5, fullPh: 7.3,
      enzymeVendor: '诺维信酶制剂(中国)有限公司', enzymeBatch: 'NVS-2604-11', enzymeVolume: 0.31,
      mnVendor: '湖南汇通锰业', mnBatch: 'HT-2603-05', mnAmount: 4.5,
      dischargeTime: '2026-05-12 05:00',
      altConcentration: 30.6, altContent: 29.6, fructoseContent: 41.4, glucoseContent: 21.8,
      remark: '',
      creator: '李明', createdAt: '2026-05-11 22:30',
      qcLinkId: 'QC-IM2-20260512-006',
      status: 'reviewed'
    },
    {
      id: 'ALT-20260511-003',
      date: '2026-05-11', shift: '白班', team: '乙班', recorder: '赵亮',
      tankNo: '5#', batchNo: 'ISO-20260511-A05',
      feedTime: '2026-05-11 08:40', fullTime: '2026-05-11 11:30',
      fullVolume: 64.8,
      fullConcentration: 15.2, fullTemperature: 12.8, fullPh: 7.5,
      enzymeVendor: '尤特尔生化', enzymeBatch: 'YT-2604-03', enzymeVolume: 0.32,
      mnVendor: '锦州七彩化学', mnBatch: 'QC-2603-02', mnAmount: 4.7,
      dischargeTime: '2026-05-11 18:55',
      altConcentration: 30.1, altContent: 28.8, fructoseContent: 42.0, glucoseContent: 22.4,
      remark: '',
      creator: '赵亮', createdAt: '2026-05-11 11:45',
      qcLinkId: 'QC-IM2-20260511-008',
      status: 'rejected', rejectReason: '酶制剂加酶量与配方下限偏差>5%，请复核'
    }
  ],
  // 质检科检验：阿糖异构出料色谱数据（用于新增/编辑表单"出料"区"阿糖浓度等"选择回填）
  // 字段：异构工序+班次+出料日期 关联
  altIsomerQcData: [
    {
      id: 'QC-IM2-20260513-005', process: '阿糖异构', tankNo: '3#', shift: '白班', date: '2026-05-13',
      sampleTime: '2026-05-13 18:50', inspectTime: '2026-05-13 19:30', inspector: '王五',
      altConcentration: 30.2, altContent: 28.9, fructoseContent: 42.1, glucoseContent: 22.6
    },
    {
      id: 'QC-IM2-20260513-002', process: '阿糖异构', tankNo: '1#', shift: '白班', date: '2026-05-13',
      sampleTime: '2026-05-13 17:40', inspectTime: '2026-05-13 18:25', inspector: '王五',
      altConcentration: 30.5, altContent: 29.4, fructoseContent: 41.7, glucoseContent: 22.0
    },
    {
      id: 'QC-IM2-20260513-001', process: '阿糖异构', tankNo: '2#', shift: '夜班', date: '2026-05-12',
      sampleTime: '2026-05-13 06:30', inspectTime: '2026-05-13 07:10', inspector: '马晓东',
      altConcentration: 29.8, altContent: 28.5, fructoseContent: 42.8, glucoseContent: 23.0
    },
    {
      id: 'QC-IM2-20260512-006', process: '阿糖异构', tankNo: '8#', shift: '夜班', date: '2026-05-11',
      sampleTime: '2026-05-12 05:10', inspectTime: '2026-05-12 05:55', inspector: '马晓东',
      altConcentration: 30.6, altContent: 29.6, fructoseContent: 41.4, glucoseContent: 21.8
    },
    {
      id: 'QC-IM2-20260512-005', process: '阿糖异构', tankNo: '6#', shift: '白班', date: '2026-05-12',
      sampleTime: '2026-05-12 19:20', inspectTime: '2026-05-12 20:05', inspector: '王五',
      altConcentration: 30.0, altContent: 28.7, fructoseContent: 41.9, glucoseContent: 22.8
    },
    {
      id: 'QC-IM2-20260512-004', process: '阿糖异构', tankNo: '6#', shift: '白班', date: '2026-05-12',
      sampleTime: '2026-05-12 19:35', inspectTime: '2026-05-12 20:20', inspector: '王五',
      altConcentration: 30.3, altContent: 28.6, fructoseContent: 41.8, glucoseContent: 22.7
    },
    {
      id: 'QC-IM2-20260511-008', process: '阿糖异构', tankNo: '5#', shift: '白班', date: '2026-05-11',
      sampleTime: '2026-05-11 19:05', inspectTime: '2026-05-11 19:50', inspector: '王五',
      altConcentration: 30.1, altContent: 28.8, fructoseContent: 42.0, glucoseContent: 22.4
    }
  ]
};

// 状态标签映射
window.STATUS_TAG = {
  draft: { label: '草稿', cls: 'tag-grey' },
  submitted: { label: '已提交', cls: 'tag-blue' },
  reviewed: { label: '已审核', cls: 'tag-green' },
  rejected: { label: '被驳回', cls: 'tag-red' }
};

window.statusTag = function (status) {
  const s = window.STATUS_TAG[status] || { label: status, cls: 'tag-grey' };
  return `<span class="tag ${s.cls}">${s.label}</span>`;
};
