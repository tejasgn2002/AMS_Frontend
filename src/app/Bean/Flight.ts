export class Flight {
    flightID: number;
    carrierID: number;
    origin: string;
    destination: string;
    airFare: number;
    seatCapacityEconomyClass: number;
    seatCapacityBusinessClass: number;
    seatCapacityExecutiveClass: number;
    constructor(
        flightID: number,
        carrierID: number,
        origin: string,
        destination: string,
        airFare: number,
        seatCapacityEconomyClass: number,
        seatCapacityBusinessClass: number,
        seatCapacityExecutiveClass: number
    ) {
        this.flightID = flightID;
        this.carrierID = carrierID;
        this.origin = origin;
        this.destination = destination;
        this.airFare = airFare;
        this.seatCapacityEconomyClass = seatCapacityEconomyClass;
        this.seatCapacityBusinessClass = seatCapacityBusinessClass;
        this.seatCapacityExecutiveClass = seatCapacityExecutiveClass;
    }
}