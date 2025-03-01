
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PropertyType } from "@/types/property";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const propertyTypes: PropertyType[] = [
  "House",
  "Apartment",
  "Single Room",
  "Bedsitter",
  "2 Bedroom",
  "3 Bedroom",
  "Studio"
];

const PropertyFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedType, setSelectedType] = useState<PropertyType | "">(
    (searchParams.get("type") as PropertyType) || ""
  );
  const [priceRange, setPriceRange] = useState([
    parseInt(searchParams.get("minPrice") || "0"),
    parseInt(searchParams.get("maxPrice") || "50000")
  ]);
  const [bedrooms, setBedrooms] = useState(
    parseInt(searchParams.get("bedrooms") || "0")
  );
  const [bathrooms, setBathrooms] = useState(
    parseInt(searchParams.get("bathrooms") || "0")
  );
  
  // Active filters count
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  
  useEffect(() => {
    let count = 0;
    if (searchQuery) count++;
    if (selectedType) count++;
    if (priceRange[0] > 0) count++;
    if (priceRange[1] < 50000) count++;
    if (bedrooms > 0) count++;
    if (bathrooms > 0) count++;
    setActiveFiltersCount(count);
  }, [searchQuery, selectedType, priceRange, bedrooms, bathrooms]);
  
  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (searchQuery) params.set("q", searchQuery);
    if (selectedType) params.set("type", selectedType);
    if (priceRange[0] > 0) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1] < 50000) params.set("maxPrice", priceRange[1].toString());
    if (bedrooms > 0) params.set("bedrooms", bedrooms.toString());
    if (bathrooms > 0) params.set("bathrooms", bathrooms.toString());
    
    setSearchParams(params);
  };
  
  const handleReset = () => {
    setSearchQuery("");
    setSelectedType("");
    setPriceRange([0, 50000]);
    setBedrooms(0);
    setBathrooms(0);
    setSearchParams(new URLSearchParams());
  };
  
  const handleTypeChange = (type: PropertyType) => {
    setSelectedType(type);
    const params = new URLSearchParams(searchParams);
    params.set("type", type);
    setSearchParams(params);
  };
  
  return (
    <div className="bg-card border rounded-lg p-4 sticky top-20">
      <div className="flex flex-col space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search properties..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" onClick={() => setIsFiltersVisible(true)}>
                <SlidersHorizontal className="h-4 w-4" />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Properties</SheetTitle>
                <SheetDescription>
                  Refine your search with the options below
                </SheetDescription>
              </SheetHeader>
              
              <div className="space-y-4 py-4">
                <Accordion type="single" collapsible defaultValue="price">
                  <AccordionItem value="price">
                    <AccordionTrigger>Price Range (KES)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Slider
                          value={priceRange}
                          min={0}
                          max={50000}
                          step={1000}
                          onValueChange={(value) => setPriceRange(value as [number, number])}
                        />
                        <div className="flex items-center justify-between">
                          <div className="text-sm">KES {priceRange[0].toLocaleString()}</div>
                          <div className="text-sm">KES {priceRange[1].toLocaleString()}</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="propertyType">
                    <AccordionTrigger>Property Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-2">
                        {propertyTypes.map((type) => (
                          <Badge
                            key={type}
                            variant={selectedType === type ? "default" : "outline"}
                            className="cursor-pointer justify-center py-1.5"
                            onClick={() => 
                              selectedType === type 
                                ? setSelectedType("") 
                                : setSelectedType(type)
                            }
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="rooms">
                    <AccordionTrigger>Rooms</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">
                            Bedrooms (min)
                          </label>
                          <Select
                            value={bedrooms.toString()}
                            onValueChange={(value) => setBedrooms(parseInt(value))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">Any</SelectItem>
                              <SelectItem value="1">1+</SelectItem>
                              <SelectItem value="2">2+</SelectItem>
                              <SelectItem value="3">3+</SelectItem>
                              <SelectItem value="4">4+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-1 block">
                            Bathrooms (min)
                          </label>
                          <Select
                            value={bathrooms.toString()}
                            onValueChange={(value) => setBathrooms(parseInt(value))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">Any</SelectItem>
                              <SelectItem value="1">1+</SelectItem>
                              <SelectItem value="2">2+</SelectItem>
                              <SelectItem value="3">3+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <SheetFooter>
                <Button variant="outline" onClick={handleReset} className="w-full sm:w-auto">
                  Reset
                </Button>
                <Button onClick={handleSearch} className="w-full sm:w-auto">
                  Apply Filters
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          
          <Button onClick={handleSearch}>Search</Button>
        </div>
        
        {/* Property type quick filters */}
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <Badge
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTypeChange(type)}
            >
              {type}
            </Badge>
          ))}
          
          {selectedType && (
            <Badge
              variant="outline"
              className="cursor-pointer"
              onClick={() => {
                setSelectedType("");
                const params = new URLSearchParams(searchParams);
                params.delete("type");
                setSearchParams(params);
              }}
            >
              <X className="h-3 w-3 mr-1" />
              Clear
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
