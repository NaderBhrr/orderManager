interface Order extends Base {
	tableID: ObjectId;
	//servedAt: string => why?
	noOfCustomers: number;
	rating: Rating;
	paymentStatus: PaymentStatus;
	orderStatus: OrderStatus;
}

enum PaymentStatus {
	Paid = 'PAID',
	NotPaid = 'NOTPAID',
}

enum OrderStatus {
	InPreparation = 'INPREPARATION',
	Delivered = 'DELIVERED',
	Canceled = 'CANCELED',
}
