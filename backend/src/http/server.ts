import 'dotenv/config';
import 'express-async-errors';

import express from 'express';

import { router } from './routes';

const app = express();

app
  .use(express.json())
  .use(router)
  .listen(3333, () => console.log('\n\n 🚀 server running at: http://localhost:3333'));

export { app }
