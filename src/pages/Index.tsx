import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCircle from "@/components/CategoryCircle";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    { name: "Games", image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=400&fit=crop", link: "/categories/games" },
    { name: "Arts & Crafts", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop", link: "/categories/arts-crafts" },
    { name: "Coding", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=400&fit=crop", link: "/categories/coding" },
    { name: "Brain Teasers", image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=400&fit=crop", link: "/categories/brain-teasers" },
    { name: "Card Sleeves", image: "https://images.unsplash.com/photo-1611641297122-0a58c7a84548?w=400&h=400&fit=crop", link: "/categories/card-sleeves" },
    { name: "Card Games", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop", link: "/categories/card-games" },
    { name: "Dexterity", image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop", link: "/categories/dexterity" },
    { name: "Chess", image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=400&fit=crop", link: "/categories/chess" },
    { name: "Robotic", image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop", link: "/categories/robotic" },
    { name: "Supplies", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop", link: "/categories/supplies" },
    { name: "Gaming", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop", link: "/categories/gaming" },
  ];

  const featuredProducts = [
    { id: 1, name: "Premium Chess Set with Wooden Board", price: 89.99, image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&h=600&fit=crop", category: "Chess" },
    { id: 2, name: "STEM Coding Robot Kit for Kids", price: 149.99, image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=600&fit=crop", category: "Coding" },
    { id: 3, name: "Watercolor Art Set - Professional Grade", price: 45.99, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop", category: "Arts & Crafts" },
    { id: 4, name: "Strategy Board Game Collection", price: 59.99, image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&h=600&fit=crop", category: "Games" },
    { id: 5, name: "3D Puzzle Brain Teaser", price: 34.99, image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=600&fit=crop", category: "Brain Teasers" },
    { id: 6, name: "Premium Card Game Sleeves (100 Pack)", price: 12.99, image: "https://images.unsplash.com/photo-1611641297122-0a58c7a84548?w=600&h=600&fit=crop", category: "Card Sleeves" },
    { id: 7, name: "Classic Tabletop Games Bundle", price: 79.99, image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&h=600&fit=crop", category: "Dexterity" },
    { id: 8, name: "Educational Building Blocks Set", price: 54.99, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop", category: "Games" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Category Navigation */}
        <section className="bg-white py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
              {categories.map((category) => (
                <CategoryCircle
                  key={category.name}
                  name={category.name}
                  image={category.image}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <span className="text-sm font-medium text-foreground/80 uppercase tracking-wider mb-4 block">
                myFirst Camera 50
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Camera for Next-Generation Storytellers
              </h1>
              <Link to="/shop">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 shadow-large">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
                <p className="text-muted-foreground mt-2">Discover our most popular educational toys and games</p>
              </div>
              <Link to="/shop">
                <Button variant="outline" className="hidden md:flex">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link to="/shop">
                <Button variant="outline">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose ToyTag?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground">All our products are carefully selected for quality and educational value</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-muted-foreground">Competitive pricing with regular discounts and special offers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">Free shipping on orders over $500 with quick delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-6 text-white/90">Subscribe to our newsletter for exclusive deals and new product launches</p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-accent hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
