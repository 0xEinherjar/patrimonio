import { right } from "../util/either.js";

export default class LoadProperties {
    constructor({ repository }) {
        this.repository = repository;
    }

    async execute() {
        const properties = await this.repository.loadAll();
        return right(properties.map(property => ({
            id: property.id,
            registration: property.registration,
            description: property.description,
            room: property.room,
            to: property.to
        })));
    }
}