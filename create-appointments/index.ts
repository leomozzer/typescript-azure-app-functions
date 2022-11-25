import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CreateNewAppointment } from "../src/handlers/appointments";


const CreateAppointments: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { name, starstAt, endsAt } = req.body;
    try {
        const appointmentId = await CreateNewAppointment(name, starstAt, endsAt)
        context.res = {
            status: 200, /* Defaults to 200 */
            body: `New appointment created with id: ${appointmentId}`
        };
    }
    catch (error) {
        context.res = {
            body: JSON.stringify(error, null, 2)
        };
    }

};

export default CreateAppointments;