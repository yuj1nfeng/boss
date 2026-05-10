const fs = require('fs');
const path = require('path');

// 读取原始admin.html
let content = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');

// 批量替换ID和类名
content = content.replace(/pondsGrid/g, 'greenhousesGrid');
content = content.replace(/pondSelector/g, 'greenhouseSelector');
content = content.replace(/pondDetail/g, 'greenhouseDetail');
content = content.replace(/pondStatus/g, 'greenhouseStatus');
content = content.replace(/pondInfo/g, 'greenhouseInfo');

// 将投喂管理替换为水肥管理 + 添加智能控制部分
// 先找到所有section
const sectionEnd = '</div>\n            </div>\n        </div>\n    </div>';

// 添加智能控制section
const controlSection = `
        <div id="control" class="section">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3><i class="bi bi-gear-wide-connected me-2" style="color: #8b5cf6;"></i>智能控制</h3>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2">全部自动模式</button>
                    <button class="btn btn-outline-success btn-sm">一键全开</button>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h1 mb-0" style="color: #10b981;">🌬️</div>
                        <div class="h5 mb-0">12</div>
                        <div class="small text-secondary">通风系统运行中</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h1 mb-0" style="color: #3b82f6;">💧</div>
                        <div class="h5 mb-0">2</div>
                        <div class="small text-secondary">灌溉系统运行中</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h1 mb-0" style="color: #f59e0b;">💡</div>
                        <div class="h5 mb-0">3</div>
                        <div class="small text-secondary">补光系统运行中</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card p-3 text-center">
                        <div class="h1 mb-0" style="color: #8b5cf6;">🔥</div>
                        <div class="h5 mb-0">1</div>
                        <div class="small text-secondary">加温系统运行中</div>
                    </div>
                </div>
            </div>
            
            <div id="controlPanel"></div>
        </div>
`;

// 在analysis之前插入control section
content = content.replace(/<div id="analysis"/, controlSection + '\n        <div id="analysis"');

// 将投喂记录表格ID替换
content = content.replace(/feedingRecords/g, 'irrigationRecords');

// 替换统计卡片标题
content = content.replace(/在线大棚/g, '在线温室');
content = content.replace(/告警大棚/g, '告警温室');
content = content.replace(/今日投喂/g, '今日灌溉');
content = content.replace(/本批次产出/g, '本月产量');
content = content.replace(/本批次产量/g, '本月产量');

// 更新侧边栏标题
content = content.replace(/大棚管理/g, '温室管理');
content = content.replace(/投喂管理/g, '水肥管理');
content = content.replace(/种植批次/g, '种植批次');
content = content.replace(/设备列表/g, '设备列表');

// 写入修改后的文件
fs.writeFileSync(path.join(__dirname, 'admin.html'), content, 'utf8');
console.log('admin.html 最终修改完成！');

// 现在创建mobile.html
let mobileContent = fs.readFileSync(path.join(__dirname, 'mobile.html'), 'utf8');
mobileContent = mobileContent.replace(/水产养殖|大棚管理/g, '智慧温室');
mobileContent = mobileContent.replace(/池塘|塘口|鱼塘/g, '温室');
mobileContent = mobileContent.replace(/投喂/g, '灌溉');
fs.writeFileSync(path.join(__dirname, 'mobile.html'), mobileContent, 'utf8');
console.log('mobile.html 修改完成！');

// 更新mobile.js
let mobileJs = fs.readFileSync(path.join(__dirname, 'mobile.js'), 'utf8');
mobileJs = mobileJs.replace(/水产养殖|大棚/g, '温室');
mobileJs = mobileJs.replace(/投喂/g, '灌溉');
fs.writeFileSync(path.join(__dirname, 'mobile.js'), mobileJs, 'utf8');
console.log('mobile.js 修改完成！');

console.log('\n✅ 017-智慧温室大棚管理系统 全部文件转换完成！');
