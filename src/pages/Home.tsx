import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Target, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/bg2.jpg";

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
          <div className="absolute inset-0 gradient-hero opacity-0" />
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