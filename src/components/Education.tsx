import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering", 
    institution: "Indira Gandhi Institute of Technology (IGIT) Sarang",
    location: "Dhenkanal, Odisha",
    period: "Aug 2018 - Jul 2022",
    cgpa: "9.06"
  };

  const certifications = [
    {
      name: "GCP Cloud Digital Leader Certification",
      issuer: "Google Cloud",
      date: "Aug 2025",
      category: "Cloud Computing"
    },
    {
      name: "Programming Essentials in Python",
      issuer: "Cisco",
      date: "Jun 2021", 
      category: "Programming"
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      date: "May 2021",
      category: "Networking"
    },
    {
      name: "Android App Development",
      issuer: "Internshala", 
      date: "Jun 2020",
      category: "Mobile Development"
    },
    {
      name: "Programming & Data Structures",
      issuer: "NPTEL IIT Madras",
      date: "Sep 2019",
      category: "Programming"
    }
  ];

  const achievements = [
    "Appreciated by global warehouse management client (SAP EWM) for delivering robust backend solutions",
    "Won SAP Hackathon Automotive Sprint with innovative application prototype", 
    "Consistently delivered high-performance enterprise applications",
    "Contributed to multiple successful digital transformation projects"
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence and professional certifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <Card className="p-8 bg-gradient-card shadow-card border-0 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">{education.degree}</h4>
                <p className="text-lg font-medium mb-2">{education.field}</p>
                <p className="text-muted-foreground mb-2">{education.institution}</p>
                <p className="text-muted-foreground mb-4">{education.location}</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {education.period}
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="inline-block p-6 bg-gradient-primary rounded-lg text-white">
                  <div className="text-3xl font-bold mb-1">CGPA</div>
                  <div className="text-4xl font-bold">{education.cgpa}</div>
                  <div className="text-sm opacity-90">out of 10.0</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-full">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300"
                >
                  <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                    {cert.category}
                  </Badge>
                  <h4 className="font-semibold mb-2 leading-tight">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;