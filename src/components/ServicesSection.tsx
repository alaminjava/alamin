import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  Search, 
  Zap, 
  Brain, 
  BarChart3,
  Code,
  Palette,
  Mail,
  Database
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "WordPress Development",
      description: "Custom WordPress websites built from scratch with Elementor Pro, optimized for speed and conversions.",
      features: ["Custom Theme Development", "Elementor Pro Design", "Speed Optimization", "Maintenance & Support"],
      highlighted: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Social Media Marketing",
      description: "Complete social media management across all platforms with content creation and scheduling.",
      features: ["Facebook & Instagram", "LinkedIn & Twitter", "Content Creation", "Analytics & Reporting"]
    },
    {
      icon: <Brain className="w-8 h-8 text-success" />,
      title: "AI Tools & Automation",
      description: "Leverage cutting-edge AI tools and marketing automation to streamline your business processes.",
      features: ["ChatGPT Integration", "Zapier Automation", "Content Generation", "Workflow Optimization"]
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO & Digital Marketing",
      description: "Drive organic traffic with comprehensive SEO strategies and keyword research.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"]
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Programming & Development",
      description: "Full-stack development with modern technologies and clean, maintainable code.",
      features: ["HTML/CSS/JavaScript", "Python & Java", "MySQL Database", "API Integration"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-success" />,
      title: "Virtual Assistant Services",
      description: "Comprehensive virtual assistant services to help you focus on growing your business.",
      features: ["Data Entry & Research", "Email Marketing", "CRM Management", "Administrative Support"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 hover:bg-primary/5 transition-colors duration-200">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            From WordPress development to digital marketing and automation, I provide end-to-end solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-slide-up">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                service.highlighted ? 'ring-2 ring-primary/20 bg-gradient-card' : 'bg-card hover:shadow-soft'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  {service.highlighted && (
                    <Badge className="bg-primary text-primary-foreground animate-pulse">Popular</Badge>
                  )}
                </div>
                <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm group/item">
                      <div className="w-1.5 h-1.5 bg-success rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Technologies I Master</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Cutting-edge tools and platforms for maximum results</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 animate-scale-in">
            {[
              { name: "WordPress", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Elementor", icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "HubSpot", icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Zapier", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "ChatGPT", icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "MySQL", icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" /> }
            ].map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-3 sm:p-4 bg-card rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary group-hover:text-accent transition-colors duration-200 mb-2 group-hover:scale-110 transform transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;