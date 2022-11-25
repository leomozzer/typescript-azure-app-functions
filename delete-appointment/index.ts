import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { DeleteAppointment } from "../src/handlers/appointments";
import { AppointmentContainer } from '../src/utils/cosmos-db';

const DeleteAppointmentController: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { id } = req.params;
    try {
        await DeleteAppointment(id)
        context.res = {
            status: 200,
            body: `Item ${id} was deleted`
        };
    } catch (error) {
        console.log(error)
        context.res = {
            body: JSON.stringify(error, null, 2)
        };
    }

};

export default DeleteAppointmentController;
