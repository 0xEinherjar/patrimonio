import { left, right } from "../util/either.js";

export default class LoadPropertyByRegistration {
    constructor({ repository }) {
        this.repository = repository;
    }

    async execute(code) {
        const properties = await this.repository.load({ to: code });
        if (!properties) return left({ type: "NO_CONTENT", message: "This unit has no properties" });
        return right(properties.map(property => ({
            id: property.id,
            registration: property.registration,
            description: property.description,
            room: property.room,
            to: property.to
        })));
    }
}