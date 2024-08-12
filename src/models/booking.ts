export type Booking = {
  _id: string;
  goldenView: {
    _id: string;
    name: string;
    slug: { current: string };
    price: number;
  };
  checkinDate: string;
  checkoutDate: string;
  numberOfDays: number;
  totalPrice: number;
  discount: number;
};
