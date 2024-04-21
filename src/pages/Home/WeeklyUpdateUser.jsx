import React from "react";
const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl);

const WeeklyUpdateUser = ({ data }) => {
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

  const chunkedObject = chunkObject(data.updates);

  return (
    <>
      <h1 class="text-center text-3xl">{data?.name}</h1>
      <div className="container mx-auto p-4">
        <table className=" ">
          <tbody>
            {Object.entries(data?.updates)?.map(([day, data]) => (
              <tr key={day} className="border border-black border-r-0 w-full">
                <td className="border  border-black px-4 py-2 font-bold">
                  {day}
                </td>
                {chunkedObject[day].map((item, index) => {
                  return (
                    <td class=" w-1/4" key={`${data?.name}-${day}-${index}`}>
                      <div class="flex flex-row ">
                        <p
                          key={`${index}_1`}
                          className="py-2 w-1/2 text-center text-red-500 text-3xl font-bold"
                        >
                          {item[0]}
                        </p>
                        <p
                          key={`${index}_2`}
                          className="border border-black border-t-0 border-b-0 font-bold  py-2 w-1/2 text-center"
                        >
                          {item[1]}

                          <div
                            class="w-full  "
                            style={{
                              backgroundColor: "black",
                              height: "0.5px",
                            }}
                          />

                          {item[2]}
                        </p>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WeeklyUpdateUser;
