import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional digital workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-primary-foreground/80 text-sm font-medium">
                8+ Years of Excellence
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              WordPress Pro &
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Digital Marketing Expert
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Transform your business with stunning WordPress websites and powerful digital marketing strategies. 
              I've helped 250+ clients achieve online success with proven results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-accent-foreground mr-2" />
                  <span className="text-2xl font-bold text-primary-foreground">250+</span>
                </div>
                <p className="text-primary-foreground/80 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-accent-foreground mr-2" />
                  <span className="text-2xl font-bold text-primary-foreground">80+</span>
                </div>
                <p className="text-primary-foreground/80 text-sm">Websites Built</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-accent-foreground mr-2" />
                  <span className="text-2xl font-bold text-primary-foreground">800+</span>
                </div>
                <p className="text-primary-foreground/80 text-sm">Social Accounts</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover transition-all duration-300"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Right side - could add an image or additional content */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your project and create a digital strategy that drives real results for your business.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-foreground">Free consultation & strategy session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-foreground">Custom solutions for your business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-foreground">24/7 support & maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;