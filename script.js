document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const navItems = document.querySelectorAll('.nav-item');
    
    // 简化进入动画
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 50 * index); // 减少延迟时间
    });

    // 搜索功能
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        navItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const match = text.includes(searchTerm);
            
            if (match) {
                item.style.display = 'block';
                requestAnimationFrame(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                });
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });

    // 简化月亮点击功能
    const moonBtn = document.getElementById('moonBtn');
    const aiModal = document.getElementById('aiModal');
    const aiFrame = document.getElementById('aiFrame');
    const closeBtn = document.querySelector('.close-btn');

    // 直接绑定点击事件
    if (moonBtn) {
        moonBtn.addEventListener('click', function() {
            if (aiModal) {
                aiModal.style.display = 'block';
                if (aiFrame) {
                    aiFrame.src = 'https://h2o-me.github.io/ai/';
                }
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // 关闭按钮事件
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    }

    // 点击模态框外部关闭
    if (aiModal) {
        aiModal.addEventListener('click', function(e) {
            if (e.target === aiModal) {
                closeModal();
            }
        });
    }

    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && aiModal && aiModal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        if (aiModal) {
            aiModal.style.display = 'none';
            if (aiFrame) {
                aiFrame.src = '';
            }
            document.body.style.overflow = 'auto';
        }
    }
});