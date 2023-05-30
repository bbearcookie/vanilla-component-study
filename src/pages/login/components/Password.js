import Component from '../../../utils/Component.js';

export default class Password extends Component {
  constructor(...args) {
    super(...args, { skip: true });
    this._value = '';
    this.startComponent();
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.render();
  }

  initNodes() {
    this.$wrapper = document.createElement('section');

    this.$passwordLabel = document.createElement('label');
    this.$passwordLabel.setAttribute('for', 'password');
    this.$passwordLabel.textContent = '비밀번호';

    this.$passwordInput = document.createElement('input');
    this.$passwordInput.setAttribute('id', 'password');
    this.$passwordInput.setAttribute('type', 'password');
    this.$passwordInput.addEventListener('input', e => this.value = e.target.value);

    this.$passwordText = document.createElement('span');

    this.$wrapper.append(this.$passwordLabel, this.$passwordInput, this.$passwordText);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$passwordText, { type: 'textContent', value: this.value });
    super.render();
  }
}