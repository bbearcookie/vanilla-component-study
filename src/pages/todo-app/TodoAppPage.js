import Component from '../../utils/Component.js';
import InputForm from './components/InputForm.js';
import TodoList from './components/TodoList.js';

export default class TodoAppPage extends Component {
  constructor(...args) {
    super(...args, { skip: true });
    this.InputForm = null;
    this.TodoList = null;
    this.startComponent();
  }

  handleAddItem(value) {
    this.TodoList.todos.push({ id: this.TodoList.nextId++, value: value });
    this.TodoList.render();
  }

  handleRemoveItem(id) {
    this.TodoList.todos = this.TodoList.todos.filter(todo => todo.id !== id);
    this.TodoList.render();
  }

  initNodes() {
    this.$wrapper = document.createElement('main');

    this.InputForm = new InputForm({
      $target: this.$wrapper,
      handleAddItem: value => this.handleAddItem(value),
    });

    this.TodoList = new TodoList({
      $target: this.$wrapper,
      handleRemoveItem: id => this.handleRemoveItem(id),
    });

    this.$target.append(this.$wrapper);
  }
}
