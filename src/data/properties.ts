
import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Family Home",
    description: "This beautiful family home is situated in a quiet suburban neighborhood with easy access to schools, shopping centers, and parks. It features a spacious living room, modern kitchen with high-end appliances, and a large backyard perfect for entertaining guests.",
    price: 25000,
    location: "Nairobi, Westlands",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    features: ["Parking", "Garden", "Security", "Water Tank", "Solar Heating"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-05-15"
  },
  {
    id: "2",
    title: "Modern Studio Apartment",
    description: "A cozy studio apartment in the heart of the city. Perfect for young professionals or students. The apartment comes fully furnished with modern amenities and appliances.",
    price: 12000,
    location: "Nairobi, Kilimani",
    type: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    area: 450,
    features: ["Furnished", "Wi-Fi", "Security", "Elevator", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-06-10"
  },
  {
    id: "3",
    title: "Spacious 2 Bedroom Apartment",
    description: "A well-maintained 2 bedroom apartment in a secure compound. It features a spacious living area, modern kitchen, and a small balcony with a view of the city.",
    price: 18000,
    location: "Nairobi, Kileleshwa",
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 1,
    area: 950,
    features: ["Balcony", "Security", "Parking", "Water Tank"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-04-22"
  },
  {
    id: "4",
    title: "Comfortable Bedsitter",
    description: "A clean and cozy bedsitter in a quiet neighborhood. Ideal for a single person or a couple. The room is spacious and comes with basic furniture.",
    price: 7000,
    location: "Nairobi, South B",
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    area: 350,
    features: ["Furnished", "Security", "Communal Water"],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-07-05"
  },
  {
    id: "5",
    title: "Single Room with Shared Facilities",
    description: "A well-maintained single room in a shared apartment. The room is furnished with a bed, wardrobe, and study desk. Kitchen and bathroom facilities are shared.",
    price: 5000,
    location: "Nairobi, Kahawa",
    type: "Single Room",
    bedrooms: 1,
    bathrooms: 0.5,
    area: 200,
    features: ["Furnished", "Shared Kitchen", "Shared Bathroom", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-07-15"
  },
  {
    id: "6",
    title: "Elegant 3 Bedroom Apartment",
    description: "A luxurious 3 bedroom apartment in a premium residential area. The apartment features high ceilings, large windows, and a spacious balcony with a stunning view.",
    price: 30000,
    location: "Nairobi, Lavington",
    type: "3 Bedroom",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    features: ["Balcony", "Security", "Parking", "Swimming Pool", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-03-30"
  }
];

// Generate 20 more properties for demo purposes
const generateMoreProperties = (): Property[] => {
  const locations = ["Nairobi, Parklands", "Nairobi, Roysambu", "Nairobi, Karen", "Nairobi, Langata", "Nairobi, Embakasi"];
  const types: PropertyType[] = ["House", "Apartment", "Single Room", "Bedsitter", "2 Bedroom", "3 Bedroom", "Studio"];
  const features = [
    "Parking", "Garden", "Security", "Water Tank", "Solar Heating",
    "Furnished", "Wi-Fi", "Elevator", "Gym", "Balcony", 
    "Shared Kitchen", "Shared Bathroom", "Swimming Pool", "CCTV", "Generator"
  ];
  
  const randomImages = [
    "https://images.unsplash.com/photo-1494526585095-c41cabfe98bd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560185008-587a5594385c?auto=format&fit=crop&w=800&q=80"
  ];
  
  const additionalProperties: Property[] = [];
  
  for (let i = 7; i <= 26; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const bedrooms = type === "Studio" ? 0 : 
                    type === "Bedsitter" || type === "Single Room" ? 1 :
                    type === "2 Bedroom" ? 2 : 
                    type === "3 Bedroom" ? 3 : 
                    Math.floor(Math.random() * 4) + 1;
    
    const randomFeatures = [...features].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 3);
    
    // Select 2-4 random images
    const numImages = Math.floor(Math.random() * 3) + 2;
    const propertyImages = [...randomImages].sort(() => 0.5 - Math.random()).slice(0, numImages);
    
    additionalProperties.push({
      id: i.toString(),
      title: `${type} in ${locations[Math.floor(Math.random() * locations.length)]}`,
      description: "This property offers comfortable living with modern amenities in a convenient location. Perfect for professionals or families looking for a place to call home.",
      price: Math.floor(Math.random() * 25000) + 5000,
      location: locations[Math.floor(Math.random() * locations.length)],
      type,
      bedrooms,
      bathrooms: Math.max(1, Math.floor(bedrooms * 0.7)),
      area: type === "Single Room" ? Math.floor(Math.random() * 200) + 150 :
            type === "Bedsitter" ? Math.floor(Math.random() * 300) + 250 :
            type === "Studio" ? Math.floor(Math.random() * 200) + 400 :
            Math.floor(Math.random() * 1000) + 700,
      features: randomFeatures,
      images: propertyImages,
      isFeatured: Math.random() > 0.7,
      isAvailable: Math.random() > 0.2,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0]
    });
  }
  
  return additionalProperties;
};

export const allProperties = [...properties, ...generateMoreProperties()];

// Function to get properties by type
export const getPropertiesByType = (type: PropertyType): Property[] => {
  return allProperties.filter(property => property.type === type);
};

// Function to get featured properties
export const getFeaturedProperties = (): Property[] => {
  return allProperties.filter(property => property.isFeatured);
};

// Function to get property by ID
export const getPropertyById = (id: string): Property | undefined => {
  return allProperties.find(property => property.id === id);
};
