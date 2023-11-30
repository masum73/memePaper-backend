import express, { Application, Request, Response } from "express";
import cors from "cors";
import { QuoteRoutes } from "./modules/quote/quote.route";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/", QuoteRoutes);

// default route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Meme Paper!");
});

export default app;
