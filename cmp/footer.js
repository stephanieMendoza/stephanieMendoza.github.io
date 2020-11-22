class PiePagina extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
            Stephanie 
        </footer>
        `
    }
}
window.customElements.define('pie-pagina', PiePagina);