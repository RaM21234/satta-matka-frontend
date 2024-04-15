import React, { useEffect, useState } from "react";

const Jodicsv = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [name, setName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpload = async () => {
    if (!csvFile) {
      alert("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", csvFile);
    formData.append("name", name);

    try {
      const response = await fetch(
        "http://localhost:5000/api/jodi/import-csv",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error uploading CSV file.");
      }

      alert("CSV file uploaded successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Error uploading CSV file. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Jodi
        </h1>
        <div>
          <div className="flex flex-col mb-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              name="panel"
              onChange={handleNameChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button
              onClick={handleUpload}
              className="mt-6 w-full rounded-md bg-indigo-500 px-4 py-2 text-white focus:bg-gray-600 focus:outline-none"
            >
              Upload CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jodicsv;
