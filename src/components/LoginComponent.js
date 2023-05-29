import Component from '../utils/Component.js';

export default class LoginComponent extends Component {
  constructor(...args) {
    super(...args);
    this._username = '';
    this._password = '';
    this.render();
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
    this.$form = document.createElement('form');
    this.$form.setAttribute('data-component', 'login-component');
    this.$form.addEventListener('submit', e => this.handleSubmit(e));

    // 아이디 부분
    {
      this.$usernameSection = document.createElement('section');
      {
        this.$usernameLabel = document.createElement('label');
        this.$usernameLabel.setAttribute('for', 'username');
        this.$usernameInput = document.createElement('input');
        this.$usernameInput.setAttribute('id', 'username');
        this.$usernameInput.addEventListener('input', e => this.handleChangeUsername(e));
        this.$usernameText = document.createElement('span');
      }
      this.$usernameSection.appendChild(this.$usernameLabel);
      this.$usernameSection.appendChild(this.$usernameInput);
      this.$usernameSection.appendChild(this.$usernameText);
    }

    // 비밀번호 부분
    {
      this.$passwordSection = document.createElement('section');
      {
        this.$passwordLabel = document.createElement('label');
        this.$passwordLabel.setAttribute('for', 'password');
        this.$passwordInput = document.createElement('input');
        this.$passwordInput.setAttribute('id', 'password');
        this.$passwordInput.setAttribute('type', 'password');
        this.$passwordInput.addEventListener('input', e => this.handleChangePassword(e));
        this.$passwordText = document.createElement('span');
      }
      this.$passwordSection.appendChild(this.$passwordLabel);
      this.$passwordSection.appendChild(this.$passwordInput);
      this.$passwordSection.appendChild(this.$passwordText);
    }

    this.$submitButton = document.createElement('button');
    this.$submitButton.setAttribute('type', 'submit');

    this.$form.appendChild(this.$usernameSection);
    this.$form.appendChild(this.$passwordSection);
    this.$form.appendChild(this.$submitButton);

    this.$target.appendChild(this.$form);
  }

  render() {
    this.template.set(this.$usernameLabel, { type: 'innerText', value: '아이디' });
    this.template.set(this.$usernameInput, { type: 'value', value: this.username });
    this.template.set(this.$usernameText, { type: 'innerText', value: this.username });

    this.template.set(this.$passwordLabel, { type: 'innerText', value: '비밀번호' });
    this.template.set(this.$passwordInput, { type: 'value', value: this.password });
    this.template.set(this.$passwordText, { type: 'innerText', value: this.password });

    this.template.set(this.$submitButton, { type: 'innerText', value: '전송' });

    super.render();
  }
}