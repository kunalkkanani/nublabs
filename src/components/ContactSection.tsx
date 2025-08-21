import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@techflowsolutions.com",
      link: "mailto:hello@techflowsolutions.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY, USA",
      link: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM EST",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <MessageSquare className="h-5 w-5 text-accent" aria-hidden="true" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                        <info.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-accent transition-colors break-words"
                            aria-label={`${info.title}: ${info.value}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="mt-6 bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-background border-border focus:ring-accent"
                          placeholder="Your full name"
                          required
                          aria-describedby="name-required"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-background border-border focus:ring-accent"
                          placeholder="your.email@company.com"
                          required
                          aria-describedby="email-required"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground">Company</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="bg-background border-border focus:ring-accent"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-foreground">Service Interest</Label>
                        <Input
                          id="service"
                          type="text"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="bg-background border-border focus:ring-accent"
                          placeholder="e.g., Web Development, AI Consulting"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-background border-border focus:ring-accent min-h-[120px]"
                        placeholder="Tell us about your project requirements and goals..."
                        required
                        aria-describedby="message-required"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity font-semibold py-6"
                      size="lg"
                      aria-label="Send message"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;