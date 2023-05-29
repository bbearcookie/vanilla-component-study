import Component from '../utils/Component.js';

export default class Counter extends Component {
  onInitState() {
    this._count = 0;
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.render();
  }

  onInitNodes() {
    this.$wrapper = document.createElement('article');
    this.$wrapper.setAttribute('data-component', 'counter');

    this.$addButton = document.createElement('button');
    this.$addButton.addEventListener('click', () => this.count++);

    this.$minusButton = document.createElement('button');
    this.$minusButton.addEventListener('click', () => this.count--);

    this.$count = document.createElement('div');

    this.$wrapper.appendChild(this.$addButton);
    this.$wrapper.appendChild(this.$minusButton);
    this.$wrapper.appendChild(this.$count);

    this.$target.appendChild(this.$wrapper);
  }

  getTemplate() {
    const template = new Map();

    template.set(this.$addButton, '+');
    template.set(this.$minusButton, '-');
    template.set(this.$count, `현재 카운트: ${this.count}`);

    return template;
  }

  render() {
    const template = this.getTemplate();
    this.$addButton.innerText = template.get(this.$addButton);
    this.$minusButton.innerText = template.get(this.$minusButton);
    this.$count.innerText = template.get(this.$count);
  }
}
