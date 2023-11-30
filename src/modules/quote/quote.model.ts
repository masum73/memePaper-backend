import { Schema, model } from "mongoose";
import { IQuote, QuoteModel } from "./quote.interface";

const quoteSchema = new Schema<IQuote, QuoteModel>({
  id: { type: Number, required: [true, "id is required"], unique: true },
  quote: { type: String, required: [true, "quote is required"], unique: true },
  quoteBy: { type: String, required: [true, "quoteBy is required"] },
  quoteCategory: {
    type: String,
    required: [true, "quote Category is required"],
  },
});

export const Quote = model<IQuote, QuoteModel>("Quote", quoteSchema);
