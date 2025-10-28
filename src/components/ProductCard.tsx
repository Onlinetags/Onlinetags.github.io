import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category: category || "" });
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-large transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      
      <div className="p-4">
        {category && (
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        )}
        
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-foreground mt-1 group-hover:text-accent transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-foreground">
            ${price.toFixed(2)}
          </span>
          
          <Button 
            size="icon"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
