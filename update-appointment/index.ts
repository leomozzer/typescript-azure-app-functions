import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UpdateAppointment, GetAppointments } from "../src/handlers/appointments";

const UpdateAppointmentsController: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { name, starstAt, endsAt, id } = req.body;
    try {
        const appointment = await GetAppointments(id);
        await UpdateAppointment(name, starstAt, endsAt, id)
        context.res = {
            status: 200, /* Defaults to 200 */
            body: `Appointment id: ${appointment.id} updated`
        };
    }
    catch (error) {
        context.res = {
            body: JSON.stringify(error, null, 2)
        };
    }

};

export default UpdateAppointmentsController;