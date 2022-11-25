import { expect, it } from "vitest";
import { CreateNewAppointment, GetAppointments, UpdateAppointment, DeleteAppointment } from './appointments'

let appointmentsId = [];

it('should create new appointments', async () => {
    const date = new Date();
    const starstAt = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    const endsAt = `${date.getDate()}-${date.getMonth()}-${date.getFullYear() + 1}`
    const firstAppointment = await CreateNewAppointment("John Doe", starstAt, endsAt)
    appointmentsId.push(firstAppointment)
    expect(firstAppointment).toBeTypeOf("string")
})

it('should update appointments', async () => {
    const date = new Date();
    const starstAt = `${date.getDate() - 1}-${date.getMonth()}-${date.getFullYear() + 2}`
    const endsAt = `${date.getDate() + 2}-${date.getMonth()}-${date.getFullYear() + 3}`
    const updateAppointment = await UpdateAppointment("John Doe", starstAt, endsAt, appointmentsId[0])
    expect(updateAppointment['starstAt']).toBe(starstAt)
})

it('should delete appointments', async () => {
    const deleteAppointment = await DeleteAppointment(appointmentsId[0])
    console.log(deleteAppointment)
    expect(deleteAppointment).toBeNull()
})