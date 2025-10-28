export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  features?: string[];
  inStock?: boolean;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  // Chess Products
  { 
    id: 1, 
    name: "Premium Chess Set with Wooden Board", 
    price: 89.99, 
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&h=600&fit=crop", 
    category: "Chess",
    description: "Elevate your chess experience with this premium wooden chess set. Handcrafted pieces with elegant design.",
    rating: 4.8,
    reviews: 127
  },
  { 
    id: 2, 
    name: "Magnetic Travel Chess Set", 
    price: 34.99, 
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&h=600&fit=crop", 
    category: "Chess",
    description: "Perfect for travel, this magnetic chess set ensures pieces stay in place during your games on the go.",
    rating: 4.5,
    reviews: 89
  },
  { 
    id: 3, 
    name: "Deluxe Tournament Chess Set", 
    price: 149.99, 
    image: "https://images.unsplash.com/photo-1606324319207-c28a5b8d08c6?w=600&h=600&fit=crop", 
    category: "Chess",
    description: "Professional-grade chess set meeting tournament standards with weighted pieces and quality board.",
    rating: 4.9,
    reviews: 203
  },

  // Coding & Robotics
  { 
    id: 4, 
    name: "STEM Coding Robot Kit for Kids", 
    price: 149.99, 
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=600&fit=crop", 
    category: "Coding",
    description: "Introduce children to programming with this interactive robot kit. Supports multiple coding languages.",
    rating: 4.7,
    reviews: 156
  },
  { 
    id: 5, 
    name: "Arduino Starter Kit for Beginners", 
    price: 79.99, 
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=600&h=600&fit=crop", 
    category: "Coding",
    description: "Complete Arduino kit with sensors, motors, and components. Perfect for learning electronics and programming.",
    rating: 4.8,
    reviews: 234
  },
  { 
    id: 6, 
    name: "Advanced Programming Drone", 
    price: 199.99, 
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop", 
    category: "Robotic",
    description: "Programmable drone with camera, advanced flight features, and educational coding interface.",
    rating: 4.6,
    reviews: 98
  },
  { 
    id: 7, 
    name: "Raspberry Pi Robotics Kit", 
    price: 129.99, 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop", 
    category: "Coding",
    description: "Build and program your own robot with Raspberry Pi. Includes motors, sensors, and comprehensive guide.",
    rating: 4.9,
    reviews: 187
  },

  // Arts & Crafts
  { 
    id: 8, 
    name: "Watercolor Art Set - Professional Grade", 
    price: 45.99, 
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop", 
    category: "Arts & Crafts",
    description: "Premium watercolor set with 48 vibrant colors, brushes, and high-quality paper pad.",
    rating: 4.7,
    reviews: 312
  },
  { 
    id: 9, 
    name: "Professional Art Supplies Kit", 
    price: 99.99, 
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Complete art studio in a box with pencils, paints, brushes, canvas, and more.",
    rating: 4.8,
    reviews: 267
  },
  { 
    id: 10, 
    name: "Polymer Clay Sculpting Set", 
    price: 39.99, 
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=600&fit=crop", 
    category: "Arts & Crafts",
    description: "Create amazing sculptures with this polymer clay set. Includes 24 colors and sculpting tools.",
    rating: 4.6,
    reviews: 145
  },
  { 
    id: 11, 
    name: "Deluxe Drawing Pencil Set", 
    price: 29.99, 
    image: "https://images.unsplash.com/photo-1511070077659-1894e83e0dd7?w=600&h=600&fit=crop", 
    category: "Arts & Crafts",
    description: "Professional drawing pencils in various grades with sketchbook and accessories.",
    rating: 4.7,
    reviews: 423
  },

  // Board Games
  { 
    id: 12, 
    name: "Strategy Board Game Collection", 
    price: 59.99, 
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&h=600&fit=crop", 
    category: "Games",
    description: "Three classic strategy games in one collection. Perfect for family game nights.",
    rating: 4.8,
    reviews: 289
  },
  { 
    id: 13, 
    name: "Cooperative Adventure Board Game", 
    price: 49.99, 
    image: "https://images.unsplash.com/photo-1606327054629-64c8b7c0e9f0?w=600&h=600&fit=crop", 
    category: "Games",
    description: "Work together to win! Engaging cooperative gameplay for 2-6 players.",
    rating: 4.9,
    reviews: 356
  },
  { 
    id: 14, 
    name: "Classic Tabletop Games Bundle", 
    price: 79.99, 
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&h=600&fit=crop", 
    category: "Dexterity",
    description: "Five timeless tabletop games including checkers, backgammon, and more.",
    rating: 4.6,
    reviews: 198
  },
  { 
    id: 15, 
    name: "Medieval Strategy Board Game", 
    price: 69.99, 
    image: "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?w=600&h=600&fit=crop", 
    category: "Games",
    description: "Build kingdoms and conquer territories in this immersive medieval strategy game.",
    rating: 4.8,
    reviews: 412
  },

  // Brain Teasers & Puzzles
  { 
    id: 16, 
    name: "3D Puzzle Brain Teaser", 
    price: 34.99, 
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=600&fit=crop", 
    category: "Brain Teasers",
    description: "Challenge your spatial reasoning with this intricate 3D puzzle. Multiple difficulty levels.",
    rating: 4.5,
    reviews: 167
  },
  { 
    id: 17, 
    name: "Metal Puzzle Collection", 
    price: 24.99, 
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop", 
    category: "Brain Teasers",
    description: "Set of 10 metal brain teasers ranging from beginner to expert difficulty.",
    rating: 4.6,
    reviews: 234
  },
  { 
    id: 18, 
    name: "Wooden Logic Puzzle Set", 
    price: 44.99, 
    image: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=600&h=600&fit=crop", 
    category: "Brain Teasers",
    description: "Beautifully crafted wooden puzzles that challenge logic and problem-solving skills.",
    rating: 4.7,
    reviews: 189
  },
  { 
    id: 19, 
    name: "Rubik's Cube Speed Set", 
    price: 29.99, 
    image: "https://images.unsplash.com/photo-1566895291190-2e4f4f6d36e7?w=600&h=600&fit=crop", 
    category: "Brain Teasers",
    description: "Professional speed cube with smooth turning and precision design.",
    rating: 4.8,
    reviews: 567
  },

  // Card Games
  { 
    id: 20, 
    name: "Deluxe Card Game Collection", 
    price: 39.99, 
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop", 
    category: "Card Games",
    description: "Premium card deck with gold foiling and luxury carrying case.",
    rating: 4.7,
    reviews: 298
  },
  { 
    id: 21, 
    name: "Strategy Card Game Bundle", 
    price: 49.99, 
    image: "https://images.unsplash.com/photo-1611641297122-0a58c7a84548?w=600&h=600&fit=crop", 
    category: "Card Games",
    description: "Three popular strategy card games with expansion packs included.",
    rating: 4.8,
    reviews: 423
  },
  { 
    id: 22, 
    name: "Premium Card Game Sleeves (100 Pack)", 
    price: 12.99, 
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=600&h=600&fit=crop", 
    category: "Card Sleeves",
    description: "Protect your valuable cards with these high-quality, crystal-clear sleeves.",
    rating: 4.6,
    reviews: 789
  },
  { 
    id: 23, 
    name: "Family Card Game Mega Pack", 
    price: 34.99, 
    image: "https://images.unsplash.com/photo-1609786502180-212c4a3cdf9c?w=600&h=600&fit=crop", 
    category: "Card Games",
    description: "Five family-friendly card games suitable for all ages. Hours of entertainment!",
    rating: 4.9,
    reviews: 634
  },

  // Building & Construction
  { 
    id: 24, 
    name: "Educational Building Blocks Set", 
    price: 54.99, 
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop", 
    category: "Games",
    description: "500-piece building block set with instruction booklet for 50+ creations.",
    rating: 4.8,
    reviews: 512
  },
  { 
    id: 25, 
    name: "Magnetic Building Tiles Set", 
    price: 69.99, 
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop", 
    category: "Games",
    description: "100-piece magnetic tile set for creating 3D structures. Includes idea booklet.",
    rating: 4.9,
    reviews: 678
  },
  { 
    id: 26, 
    name: "Engineering Building Kit", 
    price: 89.99, 
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=600&fit=crop", 
    category: "Games",
    description: "Build working models of bridges, cranes, and machines. Includes 400+ pieces.",
    rating: 4.7,
    reviews: 345
  },

  // Gaming Accessories
  { 
    id: 27, 
    name: "Gaming Accessories Bundle", 
    price: 129.99, 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop", 
    category: "Gaming",
    description: "Complete gaming accessory set with dice, counters, card holders, and storage.",
    rating: 4.8,
    reviews: 267
  },
  { 
    id: 28, 
    name: "Deluxe Dice Collection", 
    price: 24.99, 
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop", 
    category: "Gaming",
    description: "50+ premium gaming dice in various colors and styles with carrying case.",
    rating: 4.7,
    reviews: 456
  },
  { 
    id: 29, 
    name: "Gaming Play Mat XL", 
    price: 39.99, 
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=600&fit=crop", 
    category: "Gaming",
    description: "Extra-large play mat with non-slip backing. Perfect for card and board games.",
    rating: 4.6,
    reviews: 289
  },
  { 
    id: 30, 
    name: "Card Organizer Storage Box", 
    price: 44.99, 
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=600&fit=crop", 
    category: "Gaming",
    description: "Premium wooden storage box for organizing card game collections. Holds 1000+ cards.",
    rating: 4.8,
    reviews: 234
  },

  // Educational Toys
  { 
    id: 31, 
    name: "Science Experiment Kit", 
    price: 59.99, 
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "50+ hands-on science experiments with all materials included. Age 8+.",
    rating: 4.9,
    reviews: 423
  },
  { 
    id: 32, 
    name: "Geography Learning Globe", 
    price: 49.99, 
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Interactive learning globe with LED lighting and detailed country information.",
    rating: 4.7,
    reviews: 312
  },
  { 
    id: 33, 
    name: "Math Learning Board Game", 
    price: 34.99, 
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=600&h=600&fit=crop", 
    category: "Games",
    description: "Make math fun with this engaging board game. Multiple skill levels included.",
    rating: 4.6,
    reviews: 267
  },
  { 
    id: 34, 
    name: "Telescope for Kids", 
    price: 119.99, 
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Beginner-friendly telescope perfect for exploring the night sky. Includes star map.",
    rating: 4.8,
    reviews: 198
  },
  { 
    id: 35, 
    name: "Microscope Science Kit", 
    price: 79.99, 
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Quality microscope with prepared slides and blank slides for experiments.",
    rating: 4.7,
    reviews: 234
  },
  { 
    id: 36, 
    name: "Solar System Model Kit", 
    price: 44.99, 
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Build and paint your own solar system model. Educational and decorative.",
    rating: 4.8,
    reviews: 345
  },

  // More Arts & Crafts
  { 
    id: 37, 
    name: "Acrylic Paint Set - 48 Colors", 
    price: 35.99, 
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop", 
    category: "Arts & Crafts",
    description: "Professional quality acrylic paints in vibrant colors. Perfect for canvas, wood, and mixed media projects. Non-toxic and quick-drying formula suitable for artists of all ages.",
    features: ["48 rich, vibrant colors", "Non-toxic and safe", "Quick-drying formula", "Works on multiple surfaces"],
    rating: 4.9,
    reviews: 456,
    inStock: true
  },
  { 
    id: 38, 
    name: "Origami Paper Collection", 
    price: 18.99, 
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=600&fit=crop", 
    category: "Arts & Crafts",
    description: "Premium origami paper set with 500 sheets in various patterns and colors. Includes instruction booklet with 30 origami projects from beginner to advanced level.",
    features: ["500 premium sheets", "Multiple patterns and colors", "Instruction booklet included", "Acid-free paper"],
    rating: 4.7,
    reviews: 234,
    inStock: true
  },
  { 
    id: 39, 
    name: "Calligraphy Pen Set", 
    price: 42.99, 
    image: "https://images.unsplash.com/photo-1511070077659-1894e83e0dd7?w=600&h=600&fit=crop", 
    category: "Arts & Crafts",
    description: "Complete calligraphy set with 12 premium pens, multiple nib sizes, ink bottles in 6 colors, and practice sheets. Perfect for beginners and experienced calligraphers alike.",
    features: ["12 professional pens", "6 ink colors", "Multiple nib sizes", "Practice sheets included"],
    rating: 4.8,
    reviews: 178,
    inStock: true
  },
  { 
    id: 40, 
    name: "Embroidery Starter Kit", 
    price: 29.99, 
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop", 
    category: "Arts & Crafts",
    description: "Everything you need to start embroidery! Includes hoops, needles, embroidery floss in 50 colors, fabric, and pattern templates. Perfect for creating beautiful handmade decorations.",
    features: ["50 embroidery floss colors", "3 bamboo hoops included", "Pattern templates", "Complete beginner guide"],
    rating: 4.6,
    reviews: 312,
    inStock: true
  },

  // More Coding & Robotics
  { 
    id: 41, 
    name: "AI Machine Learning Kit for Kids", 
    price: 179.99, 
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=600&fit=crop", 
    category: "Coding",
    description: "Introduce kids to artificial intelligence and machine learning with hands-on projects. Build and train AI models, create smart devices, and learn computer vision basics.",
    features: ["AI and ML projects", "Visual programming interface", "Camera module included", "20+ guided lessons"],
    rating: 4.9,
    reviews: 145,
    inStock: true
  },
  { 
    id: 42, 
    name: "Programmable LED Matrix Kit", 
    price: 64.99, 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop", 
    category: "Coding",
    description: "Create stunning light displays with this programmable LED matrix. Learn coding concepts while building games, animations, and interactive art. Compatible with multiple programming languages.",
    features: ["64x64 LED matrix", "Multiple programming languages", "Pre-built animations", "USB powered"],
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  { 
    id: 43, 
    name: "Smart Home Automation Kit", 
    price: 139.99, 
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=600&fit=crop", 
    category: "Robotic",
    description: "Build your own smart home system! Control lights, temperature, and security with voice commands and mobile app. Learn IoT, sensors, and home automation programming.",
    features: ["Complete IoT system", "Voice control ready", "Mobile app included", "Multiple sensors"],
    rating: 4.8,
    reviews: 167,
    inStock: true
  },

  // More Chess Products
  { 
    id: 44, 
    name: "Electronic Chess Training Computer", 
    price: 119.99, 
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&h=600&fit=crop", 
    category: "Chess",
    description: "Advanced chess computer with multiple difficulty levels, opening book library, and analysis mode. Perfect for improving your chess skills with instant feedback and coaching tips.",
    features: ["10 difficulty levels", "Opening book library", "Game analysis", "Take-back moves"],
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  { 
    id: 45, 
    name: "Luxury Chess & Backgammon Set", 
    price: 169.99, 
    image: "https://images.unsplash.com/photo-1606324319207-c28a5b8d08c6?w=600&h=600&fit=crop", 
    category: "Chess",
    description: "Premium 2-in-1 game set with hand-carved wooden pieces. Features chess on one side and backgammon on the reverse. Includes storage for all pieces in luxury wooden case.",
    features: ["2 games in 1", "Hand-carved pieces", "Premium wood construction", "Storage compartments"],
    rating: 4.9,
    reviews: 156,
    inStock: true
  },

  // More Brain Teasers
  { 
    id: 46, 
    name: "Ultimate Puzzle Box Collection", 
    price: 54.99, 
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=600&fit=crop", 
    category: "Brain Teasers",
    description: "Collection of 15 intricate puzzle boxes with hidden mechanisms and secret compartments. Each box requires different solving strategies. Great for developing problem-solving skills.",
    features: ["15 unique puzzle boxes", "Various difficulty levels", "Hidden compartments", "Quality wood construction"],
    rating: 4.7,
    reviews: 289,
    inStock: true
  },
  { 
    id: 47, 
    name: "Mechanical Puzzle Cube Set", 
    price: 39.99, 
    image: "https://images.unsplash.com/photo-1566895291190-2e4f4f6d36e7?w=600&h=600&fit=crop", 
    category: "Brain Teasers",
    description: "Set of 6 mechanical puzzle cubes including 2x2, 3x3, 4x4, Pyraminx, Megaminx, and Mirror cube. Smooth turning mechanism and vibrant colors. Includes solving guide.",
    features: ["6 different cube types", "Smooth mechanism", "Speed cube quality", "Solution guide included"],
    rating: 4.8,
    reviews: 567,
    inStock: true
  },

  // More Card Games
  { 
    id: 48, 
    name: "Fantasy Card Game Starter Set", 
    price: 59.99, 
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop", 
    category: "Card Games",
    description: "Complete starter set for the ultimate fantasy card game. Includes 200 cards, playmat, dice, and rule book. Build powerful decks and battle opponents in strategic gameplay.",
    features: ["200+ premium cards", "Playmat included", "Dice and counters", "Comprehensive rulebook"],
    rating: 4.9,
    reviews: 445,
    inStock: true
  },
  { 
    id: 49, 
    name: "Classic Card Game Compendium", 
    price: 44.99, 
    image: "https://images.unsplash.com/photo-1611641297122-0a58c7a84548?w=600&h=600&fit=crop", 
    category: "Card Games",
    description: "Everything needed to play 50+ classic card games. Includes multiple premium decks, poker chips, rule book, and score pads. Perfect for family game nights.",
    features: ["4 premium card decks", "Poker chip set", "50+ game rules", "Score pads included"],
    rating: 4.6,
    reviews: 378,
    inStock: true
  },

  // More Card Sleeves & Accessories
  { 
    id: 50, 
    name: "Ultra-Pro Card Sleeves Mega Pack", 
    price: 24.99, 
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?w=600&h=600&fit=crop", 
    category: "Card Sleeves",
    description: "Premium card protection sleeves in pack of 200. Ultra-clear, acid-free material that won't damage cards. Fits standard card sizes perfectly. Essential for collectors.",
    features: ["200 sleeves", "Ultra-clear material", "Acid-free", "Perfect fit"],
    rating: 4.8,
    reviews: 892,
    inStock: true
  },
  { 
    id: 51, 
    name: "Premium Card Storage Box", 
    price: 34.99, 
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=600&fit=crop", 
    category: "Card Sleeves",
    description: "Professional-grade storage solution for card collections. Holds up to 800 sleeved cards with adjustable dividers. Durable construction with secure locking mechanism.",
    features: ["Holds 800+ cards", "Adjustable dividers", "Secure locking lid", "Durable construction"],
    rating: 4.7,
    reviews: 423,
    inStock: true
  },

  // More Board Games
  { 
    id: 52, 
    name: "Economic Strategy Board Game", 
    price: 89.99, 
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&h=600&fit=crop", 
    category: "Games",
    description: "Complex economic simulation game where players build businesses, trade resources, and compete for market dominance. Deep strategy with multiple paths to victory. 2-6 players.",
    features: ["Deep strategic gameplay", "2-6 players", "Multiple victory paths", "High replay value"],
    rating: 4.9,
    reviews: 534,
    inStock: true
  },
  { 
    id: 53, 
    name: "Tile-Laying Civilization Game", 
    price: 64.99, 
    image: "https://images.unsplash.com/photo-1606327054629-64c8b7c0e9f0?w=600&h=600&fit=crop", 
    category: "Games",
    description: "Build civilizations by strategically placing tiles to create cities, roads, and farms. Easy to learn but offers deep strategic possibilities. Award-winning gameplay.",
    features: ["Easy to learn", "Strategic depth", "Beautiful artwork", "Expandable"],
    rating: 4.8,
    reviews: 678,
    inStock: true
  },

  // More Gaming Accessories
  { 
    id: 54, 
    name: "Deluxe Gaming Table Mat", 
    price: 49.99, 
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=600&fit=crop", 
    category: "Gaming",
    description: "Professional-quality gaming mat with stitched edges and non-slip rubber backing. Extra-large size accommodates multiple game setups. Soft neoprene surface protects cards and components.",
    features: ["Stitched edges", "Non-slip backing", "Extra-large size", "Neoprene surface"],
    rating: 4.8,
    reviews: 412,
    inStock: true
  },
  { 
    id: 55, 
    name: "Premium Metal Dice Set Collection", 
    price: 69.99, 
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop", 
    category: "Gaming",
    description: "Stunning collection of metal dice in multiple colors and styles. Includes d4, d6, d8, d10, d12, d20 sets. Comes with premium storage case and rolling tray.",
    features: ["Multiple metal dice sets", "Various colors", "Storage case included", "Rolling tray"],
    rating: 4.9,
    reviews: 523,
    inStock: true
  },

  // More Educational Supplies
  { 
    id: 56, 
    name: "Advanced Chemistry Lab Kit", 
    price: 129.99, 
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Complete chemistry laboratory for home experimentation. Includes beakers, test tubes, chemicals, safety equipment, and 100+ experiments. Perfect for budding scientists ages 12+.",
    features: ["100+ experiments", "Safety equipment included", "Real lab equipment", "Comprehensive guide"],
    rating: 4.9,
    reviews: 367,
    inStock: true
  },
  { 
    id: 57, 
    name: "Digital Drawing Tablet for Kids", 
    price: 89.99, 
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Introduce children to digital art with this pressure-sensitive drawing tablet. Includes stylus, drawing software, and tutorials. Compatible with computers and tablets.",
    features: ["Pressure-sensitive", "Software included", "Tutorials provided", "USB compatible"],
    rating: 4.7,
    reviews: 445,
    inStock: true
  },
  { 
    id: 58, 
    name: "World Atlas Educational Globe", 
    price: 79.99, 
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=600&h=600&fit=crop", 
    category: "Supplies",
    description: "Interactive illuminated globe with detailed cartography, country information, and geographical features. Touch-activated information display. Perfect for learning world geography.",
    features: ["Illuminated display", "Touch-activated", "Detailed cartography", "Country information"],
    rating: 4.8,
    reviews: 289,
    inStock: true
  },

  // More Dexterity Games
  { 
    id: 59, 
    name: "Stacking Balance Game Tower", 
    price: 32.99, 
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&h=600&fit=crop", 
    category: "Dexterity",
    description: "Classic block stacking game with 54 precision-cut wooden blocks. Carefully remove blocks and stack them on top without toppling the tower. Great for developing fine motor skills.",
    features: ["54 wooden blocks", "Precision cut", "Storage bag included", "All ages"],
    rating: 4.7,
    reviews: 634,
    inStock: true
  },
  { 
    id: 60, 
    name: "Speed Cups Championship Set", 
    price: 27.99, 
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&h=600&fit=crop", 
    category: "Dexterity",
    description: "Fast-paced pattern recognition and stacking game. Race to arrange colored cups according to challenge cards. Improves reaction time and spatial awareness. 2-4 players.",
    features: ["Fast-paced gameplay", "Pattern recognition", "2-4 players", "Challenge cards"],
    rating: 4.6,
    reviews: 398,
    inStock: true
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};
