import images from "./images/image";


const heroBannerData = [
  {
    id: 1,
    sectionTitle: "Bags that Define Sophistication",
    sectionDescription:
      "Discover a collection of bags that effortlessly exude elegance and refinement, making a statement wherever you go. From sleek silhouettes.",
    product: {
      title: "Search Backpack",
      brand: "Mominside",
      description:
        "A perfect pick for daily use, this Polester Trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and arranged manner. No matter wherever you are heading to, it can be your companion for every hour of need. Stylish & Fashionable.",
      price: {
        current: 1600,
        original: 1800,
      },
      category: "backpack",
      quantity: 3,
      colors: ["#F5F5F5", "#000000"],
      images: {
        img1: images.heroBag1,
        img2: images.heroBag2,
      },
      features: [
        "Secure for mobile phone, cards, cosmetics, iPad, umbrella",
        "Stylish & Fashionable",
        "Perfect for daily use",
      ],
    },
  },
  { id: 2,
    sectionTitle: "Bags for exploring in style",
    sectionDescription:
      "Embrace your adventurous side with our collection of bags designed for the modern explorer.These bags combine",
    product: {
      title: "Bryant Analyst Bag",
      brand: "American",
      description: `Laptop Compatibility: No, Strap Type: Adjustable, Trolley Support: No. With Rain Cover : No
Outer Material: Polyester, Color: Black
Water Resistance: Water resistant , not Waterproof
Capacity: 32 liters; Dimensions: 31.5 x 22 x 49.5 Centimeters
Number of Wheels: 0, Number of compartments: 3
Warranty type: Manufacturer; 1 year International warranty valid for 1 year from the original date of`,
      price: {
        current: 2200,
        original: 2600,
      },
      category: "bags",
      quantity: 3,
      colors: ["#800000", "#000000"], // Assuming these are the two visible color options
      images: {
        img1: images.heroBag3,
        img2: images.heroBag4,
      }, // Replace with the actual image URL
      features: [
        "Water Resistance: Water resistant , not Waterproof",
        "Capacity: 32 liters; Dimensions: 31.5 x 22 x 49.5 Centimeters",
        "Number of Wheels: 0, Number of compartments: 3",
        "Warranty type: Manufacturer; 1 year International warranty valid for 1 year from the original date of"
      ],
    },
  },
  
];


export { heroBannerData };
