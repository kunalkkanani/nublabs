import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Projects Delivered" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    "Expert team of experienced developers and consultants",
    "Cutting-edge technology stack and modern methodologies",
    "End-to-end project management and support",
    "Scalable solutions designed for growth",
    "Transparent communication and regular updates",
    "Post-launch support and maintenance",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Nub Labs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking technology consultancy committed to helping businesses 
              harness the power of modern technology to achieve their goals and drive innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* About Content */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Empowering Businesses Through Technology
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Nub Labs, we believe that technology should be an enabler, not a barrier. 
                Our team of expert developers and consultants work closely with you to understand your 
                unique challenges and deliver solutions that drive real business value.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From custom software development to AI integration, we provide comprehensive technology 
                services that help you stay ahead of the competition and achieve sustainable growth.
              </p>

              {/* Values List */}
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <stat.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
                To democratize access to cutting-edge technology by providing expert consultation, 
                custom development, and AI solutions that empower businesses to innovate, scale, 
                and succeed in the digital age.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;