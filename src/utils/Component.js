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
   * 
   * this.template 에 저장된 DOM 요소와 내용 중에서,
   * 변화가 발생한 요소만 업데이트하는 로직이 기본적으로 담겨있으니
   * 마지막에 super.render() 를 호출해야 합니다.
   */
  render() {
    for (let entry of this.template.entries()) {
      const [$element, text] = entry;
      if ($element.innerText !== text) {
        $element.innerText = text;
      }
    }
  }
}
