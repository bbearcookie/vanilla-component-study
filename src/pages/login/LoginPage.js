import Component from '../../utils/Component.js';
import Username from './components/Username.js';
import Password from './components/Password.js';

export default class LoginPage extends Component {
  constructor(...args) {
    super(...args, { skip: true });
    this.Username = null;
    this.Password = null;
    this.startComponent();
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify({ username: this.Username.value, password: this.Password.value }));
  }

  initNodes() {
    this.$wrapper = document.createElement('form');
    this.$wrapper.addEventListener('submit', e => this.handleSubmit(e));

    this.Username = new Username(this.$wrapper);
    this.Password = new Password(this.$wrapper);

    this.$submitButton = document.createElement('button');
    this.$submitButton.setAttribute('type', 'submit');
    this.$submitButton.textContent = '전송';

    this.$wrapper.append(this.$submitButton);
    this.$target.append(this.$wrapper);
  }
}
