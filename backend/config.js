import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: `mongodb+srv://seun2322:seun2322@betanews.igci1.mongodb.net/?retryWrites=true&w=majority`,
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret1",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "sb",
};
