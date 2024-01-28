import React, { useState, useEffect } from 'react';


const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl)

const TimelyResultUser = () => {
    const [groupedResults, setGroupedResults] = useState({});

    // Async function to fetch data
    const fetchData = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/groupedtimelyresults`);
            const data = await response.json();
            console.log("timely result", data)
            if (data.success && data.groupedTimelyResults) {
                setGroupedResults(data.groupedTimelyResults);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap justify-between">
                    {Object.entries(groupedResults).map(([heading, results]) => (
                        <>
                            <div key={heading} className="mb-6 w-full md:w-full lg:w-1/2 px-2 overflow-y-scroll h-96">
                                <h2 className="text-xl font-bold mb-3">{heading}</h2>
                                <table className="min-w-full border-collapse border border-gray-200 ">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-2 text-left">Result</th>
                                            <th className="border border-gray-200 px-4 py-2 text-left">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {results.map(result => (
                                            <tr key={result._id} className="border-b border-gray-200">
                                                <td className="border border-gray-200 px-4 py-2">{result.result}</td>
                                                <td className="border border-gray-200 px-4 py-2">{new Date(result.time).toLocaleTimeString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TimelyResultUser







