import Database from "../data/database.js";
import PropertyRepository from "../data/repository/property.js";
import LoadPropertiesByCode from "../service/load-properties-by-code.js";

export const LoadPropertiesByCodeFactory = () => {
    const database = new Database();
    const repository = new PropertyRepository(database);
    const service = new LoadPropertiesByCode({ repository });
    return service;
}