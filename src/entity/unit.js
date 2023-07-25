export default class Unit {
    #code; 
    #name;
    #code_secretary;

    constructor({ code, name, code_secretary }) {
        this.#code = code;
        this.#name = name;
        this.#code_secretary = code_secretary;
    }

    get code() {
        return this.#code;
    }

    get name() {
        return this.#name;
    }

    get code_secretary() {
        return this.#code_secretary;
    }
}