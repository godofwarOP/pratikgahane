const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

try {
  if (!PORT) {
    throw new Error("Port is missing");
  }
  if (!MONGODB_URI) {
    throw new Error("Mongodb uri is missing");
  }
} catch (error) {}

export { PORT, MONGODB_URI };
