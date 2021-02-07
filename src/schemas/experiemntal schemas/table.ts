interface Table extends Base {
	tableCapacity: number;
	reservations: Reservation[];
	reservable: boolean;
	section?: Section;
	// orderDetails: Order
}

enum Section {
	Family = 'Family',
	Normal = 'Normal',
}
