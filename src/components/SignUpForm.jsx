/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/router";
import addData from "@/firebase/firestore/addData";
import getData from "@/firebase/firestore/getData";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProductValid, setIsProductValid] = useState(false);
  const [prodId, setProdId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const productId = router?.query?.productId;
    if (!productId) {
      setIsProductValid(false);
    } else {
      let active = true;
      load();
      return () => {
        active = false;
      };

      async function load() {
        setIsProductValid(false);
        const res = await queryProduct(productId);
        if (!active) {
          return;
        }
        setIsProductValid(res);
      }

      async function queryProduct(productId) {
        const productQuery = await getData("products", productId);
        if (!productQuery?.result?._document) return false;
        setProdId(productId);
        return true;
      }
    }
  }, [router.query]);

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      const message = "could not signup";
      toast.error(message, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    //add user to firestore,
    const { user } = result;
    await addData("users", user.uid, {
      email: user.email,
      productId: prodId,
    });

    return router.push(`/product?productId=${prodId}`);
  };

  const handleGoBack = (event) => {
    return router.push("/");
  };

  return (
    <div className="md:w-2/6 w-4/6 h-4/6 flex flex-col items-center justify-start rounded-md border-black">
      {isProductValid ? (
        <div>
          <div
            id="header"
            className="flex items-end justify-center w-full h-1/6 "
          >
            <p className="text-4xl md:text-6xl font-bold">SignUp</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-2/6 ">
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
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center font-bold text-xl mb-2">
            We could not find the product
          </p>
          <button
            onClick={(event) => handleGoBack(event)}
            className="block border-none w-64 text-center py-2 rounded-md bg-[#00543E] text-gray-100 text-xl"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
