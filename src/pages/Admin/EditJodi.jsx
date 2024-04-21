import React, { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import { FaEdit } from "react-icons/fa";

const EditableJodi = ({ selectedJodi, setselectedJodi }) => {
  const [rowID, setRowID] = useState(null);
  const handleEditRow = (item, index) => {
    setRowID(index);
  };
  const handleInputChange = (e, fieldName, index) => {
    const newData = [...selectedJodi.data];
    newData[index][fieldName] = e.target.value;
    setselectedJodi({ ...selectedJodi, data: newData });
  };
  const handleSave = async (item) => {
    if (item.newRow) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/jodi/add-row/${selectedJodi._id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("New row added successfully:", data);
        } else {
          console.error("Failed to add new row");
        }
      } catch (error) {
        console.error("Error adding new row:", error);
      }
    } else {
      try {
        const response = await fetch(
          "http://localhost:5000/api/jodi/updateRow",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "admin-token": localStorage.getItem("admin-token"), // Specify the content type
            },
            body: JSON.stringify({
              _id: selectedJodi._id,
              rowData: item,
              rowID: item._id,
            }),
          }
        );

        if (response.ok) {
          console.log("Row data updated successfully");
          alert("done");
        } else {
          console.error("Failed to update row data");
        }
      } catch (error) {
        console.error("Error updating row data:", error);
      }
    }
    fetchData();
  };

  const addNewRow = () => {
    const emptyRow = {
      Mon: "",
      Tue: "",
      Wed: "",
      Thu: "",
      Fri: "",
      Sat: "",
      Sun: "",
      newRow: true,
    };

    setselectedJodi((prevState) => {
      return {
        ...prevState,
        data: [...prevState.data, emptyRow],
      };
    });
    setRowID(selectedJodi.data.length);
  };

  return (
    <div>
      <div
        className=" mx-auto mt-2  p-5 rounded-lg bg-white"
        style={{ marginLeft: "300px" }}
      >
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {selectedJodi?.data?.map((item, index) => (
              <tr key={index}>
                {index === rowID ? (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <input
                        type="text"
                        value={item?.Mon}
                        onChange={(e) => handleInputChange(e, "Mon", index)}
                        className="input input-bordered w-16"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <input
                        type="text"
                        value={item?.Tue}
                        onChange={(e) => handleInputChange(e, "Tue", index)}
                        className="input input-bordered w-16"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <input
                        type="text"
                        value={item?.Wed}
                        onChange={(e) => handleInputChange(e, "Wed", index)}
                        className="input input-bordered w-16"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <input
                        type="text"
                        value={item?.Thu}
                        onChange={(e) => handleInputChange(e, "Thu", index)}
                        className="input input-bordered w-16"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <input
                        type="text"
                        value={item?.Fri}
                        onChange={(e) => handleInputChange(e, "Fri", index)}
                        className="input input-bordered w-16"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <input
                        type="text"
                        value={item?.Sat}
                        onChange={(e) => handleInputChange(e, "Sat", index)}
                        className="input input-bordered w-16"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <input
                        type="text"
                        value={item?.Sun}
                        onChange={(e) => handleInputChange(e, "Sun", index)}
                        className="input input-bordered w-16"
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item?.Mon}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item?.Tue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item?.Wed}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item?.Thu}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item?.Fri}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item?.Sat}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item?.Sun}
                    </td>
                  </>
                )}

                <td className="flex flex-row gap-5 py-4 text-sm text-gray-800">
                  <button
                    onClick={() => handleEditRow(item, index)}
                    className="btn btn-neutral"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleSave(item)}
                    disabled={!(index === rowID)}
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => addNewRow()}
          className="btn btn-primary float-right mt-4 mb-5 w-64"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

const EditJodi = () => {
  const [name, setName] = useState("");
  const [selectedJodi, setSelectedJodi] = useState("");

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

  const handleSelect = async (option) => {
    setName(option);
  };

  const setselectedJodi = (data) => {
    setSelectedJodi(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/jodi/get/${name}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let data = await response.json();
        console.log("selected jodi ", name, data);
        setSelectedJodi(data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name]);
  return (
    <>
      <div class=" my-4 w-1/2 mx-auto">
        <label
          htmlFor="number"
          className="block text-sm font-medium text-gray-700"
        >
          Jodi Name
        </label>
        <Dropdown
          className="mx-auto mt-1 block w-full rounded-md border border-blue-300 shadow-lg   focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          options={options}
          onSelect={handleSelect}
          value={name}
        />
      </div>
      <EditableJodi
        selectedJodi={selectedJodi}
        setselectedJodi={setselectedJodi}
      />
    </>
  );
};

export default EditJodi;
