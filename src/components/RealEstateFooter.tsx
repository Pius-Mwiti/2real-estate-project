
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const RealEstateFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 border-t border-muted">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-2 font-display text-xl font-bold">
                <span className="text-primary">Smart Homes</span>
                <span>Real Estate</span>
              </div>
            </Link>
            <p className="mb-4 text-muted-foreground">
              Your trusted partner in finding the perfect home in Kenya. We offer a wide range of properties for rent.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/properties?type=House"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=Apartment"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=Single Room"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Single Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=Bedsitter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bedsitters
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=2 Bedroom"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  2 Bedrooms
                </Link>
              </li>
              <li>
                <Link
                  to="/properties?type=3 Bedroom"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  3 Bedrooms
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+254708333761"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +254 708 333 761
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:daviszack043@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  daviszack043@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-muted py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Smart Homes Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RealEstateFooter;
