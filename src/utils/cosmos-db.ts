import * as dotenv from 'dotenv'
import { CosmosClient } from "@azure/cosmos"

dotenv.config();
const endpoint = `https://${process.env.COSMOSDB_NAME}.documents.azure.com`;
const key = process.env.COSMOSDB_KEY;
const cosmosClient = new CosmosClient({ endpoint, key });

//Existing databases
const AppointmentsDatabase = cosmosClient.databases.client.database("appointments")
const AppointmentContainer = AppointmentsDatabase.container("items")

export { AppointmentsDatabase }
export { AppointmentContainer }