export default class Component {
  /**
   * @param {Element} $target
   */
  constructor($target, options) {
    this.$target = $target;
    this.$wrapper = null;
    this.template = new Map();
    this.initNodes();
    if (!options?.skipRender) this.render();
  }

  /**
   * 컴포넌트 내에서 사용될 DOM 요소를 생성하거나,  
   * HTML 문서에서 가져와서 변수로 초기화하는 로직을 작성합니다.
   */
  initNodes() {}

  /**
   * 컴포넌트 내에 존재하는 DOM 요소를 모두 제거합니다.
   */
  clearNodes() {
    if (this.$wrapper) this.$wrapper.parentNode.removeChild(this.$wrapper);

    for (let entry of this.template.entries()) {
      const [$element, content] = entry;
      $element.parentNode.removeChild($element);
    }
  }

  /**
   * 컴포넌트 내의 DOM 요소의 값을 업데이트하거나,  
   * 새로운 DOM 요소를 추가하는 로직을 작성합니다.
   *
   * this.template 에 저장된 DOM 요소와 내용 중에서,
   * 변화가 발생한 요소만 업데이트하는 로직이 기본적으로 담겨있으니
   * 마지막에 super.render() 를 호출해야 합니다.
   */
  render() {
    for (let entry of this.template.entries()) {
      const [$element, content] = entry;
      if (content === null) continue;
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
