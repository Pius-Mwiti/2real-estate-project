import { Property, PropertyType } from "@/types/property";

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
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
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
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80"
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
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80"
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
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=800&q=80"
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

export const getPropertiesByType = (type: PropertyType): Property[] => {
  return allProperties.filter(property => property.type === type);
};

export const getFeaturedProperties = (): Property[] => {
  return allProperties.filter(property => property.isFeatured);
};

export const getPropertyById = (id: string): Property | undefined => {
  return allProperties.find(property => property.id === id);
};
