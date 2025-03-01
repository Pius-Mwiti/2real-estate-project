
import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="bg-secondary/50" ref={sectionRef}>
      <div className="section-container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-3 animate-on-scroll opacity-0">About Me</Badge>
          <h2 className="section-title mb-4 animate-on-scroll opacity-0">
            Passionate about creating beautiful and functional digital experiences
          </h2>
          <p className="text-muted-foreground animate-on-scroll opacity-0">
            I combine technical skills with creative vision to build exceptional products
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll opacity-0">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-95" />
              <div className="absolute inset-0 bg-background rounded-3xl transform -rotate-3 scale-95 border border-border" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="h-full w-full p-6 flex items-center justify-center">
                  <div className="relative w-full h-full bg-secondary/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-6xl font-display font-bold">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                        Hello
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm a passionate developer and designer with a keen eye for detail and a love for creating intuitive, engaging user experiences. I believe in the power of clean code and thoughtful design to solve complex problems.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 [animation-delay:0.1s]">
              <h3 className="text-xl font-semibold mb-2">My Approach</h3>
              <p className="text-muted-foreground">
                I approach each project with a focus on usability, performance, and aesthetics. By balancing technical requirements with design principles, I create solutions that are both functional and beautiful.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 [animation-delay:0.2s]">
              <h3 className="text-xl font-semibold mb-2">My Journey</h3>
              <p className="text-muted-foreground">
                My journey in tech began with a curiosity about how things work. This evolved into a passion for creating digital experiences that make a positive impact. I continuously learn and adapt to new technologies to stay at the forefront of the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
