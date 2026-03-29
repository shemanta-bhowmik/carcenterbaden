export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  bodyStyle: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  drivetrain: string;
  engineType: string;
  hp: number;
  mileage: number;
  price: number;
  currency: string;
  status: 'available' | 'sold' | 'pending';
  images: string[];
  extColor: string;
  intColor: string;
  stockNumber: string;
  vin: string;
}

export interface FilterState {
  make: string;
  model: string;
  priceRange: [number, number];
  fuelType: string;
  bodyStyle: string;
}
