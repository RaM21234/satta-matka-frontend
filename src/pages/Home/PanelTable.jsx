import React, { useEffect, useState } from "react";

const PanelTable = () => {
  const [panelData, setpanelData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/panels", {
      method: "GET",
    });
    let data = await response.json();
    console.log("panel data ", data);
    setpanelData(data.data[1]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1
        className="text-3xl font-bold mb-4 text-center py-4 text-white"
        style={{ backgroundColor: "rgb(22 38 85)" }}
      >
        {panelData?.length > 0 && panelData[1]?.name} Chart
      </h1>
      <div className="container mx-auto mt-8 p-5 rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-300 shadow-lg">
          <thead className="bg-blue-200">
            <tr>
              <th className=" py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider text-center">
                Date
              </th>
              <th className="text-center py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Mon
              </th>
              <th className="text-center py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Tue
              </th>
              <th className="text-center py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Wed
              </th>
              <th className="text-center py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Thu
              </th>
              <th className="text-center py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Fri
              </th>
              <th className="text-center py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Sat
              </th>
              <th className="text-center py-3  text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Sun
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {panelData.length > 0 &&
              panelData?.map((day, index) => (
                <tr key={index}>
                  <td className="flex flex-col  py-4 whitespace-nowrap text-sm text-gray-800 mx-auto">
                    <div class="mx-auto">
                      <p>{day?.startDate}</p>
                      <p class="text-center">to</p>
                      <p>{day?.endDate}</p>
                    </div>
                  </td>

                  {day?.weekData?.map((item, index) => {
                    return (
                      <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 border">
                        <div class="flex flex-row justify-between ">
                          <div>
                            <p>{item.left_top}</p>
                            <p>{item.left_med}</p>
                            <p>{item.left_bot}</p>
                          </div>
                          <div class=" my-auto">{item?.center}</div>

                          <div>
                            <p>{item.right_top}</p>
                            <p>{item.right_med}</p>
                            <p>{item.right_bot}</p>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PanelTable;
