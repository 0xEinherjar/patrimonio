import Database from "../data/database.js";
import PropertyRepository from "../data/repository/property.js";
import SaveProperty from "../service/save-property.js";

export const SavePropertyFactory = () => {
    const database = new Database();
    const repository = new PropertyRepository(database);
    const service = new SaveProperty({ repository });
    return service;
}