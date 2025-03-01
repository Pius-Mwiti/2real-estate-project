
import RealEstateHeader from "@/components/RealEstateHeader";
import RealEstateFooter from "@/components/RealEstateFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <RealEstateHeader />
      
      <main className="flex-1">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">About Us</Badge>
              <h1 className="text-4xl font-bold mb-4">
                Wangila Real Estate
              </h1>
              <p className="text-muted-foreground text-lg">
                Your trusted partner in finding the perfect rental property in Kenya
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Our Story</Badge>
                <h2 className="text-3xl font-bold mb-6">
                  Helping Kenyans Find Their Perfect Home Since 2015
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Wangila Real Estate was founded by Ezekiel Wangila with a simple mission: to help people find quality rental properties that meet their needs and budget.
                  </p>
                  <p>
                    What started as a small operation has grown into one of the most trusted real estate agencies in Nairobi, with a diverse portfolio of properties ranging from luxury apartments to affordable single rooms.
                  </p>
                  <p>
                    Our approach is client-centered, focusing on understanding your specific requirements and preferences to match you with the perfect property. We take pride in our attention to detail and commitment to transparency throughout the rental process.
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="Office building"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="text-3xl font-bold mb-4">
                The Principles That Guide Us
              </h2>
              <p className="text-muted-foreground">
                At Wangila Real Estate, our core values shape everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6">
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
                    <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
                    <line x1="3" y1="22" x2="21" y2="22" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty and transparency in all our dealings. Our clients trust us to provide accurate information and fair advice.
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6">
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
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
                <p className="text-muted-foreground">
                  Your happiness is our priority. We go above and beyond to ensure that our clients find properties that exceed their expectations.
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  We personally inspect every property in our portfolio to ensure it meets our high standards of quality and safety.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet the Founder */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4">Meet the Founder</Badge>
              <h2 className="text-3xl font-bold mb-4">
                The Vision Behind Wangila Real Estate
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Ezekiel Wangila</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ezekiel Wangila founded Wangila Real Estate with a vision to transform the rental property market in Kenya, making it more transparent, efficient, and client-focused.
                  </p>
                  <p>
                    With over 10 years of experience in the real estate industry, Ezekiel has developed an extensive network and deep understanding of the Kenyan property market. His expertise has helped hundreds of clients find their ideal rental properties.
                  </p>
                  <p>
                    "My goal is to create a stress-free rental experience for all our clients. Whether you're looking for a luxury apartment or an affordable single room, we are committed to finding the perfect match for your needs and budget."
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/contact">Contact Ezekiel</Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Ezekiel Wangila"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Browse our extensive collection of rental properties or contact us directly for personalized assistance
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

export default About;
