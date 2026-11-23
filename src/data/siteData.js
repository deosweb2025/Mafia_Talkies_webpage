// Real image imports from assets/images
import pic1 from '../assets/images/pic1.jpeg';
import pic2 from '../assets/images/pic2.jpeg';
import pic3 from '../assets/images/pic3.jpeg';
import musicScreenImg from '../assets/images/music_screen_lounge.jpg';
import pic5 from '../assets/images/pic5.jpeg';
import pic6 from '../assets/images/pic6.jpeg';
import pic7 from '../assets/images/pic7.jpeg';
import pic8 from '../assets/images/pic8.jpeg';
import pic9 from '../assets/images/pic9.jpeg';
import pic10 from '../assets/images/pic10.jpeg';
import pic11 from '../assets/images/pic11.jpeg';
import pic12 from '../assets/images/pic12.jpeg';
import pic13 from '../assets/images/pic13.jpeg';
import mocktailBarImg from '../assets/images/mocktail_bar_lounge.jpg';
import pic14 from '../assets/images/pic14.jpeg';
import pic15 from '../assets/images/pic15.jpeg';

export const siteData = {
  company: {
    name: "MAFIA TALKIES",
    tagline: "Where Cinema Meets Culinary Art",
    shortDescription: "A sanctuary for music video lovers, cafe-goers, and foodies in Kolkata. Step into a world of cinematic charm, artisanal brew, gourmet snacks, and big screen entertainment.",
    established: "Kolkata, WB",
    address: "Arabinda Pally, Vidyasagar Road, Barrackpore Road, Barasat (Opposite Anandabazar Office Gate No. 3), North 24 Parganas, Kolkata, West Bengal 700126",
    landmark: "Opposite Anandabazar Office, Gate No. 3",
    pincode: "700126",
    hours: "Open Daily: 11:00 AM – 10:30 PM",
    rating: "4.8 ★ on Google Reviews",
  },
  contact: {
    phone: "6290664329",
    displayPhone: "+91 62906 64329",
    phoneTel: "tel:+916290664329",
    whatsapp: "6290664329",
    whatsappUrl: "https://wa.me/916290664329?text=Hello%20Mafia%20Talkies!%20I%20would%20like%20to%20reserve%20a%20table%20/%20lounge%20seating.",
    email: "mafiatalkieskolkata@gmail.com",
    mapUrl: "https://maps.app.goo.gl/CMroe4DwhkycZz359",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.596048123456!2d88.4537765!3d22.741932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ0JzMxLjAiTiA4OMKwMjcnMjIuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  social: {
    instagram: "https://instagram.com/mafiatalkies",
    facebook: "https://facebook.com/mafiatalkies",
    googleMap: "https://maps.app.goo.gl/CMroe4DwhkycZz359",
  },
  hero: {
    eyebrow: "THE CINEMATIC CAFE & BISTRO EXPERIENCE",
    title: "MAFIA TALKIES",
    subheading: "A Sanctuary for Film Lovers & Foodies in Kolkata",
    description: "Step into MAFIA TALKIES, a unique cafe experience that transports you to a world of cinematic charm and rich flavours. Enjoy artisanal coffee, delectable snacks, and a vibrant atmosphere inspired by the golden age of cinema.",
    primaryCTA: "Reserve Table / Lounge",
    secondaryCTA: "Explore The Cafe",
    heroImage: pic1,
    featuredImages: [pic1, mocktailBarImg, musicScreenImg, pic7],
  },
  about: {
    title: "The Golden Age of Cinema Meets Modern Gastronomy",
    quote: "We've crafted a space where you can enjoy artisanal coffee, delectable snacks, and a vibrant atmosphere inspired by the golden age of cinema. It's the perfect spot to meet friends, catch up on work, or simply unwind with a good book and a great cup of coffee.",
    details: [
      {
        title: "Cinematic Sanctuary",
        desc: "Designed with fluted wooden acoustic panels, vintage cinema marquee lights, and ambient mood glow for an authentic filmic retreat."
      },
      {
        title: "Big Screen & Music Video Lounge",
        desc: "Equipped with a large projection screen, high-fidelity sound, and club-style lighting for streaming music videos, trending hits, and visual entertainment."
      },
      {
        title: "Artisanal Coffee & Mocktails",
        desc: "From freshly ground espresso roasts to handcrafted mocktails and gourmet snacks served at our gleaming ribbed bar counter."
      },
      {
        title: "Intimate Parisian & Booth Seating",
        desc: "Choose between elegant white & gold bistro tables under crystal chandeliers or plush black leather group booths."
      }
    ],
    images: [pic2, pic15, pic8, mocktailBarImg]
  },
  experience: [
    {
      id: "screening",
      tag: "THE BIG SCREEN",
      title: "Big Screen Music Videos & Entertainment",
      description: "Catch your favorite music videos, trending pop hits, and visual entertainment projected on our large screen, paired with moody neon lighting, surround audio, and cozy lounge seating.",
      image: musicScreenImg,
      imageAlt: "Big projection screen playing music videos at Mafia Talkies cafe lounge",
      features: ["HD Widescreen Projection", "Music Videos & Visuals", "Surround Sound Acoustics", "Comfortable Lounge Seating"]
    },
    {
      id: "vip-lounge",
      tag: "VIP RETREAT",
      title: "Plush Booths & Ambient Mood Glow",
      description: "Settle into deep cushioned leather booths with mirrored glowing tables, warm wood slat walls, and neon cove ceiling illumination.",
      image: pic7,
      imageAlt: "VIP group lounge booths with neon lighting",
      features: ["Private Section Seating", "Ambient RGB Lighting", "Comfortable Leather Cushions", "Ideal for Hangouts & Parties"]
    },
    {
      id: "mocktail-bar",
      tag: "THE BEVERAGE BAR",
      title: "Artisanal Brews, Shakes & Signature Mocktails",
      description: "Our dedicated illuminated bar counter showcases handcrafted mocktails, refreshing cooler blends, and expertly pulled coffee roasts.",
      image: mocktailBarImg,
      imageAlt: "Mocktail bar and counter at Mafia Talkies",
      features: ["Handcrafted Mocktails", "Specialty Coffee Roasts", "Shimmering Stemware Bar", "Custom Drink Menu"]
    },
    {
      id: "bistro-cafe",
      tag: "PARISIAN SALON",
      title: "The Parisian Dining Lounge",
      description: "Sit back under sparkling crystal chandeliers and delicate golden scrollwork chairs for a tranquil afternoon of conversation.",
      image: pic15,
      imageAlt: "The Parisian dining lounge with crystal chandelier",
      features: ["Crystal Chandelier Overhead", "Wrought-Iron Gold Scroll Chairs", "Chic Glass Enclosure", "Work-Friendly Atmosphere"]
    }
  ],
  hookahLounge: {
    title: "VIP Hookah Cafe & Lounge",
    headline: "Good Vibes | Great Smoke | Together Always",
    subheading: "Premium Flavours • Relaxing Ambience • Good Company • Perfect Vibes",
    description: "Step into our moody, cinema-lit private booths for an authentic hookah lounge experience. Handcrafted premium flavours, smooth clouds, and big-screen music video entertainment make every hangout and party special.",
    tag: "Exclusive Experience",
    notice: "Available for Dine-in & Party Bookings",
    features: [
      "Premium International Flavours",
      "Plush Velvet & Leather Booths",
      "Big Screen Music Video Visuals",
      "Ambient Neon & Mood Glow"
    ]
  },
  menuHighlights: [
    {
      category: "Artisanal Coffees & Warm Sips",
      items: [
        { name: "House Espresso Shot", price: 100, isVeg: true, desc: "Intense, dark roasted single shot with thick golden crema", tag: "Signature" },
        { name: "Velvety Cappuccino", price: 100, isVeg: true, desc: "Rich espresso topped with velvety steamed milk foam and cocoa dust", tag: "Popular" },
        { name: "Signature Cold Coffee", price: 150, isVeg: true, desc: "Creamy blended chilled espresso with ice cream and cocoa swirl", tag: "Favorite" },
        { name: "Caffè Americano", price: 100, isVeg: true, desc: "Smooth long black coffee prepared with rich espresso roast", tag: "Classic" },
        { name: "Kolkata Spiced Milk Tea", price: 50, isVeg: true, desc: "Traditional aromatic milk chai brewed fresh with warming spices", tag: "Comfort" },
      ]
    },
    {
      category: "Signature Mocktails & Chillers",
      items: [
        { name: "The Godfather Blue Lagoon", price: 100, isVeg: true, desc: "Electric blue curacao citrus cooler with sprite fizz and lemon wheel", tag: "Must Try" },
        { name: "Virgin Mint Mojito", price: 100, isVeg: true, desc: "Fresh muddled garden mint leaves, lime wedges, cane sugar and chilled soda", tag: "Classic" },
        { name: "Orange Sunrise", price: 100, isVeg: true, desc: "Layered citrus orange juice with grenadine splash over crushed ice", tag: "Signature" },
        { name: "Kala Khatta Mojito", price: 100, isVeg: true, desc: "Tangy Indian blackberry reduction with black salt, cumin and fizz", tag: "Indulgent" },
        { name: "Aam Panna Sparkler", price: 100, isVeg: true, desc: "Traditional roasted raw green mango elixir with mint and black salt", tag: "Refreshing" },
      ]
    },
    {
      category: "Gourmet Chinese & Cinema Munchies",
      items: [
        { name: "Dragon Chicken", price: 250, isVeg: false, desc: "Crispy chicken strips tossed in spicy fiery red dragon sauce with cashew nuts", tag: "Chef's Pick" },
        { name: "Drums of Heaven (4 pcs)", price: 250, isVeg: false, desc: "Frenched chicken winglets tossed in spicy Schezwan garlic sauce", tag: "Signature" },
        { name: "Kolkata Fish Fry", price: 130, isVeg: false, desc: "Classic Kolkata bhetki fillet marinated in green herbs and crumb fried", tag: "Legendary" },
        { name: "Chicken Popcorn", price: 170, isVeg: false, desc: "Bite-sized seasoned chicken crunchy poppers, perfect for movie watching", tag: "Cinema Munchies" },
        { name: "Mafia Zinger Burger", price: 150, isVeg: false, desc: "Super-crispy fried spicy chicken fillet, spicy mayo, pickled gherkins & lettuce", tag: "Hot Seller" },
      ]
    }
  ],
  fullMenu: [
    {
      id: "chinese",
      category: "Chinese Appetizers",
      shortTitle: "Chinese",
      subtitle: "Wok-tossed delicacies infused with garlic, chilies & oriental sauces",
      icon: "Utensils",
      items: [
        { name: "Crispy Fried Babycorn", price: 170, isVeg: true, tag: "Crunchy", desc: "Golden fried tender babycorn tossed with scallions and mild Asian herbs" },
        { name: "Chili Mushroom", price: 170, isVeg: true, tag: "Popular", desc: "Fresh button mushrooms wok-seared in spicy garlic chili soya glaze" },
        { name: "Chili Paneer", price: 190, isVeg: true, tag: "Chef's Special", desc: "Soft cottage cheese cubes tossed with bell peppers, onions and chili sauce" },
        { name: "Crispy Chicken", price: 200, isVeg: false, tag: "Bestseller", desc: "Tender shredded chicken fried to golden crispness in oriental seasoning" },
        { name: "Dragon Chicken", price: 250, isVeg: false, tag: "Spicy 🔥", desc: "Crispy chicken strips tossed in spicy fiery red dragon sauce with cashew nuts" },
        { name: "Chili Chicken (6 pcs)", price: 250, isVeg: false, tag: "Classic", desc: "Succulent chicken chunks tossed with green chillies, onions and dark soya sauce" },
        { name: "Hot Garlic Chicken (6 pcs)", price: 250, isVeg: false, tag: "Chef's Pick", desc: "Chicken tossed in pungent hot garlic sauce with roasted aromatics" },
        { name: "Honey Chicken (6 pcs)", price: 250, isVeg: false, tag: "Sweet & Spicy", desc: "Crisp chicken glazed in rich clover honey, toasted sesame and mild chili" },
        { name: "Drums of Heaven (4 pcs)", price: 250, isVeg: false, tag: "Signature", desc: "Frenched chicken winglets tossed in spicy Schezwan garlic sauce" },
        { name: "Chili Prawn", price: 280, isVeg: false, tag: "Seafood Special", desc: "Juicy prawns wok-tossed with peppers, spring onions and savory chili glaze" },
        { name: "Chicken 65", price: 260, isVeg: false, tag: "Hot Seller", desc: "Spiced deep-fried chicken tempered with curry leaves and mustard seeds" },
      ]
    },
    {
      id: "soups-momos",
      category: "Soups & Momos",
      shortTitle: "Soups & Momos",
      subtitle: "Comforting warm broths & authentic Himalayan dumplings",
      icon: "Soup",
      items: [
        { name: "Clear Soup (Veg)", price: 70, isVeg: true, desc: "Light, soothing vegetable broth garnished with scallions" },
        { name: "Clear Soup (Chicken)", price: 90, isVeg: false, desc: "Aromatic chicken broth infused with ginger and fine shredded chicken" },
        { name: "Hot & Sour Soup (Veg)", price: 70, isVeg: true, tag: "Tangy", desc: "Tangy and peppery thick broth loaded with diced seasonal vegetables" },
        { name: "Hot & Sour Soup (Chicken)", price: 90, isVeg: false, tag: "Tangy", desc: "Classic spicy, sour broth with shredded chicken, egg drops and herbs" },
        { name: "Rich Tomato Soup", price: 70, isVeg: true, desc: "Velvety roasted tomato soup seasoned with mild spices and herbs" },
        { name: "Manchow Soup (Veg)", price: 100, isVeg: true, tag: "Crunchy", desc: "Hearty garlic and chili soup served with crunchy fried noodles" },
        { name: "Manchow Soup (Chicken)", price: 120, isVeg: false, tag: "Popular", desc: "Spicy dark soya broth with chicken and egg, topped with crispy noodles" },
        { name: "Steamed Chicken Momo", price: 110, isVeg: false, tag: "Classic", desc: "Soft steamed dumplings stuffed with juicy minced chicken and fresh herbs" },
        { name: "Fried Chicken Momo", price: 130, isVeg: false, tag: "Crisp", desc: "Golden deep-fried momos with a crunchy exterior and juicy center" },
        { name: "Pan-Fried Chicken Momo", price: 150, isVeg: false, tag: "Favorite", desc: "Crisp-bottom dumplings tossed in savory tangy wok sauce" },
        { name: "Chicken Devil Momo (2x Spicy)", price: 180, isVeg: false, tag: "2x Spicy 🔥🔥", desc: "Wok-tossed momos smothered in ultra-spicy devil chili paste" },
      ]
    },
    {
      id: "crispy-chicken-fish",
      category: "Fried Chicken & Seafood",
      shortTitle: "Crispy Bites",
      subtitle: "Golden crusted, tender and seasoned to perfection",
      icon: "Flame",
      items: [
        { name: "Chicken Strips (3 pcs)", price: 120, isVeg: false, tag: "Crunchy", desc: "Tender chicken breast fillets coated in spiced golden batter" },
        { name: "Chicken Drumstick (1 pc)", price: 90, isVeg: false, desc: "Juicy bone-in chicken drumstick marinated in aromatic herbs" },
        { name: "Chicken Breast (1 pc)", price: 80, isVeg: false, desc: "Crispy herb-crusted tender chicken fillet" },
        { name: "Chicken Alakiv (1 pc)", price: 100, isVeg: false, tag: "Signature", desc: "Classic Chicken Kiev style cutlet with a decadent herb butter center" },
        { name: "Chicken Lollipop (4 pcs)", price: 120, isVeg: false, tag: "Popular", desc: "Crispy fried frenched chicken wings served with house dipping sauce" },
        { name: "Chicken Fingers (4 pcs)", price: 100, isVeg: false, desc: "Crumb-coated succulent chicken tenders served golden brown" },
        { name: "Chicken Cheese Balls (4 pcs)", price: 120, isVeg: false, tag: "Cheesy", desc: "Minced chicken spheres bursting with melted cheese inside" },
        { name: "Chicken Nuggets (12 pcs)", price: 170, isVeg: false, tag: "Sharing Platter", desc: "Twelve golden bite-sized nuggets served with dipping dip" },
        { name: "Chicken Popcorn", price: 170, isVeg: false, tag: "Cinema Munchies", desc: "Bite-sized seasoned chicken crunchy poppers, perfect for movie watching" },
        { name: "Fish Finger (4 pcs)", price: 120, isVeg: false, tag: "Kolkata Special", desc: "Fresh fish fillets crumbed and fried to golden perfection with kasundi" },
        { name: "Kolkata Fish Fry", price: 130, isVeg: false, tag: "Legendary", desc: "Classic Kolkata bhetki fillet marinated in green herbs and crumb fried" },
        { name: "Fish Cheese Balls (2 pcs)", price: 80, isVeg: false, tag: "Cheesy", desc: "Seasoned fish croquettes with a molten cheese heart" },
        { name: "Golden Fried Prawn", price: 260, isVeg: false, tag: "Chef's Special", desc: "Crispy tempura-style prawns served with tangy dipping sauce" },
        { name: "Fish Cutlet (1 pc)", price: 70, isVeg: false, desc: "Spiced fish mince cutlet with crispy golden crust" },
        { name: "French Fries (Medium)", price: 89, isVeg: true, tag: "Classic", desc: "Crispy salted golden potato fries" },
        { name: "French Fries (Large)", price: 149, isVeg: true, tag: "Large", desc: "Jumbo portion of crispy golden salted fries" },
      ]
    },
    {
      id: "noodles-rice",
      category: "Hakka Noodles & Wok Rice",
      shortTitle: "Noodles & Rice",
      subtitle: "Flavourful Indo-Chinese mains prepared fresh in hot woks",
      icon: "UtensilsCrossed",
      items: [
        { name: "Veg Hakka Noodles", price: 130, isVeg: true, desc: "Classic street-style noodles tossed with crunchy shredded vegetables" },
        { name: "Egg Hakka Noodles", price: 150, isVeg: false, desc: "Wok-tossed noodles with scrambled eggs and julienne veggies" },
        { name: "Egg Chicken Hakka Noodles", price: 180, isVeg: false, tag: "Popular", desc: "Loaded noodles tossed with eggs, tender chicken chunks and vegetables" },
        { name: "Mix Hakka Noodles", price: 200, isVeg: false, tag: "Chef's Special", desc: "The ultimate combination of egg, chicken, prawns and wok vegetables" },
        { name: "Veg Schezwan / Chili Garlic Noodles", price: 140, isVeg: true, tag: "Spicy 🔥", desc: "Noodles tossed in fiery homemade Schezwan or pungent chili garlic sauce" },
        { name: "Egg Schezwan / Chili Garlic Noodles", price: 160, isVeg: false, tag: "Spicy 🔥", desc: "Scrambled egg noodles tossed in spicy Schezwan chili garlic sauce" },
        { name: "Egg Chicken Schezwan / Chili Garlic Noodles", price: 190, isVeg: false, tag: "Spicy 🔥", desc: "Fiery Schezwan noodles packed with eggs, tender chicken and herbs" },
        { name: "Mix Schezwan / Chili Garlic Noodles", price: 220, isVeg: false, tag: "Signature 🔥", desc: "Fiery wok noodles loaded with chicken, prawns, egg and roasted garlic" },
        { 
          name: "Classic Fried Rice", 
          isVeg: false,
          tag: "Wok Special",
          desc: "Aromatic long-grain rice tossed with scallions, fresh seasonings and light soya",
          variants: [
            { name: "Veg", price: 140, isVeg: true },
            { name: "Egg", price: 160, isVeg: false },
            { name: "Chicken", price: 180, isVeg: false },
            { name: "Mix", price: 200, isVeg: false }
          ]
        },
        { 
          name: "Chili Garlic Fried Rice", 
          isVeg: false,
          tag: "Spicy",
          desc: "Fragrant rice tossed with spicy red chilies, crushed garlic and spring onions",
          variants: [
            { name: "Veg", price: 160, isVeg: true },
            { name: "Egg", price: 180, isVeg: false },
            { name: "Chicken", price: 200, isVeg: false },
            { name: "Mix", price: 220, isVeg: false }
          ]
        },
        { 
          name: "Burnt Garlic Fried Rice", 
          isVeg: false,
          tag: "Chef's Pick",
          desc: "Wok-toasted rice enriched with golden caramelized crispy burnt garlic",
          variants: [
            { name: "Veg", price: 160, isVeg: true },
            { name: "Egg", price: 180, isVeg: false },
            { name: "Chicken", price: 200, isVeg: false },
            { name: "Mix", price: 220, isVeg: false }
          ]
        },
        { 
          name: "Schezwan Fried Rice", 
          isVeg: false,
          tag: "Spicy 🔥",
          desc: "Fiery Indo-Chinese fried rice stir-fried in authentic Sichuan pepper chili paste",
          variants: [
            { name: "Veg", price: 160, isVeg: true },
            { name: "Egg", price: 180, isVeg: false },
            { name: "Chicken", price: 200, isVeg: false },
            { name: "Mix", price: 220, isVeg: false }
          ]
        },
      ]
    },
    {
      id: "continental-fastfood",
      category: "Burgers, Pasta & Bites",
      shortTitle: "Burgers & Pasta",
      subtitle: "Gourmet burgers, Italian pastas, toasted sandwiches, Maggi & omelettes",
      icon: "Sandwich",
      items: [
        { name: "Classic Veg Burger", price: 110, isVeg: true, desc: "Crispy seasoned vegetable patty, fresh lettuce, tomato slice and house sauce" },
        { name: "Juicy Chicken Burger", price: 130, isVeg: false, tag: "Popular", desc: "Grilled savory chicken patty layered with cheese slice and creamy mayo" },
        { name: "Mafia Zinger Burger", price: 150, isVeg: false, tag: "Signature Crunch", desc: "Super-crispy fried spicy chicken fillet, spicy mayo, pickled gherkins & lettuce" },
        { name: "Veg Red Sauce Pasta (Arrabbiata)", price: 140, isVeg: true, tag: "Italian", desc: "Penne in slow-simmered spicy tomato basil pomodoro sauce" },
        { name: "Veg White Sauce Pasta (Alfredo)", price: 140, isVeg: true, tag: "Creamy", desc: "Penne drenched in rich Parmesan garlic cream sauce with garden vegetables" },
        { name: "Chicken Red Sauce Pasta", price: 180, isVeg: false, desc: "Penne pasta with seasoned chicken cubes in robust herbed marinara sauce" },
        { name: "Chicken White Sauce Pasta", price: 180, isVeg: false, tag: "Indulgent", desc: "Rich and creamy Alfredo pasta loaded with tender sauteed chicken pieces" },
        { name: "Toasted Veg Sandwich", price: 100, isVeg: true, addon: "Add Cheese +₹40", desc: "Golden toasted sandwich filled with crisp sliced veggies and mint chutney" },
        { name: "Grilled Chicken Sandwich", price: 150, isVeg: false, addon: "Add Cheese +₹40", tag: "Hot Seller", desc: "Hearty grilled sandwich loaded with spiced shredded chicken filling" },
        { name: "Classic Veg Maggi", price: 70, isVeg: true, addon: "Add Cheese +₹40", desc: "Comforting classic noodles cooked with tossed peas, carrots and spices" },
        { name: "Egg Maggi", price: 80, isVeg: false, addon: "Add Cheese +₹40", desc: "Hot masala Maggi scrambled with farm-fresh eggs and herbs" },
        { name: "Egg Chicken Maggi", price: 100, isVeg: false, addon: "Add Cheese +₹40", tag: "Favorite", desc: "The ultimate comfort bowl loaded with egg and seasoned chicken bites" },
        { name: "Plain Omelette", price: 40, isVeg: false, desc: "Light and fluffy two-egg classic breakfast omelette" },
        { name: "Masala Omelette", price: 50, isVeg: false, tag: "Classic", desc: "Farm eggs whisked with chopped onions, green chilies, coriander and spices" },
        { name: "Cheese Omelette", price: 80, isVeg: false, tag: "Cheesy", desc: "Fluffy folded omelette stuffed with gooey molten cheddar and mozzarella" },
        { name: "Paneer Omelette", price: 90, isVeg: false, desc: "Protein-packed omelette folded with grated spiced paneer and herbs" },
        { name: "Egg Chicken Omelette", price: 100, isVeg: false, tag: "High Protein", desc: "Hearty omelette generously stuffed with seasoned minced chicken" },
      ]
    },
    {
      id: "brews-shakes",
      category: "Artisanal Brews & Shakes",
      shortTitle: "Brews & Shakes",
      subtitle: "Barista hot brews, thick shakes & decadent signature frost blends",
      icon: "Coffee",
      items: [
        { name: "Black Tea", price: 50, isVeg: true, desc: "Pure brewed golden liquor tea leaves" },
        { name: "Green Tea", price: 50, isVeg: true, desc: "Antioxidant-rich soothing green tea infusion" },
        { name: "Milk Tea", price: 50, isVeg: true, tag: "Comfort", desc: "Traditional aromatic spiced milk chai brewed fresh" },
        { name: "House Espresso Shot", price: 100, isVeg: true, tag: "Barista", desc: "Intense, dark roasted single shot with thick golden crema" },
        { name: "Classic Cappuccino", price: 100, isVeg: true, tag: "Popular", desc: "Rich espresso topped with velvety steamed milk foam and cocoa dust" },
        { name: "Caffè Americano", price: 100, isVeg: true, desc: "Smooth long black coffee prepared with rich espresso roast" },
        { name: "Chilled Cold Coffee", price: 150, isVeg: true, tag: "Bestseller", desc: "Creamy blended chilled espresso with ice cream and cocoa swirl" },
        { name: "Thick Chocolate Shake", price: 190, isVeg: true, desc: "Rich Belgian chocolate blended with creamy ice cream" },
        { name: "Crunchy Oreo Shake", price: 190, isVeg: true, tag: "Favorite", desc: "Thick vanilla shake loaded with crushed Oreo cookies and chocolate drizzle" },
        { name: "Alphonso Mango Shake", price: 190, isVeg: true, desc: "Sweet tropical mango shake blended smooth with chilled milk" },
        { name: "Crispy KitKat Shake", price: 190, isVeg: true, tag: "Crunchy", desc: "Blended crispy KitKat chocolate wafers with creamy chocolate syrup" },
        { name: "Fresh Strawberry Shake", price: 190, isVeg: true, desc: "Refreshing sweet strawberry ice cream milkshake" },
        { name: "Vanilla Frost", price: 250, isVeg: true, tag: "Mafia Signature ⭐", desc: "Ultra-luxurious velvety vanilla bean cream with secret frost blend" },
        { name: "Black Frost", price: 250, isVeg: true, tag: "Mafia Signature ⭐", desc: "Decadent dark cocoa, espresso essence and thick chocolate chips" },
        { name: "Brownie Shake", price: 250, isVeg: true, tag: "Indulgent ⭐", desc: "Gourmet blended shake stuffed with real walnut chocolate brownie chunks" },
      ]
    },
    {
      id: "mocktails-drinks",
      category: "Signature Mocktails & Coolers",
      shortTitle: "Mocktails & Drinks",
      subtitle: "Exotic chilled quenchers, spiced refreshers & energy boosters",
      icon: "GlassWater",
      items: [
        { name: "Kala Khatta", price: 100, isVeg: true, tag: "Desi Twist", desc: "Tangy Indian blackberry reduction with black salt, cumin and fizz" },
        { name: "Jeera Masala", price: 100, isVeg: true, desc: "Zesty digestive cooler infused with roasted cumin, lime and soda" },
        { name: "Spicy Masala", price: 100, isVeg: true, tag: "Spicy Zing", desc: "Sparkling soda spiked with chaat masala, mint and green chili notes" },
        { name: "Virgin Mojito", price: 100, isVeg: true, tag: "Classic", desc: "Fresh muddled garden mint leaves, lime wedges, cane sugar and chilled soda" },
        { name: "Fresh Lime Soda", price: 100, isVeg: true, desc: "Crisp freshly squeezed lime juice with sparkling soda (Sweet, Salted or Mixed)" },
        { name: "Orange Sunrise", price: 100, isVeg: true, tag: "Vibrant", desc: "Layered citrus orange juice with grenadine splash over crushed ice" },
        { name: "The Godfather Blue Lagoon", price: 100, isVeg: true, tag: "Bestseller", desc: "Electric blue curacao citrus cooler with sprite fizz and lemon wheel" },
        { name: "Aam Panna", price: 100, isVeg: true, tag: "Refreshing", desc: "Traditional roasted raw green mango elixir with mint and black salt" },
        { name: "Red Bull Energy Drink", price: 200, isVeg: true, tag: "Energy", desc: "Chilled 250ml can of Red Bull energy drink" },
        { name: "Hell Energy Drink", price: 150, isVeg: true, tag: "Energy", desc: "Chilled can of Hell Energy Drink" },
        { name: "Any Cold Drink (400ml)", price: 80, isVeg: true, desc: "Choice of chilled carbonated soft drinks (Thums Up, Coca Cola, Sprite)" },
      ]
    }
  ],
  gallery: [
    {
      id: 1,
      src: pic1,
      title: "The Marquee Storefront",
      category: "Exterior",
      caption: "The iconic illuminated marquee sign, fedora hat gangster silhouette, and welcoming awning on Arabinda Pally.",
      featured: true
    },
    {
      id: 2,
      src: pic2,
      title: "Front Facade & Street Entrance",
      category: "Exterior",
      caption: "Opposite Anandabazar Gate 3, inviting movie lovers and foodies into our cinematic haven.",
      featured: false
    },
    {
      id: 3,
      src: pic15,
      title: "Crystal Chandelier Dining Hall",
      category: "Interior",
      caption: "The elegant glass-walled salon featuring a luxury crystal chandelier and white & gold seating.",
      featured: true
    },
    {
      id: 4,
      src: musicScreenImg,
      title: "Big Screen Music & Entertainment Lounge",
      category: "Screening",
      caption: "High definition widescreen projection setup playing music videos and entertainment with ambient club lights.",
      featured: true
    },
    {
      id: 5,
      src: pic13,
      title: "The Mocktail & Shisha Bar",
      category: "Bar",
      caption: "Reflective ribbed bar counter showcasing signature stemware, disco ball, and ambient neon lighting.",
      featured: true
    },
    {
      id: 6,
      src: pic7,
      title: "VIP Lounge Group Hangout",
      category: "Lounge",
      caption: "Friends enjoying drinks in our comfortable leather booth seating under dynamic neon backlighting.",
      featured: true
    },
    {
      id: 7,
      src: pic8,
      title: "Cozy Private Booth Seating",
      category: "Lounge",
      caption: "Fluted acoustic wood walls adorned with artwork and reflective glass coffee tables.",
      featured: false
    },
    {
      id: 8,
      src: pic10,
      title: "Music Video Projection Screen",
      category: "Screening",
      caption: "Dynamic music videos and visuals projected on our large screen in the cozy acoustic cafe lounge.",
      featured: false
    },
    {
      id: 9,
      src: pic3,
      title: "Intimate Parisian Bistro Table",
      category: "Interior",
      caption: "Romantic white table with golden butterfly chairs illuminated by ambient purple mood glow.",
      featured: false
    },
    {
      id: 10,
      src: pic11,
      title: "Acoustic Slatted Wall Booth",
      category: "Lounge",
      caption: "Plush leather sofa cushions, metallic framed wall motifs, and relaxed ambiance.",
      featured: false
    },
    {
      id: 11,
      src: pic12,
      title: "Backlit Vanity Lounge Suite",
      category: "Lounge",
      caption: "Private corner with illuminated mirror, acoustic panelling, and comfortable booth lounge.",
      featured: false
    },
    {
      id: 12,
      src: pic14,
      title: "Quiet Corner for Reading & Work",
      category: "Interior",
      caption: "A peaceful spot to catch up on remote work, read a book, or enjoy artisanal coffee.",
      featured: false
    },
    {
      id: 13,
      src: pic9,
      title: "Reflective Night Vibe",
      category: "Lounge",
      caption: "Neon table reflections and immersive ambiance perfect for evening chillouts in Barasat.",
      featured: false
    },
    {
      id: 14,
      src: pic6,
      title: "Modern Acoustic Wash Corner",
      category: "Interior",
      caption: "Clean, stylish vanity and fluted wood decor complementing the overall premium interior.",
      featured: false
    },
    {
      id: 15,
      src: pic5,
      title: "Ceiling Acoustics & Party Lights",
      category: "Screening",
      caption: "Sound systems, laser disco units, and climate-controlled comfort for screening events.",
      featured: false
    }
  ],
  whyChooseUs: [
    {
      title: "One-of-a-Kind Cinematic Theme",
      desc: "Inspired by the golden age of cinema and classic movie talkies, creating an ambiance unlike any standard cafe in Kolkata."
    },
    {
      title: "Big Screen Music & Entertainment",
      desc: "Watch your favorite music videos, trending hits, sports matches, or celebrate special moments with our large projection screen and surround audio."
    },
    {
      title: "Artisanal Quality Beverages",
      desc: "From freshly pulled barista espresso to vibrant tropical mocktails and chilled frappes prepared with premium ingredients."
    },
    {
      title: "Prime Barasat Location",
      desc: "Conveniently located on Arabinda Pally Vidyasagar Road, right opposite Anandabazar Office Gate 3 with easy accessibility."
    }
  ]
};
