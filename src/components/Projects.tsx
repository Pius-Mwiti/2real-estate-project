
import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Modern Web Application",
    description: "A responsive web application built with React and Tailwind CSS, featuring a clean interface and smooth interactions.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Design System",
    description: "A comprehensive design system with reusable components, ensuring consistency across multiple applications.",
    tags: ["Figma", "React", "Storybook"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-3 animate-on-scroll opacity-0">My Work</Badge>
          <h2 className="section-title mb-4 animate-on-scroll opacity-0">
            Featured Projects
          </h2>
          <p className="text-muted-foreground animate-on-scroll opacity-0">
            A selection of my recent work and the projects I'm most proud of
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover-lift animate-on-scroll opacity-0`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-normal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">View Project</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll opacity-0">
          <Button>View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
