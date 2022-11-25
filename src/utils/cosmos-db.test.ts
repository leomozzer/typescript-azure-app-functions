import { expect, it } from "vitest";
import * as dotenv from 'dotenv'
import { CosmosClient } from "@azure/cosmos";

dotenv.config();
const endpoint = `https://${process.env.COSMOSDB_NAME}.documents.azure.com`;
const key = process.env.COSMOSDB_KEY;
const cosmosClient = new CosmosClient({ endpoint, key })

it('should appointments database exists', async () => {
    const { database } = await cosmosClient.databases.createIfNotExists({ id: "appointments" })
    expect(database.id).toEqual("appointments")
    it('should items container exists', async () => {
        const { container } = await database.containers.createIfNotExists({ id: "items" });
        expect(container.id).toEqual("items")
    })
})