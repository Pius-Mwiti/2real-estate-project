
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RealEstateHeader from "@/components/RealEstateHeader";
import RealEstateFooter from "@/components/RealEstateFooter";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilter from "@/components/PropertyFilter";
import { Property, PropertyType } from "@/types/property";
import { allProperties } from "@/data/properties";
import { Badge } from "@/components/ui/badge";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setProperties(allProperties);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (properties.length === 0) return;

    let filtered = [...properties];

    // Apply type filter
    const typeFilter = searchParams.get("type") as PropertyType | null;
    if (typeFilter) {
      filtered = filtered.filter(p => p.type === typeFilter);
    }

    // Apply search query filter
    const query = searchParams.get("q");
    if (query) {
      const searchTerms = query.toLowerCase().split(" ");
      filtered = filtered.filter(p => 
        searchTerms.some(term => 
          p.title.toLowerCase().includes(term) || 
          p.description.toLowerCase().includes(term) || 
          p.location.toLowerCase().includes(term)
        )
      );
    }

    // Apply price range filter
    const minPrice = searchParams.get("minPrice");
    if (minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(minPrice));
    }

    const maxPrice = searchParams.get("maxPrice");
    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(maxPrice));
    }

    // Apply bedrooms filter
    const bedrooms = searchParams.get("bedrooms");
    if (bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms));
    }

    // Apply bathrooms filter
    const bathrooms = searchParams.get("bathrooms");
    if (bathrooms) {
      filtered = filtered.filter(p => p.bathrooms >= parseInt(bathrooms));
    }

    setFilteredProperties(filtered);
  }, [properties, searchParams]);

  const getTitle = () => {
    const type = searchParams.get("type");
    if (type) {
      return `${type} Properties for Rent`;
    }
    return "All Properties for Rent";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <RealEstateHeader />
      
      <main className="flex-1">
        <section className="bg-muted/30 border-b py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold">{getTitle()}</h1>
              {filteredProperties.length > 0 && (
                <p className="text-muted-foreground mt-2">
                  Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
                </p>
              )}
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <PropertyFilter />
              </div>
              
              <div className="md:col-span-3">
                {isLoading ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-card border rounded-lg overflow-hidden animate-pulse">
                        <div className="aspect-video bg-muted"></div>
                        <div className="p-4 space-y-3">
                          <div className="h-5 bg-muted rounded w-3/4"></div>
                          <div className="h-4 bg-muted rounded w-1/2"></div>
                          <div className="flex space-x-4">
                            <div className="h-4 bg-muted rounded w-1/4"></div>
                            <div className="h-4 bg-muted rounded w-1/4"></div>
                            <div className="h-4 bg-muted rounded w-1/4"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : filteredProperties.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredProperties.map(property => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-card border rounded-lg">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-4">
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
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium mb-2">No properties found</h3>
                    <p className="text-muted-foreground max-w-md">
                      We couldn't find any properties matching your search criteria. Try adjusting your filters.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <RealEstateFooter />
    </div>
  );
};

export default Properties;
