import { Property, PropertyType } from "@/types/property";

// Define the allowed locations
const allowedLocations = ["Upper Hill", "Westlands", "Kilimani", "South B", "South C"];

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
      "/lovable-uploads/3d311218-a48e-42f6-89b1-2a196f883af6.png",
      "/lovable-uploads/d940c907-a13d-4729-ab95-ca18f5d9ab73.png",
      "/lovable-uploads/5c38c7c8-192a-44cf-ac0a-12391a70bc8d.png"
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
    location: "Nairobi, South B",
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 1,
    area: 950,
    features: ["Balcony", "Security", "Parking", "Water Tank"],
    images: [
      "/lovable-uploads/f81492a5-ccbb-4265-9418-4b2d85c015de.png",
      "/lovable-uploads/bf4f28ac-adee-4ca5-b35d-becc8d61be68.png",
      "/lovable-uploads/ae421ae3-f680-48e1-b682-f644d3e63188.png"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-04-22"
  },
  {
    id: "4",
    title: "Comfortable Bedsitter",
    description: "A clean and cozy bedsitter in a quiet neighborhood. Ideal for a single person or a couple. The room is spacious and comes with basic furniture.",
    price: 9000,
    location: "Nairobi, South C",
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    area: 350,
    features: ["Furnished", "Security", "Communal Water"],
    images: [
      "/lovable-uploads/fb5ff5dd-7611-488f-a672-f144d3bb7133.png",
      "/lovable-uploads/f150e2e0-9fc3-468f-b60a-d1928e089946.png",
      "/lovable-uploads/6261cce4-353d-44c7-8e49-0c5c090066b9.png"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-07-05"
  },
  {
    id: "5",
    title: "Single Room with Shared Facilities",
    description: "A well-maintained single room in a shared apartment. The room is furnished with a bed, wardrobe, and study desk. Kitchen and bathroom facilities are shared.",
    price: 8000,
    location: "Nairobi, South B",
    type: "Single Room",
    bedrooms: 1,
    bathrooms: 0.5,
    area: 200,
    features: ["Furnished", "Shared Kitchen", "Shared Bathroom", "Wi-Fi"],
    images: [
      "/lovable-uploads/36873cc5-3c00-4bf7-b302-38d4742f16dd.png",
      "/lovable-uploads/c68bc514-46be-4eee-9e9d-5b92eaefc2e4.png",
      "/lovable-uploads/597b4f5b-bfa9-4422-96f7-96c462195e8f.png"
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
    location: "Nairobi, Kilimani",
    type: "3 Bedroom",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    features: ["Balcony", "Security", "Parking", "Swimming Pool", "Gym"],
    images: [
      "/lovable-uploads/6311e047-b4db-41a3-9d00-28389144a1d7.png",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-03-30"
  },
  {
    id: "7",
    title: "Modern High-Rise Apartment",
    description: "Contemporary apartment in a high-rise building with breathtaking city views. Features modern finishes, open floor plan, and access to building amenities.",
    price: 22000,
    location: "Nairobi, Upper Hill",
    type: "2 Bedroom",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    features: ["Elevator", "Security", "Parking", "Fitness Center", "Rooftop Lounge"],
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-08-12"
  },
  {
    id: "8",
    title: "Stylish Studio with City View",
    description: "A beautifully designed studio apartment with floor-to-ceiling windows offering stunning views of the city skyline. Includes modern furnishings and appliances.",
    price: 15000,
    location: "Nairobi, Westlands",
    type: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    features: ["City View", "Furnished", "Security", "Laundry", "Internet"],
    images: [
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e2f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-09-05"
  },
  {
    id: "9",
    title: "Affordable Bedsitter Near Campus",
    description: "Clean and affordable bedsitter located within walking distance to major universities. Perfect for students looking for convenience and value.",
    price: 6500,
    location: "Nairobi, Parklands",
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    area: 300,
    features: ["Student-Friendly", "Water", "Security", "Shopping Nearby"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596113168883-7ea2f7b79168?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-08-30"
  },
  {
    id: "10",
    title: "Executive 1 Bedroom Apartment",
    description: "Upscale 1 bedroom apartment in a prime location. Features high-quality finishes, built-in wardrobes, and a modern kitchen with stainless steel appliances.",
    price: 17000,
    location: "Nairobi, Kilimani",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 700,
    features: ["Balcony", "Security", "Parking", "Gym Access", "Backup Generator"],
    images: [
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1623050804066-42bcedb4e81d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-07-22"
  },
  {
    id: "11",
    title: "Cozy Single Room in Shared House",
    description: "Comfortable single room in a well-maintained shared house. Includes access to common areas including kitchen, living room, and garden.",
    price: 4500,
    location: "Nairobi, Ngara",
    type: "Single Room",
    bedrooms: 1,
    bathrooms: 0.5,
    area: 180,
    features: ["Shared Kitchen", "Garden Access", "Security", "Bills Included"],
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585128992695-990097a8dc2d?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-09-10"
  },
  {
    id: "12",
    title: "Spacious Family House",
    description: "Large family home with a beautiful garden in a quiet residential area. Features multiple living spaces, a modern kitchen, and outdoor entertainment area.",
    price: 35000,
    location: "Nairobi, Karen",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    features: ["Garden", "Parking", "Security", "Servant Quarter", "Solar Water Heating"],
    images: [
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-06-15"
  },
  {
    id: "13",
    title: "Urban Loft Apartment",
    description: "Modern loft-style apartment with industrial finishes, high ceilings, and an open floor plan. Located in a trendy neighborhood with restaurants and shops nearby.",
    price: 20000,
    location: "Nairobi, Westlands",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    features: ["Open Floor Plan", "High Ceilings", "Security", "Parking", "Fiber Internet"],
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-08-05"
  }
];

const newApartmentProperties: Property[] = [
  {
    id: "14",
    title: "Modern One Bedroom Unit",
    description: "This cozy one-bedroom apartment features a modern kitchen setup and bright living space. Perfect for singles or couples looking for affordable housing in a convenient location.",
    price: 15000,
    location: "Nairobi, South C",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    features: ["Modern Kitchen", "Bright Interior", "Security", "Water Supply"],
    images: [
      "/lovable-uploads/d940c907-a13d-4729-ab95-ca18f5d9ab73.png",
      "/lovable-uploads/3d311218-a48e-42f6-89b1-2a196f883af6.png",
      "/lovable-uploads/5c38c7c8-192a-44cf-ac0a-12391a70bc8d.png"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-09-15"
  },
  {
    id: "15",
    title: "Bright Studio with Large Windows",
    description: "A spacious studio apartment with wooden flooring and large windows allowing plenty of natural light. Features a compact kitchen area and modern finishes.",
    price: 12500,
    location: "Nairobi, Westlands",
    type: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    area: 400,
    features: ["Wooden Floors", "Natural Light", "Modern Finishes"],
    images: [
      "/lovable-uploads/f81492a5-ccbb-4265-9418-4b2d85c015de.png",
      "/lovable-uploads/bf4f28ac-adee-4ca5-b35d-becc8d61be68.png",
      "/lovable-uploads/ae421ae3-f680-48e1-b682-f644d3e63188.png"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-10-05"
  },
  {
    id: "16",
    title: "Affordable Bedsitter Unit",
    description: "Compact and affordable bedsitter with basic amenities. Includes a kitchenette and private bathroom. Ideal for students or young professionals.",
    price: 8500,
    location: "Nairobi, South B",
    type: "Bedsitter",
    bedrooms: 1,
    bathrooms: 1,
    area: 300,
    features: ["Kitchenette", "Private Bathroom", "Security"],
    images: [
      "/lovable-uploads/fb5ff5dd-7611-488f-a672-f144d3bb7133.png",
      "/lovable-uploads/f150e2e0-9fc3-468f-b60a-d1928e089946.png",
      "/lovable-uploads/6261cce4-353d-44c7-8e49-0c5c090066b9.png"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-08-20"
  },
  {
    id: "17",
    title: "Premium Apartment Complex",
    description: "Luxury apartment in a modern high-rise building with premium amenities including a fitness center, rooftop lounge, and 24-hour security.",
    price: 35000,
    location: "Nairobi, Upper Hill",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    features: ["Fitness Center", "Rooftop Lounge", "24-Hour Security", "Parking"],
    images: [
      "/lovable-uploads/c68bc514-46be-4eee-9e9d-5b92eaefc2e4.png",
      "/lovable-uploads/6311e047-b4db-41a3-9d00-28389144a1d7.png",
      "/lovable-uploads/36873cc5-3c00-4bf7-b302-38d4742f16dd.png"
    ],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2023-07-10"
  },
  {
    id: "18",
    title: "Contemporary Apartment Building",
    description: "Modern apartment complex with stylish exterior design and landscaped grounds. Units feature contemporary finishes and open floor plans.",
    price: 28000,
    location: "Nairobi, Kilimani",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    features: ["Contemporary Design", "Open Floor Plan", "Landscaped Grounds", "Secure Parking"],
    images: [
      "/lovable-uploads/597b4f5b-bfa9-4422-96f7-96c462195e8f.png",
      "/lovable-uploads/c68bc514-46be-4eee-9e9d-5b92eaefc2e4.png",
      "/lovable-uploads/6311e047-b4db-41a3-9d00-28389144a1d7.png"
    ],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2023-11-15"
  }
];

const generateMoreProperties = (): Property[] => {
  // Only use allowed locations
  const locations = ["Nairobi, Upper Hill", "Nairobi, Westlands", "Nairobi, Kilimani", "Nairobi, South B", "Nairobi, South C"];
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
  
  for (let i = 27; i <= 36; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const bedrooms = type === "Studio" ? 0 : 
                    type === "Bedsitter" || type === "Single Room" ? 1 :
                    type === "2 Bedroom" ? 2 : 
                    type === "3 Bedroom" ? 3 : 
                    Math.floor(Math.random() * 4) + 1;
    
    const randomFeatures = [...features].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 3);
    
    // Set appropriate price based on property type
    let price = 0;
    if (type === "Bedsitter" || type === "Single Room") {
      price = Math.floor(Math.random() * 2000) + 8000; // 8000-10000
    } else if (type === "Studio" || bedrooms === 1) {
      price = Math.floor(Math.random() * 5000) + 15000; // 15000-20000
    } else if (bedrooms === 2) {
      price = Math.floor(Math.random() * 5000) + 20000; // 20000-25000
    } else {
      price = Math.floor(Math.random() * 10000) + 25000; // 25000-35000
    }
    
    additionalProperties.push({
      id: i.toString(),
      title: `${type} in ${locations[Math.floor(Math.random() * locations.length)]}`,
      description: "This property offers comfortable living with modern amenities in a convenient location. Perfect for professionals or families looking for a place to call home.",
      price,
      location: locations[Math.floor(Math.random() * locations.length)],
      type,
      bedrooms,
      bathrooms: Math.max(1, Math.floor(bedrooms * 0.7)),
      area: type === "Single Room" ? Math.floor(Math.random() * 200) + 150 :
            type === "Bedsitter" ? Math.floor(Math.random() * 300) + 250 :
            type === "Studio" ? Math.floor(Math.random() * 200) + 400 :
            Math.floor(Math.random() * 1000) + 700,
      features: randomFeatures,
      images: [...randomImages].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 2),
      isFeatured: Math.random() > 0.7,
      isAvailable: Math.random() > 0.2,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0]
    });
  }
  
  return additionalProperties;
};

export const allProperties = [...properties, ...newApartmentProperties, ...generateMoreProperties()];

export const getPropertiesByType = (type: PropertyType): Property[] => {
  return allProperties.filter(property => property.type === type);
};

export const getFeaturedProperties = (): Property[] => {
  return allProperties.filter(property => property.isFeatured);
};

export const getPropertyById = (id: string): Property | undefined => {
  return allProperties.find(property => property.id === id);
};
