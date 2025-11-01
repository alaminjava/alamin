import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Mail, MessageSquare, Zap } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    // For now, just show a success message
    // In a real implementation, this would integrate with Google Calendar API
    toast({
      title: "Meeting request submitted!",
      description: "I'll contact you within 24 hours to confirm your consultation time.",
    });

    // Reset form
    setFormData({
      name: "", email: "", company: "", service: "", projectType: "",
      budget: "", timeline: "", message: "", preferredDate: "", preferredTime: ""
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 hover:bg-primary/5 transition-colors duration-200">
            Let's Connect
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Schedule Your Free Consultation
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and create a 
            strategy that drives real results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-scale-in">
            <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Calendar className="w-5 h-5" />
                  Quick Response
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 text-sm sm:text-base">
                  Available 24/7 for consultations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 group">
                  <Clock className="w-5 h-5 text-accent-foreground group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Response Time</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Within 2-4 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-accent-foreground group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Consultation</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">Free strategy session</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <Zap className="w-5 h-5 text-accent-foreground group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Project Start</p>
                    <p className="text-xs sm:text-sm text-primary-foreground/80">As fast as 24 hours</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-primary-foreground/20">
                  <h4 className="font-medium mb-3 text-sm sm:text-base">What You'll Get:</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/90">
                    <li className="flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover:text-white transition-colors duration-200">Detailed project analysis</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover:text-white transition-colors duration-200">Custom strategy roadmap</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover:text-white transition-colors duration-200">Timeline & budget estimate</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover:text-white transition-colors duration-200">No-obligation discussion</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="border border-border shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground text-lg sm:text-xl">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Tell Me About Your Project
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  The more details you provide, the better I can prepare for our consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Primary Service Needed</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wordpress">WordPress Development</SelectItem>
                          <SelectItem value="social-media">Social Media Marketing</SelectItem>
                          <SelectItem value="seo">SEO & Digital Marketing</SelectItem>
                          <SelectItem value="automation">AI Tools & Automation</SelectItem>
                          <SelectItem value="virtual-assistant">Virtual Assistant</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-plus">$10,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-week">Within 1 week</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Consultation Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300"
                    disabled={!formData.name || !formData.email || !formData.message}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule My Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;