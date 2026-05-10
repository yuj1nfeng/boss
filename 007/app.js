function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const titles = { dashboard:'数据概览', list:'数据列表', analytics:'数据分析', settings:'系统设置' };
    document.getElementById('pageTitle').textContent = titles[id];
}
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('mainChart');
    if(ctx) new Chart(ctx, { type:'line', data:{ labels:['1月','2月','3月','4月','5月','6月'], datasets:[{ label:'增长趋势', data:[65,59,80,81,56,95], borderColor:'#10b981', backgroundColor:'rgba(255,255,255,0.1)', tension:0.4, fill:true }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ labels:{ color:'#94a3b8' } } }, scales:{ x:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } }, y:{ grid:{ color:'rgba(255,255,255,0.05)' }, ticks:{ color:'#94a3b8' } } } } });
    const pctx = document.getElementById('pieChart');
    if(pctx) new Chart(pctx, { type:'doughnut', data:{ labels:['分类A','分类B','分类C','分类D'], datasets:[{ data:[30,25,20,25], backgroundColor:['#10b981','#3b82f6','#10b981','#f59e0b'] }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ color:'#94a3b8' } } } } });
});