import React, { useState } from "react";
import { WeeklyupdateSchema } from "../../schema/Schema";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "../../components/Dropdown";

const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl);

const WeeklyUpdate = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Kalyan Night/ Main Bazar", "Kalyan"];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const initialValuesWeeklyUpdate = {
    name: "",
    day: "",
    data: Array(12).fill(""), // Initialize with 11 empty strings
  };
  const handleSubmitWeeklyUpdate = async (values, { setSubmitting }) => {
    values.name = selectedOption;
    console.log("Submitted values:", values);

    try {
      const response = await fetch(`${baseUrl}/api/weeklyupdate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "admin-token": localStorage.getItem("admin-token"), // Specify the content type
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Response:", responseData);
      toast.success("action successfull");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error");
    }

    setSubmitting(false);
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            Weekly Update Form
          </h1>
          <Formik
            initialValues={initialValuesWeeklyUpdate}
            validationSchema={WeeklyupdateSchema}
            onSubmit={handleSubmitWeeklyUpdate}
          >
            {({ values, isSubmitting }) => (
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
                    htmlFor="day"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Day of the Week
                  </label>
                  <Field
                    as="select"
                    name="day"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Select a Day</option>
                    {daysOfWeek.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="day"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Data (12 Digits)
                  </label>
                  <div className="flex space-x-2">
                    {values.data.map((_, index) => (
                      <Field
                        key={index}
                        name={`data[${index}]`}
                        type="number"
                        className="mt-1 block w-6 rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-black "
                        maxLength="1"
                      />
                    ))}
                  </div>
                  <ErrorMessage
                    name="data"
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

export default WeeklyUpdate;
