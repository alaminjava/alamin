import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                WordPress Development & Digital Marketing
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Clean, Effective
                <span className="block">Digital Solutions</span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              8+ years helping businesses succeed online. Simple, powerful websites that work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="text-base"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">250+</div>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">80+</div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">8yrs</div>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;