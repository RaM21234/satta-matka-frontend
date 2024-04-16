import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { finalAnkSchema } from "../../schema/Schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl);

const FinalAnk = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validHeadings = [
    "Sridevi",
    "Kalyan morning",
    "Milan morning",
    "Madhuri",
    "Karnataka day",
    "Time bazar",
    "Milan day",
    "Kalyan",
    "Sridevi night",
    "Madhuri night",
    "Milan night",
    "Rajdhani night",
    "Mein bazar",
    "Kalyan night",
    "Madhur day",
    "Madhur night",
    "Mein bomby",
    "Kuber",
    "Sridevi mein",
    "Sridevi mein night",
    "Supreme day",
    "Supreme night",
    "Worli",
    "Gujrat",
  ];

  const handleSubmit = async (values, { setSubmitting }) => {
    // Example POST request using fetch API
    try {
      const response = await fetch(`${baseUrl}/api/final-ank`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      let data = await response.json();
      console.log("api response ", data);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle success
      console.log("Form submitted successfully!");
      toast.success("action successfull");
    } catch (error) {
      // Handle error
      console.error("There was an error submitting the form:", error);
      toast.error("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            Final Ank Form
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={finalAnkSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Field
                    as="select"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Select a Heading</option>
                    {validHeadings.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number
                  </label>
                  <Field
                    name="number"
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-500 px-4 py-2 text-white focus:bg-gray-600 focus:outline-none disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FinalAnk;
