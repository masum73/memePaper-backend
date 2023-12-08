import { IQuote } from "./quote.interface";
import { Quote } from "./quote.model";

const createQuoteIntoDB = async (quoteData: IQuote) => {
  const result = await Quote.create(quoteData);
  return result;
};

const getAllQuotesFromDB = async () => {
  const result = await Quote.find();
  return result;
};

const getRandomQuotesFromDB = async () => {
  const result = await Quote.aggregate([{ $sample: { size: 1 } }]);
  return result;
};

const getSingleQuoteFromDB = async (id: number) => {
  const result = await Quote.findOne({ id: id });
  return result;
};

const updateQuoteIntoDB = async (id: number, quoteData: IQuote) => {
  const result = await Quote.updateOne({ id: id }, quoteData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteQuote = async (id: number) => {
  const result = await Quote.deleteOne({ id: id });
  return result;
};

export const QuoteServices = {
  createQuoteIntoDB,
  getAllQuotesFromDB,
  getRandomQuotesFromDB,
  getSingleQuoteFromDB,
  updateQuoteIntoDB,
  deleteQuote,
};
