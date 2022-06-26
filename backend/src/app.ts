import express, { Express } from 'express';
import connectToDatabase from './models/connection';
import routes from './routes';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.configRoutes();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  public configRoutes(): void {
    this.app.use(routes);
  }

  public start(PORT: string | number):void {
    connectToDatabase();
    this.app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));
  }
}

export default App;
