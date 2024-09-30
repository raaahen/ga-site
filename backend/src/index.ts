import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Middleware ��� �������� JSON
app.use(express.json());

// ������� �������
app.get('/', (req: Request, res: Response) => {
  res.send('Backend working!');
});

app.listen(PORT, () => {
  console.log(`Server starts on port ${PORT}`);
});
