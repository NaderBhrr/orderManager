interface foodCenter {
    _id: 
    name: string
    owner: Owner
    address: Address
    phone: number
    certificate: Certificate
    activeHours: {open: string; close: string}
    reservationOption: boolean
    servingStyle: ServeStyle
    }
    
    interface Owner {
        name: string
        gander: Gender
        phone: number
    }
    
    interface Address {
        city: string
        mainStreet: string
        houseNumber: number
        postalCode: number
    }
    
    enum Gender {
        Male = "Male",
        Female = "Female"
    }
    
    enum ServeStyle {
        Traditional = "Traditional",
        Modern = "Modern",
    }	
    
    interface Certificate {
        issuedAt: string
        expiryDate: string
        issuedBy: string
    }
    
    