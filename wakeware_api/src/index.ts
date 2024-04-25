import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', function (req: Request, res: Response) {
  res.send(`Server is live at ${port}`)
})

app.listen(port)
