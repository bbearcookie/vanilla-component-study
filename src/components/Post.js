import Component from '../utils/Component.js';

export default class Post extends Component {
  constructor({ $target, postId }) {
    super($target, { skip: true });
    this._postId = postId;
    this._userId = 0;
    this._title = `제목`;
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
    this.template.set(this.$title, { type: 'innerText', value: `제목: ${this.title} (${this.postId})` });
    this.template.set(this.$author, { type: 'innerText', value: `작성자 ID: ${this.userId}` });
    this.template.set(this.$content, { type: 'innerText', value: `${this.body}` });

    console.log('render');
    super.render();
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
    const data = await response.json();

    if (Object.keys(data).length === 0) {
      this.userId = 0;
      this.title = `NOT FOUND`;
      this.body = `존재하지 않는 게시글이에요.`;

      return;
    }

    this.setPost({
      postId: data.id,
      userId: data.userId,
      title: data.title,
      body: data.body
    });

  }
}
