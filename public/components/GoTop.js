class GoTop extends HTMLElement {
  constructor() {
    super();
    this.addClick()
  }
  addClick() {
    this.addEventListener('click',function(e) {
      console.log(999);
      (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
             window.requestAnimationFrame(smoothscroll);
             window.scrollTo (0,currentScroll - (currentScroll/5));
        }
      })();
    })
  }
  connectedCallback() {
    // 首次被插入文档DOM时，被调用
    console.log(88888)
    console.log(this.getAttribute('data-name'))
  }
  disconnectedCallback() {
    // 文档DOM中删除时，被调用
  }
  adoptedCallback() {
    // 被移动到新的文档时，被调用
  }
  attributesChangedCallback() {
    // 元素的属性被增删改时执行
  }
}
console.log(HTMLElement.prototype)
customElements.define('go-top', GoTop);