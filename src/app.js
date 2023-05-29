import Counter from './components/Counter.js';
import Component from './utils/Component.js';

export default class App extends Component {
  onInitNodes() {
    this.$hello = document.createElement('h1');
    this.$hello.innerText = '어서오십시오';
    this.$target.appendChild(this.$hello);
  }

  render() {
    this.$hello.innerText = '이렇게 텍스트 바꿉니다';
  }
}

new App(document.querySelector('#app'));
new Counter(document.querySelector('#app'));