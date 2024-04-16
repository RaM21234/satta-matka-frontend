import React from "react";
import { TimelyResultSchema } from "../../schema/Schema";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TimelyResults = () => {
  const validHeadings = [
    "MAIN STARLINE",
    "BAAZI BAAR BAAR LIVE",
    "NEW KALYAN STAR LINE",
    "Mumbai Rajshree Star Line Result",
  ];

  const initialValuesTimelyResult = {
    heading: "",
    result: "",
    time: "",
  };
  const handleSubmitTimelyResult = async (values, { setSubmitting }) => {
    console.log("Submitted values:", values);

    try {
      const response = await fetch(`http://localhost:5000/api/timelyresult`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Response:", responseData);
      toast.success("successfully added");
    } catch (error) {
      console.error("Error:", error);
      toast.error("error adding ");
    }

    setSubmitting(false);
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            Timely Result Form
          </h1>
          <Formik
            initialValues={initialValuesTimelyResult}
            validationSchema={TimelyResultSchema}
            onSubmit={handleSubmitTimelyResult}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="heading"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Heading
                  </label>
                  <Field
                    as="select"
                    name="heading"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Select a Heading</option>
                    {validHeadings.map((heading) => (
                      <option key={heading} value={heading}>
                        {heading}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="heading"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="result"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Result
                  </label>
                  <Field
                    name="result"
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="result"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <Field
                    name="time"
                    type="datetime-local"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="time"
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

export default TimelyResults;
