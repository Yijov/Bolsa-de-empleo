const dotenv = require("dotenv");
dotenv.config();
import Express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import router from "../api/router/Router";
import DBConnection from "../DBConnection/DBConnection";

//singleton server
export default class AppServer {
  private app: Express.Application = Express();

  private PORT = process.env.PORT;

  private static instance: AppServer | null = null;

  private constructor() {}

  static getInstace(): AppServer {
    if (this.instance === null) {
      this.instance = new AppServer();
    }
    return this.instance;
  }
  //midleware
  private config() {
    this.app.use(Express.json());
    this.app.use(Express.urlencoded({ extended: true }));
    this.app.use(cors({ origin: "http://localhost:3000", credentials: true }));
    this.app.use(cookieParser());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use("/api/v1", router);
    //not found
    //this.app.use(notFound);
    //general errors
    //this.app.use(errorHandler);
  }

  public start(): void {
    this.config();
    this.app.listen(this.PORT, () => {
      DBConnection.Activate(); //connecting to database
      console.log(`listening on ${this.PORT}`);
    });
  }
}
