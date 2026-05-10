const fs = require('fs');
const path = require('path');

const projects = ['003', '005', '006', '007', '014', '015', '016', '017', '018'];
const files = ['admin.html', 'mobile.html'];
const faviconTag = '    <link rel="icon" type="image/png" href="../favicon.png">\n';
const faviconTagRoot = '    <link rel="icon" type="image/png" href="favicon.png">\n';

console.log('🔍 开始添加 favicon 到所有 HTML 文件...\n');

let addedCount = 0;

// 处理所有项目的 HTML 文件
projects.forEach(project => {
    console.log(`📁 处理项目: ${project}`);
    
    files.forEach(file => {
        const filePath = path.join(__dirname, project, file);
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // 检查是否已有 favicon
            if (!content.includes('favicon.png')) {
                // 在 </head> 前添加，或者在 <title> 后添加
                if (content.includes('</title>')) {
                    content = content.replace('</title>', '</title>\n' + faviconTag);
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`   ✅ ${file}`);
                    addedCount++;
                }
            } else {
                console.log(`   ℹ️ ${file} 已有 favicon`);
            }
        }
    });
    console.log('');
});

// 处理根目录的 index.html
console.log('📁 处理主入口: index.html');
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    if (!content.includes('favicon.png')) {
        if (content.includes('</title>')) {
            content = content.replace('</title>', '</title>\n' + faviconTagRoot);
            fs.writeFileSync(indexPath, content, 'utf8');
            console.log('   ✅ index.html\n');
            addedCount++;
        }
    } else {
        console.log('   ℹ️ index.html 已有 favicon\n');
    }
}

console.log(`🎉 Favicon 添加完成！共添加到 ${addedCount} 个文件`);
