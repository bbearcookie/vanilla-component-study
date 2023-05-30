import Component from '../utils/Component.js';
import Post from '../components/Post.js';

export default class PostPage extends Component {
  constructor(...args) {
    super(...args);
    this.Post = null;
    this.render();
  }

  initNodes() {
    this.$wrapper = document.createElement('main');
    this.Post = new Post(this.$wrapper);

    this.$prevButton = document.createElement('button');
    this.$nextButton = document.createElement('button');

    this.$wrapper.appendChild(this.$prevButton);
    this.$wrapper.appendChild(this.$nextButton);

    this.$target.appendChild(this.$wrapper);
  }

  render() {
    this.template.set(this.$prevButton, { type: 'innerText', value: '이전 포스트' });
    this.template.set(this.$nextButton, { type: 'innerText', value: '다음 포스트' });

    super.render();
  }

  clearNodes() {
    if (this.Post) this.Post.clearNodes();
    super.clearNodes();
  }
}
