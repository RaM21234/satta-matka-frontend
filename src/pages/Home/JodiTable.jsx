import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JodiTable = () => {
  const { name } = useParams();

  console.log("jodi name", name);

  const numbers = [
    "16",
    "11",
    "27",
    "22",
    "33",
    "38",
    "44",
    "49",
    "55",
    "50",
    "61",
    "66",
    "77",
    "72",
    "88",
    "83",
    "99",
    "94",
    "0",
    "5",
  ];

  function createTrueMapFromArray(array) {
    const map = new Map();
    array.forEach((item) => {
      map.set(item, true);
    });
    return map;
  }

  const numbersMap = createTrueMapFromArray(numbers);
  console.log(numbersMap.get("16"));

  const [selectedJodi, setselectedJodi] = useState("");

  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/api/jodi/get/${name}`, {
      method: "GET",
    });
    let data = await response.json();
    console.log("jodi data ", data);
    setselectedJodi(data?.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1
        className="text-3xl font-bold  mb-4 text-center py-4  text-white"
        style={{ backgroundColor: "rgb(22 38 85)" }}
      >
        {selectedJodi?.name} Chart
      </h1>
      <div className="container mx-auto mt-8  p-5 rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-300 shadow-lg">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Mon
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Tue
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Wed
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Thu
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Fri
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Sat
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Sun
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {selectedJodi?.data?.map((item, index) => (
              <tr key={index} class="font-bold">
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm  ${
                    numbersMap.get(item?.Mon) === true
                      ? "text-red-400"
                      : "text-gray-800"
                  }`}
                >
                  {item?.Mon}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    numbersMap.get(item?.Mon) === true
                      ? "text-red-400"
                      : "text-gray-800"
                  }`}
                >
                  {item?.Tue}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    numbersMap.get(item?.Mon) === true
                      ? "text-red-400"
                      : "text-gray-800"
                  }`}
                >
                  {item?.Wed}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    numbersMap.get(item?.Mon) === true
                      ? "text-red-400"
                      : "text-gray-800"
                  }`}
                >
                  {item?.Thu}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    numbersMap.get(item?.Mon) === true
                      ? "text-red-400"
                      : "text-gray-800"
                  }`}
                >
                  {item?.Fri}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    numbersMap.get(item?.Mon) === true
                      ? "text-red-400"
                      : "text-gray-800"
                  }`}
                >
                  {item?.Sat}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    numbersMap.get(item?.Mon) === true
                      ? "text-red-400"
                      : "text-gray-800"
                  }`}
                >
                  {item?.Sun}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JodiTable;
