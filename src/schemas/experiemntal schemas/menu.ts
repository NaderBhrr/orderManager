interface Base  {
	price: number
	discount?: number
	ingredients: Ingredient[]
	photos: Photo[]
	description: string
}

interface Meal extends Base {
	cookingStyle: CookingStyle
	// popularity: 
	calorie?: number
}

interface Beverage extends Base {
	type: beverageType
	
}

enum beverageType {
	cold = "COLD"
	hot = "HOT"
}

interface Dessert extends Base {
	
}

interface Menu {
	meals: Meal[]
	drinkings: Beverage[]
	desserts: Dessert[]
}