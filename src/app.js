import Component from './utils/Component.js';
import { BASE_URL } from './constants/routeInfo.js';
import { navigate } from './utils/navigate.js';
import { routes } from './constants/routeInfo.js';

export default class App extends Component {
  constructor(...args) {
    super(...args);
    this.$content = null;
  }

  initNodes() {
    document.querySelector('.navbar').addEventListener('click', e => {
      const target = e.target.closest('a');
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      const path = e.target.href.replace(BASE_URL, '');
      navigate(path);
    });

    window.addEventListener('historychange', e => {
      const { to } = e.detail;

      if (location.pathname === to) history.replaceState(null, '', to);
      else history.pushState(null, '', to);

      let CurrentPage = routes.find(r => r.path.test(location.pathname)).element;
      if (this.$content) this.$target.removeChild(this.$content.$wrapper); // 기존 페이지 내용 삭제
      this.$content = new CurrentPage(this.$target);
    });
  }
}

window.addEventListener('DOMContentLoaded', e => {
  new App(document.querySelector('#app'));
});
