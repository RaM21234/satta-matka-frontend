import React from 'react'
import { WeeklyupdateSchema } from '../../schema/Schema';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl)

const WeeklyUpdate = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const initialValuesWeeklyUpdate = {
        day: '',
        data: Array(12).fill(''), // Initialize with 11 empty strings
    };
    const handleSubmitWeeklyUpdate = async (values, { setSubmitting }) => {
        console.log('Submitted values:', values);

        try {
            const response = await fetch(`${baseUrl}/api/weeklyupdate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log('Response:', responseData);
        } catch (error) {
            console.error('Error:', error);
        }

        setSubmitting(false);
    };
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
                    <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">Weekly Update Form</h1>
                    <Formik
                        initialValues={initialValuesWeeklyUpdate}
                        validationSchema={WeeklyupdateSchema}
                        onSubmit={handleSubmitWeeklyUpdate}
                    >
                        {({ values, isSubmitting }) => (
                            <Form>
                                <div className="mb-4">
                                    <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day of the Week</label>
                                    <Field as="select" name="day" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option value="">Select a Day</option>
                                        {daysOfWeek.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="day" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Data (12 Digits)</label>
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
                                    <ErrorMessage name="data" component="div" className="text-red-600 text-sm mt-1" />
                                </div>

                                <div className="flex justify-center mt-6">
                                    <button type="submit" className="w-full rounded-md bg-black px-4 py-2 text-white focus:bg-gray-600 focus:outline-none disabled:opacity-50" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default WeeklyUpdate
