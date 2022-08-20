import express from "express"; // I can use import because I set this as a module
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

// Creating server
const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

export default app;
