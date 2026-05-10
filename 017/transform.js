const fs = require('fs');
const path = require('path');

// 读取原始admin.html
let content = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');

// 批量替换
const replacements = [
    ['大规模水产养殖智能化管理系统', '智慧温室大棚管理系统'],
    ['水产养殖智能化管理系统', '智慧温室大棚管理系统'],
    ['养殖塘', '温室'],
    ['塘口', '大棚'],
    ['鱼塘', '大棚'],
    ['池塘', '大棚'],
    ['水产养殖', '设施农业'],
    ['投喂', '灌溉施肥'],
    ['溶氧', '光照强度'],
    ['DO值', 'CO₂浓度'],
    ['PH值', '土壤pH'],
    ['氨氮', '土壤湿度'],
    ['亚硝酸盐', '土壤EC值'],
    ['水质', '环境'],
    ['水温', '气温'],
    ['水深', '基质湿度'],
    ['透明度', '光照度'],
    ['鱼苗', '种苗'],
    ['成鱼', '收获'],
    ['养殖', '种植'],
    ['鱼药', '农药'],
    ['增氧机', '通风设备'],
    ['水泵', '灌溉泵'],
    ['投料机', '施肥机'],
    ['水生生物', '作物生长'],
    ['缺氧', '缺光'],
    ['饲喂', '水肥'],
    ['<i class="bi bi-droplet"></i>', '<i class="bi bi-building"></i>'],
    ['<i class="bi bi-basket"></i>', '<i class="bi bi-droplet-fill"></i>'],
    ['<i class="bi bi-people"></i>', '<i class="bi bi-flower1"></i>'],
    ['投喂管理', '水肥管理'],
    ['<span>大棚管理</span>', '<span>温室管理</span>'],
    ['温室大棚列表', '温室列表'],
    // 添加智能控制导航
    ['<div class="nav-item" onclick="showSection\\(\'analysis\'\\)">', 
     '<div class="nav-item" onclick="showSection(\'control\')">\n                <i class="bi bi-gear-wide-connected"></i>\n                <span>智能控制</span>\n            </div>\n            <div class="nav-item" onclick="showSection(\'analysis\')">'],
    // 统计卡片标题
    ['在线大棚', '在线温室'],
    ['告警大棚', '告警温室'],
    ['今日投喂', '今日灌溉'],
    ['本批次产出', '本季产量'],
    // 环境指标
    ['水温', '气温'],
];

replacements.forEach(([from, to]) => {
    content = content.split(from).join(to);
});

// 写入修改后的文件
fs.writeFileSync(path.join(__dirname, 'admin.html'), content, 'utf8');
console.log('admin.html 转换完成！');

// 处理app.js
let appContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

replacements.forEach(([from, to]) => {
    appContent = appContent.split(from).join(to);
});

fs.writeFileSync(path.join(__dirname, 'app.js'), appContent, 'utf8');
console.log('app.js 转换完成！');

console.log('✅ 017-智慧温室大棚管理系统 基础文件转换完成！');
