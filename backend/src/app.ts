import * as express from 'express';
import routes from './routes';
import connection from './models/connection';

class App {
  public app: express.Express;

  constructor(private _connection = connection()) {
    this.app = express();
    this.config();
    this.routerConfig();
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

  private routerConfig(): void {
    console.log('alou');
    this.app.use(routes);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));
  }
}

export default App;
