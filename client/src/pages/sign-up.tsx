import { useState } from "react";
import { Link } from "react-router";

import {
  UserSignUp,
  type UserSignUpType,
  DEFAULT_USER_SIGN_UP,
} from "../schemas";
import { FormField } from "../components/FormField";

import * as z from "zod";

export function SignUp() {
  const [formData, setFormData] = useState<UserSignUpType>({
    ...DEFAULT_USER_SIGN_UP,
  });
  const [formError, setFormError] = useState<UserSignUpType>({
    ...DEFAULT_USER_SIGN_UP,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rawFormData = new FormData(e.currentTarget);
    const newFormData: UserSignUpType = Object.fromEntries(
      rawFormData.entries(),
    ) as UserSignUpType;

    const newFormError = { ...DEFAULT_USER_SIGN_UP };

    try {
      UserSignUp.parse(newFormData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const e of error.issues) {
          newFormError[e.path[0] as keyof UserSignUpType] = e.message;
        }
      }
    }

    setFormError(newFormError);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url(../images/jpgs/sean-pollock-PhYq704ffdA-unsplash.jpg)] bg-cover bg-center">
      <form
        method="post"
        onSubmit={handleSubmit}
        noValidate
        className="flex w-80 flex-col gap-6 rounded-xl border-2 border-neutral-900 bg-neutral-950 p-4 text-neutral-100 md:w-96"
      >
        <h1 className="text-center text-4xl font-semibold">Sign Up</h1>
        <div className="flex flex-col gap-4">
          <FormField
            label="E-mail"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            error={formError.email}
            onChange={handleChange}
          />
          <FormField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            error={formError.password}
            onChange={handleChange}
          />
          <FormField
            label="Confirm Password"
            id="confirm"
            name="confirm"
            type="password"
            value={formData.confirm}
            error={formError.confirm}
            onChange={handleChange}
          />
        </div>
        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 underline">
            Log in instead.
          </Link>
        </p>
        <button className="grid h-12 cursor-pointer place-items-center rounded-lg bg-red-600 font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
}
