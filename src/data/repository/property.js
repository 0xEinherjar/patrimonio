import Property from "../../entity/property.js";

export default class PropertyRepository {
    #database;

    constructor(database) {
        this.#database = database;
    }

    async loadAll() {
        return (await this.#database.find("property", {})).map(item => new Property({
            id: item._id,
            registration: item.registration,
            description: item.description,
            room: item.room,
            to: item.to
        }));
    }

    async load(params) {
        const properties = await this.#database.find("property", params);
        if (!properties.length) return null;
        return properties.map(item => new Property({
            id: item._id,
            registration: item.registration,
            description: item.description,
            room: item.room,
            to: item.to
        }));
    }

    async loadOne(params) {
        const property = await this.#database.findOne("property", params);
        if (!property) return null;
        return new Property({
            id: property._id,
            registration: property.registration,
            description: property.description,
            room: property.room,
            to: property.to
        });
    }

    async update(property) {
        await this.#database.update(
            "property",
            {
                registration: property.registration
            },
            {
                to: property.to,
                room: property.room
            }
        );
    }
}