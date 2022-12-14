import React, {useState} from 'react'; 
import { NavLink, useNavigate } from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Alert from '@mui/material/Alert';
import Cookie  from 'universal-cookie';

axios.defaults.baseURL='http://localhost:3333';
axios.defaults.withCredentials = true
axios.defaults.headers.common = `Bearer ${sessionStorage.getItem('JWT')}`;
const Login = ({setLogged}) => {
  const cookies = new Cookie()
  const [Success, setSuccess] = useState(null)
  const [Error, setError] = useState(null)
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid Email")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Your password must be at least 8 characters long, one letter and one number")
});

const initialValues = {
  email: "",
  password: ""
};

const handleSubmit = async (values) => {
  await axios.post("/auth/login",values)
  .then((response) => {
    sessionStorage.setItem("JWT", response.data.token.token)
    setLogged(true)
    navigate("/");
  })
   .catch((err)=>{
   console.log(err.response.data.message);
   setError(err.response.data.message)
   });


  //  if(response){
  //   console.log(response);
  //   setLogged(true)
  //  navigate("/");
  //  }
};

    return (
        <div>
          <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
      </div>
      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                
                            <Form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                              {Error && 
                                <Alert severity="error">
                                  {Error}
                                </Alert>

                              }
                               
                                <div className="relative">
                                    <label htmlFor="email"  className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Email: leonsis.j.mbm@gmail.com
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="small"
                                        className="text-red-800"
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password"  className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Password: HelLo123sdsafas
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="small"
                                        className="text-red-800"
                                    />
                                </div>
                              
                                <div className="col-span-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By creating an account, you agree to our <NavLink
                      to="#"
                      className="text-gray-700 underline dark:text-gray-200"
                    > terms and conditions </NavLink>
                    and
                    <NavLink
                      to="#"
                      className="text-gray-700 underline dark:text-gray-200"
                    > privacy policy{" "}
                    </NavLink>
                    .
                  </p>
                </div>

                <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account ? <NavLink to="/register" up-follow up-transition="move-left"className="underline">Sign up</NavLink>
          </p>
          <button type="submit" className="group relative inline-flex items-center overflow-hidden rounded bg-blue-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-300">

         
              <span
                className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
              >
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
                Sign in
              </span>
 
          </button>

        </div>
                               
                            </Form>

                    </Formik>
  
      {/* <form method="POST" action="login" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label for="email" className="sr-only">Email</label>
  
          <div className="relative">
            <input
              type="email"
              id="Email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
  
        <div>
          <label for="password" className="sr-only">Password</label>
          <div className="relative">
            <input
            type="password"
            id="Password"
            name="password"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
  
            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
  
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account ? <NavLink to="/register" up-follow up-transition="move-left"className="underline">Sign up</NavLink>
          </p>
          <button type="submit" className="group relative inline-flex items-center overflow-hidden rounded bg-blue-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-300">

         
              <span
                className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
              >
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
                Sign in
              </span>
 
          </button>

        </div>
      </form> */}
    </div>
  
    <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
          </section>
  
    
        </div>
    );
};

export default Login;