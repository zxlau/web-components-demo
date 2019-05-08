class ImgLink extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let src = this.getAttribute('src');
    let height = this.getAttribute('height') || '100';
    let width = this.getAttribute('width') || '100';
    // Create a shadow root
    let shadow = this.attachShadow({mode: 'open'});
    // create img
    let img = document.createElement('img');
    img.src = src;
    img.width = width; 
    img.height = height; 
    shadow.appendChild(img)
    // create a
    let link = document.createElement('a');
    link.href = this.getAttribute('url');
    link.innerText = this.getAttribute('name')
    shadow.appendChild(link)
  }
}

customElements.define('img-link', ImgLink);