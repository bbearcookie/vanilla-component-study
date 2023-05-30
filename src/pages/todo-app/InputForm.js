import Component from '../../utils/Component.js';

export default class InputForm extends Component {
  constructor({ $target, handleAddItem }) {
    super($target, { skip: true });
    this.handleAddItem = handleAddItem;
    this.InputForm = null;
    this.TodoList = null;
    this.startComponent();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleAddItem(this.$input.value);
    this.$input.value = '';
  }

  initNodes() {
    this.$wrapper = document.createElement('form');
    this.$wrapper.addEventListener('submit', e => this.handleSubmit(e));

    this.$input = document.createElement('input');
    this.$submitButton = document.createElement('button');
    this.$submitButton.textContent = '추가';

    this.$wrapper.append(this.$input, this.$submitButton);
    this.$target.append(this.$wrapper);
  }
}
