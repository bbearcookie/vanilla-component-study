export default class Component {
  /**
   * @param {Element} $target
   */
  constructor($target) {
    this.$target = $target;
    this.template = new Map();
    this.initNodes();
    this.render();
  }

  /**
   * 컴포넌트 내에서 사용될 DOM 요소를 생성하고 초기화합니다.
   */
  initNodes() {}

  /**
   * 컴포넌트 내의 DOM 요소의 값 업데이트하거나, 새로운 DOM 요소를 추가하는 로직을 작성합니다.
   *
   * this.template 에 저장된 DOM 요소와 내용 중에서,
   * 변화가 발생한 요소만 업데이트하는 로직이 기본적으로 담겨있으니
   * 마지막에 super.render() 를 호출해야 합니다.
   */
  render() {
    for (let entry of this.template.entries()) {
      const [$element, content] = entry;
      const { type, value } = content;

      switch (type) {
        case 'innerText':
          if ($element.innerText !== value) $element.innerText = value;
          break;
        default:
          if ($element.getAttribute(type) !== value) $element.setAttribute(type, value);
          break;
      }
    }
  }
}
