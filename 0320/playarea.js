export class PlayArea {
    #div;
    #manager;

    constructor(manager) {
        this.#manager = manager;
        this.#div = document.createElement('div');
    }

    get manager() {
        return this.#div;
    }

    get div() {
        return this.#div;
    }

    replaceContent(parent) {
        parent.innerHTML = '';
        parent.appendChild(this.#div);
    }
}