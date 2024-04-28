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
        <div class="" style={{ backgroundColor: 'rgb(243 219 203)' }}>
            <div className="container mx-auto  p-4">
                <div className="flex flex-wrap justify-between my-14">
                    {Object.entries(groupedResults).map(([heading, results]) => (
                        <>
                            <div key={heading} className="mb-6 w-full md:w-full lg:w-[48%] mx-2 overflow-y-scroll h-96 rounded-xl p-10 " style={{ backgroundColor: '#EFBC9B' }}>
                                <h2 className="text-xl font-bold mb-3 sedan-regular">{heading}</h2>
                                <table className="min-w-full border-collapse border border-black ">
                                    <thead>
                                        <tr>
                                            <th className="border border-black px-4 py-2 text-left">Result</th>
                                            <th className="border border-black px-4 py-2 text-left">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {results.map(result => (
                                            <tr key={result._id} className="border-b border-black">
                                                <td className="border border-black px-4 py-2">{result.result}</td>
                                                <td className="border border-black px-4 py-2">{new Date(result.time).toLocaleTimeString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TimelyResultUser







