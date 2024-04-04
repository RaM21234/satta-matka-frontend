import React from "react";
import { subhankLuckyNumberSchema } from "../../schema/Schema";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl);

const SubhankLuckyNumber = () => {
  const initialValues = {
    number: "",
    dateOfNumber: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    values.dateOfNumber = new Date().toISOString();

    try {
      const response = await fetch(`${baseUrl}/api/subhank-lucky-number`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();

      console.log("Form submitted successfully!", data);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
            <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
              Subhank Form
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={subhankLuckyNumberSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
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
                      className="w-full rounded-md bg-black px-4 py-2 text-white focus:bg-gray-600 focus:outline-none disabled:opacity-50"
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
    </>
  );
};

export default SubhankLuckyNumber;
