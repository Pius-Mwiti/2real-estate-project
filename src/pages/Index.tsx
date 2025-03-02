
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RealEstateHeader from "@/components/RealEstateHeader";
import RealEstateFooter from "@/components/RealEstateFooter";
import PropertyCard from "@/components/PropertyCard";
import { Property, PropertyType } from "@/types/property";
import { getFeaturedProperties, getPropertiesByType } from "@/data/properties";
import { ArrowRight, Building, Home, Hotel } from "lucide-react";

const propertyCategories = [
  {
    type: "House" as PropertyType,
    icon: Home,
    name: "Houses",
    description: "Spacious living areas with multiple bedrooms for families",
  },
  {
    type: "Apartment" as PropertyType,
    icon: Building,
    name: "Apartments",
    description: "Modern living spaces with convenient amenities",
  },
  {
    type: "Bedsitter" as PropertyType,
    icon: Hotel,
    name: "Bedsitters",
    description: "Cozy combined bedroom and sitting room spaces",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(price);
};

const Index = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  
  useEffect(() => {
    const featured = getFeaturedProperties().slice(0, 6);
    setFeaturedProperties(featured);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <RealEstateHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <Badge variant="outline" className="mb-4 animate-fade-in">Welcome to Smart Homes Real Estate</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in [animation-delay:200ms]">
                Find Your Perfect Rental Property in Kenya
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in [animation-delay:400ms]">
                Discover a wide range of houses, apartments, and rooms for rent at competitive prices. Your comfort is our priority.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in [animation-delay:600ms]">
                <Button asChild size="lg">
                  <Link to="/properties">Browse Properties</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-fade-in [animation-delay:800ms]">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern apartment building" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <Badge className="bg-primary mb-2">Featured</Badge>
                  <h3 className="text-xl font-bold text-white mb-2">Modern Apartment Living</h3>
                  <p className="text-white/80 text-sm">{formatPrice(15000)}/month</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Property Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3">Property Categories</Badge>
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Space</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of rental properties suitable for all budgets and preferences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {propertyCategories.map((category, index) => (
                <Link
                  key={category.type}
                  to={`/properties?type=${encodeURIComponent(category.type)}`}
                  className="group"
                >
                  <div className="bg-card border rounded-lg p-6 h-full transition-all duration-300 hover:border-primary hover:shadow-md">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>View Properties</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Apartment Types */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3">Apartment Types</Badge>
              <h2 className="text-3xl font-bold mb-4">Browse Our Apartment Collection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From luxurious two-bedroom units to cozy studio spaces
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3d311218-a48e-42f6-89b1-2a196f883af6.png" 
                    alt="Two Bedroom Apartment" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg font-semibold">
                    {formatPrice(25000)}/month
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Two Bedroom Apartments</h3>
                  <p className="text-muted-foreground text-sm mb-3">Spacious living for small families and professionals</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/properties?type=Apartment&bedrooms=2">View Options</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d940c907-a13d-4729-ab95-ca18f5d9ab73.png" 
                    alt="One Bedroom Apartment" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg font-semibold">
                    {formatPrice(18000)}/month
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">One Bedroom Apartments</h3>
                  <p className="text-muted-foreground text-sm mb-3">Perfect for individuals or couples</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/properties?type=Apartment&bedrooms=1">View Options</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/fb5ff5dd-7611-488f-a672-f144d3bb7133.png" 
                    alt="Bedsitter" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg font-semibold">
                    {formatPrice(9000)}/month
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Studio & Bedsitters</h3>
                  <p className="text-muted-foreground text-sm mb-3">Affordable and functional spaces for singles</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/properties?type=Bedsitter">View Options</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link to="/properties">View All Apartment Types</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Properties */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <Badge variant="outline" className="mb-3">Featured Properties</Badge>
                <h2 className="text-3xl font-bold">Latest Properties for Rent</h2>
              </div>
              <Button asChild variant="outline">
                <Link to="/properties">View All Properties</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3">Why Choose Us</Badge>
              <h2 className="text-3xl font-bold mb-4">The Smart Homes Real Estate Advantage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We strive to provide exceptional service and value to all our clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.277L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Properties</h3>
                <p className="text-muted-foreground">
                  We carefully select and inspect all properties to ensure they meet our high standards
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                  >
                    <path d="M6 9H4.5a2 2 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2 2 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees or unexpected costs - we believe in complete transparency
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M12 3v3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  Our team is always available to address your concerns and provide assistance
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Contact us today to schedule a viewing or discuss your specific requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <RealEstateFooter />
    </div>
  );
};

export default Index;
