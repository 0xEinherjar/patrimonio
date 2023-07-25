import Database from "../data/database.js";
import PropertyRepository from "../data/repository/property.js";
import LoadPropertyByRegistration from "../service/load-property-by-registration.js";

export const LoadPropertyByRegistrationFactory = () => {
    const database = new Database();
    const repository = new PropertyRepository(database);
    const service = new LoadPropertyByRegistration({ repository });
    return service;
}