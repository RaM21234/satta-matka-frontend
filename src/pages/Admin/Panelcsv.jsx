import React, { useState } from 'react'

const Panelcsv = () => {

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
            const response = await fetch("http://localhost:5000/api/import-csv", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Error uploading CSV file.");
            }

            alert("CSV file uploaded successfully!");
            fetchData()
        } catch (error) {
            console.error("Error:", error.message);
            alert("Error uploading CSV file. Please try again.");
        }
    };


    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/api/panels", {
            method: "GET",
        });
        let data = await response.json();
        console.log("panels data ", data)
    }



    return (
        <div class="border flex flex-col">
            admin panel
            <div class="flex flex-col w-56 border border-black">

                <input type="file" onChange={handleFileChange} />
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    name="panel"
                    onChange={handleNameChange}
                />
                <button onClick={handleUpload} class="btn btn-primary">Upload CSV</button>
            </div>
        </div>
    )
}

export default Panelcsv
