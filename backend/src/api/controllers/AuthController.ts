import { Router, NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
import { AuthValidator } from "../validations";

const {
  VALIDATE_USER_DOESNT_EXIST,
  VALIDATE_EMAIL_AND_PASSWORD_ARE_CORRECT,
  VALIDATE_SIGNIN_DATA,
  VALIDATE_SIGNUP_DATA,
} = AuthValidator;

class AuthController {
  private router: Router = Router();

  constructor() {
    this.router.post(
      "/signin",
      VALIDATE_SIGNIN_DATA,
      VALIDATE_EMAIL_AND_PASSWORD_ARE_CORRECT,
      this.signIn,
      AuthService.signIn
    );

    this.router.post(
      "/signup",
      VALIDATE_SIGNUP_DATA,
      VALIDATE_USER_DOESNT_EXIST,
      this.signUp,
      AuthService.signUp
    );

    this.router.get("/signout", this.signOut, AuthService.signOut);
  }

  public get Router() {
    return this.router;
  }

  public async signIn(req: Request, res: Response, next: NextFunction) {
    next();
  }

  public async signUp(req: Request, res: Response, next: NextFunction) {
    next();
  }

  public async signOut(req: Request, res: Response, next: NextFunction) {
    next();
  }
}

export default new AuthController();
