import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm font-medium">
        🇺🇸 UNITED STATES (US) | 🚚 Free US Shipping on orders $500
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity">
              TOYTAG
            </Link>
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input 
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-full pl-4 pr-12 py-2 rounded-full bg-white text-foreground border-0"
                />
                <Button 
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full hover:bg-accent"
                >
                  <Search className="h-4 w-4 text-foreground" />
                </Button>
              </div>
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link to="/auth">
                <Button variant="ghost" className="hidden md:flex items-center gap-2 text-primary-foreground hover:text-primary-foreground hover:bg-primary/90">
                  <User className="h-5 w-5" />
                  <span>Sign in / Register</span>
                </Button>
              </Link>
              
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative text-primary-foreground hover:text-primary-foreground hover:bg-primary/90">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary-foreground/20">
              <div className="space-y-4">
                <Input 
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-full bg-white text-foreground"
                />
                <Link to="/auth" className="block py-2 hover:text-accent transition-colors">
                  Sign in / Register
                </Link>
                <Link to="/shop" className="block py-2 hover:text-accent transition-colors">
                  Shop All
                </Link>
                <Link to="/categories" className="block py-2 hover:text-accent transition-colors">
                  Categories
                </Link>
                <Link to="/about" className="block py-2 hover:text-accent transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block py-2 hover:text-accent transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
