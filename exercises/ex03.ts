interface PaymentInformationEx3 {
  isPayed: boolean;
  totalPrice: number;
}

interface ReservationEx3 {
  customerInformation: string;
  paymentInformation: PaymentInformationEx3;
  checkIn: Date;
  checkOut: Date;
  pricePerDay: number;
}

function calculateTotalPrice(checkIn: Date, checkOut: Date, pricePerDay: number): number {
  const oneDayMs = 24 * 60 * 60 * 1000;
  const diffMs = checkOut.getTime() - checkIn.getTime();
  const days = diffMs / oneDayMs;
  return days * pricePerDay;
}

const reservationOne: ReservationEx3 = {
  customerInformation: "Alice",
  paymentInformation: {
    isPayed: true,
    totalPrice: 0
  },
  checkIn: new Date("2026-04-14"),
  checkOut: new Date("2026-04-16"),
  pricePerDay: 120
};

reservationOne.paymentInformation.totalPrice = calculateTotalPrice(
  reservationOne.checkIn,
  reservationOne.checkOut,
  reservationOne.pricePerDay
);

const reservationTwo: ReservationEx3 = {
  customerInformation: "Bob",
  paymentInformation: {
    isPayed: false,
    totalPrice: 0
  },
  checkIn: new Date("2026-04-20"),
  checkOut: new Date("2026-04-23"),
  pricePerDay: 150
};

reservationTwo.paymentInformation.totalPrice = calculateTotalPrice(
  reservationTwo.checkIn,
  reservationTwo.checkOut,
  reservationTwo.pricePerDay
);

const reservations: ReservationEx3[] = [reservationOne];
reservations.push(reservationTwo);

console.log("Exercise 3 - Reservations:");
for (const currentReservation of reservations) {
  console.log(`Customer: ${currentReservation.customerInformation}`);
  console.log(`Total Price: ${currentReservation.paymentInformation.totalPrice}`);
  console.log(`Is Payed: ${currentReservation.paymentInformation.isPayed}`);
  console.log("---");
}
