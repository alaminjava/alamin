
const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">
            About
          </h2>

          <div className="space-y-8 text-center text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Since 2016, I've been helping businesses succeed online through WordPress development 
              and digital marketing. Working with over 250 clients worldwide, from financial institutions 
              to military organizations.
            </p>
            <p className="text-lg">
              I focus on creating simple, effective solutions that drive real results. No unnecessary 
              complexity—just clean code, strategic thinking, and reliable support.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-12 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-muted-foreground text-sm mb-2">Experience</div>
              <div className="text-2xl font-semibold text-foreground">8+ Years</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground text-sm mb-2">Clients Served</div>
              <div className="text-2xl font-semibold text-foreground">250+</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground text-sm mb-2">Projects Completed</div>
              <div className="text-2xl font-semibold text-foreground">327</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;