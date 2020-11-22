class PiePagina extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
         Copyright &copy; 2020 Arroyo Mendoza Stephanie.
        </footer>
        `
    }
}
window.customElements.define('pie-pagina', PiePagina);