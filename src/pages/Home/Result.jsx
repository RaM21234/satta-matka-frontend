import React, { useState, useEffect } from "react";

const Result = () => {
  const [result, setresult] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the specified URL
        const response = await fetch("http://localhost:5000/api/result");

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Do something with the JSON data
        console.log("result ", data?.result);
        setresult(data?.result);
      } catch (error) {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {result?.map((item) => {
        return (
          <div key={item._id} class="border border-black">
            <div>name: {item.name}</div>
            <div>result: {item.result}</div>
            <div>
              start:
              {item.startDate}
            </div>
            <div>end:{item.endDate}</div>
          </div>
        );
      })}
    </>
  );
};

export default Result;
