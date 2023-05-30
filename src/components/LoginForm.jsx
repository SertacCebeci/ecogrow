/* eslint-disable react/no-unescaped-entities */
import React from "react";
import logIn from "@/firebase/auth/login";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await logIn(email, password);

    if (error) {
      return;
    }

    // else successful
    return router.push("/product");
  };

  const handleGoBack = (event) => {
    return router.push("/");
  };
  return (
    <div className="md:w-2/6 w-4/6 h-3/6 flex flex-col items-center justify-start rounded-md  border-black">
      <div id="header" className="flex items-end justify-center w-full h-1/6 ">
        <p className="text-4xl md:text-6xl font-bold">Login</p>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-2/6 mb-10">
        <p className="text-2xl md:text-3xl mb-2 font-semibold">
          Let's Grow Together
        </p>
        <p className="text-normal text-center md:text-xl font-normal">
          Enjoy the best product you have ever had.
        </p>
      </div>
      <div className="w-full h-3/6 flex items-center justify-evenly flex-col">
        <div className="w-2/3 h-1/3 flex flex-col items-center justify-evenly">
          <form
            onSubmit={handleForm}
            className="space-y-4 md:space-y-6 py-4"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              className="block border-none w-64 text-center py-2 rounded-md bg-[#00543E] text-gray-100 text-xl"
              type="submit"
            >
              Continue
            </button>
          </form>
          <button
            onClick={(event) => handleGoBack(event)}
            className="block border-none w-64 text-center py-2 rounded-md bg-[#00543E] text-gray-100 text-xl"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
