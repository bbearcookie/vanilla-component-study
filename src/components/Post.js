import Component from '../utils/Component.js';

export default class Post extends Component {
  constructor({ $target }) {
    super($target, { skip: true });
    this._title = "제목 (번호)";
    this.startComponent();
  }

  get title() {
    return this._title;
  }

  set title(value) {
    console.log('set title')
    this._title = value;
    this.render();
  }

  initNodes() {
    this.$wrapper = document.createElement('article');

    this.$title = document.createElement('h3');
    this.$author = document.createElement('p');
    this.$content = document.createElement('p');

    this.$wrapper.append(this.$title, this.$author, this.$content);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$title, { type: 'innerText', value: this.title });
    this.template.set(this.$author, { type: 'innerText', value: '작성자' });
    this.template.set(this.$content, { type: 'innerText', value: '내용' });

    super.render();
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const data = await response.json();
    // console.log(data);
  }
}
