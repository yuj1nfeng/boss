// 全局图表实例
let charts = {};

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

    // 更新页面标题
    const titles = {
        'dashboard': '综合看板',
        'sales': '销售分析',
        'users': '用户分析',
        'products': '产品分析',
        'finance': '财务分析',
        'marketing': '营销分析',
        'reports': '报表中心',
        'settings': '系统设置'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId];

    // 根据页面初始化对应的图表
    setTimeout(() => {
        if (sectionId === 'dashboard') initDashboardCharts();
        if (sectionId === 'sales') initSalesCharts();
        if (sectionId === 'users') initUserCharts();
        if (sectionId === 'products') initProductCharts();
        if (sectionId === 'finance') initFinanceCharts();
        if (sectionId === 'marketing') initMarketingCharts();
    }, 100);
}

// 公共图表配置
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: '#475569',
                font: { size: 12 }
            }
        }
    },
    scales: {
        x: {
            ticks: { color: '#475569' },
            grid: { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
            ticks: { color: '#475569' },
            grid: { color: 'rgba(255,255,255,0.05)' }
        }
    }
};

// 综合看板图表
function initDashboardCharts() {
    // 销售趋势图
    const salesTrendCtx = document.getElementById('salesTrendChart');
    if (salesTrendCtx && !charts.salesTrend) {
        charts.salesTrend = new Chart(salesTrendCtx, {
            type: 'line',
            data: {
                labels: ['1日', '5日', '10日', '15日', '20日', '25日', '30日'],
                datasets: [{
                    label: '销售额',
                    data: [65000, 78000, 66000, 89000, 75000, 95000, 88000],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: '订单数',
                    data: [450, 520, 480, 610, 550, 680, 620],
                    borderColor: '#ec4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: chartOptions
        });
    }

    // 渠道分布图
    const channelCtx = document.getElementById('channelChart');
    if (channelCtx && !charts.channel) {
        charts.channel = new Chart(channelCtx, {
            type: 'doughnut',
            data: {
                labels: ['线上商城', '线下门店', '第三方平台', '直播带货', '其他'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(107, 114, 128, 0.8)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#475569' }
                    }
                }
            }
        });
    }

    // 地区销售图
    const regionCtx = document.getElementById('regionChart');
    if (regionCtx && !charts.region) {
        charts.region = new Chart(regionCtx, {
            type: 'bar',
            data: {
                labels: ['华东', '华南', '华北', '西南', '华中', '西北', '东北'],
                datasets: [{
                    label: '销售额(万)',
                    data: [85, 72, 68, 52, 45, 32, 28],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderRadius: 8
                }]
            },
            options: chartOptions
        });
    }
}

// 销售分析图表
function initSalesCharts() {
    const monthlyCtx = document.getElementById('monthlySalesChart');
    if (monthlyCtx && !charts.monthly) {
        charts.monthly = new Chart(monthlyCtx, {
            type: 'bar',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [{
                label: '今年',
                data: [150, 180, 220, 195, 245, 258],
                backgroundColor: 'rgba(99, 102, 241, 0.7)',
                borderRadius: 8
            }, {
                label: '去年',
                data: [120, 145, 175, 160, 190, 210],
                backgroundColor: 'rgba(236, 72, 153, 0.7)',
                borderRadius: 8
            }]
        },
            options: chartOptions
        });
    }

    const funnelCtx = document.getElementById('funnelChart');
    if (funnelCtx && !charts.funnel) {
        charts.funnel = new Chart(funnelCtx, {
            type: 'bar',
            data: {
                labels: ['访问', '加购', '下单', '支付', '完成'],
                datasets: [{
                label: '人数',
                data: [10000, 6500, 4200, 3800, 3500],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.9)',
                    'rgba(129, 140, 248, 0.8)',
                    'rgba(165, 180, 252, 0.7)',
                    'rgba(199, 210, 254, 0.6)',
                    'rgba(224, 231, 255, 0.5)'
                ],
                borderRadius: 8
            }]
        },
            options: {
                ...chartOptions,
                indexAxis: 'y'
            }
        });
    }
}

// 用户分析图表
function initUserCharts() {
    const growthCtx = document.getElementById('userGrowthChart');
    if (growthCtx && !charts.userGrowth) {
        charts.userGrowth = new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [{
                    label: '新增用户',
                    data: [8500, 9200, 10500, 11800, 13200, 15000],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: '活跃用户',
                    data: [5200, 5800, 6500, 7200, 7800, 8500],
                    borderColor: '#ec4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: chartOptions
        });
    }

    const profileCtx = document.getElementById('userProfileChart');
    if (profileCtx && !charts.userProfile) {
        charts.userProfile = new Chart(profileCtx, {
            type: 'doughnut',
            data: {
                labels: ['18-25岁', '26-35岁', '36-45岁', '46-55岁', '55岁以上'],
                datasets: [{
                    data: [25, 40, 20, 10, 5],
                    backgroundColor: [
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(107, 114, 128, 0.8)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#475569' }
                    }
                }
            }
        });
    }
}

// 产品分析图表
function initProductCharts() {
    const productSalesCtx = document.getElementById('productSalesChart');
    if (productSalesCtx && !charts.productSales) {
        charts.productSales = new Chart(productSalesCtx, {
            type: 'bar',
            data: {
                labels: ['iPhone 15 Pro', 'MacBook Pro', 'AirPods Pro', 'iPad Air', 'Apple Watch', 'Mac Mini', 'iMac', 'Mac Studio'],
                datasets: [{
                    label: '销量',
                    data: [1245, 456, 2345, 567, 892, 234, 189, 156],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderRadius: 8
                }]
            },
            options: chartOptions
        });
    }

    const categoryCtx = document.getElementById('productCategoryChart');
    if (categoryCtx && !charts.productCategory) {
        charts.productCategory = new Chart(categoryCtx, {
            type: 'pie',
            data: {
                labels: ['手机', '电脑', '平板', '穿戴设备', '配件'],
                datasets: [{
                    data: [40, 25, 15, 12, 8],
                    backgroundColor: [
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(107, 114, 128, 0.8)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#475569' }
                    }
                }
            }
        });
    }
}

// 财务分析图表
function initFinanceCharts() {
    const financeCtx = document.getElementById('financeChart');
    if (financeCtx && !charts.finance) {
        charts.finance = new Chart(financeCtx, {
            type: 'bar',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [{
                    label: '收入(万)',
                    data: [850, 920, 1050, 980, 1150, 1280],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderRadius: 8
                }, {
                    label: '成本(万)',
                    data: [520, 580, 650, 620, 720, 780],
                    backgroundColor: 'rgba(236, 72, 153, 0.7)',
                    borderRadius: 8
                }, {
                    label: '利润(万)',
                    data: [330, 340, 400, 360, 430, 500],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderRadius: 8
                }]
            },
            options: chartOptions
        });
    }
}

// 营销分析图表
function initMarketingCharts() {
    const marketingCtx = document.getElementById('marketingChart');
    if (marketingCtx && !charts.marketing) {
        charts.marketing = new Chart(marketingCtx, {
            type: 'bar',
            data: {
                labels: ['抖音', '小红书', '微信', '微博', '快手', 'B站'],
                datasets: [{
                    label: '曝光量(万)',
                    data: [850, 620, 580, 420, 380, 280],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderRadius: 8
                }]
            },
            options: chartOptions
        });
    }

    const roiCtx = document.getElementById('roiChart');
    if (roiCtx && !charts.roi) {
        charts.roi = new Chart(roiCtx, {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [{
                    label: 'ROI',
                    data: [2.8, 3.2, 3.5, 3.8, 4.2, 4.5],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: chartOptions
        });
    }
}

// 切换时间范围
function changeTimeRange(days) {
    console.log('切换时间范围:', days, '天');
}

// 导出数据
function exportData() {
    alert('原型演示：数据导出功能');
}

// 更新销售图表
function updateSalesChart(type) {
    console.log('切换图表类型:', type);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initDashboardCharts, 200);
});
