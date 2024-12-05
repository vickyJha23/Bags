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


const Bags = [
  { id: 1, 
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1600,
      original: 1800,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "https://bags-workdo.myshopify.com/cdn/shop/products/2_4985da47-8861-4eab-bc3f-77ce33213698_600x600.png?v=1682060666",
          "https://bags-workdo.myshopify.com/cdn/shop/products/2_dda06ac8-8092-451d-b21f-5575886f478d_600x600.png?v=1682059952",
          "https://bags-workdo.myshopify.com/cdn/shop/products/2_4985da47-8861-4eab-bc3f-77ce33213698_600x600.png?v=1682060666",
          "https://bags-workdo.myshopify.com/cdn/shop/products/2_4985da47-8861-4eab-bc3f-77ce33213698_600x600.png?v=1682060666",
        ],
      },
      {
        color: "Blue",
        images: [
          "path/to/blue-image1.jpg",
          "path/to/blue-image2.jpg",
          "path/to/blue-image3.jpg",
          "path/to/blue-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  },
  {
    id: 2,
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1500,
      original: 1800,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "https://bags-workdo.myshopify.com/cdn/shop/products/1_88cf3ac2-e7fd-4749-9b5d-8b05685464c4_456x456.png?v=1682060561",
          "path/to/black-image2.jpg",
          "path/to/black-image3.jpg",
          "path/to/black-image4.jpg",
        ],
      },
      {
        color: "Red",
        images: [
          "path/to/red-image1.jpg",
          "path/to/red-image2.jpg",
          "path/to/red-image3.jpg",
          "path/to/red-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  },
  {
    id: 3,
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1700,
      original: 2000,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "https://bags-workdo.myshopify.com/cdn/shop/products/3_b9942299-7be7-431d-8baf-3c16df4319c0_456x456.png?v=1682060163",
          "path/to/black-image2.jpg",
          "path/to/black-image3.jpg",
          "path/to/black-image4.jpg",
        ],
      },
      {
        color: "Green",
        images: [
          "",
          "path/to/green-image2.jpg",
          "path/to/green-image3.jpg",
          "path/to/green-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  },
  {
    id: 4,
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1550,
      original: 1800,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "path/to/black-image1.jpg",
          "path/to/black-image2.jpg",
          "path/to/black-image3.jpg",
          "path/to/black-image4.jpg",
        ],
      },
      {
        color: "Yellow",
        images: [
          "path/to/yellow-image1.jpg",
          "path/to/yellow-image2.jpg",
          "path/to/yellow-image3.jpg",
          "path/to/yellow-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  },
  {
    id: 5,
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1650,
      original: 1900,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "path/to/black-image1.jpg",
          "path/to/black-image2.jpg",
          "path/to/black-image3.jpg",
          "path/to/black-image4.jpg",
        ],
      },
      {
        color: "Purple",
        images: [
          "path/to/purple-image1.jpg",
          "path/to/purple-image2.jpg",
          "path/to/purple-image3.jpg",
          "path/to/purple-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  },
  {
    id: 6,
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1600,
      original: 1800,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "path/to/black-image1.jpg",
          "path/to/black-image2.jpg",
          "path/to/black-image3.jpg",
          "path/to/black-image4.jpg",
        ],
      },
      {
        color: "Orange",
        images: [
          "path/to/orange-image1.jpg",
          "path/to/orange-image2.jpg",
          "path/to/orange-image3.jpg",
          "path/to/orange-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  },
  {
    id: 7,
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1500,
      original: 1700,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "path/to/black-image1.jpg",
          "path/to/black-image2.jpg",
          "path/to/black-image3.jpg",
          "path/to/black-image4.jpg",
        ],
      },
      {
        color: "White",
        images: [
          "path/to/white-image1.jpg",
          "path/to/white-image2.jpg",
          "path/to/white-image3.jpg",
          "path/to/white-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  },
  {
    id: 8,
    brand: "GoHustle",
    name: "William Backpack",
    description:
      "A perfect pick for daily use, this Polester trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella, and other daily essential things in a safe, secure, and ...",
    price: {
      current: 1600,
      original: 1800,
      currency: "INR",
    },
    variants: [
      {
        color: "Black",
        images: [
          "path/to/black-image1.jpg",
          "path/to/black-image2.jpg",
          "path/to/black-image3.jpg",
          "path/to/black-image4.jpg",
        ],
      },
      {
        color: "Brown",
        images: [
          "path/to/brown-image1.jpg",
          "path/to/brown-image2.jpg",
          "path/to/brown-image3.jpg",
          "path/to/brown-image4.jpg",
        ],
      },
    ],
    quantity: 1,
  }
];





export { heroBannerData, Bags };
