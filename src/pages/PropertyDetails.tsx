import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Bath, Bed, Home, MapPin, Ruler, Phone, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Property } from "@/types/property";
import { getPropertyById, allProperties } from "@/data/properties";
import RealEstateHeader from "@/components/RealEstateHeader";
import RealEstateFooter from "@/components/RealEstateFooter";
import PropertyCard from "@/components/PropertyCard";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
  
  useEffect(() => {
    if (!id) return;
    
    // Simulate loading
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const foundProperty = getPropertyById(id);
      
      if (foundProperty) {
        setProperty(foundProperty);
        
        // Get similar properties (same type, different ID)
        const similar = allProperties
          .filter(p => p.type === foundProperty.type && p.id !== foundProperty.id)
          .slice(0, 3);
        
        setSimilarProperties(similar);
      }
      
      setIsLoading(false);
    }, 500);
  }, [id]);
  
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
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
            <div className="aspect-[16/9] bg-muted rounded-lg mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="h-48 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <RealEstateFooter />
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <RealEstateHeader />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <Home className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Property Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The property you're looking for may have been removed or is no longer available.
            </p>
            <Button asChild>
              <Link to="/properties">Browse Properties</Link>
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
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/properties" className="text-muted-foreground hover:text-foreground">
              Properties
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium truncate">{property.title}</span>
          </div>
          
          {property.images.length > 0 && (
            <div className="mb-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {property.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${property.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
                <Badge variant={property.isAvailable ? "secondary" : "destructive"}>
                  {property.isAvailable ? "Available" : "Rented"}
                </Badge>
              </div>
              
              <div className="flex items-center text-muted-foreground gap-1 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1.5">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span>
                    {property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span>
                    {property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <Ruler className="h-5 w-5 text-muted-foreground" />
                  <span>{property.area} sq ft</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground">{property.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-24">
                <div className="text-2xl font-bold text-primary mb-4">
                  {formatPrice(property.price)}<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link to="/contact">Contact Agent</Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Agent
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-2">Property Details</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Property Type:</span>
                      <span className="font-medium">{property.type}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Bedrooms:</span>
                      <span className="font-medium">{property.bedrooms}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Bathrooms:</span>
                      <span className="font-medium">{property.bathrooms}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Area:</span>
                      <span className="font-medium">{property.area} sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="font-medium">{property.isAvailable ? "Yes" : "No"}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Listed:</span>
                      <span className="font-medium">{property.createdAt}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-2">Agent Information</h3>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Ezekiel Wangila</p>
                      <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="h-3.5 w-3.5" />
                      <a href="tel:+254708333761" className="hover:text-primary">
                        +254 708 333 761
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5" />
                      <a href="mailto:info@wangilarealestate.com" className="hover:text-primary">
                        info@wangilarealestate.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {similarProperties.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProperties.map(prop => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <RealEstateFooter />
    </div>
  );
};

export default PropertyDetails;
