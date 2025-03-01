
import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "SQL", level: 60 }
    ]
  },
  {
    category: "Design",
    items: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 70 },
      { name: "Responsive Design", level: 90 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Webpack", level: 65 },
      { name: "RESTful APIs", level: 75 }
    ]
  }
];

const Skills = () => {
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
    <section id="skills" className="bg-secondary/50" ref={sectionRef}>
      <div className="section-container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-3 animate-on-scroll opacity-0">Expertise</Badge>
          <h2 className="section-title mb-4 animate-on-scroll opacity-0">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground animate-on-scroll opacity-0">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={skillGroup.category} 
              className={`bg-card rounded-xl p-6 border border-border/50 shadow-sm animate-on-scroll opacity-0`}
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <h3 className="font-semibold text-lg mb-4">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: '0%' }}
                        data-value={`${skill.level}%`}
                        onAnimationEnd={(e) => {
                          const target = e.target as HTMLDivElement;
                          target.style.width = target.dataset.value || '0%';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
