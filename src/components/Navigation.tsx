import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

return (
  <nav className="fixed top-0 w-full z-50 mt-5 transition-all duration-300">
<div
  className={`container mx-auto px-4 py-4 rounded-full transition-all duration-300 border border-[#680F67] shadow-lg ${
    isScrolled
      ? "bg-background/95 backdrop-blur-sm"   
      : "bg-background/40 backdrop-blur-lg"   
  }`}
>

      <div className="flex items-center justify-between">
        {/* Logo */}
{/* Logo */}
<Link to="/" className="flex items-center space-x-3">
  <img
    src={logo}
    alt="Opportunities Chances Logo"
    className="w-10 h-10 object-cover rounded-full"
  />
  <div className="text-xl font-bold text-primary">
    Opportunities Makers
  </div>
</Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`transition-colors ${
              isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors ${
              isActive("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/units"
            className={`transition-colors ${
              isActive("/units") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            Units
          </Link>
          <Link
            to="/events"
            className={`transition-colors ${
              isActive("/events") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            Events
          </Link>
          <Link
            to="/partners"
            className={`transition-colors ${
              isActive("/partners") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            Partners
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${
              isActive("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors text-left ${
                isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors text-left ${
                isActive("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/units"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors text-left ${
                isActive("/units") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Units
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors text-left ${
                isActive("/events") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Events
            </Link>
            <Link
              to="/partners"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors text-left ${
                isActive("/partners") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Partners
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors text-left ${
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  </nav>
);

};

export default Navigation;