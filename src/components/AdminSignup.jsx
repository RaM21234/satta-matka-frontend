import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signupSchema } from '../schema/Schema';

const AdminSignup = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values, { setSubmitting }) => {
        // Handle signup logic here (e.g., API call)
        console.log('Submitted values:', values);
        setSubmitting(false);
    };
    return (
        <>
          

            <div className="flex items-center justify-center h-screen">
                <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                    <div className="w-full">
                        <div className="text-center">
                            <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
                            <p className="mt-2 text-gray-500">Create an account to get started</p>
                        </div>
                        <div className="mt-5">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={signupSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="relative mt-6">
                                            <Field
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Full Name"
                                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                            />
                                            <label
                                                htmlFor="name"
                                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                                            >
                                                Full Name
                                            </label>
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="text-red-600"
                                            />
                                        </div>

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

                                        <div className="relative mt-6">
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                placeholder="Confirm Password"
                                                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                            />
                                            <label
                                                htmlFor="confirmPassword"
                                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                                            >
                                                Confirm Password
                                            </label>
                                            <ErrorMessage
                                                name="confirmPassword"
                                                component="div"
                                                className="text-red-600"
                                            />
                                        </div>

                                        <div className="my-6">
                                            <button
                                                type="submit"
                                                className={`w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none ${isSubmitting ? 'cursor-not-allowed' : ''
                                                    }`}
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Signing up...' : 'Sign Up'}
                                            </button>
                                        </div>

                                        <p className="text-center text-sm text-gray-500">
                                            Already have an account?
                                            {' '}
                                            <Link
                                                to="/adminlogin"
                                                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                                            >
                                                Log in
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
    )
}

export default AdminSignup
