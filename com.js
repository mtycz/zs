
// 汉堡菜单效果
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
  $('.header').addClass('scrolled');
  const hamburger = document.querySelector('.hamburger-menu');
  menu.classList.toggle('hidden');
  hamburger.classList.toggle('active');
}

// 共用 header 引入
async function loadHeader() {
  try {
    const response = await fetch('header.html');
    if (response.ok) {
      const content = await response.text();
      const div = document.createElement('div');
      div.innerHTML = content;
      document.body.insertBefore(div, document.body.firstChild);

      // 获取当前页面的路径
      var currentPage = window.location.pathname;

      // 更通用的判断是否为 index 相关页面
      if (!currentPage.endsWith('/index.html') &&!currentPage.endsWith('/index.htm') &&!currentPage.endsWith('/index.php')) {
        div.querySelector('.header').classList.add('scrolled');
      }

    } else {
      console.error('Failed to load header');
    }
  } catch (error) {
    console.error('Error loading header:', error);
  }
}