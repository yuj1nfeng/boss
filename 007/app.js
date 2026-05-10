function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(sectionId)) {
            item.classList.add('active');
        }
    });

    const titles = {
        'dashboard': '数据概览',
        'products': '商品管理',
        'inbound': '入库管理',
        'outbound': '出库管理',
        'inventory': '盘点管理',
        'supplier': '供应商管理',
        'analytics': '数据分析',
        'alerts': '库存预警',
        'settings': '系统设置'
    };
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.textContent = titles[sectionId] || '数据概览';
    }

    if (sectionId === 'analytics' || sectionId === 'dashboard') {
        setTimeout(initCharts, 100);
    }
}

let stockChart, categoryChart, turnoverChart, valueChart;

function initCharts() {
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
        }
    };

    const stockCtx = document.getElementById('stockChart');
    if (stockCtx && !stockChart) {
        stockChart = new Chart(stockCtx, {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [{
                    label: '入库量',
                    data: [320, 280, 450, 380, 520, 480],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: '出库量',
                    data: [280, 320, 380, 420, 450, 500],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                ...chartOptions,
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                }
            }
        });
    }

    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx && !categoryChart) {
        categoryChart = new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['电子产品', '办公用品', '生活用品', '食品饮料', '其他'],
                datasets: [{
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(168, 85, 247, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(239, 68, 68, 0.8)'
                    ],
                    borderWidth: 0
                }]
            },
            options: chartOptions
        });
    }

    const turnoverCtx = document.getElementById('turnoverChart');
    if (turnoverCtx && !turnoverChart) {
        turnoverChart = new Chart(turnoverCtx, {
            type: 'bar',
            data: {
                labels: ['电子产品', '办公用品', '生活用品', '食品饮料'],
                datasets: [{
                    label: '周转天数',
                    data: [45, 90, 60, 30],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderRadius: 8
                }]
            },
            options: {
                ...chartOptions,
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                }
            }
        });
    }

    const valueCtx = document.getElementById('valueChart');
    if (valueCtx && !valueChart) {
        valueChart = new Chart(valueCtx, {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                datasets: [{
                    label: '库存价值(万元)',
                    data: [72, 78, 82, 85, 88, 89.4],
                    borderColor: '#a855f7',
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                ...chartOptions,
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initCharts, 200);
});
