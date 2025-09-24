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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From WordPress development to digital marketing and automation, I provide end-to-end solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 ${
                service.highlighted ? 'ring-2 ring-primary/20 bg-gradient-card' : 'bg-card'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  {service.highlighted && (
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Technologies I Master</h3>
            <p className="text-muted-foreground">Cutting-edge tools and platforms for maximum results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "WordPress", icon: <Globe className="w-6 h-6" /> },
              { name: "Elementor", icon: <Palette className="w-6 h-6" /> },
              { name: "HubSpot", icon: <Mail className="w-6 h-6" /> },
              { name: "Zapier", icon: <Zap className="w-6 h-6" /> },
              { name: "ChatGPT", icon: <Brain className="w-6 h-6" /> },
              { name: "MySQL", icon: <Database className="w-6 h-6" /> }
            ].map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 bg-card rounded-xl shadow-sm hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="text-primary group-hover:text-accent transition-colors mb-2">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;