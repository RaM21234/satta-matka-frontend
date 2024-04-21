import React, { useState, useEffect } from 'react'
const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl)

const WeeklyUpdateUser = () => {
    const [weeklyUpdates, setWeeklyUpdates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/weeklyupdate`);
                const data = await response.json();
                console.log("weekly updates ", data?.weeklyUpdates)
                setWeeklyUpdates(data?.weeklyUpdates);
            } catch (error) {
                console.error('Error fetching weekly updates:', error);
            }
        };

        fetchData();
    }, []);

    function chunkArray(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }

    function chunkObject(obj) {
        const chunkedObj = {};
        for (const [key, value] of Object.entries(obj)) {
            chunkedObj[key] = chunkArray(value, 3);
        }
        return chunkedObj;
    }

    const chunkedObject = chunkObject(weeklyUpdates);
    console.log(chunkedObject);
    return (
        <>
            <h1 class="text-center text-3xl">Weekly Updates  </h1>
            <div className="container mx-auto p-4">
                {/* <table border="1">
                    <tbody>
                        {Object.entries(weeklyUpdates)?.map(([day, data]) => (
                            <tr key={day}>
                                <td>{day}</td>
                                <td>{data[0]}</td>
                                <td>{data[1]}{data[2]}</td>
                                <td>{data[3]}</td>
                                <td>{data[4]}{data[5]}</td>
                                <td>{data[6]}</td>
                                <td>{data[7]}{data[8]}</td>
                                <td>{data[9]}</td>
                                <td>{data[10]}{data[11]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                <table className=" ">
                    <tbody>
                        {Object.entries(weeklyUpdates)?.map(([day, data]) => (
                            <tr key={day} className="border border-black border-r-0 w-full">
                                <td className="border  border-black px-4 py-2 font-bold">{day}</td>
                                {chunkedObject[day].map((item, index) => {
                                    return (

                                        <td class=" w-1/4">
                                            <div class="flex flex-row ">

                                                <p key={index} className="py-2 w-1/2 text-center text-red-500 text-3xl font-bold">
                                                    {item[0]}
                                                </p>
                                                <p key={index} className="border border-black border-t-0 border-b-0 font-bold  py-2 w-1/2 text-center">


                                                    {item[1]}

                                                    <div class="w-full  " style={{
                                                        backgroundColor: 'black',
                                                        height: '0.5px'
                                                    }} />

                                                    {item[2]}


                                                </p>
                                            </div>
                                        </td>

                                    )
                                })}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WeeklyUpdateUser
