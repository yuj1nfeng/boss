function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const titles = { 
        dashboard:'数据概览', 
        questions:'错题管理', 
        review:'复习计划', 
        analysis:'知识点分析',
        students:'学生管理',
        parents:'家长看板',
        settings:'系统设置' 
    };
    document.getElementById('pageTitle').textContent = titles[id];
}

document.addEventListener('DOMContentLoaded', function() {
    // 错题增长趋势图
    const trendCtx = document.getElementById('trendChart');
    if(trendCtx) new Chart(trendCtx, { 
        type:'line', 
        data:{ 
            labels:['9月','10月','11月','12月','1月','2月'], 
            datasets:[{ 
                label:'新增错题数', 
                data:[1200, 1580, 1890, 2100, 2450, 2890], 
                borderColor:'#11998e', 
                backgroundColor:'rgba(56,239,125,0.1)', 
                tension:0.4, 
                fill:true 
            }] 
        }, 
        options:{ 
            responsive:true, 
            maintainAspectRatio:false, 
            plugins:{ 
                legend:{ labels:{ color:'#94a3b8' } } 
            }, 
            scales:{ 
                x:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } }, 
                y:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } } 
            } 
        } 
    });
    
    // 科目分布图
    const subjectCtx = document.getElementById('subjectChart');
    if(subjectCtx) new Chart(subjectCtx, { 
        type:'doughnut', 
        data:{ 
            labels:['数学','英语','语文','物理','化学'], 
            datasets:[{ 
                data:[35,25,18,14,8], 
                backgroundColor:['#3b82f6','#a855f7','#f59e0b','#06b6d4','#22c55e'] 
            }] 
        }, 
        options:{ 
            responsive:true, 
            maintainAspectRatio:false, 
            plugins:{ 
                legend:{ position:'bottom', labels:{ color:'#94a3b8' } } 
            } 
        } 
    });
    
    // 知识点雷达图
    const radarCtx = document.getElementById('radarChart');
    if(radarCtx) new Chart(radarCtx, { 
        type:'radar', 
        data:{ 
            labels:['代数','几何','函数','语法','阅读','力学','电学'], 
            datasets:[{ 
                label:'掌握程度', 
                data:[78,65,82,70,75,58,62], 
                borderColor:'#11998e', 
                backgroundColor:'rgba(56,239,125,0.2)',
                pointBackgroundColor:'#38ef7d'
            }] 
        }, 
        options:{ 
            responsive:true, 
            maintainAspectRatio:false, 
            plugins:{ 
                legend:{ labels:{ color:'#94a3b8' } } 
            },
            scales:{
                r:{
                    grid:{ color:'rgba(255,255,255,0.1)' },
                    angleLines:{ color:'rgba(255,255,255,0.1)' },
                    pointLabels:{ color:'#94a3b8' },
                    ticks:{ color:'#94a3b8', backdropColor:'transparent' }
                }
            }
        } 
    });
    
    // 各科目错题柱状图
    const barCtx = document.getElementById('barChart');
    if(barCtx) new Chart(barCtx, { 
        type:'bar', 
        data:{ 
            labels:['数学','英语','语文','物理','化学'], 
            datasets:[{ 
                label:'错题数', 
                data:[98,65,42,35,16], 
                backgroundColor:['#3b82f6','#a855f7','#f59e0b','#06b6d4','#22c55e']
            }] 
        }, 
        options:{ 
            responsive:true, 
            maintainAspectRatio:false, 
            plugins:{ 
                legend:{ labels:{ color:'#94a3b8' } } 
            },
            scales:{ 
                x:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } }, 
                y:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } } 
            } 
        } 
    });
    
    // 每周学习图表
    const weeklyCtx = document.getElementById('weeklyChart');
    if(weeklyCtx) new Chart(weeklyCtx, { 
        type:'bar', 
        data:{ 
            labels:['周一','周二','周三','周四','周五','周六','周日'], 
            datasets:[{ 
                label:'录题数', 
                data:[5,8,6,10,7,4,2], 
                backgroundColor:'rgba(17,153,142,0.6)'
            },{
                label:'复习数',
                data:[12,18,15,22,20,25,16],
                backgroundColor:'rgba(56,239,125,0.6)'
            }] 
        }, 
        options:{ 
            responsive:true, 
            maintainAspectRatio:false, 
            plugins:{ 
                legend:{ labels:{ color:'#94a3b8' } } 
            },
            scales:{ 
                x:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } }, 
                y:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } } 
            } 
        } 
    });
});