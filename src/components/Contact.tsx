import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayushdas048@gmail.com",
      href: "mailto:ayushdas048@gmail.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+91 94713 66640",
      href: "tel:+919471366640"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/das-ayush",
      href: "https://www.linkedin.com/in/das-ayush"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Ready to discuss your next backend project or explore opportunities? 
            I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              
              return (
                <Card 
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <IconComponent className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-300">{contact.label}</div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-lg font-semibold hover:text-accent transition-colors duration-200"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold">{contact.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-medium shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:ayushdas048@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/30 text-blue hover:bg-white/10 hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="https://drive.google.com/file/d/1IsVyFM2ajhKrznvwDC8CgKCjeFXeLFj9/view?usp=sharing">Download Resume</a>
              <Download className="mr-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-300">
              © 2025 Ayush Das. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;