import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Target, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-youth-empowerment.jpg";

const Home = () => {
  const scrollToNext = () => {
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Youth Empowerment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Opportunities Chances
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Empowering youth to meet the demands of the global job market through specialized training and innovative development opportunities
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-in-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <Users className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-white/80">Empowered Youth</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <Target className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-white/80">Training Programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-white/80">Strategic Partnerships</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full shadow-elegant transition-smooth hover:shadow-hover"
              >
                Join Us Now
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full transition-smooth"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="text-white hover:text-white/80 transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section id="overview" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Discover Our Impact
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Affiliated with the Ministry of Youth and Sports, we focus on empowering young people to meet global job market demands
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/about" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-elegant hover-lift border-0 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  About Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Meet our leadership team and learn about our mission and values
                </p>
                <ArrowRight className="w-5 h-5 text-primary mx-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/units" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-elegant hover-lift border-0 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  Our Units
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore our specialized organizational units and their programs
                </p>
                <ArrowRight className="w-5 h-5 text-primary mx-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/events" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-elegant hover-lift border-0 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  Events & Activities
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover our training programs, workshops, and competitions
                </p>
                <ArrowRight className="w-5 h-5 text-primary mx-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/partners" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-elegant hover-lift border-0 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  Strategic Partners
                </h3>
                <p className="text-muted-foreground mb-4">
                  Meet our partners and explore collaboration opportunities
                </p>
                <ArrowRight className="w-5 h-5 text-primary mx-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/contact" className="group md:col-span-2 lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-elegant hover-lift border-0 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ready to join us or have questions? Contact our team today
                </p>
                <ArrowRight className="w-5 h-5 text-primary mx-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;