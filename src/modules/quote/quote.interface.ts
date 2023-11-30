import { Model } from "mongoose";

export interface IQuote {
  id: number;
  quote: string;
  quoteBy: string;
  quoteCategory: string;
}

export type QuoteModel = Model<IQuote>;
