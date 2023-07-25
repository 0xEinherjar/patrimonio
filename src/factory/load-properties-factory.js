import Database from "../data/database.js";
import PropertyRepository from "../data/repository/property.js";
import LoadProperties from "../service/load-properties.js";

export const LoadPropertiesFactory = () => {
    const database = new Database();
    const repository = new PropertyRepository(database);
    const service = new LoadProperties({ repository });
    return service;
}