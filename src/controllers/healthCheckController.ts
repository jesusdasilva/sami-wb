import { Request, Response } from 'express';

export const healthCheck = (req: Request, res: Response): void => {
  console.log(`[${new Date().toISOString()}] Health check requested from ${req.ip}`);
  res.status(200).json({ message: 'API Test ver. 1.0.3' });
};
