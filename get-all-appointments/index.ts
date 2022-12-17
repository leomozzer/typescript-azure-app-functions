import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { GetAppointments } from '../src/handlers/appointments';
const GetAllAppointments: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const appointments = await GetAppointments()
    context.res = {
        status: 200,
        body: appointments
    };

};

export default GetAllAppointments;
