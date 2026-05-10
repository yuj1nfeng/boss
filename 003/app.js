// 家庭生活管家 - 完整交互逻辑

// 页面切换功能
function showSection(sectionId) {
    // 隐藏所有section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // 更新导航栏激活状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 找到并激活对应的导航项
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('onclick')?.includes(sectionId)) {
            item.classList.add('active');
        }
    });
    
    // 更新页面标题
    const titles = {
        'dashboard': '家庭总览',
        'members': '家庭成员',
        'finance': '财务记账',
        'tasks': '家务任务',
        'shopping': '购物清单',
        'meal': '饮食计划',
        'events': '家庭日程',
        'health': '健康管理',
        'settings': '系统设置'
    };
    
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle && titles[sectionId]) {
        pageTitle.textContent = titles[sectionId];
    }
    
    // 重新初始化图表（如果是相关页面）
    if (sectionId === 'dashboard' || sectionId === 'finance' || sectionId === 'health') {
        setTimeout(initCharts, 100);
    }
}

// 切换任务完成状态
function toggleTask(element) {
    element.classList.toggle('completed');
    if (element.classList.contains('completed')) {
        element.innerHTML = '<i class="bi bi-check"></i>';
    } else {
        element.innerHTML = '';
    }
    
    // 更新父元素样式
    const taskItem = element.closest('.task-item');
    if (taskItem) {
        const content = taskItem.querySelector('.flex-1, div[style*="flex:1"]');
        if (content) {
            content.classList.toggle('task-completed');
        }
    }
}

// 切换购物清单项
function toggleShopping(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        element.classList.toggle('checked');
    }
}

// 初始化图表
function initCharts() {
    // 通用配置 - 深色主题
    Chart.defaults.color = '#cbd5e1';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
    
    // 1. 财务趋势图表 (dashboard页面)
    const financeCtx = document.getElementById('financeChart');
    if (financeCtx && !financeCtx.chart) {
        financeCtx.chart = new Chart(financeCtx, {
            type: 'line',
            data: {
                labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                datasets: [
                    {
                        label: '收入',
                        data: [25000, 26500, 24800, 27200, 25000, 28500, 26800, 27500, 26000, 29000, 27800, 28000],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4
                    },
                    {
                        label: '支出',
                        data: [12000, 13500, 11800, 14200, 12580, 15800, 13200, 14500, 12800, 16200, 14000, 15000],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#ef4444',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { usePointStyle: true, padding: 20 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: {
                            callback: function(value) {
                                return '¥' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    // 2. 支出分类饼图 (finance页面)
    const expenseCtx = document.getElementById('expenseChart');
    if (expenseCtx && !expenseCtx.chart) {
        expenseCtx.chart = new Chart(expenseCtx, {
            type: 'doughnut',
            data: {
                labels: ['餐饮食品', '教育育儿', '交通出行', '水电燃气', '购物消费', '医疗健康', '娱乐休闲', '其他'],
                datasets: [{
                    data: [3200, 2500, 1200, 800, 1800, 500, 1580, 1000],
                    backgroundColor: [
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(168, 85, 247, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(107, 114, 128, 0.8)'
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: { size: 12 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.raw / total) * 100).toFixed(1);
                                return context.label + ': ¥' + context.raw + ' (' + percentage + '%)';
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
    
    // 3. 健康步数趋势图 (health页面)
    const healthCtx = document.getElementById('healthChart');
    if (healthCtx && !healthCtx.chart) {
        healthCtx.chart = new Chart(healthCtx, {
            type: 'bar',
            data: {
                labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                datasets: [
                    {
                        label: '爸爸',
                        data: [8500, 9200, 7800, 10500, 8900, 12500, 7580],
                        backgroundColor: 'rgba(59, 130, 246, 0.7)',
                        borderRadius: 6
                    },
                    {
                        label: '妈妈',
                        data: [6800, 7200, 8500, 6900, 9200, 11000, 8200],
                        backgroundColor: 'rgba(236, 72, 153, 0.7)',
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { usePointStyle: true, padding: 20 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString() + ' 步';
                            }
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 家庭生活管家系统已加载');
    initCharts();
});

// 导出函数供全局使用
window.FamilyManager = {
    showSection,
    toggleTask,
    toggleShopping,
    initCharts
};
