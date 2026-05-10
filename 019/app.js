// 超市管理系统数据
const products = [
    { id: 'P001', name: '农夫山泉550ml', barcode: '6901234567891', category: '饮料', price: 2.00, cost: 1.20, stock: 240, unit: '瓶', minStock: 50, status: '正常' },
    { id: 'P002', name: '可口可乐330ml', barcode: '6901234567892', category: '饮料', price: 3.00, cost: 1.80, stock: 180, unit: '罐', minStock: 40, status: '正常' },
    { id: 'P003', name: '统一方便面', barcode: '6901234567893', category: '食品', price: 4.50, cost: 2.80, stock: 120, unit: '包', minStock: 30, status: '正常' },
    { id: 'P004', name: '伊利纯牛奶250ml', barcode: '6901234567894', category: '乳品', price: 3.50, cost: 2.20, stock: 96, unit: '盒', minStock: 30, status: '正常' },
    { id: 'P005', name: '旺仔QQ糖', barcode: '6901234567895', category: '零食', price: 2.50, cost: 1.50, stock: 200, unit: '包', minStock: 50, status: '正常' },
    { id: 'P006', name: '清风抽纸3层', barcode: '6901234567896', category: '日化', price: 5.90, cost: 3.50, stock: 80, unit: '包', minStock: 20, status: '正常' },
    { id: 'P007', name: '海飞丝洗发水200ml', barcode: '6901234567897', category: '日化', price: 29.90, cost: 18.00, stock: 45, unit: '瓶', minStock: 10, status: '正常' },
    { id: 'P008', name: '双汇火腿肠', barcode: '6901234567898', category: '食品', price: 1.50, cost: 0.90, stock: 300, unit: '根', minStock: 80, status: '正常' },
    { id: 'P009', name: '德芙巧克力', barcode: '6901234567899', category: '零食', price: 12.90, cost: 8.50, stock: 60, unit: '块', minStock: 15, status: '库存预警' },
    { id: 'P010', name: '蒙牛酸奶', barcode: '6901234567900', category: '乳品', price: 8.50, cost: 5.20, stock: 12, unit: '杯', minStock: 20, status: '库存预警' },
    { id: 'P011', name: '卫龙辣条', barcode: '6901234567901', category: '零食', price: 5.00, cost: 3.00, stock: 150, unit: '包', minStock: 40, status: '正常' },
    { id: 'P012', name: '青岛啤酒500ml', barcode: '6901234567902', category: '饮料', price: 6.00, cost: 3.80, stock: 0, unit: '罐', minStock: 30, status: '已缺货' }
];

const members = [
    { id: 'M001', name: '张三', phone: '13800138001', level: '钻石会员', points: 12580, balance: 200.00, totalSpent: 5860, joinDate: '2023-06-15', status: '正常' },
    { id: 'M002', name: '李四', phone: '13900139002', level: '黄金会员', points: 6890, balance: 150.00, totalSpent: 3280, joinDate: '2023-08-20', status: '正常' },
    { id: 'M003', name: '王五', phone: '13700137003', level: '白银会员', points: 2450, balance: 50.00, totalSpent: 1680, joinDate: '2023-10-10', status: '正常' },
    { id: 'M004', name: '赵六', phone: '13600136004', level: '普通会员', points: 580, balance: 0.00, totalSpent: 420, joinDate: '2024-01-05', status: '正常' },
    { id: 'M005', name: '孙七', phone: '13500135005', level: '黄金会员', points: 8920, balance: 300.00, totalSpent: 4560, joinDate: '2023-07-12', status: '正常' },
    { id: 'M006', name: '周八', phone: '13400134006', level: '钻石会员', points: 15680, balance: 500.00, totalSpent: 8920, joinDate: '2023-05-08', status: '正常' },
    { id: 'M007', name: '吴九', phone: '13300133007', level: '白银会员', points: 3200, balance: 80.00, totalSpent: 1980, joinDate: '2023-09-18', status: '正常' },
    { id: 'M008', name: '郑十', phone: '13200132008', level: '普通会员', points: 120, balance: 0.00, totalSpent: 120, joinDate: '2024-04-01', status: '正常' }
];

const suppliers = [
    { id: 'S001', name: '杭州娃哈哈集团', contact: '王经理', phone: '13800000001', category: '饮料', products: 12, lastOrder: '2024-05-08', status: '合作中' },
    { id: 'S002', name: '可口可乐中国', contact: '李经理', phone: '13800000002', category: '饮料', products: 8, lastOrder: '2024-05-10', status: '合作中' },
    { id: 'S003', name: '伊利集团', contact: '张经理', phone: '13800000003', category: '乳品', products: 15, lastOrder: '2024-05-09', status: '合作中' },
    { id: 'S004', name: '宝洁中国', contact: '赵经理', phone: '13800000004', category: '日化', products: 20, lastOrder: '2024-05-05', status: '合作中' },
    { id: 'S005', name: '顶新国际集团', contact: '孙经理', phone: '13800000005', category: '食品', products: 18, lastOrder: '2024-05-07', status: '合作中' },
    { id: 'S006', name: '玛氏食品', contact: '周经理', phone: '13800000006', category: '零食', products: 10, lastOrder: '2024-05-06', status: '合作中' }
];

const todayOrders = [
    { id: 'O202405120001', time: '08:15:32', items: 5, total: 45.50, payment: '微信', cashier: '小张', member: '张三' },
    { id: 'O202405120002', time: '08:28:15', items: 3, total: 18.00, payment: '支付宝', cashier: '小张', member: '-' },
    { id: 'O202405120003', time: '09:05:42', items: 8, total: 126.80, payment: '微信', cashier: '小李', member: '李四' },
    { id: 'O202405120004', time: '09:45:18', items: 2, total: 88.50, payment: '现金', cashier: '小李', member: '-' },
    { id: 'O202405120005', time: '10:22:56', items: 12, total: 156.00, payment: '微信', cashier: '小张', member: '王五' },
    { id: 'O202405120006', time: '11:08:33', items: 6, total: 78.50, payment: '支付宝', cashier: '小张', member: '赵六' }
];

let cartItems = [];

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
    initCharts();
    renderProductList();
    renderMemberList();
    renderSupplierList();
    renderTodayOrders();
});

// 初始化仪表板
function initDashboard() {
    const todayTotal = todayOrders.reduce((sum, o) => sum + o.total, 0);
    document.getElementById('totalStock').textContent = '¥' + todayTotal.toFixed(2);
    document.getElementById('todayInbound').textContent = todayOrders.length;
    document.getElementById('todayOutbound').textContent = '¥' + (todayTotal / todayOrders.length).toFixed(2);
    document.getElementById('lowStock').textContent = members.length;
}

// 初始化图表
function initCharts() {
    // 销售趋势
    const hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    const salesData = [280, 450, 620, 890, 1200, 580, 420, 360, 520, 780, 950, 680, 420];
    
    const ctx1 = document.getElementById('stockChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [{
                label: '销售额(元)',
                data: salesData,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#475569' } } },
            scales: {
                x: { ticks: { color: '#475569' }, grid: { color: 'rgba(0,0,0,0.05)' } },
                y: { ticks: { color: '#475569' }, grid: { color: 'rgba(0,0,0,0.05)' } }
            }
        }
    });

    // 分类销售占比
    const ctx2 = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['饮料', '食品', '零食', '乳品', '日化', '其他'],
            datasets: [{
                data: [2800, 2200, 1800, 1500, 1200, 500],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(107, 114, 128, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#475569', padding: 15 }
                }
            }
        }
    });
}

// 渲染商品列表
function renderProductList() {
    const tbody = document.getElementById('productList') || document.createElement('tbody');
    tbody.innerHTML = products.map(p => `
        <tr>
            <td><span class="badge bg-secondary">${p.id}</span><br>${p.barcode}</td>
            <td><strong>${p.name}</strong></td>
            <td><span class="badge bg-info">${p.category}</span></td>
            <td>¥${p.price.toFixed(2)}</td>
            <td style="color: ${p.stock <= p.minStock ? '#dc2626' : '#16a34a'}">${p.stock} ${p.unit}</td>
            <td><span class="badge bg-${p.status === '正常' ? 'success' : p.status === '库存预警' ? 'warning' : 'danger'}">${p.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('编辑商品')">编辑</button>
                <button class="btn btn-sm btn-outline-success" onclick="addToCart('${p.id}')">加购</button>
            </td>
        </tr>
    `).join('');
}

// 渲染会员列表
function renderMemberList() {
    // 创建新的会员列表
    const tbody = document.getElementById('inboundList') || document.createElement('tbody');
    if (document.getElementById('members')) {
        tbody.innerHTML = members.map(m => `
            <tr>
                <td><span class="badge bg-secondary">${m.id}</span><br><strong>${m.name}</strong></td>
                <td>${m.phone}</td>
                <td><span class="badge bg-${m.level.includes('钻石') ? 'primary' : m.level.includes('黄金') ? 'warning' : m.level.includes('白银') ? 'info' : 'secondary'}">${m.level}</span></td>
                <td>${m.points}</td>
                <td>¥${m.balance.toFixed(2)}</td>
                <td>¥${m.totalSpent.toFixed(2)}</td>
                <td>${m.joinDate}</td>
                <td><span class="badge bg-success">${m.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看会员详情')">详情</button>
                    <button class="btn btn-sm btn-outline-success" onclick="showToast('会员充值')">充值</button>
                </td>
            </tr>
        `).join('');
    }
}

// 渲染供应商列表
function renderSupplierList() {
    const tbody = document.getElementById('supplierList') || document.createElement('tbody');
    tbody.innerHTML = suppliers.map(s => `
        <tr>
            <td><span class="badge bg-secondary">${s.id}</span><br><strong>${s.name}</strong></td>
            <td>${s.contact}</td>
            <td>${s.phone}</td>
            <td><span class="badge bg-info">${s.category}</span></td>
            <td>${s.products}个</td>
            <td>${s.lastOrder}</td>
            <td><span class="badge bg-success">${s.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看供应商')">详情</button>
                <button class="btn btn-sm btn-outline-success" onclick="showToast('发起采购')">采购</button>
            </td>
        </tr>
    `).join('');
}

// 渲染今日订单
function renderTodayOrders() {
    const targetEl = document.getElementById('lowStockList') || document.createElement('div');
    if (targetEl) {
        targetEl.innerHTML = todayOrders.slice(0, 5).map(o => `
            <div class="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                <div>
                    <div class="fw-medium">${o.id.slice(-4)}</div>
                    <small class="text-secondary">${o.time} · ${o.items}件</small>
                </div>
                <span class="text-success fw-bold">¥${o.total.toFixed(2)}</span>
            </div>
        `).join('');
    }
}

// 添加到购物车
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existing = cartItems.find(item => item.id === productId);
        if (existing) {
            existing.qty++;
        } else {
            cartItems.push({ ...product, qty: 1 });
        }
        showToast('已添加: ' + product.name);
        updateCartDisplay();
    }
}

// 更新购物车显示
function updateCartDisplay() {
    const cartEl = document.getElementById('cartItems') || document.createElement('div');
    if (cartEl && cartItems.length > 0) {
        cartEl.innerHTML = cartItems.map(item => `
            <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                <div>${item.name} × ${item.qty}</div>
                <div>¥${(item.price * item.qty).toFixed(2)}</div>
            </div>
        `).join('');
        
        const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
        cartEl.innerHTML += `
            <div class="d-flex justify-content-between align-items-center py-3 mt-2">
                <strong>合计:</strong>
                <strong class="text-danger h4">¥${total.toFixed(2)}</strong>
            </div>
        `;
    }
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
    if (sectionId === 'products') renderProductList();
    if (sectionId === 'members') renderMemberList();
    if (sectionId === 'suppliers') renderSupplierList();
    if (sectionId === 'pos') {
        renderProductList();
        updateCartDisplay();
    }
}

// 显示提示
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-primary border-0 show position-fixed';
    toast.style.cssText = 'bottom: 20px; right: 20px; z-index: 9999;';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
