import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30">
            Available for New Opportunities
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Ayush Das</span>
            <span className="block text-accent text-3xl md:text-4xl font-medium mt-2">
              Java Backend Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Building scalable enterprise applications with <strong>Spring Boot</strong>, 
            <strong> microservices</strong>, and <strong>cloud technologies</strong>. 
            3+ years of experience delivering robust backend solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero"
              className="px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/30 text-black hover:bg-white/10 hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/das-ayush" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>ayushdas048@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9471366640</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;