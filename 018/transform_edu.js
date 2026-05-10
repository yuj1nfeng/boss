const fs = require('fs');
const path = require('path');

console.log('开始转换 培训机构管理系统...\n');

// 转换 admin.html
let html = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');

// 基础替换
html = html.replace(/智慧班级管理系统/g, '培训机构管理系统');
html = html.replace(/班级管理系统/g, '培训机构管理系统');
html = html.replace(/智慧班级/g, '培训管理');

// 侧边栏菜单替换
const oldMenu = `            <div class="nav-item active" onclick="showSection('dashboard')">
                <i class="bi bi-speedometer2"></i>
                <span>教务仪表盘</span>
            </div>
            <div class="nav-item" onclick="showSection('students')">
                <i class="bi bi-people"></i>
                <span>学员管理</span>
            </div>
            <div class="nav-item" onclick="showSection('classes')">
                <i class="bi bi-easel"></i>
                <span>班级课程</span>
            </div>
            <div class="nav-item" onclick="showSection('attendance')">
                <i class="bi bi-check-square"></i>
                <span>考勤消课</span>
            </div>
            <div class="nav-item" onclick="showSection('performance')">
                <i class="bi bi-graph-up"></i>
                <span>学习表现</span>
            </div>
            <div class="nav-item" onclick="showSection('teachers')">
                <i class="bi bi-person-badge"></i>
                <span>教师管理</span>
            </div>`;

const newMenu = `            <div class="nav-item active" onclick="showSection('dashboard')">
                <i class="bi bi-speedometer2"></i>
                <span>运营仪表盘</span>
            </div>
            <div class="nav-item" onclick="showSection('students')">
                <i class="bi bi-people"></i>
                <span>学员管理</span>
            </div>
            <div class="nav-item" onclick="showSection('courses')">
                <i class="bi bi-easel"></i>
                <span>课程班级</span>
            </div>
            <div class="nav-item" onclick="showSection('schedule')">
                <i class="bi bi-calendar3"></i>
                <span>排课管理</span>
            </div>
            <div class="nav-item" onclick="showSection('attendance')">
                <i class="bi bi-check-square"></i>
                <span>考勤消课</span>
            </div>
            <div class="nav-item" onclick="showSection('finance')">
                <i class="bi bi-credit-card"></i>
                <span>收费管理</span>
            </div>
            <div class="nav-item" onclick="showSection('teachers')">
                <i class="bi bi-person-badge"></i>
                <span>教师管理</span>
            </div>`;

html = html.replace(oldMenu, newMenu);

// 统计卡片标题替换
html = html.replace(/班级总数/g, '学员总数');
html = html.replace(/今日课程/g, '今日上课');
html = html.replace(/作业提交/g, '待消课时');
html = html.replace(/待审核/g, '本月收入');
html = html.replace(/表现优秀/g, '新增学员');

// 写入HTML
fs.writeFileSync(path.join(__dirname, 'admin.html'), html, 'utf8');
console.log('✅ admin.html 转换完成');

// 现在创建全新的 app.js
const appJs = `// 培训机构管理系统数据
const students = [
    { id: 1, name: '张三', gender: '男', age: 8, grade: '小学二年级', phone: '13800138001', parent: '张爸爸', courses: ['少儿美术', '硬笔书法'], remainHours: 42, totalHours: 60, enrollDate: '2024-02-15', status: '在读', level: 'A' },
    { id: 2, name: '李四', gender: '女', age: 10, grade: '小学四年级', phone: '13900139002', parent: '李妈妈', courses: ['中国舞', '钢琴基础'], remainHours: 28, totalHours: 48, enrollDate: '2024-01-10', status: '在读', level: 'A' },
    { id: 3, name: '王五', gender: '男', age: 12, grade: '小学六年级', phone: '13700137003', parent: '王爸爸', courses: ['少儿编程', '机器人'], remainHours: 56, totalHours: 80, enrollDate: '2024-03-01', status: '在读', level: 'B' },
    { id: 4, name: '赵六', gender: '女', age: 6, grade: '幼儿园大班', phone: '13600136004', parent: '赵妈妈', courses: ['少儿舞蹈', '创意美术'], remainHours: 18, totalHours: 36, enrollDate: '2024-04-15', status: '在读', level: 'B' },
    { id: 5, name: '孙七', gender: '男', age: 9, grade: '小学三年级', phone: '13500135005', parent: '孙爸爸', courses: ['跆拳道', '少儿英语'], remainHours: 35, totalHours: 60, enrollDate: '2024-02-20', status: '在读', level: 'A' },
    { id: 6, name: '周八', gender: '女', age: 11, grade: '小学五年级', phone: '13400134006', parent: '周妈妈', courses: ['古筝', '声乐'], remainHours: 45, totalHours: 48, enrollDate: '2024-01-05', status: '在读', level: 'A' },
    { id: 7, name: '吴九', gender: '男', age: 7, grade: '小学一年级', phone: '13300133007', parent: '吴爸爸', courses: ['围棋', '创意美术'], remainHours: 22, totalHours: 40, enrollDate: '2024-03-15', status: '在读', level: 'B' },
    { id: 8, name: '郑十', gender: '女', age: 14, grade: '初中二年级', phone: '13200132008', parent: '郑妈妈', courses: ['素描进阶', '中考数学'], remainHours: 38, totalHours: 60, enrollDate: '2024-02-01', status: '在读', level: 'A' },
    { id: 9, name: '陈一', gender: '男', age: 5, grade: '幼儿园中班', phone: '13100131009', parent: '陈爸爸', courses: ['感统训练', '亲子绘本'], remainHours: 16, totalHours: 24, enrollDate: '2024-04-01', status: '在读', level: 'C' },
    { id: 10, name: '林二', gender: '女', age: 15, grade: '初中三年级', phone: '13000130010', parent: '林妈妈', courses: ['中考英语冲刺', '物理培优'], remainHours: 52, totalHours: 80, enrollDate: '2024-01-20', status: '在读', level: 'A' },
    { id: 11, name: '黄三', gender: '男', age: 8, grade: '小学二年级', phone: '15800158011', parent: '黄爸爸', courses: ['少儿篮球', '硬笔书法'], remainHours: 8, totalHours: 40, enrollDate: '2023-12-01', status: '续费提醒', level: 'B' },
    { id: 12, name: '刘四', gender: '女', age: 13, grade: '初中一年级', phone: '15900159012', parent: '刘妈妈', courses: ['拉丁舞', '素描基础'], remainHours: 12, totalHours: 48, enrollDate: '2023-11-15', status: '续费提醒', level: 'A' }
];

const courses = [
    { id: 'C001', name: '少儿美术启蒙班', category: '美术', teacher: '王老师', students: 16, totalHours: 48, price: 2880, schedule: '周六 09:00-10:30', classroom: 'A101', status: '进行中' },
    { id: 'C002', name: '中国舞基础班', category: '舞蹈', teacher: '李老师', students: 20, totalHours: 60, price: 3600, schedule: '周六 14:00-15:30', classroom: 'B201舞蹈室', status: '进行中' },
    { id: 'C003', name: '少儿编程Scratch', category: '科技', teacher: '张老师', students: 12, totalHours: 48, price: 4800, schedule: '周日 09:00-10:30', classroom: 'C301微机室', status: '进行中' },
    { id: 'C004', name: '钢琴一对一', category: '音乐', teacher: '赵老师', students: 8, totalHours: 40, price: 8000, schedule: '预约制', classroom: 'D401琴房', status: '进行中' },
    { id: 'C005', name: '硬笔书法班', category: '书法', teacher: '孙老师', students: 18, totalHours: 36, price: 2160, schedule: '周六 10:40-12:10', classroom: 'A102', status: '进行中' },
    { id: 'C006', name: '跆拳道初级班', category: '体育', teacher: '周教练', students: 15, totalHours: 48, price: 2880, schedule: '周日 14:00-15:30', classroom: 'E501体育馆', status: '进行中' },
    { id: 'C007', name: '围棋入门班', category: '棋类', teacher: '吴老师', students: 10, totalHours: 40, price: 3200, schedule: '周六 16:00-17:30', classroom: 'A103', status: '进行中' },
    { id: 'C008', name: '中考数学冲刺班', category: '文化', teacher: '郑老师', students: 12, totalHours: 60, price: 6000, schedule: '周日 09:00-11:00', classroom: 'C302', status: '进行中' }
];

const schedules = [
    { id: 'S001', course: '少儿美术启蒙班', date: '2024-05-11', time: '09:00-10:30', teacher: '王老师', classroom: 'A101', students: 16, checked: 14, status: '已上课' },
    { id: 'S002', course: '硬笔书法班', date: '2024-05-11', time: '10:40-12:10', teacher: '孙老师', classroom: 'A102', students: 18, checked: 16, status: '已上课' },
    { id: 'S003', course: '中国舞基础班', date: '2024-05-11', time: '14:00-15:30', teacher: '李老师', classroom: 'B201舞蹈室', students: 20, checked: 18, status: '已上课' },
    { id: 'S004', course: '围棋入门班', date: '2024-05-11', time: '16:00-17:30', teacher: '吴老师', classroom: 'A103', students: 10, checked: 9, status: '已上课' },
    { id: 'S005', course: '少儿编程Scratch', date: '2024-05-12', time: '09:00-10:30', teacher: '张老师', classroom: 'C301微机室', students: 12, checked: 0, status: '待上课' },
    { id: 'S006', course: '中考数学冲刺班', date: '2024-05-12', time: '09:00-11:00', teacher: '郑老师', classroom: 'C302', students: 12, checked: 0, status: '待上课' },
    { id: 'S007', course: '跆拳道初级班', date: '2024-05-12', time: '14:00-15:30', teacher: '周教练', classroom: 'E501体育馆', students: 15, checked: 0, status: '待上课' }
];

const financeRecords = [
    { id: 'F202405001', student: '张三', course: '少儿美术启蒙班', amount: 2880, payDate: '2024-05-08', payMethod: '微信', handler: '前台小李', status: '已到账' },
    { id: 'F202405002', student: '李四', course: '中国舞基础班', amount: 3600, payDate: '2024-05-06', payMethod: '支付宝', handler: '前台小李', status: '已到账' },
    { id: 'F202405003', student: '王五', course: '少儿编程Scratch', amount: 4800, payDate: '2024-05-05', payMethod: '刷卡', handler: '王校长', status: '已到账' },
    { id: 'F202405004', student: '孙七', course: '跆拳道初级班', amount: 2880, payDate: '2024-05-03', payMethod: '现金', handler: '前台小李', status: '已到账' },
    { id: 'F202405005', student: '周八', course: '古筝一对一', amount: 8000, payDate: '2024-05-01', payMethod: '微信', handler: '王校长', status: '已到账' },
    { id: 'F202404001', student: '郑十', course: '素描进阶班', amount: 3600, payDate: '2024-04-28', payMethod: '支付宝', handler: '前台小李', status: '已到账' },
    { id: 'F202404002', student: '林二', course: '中考英语冲刺', amount: 6000, payDate: '2024-04-20', payMethod: '转账', handler: '王校长', status: '已到账' }
];

const teachers = [
    { id: 'T001', name: '王老师', gender: '女', age: 32, subject: '美术', title: '高级教师', teachAge: 8, courses: 2, students: 24, phone: '13800000001', status: '在职' },
    { id: 'T002', name: '李老师', gender: '女', age: 28, subject: '舞蹈', title: '主讲教师', teachAge: 5, courses: 2, students: 35, phone: '13800000002', status: '在职' },
    { id: 'T003', name: '张老师', gender: '男', age: 35, subject: '编程', title: '高级教师', teachAge: 10, courses: 2, students: 22, phone: '13800000003', status: '在职' },
    { id: 'T004', name: '赵老师', gender: '女', age: 40, subject: '钢琴', title: '特级教师', teachAge: 15, courses: 3, students: 24, phone: '13800000004', status: '在职' },
    { id: 'T005', name: '孙老师', gender: '男', age: 55, subject: '书法', title: '资深顾问', teachAge: 30, courses: 1, students: 18, phone: '13800000005', status: '在职' },
    { id: 'T006', name: '周教练', gender: '男', age: 38, subject: '跆拳道', title: '黑带四段', teachAge: 12, courses: 2, students: 30, phone: '13800000006', status: '在职' },
    { id: 'T007', name: '吴老师', gender: '男', age: 45, subject: '围棋', title: '业余五段', teachAge: 20, courses: 2, students: 20, phone: '13800000007', status: '在职' },
    { id: 'T008', name: '郑老师', gender: '女', age: 42, subject: '数学', title: '高级教师', teachAge: 18, courses: 1, students: 12, phone: '13800000008', status: '在职' }
];

const attendanceToday = [
    { id: 1, student: '张三', course: '少儿美术启蒙班', time: '08:55', status: '正常', checkBy: '王老师' },
    { id: 2, student: '李四', course: '少儿美术启蒙班', time: '09:02', status: '迟到', checkBy: '王老师' },
    { id: 3, student: '王五', course: '少儿美术启蒙班', time: '08:58', status: '正常', checkBy: '王老师' },
    { id: 4, student: '赵六', course: '中国舞基础班', time: '13:55', status: '正常', checkBy: '李老师' },
    { id: 5, student: '孙七', course: '中国舞基础班', time: '-', status: '请假', checkBy: '家长申请' },
    { id: 6, student: '周八', course: '中国舞基础班', time: '14:05', status: '迟到', checkBy: '李老师' },
    { id: 7, student: '吴九', course: '硬笔书法班', time: '10:35', status: '正常', checkBy: '孙老师' },
    { id: 8, student: '郑十', course: '硬笔书法班', time: '-', status: '缺勤', checkBy: '-' }
];

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
    initCharts();
    renderStudentList();
    renderCourseList();
    renderScheduleList();
    renderFinanceList();
    renderTeacherList();
    renderTodayAttendance();
});

// 初始化仪表板
function initDashboard() {
    document.getElementById('totalClasses').textContent = students.length;
    document.getElementById('todayClasses').textContent = schedules.filter(s => s.status === '待上课').length;
    document.getElementById('homeworkSubmitted').textContent = students.reduce((sum, s) => sum + s.remainHours, 0);
    document.getElementById('pendingReview').textContent = '¥' + (financeRecords.reduce((sum, f) => sum + f.amount, 0) / 10000).toFixed(1) + '万';
    document.getElementById('excellentStudents').textContent = 8; // 本月新增
}

// 初始化图表
function initCharts() {
    // 招生趋势
    const months = ['1月', '2月', '3月', '4月', '5月'];
    const ctx1 = document.getElementById('gradeChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: '新增学员',
                data: [12, 18, 15, 22, 16],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: '续费率',
                data: [85, 88, 92, 90, 93],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#cbd5e1' } } },
            scales: {
                x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#3b82f6' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y1: { position: 'right', ticks: { color: '#10b981' }, grid: { display: false }, max: 100 }
            }
        }
    });

    // 课程分布
    const ctx2 = document.getElementById('courseChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['美术', '舞蹈', '音乐', '体育', '编程', '文化'],
            datasets: [{
                data: [28, 25, 18, 15, 8, 6],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#cbd5e1', padding: 15 }
                }
            }
        }
    });

    // 考勤统计
    const ctx3 = document.getElementById('teacherChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [{
                label: '上课人次',
                data: [45, 52, 38, 65, 48, 120, 98],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    });
}

// 渲染学员列表
function renderStudentList() {
    const tbody = document.getElementById('studentList') || document.createElement('tbody');
    tbody.innerHTML = students.map(s => \`
        <tr>
            <td><strong>\${s.name}</strong><br><small class="text-secondary">\${s.grade}</small></td>
            <td>\${s.parent}<br><small>\${s.phone}</small></td>
            <td>\${s.courses.join(', ')}</td>
            <td>
                <div class="progress" style="height: 8px;">
                    <div class="progress-bar bg-success" style="width: \${(s.remainHours/s.totalHours*100).toFixed(0)}%"></div>
                </div>
                <small>\${s.remainHours}/\${s.totalHours}课时</small>
            </td>
            <td>\${s.enrollDate}</td>
            <td><span class="badge bg-\${s.status === '续费提醒' ? 'warning' : s.status === '在读' ? 'success' : 'secondary'}">\${s.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看学员详情')">详情</button>
                <button class="btn btn-sm btn-outline-success" onclick="showToast('办理续费')">续费</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染课程列表
function renderCourseList() {
    const tbody = document.getElementById('classList') || document.createElement('tbody');
    tbody.innerHTML = courses.map(c => \`
        <tr>
            <td><span class="badge bg-secondary">\${c.id}</span><br><strong>\${c.name}</strong></td>
            <td><span class="badge bg-info">\${c.category}</span></td>
            <td>\${c.teacher}</td>
            <td>\${c.students}人</td>
            <td>¥\${c.price}</td>
            <td><small>\${c.schedule}</small><br><small class="text-secondary">\${c.classroom}</small></td>
            <td><span class="badge bg-success">\${c.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看课程详情')">详情</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染排课列表
function renderScheduleList() {
    const tbody = document.getElementById('homeworkList') || document.createElement('tbody');
    tbody.innerHTML = schedules.map(s => \`
        <tr>
            <td><strong>\${s.course}</strong></td>
            <td>\${s.date}</td>
            <td>\${s.time}</td>
            <td>\${s.teacher}</td>
            <td>\${s.classroom}</td>
            <td>\${s.checked}/\${s.students}</td>
            <td><span class="badge bg-\${s.status === '已上课' ? 'success' : 'warning'}">\${s.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看考勤详情')">考勤</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染收费列表
function renderFinanceList() {
    // 创建新的section内容
    const financeSection = document.getElementById('performance') || document.createElement('div');
    if (financeSection) {
        financeSection.innerHTML = \`
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3><i class="bi bi-credit-card me-2" style="color: #10b981;"></i>收费管理</h3>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2">收费统计</button>
                    <button class="btn btn-primary btn-sm">新收费</button>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h4 mb-0 text-success">¥\${(financeRecords.reduce((sum, f) => sum + f.amount, 0) / 10000).toFixed(1)}万</div>
                        <div class="small text-secondary">本月收入</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h4 mb-0 text-primary">\${financeRecords.length}</div>
                        <div class="small text-secondary">收费笔数</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h4 mb-0 text-warning">\${students.filter(s => s.status === '续费提醒').length}</div>
                        <div class="small text-secondary">待续费学员</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h4 mb-0 text-info">93.5%</div>
                        <div class="small text-secondary">续费率</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">收费记录</h5>
                    <input type="text" class="form-control form-control-sm" style="width: 200px;" placeholder="搜索学员...">
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>流水号</th>
                                    <th>学员</th>
                                    <th>课程/项目</th>
                                    <th>金额</th>
                                    <th>日期</th>
                                    <th>支付方式</th>
                                    <th>经办人</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="financeList"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        \`;
    }
    
    const tbody = document.getElementById('financeList') || document.createElement('tbody');
    tbody.innerHTML = financeRecords.map(f => \`
        <tr>
            <td><span class="badge bg-secondary">\${f.id}</span></td>
            <td><strong>\${f.student}</strong></td>
            <td>\${f.course}</td>
            <td class="text-success">¥\${f.amount.toLocaleString()}</td>
            <td>\${f.payDate}</td>
            <td><span class="badge bg-info">\${f.payMethod}</span></td>
            <td>\${f.handler}</td>
            <td><span class="badge bg-success">\${f.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看收费详情')">详情</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染教师列表
function renderTeacherList() {
    const tbody = document.getElementById('teacherList') || document.createElement('tbody');
    tbody.innerHTML = teachers.map(t => \`
        <tr>
            <td><span class="badge bg-secondary">\${t.id}</span><br><strong>\${t.name}</strong></td>
            <td>\${t.gender === '女' ? '👩' : '👨'} \${t.age}岁</td>
            <td><span class="badge bg-info">\${t.subject}</span><br><small class="text-secondary">\${t.title}</small></td>
            <td>\${t.teachAge}年</td>
            <td>\${t.courses}门 / \${t.students}人</td>
            <td>\${t.phone}</td>
            <td><span class="badge bg-success">\${t.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showToast('查看教师详情')">详情</button>
            </td>
        </tr>
    \`).join('');
}

// 渲染今日考勤
function renderTodayAttendance() {
    const targetEl = document.getElementById('gradeChart').parentElement.parentElement.querySelector('#performanceList') || 
                     document.getElementById('todayAttendance') || 
                     document.createElement('div');
    if (targetEl) {
        targetEl.innerHTML = attendanceToday.slice(0, 5).map(a => \`
            <div class="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                <div>
                    <div class="fw-medium">\${a.student}</div>
                    <small class="text-secondary">\${a.course} · \${a.time}</small>
                </div>
                <span class="badge bg-\${a.status === '正常' ? 'success' : a.status === '迟到' ? 'warning' : a.status === '请假' ? 'info' : 'danger'}">\${a.status}</span>
            </div>
        \`).join('');
    }
}

// 页面切换
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // 重新渲染对应列表
    if (sectionId === 'students') renderStudentList();
    if (sectionId === 'courses') renderCourseList();
    if (sectionId === 'schedule') renderScheduleList();
    if (sectionId === 'finance') renderFinanceList();
    if (sectionId === 'teachers') renderTeacherList();
}

// 显示提示
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-primary border-0 show position-fixed';
    toast.style.cssText = 'bottom: 20px; right: 20px; z-index: 9999;';
    toast.innerHTML = \`
        <div class="d-flex">
            <div class="toast-body">\${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    \`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
`;

fs.writeFileSync(path.join(__dirname, 'app.js'), appJs, 'utf8');
console.log('✅ app.js 转换完成');

// 更新 mobile.html
let mobileHtml = fs.readFileSync(path.join(__dirname, 'mobile.html'), 'utf8');
mobileHtml = mobileHtml.replace(/智慧班级/g, '培训管理');
mobileHtml = mobileHtml.replace(/班级/g, '课程');
mobileHtml = mobileHtml.replace(/学生/g, '学员');
mobileHtml = mobileHtml.replace(/作业/g, '课时');
fs.writeFileSync(path.join(__dirname, 'mobile.html'), mobileHtml, 'utf8');
console.log('✅ mobile.html 转换完成');

// 更新 mobile.js
let mobileJs = fs.readFileSync(path.join(__dirname, 'mobile.js'), 'utf8');
mobileJs = mobileJs.replace(/班级|学生/g, '学员');
mobileJs = mobileJs.replace(/作业/g, '课时');
mobileJs = mobileJs.replace(/成绩/g, '考勤');
fs.writeFileSync(path.join(__dirname, 'mobile.js'), mobileJs, 'utf8');
console.log('✅ mobile.js 转换完成');

console.log('\n🎉 018-培训机构管理系统 全部文件转换完成！');
console.log('\n🚀 所有三个新项目已全部完成！');
