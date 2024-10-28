export interface Reservation {
    id: string,
    checkInDate: Date,
    checkOutDate: Date,
    guestName: string,
    guestEmail: string,
    roomNumber: number,
    createdAt: Date,
    updatedAt: Date
}
