import express, { Express } from 'express';
import cors from 'cors';

import { router } from './routes';
import { errorHandler } from './middlewares/errorHandler';


export class App {
  private readonly app: Express;

  constructor() {
    this.app = express();
  }

  init() {
    this.middlewares();
    this.routes();
    this.server();
    this.app.use((err, req, res, next) => errorHandler(err, req, res));
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(router);
  }

  private server() {
    this.app.listen(3333, () => {
      console.log('\n\n 🚀 server running at: http://localhost:3333');
    });
  }
}
