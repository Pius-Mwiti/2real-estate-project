
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const RealEstateHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="text-primary">Wangila</span>
            <span>Real Estate</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Properties
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full z-50 mt-2 hidden w-48 rounded-md border bg-card p-2 shadow-md group-hover:block">
              <Link 
                to="/properties?type=House" 
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
              >
                Houses
              </Link>
              <Link 
                to="/properties?type=Apartment" 
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
              >
                Apartments
              </Link>
              <Link 
                to="/properties?type=Single Room" 
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
              >
                Single Rooms
              </Link>
              <Link 
                to="/properties?type=Bedsitter" 
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
              >
                Bedsitters
              </Link>
              <Link 
                to="/properties?type=2 Bedroom" 
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
              >
                2 Bedrooms
              </Link>
              <Link 
                to="/properties?type=3 Bedroom" 
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
              >
                3 Bedrooms
              </Link>
              <Link 
                to="/properties" 
                className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
              >
                All Properties
              </Link>
            </div>
          </div>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary" className="hidden md:flex">
            <Link to="/contact">Enquire</Link>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="px-2 py-6">
                <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold mb-6">
                  <span className="text-primary">Wangila</span>
                  <span>Real Estate</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link to="/" className="text-base font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <div className="space-y-3">
                    <div className="font-medium">Properties</div>
                    <div className="ml-4 flex flex-col gap-2">
                      <Link 
                        to="/properties?type=House" 
                        className="text-sm transition-colors hover:text-primary"
                      >
                        Houses
                      </Link>
                      <Link 
                        to="/properties?type=Apartment" 
                        className="text-sm transition-colors hover:text-primary"
                      >
                        Apartments
                      </Link>
                      <Link 
                        to="/properties?type=Single Room" 
                        className="text-sm transition-colors hover:text-primary"
                      >
                        Single Rooms
                      </Link>
                      <Link 
                        to="/properties?type=Bedsitter" 
                        className="text-sm transition-colors hover:text-primary"
                      >
                        Bedsitters
                      </Link>
                      <Link 
                        to="/properties?type=2 Bedroom" 
                        className="text-sm transition-colors hover:text-primary"
                      >
                        2 Bedrooms
                      </Link>
                      <Link 
                        to="/properties?type=3 Bedroom" 
                        className="text-sm transition-colors hover:text-primary"
                      >
                        3 Bedrooms
                      </Link>
                      <Link 
                        to="/properties" 
                        className="text-sm transition-colors hover:text-primary"
                      >
                        All Properties
                      </Link>
                    </div>
                  </div>
                  <Link to="/about" className="text-base font-medium transition-colors hover:text-primary">
                    About
                  </Link>
                  <Link to="/contact" className="text-base font-medium transition-colors hover:text-primary">
                    Contact
                  </Link>
                  <Button asChild className="mt-4">
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default RealEstateHeader;
