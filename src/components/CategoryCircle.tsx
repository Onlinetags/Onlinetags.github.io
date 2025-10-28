import { Link } from "react-router-dom";

interface CategoryCircleProps {
  name: string;
  image: string;
  link: string;
}

const CategoryCircle = ({ name, image, link }: CategoryCircleProps) => {
  return (
    <Link to={link} className="flex flex-col items-center group">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-secondary shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-105">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="mt-3 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
        {name}
      </span>
    </Link>
  );
};

export default CategoryCircle;
