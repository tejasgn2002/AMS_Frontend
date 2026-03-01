export class FlightBooking {
    bookingID: number;
    flightID: number;
    userID: number;
    noOfSeats: number;
    seatCategory: string;
    dateOfTravel: string;
    bookingStatus: string;
    bookingAmount: number;
    constructor(
        bookingID: number,
        flightID: number,
        userID: number,
        noOfSeats: number,
        seatCategory: string,
        dateOfTravel: string,
        bookingStatus: string,
        bookingAmount: number
    ) {
        this.bookingID = bookingID;
        this.flightID = flightID;
        this.userID = userID;
        this.noOfSeats = noOfSeats;
        this.seatCategory = seatCategory,
        this.dateOfTravel = dateOfTravel,
        this.bookingStatus = bookingStatus,
        this.bookingAmount = bookingAmount
    }
}