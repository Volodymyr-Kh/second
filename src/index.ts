// import express from 'express';
import express, { Request, Response } from 'express';
import { log } from 'console';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request , res: Response) => {
  res.send('Hello Node DEMO QWERTY!!!');
})

app.listen(PORT, () => {
  log(`App listening on port ${PORT}`);
})