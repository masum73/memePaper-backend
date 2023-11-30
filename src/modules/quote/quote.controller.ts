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

export const QuoteControllers = {
  createQuote,
};
