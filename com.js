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



function toggleLanguage() {
	
  const currentLanguage = document.getElementById('languageButtonText').getAttribute('data-i18n');
  const currentLanguageMobile = document.getElementById('languageButtonTextMobile').getAttribute('data-i18n');

  let newLanguage;
  if (currentLanguage === 'common.switchToEnglish' || currentLanguageMobile === 'common.switchToEnglish') {
    i18n.setLanguage('en');
    newLanguage = 'en';
    document.getElementById('languageButtonText').setAttribute('data-i18n', 'common.switchToChinese');
    document.getElementById('languageButtonTextMobile').setAttribute('data-i18n', 'common.switchToChinese');
  } else {
    i18n.setLanguage('zh');
    newLanguage = 'zh';
    document.getElementById('languageButtonText').setAttribute('data-i18n', 'common.switchToEnglish');
    document.getElementById('languageButtonTextMobile').setAttribute('data-i18n', 'common.switchToEnglish');
  }

  // 将语言设置存储到 Cookie 中，有效期为 30 天
  document.cookie = `language=${newLanguage}; max-age=2592000; path=/`;
  console.log(newLanguage);
	// 刷新页面
  location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    const languageFromCookie = getCookie('language');
    const languageButtonText = document.getElementById('languageButtonText');
    const languageButtonTextMobile = document.getElementById('languageButtonTextMobile');

    languageButtonText.setAttribute('data-i18n', languageFromCookie === 'zh'? 'common.switchToEnglish' : 'common.switchToChinese');
    languageButtonText.textContent = languageFromCookie === 'zh'? 'English' : '中文';

    languageButtonTextMobile.setAttribute('data-i18n', languageFromCookie === 'zh'? 'common.switchToEnglish' : 'common.switchToChinese');
    languageButtonTextMobile.textContent = languageFromCookie === 'zh'? 'English' : '中文';
  });

 // 移动端菜单切换逻辑 (与之前相同)
  function toggleSolutionsMenu() {
    const submenu = document.getElementById('solutionsSubmenu');
    submenu.classList.toggle('hidden');
  }

  // 新增：PC端二级菜单展开逻辑
  document.addEventListener('DOMContentLoaded', function() {
    const solutionsButton = document.getElementById('solutions');
    const flyoutMenu = solutionsButton.nextElementSibling;

    solutionsButton.addEventListener('mouseenter', () => {
      flyoutMenu.classList.remove('opacity-0', 'translate-y-1', 'pointer-events-none');
      flyoutMenu.classList.add('opacity-100', 'translate-y-0');
    });

    const header = document.querySelector('header');
    header.addEventListener('mouseleave', () => {
      flyoutMenu.classList.add('opacity-0', 'translate-y-1', 'pointer-events-none');
      flyoutMenu.classList.remove('opacity-100', 'translate-y-0');
    });
  });

  

(function() {
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
  script.type = 'module';
  document.head.appendChild(script);
})();