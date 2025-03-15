import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthCheckRoutes from './routes/healthCheckRoutes';
import postRoutes from './routes/postRoutes';
import variablesRoutes from './routes/envRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/', healthCheckRoutes);
app.use('/post', postRoutes);
app.use('/variables', variablesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export const sum = (a: number, b: number): number => {
  return a + b;
};
