import { left, right } from "../util/either.js";

export default class LoadUnitByCode {
    constructor({ repository }) {
        this.repository = repository;
    }

    async execute(code) {
        const unit = await this.repository.load({ code });
        if (!unit) return left({ type: "BAD_REQUEST", message: "Unit not found" });
        return right({
            code: unit.code,
            name: unit.name,
            code_secretary: unit.code_secretary
        });
    }
}