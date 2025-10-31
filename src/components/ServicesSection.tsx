import { 
  Globe, 
  Smartphone, 
  Search, 
  Brain, 
  BarChart3,
  Code
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
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end digital solutions for modern businesses
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;