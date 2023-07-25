import Unit from "../../entity/unit.js";

export default class UnitRepository {
    #database;

    constructor(database) {
        this.#database = database;
    }

    async load(params) {
        const unit = await this.#database.findOne("unit", params);
        if (!unit) return null;
        return new Unit({
            code: unit.code,
            name: unit.name,
            code_secretary: unit.code_secretary
        });
    }

    async loadByName(params) {
        const unit = await this.#database.findOne("unit", { name: { "$regex": new RegExp(params), $options: "i" }});
        if (!unit) return null;
        return new Unit({
            code: unit.code,
            name: unit.name,
            code_secretary: unit.code_secretary
        });
    }
}