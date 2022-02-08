import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';

import { router } from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app
  .use(express.json())
  .use(cors())
  .use(router)
  .use(errorHandler)
  .listen(3333, () =>
    console.log('\n\n 🚀 server running at: http://localhost:3333')
  );

export { app }
