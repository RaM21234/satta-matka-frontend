import React, { useState, useEffect } from 'react'
const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl)

const WeeklyUpdateUser = () => {
    const [weeklyUpdates, setWeeklyUpdates] = useState([]);

    // Fetch WeeklyUpdate data from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/weeklyupdate`); // Replace with your actual API endpoint
                const data = await response.json();
                console.log("weekly updates ", data.weeklyUpdates)
                setWeeklyUpdates(data.weeklyUpdates);
            } catch (error) {
                console.error('Error fetching weekly updates:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1 class="text-center text-3xl">Weekly Updates  </h1>
            <div className="container mx-auto p-4">
                {Object.entries(weeklyUpdates).map(([day, data]) => (
                    <div key={day} className="mb-6">
                        <h2 className="text-xl font-bold mb-3">{day}</h2>
                        {Array.isArray(data) ? (
                            <table className="min-w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr>
                                        {[...Array(12).keys()].map(index => (
                                            <th key={index} className="border border-gray-200 px-4 py-2">{index + 1}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {data.map((item, index) => (
                                            <td key={index} className="border border-gray-200 px-4 py-2 text-center">{item}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p>Data for {day} is not available or not in the correct format.</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default WeeklyUpdateUser
