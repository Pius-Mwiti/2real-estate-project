
import { Link } from "react-router-dom";
import { Bath, Bed, MapPin, Ruler, Mail } from "lucide-react";
import { Property } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleContactAgent = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Create email subject and body
    const subject = `Inquiry about ${property.title}`;
    const body = `Hello,\n\nI am interested in the ${property.title} listed for ${formatPrice(property.price)}/month located at ${property.location}.\n\nPlease provide more information about this property.\n\nThank you!`;
    
    // Open default email client
    window.location.href = `mailto:piusmwiti254@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show toast notification
    toast.success("Opening email client...", {
      description: "Contact form is being prepared in your default email app."
    });
  };
  
  return (
    <Card className="group overflow-hidden hover-lift">
      <div className="relative">
        <Link to={`/properties/${property.id}`}>
          <div className="aspect-video overflow-hidden">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          
          {property.isFeatured && (
            <Badge className="absolute top-2 left-2 bg-primary">
              Featured
            </Badge>
          )}
          
          <Badge 
            variant={property.isAvailable ? "secondary" : "destructive"}
            className="absolute top-2 right-2"
          >
            {property.isAvailable ? "Available" : "Rented"}
          </Badge>
          
          <Badge className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm">
            {formatPrice(property.price)}/month
          </Badge>
        </Link>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold truncate">
              <Link to={`/properties/${property.id}`} className="hover:text-primary transition-colors">
                {property.title}
              </Link>
            </h3>
          </div>
          
          <div className="flex items-center text-muted-foreground gap-1 text-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{property.location}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
            )}
            
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Ruler className="h-4 w-4 text-muted-foreground" />
              <span>{property.area} sq ft</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {property.features.slice(0, 3).map((feature, index) => (
              <Badge variant="outline" key={index} className="font-normal text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="outline" className="font-normal text-xs">
                +{property.features.length - 3} more
              </Badge>
            )}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center gap-2"
            onClick={handleContactAgent}
          >
            <Mail className="h-4 w-4" /> Contact Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
