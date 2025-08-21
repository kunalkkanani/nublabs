import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Globe, 
  Brain, 
  Smartphone, 
  Database, 
  Cloud,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and objectives.",
      features: [
        "Enterprise applications",
        "Desktop software solutions",
        "API development & integration",
        "Legacy system modernization"
      ],
      highlight: "Most Popular"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
      features: [
        "React & Next.js applications",
        "E-commerce platforms",
        "Progressive Web Apps (PWA)",
        "Performance optimization"
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent automation and AI-powered solutions to transform your business processes.",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision solutions",
        "AI strategy consulting"
      ],
      highlight: "Trending"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that work seamlessly across iOS and Android devices.",
      features: [
        "React Native development",
        "Native iOS & Android apps",
        "Mobile UI/UX design",
        "App store optimization"
      ]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management for reliable data storage and retrieval.",
      features: [
        "Database architecture design",
        "Performance optimization",
        "Data migration services",
        "Backup & recovery solutions"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: [
        "AWS, Azure, GCP deployment",
        "Serverless architecture",
        "DevOps & CI/CD pipelines",
        "Cloud migration strategies"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {service.highlight}
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={scrollToContact}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss your project requirements and explore how we can help bring your vision to life.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                onClick={scrollToContact}
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 font-semibold px-8 py-4"
                aria-label="Get free consultation"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;