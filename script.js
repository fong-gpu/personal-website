// 更新案例计数器
document.addEventListener('DOMContentLoaded', function() {
    const caseCount = document.getElementById('caseCount');
    let count = 15; // 初始案例数
    caseCount.textContent = count;

    // 处理联系表单提交
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言，我们会尽快回复！');
        contactForm.reset();
    });
}); 