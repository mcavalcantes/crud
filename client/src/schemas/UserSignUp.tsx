import * as z from "zod";

export const UserSignUp = z
  .object({
    email: z.email("Insert a valid e-mail address."),
    password: z
      .string()
      .min(8, "Password should be at least 8 characters long.")
      .max(256, "Password should be at most 256 characters long."),
    confirm: z.string(),
  })
  .refine((o) => o.password === o.confirm, {
    message: "Password confirmation does not match.",
    path: ["confirm"],
  });

export type UserSignUpType = z.infer<typeof UserSignUp>;

export const DEFAULT_USER_SIGN_UP: UserSignUpType = {
  email: "",
  password: "",
  confirm: "",
};
