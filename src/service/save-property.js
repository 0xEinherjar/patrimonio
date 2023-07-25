import { left, right } from "../util/either.js";

export default class SaveProperty {
    constructor({ repository }) {
        this.repository = repository;
    }

    async execute({ registration, room, to }) {
        const property = await this.repository.loadOne({ registration });
        if (!property) return left({ type: "BAD_REQUEST", message: "Property not found" });
        if (Boolean(property.to)) return left({ type: "CONFLICT", message: property.to });
        property.to = to;
        property.room = room;
        await this.repository.update(property);
        return right({
            id: property.id,
            registration: property.registration,
            description: property.description,
            room: property.room,
            to: property.to
        });
    }
}