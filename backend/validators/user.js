import Joi from "joi";

const signupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password"))
});

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export { signupSchema, loginSchema };