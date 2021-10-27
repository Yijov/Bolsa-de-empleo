const dotenv = require("dotenv");
dotenv.config();
import { NextFunction, Request, Response } from "express";
import { IUser } from "../interfaces";
import JWT from "jsonwebtoken";
import BCrypt from "bcrypt";
import { UserModel } from "../models";
import { Document } from "mongoose";

class AuthService {
  constructor() {}

  public signUp = async (
    req: Request<{}, {}, IUser>,
    res: Response,
    next: NextFunction
  ) => {
    //encrypting passwaord
    const salt = await BCrypt.genSalt(10);
    const hashedPasword = await BCrypt.hash(req.body.password, salt);

    //save user to database
    let newUser: Document = new UserModel({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPasword,
      accessLevel: req.body.accessLevel,
    });

    let addedUser: Document = await newUser.save();
    //Send access token to the client
    await this.SEND_TOKEN(addedUser._id, res);
  };

  public signIn = async (req: Request, res: Response, next: NextFunction) => {
    //get user from the database
    const user = await UserModel.findOne({
      email: req.body.email,
    });
    //send cookeys
    await this.SEND_TOKEN(user?._id, res);
  };

  public signOut = (req: Request, res: Response, next: NextFunction) => {
    return res
      .cookie("AuthToken", "", { maxAge: 1, httpOnly: true })
      .cookie("LogToken", "", { maxAge: 1 })
      .status(200)
      .json({ success: true, error: "" });
  };

  //set coockeys with the token

  private SEND_TOKEN = (Id: string, res: Response) => {
    try {
      const maxAge = 1 * 24 * 60 * 60; //24 hours
      let token = JWT.sign({ id: Id }, process.env.TOKEN_SECRET!!, {
        expiresIn: maxAge,
      });
      return res
        .cookie("AuthToken", token, { maxAge: maxAge * 1000, httpOnly: true })
        .cookie("LogToken", true, { maxAge: maxAge * 1000 })
        .status(200)
        .json({ success: true, error: "" });
    } catch (error) {
      res.status(500).json({ success: false, error: "sending token" });
    }
  };
}

export default new AuthService();
