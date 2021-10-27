import Joi from "joi";
const SignInSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().required().max(50).min(8).trim().email().lowercase(),
  password: Joi.string().required().max(20).min(6).trim(),
});

export default SignInSchema;
