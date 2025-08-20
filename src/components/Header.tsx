import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/bd41d491-0ef4-4bf7-91f9-7e5ff7eab679.png" 
                alt="Kodiak Solutions Limited" 
                className="h-20 md:h-24 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-normal transition-colors duration-200 px-3 py-1 ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="btn-outline-gold"
                asChild
              >
                <a 
                  href="https://wa.me/0710337605" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
              <Button className="btn-hero" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium py-2 ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    className="btn-outline-gold w-full"
                    asChild
                  >
                    <a 
                      href="https://wa.me/0710337605" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </Button>
                  <Button className="btn-hero w-full" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/0710337605"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
    </>
  );
};

export default Header;