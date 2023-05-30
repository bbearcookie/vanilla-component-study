import Component from '../utils/Component.js';
import Post from '../components/Post.js';
import { navigate } from '../utils/history.js';

export default class PostPage extends Component {
  constructor(...args) {
    super(...args, { skipRender: true });
    this.Post = null;
    this._postId = parseInt(location.pathname.replace('/post/', '')) || 1;
    this.render();
  }

  get postId() {
    return this._postId;
  }

  set postId(value) {
    this._postId = value;
    navigate(this.postId);
  }

  initNodes() {
    this.$wrapper = document.createElement('main');
    this.Post = new Post(this.$wrapper);

    this.$prevButton = document.createElement('button');
    this.$prevButton.addEventListener('click', () => this.postId--);

    this.$nextButton = document.createElement('button');
    this.$nextButton.addEventListener('click', () => this.postId++);

    this.$wrapper.append(this.$prevButton, this.$nextButton);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$prevButton, { type: 'innerText', value: '이전 포스트' });
    this.template.set(this.$nextButton, { type: 'innerText', value: '다음 포스트' });
    console.log(this.postId);

    super.render();
  }

  clearNodes() {
    if (this.Post) this.Post.clearNodes();
    super.clearNodes();
  }
}
