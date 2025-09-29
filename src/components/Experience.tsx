import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Wissen Technology",
      period: "Jun 2025 - Present",
      location: "Remote",
      highlights: [
        "Developed Spring Boot microservices with API Gateway for Datalink platform",
        "Created reusable JSON/XML processing framework, reducing duplicate code by 30%",
        "Automated CI/CD pipelines using Jenkins and Docker for efficient cloud deployments", 
        "Optimized Sybase database queries, improving data processing efficiency by 25%",
        "Collaborated on-site with global investment management firm"
      ],
      technologies: ["Spring Boot", "Microservices", "API Gateway", "Jenkins", "Docker", "Sybase"]
    },
    {
      title: "Software Engineer",
      company: "Incture Technologies", 
      period: "Jul 2024 - May 2025",
      location: "Bangalore, India",
      highlights: [
        "Collaborated with global customers as backend Java Spring Boot developer",
        "Worked within SAP EWM using Hibernate and RESTful APIs",
        "Delivered 3+ end-to-end SAP EWM applications, improving warehouse efficiency by 40%",
        "Optimized database queries using JPA and Hibernate, reducing execution time by 40%",
        "Enhanced system performance through indexing and caching strategies"
      ],
      technologies: ["Spring Boot", "SAP EWM", "Hibernate", "REST APIs", "JPA", "Database Optimization"]
    },
    {
      title: "Associate Software Engineer",
      company: "Incture Technologies",
      period: "Aug 2022 - Jun 2024", 
      location: "Bangalore, India",
      highlights: [
        "Won SAP Hackathon Automotive Sprint by developing innovative application prototype",
        "Architected two enterprise applications with Spring Boot and RESTful APIs",
        "Reduced manual effort by 40% through automation of canteen inventory management",
        "Improved database performance by 45% via JPA and Hibernate query optimization",
        "Integrated DocuSign via Java, reducing manual signing by 50%"
      ],
      technologies: ["Spring Boot", "REST APIs", "JPA", "Hibernate", "SAP BTP", "Cloud Foundry", "HANA"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3+ years of building enterprise-grade backend solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block transform -translate-x-[7px] z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                </div>
                
                {/* Content card */}
                <div className="md:ml-20">
                  <Card className="p-8 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 group">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-lg font-medium text-foreground mb-3">
                            <Building2 className="h-5 w-5 text-accent" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                          <Calendar className="h-4 w-4 text-primary" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 bg-accent/5 px-3 py-1.5 rounded-full">
                          <MapPin className="h-4 w-4 text-accent" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                            <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;