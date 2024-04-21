import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "../../components/Dropdown";

const UpdatePanel = () => {
  const [selectedOption, setSelectedOption] = useState(null);

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
  // Define the initial values based on the structured object
  const initialValues = {
    name: "",
    date: "",
    fields: {
      Left_Top: "",
      Left_Mid: "",
      Left_Bottom: "",
      Center: "",
      Right_Top: "",
      Right_Mid: "",
      Right_Bottom: "",
    },
  };

  // Dynamic creation of validation schema based on the initialValues fields
  const fieldSchema = Yup.string().required("This field is required");
  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    fields: Yup.object().shape({
      Left_Top: fieldSchema,
      Left_Mid: fieldSchema,
      Left_Bottom: fieldSchema,
      Center: fieldSchema,
      Right_Top: fieldSchema,
      Right_Mid: fieldSchema,
      Right_Bottom: fieldSchema,
    }),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    // Assume 'selectedOption' is a state variable that holds the selected panel name
    values.name = selectedOption;

    // Reformat the frontend values to match the backend expectations
    const payload = {
      name: values.name,
      Date: values.date,
      left_top: values.fields.Left_Top,
      left_med: values.fields.Left_Mid,
      left_bot: values.fields.Left_Bottom,
      center: values.fields.Center,
      right_top: values.fields.Right_Top,
      right_med: values.fields.Right_Mid,
      right_bot: values.fields.Right_Bottom,
    };

    console.log("Submitted values:", payload);

    try {
      const response = await fetch(`http://localhost:5000/api/update/panel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "admin-token": localStorage.getItem("admin-token"), // Specify the content type
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Response:", responseData);
      toast.success("Panel updated successfully");
    } catch (error) {
      console.error("Error updating panel:", error);
      toast.error("Error updating panel");
    }

    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Panel Update Form
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
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
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <Field
                  name="date"
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              {Object.keys(initialValues.fields).map((field, index) => (
                <div className="mb-4" key={field}>
                  <label
                    htmlFor={`fields.${field}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {`${field.replace("_", " ").replace("_", " ")}`}
                  </label>
                  <Field
                    name={`fields.${field}`}
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name={`fields.${field}`}
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              ))}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-500 px-4 py-2 text-white focus:bg-gray-600 focus:outline-none disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Updating..." : "Update Panel"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdatePanel;
