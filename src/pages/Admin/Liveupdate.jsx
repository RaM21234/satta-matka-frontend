import React, { useState } from "react";
import { liveUpdateSchema } from "../../schema/Schema";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "../../components/Dropdown";

const Liveupdate = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log("admin token ", localStorage.getItem("admin-token"));
  const options = [
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

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const initialValues = {
    title: "",
    startTime: "",
    endTime: "",
    number: "",
    dateOfNumber: "",
  };
  const handleSubmit = async (values) => {
    console.log("Submitted values:", values);
    values.title = selectedOption;

    try {
      const response = await fetch(`http://localhost:5000/api/liveupdate`, {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Specify the content type
          "admin-token": localStorage.getItem("admin-token"), // Specify the content type
        },
        body: JSON.stringify(values), // Convert the JavaScript object to a JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json(); // Parse the JSON response
      console.log("data   :", responseData); // Handle the success response
      toast.success("action successfull");
    } catch (error) {
      console.error("Error:", error); // Handle errors
      toast.error("error adding");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            Live Update Form
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={liveUpdateSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div class="mb-4 ">
                  <label
                    htmlFor="Title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div class="">
                    <Dropdown
                      className="mx-auto mt-1 block w-full rounded-md border border-blue-300 shadow-lg   focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      options={options}
                      onSelect={handleSelect}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="startTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Time
                  </label>
                  <Field
                    name="startTime"
                    type="time"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="startTime"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="endTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Time
                  </label>
                  <Field
                    name="endTime"
                    type="time"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="endTime"
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

                <div className="mb-4">
                  <label
                    htmlFor="dateOfNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Number
                  </label>
                  <Field
                    name="dateOfNumber"
                    type="datetime-local"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="dateOfNumber"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md  bg-indigo-500 px-4 py-2 text-white focus:bg-gray-600 focus:outline-none disabled:opacity-50"
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

export default Liveupdate;
