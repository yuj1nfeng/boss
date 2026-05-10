const fs = require('fs');
const path = require('path');

// 读取当前文件
let html = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf8');

// 替换logo文字
html = html.replace('智能仓储管理', '智慧零售管理');

// 替换入库管理为POS收银系统
const oldInbound = `    <!-- 入库管理 -->
    <div id="inbound" class="section">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0" style="font-weight:600;color:var(--text-primary);">入库管理</h5>
            <button class="btn btn-primary" onclick="alert('新增入库单')">
                <i class="bi bi-plus-lg me-2"></i>新增入库
            </button>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>入库单号</th>
                                <th>商品名称</th>
                                <th>数量</th>
                                <th>供应商</th>
                                <th>入库时间</th>
                                <th>操作人</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-weight:500;color:var(--text-primary);">#IN20240512001</td>
                                <td>华为Mate 60 Pro</td>
                                <td>50</td>
                                <td>华为官方旗舰店</td>
                                <td>2024-05-12 14:30</td>
                                <td>张仓库</td>
                                <td><span class="badge" style="background:rgba(16,185,129,0.2);color:#34d399;">已完成</span></td>
                                <td><button class="btn btn-sm btn-outline-light">详情</button></td>
                            </tr>
                            <tr>
                                <td style="font-weight:500;color:var(--text-primary);">#IN20240512002</td>
                                <td>AirPods Pro 2代</td>
                                <td>100</td>
                                <td>苹果授权经销商</td>
                                <td>2024-05-12 09:45</td>
                                <td>张仓库</td>
                                <td><span class="badge" style="background:rgba(16,185,129,0.2);color:#34d399;">已完成</span></td>
                                <td><button class="btn btn-sm btn-outline-light">详情</button></td>
                            </tr>
                            <tr>
                                <td style="font-weight:500;color:var(--text-primary);">#IN20240511001</td>
                                <td>A4打印纸</td>
                                <td>500</td>
                                <td>晨光文具</td>
                                <td>2024-05-11 16:20</td>
                                <td>李主管</td>
                                <td><span class="badge" style="background:rgba(16,185,129,0.2);color:#34d399;">已完成</span></td>
                                <td><button class="btn btn-sm btn-outline-light">详情</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- 出库管理 -->
    <div id="outbound" class="section">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0" style="font-weight:600;color:var(--text-primary);">出库管理</h5>
            <button class="btn btn-primary" onclick="alert('新增出库单')">
                <i class="bi bi-plus-lg me-2"></i>新增出库
            </button>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>出库单号</th>
                                <th>商品名称</th>
                                <th>数量</th>
                                <th>领用部门</th>
                                <th>出库时间</th>
                                <th>操作人</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-weight:500;color:var(--text-primary);">#OUT20240512001</td>
                                <td>iPhone 15 Pro Max</td>
                                <td>20</td>
                                <td>销售部</td>
                                <td>2024-05-12 11:20</td>
                                <td>李主管</td>
                                <td><span class="badge" style="background:rgba(59,130,246,0.2);color:#60a5fa;">已完成</span></td>
                                <td><button class="btn btn-sm btn-outline-light">详情</button></td>
                            </tr>
                            <tr>
                                <td style="font-weight:500;color:var(--text-primary);">#OUT20240511001</td>
                                <td>MacBook Pro 16寸</td>
                                <td>5</td>
                                <td>企业客户</td>
                                <td>2024-05-11 16:30</td>
                                <td>王经理</td>
                                <td><span class="badge" style="background:rgba(59,130,246,0.2);color:#60a5fa;">已完成</span></td>
                                <td><button class="btn btn-sm btn-outline-light">详情</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>`;

const newPOS = `    <!-- POS收银台 -->
    <div id="pos" class="section">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="mb-0" style="font-weight:700;color:var(--text-primary);">
                <i class="bi bi-cash-coin me-2" style="color:#10b981;"></i>POS收银台
            </h3>
            <div>
                <span class="badge bg-info me-2">
                    <i class="bi bi-person-circle me-1"></i>收银员: 小张
                </span>
                <span class="badge bg-success" id="currentTime">14:30:25</span>
            </div>
        </div>

        <div class="row g-4">
            <!-- 左侧：商品选择区 -->
            <div class="col-lg-8">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent border-end-0">
                                <i class="bi bi-upc-scan" style="color:#10b981;"></i>
                            </span>
                            <input type="text" id="barcodeInput" class="form-control border-start-0" 
                                   placeholder="扫描条码或输入商品名称..." 
                                   onkeypress="if(event.key==='Enter')searchProduct(this.value)">
                            <button class="btn btn-outline-primary" onclick="searchProduct(document.getElementById('barcodeInput').value)">
                                <i class="bi bi-search"></i> 搜索
                            </button>
                            <button class="btn btn-outline-success" onclick="toggleQuickPanel()">
                                <i class="bi bi-grid-fill"></i> 快捷商品
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 快捷商品面板 -->
                <div class="card mb-3" id="quickPanel" style="display:none;">
                    <div class="card-body">
                        <h6 class="mb-3" style="font-weight:600;">快捷商品</h6>
                        <div class="row g-2" id="quickProducts">
                            <!-- 动态生成 -->
                        </div>
                    </div>
                </div>

                <!-- 搜索结果 -->
                <div class="card mb-3" id="searchResultPanel" style="display:none;">
                    <div class="card-body">
                        <h6 class="mb-3" style="font-weight:600;">搜索结果</h6>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <tbody id="searchResults">
                                    <!-- 动态生成 -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 购物车 -->
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h6 class="mb-0" style="font-weight:600;">
                            <i class="bi bi-cart3 me-2"></i>购物车
                            <span class="badge bg-primary ms-2" id="cartCount">0</span>
                        </h6>
                        <button class="btn btn-sm btn-outline-danger" onclick="clearCart()">
                            <i class="bi bi-trash"></i> 清空
                        </button>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive" style="max-height:400px;overflow-y:auto;">
                            <table class="table table-hover mb-0">
                                <thead style="position:sticky;top:0;z-index:1;">
                                    <tr>
                                        <th style="width:40%;">商品名称</th>
                                        <th style="width:15%;">单价</th>
                                        <th style="width:20%;">数量</th>
                                        <th style="width:15%;">小计</th>
                                        <th style="width:10%;">操作</th>
                                    </tr>
                                </thead>
                                <tbody id="cartItems">
                                    <tr>
                                        <td colspan="5" class="text-center py-5 text-muted">
                                            <i class="bi bi-cart-x" style="font-size:48px;"></i>
                                            <p class="mt-2">购物车为空，请扫描或添加商品</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧：结算区 -->
            <div class="col-lg-4">
                <!-- 会员信息 -->
                <div class="card mb-3">
                    <div class="card-header">
                        <h6 class="mb-0" style="font-weight:600;"><i class="bi bi-person-vcard me-2"></i>会员信息</h6>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-2">
                            <input type="text" id="memberPhone" class="form-control form-control-sm" 
                                   placeholder="输入会员手机号" onkeypress="if(event.key==='Enter')searchMember(this.value)">
                            <button class="btn btn-sm btn-outline-primary" onclick="searchMember(document.getElementById('memberPhone').value)">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                        <div id="memberInfo" style="display:none;">
                            <div class="d-flex align-items-center gap-3 p-2 rounded" style="background:rgba(16,185,129,0.1);">
                                <div class="flex-shrink-0">
                                    <div class="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style="width:48px;height:48px;">
                                        <i class="bi bi-person-fill" style="font-size:24px;"></i>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="fw-bold" id="memberName">张三</div>
                                    <span class="badge bg-warning" id="memberLevel">钻石会员</span>
                                    <div class="small text-muted mt-1">
                                        积分: <span id="memberPoints">12580</span> | 
                                        余额: ¥<span id="memberBalance">200.00</span>
                                    </div>
                                </div>
                                <button class="btn btn-sm btn-outline-danger" onclick="clearMember()">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <div class="mt-2">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="usePoints" onchange="calculateTotal()">
                                    <label class="form-check-label small" for="usePoints">使用积分抵扣 (100积分=1元)</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="useBalance" onchange="calculateTotal()">
                                    <label class="form-check-label small" for="useBalance">使用会员余额</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 金额汇总 -->
                <div class="card mb-3">
                    <div class="card-header">
                        <h6 class="mb-0" style="font-weight:600;"><i class="bi bi-calculator me-2"></i>金额汇总</h6>
                    </div>
                    <div class="card-body">
                        <table class="table table-sm table-borderless">
                            <tr>
                                <td class="text-muted">商品总数:</td>
                                <td class="text-end fw-bold" id="totalItems">0 件</td>
                            </tr>
                            <tr>
                                <td class="text-muted">商品原价:</td>
                                <td class="text-end" id="subtotal">¥0.00</td>
                            </tr>
                            <tr>
                                <td class="text-muted">会员折扣:</td>
                                <td class="text-end text-success" id="memberDiscount">-¥0.00</td>
                            </tr>
                            <tr>
                                <td class="text-muted">积分抵扣:</td>
                                <td class="text-end text-success" id="pointsDiscount">-¥0.00</td>
                            </tr>
                            <tr>
                                <td class="text-muted">余额抵扣:</td>
                                <td class="text-end text-success" id="balanceDiscount">-¥0.00</td>
                            </tr>
                            <tr class="border-top">
                                <td class="fw-bold h5" style="color:#10b981;">应付金额:</td>
                                <td class="text-end fw-bold h5 text-danger" id="totalAmount">¥0.00</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <!-- 支付方式 -->
                <div class="card mb-3">
                    <div class="card-header">
                        <h6 class="mb-0" style="font-weight:600;"><i class="bi bi-credit-card me-2"></i>支付方式</h6>
                    </div>
                    <div class="card-body">
                        <div class="d-grid gap-2">
                            <button class="btn btn-lg btn-outline-primary" onclick="checkout('微信支付')" style="padding:12px;">
                                <i class="bi bi-wechat me-2" style="font-size:20px;"></i>微信支付
                            </button>
                            <button class="btn btn-lg btn-outline-primary" onclick="checkout('支付宝')" style="padding:12px;">
                                <i class="bi bi-alipay me-2" style="font-size:20px;"></i>支付宝
                            </button>
                            <div class="row g-2">
                                <div class="col-6">
                                    <button class="btn btn-outline-success w-100" onclick="checkout('现金')">
                                        <i class="bi bi-cash-stack me-1"></i>现金
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-outline-info w-100" onclick="checkout('银行卡')">
                                        <i class="bi bi-credit-card me-1"></i>刷卡
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 挂单按钮 -->
                <div class="d-grid gap-2">
                    <button class="btn btn-warning" onclick="holdOrder()">
                        <i class="bi bi-pause-circle me-2"></i>挂单 (F9)
                    </button>
                    <button class="btn btn-outline-secondary" onclick="showHeldOrders()">
                        <i class="bi bi-list-ul me-2"></i>查看挂单
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 会员管理 -->
    <div id="members" class="section">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="mb-0" style="font-weight:700;color:var(--text-primary);">
                <i class="bi bi-people me-2" style="color:#8b5cf6;"></i>会员管理
            </h3>
            <button class="btn btn-primary" onclick="alert('新增会员')">
                <i class="bi bi-person-plus me-2"></i>新增会员
            </button>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="stat-card text-center">
                    <div class="stat-value text-primary" style="font-size:28px;">1,256</div>
                    <div class="stat-label">会员总数</div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="stat-card text-center">
                    <div class="stat-value text-success" style="font-size:28px;">¥86,520</div>
                    <div class="stat-label">储值总余额</div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="stat-card text-center">
                    <div class="stat-value text-warning" style="font-size:28px;">328,560</div>
                    <div class="stat-label">总积分</div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="stat-card text-center">
                    <div class="stat-value text-info" style="font-size:28px;">89</div>
                    <div class="stat-label">今日新增</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">会员列表</h5>
                <div class="input-group" style="width:300px;">
                    <input type="text" class="form-control form-control-sm" placeholder="搜索会员姓名/手机号">
                    <button class="btn btn-sm btn-outline-primary"><i class="bi bi-search"></i></button>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>会员号</th>
                                <th>姓名</th>
                                <th>手机号</th>
                                <th>等级</th>
                                <th>积分</th>
                                <th>余额</th>
                                <th>累计消费</th>
                                <th>注册日期</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody id="memberList">
                            <!-- 动态生成 -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- 结算弹窗 -->
    <div class="modal fade" id="checkoutModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="background:rgba(30,41,59,0.95);border:1px solid rgba(255,255,255,0.1);">
                <div class="modal-header border-secondary">
                    <h5 class="modal-title"><i class="bi bi-receipt me-2"></i>收银小票</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-3">
                        <div style="font-size:20px;font-weight:700;color:#10b981;">🏪 好邻居超市</div>
                        <div class="text-muted small">感谢您的光临！</div>
                        <div class="text-muted small" id="receiptTime">2024-05-12 14:30:25</div>
                        <hr class="border-secondary">
                    </div>
                    <div id="receiptItems">
                        <!-- 动态生成 -->
                    </div>
                    <hr class="border-secondary">
                    <table class="table table-sm table-borderless">
                        <tr>
                            <td>商品总数:</td>
                            <td class="text-end" id="receiptItemsCount">0 件</td>
                        </tr>
                        <tr>
                            <td>原价合计:</td>
                            <td class="text-end" id="receiptSubtotal">¥0.00</td>
                        </tr>
                        <tr>
                            <td>优惠折扣:</td>
                            <td class="text-end text-success" id="receiptDiscount">-¥0.00</td>
                        </tr>
                        <tr class="fw-bold text-danger">
                            <td>实收金额:</td>
                            <td class="text-end h5" id="receiptTotal">¥0.00</td>
                        </tr>
                        <tr>
                            <td>支付方式:</td>
                            <td class="text-end" id="receiptPayment">微信支付</td>
                        </tr>
                    </table>
                    <hr class="border-secondary">
                    <div class="text-center">
                        <div class="text-muted small">收银员: 小张</div>
                        <div class="text-muted small">小票号: POS202405120001</div>
                        <div class="mt-3" style="color:#10b981;">
                            <i class="bi bi-check-circle-fill" style="font-size:48px;"></i>
                            <p class="mt-2 mb-0" style="font-weight:600;">支付成功</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-secondary">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="printReceipt()">
                        <i class="bi bi-printer me-2"></i>打印小票
                    </button>
                </div>
            </div>
        </div>
    </div>`;

html = html.replace(oldInbound, newPOS);

// 写入文件
fs.writeFileSync(path.join(__dirname, 'admin.html'), html, 'utf8');

console.log('✅ POS收银系统HTML已更新');
