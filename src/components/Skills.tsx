import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Cloud, Wrench, Database, Package } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Kotlin", "Python", "C/C++"],
      Icon: Code2
    },
    {
      category: "Backend Technologies", 
      skills: ["Spring Boot", "Spring Data JPA", "REST APIs", "Hibernate", "Microservices"],
      Icon: Server
    },
    {
      category: "Cloud Platforms",
      skills: ["Microsoft Azure", "AWS", "SAP BTP", "Cloud Foundry"],
      Icon: Cloud
    },
    {
      category: "DevOps & Tools",
      skills: ["Jenkins", "Docker", "Kubernetes", "CI/CD", "Git", "Postman"],
      Icon: Wrench
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Sybase", "HANA", "SQLite"],
      Icon: Database
    },
    {
      category: "Others",
      skills: ["Firebase", "JWT", "SAML", "Agile", "SAP S/4 HANA"],
      Icon: Package
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full backend development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category}
              className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;