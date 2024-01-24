import express  from "express";
import colors from "colors"; 
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
dotenv.config();
import cors from 'cors';

const app = express();

// database config
connectDB()
  .then((connectedDatabase) => {
    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use(morgan("dev"));

    app.use('/api', authRoutes);

    app.get("/", (req, res) => {
      res.send("<h1>hello world</h1>");
    });

    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      console.log(`Server is running on ${process.env.DEV_MODE} mode, port ${port}`.bgCyan.white);
      console.log(`Connected to MongoDB database: ${connectedDatabase}`.green);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
