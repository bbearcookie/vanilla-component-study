import Component from '../../utils/Component.js';

export default class TodoList extends Component {
  constructor({ $target, handleRemoveItem }) {
    super($target, { skip: true });
    this.handleRemoveItem = handleRemoveItem;
    this.todos = [];
    this.nextId = 1;
    this.startComponent();
  }

  initNodes() {
    this.$wrapper = document.createElement('ul');
    this.$wrapper.addEventListener('click', (e) => {
      if (e.target.dataset.role !== 'remove-button') return;
      const id = parseInt(e.target.closest('li')?.dataset.id) || 0;
      this.handleRemoveItem(id);
    });

    this.$target.append(this.$wrapper);
  }

  render() {
    this.$wrapper.innerHTML = this.todos.map(({ id, value }) => `
    <li data-id='${id}'>
      ${value}
      <button data-role="remove-button">삭제</button>
    </li>`).join('');
  }
}
