import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Target, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/bg2.jpg";
import webinar from "@/assets/Webinar.png";

const Home = () => {
  const scrollToNext = () => {
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative md:h-[80vh] lg:h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Youth Empowerment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="text-left max-w-xl ml-4 md:ml-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Opportunities Makers
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90">
              Unlocking potential and building leaders of tomorrow.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20 ">
          <button
            onClick={scrollToNext}
            className="text-white hover:text-white/80 transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </section>

{/* Webinar Section */}
<div className="flex bg-primary/80 backdrop-blur-md border rounded-3xl py-6 px-8 text-white lg:w-[60%] mt-10 mx-auto shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative">
  <div className="animate-fadeIn flex-1">
    <h4 className="mb-2 text-sm opacity-90">Your Next Webinar</h4>
    <h2 className="text-2xl mb-5 font-semibold tracking-wide animate-slideDown">
      Negotiating and Communicating Skills
    </h2>

    {/* Row 1: Date + Speaker */}
<div className="flex gap-8 mb-16">
  <div className="flex flex-col gap-4">
    {/* Date */}
    <div className="flex items-center animate-slideRight">
      <svg
        className="text-white mr-2 w-[1.125rem] h-[1.125rem]"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0.625C5 0.45924 4.93415 0.300269 4.81694 0.183058C4.69973 0.065848 4.54076 0 4.375 0C4.20924 0 4.05027 0.065848 3.93306 0.183058C3.81585 0.300269 3.75 0.45924 3.75 0.625V1.25H2.5C1.83696 1.25 1.20107 1.51339 0.732233 1.98223C0.263392 2.45107 0 3.08696 0 3.75L0 5H20V3.75C20 3.08696 19.7366 2.45107 19.2678 1.98223C18.7989 1.51339 18.163 1.25 17.5 1.25H16.25V0.625C16.25 0.45924 16.1842 0.300269 16.0669 0.183058C15.9497 0.065848 15.7908 0 15.625 0C15.4592 0 15.3003 0.065848 15.1831 0.183058C15.0658 0.300269 15 0.45924 15 0.625V1.25H5V0.625Z"
          fill="#b4b4b4"
        />
      </svg>
      <h1 className="text-lg">2025-09-20</h1>
    </div>

    {/* Time */}
    <div className="flex items-center animate-slideRight">
      <svg
        className="text-white mr-2 w-[1.125rem] h-[1.125rem]"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10Z"
          fill="#D3D2D2"
        />
      </svg>
      <h1 className="text-lg">20:00:00</h1>
    </div>
  </div>

  <div className="flex flex-col gap-4">
    {/* Speaker */}
    <div className="flex items-center animate-slideLeft">
      <svg
        className="text-white mr-2 w-[1.125rem] h-[1.125rem]"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 17.5C3.75 17.5 2.5 17.5 2.5 16.25C2.5 15 3.75 11.25 10 11.25C16.25 11.25 17.5 15 17.5 16.25C17.5 17.5 16.25 17.5 16.25 17.5H3.75ZM10 10C10.9946 10 11.9484 9.60491 12.6517 8.90165C13.3549 8.19839 13.75 7.24456 13.75 6.25C13.75 5.25544 13.3549 4.30161 12.6517 3.59835C11.9484 2.89509 10.9946 2.5 10 2.5C9.00544 2.5 8.05161 2.89509 7.34835 3.59835C6.64509 4.30161 6.25 5.25544 6.25 6.25C6.25 7.24456 6.64509 8.19839 7.34835 8.90165C8.05161 9.60491 9.00544 10 10 10Z"
          fill="#D3D2D2"
        />
      </svg>
      <h1 className="text-lg">Omar Abdelhamid</h1>
    </div>

    {/* Extra Date */}
    <div className="flex items-center animate-slideLeft">
      <svg
        className="text-white mr-2 w-[1.125rem] h-[1.125rem]"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="#D3D2D2" />
      </svg>
      <h1 className="text-lg">2025-09-20</h1>
    </div>
  </div>
</div>


    {/* Button */}
    <div className=" absolute bottom-2 left-1  ">
      <button
        onClick={() => window.open("https://zoom.us/your-session-link", "_blank")}
        className="px-6 py-3  bg-white text-primary font-semibold rounded-full shadow-md 
                   hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105"
      >
        Join Session
      </button>
    </div>
  </div>

  {/* Image Side */}
  <div className="md:block hidden ms-auto w-[25vh] animate-fadeIn">
    <img
      src={webinar}
      alt="Webinar Banner"
      className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>


<style>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-fadeIn { animation: fadeIn 1s ease forwards; }
  .animate-slideDown { animation: slideDown 1s ease forwards; }
  .animate-slideRight { animation: slideRight 1s ease forwards; }
  .animate-slideLeft { animation: slideLeft 1s ease forwards; }
`}</style>


      {/* Quick Overview Section */}
      <section id="overview" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Discover Our Impact
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Affiliated with the Ministry of Youth and Sports, we focus on
              empowering young people to meet global job market demands
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
                  Meet our leadership team and learn about our mission and
                  values
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
                  Explore our specialized organizational units and their
                  programs
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
