import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3333";

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("First name is required"),
    last_name: Yup.string()
      .min(2, "Too short")
      .max(10, "Too long")
      .required("Last name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(
        8,
        "Your password must be at least 8 characters long, one letter and one number"
      )
      .max(50, "Your password is too long"),
    passwordConfirmation: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password"), null], "Password does not match"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const handleSubmit = async (values) => {
    const response = await axios
      .post("/auth/register/", values, { skipAuthRefresh: true })
      .catch((err) => {
        console.log(err);
      });
    if (response) {
      console.log(response);
      //   setSucces(response.data.detail)
      navigate("/login");
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                Welcome to Find my Lunch 🍽️
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Create an account for order food near you !
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      First Name:
                    </label>
                    <Field
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="small"
                      className="text-red-800"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Last Name:
                    </label>
                    <Field
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="small"
                      className="text-red-800"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Email:
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="small"
                      className="text-red-800"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Password:
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                    <ErrorMessage
                      name="password"
                      component="small"
                      className="text-red-800"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="passwordConfirmation"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Confirm password:
                    </label>
                    <Field
                      type="password"
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                    <ErrorMessage
                      name="passwordConfirmation"
                      component="small"
                      className="text-red-800"
                    />
                  </div>
                  <div className="col-span-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      By creating an account, you agree to our{" "}
                      <NavLink
                        to="#"
                        className="text-gray-700 underline dark:text-gray-200"
                      >
                        {" "}
                        terms and conditions{" "}
                      </NavLink>
                      and
                      <NavLink
                        to="#"
                        className="text-gray-700 underline dark:text-gray-200"
                      >
                        {" "}
                        privacy policy{" "}
                      </NavLink>
                      .
                    </p>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center overflow-hidden shrink-0 rounded-md bg-blue-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-300"
                    >
                      <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>

                      <span className="text-sm font-medium transition-all group-hover:mr-4">
                        Create an account
                      </span>
                    </button>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                      Already have an account?{" "}
                      <NavLink
                        to="/login"
                        className="text-gray-700 underline dark:text-gray-200"
                      >
                        Log in
                      </NavLink>
                      .
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;
