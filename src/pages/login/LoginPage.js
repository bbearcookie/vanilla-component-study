import Component from '../../utils/Component.js';

export default class LoginPage extends Component {
  constructor(...args) {
    super(...args, { skip: true });
    this._username = '';
    this._password = '';
    this.startComponent();
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  set username(value) {
    this._username = value;
    this.render();
  }

  set password(value) {
    this._password = value;
    this.render();
  }

  handleChangeUsername(e) {
    this.username = e.target.value;
  }

  handleChangePassword(e) {
    this.password = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify({ username: this.username, password: this.password }));
  }

  initNodes() {
    this.$wrapper = document.createElement('form');
    this.$wrapper.setAttribute('data-component', 'login-component');
    this.$wrapper.addEventListener('submit', e => this.handleSubmit(e));

    // 아이디 부분
    {
      this.$usernameSection = document.createElement('section');
      {
        this.$usernameLabel = document.createElement('label');
        this.$usernameLabel.setAttribute('for', 'username');
        this.$usernameLabel.textContent = '아이디';
        this.$usernameInput = document.createElement('input');
        this.$usernameInput.setAttribute('id', 'username');
        this.$usernameInput.addEventListener('input', e => this.handleChangeUsername(e));
        this.$usernameText = document.createElement('span');
      }
      this.$usernameSection.append(this.$usernameLabel, this.$usernameInput, this.$usernameText);
    }

    // 비밀번호 부분
    {
      this.$passwordSection = document.createElement('section');
      {
        this.$passwordLabel = document.createElement('label');
        this.$passwordLabel.setAttribute('for', 'password');
        this.$passwordLabel.textContent = '비밀번호';
        this.$passwordInput = document.createElement('input');
        this.$passwordInput.setAttribute('id', 'password');
        this.$passwordInput.setAttribute('type', 'password');
        this.$passwordInput.addEventListener('input', e => this.handleChangePassword(e));
        this.$passwordText = document.createElement('span');
      }
      this.$passwordSection.append(this.$passwordLabel, this.$passwordInput, this.$passwordText);
    }

    this.$submitButton = document.createElement('button');
    this.$submitButton.setAttribute('type', 'submit');
    this.$submitButton.textContent = '전송';

    this.$wrapper.append(this.$usernameSection, this.$passwordSection, this.$submitButton);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$usernameInput, { type: 'value', value: this.username });
    this.template.set(this.$usernameText, { type: 'textContent', value: this.username });
    this.template.set(this.$passwordInput, { type: 'value', value: this.password });
    this.template.set(this.$passwordText, { type: 'textContent', value: this.password });

    super.render();
  }
}
