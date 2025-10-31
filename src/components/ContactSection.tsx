import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? Let's discuss how I can help.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 lg:p-12 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
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

              <div className="space-y-2">
                <Label htmlFor="service">Service *</Label>
                <Select onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wordpress">WordPress Development</SelectItem>
                    <SelectItem value="social-media">Social Media Marketing</SelectItem>
                    <SelectItem value="seo">SEO & Digital Marketing</SelectItem>
                    <SelectItem value="automation">AI & Automation</SelectItem>
                    <SelectItem value="virtual-assistant">Virtual Assistant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full"
                disabled={!formData.name || !formData.email || !formData.message}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;