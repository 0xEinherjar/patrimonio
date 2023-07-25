import { left, right } from "../util/either.js";

export default class LoadPropertyByRegistration {
    constructor({ repository }) {
        this.repository = repository;
    }

    async execute(registration) {
        const property = await this.repository.loadOne({ registration });
        if (!property) return left({ type: "BAD_REQUEST", message: "Property not found" });
        return right({
            id: property.id,
            registration: property.registration,
            description: property.description,
            room: property.room,
            to: property.to
        });
    }
}