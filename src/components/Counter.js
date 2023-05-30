import Component from '../utils/Component.js';

export default class Counter extends Component {
  constructor(...args) {
    super(...args, { skipRender: true });
    this._count = 0;
    this.render();
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
    this.$addButton.addEventListener('click', () => this.count++);

    this.$minusButton = document.createElement('button');
    this.$minusButton.addEventListener('click', () => this.count--);

    this.$count = document.createElement('div');

    this.$wrapper.append(this.$addButton, this.$minusButton, this.$count);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$addButton, { type: 'innerText', value: '+' });
    this.template.set(this.$minusButton, { type: 'innerText', value: '-' });
    this.template.set(this.$count, { type: 'innerText', value: `현재 카운트: ${this.count}` });

    super.render();
  }
}
