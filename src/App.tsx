import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Units from "./pages/Units";
import Events from "./pages/Events";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import logo from "@/assets/logo.png"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background font-inter">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/units" element={<Units />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Footer */}
<footer className="bg-primary text-primary-foreground py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      {/* Logo & Description */}
      <div className="md:col-span-2">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
 <img 
        src={logo}
        alt="Opportunities Chances Logo" 
        className="h-15 w-auto"
      />          </div>
          <div>
            <h3 className="text-xl font-bold">Opportunities Makers</h3>
            <p className="text-primary-foreground/80">Ministry of Youth and Sports</p>
          </div>
        </div>
        <p className="text-primary-foreground/90 leading-relaxed mb-4">
          A specialized team from the Ministry of Youth and Sports aimed at empowering Saudi youth and preparing them to meet the demands of the global job market through advanced training programs and quality development opportunities.
        </p>
        <div className="text-sm text-primary-foreground/80">
          © 2025 Opportunities Chances - All Rights Reserved
        </div>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-primary-foreground/90">
          <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="/units" className="hover:text-white transition-colors">Units</a></li>
          <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
          <li><a href="/partners" className="hover:text-white transition-colors">Partners</a></li>
          <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      
      {/* Contact Info */}
      <div>
        <h4 className="font-bold mb-4">Contact Information</h4>
        <div className="space-y-2 text-primary-foreground/90 text-sm">
          <p>Cairo Egypt</p>
          <p>+966 11 123 4567</p>
          <p>info@opportunitieschances.sa</p>
          <p>Sunday - Thursday: 8:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  </div>
</footer>

        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
