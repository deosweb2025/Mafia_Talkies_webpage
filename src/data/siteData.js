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
    mapUrl: "https://maps.app.goo.gl/GzoDYGoM8dj4mKim9",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d88.4820!3d22.7210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8990a424e8e9f%3A0x6b876543210!2sBarasat%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  social: {
    instagram: "https://instagram.com/mafiatalkies",
    facebook: "https://facebook.com/mafiatalkies",
    googleMap: "https://maps.app.goo.gl/GzoDYGoM8dj4mKim9",
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
  menuHighlights: [
    {
      category: "Artisanal Coffees & Warm Sips",
      items: [
        { name: "Mafia House Espresso", desc: "Intense, velvety shot with notes of dark cocoa and crema", tag: "Signature" },
        { name: "Cinematic Caramel Cappuccino", desc: "Velvety steamed milk over rich espresso with salted caramel drizzle", tag: "Popular" },
        { name: "Vintage Cafe Mocha", desc: "Dark chocolate infused espresso topped with whipped froth", tag: "Favorite" },
        { name: "Irish Cream Latte", desc: "Smooth milk latte kissed with non-alcoholic Irish cream notes", tag: "Special" },
        { name: "Darjeeling Golden Flush", desc: "Aromatic first-flush tea served in fine glass service", tag: "Classic" },
      ]
    },
    {
      category: "Signature Mocktails & Chillers",
      items: [
        { name: "The Godfather Blue Lagoon", desc: "Blue Curacao citrus cooler with fizzy splash and lime wheel", tag: "Must Try" },
        { name: "Scarface Crimson Sunset", desc: "Pomegranate, cranberry, mint, and fresh lemon sparkle", tag: "Signature" },
        { name: "Casablanca Mint Mojito", desc: "Crushed garden mint, zesty lime, brown sugar, and bubbly soda", tag: "Classic" },
        { name: "Velvet Cinema Frappé", desc: "Creamy blended ice coffee with Belgian chocolate chips", tag: "Indulgent" },
        { name: "Green Apple Sparkler", desc: "Crisp sour apple with crushed ice and soda fizz", tag: "Refreshing" },
      ]
    },
    {
      category: "Gourmet Bites & Cinema Munchies",
      items: [
        { name: "Crispy Peri Peri Fries", desc: "Golden fried potato wedges dusted with spicy peri-peri rub", tag: "Snack" },
        { name: "Cheesy Loaded Nachos", desc: "Crispy corn tortillas smothered in melted cheddar & salsa", tag: "Sharing" },
        { name: "Mafia Club Sandwich", desc: "Triple-layer toasted sandwich stuffed with seasoned fillings & herbs", tag: "Chef's Pick" },
        { name: "Crispy Chicken / Paneer Popcorn", desc: "Bite-sized seasoned crunchies served with garlic aioli", tag: "Hot Seller" },
        { name: "Classic Italian Pizza Slice", desc: "Wood-fired crust with herb pomodoro sauce and mozzarella", tag: "Savor" },
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
