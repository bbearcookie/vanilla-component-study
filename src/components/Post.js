import Component from '../utils/Component.js';

export default class Post extends Component {
  initNodes() {
    this.$wrapper = document.createElement('article');

    this.$title = document.createElement('h3');
    this.$author = document.createElement('p');
    this.$content = document.createElement('p');

    this.$wrapper.append(this.$title, this.$author, this.$content);
    this.$target.append(this.$wrapper);
  }

  render() {
    this.template.set(this.$title, { type: 'innerText', value: '제목 (번호)' });
    this.template.set(this.$author, { type: 'innerText', value: '작성자' });
    this.template.set(this.$content, { type: 'innerText', value: '내용' });

    super.render();
  }
}
