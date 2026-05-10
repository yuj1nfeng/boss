// 学生错题本 - 完整交互逻辑

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
        'dashboard': '数据概览',
        'questions': '错题管理',
        'review': '复习计划',
        'analysis': '知识点分析',
        'students': '学生管理',
        'parents': '家长看板',
        'settings': '系统设置'
    };
    
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle && titles[sectionId]) {
        pageTitle.textContent = titles[sectionId];
    }
    
    // 如果切换到分析页面，重新初始化图表
    if (sectionId === 'analysis' || sectionId === 'parents') {
        setTimeout(initCharts, 100);
    }
}

// 初始化图表
function initCharts() {
    // 全局配置 - 深色主题
    Chart.defaults.color = '#cbd5e1';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    // 1. 错题增长趋势图
    const trendCtx = document.getElementById('trendChart');
    if (trendCtx && !trendCtx.chart) {
        trendCtx.chart = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['9月', '10月', '11月', '12月', '1月', '2月'],
                datasets: [{
                    label: '新增错题数',
                    data: [1200, 1580, 1890, 2100, 2450, 2890],
                    borderColor: '#11998e',
                    backgroundColor: 'rgba(56, 239, 125, 0.15)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#38ef7d',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { usePointStyle: true, padding: 20 }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // 2. 科目分布图
    const subjectCtx = document.getElementById('subjectChart');
    if (subjectCtx && !subjectCtx.chart) {
        subjectCtx.chart = new Chart(subjectCtx, {
            type: 'doughnut',
            data: {
                labels: ['数学', '英语', '语文', '物理', '化学'],
                datasets: [{
                    data: [35, 25, 18, 14, 8],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.85)',
                        'rgba(168, 85, 247, 0.85)',
                        'rgba(245, 158, 11, 0.85)',
                        'rgba(6, 182, 212, 0.85)',
                        'rgba(34, 197, 94, 0.85)'
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
                        position: 'bottom',
                        labels: { usePointStyle: true, padding: 15 }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.raw / total) * 100).toFixed(1);
                                return context.label + ': ' + percentage + '%';
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }

    // 3. 知识点雷达图
    const radarCtx = document.getElementById('radarChart');
    if (radarCtx && !radarCtx.chart) {
        radarCtx.chart = new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['代数', '几何', '函数', '语法', '阅读', '力学', '电学'],
                datasets: [{
                    label: '掌握程度 (%)',
                    data: [78, 65, 82, 70, 75, 58, 62],
                    borderColor: '#11998e',
                    backgroundColor: 'rgba(56, 239, 125, 0.25)',
                    pointBackgroundColor: '#38ef7d',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { usePointStyle: true, padding: 20 }
                    }
                },
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                        pointLabels: { color: '#475569', font: { size: 12 } },
                        ticks: {
                            color: '#94a3b8',
                            backdropColor: 'transparent',
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    // 4. 各科目错题柱状图
    const barCtx = document.getElementById('barChart');
    if (barCtx && !barCtx.chart) {
        barCtx.chart = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['数学', '英语', '语文', '物理', '化学'],
                datasets: [{
                    label: '错题数',
                    data: [98, 65, 42, 35, 16],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.75)',
                        'rgba(168, 85, 247, 0.75)',
                        'rgba(245, 158, 11, 0.75)',
                        'rgba(6, 182, 212, 0.75)',
                        'rgba(34, 197, 94, 0.75)'
                    ],
                    borderRadius: 8,
                    borderSkipped: false
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
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // 5. 每周学习图表
    const weeklyCtx = document.getElementById('weeklyChart');
    if (weeklyCtx && !weeklyCtx.chart) {
        weeklyCtx.chart = new Chart(weeklyCtx, {
            type: 'bar',
            data: {
                labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                datasets: [{
                    label: '录题数',
                    data: [5, 8, 6, 10, 7, 4, 2],
                    backgroundColor: 'rgba(17, 153, 142, 0.7)',
                    borderRadius: 6
                }, {
                    label: '复习数',
                    data: [12, 18, 15, 22, 20, 25, 16],
                    backgroundColor: 'rgba(56, 239, 125, 0.7)',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { usePointStyle: true, padding: 20 }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('📚 学生错题本系统已加载');
    initCharts();
    
    // 添加微交互效果
    document.querySelectorAll('.stat-card, .card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 导航项点击效果
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(56, 239, 125, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// 添加波纹动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 导出到全局
window.ErrorNotebook = {
    showSection,
    initCharts
};
