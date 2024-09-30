import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Middleware для парсинга JSON
app.use(express.json());

// Простой маршрут
app.get('/', (req: Request, res: Response) => {
  res.send('Backend working!');
});

app.listen(PORT, () => {
  console.log(`Server starts on port ${PORT}`);
});
