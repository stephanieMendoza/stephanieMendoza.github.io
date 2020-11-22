class PiePagina extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
            Fany M
        </footer>
        `
    }
}
window.customElements.define('pie-pagina', PiePagina);