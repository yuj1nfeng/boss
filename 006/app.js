// 学生数据
const students = [
    { id: 1, name: '张小明', gender: '男', chinese: 92, math: 88, english: 76, science: 85 },
    { id: 2, name: '李小红', gender: '女', chinese: 95, math: 96, english: 91, science: 93 },
    { id: 3, name: '王大力', gender: '男', chinese: 78, math: 82, english: 69, science: 75 },
    { id: 4, name: '赵小芳', gender: '女', chinese: 88, math: 91, english: 85, science: 89 },
    { id: 5, name: '刘一鸣', gender: '男', chinese: 85, math: 79, english: 82, science: 88 },
    { id: 6, name: '陈思思', gender: '女', chinese: 91, math: 93, english: 95, science: 90 },
    { id: 7, name: '杨帆', gender: '男', chinese: 73, math: 86, english: 71, science: 80 },
    { id: 8, name: '周小兰', gender: '女', chinese: 96, math: 84, english: 88, science: 92 },
    { id: 9, name: '吴子豪', gender: '男', chinese: 80, math: 90, english: 77, science: 83 },
    { id: 10, name: '郑佳佳', gender: '女', chinese: 89, math: 87, english: 93, science: 86 },
    { id: 11, name: '孙磊', gender: '男', chinese: 67, math: 72, english: 63, science: 70 },
    { id: 12, name: '马小云', gender: '女', chinese: 93, math: 95, english: 90, science: 94 },
];

// 聊天列表
const chatContacts = [
    { id: 1, name: '张小明妈妈', lastMsg: '好的老师，我会准时参加的！', time: '刚刚', unread: 0, online: true },
    { id: 2, name: '李小红妈妈', lastMsg: '小红今天身体不太舒服...', time: '10分钟前', unread: 2, online: true },
    { id: 3, name: '王大力爸爸', lastMsg: '谢谢老师关心', time: '1小时前', unread: 0, online: false },
    { id: 4, name: '赵小芳妈妈', lastMsg: '老师，芳芳的作业已经补交了', time: '2小时前', unread: 1, online: true },
    { id: 5, name: '刘一鸣爸爸', lastMsg: '收到，谢谢老师！', time: '3小时前', unread: 0, online: false },
    { id: 6, name: '陈思思妈妈', lastMsg: '思思说喜欢今天的科学课', time: '昨天', unread: 0, online: false },
    { id: 7, name: '杨帆妈妈', lastMsg: '杨帆最近上课有没有认真？', time: '昨天', unread: 0, online: false },
    { id: 8, name: '周小兰爸爸', lastMsg: '好的，我们周末去图书馆', time: '前天', unread: 0, online: false },
];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initCheckinGrids();
    initScoreTable();
    initChatList();
});

// 切换侧边栏
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// 切换页面
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const titles = {
        'dashboard': '工作台', 'notice': '通知管理', 'homework': '作业管理',
        'checkin': '智能打卡', 'score': '成绩管理', 'chat': '家校沟通',
        'approval': '审批管理', 'album': '班级相册', 'survey': '问卷调查', 'fee': '收费管理'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId];
    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

// 显示弹窗
function showModal(id) {
    new bootstrap.Modal(document.getElementById(id)).show();
}

// 初始化打卡网格
function initCheckinGrids() {
    const names = ['张明','李红','王力','赵芳','刘鸣','陈思','杨帆','周兰','吴豪','郑佳','孙磊','马云',
                    '黄磊','林佳','徐阳','何雨','高飞','朱婷','胡杰','郭敏','曹宇','袁露',
                    '邓鑫','许诺','傅欣','沈涛','姜雪','钟华','田甜','范伟','彭勇','蔡慧',
                    '谢宁','魏强','方圆','石磊','任飞','廖敏','邹宇','潘悦','丁伟'];
    const grid1 = document.getElementById('checkinGrid');
    const grid2 = document.getElementById('checkinGrid2');
    if (grid1) {
        grid1.innerHTML = names.map((n, i) => {
            const rnd = Math.random();
            const cls = rnd > 0.17 ? 'done' : (rnd > 0.07 ? 'undone' : 'leave');
            const icon = cls === 'done' ? '<i class="bi bi-check-lg"></i>' : (cls === 'leave' ? '<i class="bi bi-clock"></i>' : '<i class="bi bi-x-lg"></i>');
            return `<div class="checkin-cell ${cls}">${icon}<span style="font-size:11px;">${n}</span></div>`;
        }).join('');
    }
    if (grid2) {
        grid2.innerHTML = names.map((n, i) => {
            const rnd = Math.random();
            const cls = rnd > 0.33 ? 'done' : (rnd > 0.1 ? 'undone' : 'leave');
            const icon = cls === 'done' ? '<i class="bi bi-check-lg"></i>' : (cls === 'leave' ? '<i class="bi bi-clock"></i>' : '<i class="bi bi-x-lg"></i>');
            return `<div class="checkin-cell ${cls}">${icon}<span style="font-size:11px;">${n}</span></div>`;
        }).join('');
    }
}

// 初始化成绩表格
function initScoreTable() {
    const tbody = document.getElementById('scoreTable');
    if (!tbody) return;
    const sorted = [...students].map(s => ({
        ...s,
        total: s.chinese + s.math + s.english + s.science
    })).sort((a, b) => b.total - a.total);
    tbody.innerHTML = sorted.map((s, i) => `
        <tr>
            <td style="font-weight:500;">${s.name}</td>
            <td style="color:${s.chinese>=90?'#34d399':s.chinese>=60?'inherit':'#f87171'}">${s.chinese}</td>
            <td style="color:${s.math>=90?'#34d399':s.math>=60?'inherit':'#f87171'}">${s.math}</td>
            <td style="color:${s.english>=90?'#34d399':s.english>=60?'inherit':'#f87171'}">${s.english}</td>
            <td style="color:${s.science>=90?'#34d399':s.science>=60?'inherit':'#f87171'}">${s.science}</td>
            <td style="font-weight:600;">${s.total}</td>
            <td><span class="status-badge ${i<10?'status-normal':i<30?'status-info':'status-warning'}">${i+1}</span></td>
            <td><span class="status-badge status-normal">已发送</span></td>
        </tr>
    `).join('');
}

// 初始化聊天列表
function initChatList() {
    const container = document.getElementById('chatList');
    if (!container) return;
    container.innerHTML = chatContacts.map(c => `
        <div class="chat-item" onclick="selectChat(${c.id}, '${c.name}')">
            <div class="chat-avatar" style="background:${c.online?'rgba(99,102,241,0.2)':'rgba(107,114,128,0.2)'};">
                <i class="bi bi-person" style="color:${c.online?'#818cf8':'#94a3b8'}"></i>
            </div>
            <div style="flex:1;min-width:0;">
                <div class="d-flex justify-content-between">
                    <span style="font-weight:600;font-size:14px;">${c.name}</span>
                    <span style="font-size:11px;color:var(--text-secondary);">${c.time}</span>
                </div>
                <div style="font-size:13px;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.lastMsg}</div>
            </div>
            ${c.unread > 0 ? `<span class="badge bg-danger" style="font-size:10px;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;">${c.unread}</span>` : ''}
        </div>
    `).join('');
}

// 选择聊天
function selectChat(id, name) {
    document.getElementById('chatTarget').textContent = name;
}

// 发送消息
function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'd-flex mb-3 justify-content-end';
    div.innerHTML = `<div class="chat-bubble sent">${msg}</div>`;
    container.appendChild(div);
    input.value = '';
    container.scrollTop = container.scrollHeight;
}

// 审批操作
function handleApproval(btn, action) {
    const card = btn.closest('.card');
    const badge = card.querySelector('.status-badge');
    if (action === 'approved') {
        badge.className = 'status-badge status-normal ms-2';
        badge.textContent = '已通过';
    } else {
        badge.className = 'status-badge status-danger ms-2';
        badge.textContent = '已拒绝';
    }
    const btns = card.querySelector('.d-flex.justify-content-end');
    btns.innerHTML = `<span style="font-size:13px;color:var(--text-secondary);">已处理</span>`;
}

console.log('%c 班级管理与家校沟通平台 - 教师端原型', 'font-size:16px;font-weight:bold;color:#818cf8;');
console.log('%c 包含模块：工作台、通知、作业、打卡、成绩、沟通、审批、相册、问卷、收费', 'color:#94a3b8;');
