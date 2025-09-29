import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

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

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-lg font-medium text-foreground mb-2">
                    <Building2 className="h-5 w-5 text-accent" />
                    {exp.company}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;