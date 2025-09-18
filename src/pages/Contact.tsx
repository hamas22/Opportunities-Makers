import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaTiktok } from "react-icons/fa";

import { 
  Phone, 
  Mail, 
  Send, 
  MessageSquare, 
  Users, 
  Target,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // هنا المفروض تبعت الداتا للباك إند
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+20 115 523 0257",
      infoEn: "24/7 Support Available",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us", 
      info: "info@opportunitieschances.sa",
      infoEn: "We reply within 24 hours",
      color: "from-purple-500 to-purple-600"
    },
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/theopportunities-makers",  color: "hover:text-blue-600" },
    { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/TheOpportunitiesMakers", color: "hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-500" },
    { icon: FaTiktok, name: "Tiktok", url: "https://www.tiktok.com/@the.opportunities.makers", color: "hover:text-red-600" }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "Get a free consultation about development opportunities",
      cta: "Book Appointment"
    },
    {
      icon: Users,
      title: "Join Our Team",
      description: "Apply to join the Opportunities Chances team",
      cta: "Apply Now"
    },
    {
      icon: Target,
      title: "Strategic Partnership",
      description: "Learn about partnership and collaboration opportunities",
      cta: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-gradient-card relative overflow-hidden">
        {/* خلفية بسيطة */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* العنوان */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              We're here to help you on your journey towards development and professional growth. Don't hesitate to reach out to us
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 hover-lift shadow-elegant border-0 bg-white group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {method.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-1">
                  {method.info}
                </p>
                <p className="text-xs text-muted-foreground">
                  {method.infoEn}
                </p>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
{/* Contact Form */}
<Card className="p-6 shadow-lg border border-purple-800 bg-white rounded-2xl">
  <h3 className="text-3xl font-extrabold text-primary mb-8 border-b border-gray-200 pb-4">
    Send Message
  </h3>
  <form onSubmit={handleSubmit} className="space-y-8 text-lg">
    
    {/* Name & Email */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <label className="block text-base font-semibold text-primary">
          Full Name *
        </label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
          className="h-12 text-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg"
        />
      </div>
      <div className="space-y-3">
        <label className="block text-base font-semibold text-primary">
          Email Address *
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@email.com"
          required
          className="h-12 text-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg"
        />
      </div>
    </div>

    {/* Phone & Subject */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <label className="block text-base font-semibold text-primary">
          Phone Number
        </label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+20 1XX XXX XXX"
          className="h-12 text-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg"
        />
      </div>
      <div className="space-y-3">
        <label className="block text-base font-semibold text-primary">
          Subject *
        </label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Message subject"
          required
          className="h-12 text-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg"
        />
      </div>
    </div>

    {/* Message */}
    <div className="space-y-3">
      <label className="block text-base font-semibold text-primary">
        Message *
      </label>
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Write your message here..."
        rows={6}
        required
        className="text-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg resize-none"
      />
    </div>

    {/* Submit Button */}
    <Button
      type="submit"
      className="w-full h-14 text-lg gradient-primary text-white font-semibold hover:shadow-xl transition-all group rounded-lg"
    >
      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
      Send Message
    </Button>
  </form>
</Card>



            {/* Quick Actions & Social */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="p-6 shadow-elegant border-0 bg-white">
                <h3 className="text-xl font-bold text-primary mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-100 rounded-lg hover:border-primary/20 hover:bg-primary/5 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-start space-x-3">
                        <action.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">
                            {action.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {action.description}
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white text-xs"
                          >
                            {action.cta}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 shadow-elegant border-0 bg-white">
                <h3 className="text-xl font-bold text-primary mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-3 border border-gray-100 rounded-lg hover:border-primary/20 transition-colors group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 shadow-elegant border-0 bg-white">
                <h3 className="text-xl font-bold text-primary mb-4">Newsletter</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Subscribe to our newsletter to be the first to know about our latest programs and opportunities
                </p>
                <div className="flex gap-2">
                  <Input 
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 border-gray-200 focus:border-primary"
                  />
                  <Button className="gradient-primary text-white">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
