
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <span 
            className={`inline-block section-subtitle mb-4 opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.2s]' : ''}`}
          >
            Hello, I'm a
          </span>
          <h1 
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 ${
              isLoaded ? 'animate-fade-in [animation-delay:0.3s]' : ''
            }`}
          >
            <span className="block">Creative</span>
            <span className="block">
              <span className="text-primary">Developer</span> &
            </span>
            <span className="block">Designer</span>
          </h1>
          <p 
            className={`text-lg text-muted-foreground mb-8 max-w-md opacity-0 ${
              isLoaded ? 'animate-fade-in [animation-delay:0.4s]' : ''
            }`}
          >
            I craft exceptional digital experiences with meticulous attention to detail, bringing creative ideas to life through clean code and thoughtful design.
          </p>
          <div 
            className={`flex flex-wrap gap-4 opacity-0 ${
              isLoaded ? 'animate-fade-in [animation-delay:0.5s]' : ''
            }`}
          >
            <Button size="lg">View My Work</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </div>
        </div>
        
        <div 
          className={`relative aspect-square max-w-md mx-auto opacity-0 ${
            isLoaded ? 'animate-fade-in [animation-delay:0.6s]' : ''
          }`}
        >
          <div className="absolute inset-0 bg-secondary rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="h-full w-full flex items-center justify-center p-8">
              <div className="relative w-full h-full bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="p-6 pt-8">
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-foreground/5 rounded-full" />
                    <div className="w-2/3 h-4 bg-foreground/5 rounded-full" />
                    <div className="w-5/6 h-4 bg-foreground/5 rounded-full" />
                    <div className="w-1/2 h-4 bg-foreground/5 rounded-full" />
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-primary/20 rounded-full" />
                      <div className="w-4/5 h-3 bg-primary/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="p-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm animate-bounce"
          aria-label="Scroll down"
        >
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
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
