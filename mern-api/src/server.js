import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config(); // load .env here
connectDB();

const app = express();
app.use(express.json());

// Enable CORS for your frontend
const allowedOrigins = [
  // "http://localhost:3000",
  "http://localhost:5173",          // React dev server
  // "https://mernapp.vercel.app",
   // Production Vercel frontend
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin like Postman
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  // credentials: true // if you want to send cookies
}));



// Routes
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import phoneRoutes from "./routes/phoneRoutes.js";


// POST /api/users/ -> simple hello response
// app.post("/", (req, res) => {
//   res.json({ message: "Hello! POST request received." });
// });

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/phones", phoneRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
