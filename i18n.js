// i18n.js

let state=false
const i18n = {
  language: 'zh', // 默认语言
  translations: {},

  setLanguage(lang) {
		if(state){
			state=false
		}
    this.language = lang;
    return this.loadTranslations(lang).then(() => {
      this.updatePageContent();
      document.documentElement.lang = lang;
    });
  },

  async loadTranslations(lang) {
    try {
      const response = await fetch(`./${lang}.json`);
      const translations = await response.json();
      this.translations = translations;
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  },

  translate(key) {
    const keys = key.split('.');
    let value = this.translations;
    for (let k of keys) {
      value = value && value[k];
      if (!value) break;
    }
    return value || key;
  },

  updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = this.translate(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = this.translate(key);
    });
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
      const key = element.getAttribute('data-i18n-value');
      element.value = this.translate(key);
    });

    // 触发一个自定义事件，通知页面翻译已完成
    document.dispatchEvent(new Event('translationsLoaded'));
  }
};

 // 新增：获取默认语言的方法
function getDefaultLanguage() {
    // 尝试从 Cookie 中获取语言
    const cookieLanguage = getCookie('language');
    if (cookieLanguage) {
        return cookieLanguage;
    }

    // 如果 Cookie 中没有，获取浏览器默认语言
    const browserLanguage = navigator.language || navigator.userLanguage;
    const languageCode = browserLanguage.split('-')[0].toLowerCase();
    if (['zh', 'en'].includes(languageCode)) {
        return languageCode;
    }

    // 如果都没有，默认返回 'zh'
    return 'zh';
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';  // 如果没有找到 Cookie，返回空字符串
}

// 初始化翻译并更新内容
document.addEventListener('DOMContentLoaded', () => {
	const defaultLanguage = getDefaultLanguage();
  i18n.setLanguage(defaultLanguage ).then(() => {
// 		if(state) return
// 		state=true
    // 翻译加载完成后，触发自定义事件
    document.dispatchEvent(new Event('translationsLoaded'));
  });
});