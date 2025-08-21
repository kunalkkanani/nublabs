import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with 
            <span className="block text-accent"> Cutting-Edge Technology</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading consultancy specializing in custom software development, web solutions, and AI integration. 
            We help businesses innovate and scale with expert technology consulting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg shadow-elegant group"
              aria-label="Start your project consultation"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button 
              size="lg"
              onClick={scrollToServices}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg shadow-elegant group"
              aria-label="View our services"
            >
              View Services
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-white/80 group">
              <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Code className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="font-semibold mb-2">Custom Software</h3>
              <p className="text-sm text-center">Tailored solutions for your unique business needs</p>
            </div>
            
            <div className="flex flex-col items-center text-white/80 group">
              <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Globe className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-center">Modern, responsive websites and web applications</p>
            </div>
            
            <div className="flex flex-col items-center text-white/80 group">
              <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Cpu className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="font-semibold mb-2">AI Integration</h3>
              <p className="text-sm text-center">Intelligent automation and machine learning solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;