// 模拟数据
const ponds = [
    { id: 1, name: '1号塘', area: '12亩', status: 'normal', temperature: 26.8, do: 6.2, ph: 7.4, fish: '鲈鱼', count: 50000 },
    { id: 2, name: '2号塘', area: '10亩', status: 'normal', temperature: 27.1, do: 5.8, ph: 7.2, fish: '草鱼', count: 45000 },
    { id: 3, name: '3号塘', area: '15亩', status: 'warning', temperature: 26.5, do: 2.3, ph: 7.8, fish: '鲈鱼', count: 60000 },
    { id: 4, name: '4号塘', area: '8亩', status: 'normal', temperature: 25.9, do: 6.5, ph: 7.3, fish: '鲫鱼', count: 30000 },
    { id: 5, name: '5号塘', area: '20亩', status: 'warning', temperature: 27.5, do: 5.5, ph: 9.2, fish: '虾类', count: 80000 },
    { id: 6, name: '6号塘', area: '12亩', status: 'normal', temperature: 26.2, do: 6.0, ph: 7.5, fish: '鲈鱼', count: 55000 },
    { id: 7, name: '7号塘', area: '10亩', status: 'normal', temperature: 26.7, do: 5.9, ph: 7.1, fish: '草鱼', count: 40000 },
    { id: 8, name: '8号塘', area: '15亩', status: 'normal', temperature: 25.8, do: 6.3, ph: 7.6, fish: '鲈鱼', count: 52000 }
];

const batches = [
    { id: 'B20240315', pond: '1号塘', species: '鲈鱼', count: 50000, date: '2024-03-15', days: 56, survival: 96.5, status: '养殖中' },
    { id: 'B20240320', pond: '2号塘', species: '草鱼', count: 45000, date: '2024-03-20', days: 51, survival: 95.2, status: '养殖中' },
    { id: 'B20240210', pond: '3号塘', species: '鲈鱼', count: 60000, date: '2024-02-10', days: 89, survival: 92.8, status: '养殖中' },
    { id: 'B20240105', pond: '4号塘', species: '鲫鱼', count: 30000, date: '2024-01-05', days: 125, survival: 98.1, status: '待捕捞' },
    { id: 'B20240401', pond: '5号塘', species: '南美白对虾', count: 80000, date: '2024-04-01', days: 39, survival: 94.5, status: '养殖中' }
];

const devices = [
    { id: 'WS001', name: '水质传感器-1', type: '水质传感器', pond: '1号塘', status: 'online', lastConn: '刚刚' },
    { id: 'WS002', name: '水质传感器-2', type: '水质传感器', pond: '2号塘', status: 'online', lastConn: '1分钟前' },
    { id: 'OZ001', name: '增氧控制器-1', type: '增氧机控制器', pond: '1号塘', status: 'online', lastConn: '刚刚' },
    { id: 'FD001', name: '投饵机-1', type: '自动投饵机', pond: '1号塘', status: 'online', lastConn: '2分钟前' },
    { id: 'FD005', name: '投饵机-5', type: '自动投饵机', pond: '5号塘', status: 'offline', lastConn: '2小时前' },
    { id: 'CAM008', name: '监控-8', type: '监控摄像头', pond: '8号塘', status: 'offline', lastConn: '5小时前' }
];

// 当前选中的塘口
let selectedPond = null;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initPondsGrid();
    initPondSelector();
    initCharts();
    initBatchTable();
    initDeviceTable();
    initWaterDetails();
    startRealTimeUpdate();
});

// 切换侧边栏（移动端）
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// 切换页面部分
function showSection(sectionId) {
    // 隐藏所有部分
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示选中部分
    document.getElementById(sectionId).classList.add('active');
    
    // 更新导航激活状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // 更新页面标题
    const titles = {
        'dashboard': '数据概览',
        'water': '水质监测',
        'breeding': '养殖管理',
        'feed': '饲料管理',
        'disease': '疫病防控',
        'devices': '设备管理',
        'analytics': '数据分析',
        'settings': '系统设置'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId];
    
    // 移动端关闭侧边栏
    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
    
    // 如果切换到水质监测时刷新图表
    if (sectionId === 'water') {
        setTimeout(() => {
            initRealtimeChart();
        }, 100);
    }
}

// 初始化塘口网格
function initPondsGrid() {
    const grid = document.getElementById('pondsGrid');
    grid.innerHTML = ponds.map(pond => `
        <div class="col-md-3">
            <div class="pond-card ${pond.status === 'warning' ? 'border-warning' : ''}" onclick="selectPondCard(this, ${pond.id})">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <div style="font-weight: 600; font-size: 18px;">${pond.name}</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">${pond.area} · ${pond.fish}</div>
                    </div>
                    <span class="status-badge status-${pond.status}">${pond.status === 'normal' ? '正常' : '异常'}</span>
                </div>
                <div class="row g-2 text-center">
                    <div class="col-4">
                        <div style="font-size: 14px; color: var(--text-secondary);">水温</div>
                        <div style="font-weight: 600;">${pond.temperature}°C</div>
                    </div>
                    <div class="col-4">
                        <div style="font-size: 14px; color: var(--text-secondary);">溶解氧</div>
                        <div style="font-weight: 600; color: ${pond.do < 3 ? '#ef4444' : 'inherit'}">${pond.do} mg/L</div>
                    </div>
                    <div class="col-4">
                        <div style="font-size: 14px; color: var(--text-secondary);">pH</div>
                        <div style="font-weight: 600; color: ${pond.ph > 9 ? '#f59e0b' : 'inherit'}">${pond.ph}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 选择塘口卡片
function selectPondCard(element, pondId) {
    document.querySelectorAll('.pond-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
    selectedPond = pondId;
    showSection('water');
}

// 初始化塘口选择器
function initPondSelector() {
    const selector = document.getElementById('pondSelector');
    ponds.forEach(pond => {
        const option = document.createElement('option');
        option.value = pond.id;
        option.textContent = pond.name;
        selector.appendChild(option);
    });
}

// 选择塘口
function selectPond(pondId) {
    selectedPond = pondId === 'all' ? null : parseInt(pondId);
    updateWaterGauges();
    updateWaterDetails();
}

// 更新水质仪表
function updateWaterGauges() {
    const container = document.getElementById('waterGauges');
    const indicators = [
        { name: '溶解氧', value: selectedPond ? ponds.find(p => p.id === selectedPond).do : 5.8, unit: 'mg/L', min: 0, max: 10, color: '#60a5fa' },
        { name: 'pH值', value: selectedPond ? ponds.find(p => p.id === selectedPond).ph : 7.5, unit: '', min: 0, max: 14, color: '#a78bfa' },
        { name: '水温', value: selectedPond ? ponds.find(p => p.id === selectedPond).temperature : 26.8, unit: '°C', min: 0, max: 40, color: '#fbbf24' },
        { name: '氨氮', value: 0.35, unit: 'mg/L', min: 0, max: 2, color: '#34d399' }
    ];
    
    container.innerHTML = indicators.map(ind => `
        <div class="col-md-3">
            <div class="card p-4 text-center">
                <div style="font-weight: 600; margin-bottom: 15px;">${ind.name}</div>
                <div class="gauge-container mx-auto mb-3">
                    <div class="gauge-bg">
                        <div class="gauge-inner">
                            <div class="gauge-needle" style="transform: translateX(-50%) rotate(${(ind.value / ind.max * 180 - 90)}deg"></div>
                        </div>
                    </div>
                    <div class="gauge-value">${ind.value}</div>
                </div>
                <div style="font-size: 24px; font-weight: 700; color: ${ind.color}">${ind.value}<span style="font-size: 14px; color: var(--text-secondary);">${ind.unit}</span></div>
            </div>
        </div>
    `).join('');
}

// 初始化水质详情
function initWaterDetails() {
    updateWaterGauges();
    updateWaterDetails();
}

// 更新水质详情
function updateWaterDetails() {
    const tbody = document.getElementById('waterDetails');
    const pond = selectedPond ? ponds.find(p => p.id === selectedPond) : ponds[0];
    
    const data = [
        { name: '溶解氧 (DO)', value: `${pond.do} mg/L`, status: pond.do < 3 ? 'danger' : pond.do < 4 ? 'warning' : 'normal' },
        { name: 'pH值', value: pond.ph, status: pond.ph < 6.5 || pond.ph > 8.5 ? 'warning' : 'normal' },
        { name: '水温', value: `${pond.temperature}°C`, status: pond.temperature > 32 ? 'warning' : 'normal' },
        { name: '氨氮', value: '0.35 mg/L', status: 'normal' },
        { name: '亚硝酸盐', value: '0.08 mg/L', status: 'normal' },
        { name: '透明度', value: '35 cm', status: 'normal' }
    ];
    
    tbody.innerHTML = data.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.value}</td>
            <td><span class="status-badge status-${item.status}">${item.status === 'normal' ? '正常' : item.status === 'warning' ? '警告' : '危险'}</span></td>
        </tr>
    `).join('');
}

// 处理告警
function handleAlert(button) {
    const alertItem = button.parentElement;
    alertItem.style.opacity = '0';
    setTimeout(() => {
        alertItem.remove();
        const alertsCount = document.querySelectorAll('.alert-item').length;
        document.getElementById('alerts').textContent = alertsCount;
    }, 300);
}

// 显示新增塘口弹窗
function showAddPondModal() {
    new bootstrap.Modal(document.getElementById('addPondModal')).show();
}

// 显示新增批次弹窗
function showAddBatchModal() {
    new bootstrap.Modal(document.getElementById('addBatchModal')).show();
}

// 初始化批次表格
function initBatchTable() {
    const tbody = document.getElementById('batchTable');
    tbody.innerHTML = batches.map(batch => `
        <tr>
            <td style="font-weight: 500;">${batch.id}</td>
            <td>${batch.pond}</td>
            <td>${batch.species}</td>
            <td>${batch.count.toLocaleString()}</td>
            <td>${batch.date}</td>
            <td>${batch.days}天</td>
            <td style="color: var(--success-color);">${batch.survival}%</td>
            <td><span class="status-badge status-${batch.status === '待捕捞' ? 'warning' : 'normal'}">${batch.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary">详情</button>
            </td>
        </tr>
    `).join('');
}

// 初始化设备表格
function initDeviceTable() {
    const tbody = document.getElementById('deviceTable');
    tbody.innerHTML = devices.map(device => `
        <tr>
            <td style="font-weight: 500;">${device.id}</td>
            <td>${device.name}</td>
            <td>${device.type}</td>
            <td>${device.pond}</td>
            <td><span class="status-badge status-${device.status === 'online' ? 'normal' : 'offline'}">${device.status === 'online' ? '在线' : '离线'}</span></td>
            <td>${device.lastConn}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary">控制</button>
            </td>
        </tr>
    `).join('');
}

// 切换投喂开关
function toggleFeed(element) {
    element.classList.toggle('active');
}

// 添加投喂计划
function addFeedSchedule() {
    alert('原型演示：添加投喂计划功能');
}

// 病害图片分析
function analyzeDisease(input) {
    if (input.files && input.files[0]) {
        document.getElementById('diagnosisPlaceholder').style.display = 'none';
        document.getElementById('diagnosisResult').style.display = 'block';
    }
}

// 初始化所有图表
function initCharts() {
    initWaterTrendChart();
    initSpeciesChart();
    initFeedChart();
    initYieldChart();
    initCostChart();
    initRealtimeChart();
}

// 水质趋势图表
function initWaterTrendChart() {
    const ctx = document.getElementById('waterTrendChart').getContext('2d');
    const labels = Array.from({length: 30}, (_, i) => `${i + 1}日`);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '溶解氧 (mg/L)',
                    data: Array.from({length: 30}, () => 5 + Math.random() * 2),
                    borderColor: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: '水温 (°C)',
                    data: Array.from({length: 30}, () => 25 + Math.random() * 3),
                    borderColor: '#fbbf24',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'pH值',
                    data: Array.from({length: 30}, () => 7 + Math.random() * 1),
                    borderColor: '#a78bfa',
                    backgroundColor: 'rgba(167, 139, 250, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#94a3b8'
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// 更新水质图表
function updateWaterChart(days) {
    // 原型演示：切换时间范围
    console.log('切换时间范围:', days);
}

// 品种分布图表
function initSpeciesChart() {
    const ctx = document.getElementById('speciesChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['鲈鱼', '草鱼', '鲫鱼', '南美白对虾', '其他'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: ['#60a5fa', '#34d399', '#a78bfa', '#fbbf24', '#94a3b8']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

// 投喂量趋势图表
function initFeedChart() {
    const ctx = document.getElementById('feedChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [{
            label: '投喂量 (kg)',
            data: [2200, 2350, 2180, 2450, 2580, 2420, 2300],
            backgroundColor: 'rgba(37, 99, 235, 0.6)',
            borderRadius: 8
        }]
    },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// 产量预测图表
function initYieldChart() {
    const ctx = document.getElementById('yieldChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
            datasets: [
                {
                    label: '实际产量 (吨)',
                    data: [12, 15, 18, 22, 28, 35, 42, 50, 58],
                    borderColor: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: '预测产量 (吨)',
                    data: [10, 14, 17, 21, 27, 34, 41, 49, 57],
                    borderColor: '#a78bfa',
                    borderDash: [5, 5],
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#94a3b8'
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// 成本收益图表
function initCostChart() {
    const ctx = document.getElementById('costChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['饲料成本', '苗种成本', '水电费', '人工成本', '药品费用', '其他'],
            datasets: [
                {
                    label: '本月',
                    data: [45, 18, 8, 15, 7, 5],
                    backgroundColor: 'rgba(37, 99, 235, 0.8)',
                    borderRadius: 8
                },
                {
                    label: '上月',
                    data: [42, 20, 7, 17, 6, 5],
                    backgroundColor: 'rgba(124, 58, 237, 0.8)',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#94a3b8'
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// 实时数据图表
let realtimeChart = null;
function initRealtimeChart() {
    const ctx = document.getElementById('realtimeChart');
    if (!ctx) return;
    
    const ctx2d = ctx.getContext('2d');
    const labels = Array.from({length: 20}, (_, i) => `${20 - i}s`);
    const data = Array.from({length: 20}, () => 5.5 + Math.random() * 1);
    
    if (realtimeChart) {
        realtimeChart.destroy();
    }
    
    realtimeChart = new Chart(ctx2d, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '溶解氧实时数据',
                data: data,
                borderColor: '#60a5fa',
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#94a3b8'
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' },
                    min: 4,
                    max: 8
                }
            }
        }
    });
}

// 实时数据更新
function startRealTimeUpdate() {
    setInterval(() => {
        // 更新实时图表
        if (realtimeChart) {
            realtimeChart.data.datasets[0].data.shift();
            realtimeChart.data.datasets[0].data.push(5.5 + Math.random() * 1);
            realtimeChart.update('none');
        }
        
        // 随机更新一些塘口数据模拟实时变化
        ponds.forEach(pond => {
            if (Math.random() > 0.7) {
                pond.temperature = parseFloat((pond.temperature + (Math.random() - 0.5) * 0.2).toFixed(1));
                pond.do = parseFloat((pond.do + (Math.random() - 0.5) * 0.3).toFixed(1));
                pond.ph = parseFloat((pond.ph + (Math.random() - 0.5) * 0.1).toFixed(1));
            }
        });
        
    }, 2000);
}

// 控制台信息
console.log('%c 大规模水产养殖智能化管理系统 - 交互原型', 'font-size: 16px; font-weight: bold; color: #60a5fa;');
console.log('%c 已加载完成，所有交互功能可用', 'color: #34d399;');
console.log('%c 包含模块：数据概览、水质监测、养殖管理、饲料管理、疫病防控、设备管理、数据分析、系统设置', 'color: #94a3b8;');
