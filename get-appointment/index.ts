import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { GetAppointments } from '../src/handlers/appointments';

const GetAppointment: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { id } = req.params
    try {
        const appointments = await GetAppointments(id)
        context.res = {
            status: 200,
            body: appointments
        };
    } catch (error) {
        context.res = {
            body: JSON.stringify(error, null, 2)
        };
    }
};

export default GetAppointment;
