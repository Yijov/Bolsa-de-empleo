import { Router } from "express";
import {
  AuthController,
  JobsController,
  ProfileController,
} from "../controllers";
import { AuthValidator } from "../validations";

const MainRouter = Router();

MainRouter.use("/auth", AuthController.Router);
MainRouter.use("/puestos", JobsController.Router);
MainRouter.use("/profile", AuthValidator.isAuth, ProfileController.Router);

export default MainRouter;
