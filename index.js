// Required modules

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";

dotenv.config();

// App variables

const app = express();
const PORT = process.env.PORT || 8080;

// App configuration

connectDb();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/favorites", favoriteRoutes);

// Server activation

app.listen(PORT, () =>
  console.log(`Food Recipe App is listening on port: ${PORT}`)
);
