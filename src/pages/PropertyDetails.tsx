import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { properties } from "@/data/properties";
import { Property } from "@/types/property";
import RealEstateHeader from "@/components/RealEstateHeader";
import RealEstateFooter from "@/components/RealEstateFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import PropertyCard from "@/components/PropertyCard";
import { Phone, User, Mail } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: property, isLoading, error } = useQuery({
    queryKey: ["property", id],
    queryFn: () => {
      const foundProperty = properties.find(p => p.id === id);
      if (!foundProperty) throw new Error("Property not found");
      return foundProperty;
    }
  });
  
  const { data: similarProperties } = useQuery({
    queryKey: ["similarProperties", property?.type, property?.id],
    queryFn: () => {
      if (!property) return [];
      
      return properties
        .filter(p => 
          p.id !== property.id && 
          p.type === property.type && 
          p.isAvailable
        )
        .slice(0, 3);
    },
    enabled: !!property
  });
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <RealEstateHeader />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-[70vh]">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <div className="mt-4 text-lg font-medium">Loading property details...</div>
            </div>
          </div>
        </main>
        <RealEstateFooter />
      </div>
    );
  }
  
  if (error || !property) {
    return (
      <div className="min-h-screen flex flex-col">
        <RealEstateHeader />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-[70vh] flex-col">
            <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
            <p className="text-muted-foreground mb-6">Sorry, we couldn't find the property you're looking for.</p>
            <Button asChild>
              <Link to="/properties">Browse All Properties</Link>
            </Button>
          </div>
        </main>
        <RealEstateFooter />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <RealEstateHeader />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 flex flex-wrap justify-between items-center">
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <Badge className="text-lg px-4 py-1">{formatPrice(property.price)}/month</Badge>
          </div>
          
          <p className="text-muted-foreground mb-6">{property.location}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-2 rounded-lg overflow-hidden">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-[242px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-primary"
                      >
                        <path d="M19 4h-1a1 1 0 0 0-1 1v1H7V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
                        <path d="M7 9h10" />
                        <path d="M7 14h10" />
                      </svg>
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-primary"
                      >
                        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                        <line x1="10" x2="8" y1="5" y2="7" />
                        <line x1="2" x2="22" y1="12" y2="12" />
                        <line x1="7" x2="7" y1="19" y2="21" />
                        <line x1="17" x2="17" y1="19" y2="21" />
                      </svg>
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-primary"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                      <span>{property.area} sq ft</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-primary"
                      >
                        <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                        <path d="M15 7h6v6" />
                      </svg>
                      <span>{property.type}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-muted-foreground mb-6">{property.description}</p>
                  
                  <h2 className="text-xl font-semibold mb-3">Features & Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 mb-6">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {similarProperties && similarProperties.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-6">Similar Properties</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {similarProperties.map((prop) => (
                      <PropertyCard key={prop.id} property={prop} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Property Agent</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ezekiel Wangila</h3>
                      <p className="text-muted-foreground text-sm">Property Manager</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+254708333761" className="font-medium hover:text-primary">
                          +254 708 333 761
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:ezekiel.wangila@example.com" className="font-medium hover:text-primary">
                          ezekiel.wangila@example.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Your Phone
                      </label>
                      <input
                        id="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="I'm interested in this property"
                        defaultValue={`Hi Ezekiel, I'm interested in the ${property.title} listed for ${formatPrice(property.price)}/month. Please contact me with more information.`}
                      ></textarea>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <RealEstateFooter />
    </div>
  );
};

export default PropertyDetails;
