import mongoose from "mongoose";
import { CompaniesModel } from "./src/database/companies.js";
import { AdsModel } from "./src/database/ads.js";

const companiesData = [
  {
    _id: 1,
    name: "Levi's",
    url: "levis.com",
  },
  {
    _id: 2,
    name: "Puma",
    url: "puma.com",
  },
  {
    _id: 3,
    name: "Salesforce",
    url: "salesforce.com",
  },
  {
    _id: 4,
    name: "Adidas",
    url: "adidas.com",
  },
  {
    _id: 5,
    name: "Nike",
    url: "nike.com",
  },
  {
    _id: 6,
    name: "Cotopaxi",
    url: "cotopaxi.com",
  },
  {
    _id: 7,
    name: "Netflix",
    url: "netflix.com",
  },
  {
    _id: 8,
    name: "Colgate",
    url: "colgate.com",
  },
  {
    _id: 9,
    name: "Valentino",
    url: "valentino.com",
  },
  {
    _id: 10,
    name: "Curology",
    url: "curology.com",
  },
  {
    _id: 11,
    name: "Purple",
    url: "purple.com",
  },
];

const adsData = [
  {
    _id: 1,
    companyId: 3,
    primaryText:
      "The world's leading CRM is ready to help you simplify the business part of your small business.",
    headline: "Salesforce for Small Business",
    description: "",
    cta: "Sign Up",
    imageUrl: "http://localhost:3000/salesforce.jpg",
  },
  {
    _id: 2,
    companyId: 1,
    primaryText: "We like where you're going with this.",
    headline: "Relaxed Fit Men's Jeans",
    description: "",
    cta: "Shop Now",
    imageUrl: "http://localhost:3000/levis.jpg",
  },
  {
    _id: 3,
    companyId: 6,
    primaryText:
      "Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
    headline: "Made With Recycled Plastic",
    description: "Shop Back to School",
    cta: "Shop Now",
    imageUrl: "http://localhost:3000/cotopaxi.jpg",
  },
  {
    _id: 4,
    companyId: 7,
    primaryText:
      "The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
    headline:
      "Norm Macdonald's Nothing Special gives one last dose of the late comic",
    description: "",
    cta: "Learn More",
    imageUrl: "http://localhost:3000/normMacdonald.jpg",
  },
  {
    _id: 5,
    companyId: 9,
    primaryText: "Visit Valentino.com, discover the new products and shop now!",
    headline: "Valentino Hexagonal Metal Frame With Crystal Studs",
    description: "",
    cta: "Shop Now",
    imageUrl: "http://localhost:3000/valentino.jpg",
  },
  {
    _id: 6,
    companyId: 11,
    primaryText:
      "Say 'goodnight' to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
    headline: "Cooler Summers Start Here",
    description: "Shop Purple products, designed to help you sleep cool.",
    cta: "Shop Now",
    imageUrl: "http://localhost:3000/purple-display-ads.jpg",
  },
  {
    _id: 7,
    companyId: 10,
    primaryText:
      "Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
    headline: "Personalized skincare for dark spots, acne, and more.",
    description:
      "Personalized skincare for dark spots, acne, and more. Results may vary.",
    cta: "Order Now",
    imageUrl: "http://localhost:3000/curology.jpg",
  },
];

try {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Mongodb uri is missing");
  }

  await mongoose.connect(uri);
  console.log("Connected to database");

  await CompaniesModel.insertMany(companiesData);
  console.log("Loaded Companies data");

  await AdsModel.insertMany(adsData);
  console.log("Loaded Ads data");
} catch (error) {
  console.log("Error while setting up database");
  console.log(error.message);
  process.exit(1);
} finally {
  await mongoose.disconnect();
}
