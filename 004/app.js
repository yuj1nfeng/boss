function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const titles = { dashboard:'家庭总览', members:'家庭成员', finance:'财务记账', tasks:'家务任务', shopping:'购物清单', meal:'饮食计划', events:'家庭日程', health:'健康管理', settings:'系统设置' };
    document.getElementById('pageTitle').textContent = titles[sectionId] || '家庭总览';
}
document.addEventListener('DOMContentLoaded', function() {
    const financeCtx = document.getElementById('financeChart');
    if (financeCtx) new Chart(financeCtx, { type:'line', data:{ labels:['1月','2月','3月','4月','5月','本月'], datasets:[{label:'收入', data:[22000,25000,23000,24000,26000,25000], borderColor:'#10b981', backgroundColor:'rgba(16,185,129,0.1)', tension:0.4, fill:true}, {label:'支出', data:[12000,13500,11800,14200,12800,12580], borderColor:'#ef4444', backgroundColor:'rgba(239,68,68,0.1)', tension:0.4, fill:true}] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ labels:{ color:'#94a3b8' } } }, scales:{ x:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } }, y:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } } } } });
    const expenseCtx = document.getElementById('expenseChart');
    if (expenseCtx) new Chart(expenseCtx, { type:'doughnut', data:{ labels:['餐饮','交通','教育','购物','医疗','其他'], datasets:[{ data:[3500,1200,2500,2800,800,1780], backgroundColor:['#f59e0b','#3b82f6','#ec4899','#8b5cf6','#10b981','#64748b'] }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'right', labels:{ color:'#94a3b8' } } } } });
});