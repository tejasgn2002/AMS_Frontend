export class Carrier {
    carrierId: number;
    carrierName: string;
    discountPercentageThirtyDaysAdvanceBooking: number;
    discountPercentageSixtyDaysAdvanceBooking: number;
    discountPercentageNinteyDaysAdvanceBooking: number;
    bulkBookingDiscount: number;
    refundPercentageForTicketCancellation2DaysBeforeTravelDate: number;
    refundPercentageForTicketCancellation10DaysBeforeTravelDate: number;
    refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate: number;
    silverUserDiscount: number;
    goldUserDiscount: number;
    platinumUserDiscount: number;

    constructor(carrierId: number,
        carrierName: string,
        discountPercentageThirtyDaysAdvanceBooking: number,
        discountPercentageSixtyDaysAdvanceBooking: number,
        discountPercentageNinteyDaysAdvanceBooking: number,
        bulkBookingDiscount: number,
        refundPercentageForTicketCancellation2DaysBeforeTravelDate: number,
        refundPercentageForTicketCancellation10DaysBeforeTravelDate: number,
        refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate: number,
        silverUserDiscount: number,
        goldUserDiscount: number,
        platinumUserDiscount: number
    ) {
        this.carrierId = carrierId;
        this.carrierName = carrierName;
        this.discountPercentageThirtyDaysAdvanceBooking = discountPercentageThirtyDaysAdvanceBooking;
        this.discountPercentageSixtyDaysAdvanceBooking = discountPercentageSixtyDaysAdvanceBooking;
        this.discountPercentageNinteyDaysAdvanceBooking = discountPercentageNinteyDaysAdvanceBooking;
        this.bulkBookingDiscount = bulkBookingDiscount;
        this.refundPercentageForTicketCancellation2DaysBeforeTravelDate = refundPercentageForTicketCancellation2DaysBeforeTravelDate;
        this.refundPercentageForTicketCancellation10DaysBeforeTravelDate = refundPercentageForTicketCancellation10DaysBeforeTravelDate;
        this.refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate = refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate;
        this.silverUserDiscount = silverUserDiscount;
        this.goldUserDiscount = goldUserDiscount;
        this.platinumUserDiscount = platinumUserDiscount;
    }

}