import express from "express";
import { QuoteControllers } from "./quote.controller";

const router = express.Router();

router.post("/create-quote", QuoteControllers.createQuote);
router.get("/quotes", QuoteControllers.getAllQuotes);
router.get("/quotes/random", QuoteControllers.getRandomQuotes);
router.get("/quotes/:id", QuoteControllers.getSingleQuote);
router.put("/quotes/:id", QuoteControllers.updateQuote);
router.delete("/quotes/:id", QuoteControllers.deleteQuote);

export const QuoteRoutes = router;
