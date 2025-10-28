import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    { 
      name: "Board Games", 
      image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&h=400&fit=crop",
      link: "/categories/games",
      count: 156
    },
    { 
      name: "Arts & Crafts", 
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
      link: "/categories/arts-crafts",
      count: 89
    },
    { 
      name: "Coding & Robotics", 
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
      link: "/categories/coding",
      count: 45
    },
    { 
      name: "Brain Teasers", 
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop",
      link: "/categories/brain-teasers",
      count: 72
    },
    { 
      name: "Card Games", 
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      link: "/categories/card-games",
      count: 103
    },
    { 
      name: "Chess", 
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&h=400&fit=crop",
      link: "/categories/chess",
      count: 34
    },
    { 
      name: "Dexterity Games", 
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&h=400&fit=crop",
      link: "/categories/dexterity",
      count: 28
    },
    { 
      name: "Gaming Accessories", 
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      link: "/categories/gaming",
      count: 67
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">Product Categories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse collection of educational toys, games, and creative learning products organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={category.link}>
              <Card className="group overflow-hidden border-border hover:shadow-large transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden bg-secondary">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} products
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Categories Info */}
        <section className="mt-20">
          <div className="bg-gradient-accent rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Our team is always happy to help you find the perfect educational toy or game for your needs
              </p>
              <Link to="/contact">
                <button className="bg-white text-accent font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
