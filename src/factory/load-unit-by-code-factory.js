import Database from "../data/database.js";
import UnitRepository from "../data/repository/unit.js";
import LoadUnitByCode from "../service/load-unit-by-code.js";

export const LoadUnitByCodeFactory = () => {
    const database = new Database();
    const repository = new UnitRepository(database);
    const service = new LoadUnitByCode({ repository });
    return service;
}