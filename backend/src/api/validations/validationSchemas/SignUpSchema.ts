import Joi from "joi";

//validation object

const SignUpSchema: Joi.ObjectSchema = Joi.object({
  name: Joi.string().required().max(50).min(3).trim(),
  lastName: Joi.string().required().max(50).min(3).trim(),
  email: Joi.string().required().max(50).min(8).trim().email().lowercase(),
  accessLevel: Joi.string().valid("user", "poster", "admin").default("user"),
  password: Joi.string()
    .required()
    .max(20)
    .min(6)
    .trim()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/), //pasword must contain al least 1 capital later, 1 lower case letter and one number
});

export default SignUpSchema;
