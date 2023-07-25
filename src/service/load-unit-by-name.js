import { left, right } from "../util/either.js";

export default class LoadUnitByName {
    constructor({ repository }) {
        this.repository = repository;
    }

    async execute(name) {
        const unit = await this.repository.loadByName(name);
        if (!unit) return left({ type: "BAD_REQUEST", message: "Unit not found" });
        return right({
            code: unit.code,
            name: unit.name,
            code_secretary: unit.code_secretary
        });
    }
}