import { Badge } from "@/components/ui/badge";
import { Globe, Mail, Clock, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4">Digital Pro</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              8+ years of WordPress development and digital marketing expertise. 
              Helping businesses thrive in the digital landscape with proven results.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm">250+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm">Available 24/7</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>WordPress Development</li>
              <li>Social Media Marketing</li>
              <li>SEO & Digital Marketing</li>
              <li>AI Tools & Automation</li>
              <li>Virtual Assistant Services</li>
              <li>Programming & Development</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-1">
              {[
                "WordPress", "Elementor", "HubSpot", "Zapier", 
                "ChatGPT", "Python", "Java", "MySQL"
              ].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-foreground" />
                <span>Response within 2-4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent-foreground" />
                <span>Serving clients globally</span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-primary-foreground/60 mb-2">Platforms:</p>
                <div className="space-y-1 text-xs">
                  <div>Upwork: 2,679+ hours, 45 jobs</div>
                  <div>Fiverr: 327 projects, 179 five-star reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Digital Pro. All rights reserved. | 
            <span className="ml-1">Transforming businesses through exceptional digital solutions.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;