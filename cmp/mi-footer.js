class MiFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /* html */
        `Copyright &copy; 2020 Arroyo Mendoza Stephanie.`;
    }
  }
  customElements.define("mi-footer", MiFooter);