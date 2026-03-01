export class availableFlight {
    flightId: number;
    origin: string;
    destination: string;
    airFair: number;
    date: string;
    constructor(
        flightId: number,
        origin: string,
        destination: string,
        airFair: number,
        date: string
    ) {
        this.flightId=flightId;
        this.origin = origin;
        this.destination = destination;
        this.airFair = airFair;
        this.date = date;
    }
}