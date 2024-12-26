import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import { specs } from './config/swagger';

const app: Express = express();
const port: number = 3000;

// CORS middleware
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// For parsing JSON data
app.use(express.json());

// Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

// Home page
app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to API! API documentation available at <a href="/swagger">here</a>');
});

// API routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(port, () => {
  console.log(`Application is running at http://localhost:${port}`);
  console.log(`API Documentation: http://localhost:${port}/swagger`);
}); 