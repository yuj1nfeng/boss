// 超市管理系统 - 完整POS收银系统
const products = [
    { id: 'P001', name: '农夫山泉550ml', barcode: '6901234567891', category: '饮料', price: 2.00, cost: 1.20, stock: 240, unit: '瓶', minStock: 50, status: '正常' },
    { id: 'P002', name: '可口可乐330ml', barcode: '6901234567892', category: '饮料', price: 3.00, cost: 1.80, stock: 180, unit: '罐', minStock: 40, status: '正常' },
    { id: 'P003', name: '统一方便面', barcode: '6901234567893', category: '食品', price: 4.50, cost: 2.80, stock: 120, unit: '包', minStock: 30, status: '正常' },
    { id: 'P004', name: '伊利纯牛奶250ml', barcode: '6901234567894', category: '乳品', price: 3.50, cost: 2.20, stock: 96, unit: '盒', minStock: 30, status: '正常' },
    { id: 'P005', name: '旺仔QQ糖', barcode: '6901234567895', category: '零食', price: 2.50, cost: 1.50, stock: 200, unit: '包', minStock: 50, status: '正常' },
    { id: 'P006', name: '清风抽纸3层', barcode: '6901234567896', category: '日化', price: 5.90, cost: 3.50, stock: 80, unit: '包', minStock: 20, status: '正常' },
    { id: 'P007', name: '海飞丝洗发水200ml', barcode: '6901234567897', category: '日化', price: 29.90, cost: 18.00, stock: 45, unit: '瓶', minStock: 10, status: '正常' },
    { id: 'P008', name: '双汇火腿肠', barcode: '6901234567898', category: '食品', price: 1.50, cost: 0.90, stock: 300, unit: '根', minStock: 80, status: '正常' },
    { id: 'P009', name: '德芙巧克力', barcode: '6901234567899', category: '零食', price: 12.90, cost: 8.50, stock: 12, unit: '块', minStock: 15, status: '库存预警' },
    { id: 'P010', name: '蒙牛酸奶', barcode: '6901234567900', category: '乳品', price: 8.50, cost: 5.20, stock: 12, unit: '杯', minStock: 20, status: '库存预警' },
    { id: 'P011', name: '卫龙辣条', barcode: '6901234567901', category: '零食', price: 5.00, cost: 3.00, stock: 150, unit: '包', minStock: 40, status: '正常' },
    { id: 'P012', name: '青岛啤酒500ml', barcode: '6901234567902', category: '饮料', price: 6.00, cost: 3.80, stock: 0, unit: '罐', minStock: 30, status: '已缺货' }
];

const members = [
    { id: 'M001', name: '张三', phone: '13800138001', level: '钻石会员', discount: 0.88, points: 12580, balance: 200.00, totalSpent: 5860, joinDate: '2023-06-15', status: '正常' },
    { id: 'M002', name: '李四', phone: '13900139002', level: '黄金会员', discount: 0.92, points: 6890, balance: 150.00, totalSpent: 3280, joinDate: '2023-08-20', status: '正常' },
    { id: 'M003', name: '王五', phone: '13700137003', level: '白银会员', discount: 0.95, points: 2450, balance: 50.00, totalSpent: 1680, joinDate: '2023-10-10', status: '正常' },
    { id: 'M004', name: '赵六', phone: '13600136004', level: '普通会员', discount: 0.98, points: 580, balance: 0.00, totalSpent: 420, joinDate: '2024-01-05', status: '正常' },
    { id: 'M005', name: '孙七', phone: '13500135005', level: '黄金会员', discount: 0.92, points: 8920, balance: 300.00, totalSpent: 4560, joinDate: '2023-07-12', status: '正常' },
    { id: 'M006', name: '周八', phone: '13400134006', level: '钻石会员', discount: 0.88, points: 15680, balance: 500.00, totalSpent: 8920, joinDate: '2023-05-08', status: '正常' },
    { id: 'M007', name: '吴九', phone: '13300133007', level: '白银会员', discount: 0.95, points: 3200, balance: 80.00, totalSpent: 1980, joinDate: '2023-09-18', status: '正常' },
    { id: 'M008', name: '郑十', phone: '13200132008', level: '普通会员', discount: 0.98, points: 120, balance: 0.00, totalSpent: 120, joinDate: '2024-04-01', status: '正常' }
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
    { id: 'O202405120001', time: '08:15:32', items: 5, total: 45.50, payment: '微信支付', cashier: '小张', member: '张三' },
    { id: 'O202405120002', time: '08:28:15', items: 3, total: 18.00, payment: '支付宝', cashier: '小张', member: '-' },
    { id: 'O202405120003', time: '09:05:42', items: 8, total: 126.80, payment: '微信支付', cashier: '小李', member: '李四' },
    { id: 'O202405120004', time: '09:45:18', items: 2, total: 88.50, payment: '现金', cashier: '小李', member: '-' },
    { id: 'O202405120005', time: '10:22:56', items: 12, total: 156.00, payment: '微信支付', cashier: '小张', member: '王五' },
    { id: 'O202405120006', time: '11:08:33', items: 6, total: 78.50, payment: '支付宝', cashier: '小张', member: '赵六' }
];

// POS系统全局变量
let cart = [];
let currentMember = null;
let heldOrders = [];
let currentPaymentMethod = '';

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
    initCharts();
    renderProductList();
    renderMemberList();
    renderSupplierList();
    renderTodayOrders();
    renderQuickProducts();
    updateTime();
    setInterval(updateTime, 1000);
});

// 更新时间
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { hour12: false });
    const el = document.getElementById('currentTime');
    if (el) el.textContent = timeStr;
}

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
            <td><span class="badge bg-secondary">${p.id}</span><br><small>${p.barcode}</small></td>
            <td><strong>${p.name}</strong></td>
            <td><span class="badge bg-info">${p.category}</span></td>
            <td>¥${p.price.toFixed(2)}</td>
            <td style="color: ${p.stock <= p.minStock ? '#dc2626' : '#16a34a'};">${p.stock} ${p.unit}</td>
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
    const tbody = document.getElementById('memberList') || document.createElement('tbody');
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
                    <small class="text-secondary">${o.time} · ${o.items}件 · ${o.payment}</small>
                </div>
                <span class="text-success fw-bold">¥${o.total.toFixed(2)}</span>
            </div>
        `).join('');
    }
}

// ==================== POS收银系统核心功能 ====================

// 渲染快捷商品
function renderQuickProducts() {
    const container = document.getElementById('quickProducts');
    if (container) {
        container.innerHTML = products.slice(0, 8).map(p => `
            <div class="col-3">
                <button class="btn btn-outline-primary w-100 h-100" style="padding:15px 5px;" onclick="addToCart('${p.id}')">
                    <div class="fw-bold small">${p.name.slice(0, 8)}</div>
                    <div class="text-danger">¥${p.price.toFixed(2)}</div>
                </button>
            </div>
        `).join('');
    }
}

// 切换快捷商品面板
function toggleQuickPanel() {
    const panel = document.getElementById('quickPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// 搜索商品
function searchProduct(keyword) {
    if (!keyword.trim()) {
        document.getElementById('searchResultPanel').style.display = 'none';
        return;
    }
    
    const results = products.filter(p => 
        p.name.includes(keyword) || p.barcode.includes(keyword) || p.id.includes(keyword)
    );
    
    const container = document.getElementById('searchResults');
    const panel = document.getElementById('searchResultPanel');
    
    if (results.length === 0) {
        container.innerHTML = `<tr><td colspan="5" class="text-center py-3 text-muted">未找到匹配商品</td></tr>`;
    } else if (results.length === 1) {
        addToCart(results[0].id);
        panel.style.display = 'none';
        document.getElementById('barcodeInput').value = '';
        return;
    } else {
        container.innerHTML = results.map(p => `
            <tr>
                <td>${p.name}</td>
                <td><span class="badge bg-secondary">${p.barcode}</span></td>
                <td>¥${p.price.toFixed(2)}</td>
                <td>${p.stock}${p.unit}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="addToCart('${p.id}');document.getElementById('searchResultPanel').style.display='none';">
                        <i class="bi bi-plus"></i> 添加
                    </button>
                </td>
            </tr>
        `).join('');
    }
    panel.style.display = 'block';
}

// 添加到购物车
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.stock <= 0) {
        showToast(`库存不足: ${product.name}`);
        return;
    }
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        if (existing.qty < product.stock) {
            existing.qty++;
        } else {
            showToast(`库存不足，最多可购买${product.stock}件`);
            return;
        }
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCartDisplay();
    showToast(`已添加: ${product.name}`);
}

// 更新购物车数量
function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    const product = products.find(p => p.id === productId);
    const newQty = item.qty + delta;
    
    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQty > product.stock) {
        showToast(`库存不足，最多可购买${product.stock}件`);
        return;
    }
    
    item.qty = newQty;
    updateCartDisplay();
}

// 从购物车移除
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// 清空购物车
function clearCart() {
    if (cart.length === 0) return;
    if (confirm('确定要清空购物车吗？')) {
        cart = [];
        updateCartDisplay();
        showToast('购物车已清空');
    }
}

// 更新购物车显示
function updateCartDisplay() {
    const tbody = document.getElementById('cartItems');
    const countEl = document.getElementById('cartCount');
    
    if (cart.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-5 text-muted">
                    <i class="bi bi-cart-x" style="font-size:48px;"></i>
                    <p class="mt-2">购物车为空，请扫描或添加商品</p>
                </td>
            </tr>
        `;
        countEl.textContent = '0';
    } else {
        tbody.innerHTML = cart.map(item => `
            <tr>
                <td>
                    <div class="fw-bold">${item.name}</div>
                    <small class="text-muted">${item.barcode}</small>
                </td>
                <td>¥${item.price.toFixed(2)}</td>
                <td>
                    <div class="input-group input-group-sm" style="width:100px;">
                        <button class="btn btn-outline-secondary" onclick="updateCartQty('${item.id}', -1)">-</button>
                        <input type="text" class="form-control text-center" value="${item.qty}" readonly>
                        <button class="btn btn-outline-secondary" onclick="updateCartQty('${item.id}', 1)">+</button>
                    </div>
                </td>
                <td class="fw-bold text-danger">¥${(item.price * item.qty).toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${item.id}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
        countEl.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    }
    
    calculateTotal();
}

// 搜索会员
function searchMember(phone) {
    const member = members.find(m => m.phone === phone.trim());
    if (member) {
        currentMember = member;
        document.getElementById('memberName').textContent = member.name;
        document.getElementById('memberLevel').textContent = member.level;
        document.getElementById('memberPoints').textContent = member.points;
        document.getElementById('memberBalance').textContent = member.balance.toFixed(2);
        document.getElementById('memberInfo').style.display = 'block';
        showToast(`会员登录: ${member.name}`);
        calculateTotal();
    } else {
        showToast('未找到该会员');
    }
}

// 清除会员
function clearMember() {
    currentMember = null;
    document.getElementById('memberInfo').style.display = 'none';
    document.getElementById('memberPhone').value = '';
    document.getElementById('usePoints').checked = false;
    document.getElementById('useBalance').checked = false;
    calculateTotal();
    showToast('会员已登出');
}

// 计算金额
function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    let memberDiscount = 0;
    let pointsDiscount = 0;
    let balanceDiscount = 0;
    
    // 会员折扣
    if (currentMember) {
        memberDiscount = subtotal * (1 - currentMember.discount);
    }
    
    // 积分抵扣
    if (currentMember && document.getElementById('usePoints').checked) {
        pointsDiscount = Math.min(currentMember.points / 100, subtotal - memberDiscount);
    }
    
    // 余额抵扣
    if (currentMember && document.getElementById('useBalance').checked) {
        balanceDiscount = Math.min(currentMember.balance, subtotal - memberDiscount - pointsDiscount);
    }
    
    const totalAmount = subtotal - memberDiscount - pointsDiscount - balanceDiscount;
    
    document.getElementById('totalItems').textContent = cart.reduce((sum, item) => sum + item.qty, 0) + ' 件';
    document.getElementById('subtotal').textContent = `¥${subtotal.toFixed(2)}`;
    document.getElementById('memberDiscount').textContent = `-¥${memberDiscount.toFixed(2)}`;
    document.getElementById('pointsDiscount').textContent = `-¥${pointsDiscount.toFixed(2)}`;
    document.getElementById('balanceDiscount').textContent = `-¥${balanceDiscount.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `¥${Math.max(0, totalAmount).toFixed(2)}`;
    
    return { subtotal, memberDiscount, pointsDiscount, balanceDiscount, totalAmount: Math.max(0, totalAmount) };
}

// 结算
function checkout(paymentMethod) {
    if (cart.length === 0) {
        showToast('购物车为空');
        return;
    }
    
    const amounts = calculateTotal();
    currentPaymentMethod = paymentMethod;
    
    // 显示收银小票
    showReceipt(amounts);
    
    // 清空购物车和会员
    cart = [];
    updateCartDisplay();
    clearMember();
}

// 显示收银小票
function showReceipt(amounts) {
    const now = new Date();
    document.getElementById('receiptTime').textContent = now.toLocaleString('zh-CN');
    document.getElementById('receiptItemsCount').textContent = cart.reduce((sum, item) => sum + item.qty, 0) + ' 件';
    document.getElementById('receiptSubtotal').textContent = `¥${amounts.subtotal.toFixed(2)}`;
    document.getElementById('receiptDiscount').textContent = `-¥${(amounts.memberDiscount + amounts.pointsDiscount + amounts.balanceDiscount).toFixed(2)}`;
    document.getElementById('receiptTotal').textContent = `¥${amounts.totalAmount.toFixed(2)}`;
    document.getElementById('receiptPayment').textContent = currentPaymentMethod;
    
    // 生成小票商品列表
    const itemsHtml = cart.map(item => `
        <div class="d-flex justify-content-between align-items-center py-1">
            <span>${item.name} × ${item.qty}</span>
            <span>¥${(item.price * item.qty).toFixed(2)}</span>
        </div>
    `).join('');
    document.getElementById('receiptItems').innerHTML = itemsHtml;
    
    // 显示弹窗
    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    modal.show();
    
    showToast('支付成功！');
}

// 打印小票
function printReceipt() {
    showToast('正在打印小票...');
    setTimeout(() => showToast('打印完成！'), 1000);
}

// 挂单
function holdOrder() {
    if (cart.length === 0) {
        showToast('购物车为空，无法挂单');
        return;
    }
    
    heldOrders.push({
        id: 'H' + Date.now().toString().slice(-6),
        time: new Date().toLocaleTimeString('zh-CN'),
        items: [...cart],
        member: currentMember ? currentMember.name : null,
        total: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    });
    
    cart = [];
    updateCartDisplay();
    showToast(`已挂单，单号: ${heldOrders[heldOrders.length - 1].id}`);
}

// 查看挂单
function showHeldOrders() {
    if (heldOrders.length === 0) {
        showToast('暂无挂单');
        return;
    }
    
    const orderList = heldOrders.map(o => `
        📋 ${o.id} | ${o.items.reduce((sum, i) => sum + i.qty, 0)}件商品 | ¥${o.total.toFixed(2)}
    `).join('\n');
    
    alert(`当前挂单 (${heldOrders.length}):\n\n${orderList}`);
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
    
    if (sectionId === 'products') renderProductList();
    if (sectionId === 'members') renderMemberList();
    if (sectionId === 'suppliers') renderSupplierList();
    if (sectionId === 'orders') renderOrderList();
}

// 渲染订单列表
function renderOrderList() {
    const tbody = document.getElementById('orderList') || document.createElement('tbody');
    tbody.innerHTML = todayOrders.map(o => `
        <tr>
            <td><span class="badge bg-secondary">${o.id}</span></td>
            <td>${o.time}</td>
            <td>${o.items}件</td>
            <td><strong>¥${o.total.toFixed(2)}</strong></td>
            <td><span class="badge bg-info">${o.payment}</span></td>
            <td>${o.cashier}</td>
            <td>${o.member !== '-' ? `<span class="badge bg-warning">${o.member}</span>` : '-'}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看订单详情')">详情</button>
                <button class="btn btn-sm btn-outline-danger" onclick="showToast('退款功能开发中')">退款</button>
            </td>
        </tr>
    `).join('');
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
