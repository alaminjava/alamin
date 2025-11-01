import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      number: "250+",
      title: "Clients Helped Online",
      description: "Successfully brought businesses to the digital world"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      number: "800+",
      title: "Social Media Accounts",
      description: "Managed across multiple platforms in the USA"
    },
    {
      icon: <Award className="w-6 h-6 text-success" />,
      number: "2,679",
      title: "Hours on Upwork",
      description: "With 45 completed jobs and excellent ratings"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      number: "8+",
      title: "Years Experience",
      description: "Since 2016, consistently delivering excellence"
    }
  ];

  const certifications = [
    "Java Programming", "HTML, CSS & Bootstrap", "MySQL Database",
    "WordPress Development", "Digital Marketing", "Social Media Management"
  ];

  const notableClients = [
    "Qapital Finance", "NourishDoc", "Josh V Realty", "360x Events Management",
    "Shiphype", "Geospatial Solutions", "Snagajob", "US Military Civil Engineers",
    "Navy Seals", "Patient Preferred Physicians", "Kiovic Marketing"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 hover:bg-primary/5 transition-colors duration-200">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            8+ Years of Digital Excellence
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2016, I've been helping businesses transform their digital presence with cutting-edge 
            WordPress development and strategic digital marketing solutions.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 animate-slide-up">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-lg border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-all duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Story */}
          <div className="animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">My Journey & Expertise</h3>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <p className="hover:text-foreground transition-colors duration-200">
                Starting in 2016, I've dedicated myself to mastering the art of digital transformation. 
                My journey began with a passion for creating beautiful, functional websites that not only 
                look stunning but actively convert visitors into loyal customers.
              </p>
              <p className="hover:text-foreground transition-colors duration-200">
                Over the years, I've had the privilege of working with diverse clients ranging from 
                financial institutions to military organizations, each project teaching me valuable 
                lessons about different industries and their unique digital needs.
              </p>
              <p className="hover:text-foreground transition-colors duration-200">
                My approach combines technical expertise with strategic thinking. I don't just build 
                websites or manage social media - I create comprehensive digital ecosystems that 
                drive real business growth and measurable results.
              </p>
              <p className="hover:text-foreground transition-colors duration-200">
                What sets me apart is my commitment to staying ahead of the curve. I continuously 
                embrace new technologies like AI tools and marketing automation, ensuring my clients 
                always have access to the latest and most effective digital strategies.
              </p>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="animate-scale-in mt-8 lg:mt-0">
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Professional Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs sm:text-sm border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Notable Clients</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                {notableClients.map((client, index) => (
                  <div key={index} className="flex items-center gap-2 group hover:text-foreground transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-success rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-base font-semibold text-foreground mb-2">Available 24/7</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in being there when my clients need me. Whether it's an urgent update, 
                technical support, or strategic consultation, I'm always available to help your 
                business succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;