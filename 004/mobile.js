function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}
function showAddMenu() { alert('快捷添加功能开发中...'); }