// 家长端移动端交互逻辑

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initCalendars();
});

// 切换页面
function showPage(pageName) {
    document.querySelectorAll('.page-mobile').forEach(page => page.classList.remove('active'));
    document.getElementById('page-' + pageName).classList.add('active');

    // 更新底部导航
    const pageNavMap = { 'home': 0, 'notice': 1, 'homework': 2, 'checkin': 3, 'profile': 4 };
    document.querySelectorAll('.nav-item-mobile').forEach((item, index) => {
        item.classList.remove('active');
        if (pageNavMap[pageName] === index) item.classList.add('active');
    });

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 打卡
function doCheckin(btn) {
    btn.className = 'checkin-btn done';
    btn.textContent = '已完成';
    btn.onclick = null;
    showToast('打卡成功！');
}

// 点赞
function likePost(el) {
    const span = el.querySelector('span');
    const current = parseInt(span.textContent);
    span.textContent = current + 1;
    el.style.color = '#818cf8';
}

// Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = message;
    toast.style.display = 'block';
    toast.style.opacity = '0';
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transition = 'opacity 0.3s ease';
    }, 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => { toast.style.display = 'none'; }, 300);
    }, 2000);
}

// 初始化日历
function initCalendars() {
    const readingCal = document.getElementById('readingCalendar');
    const sportCal = document.getElementById('sportCalendar');
    const today = 10; // 模拟今天是10号
    const readingDone = [1,2,3,5,6,7,9,10]; // 已打卡日期
    const sportDone = [1,2,3,4,5,6,7,8,9,10];

    if (readingCal) {
        let html = '';
        for (let i = 1; i <= 31; i++) {
            if (i <= today) {
                const isDone = readingDone.includes(i);
                html += `<div class="cal-day ${isDone ? 'done' : 'miss'}">${i}</div>`;
            } else if (i === today + 1) {
                html += `<div class="cal-day today">${i}</div>`;
            } else {
                html += `<div class="cal-day future">${i}</div>`;
            }
        }
        readingCal.innerHTML = html;
    }

    if (sportCal) {
        let html = '';
        for (let i = 1; i <= 31; i++) {
            if (i <= today) {
                const isDone = sportDone.includes(i);
                html += `<div class="cal-day ${isDone ? 'done' : 'miss'}">${i}</div>`;
            } else if (i === today + 1) {
                html += `<div class="cal-day today">${i}</div>`;
            } else {
                html += `<div class="cal-day future">${i}</div>`;
            }
        }
        sportCal.innerHTML = html;
    }
}

console.log('%c 班级管理与家校沟通平台 - 家长端原型', 'font-size:16px;font-weight:bold;color:#818cf8;');
console.log('%c 包含模块：首页、通知、作业、打卡、成绩、班级圈、请假、成长档案', 'color:#94a3b8;');
