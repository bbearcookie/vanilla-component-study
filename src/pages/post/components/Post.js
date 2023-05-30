import Component from '../../../utils/Component.js';

export default class Post extends Component {
  constructor({ $target, postId }) {
    super($target, { skip: true });
    this.status = 'loading';
    this.error = '';
    this._postId = postId;
    this._userId = 0;
    this._title = '제목';
    this._body = '내용';
    this.startComponent();
  }

  get postId() {
    return this._postId;
  }

  get userId() {
    return this._userId;
  }

  get title() {
    return this._title;
  }

  get body() {
    return this._body;
  }

  setPost({ postId, userId, title, body }) {
    this._postId = postId;
    this._userId = userId;
    this._title = title;
    this._body = body;
  }

  initNodes() {
    if (this.$loading) this.$loading.remove();
    if (this.$error) this.$error.remove();

    switch (this.status) {
      case 'loading':
        this.$loading = document.createElement('h3');
        this.$loading.textContent = '로딩중...';
        this.$target.append(this.$loading);
        break;
      case 'error':
        this.$error = document.createElement('h3');
        this.$error.textContent = this.error;
        this.$target.append(this.$error);
        break;
      case 'success':
        this.$title = document.createElement('h3');
        this.$author = document.createElement('p');
        this.$content = document.createElement('p');
        this.$target.append(this.$title, this.$author, this.$content);
        break;
      default:
        break;
    }
  }

  render() {
    if (this.status === 'success') {
      this.template.set(this.$title, { type: 'textContent', value: `제목: ${this.title} (${this.postId})` });
      this.template.set(this.$author, { type: 'textContent', value: `작성자 ID: ${this.userId}` });
      this.template.set(this.$content, { type: 'textContent', value: `${this.body}` });

      super.render();
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
      const data = await response.json();

      if (Object.keys(data).length === 0) {
        this.status = 'error';
        this.error = 'NOT FOUND 404 존재하지 않는 게시글이에요.';
        return;
      }

      this.status = 'success';
      this.setPost({
        postId: data.id,
        userId: data.userId,
        title: data.title,
        body: data.body,
      });
    } catch (err) {
      this.status = 'error';
      this.error = err;
    } finally {
      this.initNodes();
      this.render();
    }
  }
}
