const fs = require('fs');
const path = require('path');

// 明亮主题颜色映射
const colorMap = {
    // 背景色
    '#0f172a': '#f8fafc',
    '#0a0f1a': '#ffffff',
    '#1a2332': '#f1f5f9',
    '#0c1322': '#ffffff',
    '#0d1b2a': '#f8fafc',
    'rgba(15, 23, 42, 0.95)': 'rgba(248, 250, 252, 0.95)',
    
    // 卡片背景
    'rgba(30, 41, 59, 0.6)': 'rgba(255, 255, 255, 0.9)',
    'rgba(30, 41, 59, 0.8)': 'rgba(255, 255, 255, 0.95)',
    'rgba(30, 41, 59, 0.5)': 'rgba(255, 255, 255, 0.85)',
    'rgba(51, 65, 85, 0.4)': 'rgba(255, 255, 255, 0.7)',
    'rgba(30, 41, 59, 0.7)': 'rgba(255, 255, 255, 0.9)',
    
    // 边框
    'rgba(255,255,255,0.1)': 'rgba(0,0,0,0.1)',
    'rgba(255,255,255,0.08)': 'rgba(0,0,0,0.08)',
    'rgba(255,255,255,0.15)': 'rgba(0,0,0,0.12)',
    'rgba(255,255,255,0.05)': 'rgba(0,0,0,0.05)',
    'rgba(255, 255, 255, 0.1)': 'rgba(0, 0, 0, 0.1)',
    
    // 文字颜色
    '#f8fafc': '#0f172a',
    '#cbd5e1': '#475569',
    '#94a3b8': '#64748b',
    '#e2e8f0': '#334155',
    '#ffffff': '#1e293b',
    
    // 导航栏
    '#1e293b': '#ffffff',
    '#334155': '#e2e8f0',
    
    // 表格
    '#1e293b': '#ffffff',
    '#334155': '#f1f5f9',
    
    // 模态框
    '#1e293b': '#ffffff',
};

// 需要处理的项目目录
const projects = ['003', '005', '006', '007', '014', '015', '016', '017', '018'];
const files = ['admin.html', 'mobile.html'];

console.log('🔄 开始转换所有项目为明亮主题...\n');

let totalFiles = 0;
let totalChanges = 0;

projects.forEach(project => {
    console.log(`📁 处理项目: ${project}`);
    
    files.forEach(file => {
        const filePath = path.join(__dirname, project, file);
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            let changes = 0;
            
            // 应用颜色映射
            Object.entries(colorMap).forEach(([dark, light]) => {
                const regex = new RegExp(dark.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                const matches = content.match(regex);
                if (matches) {
                    changes += matches.length;
                    content = content.replace(regex, light);
                }
            });
            
            // 额外的特定修改 - 表格悬停
            content = content.replace(
                /\.table-hover > tbody > tr:hover\s*{\s*background-color: rgba\(255,255,255,0\.05\);?\s*}/g,
                '.table-hover > tbody > tr:hover { background-color: rgba(0,0,0,0.05); }'
            );
            
            // 额外的特定修改 - 输入框背景
            content = content.replace(
                /background-color: #1e293b;/g,
                'background-color: #f1f5f9;'
            );
            
            // 额外的特定修改 - 输入框边框
            content = content.replace(
                /border-color: #334155;/g,
                'border-color: #cbd5e1;'
            );
            
            // 额外的特定修改 - 导航激活态
            content = content.replace(
                /\.nav-item\.active\s*{\s*background: linear-gradient\(135deg, #3b82f6, #8b5cf6\);?\s*}/g,
                '.nav-item.active { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white !important; }'
            );
            
            // 导航激活态文字颜色
            content = content.replace(
                /\.nav-item\.active\s*{\s*background: rgba\(59, 130, 246, 0\.2\);?\s*}/g,
                '.nav-item.active { background: rgba(59, 130, 246, 0.15); }'
            );
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`   ✅ ${file} (${changes} 处修改)`);
            totalFiles++;
            totalChanges += changes;
        } else {
            console.log(`   ⚠️ ${file} 不存在`);
        }
    });
    console.log('');
});

// 处理主 index.html
console.log('📁 处理主入口: index.html');
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    let changes = 0;
    
    Object.entries(colorMap).forEach(([dark, light]) => {
        const regex = new RegExp(dark.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = content.match(regex);
        if (matches) {
            changes += matches.length;
            content = content.replace(regex, light);
        }
    });
    
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log(`   ✅ index.html (${changes} 处修改)\n`);
    totalFiles++;
    totalChanges += changes;
}

// 更新Chart.js配置 - 所有项目的app.js
console.log('📊 更新图表配置...\n');
projects.forEach(project => {
    const appJsPath = path.join(__dirname, project, 'app.js');
    if (fs.existsSync(appJsPath)) {
        let content = fs.readFileSync(appJsPath, 'utf8');
        
        // 更新图表文字颜色
        content = content.replace(/color: '#cbd5e1'/g, "color: '#475569'");
        content = content.replace(/color: '#ffffff'/g, "color: '#1e293b'");
        
        fs.writeFileSync(appJsPath, content, 'utf8');
        console.log(`   ✅ ${project}/app.js`);
        totalFiles++;
    }
});

console.log('\n🎉 明亮主题转换完成！');
console.log(`📊 统计: ${totalFiles} 个文件, ${totalChanges} 处颜色修改`);
console.log('\n🌈 主题已切换为: 明亮模式 Light Mode');
console.log('   - 背景: 白色/浅灰');
console.log('   - 文字: 深灰/黑色');
console.log('   - 卡片: 半透明白色');
console.log('   - 边框: 浅灰色');
