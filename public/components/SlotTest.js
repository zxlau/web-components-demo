class SlotTest extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        div h2 {
          color: red;
        }
      </style>
      <div>
        <h2>Menus</h2>
        <slot></slot>
      </div>
    `
  }
  connectedCallback() {

  }
}

customElements.define('slot-test', SlotTest);