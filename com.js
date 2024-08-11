document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

const currentPage = window.location.pathname;
if (currentPage.endsWith('index.html')) {
  header.classList.remove('bg-white','shadow', 'text-black');
  header.classList.add('bg-transparent', 'text-white');
  // 处理滚动效果
window.addEventListener('scroll', function() {
  if (currentPage.endsWith('index.html')) {
    if (window.scrollY > 50) {
      header.classList.add('bg-white','shadow','text-black');
      header.classList.remove('bg-transparent','text-white');
    } else {
      header.classList.remove('bg-white','shadow','text-black');
      header.classList.add('bg-transparent','text-white');
    }
  }
});
}

  // 打开菜单
  menuToggle.addEventListener('click', function() {
		console.log("+++");
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('slide-in');
  });

  // 关闭菜单
  closeMenu.addEventListener('click', function() {
		console.log("---");
    mobileMenu.classList.remove('slide-in');
    mobileMenu.classList.add('slide-out');
    setTimeout(() => {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.classList.remove('slide-out');
    }, 300);
  });
	

})

