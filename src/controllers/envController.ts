import { Request, Response } from 'express';

export const getEnvironmentVariables = (req: Request, res: Response): void => {
  console.log(`[${new Date().toISOString()}] Environment variables requested from ${req.ip}`);

  const variables = {
    variable1: process.env.CUSTOM_VARIABLE_1 || 'Variable no definida',
    variable2: process.env.CUSTOM_VARIABLE_2 || 'Variable no definida',
  };

  console.log(
    `[${new Date().toISOString()}] Environment variables response: ${JSON.stringify(variables)}`,
  );
  res.status(200).json(variables);
};
