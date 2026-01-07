import * as z from "zod";

export const UserLogin = z.object({
  email: z.email("Insert a valid e-mail."),
  password: z
    .string()
    .min(1, "Insert a password.")
    .max(256, "Password is too long."),
});

export type UserLoginType = z.infer<typeof UserLogin>;

export const DEFAULT_USER_LOGIN: UserLoginType = {
  email: "",
  password: "",
};
