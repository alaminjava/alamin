import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional digital workspace showcasing modern web development and marketing tools" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
              <div className="flex" role="img" aria-label="5-star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-primary-foreground/80 text-xs sm:text-sm font-medium">
                8+ Years of Excellence
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              WordPress Pro &
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Digital Marketing Expert
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your business with stunning WordPress websites and powerful digital marketing strategies. 
              I've helped 250+ clients achieve online success with proven results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 animate-slide-up">
              <div className="text-center p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-1 sm:mb-2">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground mb-1 sm:mb-0 sm:mr-2" />
                  <span className="text-lg sm:text-2xl font-bold text-primary-foreground">250+</span>
                </div>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">Happy Clients</p>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-1 sm:mb-2">
                  <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground mb-1 sm:mb-0 sm:mr-2" />
                  <span className="text-lg sm:text-2xl font-bold text-primary-foreground">80+</span>
                </div>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">Websites Built</p>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-1 sm:mb-2">
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground mb-1 sm:mb-0 sm:mr-2" />
                  <span className="text-lg sm:text-2xl font-bold text-primary-foreground">800+</span>
                </div>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">Social Accounts</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-scale-in">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                aria-label="Schedule a free consultation meeting"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/40"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Right side - Benefits Card */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-card p-6 lg:p-8 rounded-2xl shadow-elegant hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6 text-sm lg:text-base">
                  Let's discuss your project and create a digital strategy that drives real results for your business.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-success rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-200">Free consultation & strategy session</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-success rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-200">Custom solutions for your business</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-success rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-200">24/7 support & maintenance</span>
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