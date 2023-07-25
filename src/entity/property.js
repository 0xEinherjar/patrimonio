export default class Property {
    #id;
    #registration;
    #description;
    #room;
    #to;

    constructor({ id, registration, description, room, to }) {
        this.#id = id;
        this.#registration = registration;
        this.#description = description;
        this.#room = room;
        this.#to = to;
    }

    get id() {
        return this.#id;
    }

    get registration() {
        return this.#registration;
    }

    get description() {
        return this.#description;
    }

    get room() {
        return this.#room;
    }

    get to() {
        return this.#to;
    }

    set registration(registration) {
        this.#registration = registration;
    }

    set description(description) {
        this.#description = description;
    }

    set room(room) {
        this.#room = room;
    }

    set to(to) {
        this.#to = to;
    }
}