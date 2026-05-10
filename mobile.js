// 移动端交互逻辑

// 检测是否为移动设备
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth < 768;
}

// PC端显示提示
document.addEventListener('DOMContentLoaded', function() {
    if (!isMobileDevice()) {
        const hint = document.getElementById('pc-hint');
        if (hint) {
            hint.style.display = 'block';
        }
    }
});

const pondsMobile = [
    { id: 1, name: '1号塘', fish: '鲈鱼', status: 'normal', do: 6.2, ph: 7.4, temp: 26.8 },
    { id: 2, name: '2号塘', fish: '草鱼', status: 'normal', do: 5.8, ph: 7.2, temp: 27.1 },
    { id: 3, name: '3号塘', fish: '鲈鱼', status: 'warning', do: 2.3, ph: 7.8, temp: 26.5 },
    { id: 4, name: '4号塘', fish: '鲫鱼', status: 'normal', do: 6.5, ph: 7.3, temp: 25.9 },
    { id: 5, name: '5号塘', fish: '南美白对虾', status: 'warning', do: 5.5, ph: 9.2, temp: 27.5 },
    { id: 6, name: '6号塘', fish: '鲈鱼', status: 'normal', do: 6.0, ph: 7.5, temp: 26.2 },
    { id: 7, name: '7号塘', fish: '草鱼', status: 'normal', do: 5.9, ph: 7.1, temp: 26.7 },
    { id: 8, name: '8号塘', fish: '鲈鱼', status: 'normal', do: 6.3, ph: 7.6, temp: 25.8 }
];

const alertsMobile = [
    { id: 1, level: 'danger', title: '3号塘溶解氧过低', desc: '当前溶解氧2.3mg/L，建议立即开启增氧机', time: '10分钟前' },
    { id: 2, level: 'warning', title: '5号塘pH值异常', desc: '当前pH值9.2，超出正常范围', time: '25分钟前' },
    { id: 3, level: 'warning', title: '1号塘水温偏高', desc: '当前水温32.5°C，请注意观察', time: '1小时前' }
];

const feedPlans = [
    { time: '06:30', amount: '350kg', ponds: '1-4号塘', enabled: true },
    { time: '12:00', amount: '400kg', ponds: '1-4号塘', enabled: true },
    { time: '18:30', amount: '380kg', ponds: '全部塘口', enabled: true },
    { time: '23:00', amount: '150kg', ponds: '5-8号塘', enabled: false }
];

let currentPondId = 1;
let waterChart = null;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initHomePondsList();
    initHomeAlertsList();
    initPondSelector();
    initWaterIndicators();
    initFeedPlanList();
    initAllAlertsList();
    initWaterChart();
    startRealTimeUpdate();
});

// 切换页面
function showPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll('.page-mobile').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById('page-' + pageName).classList.add('active');
    
    // 更新底部导航状态
    document.querySelectorAll('.nav-item-mobile').forEach((item, index) => {
        item.classList.remove('active');
        if ((pageName === 'home' && index === 0) ||
            (pageName === 'water' && index === 1) ||
            (pageName === 'feed' && index === 2) ||
            (pageName === 'alerts' && index === 3) ||
            (pageName === 'profile' && index === 4)) {
            item.classList.add('active');
        }
    });

    // 如果切换到水质页，重新渲染图表
    if (pageName === 'water') {
        setTimeout(() => {
            initWaterChart();
        }, 100);
    }
}

// 初始化首页塘口列表
function initHomePondsList() {
    const container = document.getElementById('home-ponds-list');
    container.innerHTML = pondsMobile.slice(0, 4).map(pond => `
        <div class="pond-mini" onclick="selectPondForWater(${pond.id})">
            <div class="pond-status-dot ${pond.status}"></div>
            <div class="pond-info">
                <div class="pond-name">${pond.name} · ${pond.fish}</div>
                <div class="pond-data">溶解氧 ${pond.do}mg/L · pH ${pond.ph} · 水温 ${pond.temp}°C</div>
            </div>
            <i class="bi bi-chevron-right pond-arrow"></i>
        </div>
    `).join('');
}

// 初始化首页告警列表
function initHomeAlertsList() {
    const container = document.getElementById('home-alerts-list');
    container.innerHTML = alertsMobile.slice(0, 3).map(alert => `
        <div class="alert-item-mobile">
            <div class="alert-icon-mobile ${alert.level}">
                <i class="bi bi-exclamation-triangle"></i>
            </div>
            <div class="alert-content-mobile">
                <div class="alert-title-mobile">${alert.title}</div>
                <div class="alert-time-mobile">${alert.time}</div>
            </div>
        </div>
    `).join('');
}

// 初始化塘口选择器
function initPondSelector() {
    const container = document.getElementById('pond-selector');
    container.innerHTML = pondsMobile.map(pond => `
        <div class="pond-tag ${pond.id === currentPondId ? 'active' : ''}" onclick="selectPond(${pond.id})">
            ${pond.name}
        </div>
    `).join('');
}

// 选择塘口
function selectPond(pondId) {
    currentPondId = pondId;
    initPondSelector();
    initWaterIndicators();
    initWaterChart();
    
    const pond = pondsMobile.find(p => p.id === pondId);
    document.getElementById('water-pond-name').textContent = `${pond.name} · ${pond.fish}`;
    
    showToast(`已切换到${pond.name}`);
}

// 从首页选择塘口跳转到水质页
function selectPondForWater(pondId) {
    selectPond(pondId);
    showPage('water');
}

// 初始化水质指标卡片
function initWaterIndicators() {
    const pond = pondsMobile.find(p => p.id === currentPondId);
    const indicators = [
        { name: '溶解氧', value: pond.do, unit: 'mg/L', min: 0, max: 10, color: '#60a5fa', status: pond.do < 3 ? 'danger' : pond.do < 4 ? 'warning' : 'normal' },
        { name: 'pH值', value: pond.ph, unit: '', min: 0, max: 14, color: '#a78bfa', status: pond.ph < 6.5 || pond.ph > 8.5 ? 'warning' : 'normal' },
        { name: '水温', value: pond.temp, unit: '°C', min: 0, max: 40, color: '#fbbf24', status: pond.temp > 32 ? 'warning' : 'normal' },
        { name: '氨氮', value: 0.35, unit: 'mg/L', min: 0, max: 2, color: '#34d399', status: 'normal' }
    ];

    const container = document.getElementById('water-indicators');
    container.innerHTML = indicators.map(ind => `
        <div class="indicator-card">
            <div class="indicator-header">
                <span class="indicator-name">${ind.name}</span>
                <span class="indicator-status" style="background: ${ind.status === 'normal' ? '#34d399' : ind.status === 'warning' ? '#fbbf24' : '#ef4444'}"></span>
            </div>
            <div class="indicator-value" style="color: ${ind.color}">
                ${ind.value}<span class="indicator-unit">${ind.unit}</span>
            </div>
            <div class="indicator-bar">
                <div class="indicator-bar-fill" style="width: ${(ind.value / ind.max) * 100}%; background: ${ind.color}"></div>
            </div>
        </div>
    `).join('');
}

// 初始化投喂计划列表
function initFeedPlanList() {
    const container = document.getElementById('feed-plan-list');
    container.innerHTML = feedPlans.map((plan, index) => `
        <div class="feed-plan-item">
            <div class="feed-time">${plan.time}</div>
            <div class="feed-detail">
                <div class="feed-amount">投喂 ${plan.amount}</div>
                <div class="feed-ponds">${plan.ponds}</div>
            </div>
            <div class="toggle-switch-mobile ${plan.enabled ? 'on' : ''}" onclick="toggleFeedPlan(${index})"></div>
        </div>
    `).join('');
}

// 切换投喂计划
function toggleFeedPlan(index) {
    feedPlans[index].enabled = !feedPlans[index].enabled;
    initFeedPlanList();
    showToast(feedPlans[index].enabled ? '已启用投喂计划' : '已禁用投喂计划');
}

// 初始化全部告警列表
function initAllAlertsList() {
    const container = document.getElementById('all-alerts-list');
    container.innerHTML = alertsMobile.map(alert => `
        <div class="alert-item-mobile" onclick="handleAlert(${alert.id})">
            <div class="alert-icon-mobile ${alert.level}">
                <i class="bi bi-exclamation-triangle"></i>
            </div>
            <div class="alert-content-mobile">
                <div class="alert-title-mobile">${alert.title}</div>
                <div class="alert-time-mobile">${alert.desc} · ${alert.time}</div>
            </div>
        </div>
    `).join('');
}

// 处理告警
function handleAlert(alertId) {
    const index = alertsMobile.findIndex(a => a.id === alertId);
    if (index > -1) {
        alertsMobile.splice(index, 1);
        initAllAlertsList();
        initHomeAlertsList();
        updateAlertBadge();
        showToast('告警已处理');
    }
}

// 更新告警数量徽章
function updateAlertBadge() {
    const badge = document.querySelector('.nav-item-mobile .badge');
    if (badge) {
        badge.textContent = alertsMobile.length;
        if (alertsMobile.length === 0) {
            badge.style.display = 'none';
        }
    }
}

// 初始化水质图表
function initWaterChart() {
    const ctx = document.getElementById('water-chart-mobile');
    if (!ctx) return;
    
    const ctx2d = ctx.getContext('2d');
    const labels = Array.from({length: 24}, (_, i) => `${i}:00`);
    const data = Array.from({length: 24}, () => 5 + Math.random() * 2);
    
    if (waterChart) {
        waterChart.destroy();
    }
    
    waterChart = new Chart(ctx2d, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '溶解氧 (mg/L)',
                data: data,
                borderColor: '#60a5fa',
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 500
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { 
                        color: '#94a3b8',
                        maxTicksLimit: 6
                    }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' },
                    min: 3,
                    max: 9
                }
            }
        }
    });
}

// 一键增氧
function toggleAllOxygen() {
    showToast('已开启全部增氧机');
}

// 开启当前塘口增氧
function openOxygen() {
    const pond = pondsMobile.find(p => p.id === currentPondId);
    showToast(`已开启${pond.name}增氧机`);
}

// 立即投喂当前塘口
function feedOnce() {
    const pond = pondsMobile.find(p => p.id === currentPondId);
    showToast(`${pond.name}正在投喂中...`);
}

// 立即投喂全部
function triggerFeedNow() {
    showToast('正在执行立即投喂...');
    setTimeout(() => {
        showToast('投喂完成');
    }, 2000);
}

// 实时数据更新
function startRealTimeUpdate() {
    setInterval(() => {
        // 更新塘口数据模拟实时变化
        pondsMobile.forEach(pond => {
            if (Math.random() > 0.6) {
                pond.temp = parseFloat((pond.temp + (Math.random() - 0.5) * 0.2).toFixed(1));
                pond.do = parseFloat((pond.do + (Math.random() - 0.5) * 0.3).toFixed(1));
                pond.ph = parseFloat((pond.ph + (Math.random() - 0.5) * 0.1).toFixed(1));
            }
        });

        // 更新水质页面数据
        if (document.getElementById('page-water').classList.contains('active')) {
            initWaterIndicators();
        }
        
        // 更新首页数据
        if (document.getElementById('page-home').classList.contains('active')) {
            initHomePondsList();
        }
    }, 3000);
}

// 显示Toast提示
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    
    toastText.textContent = message;
    toast.style.display = 'block';
    toast.style.opacity = '0';
    
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transition = 'opacity 0.3s ease';
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 300);
    }, 2000);
}

// 下拉刷新
let startY = 0;
let isDragging = false;

document.addEventListener('touchstart', function(e) {
    if (window.scrollY === 0) {
        startY = e.touches[0].pageY;
        isDragging = true;
    }
});

document.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    const currentY = e.touches[0].pageY;
    const diff = currentY - startY;
    
    if (diff > 80 && window.scrollY === 0) {
        showToast('正在刷新...');
        isDragging = false;
        setTimeout(() => {
            showToast('刷新完成');
        }, 1000);
    }
});

document.addEventListener('touchend', function() {
    isDragging = false;
});

// 控制台信息
console.log('%c 智慧养殖 - 移动端H5原型', 'font-size: 16px; font-weight: bold; color: #60a5fa;');
console.log('%c 已加载完成，支持触摸操作', 'color: #34d399;');
console.log('%c 底部导航：首页、监测、投喂、告警、我的', 'color: #94a3b8;');
