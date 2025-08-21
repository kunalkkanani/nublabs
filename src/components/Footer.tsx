import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">TechFlow Solutions</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Empowering businesses through innovative technology solutions, 
                custom software development, and AI integration services.
              </p>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>📧 hello@techflowsolutions.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 New York, NY, USA</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2" aria-label="Footer navigation">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Go to home section"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Go to about section"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Go to services section"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Go to contact section"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>Custom Software Development</p>
                <p>Web Development</p>
                <p>AI & Machine Learning</p>
                <p>Mobile Development</p>
                <p>Cloud Services</p>
                <p>Technology Consulting</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-primary-foreground/20" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} TechFlow Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <button className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;