const dotenv = require("dotenv");
dotenv.config();
import { Request, Response, NextFunction } from "express";
import SignUpSchema from "./validationSchemas/SignUpSchema";
import SignInSchema from "./validationSchemas/SIgnInSchema";
import { ISignInData } from "../interfaces";
import JWT from "jsonwebtoken";
import UserModel from "../models/User";
import BCrypt from "bcrypt";

class AuthValidator {
  private tokenSecret = process.env.TOKEN_SECRET;

  public isAuth = async (req: Request, res: Response, next: NextFunction) => {
    //verify if the token exists
    const token = req?.cookies?.AuthToken;

    if (!token) {
      return res.status(401).json({ success: false, error: "Please sing in" });
    }

    try {
      //validate the token
      const verefyed = await JWT.verify(token, this.tokenSecret!!);
      //add the user id to the request body
      req.body.validatedUser = verefyed;
      return next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: "Por favor ingrese usando una cuenta valida",
      });
    }
  };

  public VALIDATE_USER_DOESNT_EXIST = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userExists = await UserModel.findOne({
      email: req.body.email,
    });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, error: "A user already exist" });
    } else {
      next();
    }
  };

  public VALIDATE_EMAIL_AND_PASSWORD_ARE_CORRECT = async (
    req: Request<{}, {}, ISignInData>,
    res: Response,
    next: NextFunction
  ) => {
    let passwordIsCorrect: boolean = false;
    let userExists = await UserModel.findOne({
      email: req.body.email,
    });

    if (userExists) {
      passwordIsCorrect = await BCrypt.compare(
        req.body.password,
        userExists.password
      );
    }

    if (userExists && passwordIsCorrect) {
      next();
    } else {
      return res
        .status(400)
        .json({ success: false, error: "email or pasword is incorrect" });
    }
  };

  public VALIDATE_USER_IS_ADMIN = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (req?.body?.validatedUser?.accessLevel === "admin") {
      return next();
    } else {
      return res.status(401).json({
        success: false,
        error: "Usted no tiene acceso al recurso solicitado",
      });
    }
  };

  public VALIDATE_SIGNIN_DATA = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { error } = SignInSchema.validate(req.body);
    if (error) {
      return res
        .status(406)
        .json({ success: false, error: "Email or password is incorrect" });
    } else {
      next();
    }
  };

  public VALIDATE_SIGNUP_DATA = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { error } = SignUpSchema.validate(req.body);
    if (error) {
      let errorMessage = error?.message.includes("pattern")
        ? "pasword must contain al least 1 capital later, 1 lower case letter and one number"
        : error?.message;
      return res.status(406).json({
        success: false,
        error: errorMessage,
      });
    } else {
      next();
    }
  };
}

export default new AuthValidator();
