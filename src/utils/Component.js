export default class Component {
  /**
   * @param {Element} $target
   * @param {object} options skip 멤버를 등록하면 Component 생성자에서의 startComponent() 가 동작하지 않고 넘어갑니다.
   */
  constructor($target, options) {
    this.$target = $target;
    this.$wrapper = null;
    this.template = new Map();
    if (!options?.skip) this.startComponent();
  }

  /**
   * 컴포넌트에 필요한 DOM 요소를 생성하고, 화면에 업데이트하고, 마무리 작업을 수행하는 로직을 순차적으로 실행합니다.  
   * initNodes() => render() => componentDidMount()
   */
  startComponent() {
    this.initNodes();
    this.render();
    this.componentDidMount();
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
    if (this.$wrapper) this.$wrapper.remove();

    for (let entry of this.template.entries()) {
      const [$element] = entry;
      if (!($element instanceof Element)) continue;
      $element.remove();
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
      if (!($element instanceof Element)) continue;
      if (content === null) continue;
      const { type, value } = content;

      switch (type) {
        case 'textContent':
          if ($element.textContent !== value) $element.textContent = value;
          break;
        default:
          if ($element.getAttribute(type) !== value) $element.setAttribute(type, value);
          break;
      }
    }
  }

  /**
   * 화면이 전부 그려진 이후에 수행해야 하는 로직을 작성합니다.
   * fetch 와 같이 시간이 걸리는 비동기 작업을 수행하는데 유용합니다.
   */
  componentDidMount() {}
}
