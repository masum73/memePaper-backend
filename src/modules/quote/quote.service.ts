import { IQuote } from "./quote.interface";
import { Quote } from "./quote.model";

const createQuoteIntoDB = async (quoteData: IQuote) => {
  const result = await Quote.create(quoteData);
  return result;
};

export const QuoteServices = {
  createQuoteIntoDB,
};
