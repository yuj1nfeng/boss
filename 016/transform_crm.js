const fs = require('fs');
const path = require('path');

console.log('开始转换 CRM客户关系管理系统...\n');

// 转换 admin.html
let html = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');

// 基础替换
html = html.replace(/智慧仓库管理系统/g, 'CRM客户关系管理系统');
html = html.replace(/库存管理系统/g, '客户管理系统');
html = html.replace(/智慧仓库/g, '客户管理');

// 侧边栏菜单替换
const oldMenu = `            <div class="nav-item" onclick="showSection('products')">
                <i class="bi bi-box-seam"></i>
                <span>商品管理</span>
            </div>
            <div class="nav-item" onclick="showSection('inbound')">
                <i class="bi bi-download"></i>
                <span>入库管理</span>
            </div>
            <div class="nav-item" onclick="showSection('outbound')">
                <i class="bi bi-upload"></i>
                <span>出库管理</span>
            </div>
            <div class="nav-item" onclick="showSection('inventory')">
                <i class="bi bi-clipboard-data"></i>
                <span>库存盘点</span>
            </div>
            <div class="nav-item" onclick="showSection('suppliers')">
                <i class="bi bi-truck"></i>
                <span>供应商管理</span>
            </div>`;

const newMenu = `            <div class="nav-item" onclick="showSection('customers')">
                <i class="bi bi-people"></i>
                <span>客户管理</span>
            </div>
            <div class="nav-item" onclick="showSection('business')">
                <i class="bi bi-funnel"></i>
                <span>销售机会</span>
            </div>
            <div class="nav-item" onclick="showSection('contracts')">
                <i class="bi bi-file-earmark-text"></i>
                <span>合同订单</span>
            </div>
            <div class="nav-item" onclick="showSection('followup')">
                <i class="bi bi-calendar-check"></i>
                <span>跟进管理</span>
            </div>
            <div class="nav-item" onclick="showSection('products')">
                <i class="bi bi-box-seam"></i>
                <span>产品管理</span>
            </div>`;

html = html.replace(oldMenu, newMenu);

// 统计卡片标题替换
html = html.replace(/商品总数/g, '客户总数');
html = html.replace(/今日入库/g, '新增线索');
html = html.replace(/今日出库/g, '今日跟进');
html = html.replace(/库存预警/g, '销售目标');
html = html.replace(/低库存商品/g, '待跟进客户');

// 写入HTML
fs.writeFileSync(path.join(__dirname, 'admin.html'), html, 'utf8');
console.log('✅ admin.html 转换完成');

// 现在创建全新的 app.js
const appJs = `// CRM客户关系管理系统数据
const customers = [
    { id: 1, name: '北京鑫源科技有限公司', contact: '王经理', phone: '13800138001', level: 'A', source: '官网', status: '活跃', lastFollow: '2024-05-10', value: 1250000, industry: 'IT科技', address: '北京市海淀区中关村大街1号' },
    { id: 2, name: '上海盛达商贸有限公司', contact: '李总', phone: '13900139002', level: 'A', source: '展会', status: '活跃', lastFollow: '2024-05-09', value: 890000, industry: '贸易零售', address: '上海市浦东新区陆家嘴金融中心' },
    { id: 3, name: '广州恒信电子科技', contact: '张总监', phone: '13700137003', level: 'B', source: '转介绍', status: '跟进中', lastFollow: '2024-05-08', value: 560000, industry: '电子制造', address: '广州市天河区珠江新城' },
    { id: 4, name: '深圳创新医疗设备', contact: '陈经理', phone: '13600136004', level: 'B', source: '线上广告', status: '活跃', lastFollow: '2024-05-07', value: 720000, industry: '医疗器械', address: '深圳市南山区科技园' },
    { id: 5, name: '杭州绿城物业服务', contact: '刘主管', phone: '13500135005', level: 'C', source: '官网', status: '休眠', lastFollow: '2024-04-15', value: 280000, industry: '物业服务', address: '杭州市西湖区文三路' },
    { id: 6, name: '成都天府食品有限公司', contact: '周总', phone: '13400134006', level: 'A', source: '展会', status: '活跃', lastFollow: '2024-05-10', value: 1560000, industry: '食品加工', address: '成都市高新区天府大道' },
    { id: 7, name: '武汉长江汽车配件', contact: '吴经理', phone: '13300133007', level: 'B', source: '线下拜访', status: '跟进中', lastFollow: '2024-05-06', value: 450000, industry: '汽车配件', address: '武汉市江汉区建设大道' },
    { id: 8, name: '南京金陵教育科技', contact: '赵总', phone: '13200132008', level: 'A', source: '转介绍', status: '活跃', lastFollow: '2024-05-09', value: 980000, industry: '教育培训', address: '南京市鼓楼区中山路' },
    { id: 9, name: '西安古城旅游文化', contact: '孙经理', phone: '13100131009', level: 'C', source: '官网', status: '新客户', lastFollow: '2024-05-10', value: 150000, industry: '旅游文化', address: '西安市雁塔区大雁塔' },
    { id: 10, name: '重庆山城物流有限公司', contact: '马总', phone: '13000130010', level: 'B', source: '线上广告', status: '跟进中', lastFollow: '2024-05-08', value: 620000, industry: '物流运输', address: '重庆市渝中区解放碑' },
    { id: 11, name: '天津滨海化工科技', contact: '林主管', phone: '15800158011', level: 'C', source: '展会', status: '休眠', lastFollow: '2024-04-20', value: 320000, industry: '化工原料', address: '天津市滨海新区开发区' },
    { id: 12, name: '苏州园林设计工程', contact: '郑经理', phone: '15900159012', level: 'A', source: '线下拜访', status: '活跃', lastFollow: '2024-05-07', value: 1100000, industry: '工程设计', address: '苏州市姑苏区人民路' }
];

const opportunities = [
    { id: 'OP202405001', name: '鑫源科技年度采购项目', customer: '北京鑫源科技有限公司', value: 580000, stage: '需求确认', probability: 75, expectedDate: '2024-06-15', owner: '销售一部-张明', followCount: 8 },
    { id: 'OP202405002', name: '盛达商贸供应链系统', customer: '上海盛达商贸有限公司', value: 350000, stage: '方案报价', probability: 60, expectedDate: '2024-06-20', owner: '销售二部-李华', followCount: 5 },
    { id: 'OP202405003', name: '恒信电子ERP升级', customer: '广州恒信电子科技', value: 420000, stage: '商务谈判', probability: 85, expectedDate: '2024-05-25', owner: '销售一部-王芳', followCount: 12 },
    { id: 'OP202405004', name: '创新医疗设备采购', customer: '深圳创新医疗设备', value: 680000, stage: '初步接触', probability: 30, expectedDate: '2024-07-10', owner: '销售三部-刘强', followCount: 2 },
    { id: 'OP202405005', name: '天府食品冷链系统', customer: '成都天府食品有限公司', value: 890000, stage: '需求确认', probability: 70, expectedDate: '2024-06-30', owner: '销售一部-张明', followCount: 6 },
    { id: 'OP202405006', name: '金陵教育智慧校园', customer: '南京金陵教育科技', value: 750000, stage: '方案报价', probability: 55, expectedDate: '2024-07-15', owner: '销售二部-李华', followCount: 4 },
    { id: 'OP202405007', name: '长江汽车配件管理', customer: '武汉长江汽车配件', value: 280000, stage: '商务谈判', probability: 90, expectedDate: '2024-05-20', owner: '销售三部-王芳', followCount: 10 },
    { id: 'OP202405008', name: '山城物流仓储系统', customer: '重庆山城物流有限公司', value: 520000, stage: '需求确认', probability: 65, expectedDate: '2024-06-25', owner: '销售一部-张明', followCount: 7 }
];

const contracts = [
    { id: 'CT202404001', name: '2024年度IT设备采购合同', customer: '北京鑫源科技有限公司', amount: 1250000, signedDate: '2024-04-15', startDate: '2024-05-01', endDate: '2025-04-30', status: '执行中', owner: '销售一部-张明', payment: '分期付款' },
    { id: 'CT202404002', name: '企业管理软件授权合同', customer: '上海盛达商贸有限公司', amount: 380000, signedDate: '2024-04-20', startDate: '2024-05-15', endDate: '2025-05-14', status: '执行中', owner: '销售二部-李华', payment: '一次性付款' },
    { id: 'CT202403003', name: 'ERP系统实施服务合同', customer: '广州恒信电子科技', amount: 560000, signedDate: '2024-03-10', startDate: '2024-04-01', endDate: '2024-10-31', status: '执行中', owner: '销售一部-王芳', payment: '按里程碑' },
    { id: 'CT202402004', name: '医疗设备管理系统', customer: '深圳创新医疗设备', amount: 720000, signedDate: '2024-02-28', startDate: '2024-03-15', endDate: '2024-12-31', status: '验收中', owner: '销售三部-刘强', payment: '分期付款' },
    { id: 'CT202401005', name: '物业服务系统合同', customer: '杭州绿城物业服务', amount: 280000, signedDate: '2024-01-15', startDate: '2024-02-01', endDate: '2025-01-31', status: '待回款', owner: '销售一部-张明', payment: '按季度' }
];

const followups = [
    { id: 1, customer: '北京鑫源科技有限公司', contact: '王经理', type: '电话拜访', content: '确认项目需求，约定下周演示', date: '2024-05-10 14:30', nextDate: '2024-05-15 09:00', owner: '张明', result: '顺利' },
    { id: 2, customer: '上海盛达商贸有限公司', contact: '李总', type: '上门拜访', content: '详细介绍方案，解答技术疑问', date: '2024-05-09 10:00', nextDate: '2024-05-16 14:00', owner: '李华', result: '顺利' },
    { id: 3, customer: '广州恒信电子科技', contact: '张总监', type: '视频会议', content: '合同条款谈判，价格磋商', date: '2024-05-08 15:30', nextDate: '2024-05-12 10:00', owner: '王芳', result: '待确认' },
    { id: 4, customer: '成都天府食品有限公司', contact: '周总', type: '微信沟通', content: '发送产品资料，预约演示时间', date: '2024-05-08 09:15', nextDate: '2024-05-14 15:00', owner: '张明', result: '顺利' },
    { id: 5, customer: '南京金陵教育科技', contact: '赵总', type: '邮件跟进', content: '发送定制方案，等待反馈', date: '2024-05-07 16:45', nextDate: '2024-05-13 09:00', owner: '李华', result: '等待回复' },
    { id: 6, customer: '重庆山城物流有限公司', contact: '马总', type: '电话拜访', content: '了解竞品情况，突出我方优势', date: '2024-05-06 11:20', nextDate: '2024-05-17 10:00', owner: '王芳', result: '顺利' },
    { id: 7, customer: '西安古城旅游文化', contact: '孙经理', type: '首次拜访', content: '初次接触，介绍公司产品', date: '2024-05-10 10:00', nextDate: '2024-05-18 14:00', owner: '刘强', result: '顺利' },
    { id: 8, customer: '武汉长江汽车配件', contact: '吴经理', type: '合同签约', content: '正式签订合同，启动项目', date: '2024-05-05 14:00', nextDate: '-', owner: '王芳', result: '成单' }
];

const products = [
    { id: 'P001', name: '企业管理系统标准版', category: '软件产品', price: 98000, unit: '套', stock: 150, status: '在售', sales: 45, revenue: 4410000 },
    { id: 'P002', name: '企业管理系统专业版', category: '软件产品', price: 198000, unit: '套', stock: 100, status: '在售', sales: 28, revenue: 5544000 },
    { id: 'P003', name: '企业管理系统企业版', category: '软件产品', price: 398000, unit: '套', stock: 50, status: '在售', sales: 12, revenue: 4776000 },
    { id: 'P004', name: 'ERP实施服务', category: '实施服务', price: 150000, unit: '人天', stock: '-', status: '在售', sales: 850, revenue: 12750000 },
    { id: 'P005', name: '定制开发服务', category: '技术服务', price: 2000, unit: '人天', stock: '-', status: '在售', sales: 1200, revenue: 2400000 },
    { id: 'P006', name: '年度运维服务', category: '运维服务', price: 30000, unit: '年', stock: '-', status: '在售', sales: 68, revenue: 2040000 },
    { id: 'P007', name: '数据分析模块', category: '软件产品', price: 88000, unit: '套', stock: 80, status: '在售', sales: 25, revenue: 2200000 },
    { id: 'P008', name: '移动端APP', category: '软件产品', price: 68000, unit: '套', stock: 120, status: '在售', sales: 32, revenue: 2176000 }
];

const activities = [
    { time: '刚刚', user: '张明', action: '完成跟进', target: '北京鑫源科技有限公司', type: 'follow' },
    { time: '5分钟前', user: '李华', action: '更新销售机会', target: '盛达商贸供应链系统', type: 'opportunity' },
    { time: '15分钟前', user: '王芳', action: '创建合同', target: 'ERP系统实施服务合同', type: 'contract' },
    { time: '30分钟前', user: '刘强', action: '新增客户', target: '西安古城旅游文化', type: 'customer' },
    { time: '1小时前', user: '张明', action: '发送报价单', target: '成都天府食品有限公司', type: 'quote' },
    { time: '2小时前', user: '李华', action: '完成回款', target: '上海盛达商贸有限公司', type: 'payment' }
];

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
    initCharts();
    renderCustomerList();
    renderOpportunityList();
    renderContractList();
    renderFollowupList();
    renderProductList();
    renderActivityFeed();
});

// 初始化仪表板
function initDashboard() {
    document.getElementById('totalProducts').textContent = customers.length;
    document.getElementById('todayInbound').textContent = 3; // 今日新增
    document.getElementById('todayOutbound').textContent = 8; // 今日跟进
    document.getElementById('warningProducts').textContent = '¥' + (customers.reduce((sum, c) => sum + c.value, 0) / 10000).toFixed(0) + '万';
    document.getElementById('lowStockProducts').textContent = customers.filter(c => c.status === '跟进中').length;
}

// 初始化图表
function initCharts() {
    // 销售漏斗图表
    const ctx1 = document.getElementById('stockTrendChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['初步接触', '需求确认', '方案报价', '商务谈判', '成交签约'],
            datasets: [{
                label: '销售机会数量',
                data: [28, 22, 15, 8, 5],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    });

    // 月度销售趋势
    const months = ['1月', '2月', '3月', '4月', '5月'];
    const ctx2 = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: '销售额(万元)',
                data: [320, 450, 380, 520, 480],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: '成单数量',
                data: [8, 12, 10, 15, 14],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#cbd5e1' } } },
            scales: {
                x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#3b82f6' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y1: { position: 'right', ticks: { color: '#10b981' }, grid: { display: false } }
            }
        }
    });

    // 客户来源分布
    const ctx3 = document.getElementById('warehouseChart').getContext('2d');
    new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['官网', '展会', '转介绍', '线上广告', '线下拜访'],
            datasets: [{
                data: [35, 25, 20, 12, 8],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#cbd5e1', padding: 15 }
                }
            }
        }
    });
}

// 渲染客户列表
function renderCustomerList() {
    const tbody = document.getElementById('productList') || document.createElement('tbody');
    tbody.innerHTML = customers.map(c => \`
        <tr>
            <td><strong>\${c.name}</strong><br><small class="text-secondary">\${c.industry}</small></td>
            <td>\${c.contact}<br><small>\${c.phone}</small></td>
            <td><span class="badge bg-\${c.level === 'A' ? 'danger' : c.level === 'B' ? 'warning' : 'secondary'}">\${c.level}类客户</span></td>
            <td><span class="badge bg-\${c.status === '活跃' ? 'success' : c.status === '跟进中' ? 'primary' : 'secondary'}">\${c.status}</span></td>
            <td>¥\${(c.value / 10000).toFixed(0)}万</td>
            <td>\${c.lastFollow}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看客户详情')">详情</button>
                <button class="btn btn-sm btn-outline-success" onclick="showToast('新建跟进记录')">跟进</button>
            </td>
        </tr>
    \`).join('');
    
    // 更新dashboard的客户列表
    const dashboardList = document.getElementById('lowStockList');
    if (dashboardList) {
        dashboardList.innerHTML = customers.slice(0, 5).map(c => \`
            <div class="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                <div>
                    <div class="fw-medium">\${c.name}</div>
                    <small class="text-secondary">\${c.contact} · \${c.lastFollow}</small>
                </div>
                <span class="badge bg-\${c.level === 'A' ? 'danger' : c.level === 'B' ? 'warning' : 'secondary'}">\${c.level}</span>
            </div>
        \`).join('');
    }
}

// 渲染销售机会列表
function renderOpportunityList() {
    const targetEl = document.getElementById('inboundList') || document.createElement('tbody');
    targetEl.innerHTML = opportunities.map(o => \`
        <tr>
            <td><span class="badge bg-secondary">\${o.id}</span><br><strong>\${o.name}</strong></td>
            <td>\${o.customer}</td>
            <td>¥\${(o.value / 10000).toFixed(1)}万</td>
            <td><span class="badge bg-\${o.stage === '商务谈判' ? 'danger' : o.stage === '方案报价' ? 'warning' : o.stage === '需求确认' ? 'primary' : 'secondary'}">\${o.stage}</span></td>
            <td>
                <div class="progress" style="height: 8px;">
                    <div class="progress-bar bg-\${o.probability >= 70 ? 'success' : o.probability >= 50 ? 'warning' : 'danger'}" style="width: \${o.probability}%"></div>
                </div>
                <small class="text-secondary">\${o.probability}%</small>
            </td>
            <td>\${o.expectedDate}</td>
            <td><small class="text-secondary">\${o.owner}</small><br>已跟进\${o.followCount}次</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看机会详情')">详情</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染合同列表
function renderContractList() {
    const targetEl = document.getElementById('outboundList') || document.createElement('tbody');
    targetEl.innerHTML = contracts.map(c => \`
        <tr>
            <td><span class="badge bg-secondary">\${c.id}</span><br><strong>\${c.name}</strong></td>
            <td>\${c.customer}</td>
            <td>¥\${(c.amount / 10000).toFixed(1)}万</td>
            <td>\${c.signedDate}</td>
            <td><span class="badge bg-\${c.status === '执行中' ? 'primary' : c.status === '验收中' ? 'warning' : 'danger'}">\${c.status}</span></td>
            <td><small class="text-secondary">\${c.owner}</small><br>\${c.payment}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看合同详情')">详情</button>
                <button class="btn btn-sm btn-outline-success" onclick="showToast('下载合同文件')">下载</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染跟进列表
function renderFollowupList() {
    const targetEl = document.getElementById('inventoryList') || document.createElement('tbody');
    targetEl.innerHTML = followups.map(f => \`
        <tr>
            <td><strong>\${f.customer}</strong><br><small class="text-secondary">\${f.contact}</small></td>
            <td><span class="badge bg-info">\${f.type}</span></td>
            <td style="max-width: 250px;">\${f.content}</td>
            <td>\${f.date}</td>
            <td><span class="badge bg-\${f.result === '成单' ? 'success' : f.result === '顺利' ? 'primary' : 'warning'}">\${f.result}</span></td>
            <td><small class="text-secondary">\${f.owner}</small></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看跟进详情')">详情</button>
                <button class="btn btn-sm btn-outline-success" onclick="showToast('添加新跟进')">添加</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染产品列表
function renderProductList() {
    const targetEl = document.getElementById('supplierList') || document.createElement('tbody');
    targetEl.innerHTML = products.map(p => \`
        <tr>
            <td><span class="badge bg-secondary">\${p.id}</span><br><strong>\${p.name}</strong></td>
            <td><span class="badge bg-info">\${p.category}</span></td>
            <td>¥\${p.price.toLocaleString()}</td>
            <td>\${p.unit}</td>
            <td>\${p.stock}</td>
            <td><span class="badge bg-\${p.status === '在售' ? 'success' : 'secondary'}">\${p.status}</span></td>
            <td>\${p.sales}套<br>¥\${(p.revenue / 10000).toFixed(0)}万</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看产品详情')">详情</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染动态
function renderActivityFeed() {
    const targetEl = document.getElementById('recentOutbound') || document.createElement('div');
    targetEl.innerHTML = activities.map(a => \`
        <div class="d-flex gap-2 py-2 border-bottom border-secondary">
            <div><i class="bi bi-\${a.type === 'follow' ? 'telephone' : a.type === 'contract' ? 'file-earmark-text' : a.type === 'customer' ? 'person-plus' : 'activity'} text-primary"></i></div>
            <div class="flex-grow-1">
                <div class="small"><strong>\${a.user}</strong> \${a.action}</div>
                <div class="small text-secondary">\${a.target} · \${a.time}</div>
            </div>
        </div>
    \`).join('');
}

// 页面切换
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // 重新渲染对应列表
    if (sectionId === 'customers') renderCustomerList();
    if (sectionId === 'business') renderOpportunityList();
    if (sectionId === 'contracts') renderContractList();
    if (sectionId === 'followup') renderFollowupList();
    if (sectionId === 'products') renderProductList();
}

// 显示提示
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-primary border-0 show position-fixed';
    toast.style.cssText = 'bottom: 20px; right: 20px; z-index: 9999;';
    toast.innerHTML = \`
        <div class="d-flex">
            <div class="toast-body">\${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    \`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
`;

fs.writeFileSync(path.join(__dirname, 'app.js'), appJs, 'utf8');
console.log('✅ app.js 转换完成');

// 更新 mobile.html
let mobileHtml = fs.readFileSync(path.join(__dirname, 'mobile.html'), 'utf8');
mobileHtml = mobileHtml.replace(/智慧仓库/g, 'CRM客户管理');
mobileHtml = mobileHtml.replace(/仓库管理/g, '客户管理');
mobileHtml = mobileHtml.replace(/商品/g, '客户');
mobileHtml = mobileHtml.replace(/入库/g, '跟进');
mobileHtml = mobileHtml.replace(/出库/g, '订单');
fs.writeFileSync(path.join(__dirname, 'mobile.html'), mobileHtml, 'utf8');
console.log('✅ mobile.html 转换完成');

// 更新 mobile.js
let mobileJs = fs.readFileSync(path.join(__dirname, 'mobile.js'), 'utf8');
mobileJs = mobileJs.replace(/仓库|库存|商品/g, '客户');
mobileJs = mobileJs.replace(/入库/g, '跟进');
mobileJs = mobileJs.replace(/出库/g, '订单');
fs.writeFileSync(path.join(__dirname, 'mobile.js'), mobileJs, 'utf8');
console.log('✅ mobile.js 转换完成');

console.log('\n🎉 016-CRM客户关系管理系统 全部文件转换完成！');
