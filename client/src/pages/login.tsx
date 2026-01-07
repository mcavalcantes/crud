import { useState } from "react";
import { Link } from "react-router";

import { UserLogin, type UserLoginType, DEFAULT_USER_LOGIN } from "../schemas";
import { FormField } from "../components/FormField";

export function Login() {
  const [formData, setFormData] = useState<UserLoginType>(DEFAULT_USER_LOGIN);
  const [formError, setFormError] = useState<UserLoginType>(DEFAULT_USER_LOGIN);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url(../images/jpgs/sean-pollock-PhYq704ffdA-unsplash.jpg)] bg-cover bg-center">
      <form
        noValidate
        className="flex w-80 flex-col gap-6 rounded-xl border-2 border-neutral-900 bg-neutral-950 p-4 text-neutral-100 md:w-96"
      >
        <h1 className="text-center text-4xl font-semibold">Login</h1>
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
        </div>
        <p className="text-sm">
          Don't have an account yet?{" "}
          <Link to="/sign-up" className="text-red-500 underline">
            Sign up now.
          </Link>
        </p>
        <button className="grid h-12 cursor-pointer place-items-center rounded-lg bg-red-600 font-semibold">
          Continue
        </button>
      </form>
    </div>
  );
}
