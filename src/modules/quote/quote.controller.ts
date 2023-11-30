/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { QuoteServices } from "./quote.service";

const createQuote = async (req: Request, res: Response) => {
  try {
    const quoteData = req.body;
    const result = await QuoteServices.createQuoteIntoDB(quoteData);

    res.status(201).json({
      success: true,
      message: "Quote created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message,
      error: {
        code: 404,
        description: "Something went wrong!",
      },
    });
  }
};

const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const result = await QuoteServices.getAllQuotesFromDB();

    res.status(200).json({
      success: true,
      message: "Quotes fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message,
      error: {
        code: 404,
        description: "Something went wrong!",
      },
    });
  }
};

const getSingleQuote = async (req: Request, res: Response) => {
  try {
    const quoteId = parseInt(req.params.id);
    const result = await QuoteServices.getSingleQuoteFromDB(quoteId);

    res.status(200).json({
      success: true,
      message: "Quotes fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message,
      error: {
        code: 404,
        description: "Something went wrong!",
      },
    });
  }
};

const updateQuote = async (req: Request, res: Response) => {
  try {
    const quoteData = req.body;
    const quoteId = parseInt(req.params.id);

    const result = await QuoteServices.updateQuoteIntoDB(quoteId, quoteData);
    res.status(200).json({
      success: true,
      message: "Quote updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message,
      error: {
        code: 404,
        description: "Something went wrong!",
      },
    });
  }
};

const deleteQuote = async (req: Request, res: Response) => {
  try {
    const quoteId = parseInt(req.params.id);
    await QuoteServices.deleteQuote(quoteId);
    res.status(200).json({
      success: true,
      message: "Quote deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error?.message,
      error: {
        code: 404,
        description: "Something went wrong!",
      },
    });
  }
};
export const QuoteControllers = {
  createQuote,
  getAllQuotes,
  getSingleQuote,
  updateQuote,
  deleteQuote,
};
