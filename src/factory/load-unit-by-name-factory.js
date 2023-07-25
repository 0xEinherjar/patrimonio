import Database from "../data/database.js";
import UnitRepository from "../data/repository/unit.js";
import LoadUnitByName from "../service/load-unit-by-name.js";

export const LoadUnitByNameFactory = () => {
    const database = new Database();
    const repository = new UnitRepository(database);
    const service = new LoadUnitByName({ repository });
    return service;
}