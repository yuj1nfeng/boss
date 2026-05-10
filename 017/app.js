// 温室大棚模拟数据
const greenhouses = [
    { id: 1, name: 'A1番茄温室', area: '1200㎡', type: '智能玻璃温室', status: 'normal', temperature: 26.8, humidity: 65, light: 35000, co2: 850, soilTemp: 22.5, soilMoisture: 68, ec: 2.3, ph: 6.4, crop: '番茄', plants: 8500, stage: '结果期', manager: '王师傅' },
    { id: 2, name: 'A2黄瓜温室', area: '1000㎡', type: '智能玻璃温室', status: 'normal', temperature: 27.1, humidity: 72, light: 32000, co2: 920, soilTemp: 23.1, soilMoisture: 72, ec: 2.5, ph: 6.2, crop: '黄瓜', plants: 7200, stage: '盛果期', manager: '李师傅' },
    { id: 3, name: 'A3草莓温室', area: '800㎡', type: '薄膜日光温室', status: 'warning', temperature: 29.5, humidity: 45, light: 48000, co2: 520, soilTemp: 24.8, soilMoisture: 42, ec: 1.8, ph: 5.8, crop: '草莓', plants: 12000, stage: '开花期', manager: '张师傅' },
    { id: 4, name: 'B1生菜温室', area: '1500㎡', type: '连栋薄膜温室', status: 'normal', temperature: 22.3, humidity: 78, light: 28000, co2: 1100, soilTemp: 20.2, soilMoisture: 75, ec: 1.5, ph: 6.5, crop: '生菜', plants: 15000, stage: '生长期', manager: '刘师傅' },
    { id: 5, name: 'B2辣椒温室', area: '1200㎡', type: '连栋薄膜温室', status: 'warning', temperature: 32.2, humidity: 55, light: 52000, co2: 480, soilTemp: 27.5, soilMoisture: 52, ec: 3.2, ph: 7.2, crop: '彩椒', plants: 9000, stage: '结果期', manager: '王师傅' },
    { id: 6, name: 'B3番茄温室', area: '1000㎡', type: '连栋薄膜温室', status: 'normal', temperature: 25.5, humidity: 68, light: 38000, co2: 880, soilTemp: 21.8, soilMoisture: 70, ec: 2.1, ph: 6.3, crop: '樱桃番茄', plants: 10000, stage: '转色期', manager: '李师傅' },
    { id: 7, name: 'C1育苗温室', area: '500㎡', type: '人工光型温室', status: 'normal', temperature: 24.0, humidity: 80, light: 25000, co2: 1200, soilTemp: 22.0, soilMoisture: 82, ec: 1.2, ph: 5.8, crop: '多种种苗', plants: 25000, stage: '育苗期', manager: '赵师傅' },
    { id: 8, name: 'C2花卉温室', area: '800㎡', type: '智能玻璃温室', status: 'normal', temperature: 22.8, humidity: 75, light: 30000, co2: 950, soilTemp: 20.5, soilMoisture: 68, ec: 1.6, ph: 6.0, crop: '玫瑰', plants: 6000, stage: '花期', manager: '张师傅' },
    { id: 9, name: 'D1西瓜温室', area: '2000㎡', type: '日光温室', status: 'normal', temperature: 30.2, humidity: 60, light: 45000, co2: 750, soilTemp: 26.5, soilMoisture: 65, ec: 1.9, ph: 6.8, crop: '西瓜', plants: 3500, stage: '膨大期', manager: '刘师傅' },
    { id: 10, name: 'D2葡萄温室', area: '1800㎡', type: '避雨棚', status: 'normal', temperature: 28.5, humidity: 62, light: 42000, co2: 780, soilTemp: 25.2, soilMoisture: 62, ec: 1.7, ph: 6.5, crop: '阳光玫瑰', plants: 2000, stage: '转色期', manager: '王师傅' },
    { id: 11, name: 'E1叶菜温室', area: '1500㎡', type: '植物工厂', status: 'normal', temperature: 23.0, humidity: 70, light: 20000, co2: 1500, soilTemp: 21.0, soilMoisture: 78, ec: 1.4, ph: 6.2, crop: '多种叶菜', plants: 20000, stage: '收获期', manager: '赵师傅' },
    { id: 12, name: 'E2药材温室', area: '1000㎡', type: '智能玻璃温室', status: 'danger', temperature: 35.8, humidity: 38, light: 65000, co2: 320, soilTemp: 30.2, soilMoisture: 35, ec: 4.5, ph: 7.8, crop: '铁皮石斛', plants: 8000, stage: '生长期', manager: '李师傅' }
];

const batches = [
    { id: 'B20240315', greenhouse: 'A1番茄温室', crop: '番茄', variety: '普罗旺斯', plants: 8500, plantDate: '2024-03-15', days: 56, survival: 98.5, stage: '结果期', expectedYield: 25500, source: '精品种苗公司' },
    { id: 'B20240320', greenhouse: 'A2黄瓜温室', crop: '黄瓜', variety: '德瑞特', plants: 7200, plantDate: '2024-03-20', days: 51, survival: 97.8, stage: '盛果期', expectedYield: 36000, source: '省级育苗中心' },
    { id: 'B20240210', greenhouse: 'A3草莓温室', crop: '草莓', variety: '章姬', plants: 12000, plantDate: '2024-02-10', days: 89, survival: 95.2, stage: '开花期', expectedYield: 18000, source: '本地草莓育苗基地' },
    { id: 'B20240105', greenhouse: 'B1生菜温室', crop: '生菜', variety: '意大利生菜', plants: 15000, plantDate: '2024-04-15', days: 25, survival: 99.2, stage: '生长期', expectedYield: 7500, source: '自育苗' },
    { id: 'B20240401', greenhouse: 'B2辣椒温室', crop: '彩椒', variety: '红色彩椒', plants: 9000, plantDate: '2024-03-01', days: 70, survival: 96.5, stage: '结果期', expectedYield: 13500, source: '进口种苗' },
    { id: 'B20240301', greenhouse: 'B3番茄温室', crop: '樱桃番茄', variety: '千禧', plants: 10000, plantDate: '2024-03-10', days: 61, survival: 97.2, stage: '转色期', expectedYield: 15000, source: '台湾引进' },
    { id: 'B20240215', greenhouse: 'C1育苗温室', crop: '多种种苗', variety: '混合', plants: 25000, plantDate: '2024-05-01', days: 14, survival: 98.8, stage: '育苗期', expectedYield: 24000, source: '自育苗' },
    { id: 'B20240120', greenhouse: 'C2花卉温室', crop: '玫瑰', variety: '卡罗拉', plants: 6000, plantDate: '2024-02-01', days: 73, survival: 94.5, stage: '花期', expectedYield: 36000, source: '云南种苗基地' },
    { id: 'B20231215', greenhouse: 'D1西瓜温室', crop: '西瓜', variety: '8424麒麟瓜', plants: 3500, plantDate: '2024-03-25', days: 46, survival: 97.5, stage: '膨大期', expectedYield: 14000, source: '自育苗' },
    { id: 'B20240228', greenhouse: 'D2葡萄温室', crop: '阳光玫瑰', variety: '夏黑砧木', plants: 2000, plantDate: '2023-12-01', days: 165, survival: 99.0, stage: '转色期', expectedYield: 4000, source: '浙江基地' },
    { id: 'B20240310', greenhouse: 'E1叶菜温室', crop: '多种叶菜', variety: '混合叶菜', plants: 20000, plantDate: '2024-05-05', days: 10, survival: 99.5, stage: '收获期', expectedYield: 6000, source: '植物工厂种苗' },
    { id: 'B20240410', greenhouse: 'E2药材温室', crop: '铁皮石斛', variety: '驯化种', plants: 8000, plantDate: '2024-01-10', days: 122, survival: 92.5, stage: '生长期', expectedYield: 2400, source: '浙江乐清' }
];

const devices = [
    { id: 'WS001', name: '环境传感器-A1', type: '环境传感器', greenhouse: 'A1番茄温室', status: 'online', lastConn: '刚刚', installDate: '2024-01-15' },
    { id: 'WS002', name: '环境传感器-A2', type: '环境传感器', greenhouse: 'A2黄瓜温室', status: 'online', lastConn: '1分钟前', installDate: '2024-01-15' },
    { id: 'WS003', name: '环境传感器-A3', type: '环境传感器', greenhouse: 'A3草莓温室', status: 'online', lastConn: '刚刚', installDate: '2024-01-15' },
    { id: 'WS004', name: '环境传感器-B1', type: '环境传感器', greenhouse: 'B1生菜温室', status: 'online', lastConn: '2分钟前', installDate: '2024-01-15' },
    { id: 'WS005', name: '环境传感器-B2', type: '环境传感器', greenhouse: 'B2辣椒温室', status: 'online', lastConn: '刚刚', installDate: '2024-01-20' },
    { id: 'WS006', name: '环境传感器-B3', type: '环境传感器', greenhouse: 'B3番茄温室', status: 'online', lastConn: '1分钟前', installDate: '2024-01-20' },
    { id: 'WS007', name: '环境传感器-C1', type: '环境传感器', greenhouse: 'C1育苗温室', status: 'online', lastConn: '刚刚', installDate: '2024-01-20' },
    { id: 'WS008', name: '环境传感器-C2', type: '环境传感器', greenhouse: 'C2花卉温室', status: 'online', lastConn: '3分钟前', installDate: '2024-01-20' },
    { id: 'VF001', name: '通风系统-A1', type: '智能通风系统', greenhouse: 'A1番茄温室', status: 'online', lastConn: '刚刚', power: '1.5kW', runtime: 480, fanSpeed: '60%' },
    { id: 'VF002', name: '通风系统-A2', type: '智能通风系统', greenhouse: 'A2黄瓜温室', status: 'online', lastConn: '刚刚', power: '1.5kW', runtime: 520, fanSpeed: '75%' },
    { id: 'VF003', name: '通风系统-A3', type: '智能通风系统', greenhouse: 'A3草莓温室', status: 'online', lastConn: '刚刚', power: '2.2kW', runtime: 650, fanSpeed: '100%' },
    { id: 'IR001', name: '灌溉系统-A1', type: '水肥一体化', greenhouse: 'A1番茄温室', status: 'online', lastConn: '30分钟前', todayIrr: 2.5, todayFert: 8.5 },
    { id: 'IR002', name: '灌溉系统-A2', type: '水肥一体化', greenhouse: 'A2黄瓜温室', status: 'online', lastConn: '25分钟前', todayIrr: 3.2, todayFert: 10.2 },
    { id: 'IR003', name: '灌溉系统-A3', type: '水肥一体化', greenhouse: 'A3草莓温室', status: 'online', lastConn: '1小时前', todayIrr: 1.8, todayFert: 6.8 },
    { id: 'LT001', name: '补光系统-C1', type: 'LED植物生长灯', greenhouse: 'C1育苗温室', status: 'online', lastConn: '刚刚', power: '5.0kW', todayLight: 12, intensity: '100%' },
    { id: 'LT002', name: '补光系统-C2', type: 'LED植物生长灯', greenhouse: 'C2花卉温室', status: 'online', lastConn: '刚刚', power: '4.0kW', todayLight: 10, intensity: '85%' },
    { id: 'HT001', name: '加热系统-E1', type: '空气源热泵', greenhouse: 'E1叶菜温室', status: 'online', lastConn: '刚刚', power: '15kW', todayHeat: 6, targetTemp: 23 },
    { id: 'CO2001', name: 'CO2发生器-B1', type: 'CO2施肥系统', greenhouse: 'B1生菜温室', status: 'online', lastConn: '15分钟前', todayCO2: 4, currentCO2: 1100 },
    { id: 'SH001', name: '遮阳系统-B2', type: '外遮阳系统', greenhouse: 'B2辣椒温室', status: 'online', lastConn: '刚刚', shading: '75%', autoMode: true },
    { id: 'SH002', name: '遮阳系统-E2', type: '内遮阳系统', greenhouse: 'E2药材温室', status: 'online', lastConn: '刚刚', shading: '100%', autoMode: true },
    { id: 'CAM001', name: '监控-A1', type: 'AI摄像头', greenhouse: 'A1番茄温室', status: 'online', lastConn: '刚刚', resolution: '4K', aiDetect: true },
    { id: 'CAM002', name: '监控-A2', type: 'AI摄像头', greenhouse: 'A2黄瓜温室', status: 'online', lastConn: '刚刚', resolution: '4K', aiDetect: true },
    { id: 'CAM003', name: '监控-A3', type: 'AI摄像头', greenhouse: 'A3草莓温室', status: 'online', lastConn: '刚刚', resolution: '4K', aiDetect: true },
    { id: 'CAM004', name: '监控-B1', type: 'AI摄像头', greenhouse: 'B1生菜温室', status: 'online', lastConn: '刚刚', resolution: '4K', aiDetect: true },
    { id: 'CAM005', name: '监控-C1', type: 'AI摄像头', greenhouse: 'C1育苗温室', status: 'online', lastConn: '刚刚', resolution: '4K', aiDetect: true },
    { id: 'CAM006', name: '监控-C2', type: 'AI摄像头', greenhouse: 'C2花卉温室', status: 'offline', lastConn: '2小时前', resolution: '4K', aiDetect: true }
];

const alerts = [
    { id: 1, level: 'danger', title: 'E2温室高温告警', desc: '当前气温35.8°C，超过安全阈值32°C，已自动开启全部通风和遮阳设备', time: '10分钟前', greenhouse: 'E2药材温室', type: '环境异常' },
    { id: 2, level: 'danger', title: 'A3温室湿度过低', desc: '当前湿度45%，低于安全阈值50%，请检查加湿设备', time: '25分钟前', greenhouse: 'A3草莓温室', type: '环境异常' },
    { id: 3, level: 'warning', title: 'B2温室EC值偏高', desc: '当前EC值3.2mS/cm，请注意洗盐', time: '1小时前', greenhouse: 'B2辣椒温室', type: '土壤告警' },
    { id: 4, level: 'warning', title: 'A3草莓可能缺肥', desc: 'AI图像识别发现部分叶片发黄，建议检测养分', time: '1小时前', greenhouse: 'A3草莓温室', type: 'AI智能告警' },
    { id: 5, level: 'warning', title: '摄像头-C2离线', desc: '设备已离线2小时，请检查网络连接', time: '2小时前', greenhouse: 'C2花卉温室', type: '设备异常' },
    { id: 6, level: 'info', title: 'B2温室遮阳自动开启', desc: '因光照强度过高，系统自动开启外遮阳至75%', time: '15分钟前', greenhouse: 'B2辣椒温室', type: '自动控制' },
    { id: 7, level: 'info', title: '灌溉施肥完成', desc: 'A1-A3温室今日水肥灌溉已完成，共用水25吨，肥料85kg', time: '今天 09:30', greenhouse: 'A区全部', type: '水肥通知' },
    { id: 8, level: 'info', title: '采收提醒', desc: 'B3樱桃番茄预计明天开始采收，请做好准备', time: '昨天 16:00', greenhouse: 'B3番茄温室', type: '日程提醒' },
    { id: 9, level: 'success', title: 'E1叶菜采收完成', desc: '共采收优质生菜1250kg，已发往生鲜超市', time: '昨天 14:30', greenhouse: 'E1叶菜温室', type: '生产记录' },
    { id: 10, level: 'info', title: '补光系统自动启动', desc: 'C1育苗温室因光照不足，自动开启LED补光灯', time: '今天 08:00', greenhouse: 'C1育苗温室', type: '自动控制' }
];

const irrigationRecords = [
    { time: '06:00', area: 'A1-A3温室', water: 12.5, fertilizer: 42.5, status: '已完成', type: '晨间灌溉', ec: 2.2, ph: 6.3 },
    { time: '10:00', area: 'B1-B3温室', water: 8.2, fertilizer: 28.0, status: '已完成', type: '上午追肥', ec: 2.0, ph: 6.2 },
    { time: '14:00', area: 'C1-C2温室', water: 6.8, fertilizer: 22.5, status: '进行中', type: '午间补水', ec: 1.8, ph: 5.8 },
    { time: '18:00', area: 'D区+E区', water: 15.5, fertilizer: 52.0, status: '待执行', type: '晚间灌溉', ec: 1.9, ph: 6.5 },
    { time: '22:00', area: '育苗区补灌', water: 3.2, fertilizer: 0, status: '待执行', type: '夜间补水', ec: 1.2, ph: 5.8 }
];

const controlStatus = {
    ventilation: { A1: true, A2: true, A3: true, B1: false, B2: true, B3: false, C1: false, C2: false, D1: true, D2: true, E1: false, E2: true },
    irrigation: { A1: false, A2: false, A3: false, B1: false, B2: false, B3: false, C1: true, C2: false, D1: false, D2: false, E1: false, E2: false },
    shading: { A1: 30, A2: 25, A3: 50, B1: 0, B2: 75, B3: 20, C1: 0, C2: 0, D1: 40, D2: 35, E1: 0, E2: 100 },
    lighting: { A1: false, A2: false, A3: false, B1: false, B2: false, B3: false, C1: true, C2: true, D1: false, D2: false, E1: true, E2: false },
    heating: { A1: false, A2: false, A3: false, B1: false, B2: false, B3: false, C1: false, C2: false, D1: false, D2: false, E1: true, E2: false },
    co2: { A1: false, A2: false, A3: false, B1: true, B2: false, B3: false, C1: true, C2: true, D1: false, D2: false, E1: true, E2: false }
};

// 当前选中的温室
let selectedGreenhouse = null;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initGreenhousesGrid();
    initGreenhouseSelector();
    initCharts();
    initControlPanel();
    renderIrrigationRecords();
    renderDeviceList();
    renderAlertList();
    renderBatchList();
});

// 初始化温室网格
function initGreenhousesGrid() {
    const grid = document.getElementById('greenhousesGrid');
    grid.innerHTML = greenhouses.map(gh => `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card mb-3" style="padding: 15px; cursor: pointer;" onclick="selectGreenhouse(${gh.id})">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 style="margin: 0; font-weight: 600;">${gh.name}</h6>
                    <span class="badge bg-${gh.status === 'normal' ? 'success' : gh.status === 'warning' ? 'warning' : 'danger'}">
                        ${gh.status === 'normal' ? '正常' : gh.status === 'warning' ? '告警' : '异常'}
                    </span>
                </div>
                <div class="text-center mb-2" style="font-size: 24px;">
                    🌡️ ${gh.temperature}°C 💧 ${gh.humidity}%
                </div>
                <div class="text-center" style="font-size: 12px; color: var(--text-secondary);">
                    ${gh.crop} · ${gh.stage}
                </div>
            </div>
        </div>
    `).join('');
    
    // 更新统计
    document.getElementById('totalGreenhouses').textContent = greenhouses.length;
    document.getElementById('onlineGreenhouses').textContent = greenhouses.filter(g => g.status !== 'danger').length;
    document.getElementById('alertGreenhouses').textContent = greenhouses.filter(g => g.status !== 'normal').length;
    document.getElementById('todayIrrigation').textContent = irrigationRecords.filter(r => r.status === '已完成').reduce((sum, r) => sum + r.water, 0).toFixed(1);
}

// 初始化温室选择器
function initGreenhouseSelector() {
    const selector = document.getElementById('greenhouseSelector');
    selector.innerHTML = greenhouses.map(gh => `
        <option value="${gh.id}">${gh.name} (${gh.crop})</option>
    `).join('');
    
    selector.addEventListener('change', (e) => {
        selectGreenhouse(parseInt(e.target.value));
    });
}

// 选择温室
function selectGreenhouse(id) {
    selectedGreenhouse = greenhouses.find(g => g.id === id);
    document.getElementById('greenhouseSelector').value = id;
    
    // 更新详情面板
    if (selectedGreenhouse) {
        const detailHtml = `
            <h5 class="mb-3">${selectedGreenhouse.name}</h5>
            <div class="row g-3">
                <div class="col-6">
                    <div class="p-2 rounded" style="background: rgba(37, 99, 235, 0.1);">
                        <div class="text-secondary small">空气温度</div>
                        <div class="h4 mb-0">${selectedGreenhouse.temperature}°C</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-2 rounded" style="background: rgba(16, 185, 129, 0.1);">
                        <div class="text-secondary small">空气湿度</div>
                        <div class="h4 mb-0">${selectedGreenhouse.humidity}%</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-2 rounded" style="background: rgba(245, 158, 11, 0.1);">
                        <div class="text-secondary small">光照强度</div>
                        <div class="h4 mb-0">${selectedGreenhouse.light} Lux</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-2 rounded" style="background: rgba(139, 92, 246, 0.1);">
                        <div class="text-secondary small">CO₂浓度</div>
                        <div class="h4 mb-0">${selectedGreenhouse.co2} ppm</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-2 rounded" style="background: rgba(239, 68, 68, 0.1);">
                        <div class="text-secondary small">土壤温度</div>
                        <div class="h4 mb-0">${selectedGreenhouse.soilTemp}°C</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-2 rounded" style="background: rgba(59, 130, 246, 0.1);">
                        <div class="text-secondary small">土壤湿度</div>
                        <div class="h4 mb-0">${selectedGreenhouse.soilMoisture}%</div>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <div class="d-flex justify-content-between mb-1">
                    <span class="small">EC值：${selectedGreenhouse.ec} mS/cm</span>
                    <span class="small">pH值：${selectedGreenhouse.ph}</span>
                </div>
                <div class="progress" style="height: 8px;">
                    <div class="progress-bar" style="width: ${Math.min(selectedGreenhouse.ec / 4 * 100, 100)}%; background: ${selectedGreenhouse.ec > 3 ? '#ef4444' : selectedGreenhouse.ec > 2.5 ? '#f59e0b' : '#10b981'};"></div>
                </div>
            </div>
        `;
        document.getElementById('greenhouseDetail').innerHTML = detailHtml;
        
        // 更新图表
        updateCharts(selectedGreenhouse);
    }
}

// 初始化图表
function initCharts() {
    // 默认显示第一个温室的数据
    selectGreenhouse(1);
}

// 更新图表
function updateCharts(gh) {
    // 24小时环境趋势
    const hours = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
    
    // 生成模拟数据
    const baseTemp = gh.temperature;
    const tempData = hours.map((h, i) => {
        const hour = parseInt(h);
        if (hour >= 10 && hour <= 16) return baseTemp + 3 + Math.random() * 2;
        if (hour >= 6 && hour <= 18) return baseTemp + Math.random() * 3;
        return baseTemp - 2 - Math.random() * 2;
    });
    
    const humidData = hours.map((h, i) => {
        const hour = parseInt(h);
        if (hour >= 10 && hour <= 16) return gh.humidity - 15 - Math.random() * 5;
        return gh.humidity - 5 + Math.random() * 10;
    });
    
    const lightData = hours.map((h, i) => {
        const hour = parseInt(h);
        if (hour < 6 || hour > 20) return 0;
        if (hour >= 11 && hour <= 15) return gh.light * (0.9 + Math.random() * 0.2);
        return gh.light * (0.3 + Math.random() * 0.4);
    });
    
    const co2Data = hours.map((h, i) => {
        const hour = parseInt(h);
        if (hour < 6 || hour > 20) return gh.co2 + 200 - Math.random() * 100;
        return gh.co2 - 100 + Math.random() * 200;
    });

    // 更新温度湿度图表
    if (window.tempHumidChart) window.tempHumidChart.destroy();
    const ctx1 = document.getElementById('tempHumidChart').getContext('2d');
    window.tempHumidChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [
                {
                    label: '温度 (°C)',
                    data: tempData,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: '湿度 (%)',
                    data: humidData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#cbd5e1' } } },
            scales: {
                x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { position: 'left', ticks: { color: '#ef4444' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y1: { position: 'right', ticks: { color: '#3b82f6' }, grid: { display: false } }
            }
        }
    });

    // 更新光照CO2图表
    if (window.lightCo2Chart) window.lightCo2Chart.destroy();
    const ctx2 = document.getElementById('lightCo2Chart').getContext('2d');
    window.lightCo2Chart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [
                {
                    label: '光照 (×1000 Lux)',
                    data: lightData.map(v => v / 1000),
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'CO₂ (ppm)',
                    data: co2Data,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#cbd5e1' } } },
            scales: {
                x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    });
}

// 初始化控制面板
function initControlPanel() {
    const zones = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2'];
    
    let html = '<div class="row g-3">';
    
    zones.forEach(zone => {
        html += `
            <div class="col-md-3 col-sm-4">
                <div class="card p-3">
                    <h6 class="mb-3 text-center">${zone}区</h6>
                    <div class="d-flex flex-column gap-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small">🌬️ 通风</span>
                            <div class="form-check form-switch m-0">
                                <input class="form-check-input" type="checkbox" ${controlStatus.ventilation[zone] ? 'checked' : ''} onchange="toggleControl('${zone}', 'ventilation', this.checked)">
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small">💧 灌溉</span>
                            <div class="form-check form-switch m-0">
                                <input class="form-check-input" type="checkbox" ${controlStatus.irrigation[zone] ? 'checked' : ''} onchange="toggleControl('${zone}', 'irrigation', this.checked)">
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small">☀️ 遮阳 ${controlStatus.shading[zone]}%</span>
                            <input type="range" class="form-range" min="0" max="100" value="${controlStatus.shading[zone]}" onchange="setShading('${zone}', this.value)">
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small">💡 补光</span>
                            <div class="form-check form-switch m-0">
                                <input class="form-check-input" type="checkbox" ${controlStatus.lighting[zone] ? 'checked' : ''} onchange="toggleControl('${zone}', 'lighting', this.checked)">
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small">🔥 加温</span>
                            <div class="form-check form-switch m-0">
                                <input class="form-check-input" type="checkbox" ${controlStatus.heating[zone] ? 'checked' : ''} onchange="toggleControl('${zone}', 'heating', this.checked)">
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small">CO₂施肥</span>
                            <div class="form-check form-switch m-0">
                                <input class="form-check-input" type="checkbox" ${controlStatus.co2[zone] ? 'checked' : ''} onchange="toggleControl('${zone}', 'co2', this.checked)">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    document.getElementById('controlPanel').innerHTML = html;
}

// 切换控制
function toggleControl(zone, type, value) {
    controlStatus[type][zone] = value;
    showToast(`${zone}区 ${type === 'ventilation' ? '通风' : type === 'irrigation' ? '灌溉' : type === 'lighting' ? '补光' : type === 'heating' ? '加温' : 'CO₂施肥'} ${value ? '开启' : '关闭'}`);
}

// 设置遮阳
function setShading(zone, value) {
    controlStatus.shading[zone] = parseInt(value);
    initControlPanel();
    showToast(`${zone}区 遮阳设置为 ${value}%`);
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

// 渲染灌溉记录
function renderIrrigationRecords() {
    const tbody = document.getElementById('irrigationRecords');
    tbody.innerHTML = irrigationRecords.map(record => `
        <tr>
            <td>${record.time}</td>
            <td>${record.area}</td>
            <td>${record.water} 吨</td>
            <td>${record.fertilizer} kg</td>
            <td>EC ${record.ec} / pH ${record.ph}</td>
            <td><span class="badge bg-${record.status === '已完成' ? 'success' : record.status === '进行中' ? 'warning' : 'secondary'}">${record.status}</span></td>
            <td><button class="btn btn-sm btn-outline-primary" onclick="showToast('${record.type}详情已加载')">查看</button></td>
        </tr>
    `).join('');
}

// 渲染设备列表
function renderDeviceList() {
    const tbody = document.getElementById('deviceList');
    tbody.innerHTML = devices.map(dev => `
        <tr>
            <td><span class="badge bg-${dev.status === 'online' ? 'success' : 'danger'}">${dev.status === 'online' ? '在线' : '离线'}</span></td>
            <td>${dev.id}</td>
            <td>${dev.name}</td>
            <td>${dev.type}</td>
            <td>${dev.greenhouse}</td>
            <td>${dev.lastConn}</td>
            <td><button class="btn btn-sm btn-outline-info" onclick="showToast('设备详情已加载')">详情</button></td>
        </tr>
    `).join('');
}

// 渲染告警列表
function renderAlertList() {
    const container = document.getElementById('alertList');
    container.innerHTML = alerts.map(alert => `
        <div class="alert alert-${alert.level === 'danger' ? 'danger' : alert.level === 'warning' ? 'warning' : alert.level === 'success' ? 'success' : 'info'} p-3 mb-2" role="alert">
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <h6 class="alert-heading mb-1">${alert.title}</h6>
                    <p class="mb-0 small opacity-75">${alert.desc}</p>
                </div>
                <div class="text-end">
                    <small class="opacity-75">${alert.time}</small><br>
                    <small class="badge bg-light text-dark">${alert.greenhouse}</small>
                </div>
            </div>
        </div>
    `).join('');
    
    // 更新告警统计
    document.getElementById('dangerAlerts').textContent = alerts.filter(a => a.level === 'danger').length;
    document.getElementById('warningAlerts').textContent = alerts.filter(a => a.level === 'warning').length;
}

// 渲染种植批次
function renderBatchList() {
    const tbody = document.getElementById('batchList');
    tbody.innerHTML = batches.map(batch => `
        <tr>
            <td><span class="badge bg-secondary">${batch.id}</span></td>
            <td>${batch.greenhouse}</td>
            <td>${batch.crop}</td>
            <td>${batch.variety}</td>
            <td>${batch.days}天</td>
            <td><span class="badge bg-${batch.stage === '收获期' || batch.stage === '转色期' ? 'success' : 'primary'}">${batch.stage}</span></td>
            <td>${batch.survival}%</td>
            <td>${(batch.expectedYield / 1000).toFixed(1)}吨</td>
        </tr>
    `).join('');
}

// 页面切换
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
}
