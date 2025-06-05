var Name = prompt("怎麼稱呼你：","");
alert(Name + "，你好");

function showSection(sectionId) {
    // 隱藏所有區段
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 顯示選中的區段
    document.getElementById(sectionId).classList.add('active');

    // 在移動設備上，點擊選項後自動收起選單
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
}

// 處理漢堡選單
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // 點擊頁面其他地方時收起選單
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });
}); 