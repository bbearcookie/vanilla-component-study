import Component from '../utils/Component.js';
import { navigate } from '../utils/history.js';

export default class NotFoundPage extends Component {
  initNodes() {
    this.$wrapper = document.createElement('main');
    this.$header = document.createElement('h1');
    this.$header.textContent = 'NOT FOUND 404. 존재하지 않는 페이지에요.';

    this.$button = document.createElement('button');
    this.$button.textContent = '메인 페이지로 이동';
    this.$button.addEventListener('click', () => navigate('/'));

    this.$wrapper.appendChild(this.$header);
    this.$wrapper.appendChild(this.$button);
    this.$target.appendChild(this.$wrapper);
  }
}
