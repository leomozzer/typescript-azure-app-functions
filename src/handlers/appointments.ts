import { AppointmentContainer } from '../utils/cosmos-db'
import { v4 as uuidv4 } from 'uuid';

export async function GetAppointments(id?: string) {
    try {
        if (id) {
            const { resource } = await AppointmentContainer.item(id, id).read()
            return resource
        }
        const { resources } = await AppointmentContainer.items
            .query("SELECT * from c")
            .fetchAll()

        return resources
    }
    catch (error) {
        return error
    }
}

export async function CreateNewAppointment(name: string, starstAt: string, endsAt: string) {
    try {
        const newAppointment = {
            name,
            starstAt,
            endsAt,
            "id": uuidv4()
        }
        const { resource } = await AppointmentContainer.items.create(newAppointment)
        return resource.id
    }
    catch (error) {
        return error
    }
}

export async function DeleteAppointment(id: string) {
    try {
        const { resource } = await AppointmentContainer.item(id, id).delete();
        return resource
    }
    catch (error) {
        return error
    }
}

export async function UpdateAppointment(name: string, starstAt: string, endsAt: string, id: string) {
    try {
        const { resource } = await AppointmentContainer.item(id, id).replace({
            id,
            starstAt,
            endsAt,
            name
        })
        return resource
    }
    catch (error) {
        return error
    }
}
