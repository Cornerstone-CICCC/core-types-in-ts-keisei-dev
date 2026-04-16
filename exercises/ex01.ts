interface ReservationEx1 {
  customerInformation: string;
  paymentInformation: string;
  checkIn: Date;
  checkOut: Date;
}

const reservation: ReservationEx1 = {
  customerInformation: "Keisei Kondo",
  paymentInformation: "Credit Card",
  checkIn: new Date("2026-04-14"),
  checkOut: new Date("2026-04-16")
};

console.log("Exercise 1 - Reservation:");
console.log(reservation);
