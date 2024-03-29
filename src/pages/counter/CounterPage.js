import Component from '../../utils/Component.js';

export default class CounterPage extends Component {
  constructor(...args) {
    super(...args, { skip: true });
    this._count = 0;
    this.startComponent();
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.render();
  }

  initNodes() {
    this.$wrapper = document.createElement('article');
    this.$wrapper.setAttribute('data-component', 'counter');

    this.$addButton = document.createElement('button');
    this.$addButton.textContent = '+';
    this.$addButton.addEventListener('click', () => this.count++);

    this.$minusButton = document.createElement('button');
    this.$minusButton.textContent = '-';
    this.$minusButton.addEventListener('click', () => this.count--);

    this.$count = document.createElement('div');

    this.$wrapper.append(this.$addButton, this.$minusButton, this.$count);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$count, { type: 'textContent', value: `현재 카운트: ${this.count}` });
    super.render();
  }
}
