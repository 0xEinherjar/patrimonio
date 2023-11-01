import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongo";

export default class Database {
    static client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });

    async connect() {
        await Database.client.connect();
        await Database.client.db("admin").command({ ping: 1 });
    }

    async find(collection, query) {
        return await Database.client.db("Cluster0").collection(collection).find(query).limit(100).toArray();
    }

    async findOne(collection, query) {
        return await Database.client.db("Cluster0").collection(collection).findOne(query);
    }

    async insertMany(collection, query) {
        return await Database.client.db("Cluster0").collection(collection).insertMany(query);
    }

    async save(collection, params) {
        await Database.client.db("Cluster0").collection(collection).insertOne(params);
    }

    async update(collection, query, params) {
        await Database.client.db("Cluster0").collection(collection).updateOne(query, { $set: params });
    }
}
