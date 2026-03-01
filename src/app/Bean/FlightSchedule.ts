export class FlightSchedule {
    flightScheduleID: number;
    flightID: number;
    dateOfTravel: string;
    businessClassBookedCount: number;
    economyClassBookedCount: number;
    executiveClassBookedCount: number;
    constructor(
        flightScheduleID: number,
        flightID: number,
        dateOfTravel: string,
        businessClassBookedCount: number,
        economyClassBookedCount: number,
        executiveClassBookedCount: number
    ) {
        this.flightScheduleID = flightScheduleID;
        this.flightID = flightID;
        this.dateOfTravel = dateOfTravel;
        this.businessClassBookedCount = businessClassBookedCount;
        this.economyClassBookedCount =economyClassBookedCount;
        this.executiveClassBookedCount = executiveClassBookedCount;
    }
}