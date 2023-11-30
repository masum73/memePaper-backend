import express from "express";
import { QuoteControllers } from "./quote.controller";

const router = express.Router();

router.post("/create-quote", QuoteControllers.createQuote);

export const QuoteRoutes = router;
