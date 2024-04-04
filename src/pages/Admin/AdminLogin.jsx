import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginSchema } from "../../schema/Schema";

const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl);

const AdminLogin = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log("Submitted values:", values);
    try {
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(values), // Convert the JavaScript object to a JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json(); // Parse the JSON response
      console.log("token:", responseData.token); // Handle the success response
      localStorage.setItem("auth-token", responseData.token);
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error); // Handle errors
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Log in</h1>
              <p className="mt-2 text-gray-500">
                Log in below to access your account
              </p>
            </div>
            <div className="mt-5">
              <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="relative mt-6">
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                      >
                        Email Address
                      </label>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600"
                      />
                    </div>

                    <div className="relative mt-6">
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                      >
                        Password
                      </label>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-600"
                      />
                    </div>

                    <div className="my-6">
                      <button
                        type="submit"
                        className={`w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none ${
                          isSubmitting ? "cursor-not-allowed" : ""
                        }`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Logging in..." : "Log In"}
                      </button>
                    </div>

                    <p className="text-center text-sm text-gray-500">
                      Don't have an account yet?{" "}
                      <Link
                        to="/adminsignup"
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                      >
                        Sign up
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
