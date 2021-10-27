import { Router } from "express";
import { AuthController, JobsController } from "../controllers";
import { AuthValidator } from "../validations";

const MainRouter = Router();

MainRouter.use("/auth", AuthController.Router);
MainRouter.use("/puestos", AuthValidator.isAuth, JobsController.Router);

export default MainRouter;
