export default class Secretary {
    #code; 
    #name;

    constructor({ code, name }) {
        this.#code = code;
        this.#name = name;
    }

    get code() {
        return this.#code;
    }

    get name() {
        return this.#name;
    }
}