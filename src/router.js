import { Router } from "express";
import { LoadUnitByCodeFactory } from "./factory/load-unit-by-code-factory.js";
import { LoadUnitByNameFactory } from "./factory/load-unit-by-name-factory.js";
import { SavePropertyFactory } from "./factory/save-property-factory.js";
import { LoadPropertyByRegistrationFactory } from "./factory/load-property-by-registration-factory.js";
import { LoadPropertiesFactory } from "./factory/load-properties-factory.js";
import { LoadPropertiesByCodeFactory } from "./factory/load-properties-by-code-factory.js";

const router = Router();

router.get('/unit', async (request, response) => {
    const { field, search } = request.query;
    let result;
    if (field === "code") result = await LoadUnitByCodeFactory().execute(search);
    if (field === "name") result = await LoadUnitByNameFactory().execute(search);
    if (result.isRight()) return response.status(200).json(result.value);
    if (result.value.type === "BAD_REQUEST") return response.status(400).end(result.value.message);
});

router.put('/property', async (request, response) => {
    const { registration, room, to } = request.body;
    const result = await SavePropertyFactory().execute({ registration, room, to });
    if (result.isRight()) return response.status(200).json(result.value);
    if (result.value.type === "BAD_REQUEST") return response.status(400).end(result.value.message);
    if (result.value.type === "CONFLICT") return response.status(409).end(result.value.message);
});

router.get('/property', async (request, response) => {
    let result;
    if (Reflect.has(request.query, "registration")) {
        result = await LoadPropertyByRegistrationFactory().execute(request.query.registration);
    } else {
        result = await LoadPropertiesFactory().execute();
    }
    if (result.isRight()) return response.status(200).json(result.value);
    if (result.value.type === "BAD_REQUEST") return response.status(400).end(result.value.message);
});

router.get('/properties', async (request, response) => {
    if (!Reflect.has(request.query, "code")) return response.status(400).end();
    const result = await LoadPropertiesByCodeFactory().execute(request.query.code);
    if (result.isRight()) return response.status(200).json(result.value);
    if (result.value.type === "NO_CONTENT") return response.status(209).end(result.value.message);
});


export default router;