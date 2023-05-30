import Component from '../../../utils/Component.js';

export default class Username extends Component {
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

    this.$usernameLabel = document.createElement('label');
    this.$usernameLabel.setAttribute('for', 'username');
    this.$usernameLabel.textContent = '아이디';

    this.$usernameInput = document.createElement('input');
    this.$usernameInput.setAttribute('id', 'username');
    this.$usernameInput.addEventListener('input', e => this.value = e.target.value);

    this.$usernameText = document.createElement('span');

    this.$wrapper.append(this.$usernameLabel, this.$usernameInput, this.$usernameText);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$usernameText, { type: 'textContent', value: this.value });
    super.render();
  }
}
