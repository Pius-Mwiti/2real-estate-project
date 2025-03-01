
export type PropertyType = 
  | "House" 
  | "Apartment" 
  | "Single Room" 
  | "Bedsitter" 
  | "2 Bedroom" 
  | "3 Bedroom"
  | "Studio";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet
  features: string[];
  images: string[];
  isFeatured: boolean;
  isAvailable: boolean;
  createdAt: string;
}
