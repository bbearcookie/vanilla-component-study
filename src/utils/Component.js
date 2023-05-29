export default class Component {
  constructor($target) {
    this.$target = $target;
    this.template = new Map();
    this.onInitState();
    this.onInitNodes();
    this.render();
  }

  /**
   * 컴포넌트 내에서 사용될 상태 변수를 정의하고 초기화합니다.
   */
  onInitState() {}

  /**
   * 컴포넌트 내에서 사용될 DOM 요소를 생성하고 초기화합니다.
   */
  onInitNodes() {}

  /**
   * 컴포넌트 내의 DOM 요소의 값 업데이트하거나, 새로운 DOM 요소를 추가하는 로직을 작성합니다.
   * @param {Element[]} elements
   */
  render(elements) {
    for (let element of elements) {
      if (element.innerText !== this.template.get(element)) {
        element.innerText = this.template.get(element);
      }
    }
  }
}