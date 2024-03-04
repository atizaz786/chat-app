import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

// Middlewares to parse the incoming request body
app.use(express.json());
app.use(express.static(path.join(__dirname, "/frontend/dist")));
// Middlewares to parse the incoming cookies
app.use(cookieParser());
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);

});
