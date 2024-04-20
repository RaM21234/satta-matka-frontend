import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { entrySchema } from "../../schema/Schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();
  const initialValues = {
    entryText: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    const token = localStorage.getItem("user-token");
    if (token) {
      console.log("Token is valid:", token);
    } else {
      console.log("Token is invalid or not found");
      navigate("/userlogin");
      return;
    }

    try {
      console.log(values);
      // Send a POST request to your API endpoint with the entry data
      const response = await fetch("http://localhost:5000/api/user/entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("user-token")}`,
        },
        body: JSON.stringify({ entry: values.entryText }),
      });

      if (response.ok) {
        const data = await response.json();
        // Update the UI with the new entry (you can handle this part)
        console.log("New entry added:", data.savedEntry);
        resetForm(); // Clear the form
        fetchEntries();
      } else {
        // Handle error responses
        console.error("Error adding entry:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    entrySchema,
    onSubmit,
  });

  const [allentries, setAllEntries] = useState([]);

  useEffect(() => {
    // Fetch entries when the component mounts
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      // Send a GET request to fetch entries
      const response = await fetch(
        "http://localhost:5000/api/user/allentry",
        {}
      );

      if (response.ok) {
        const data = await response.json();
        // Update the state with the fetched entries
        setAllEntries(data?.entries);
        console.log("frontend entry data ", entries);
      } else {
        // Handle error responses
        console.error("Error fetching entries:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to delete the entry
      const response = await fetch(
        `http://localhost:5000/api/user/entry/${id}`,
        {
          method: "DELETE",
          headers: {
            "auth-token": `${localStorage.getItem("auth-token")}`,
          },
        }
      );
      if (response.ok) {
        // Remove the deleted entry from the state
        setAllEntries((prevEntries) =>
          prevEntries.filter((entry) => entry._id !== id)
        );
        // Show a success toast notification
        toast.success("Entry deleted successfully", { position: "top-right" });
      } else {
        // Handle error responses
        console.error("Error deleting entry:", response.statusText);
        // Show an error toast notification
        toast.error("Error deleting entry", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
      // Show an error toast notification
      toast.error("Error deleting entry", { position: "top-right" });
    }
  };

  const [editingEntryId, setEditingEntryId] = useState(null);

  // Create a variable to track the edited entry text
  const [editedEntryText, setEditedEntryText] = useState("");

  // Function to handle editing an entry
  const handleEdit = async (id) => {
    try {
      // Send a PUT request to update the entry
      const response = await fetch(
        `http://localhost:5000/api/user/entry/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
          },
          body: JSON.stringify({ entry: editedEntryText }),
        }
      );
      if (response.ok) {
        // Show a success toast notification
        toast.success("Entry updated successfully", { position: "top-right" });

        // Reset the editing state
        setEditingEntryId(null);

        // Fetch the updated list of entries after updating an entry
        fetchEntries();
      } else {
        // Handle error responses
        console.error("Error updating entry:", response.statusText);
        // Show an error toast notification
        toast.error("Error updating entry", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error updating entry:", error);
      // Show an error toast notification
      toast.error("Error updating entry", { position: "top-right" });
    }
  };

  // Function to handle changes in the edited entry text
  const handleEditChange = (e) => {
    setEditedEntryText(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-16">
        <div className="w-full max-w-md mx-auto bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            Entry Form
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="entryText"
                className="block text-sm font-medium text-gray-700"
              >
                Entry
              </label>
              <input
                type="text"
                name="entryText"
                value={formik.values.entryText}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            {formik.touched.entryText && formik.errors.entryText ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.entryText}
              </div>
            ) : null}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-4 py-2 text-white focus:bg-gray-600 focus:outline-none disabled:opacity-50"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Entry List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {entries.length !== 0 ? (
            entries.map((entry) => (
              <li
                key={entry._id}
                className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <div className="mb-2">
                  <strong>User:</strong> {entry?.user?.name}
                </div>
                <div>
                  <strong>Entry:</strong>
                  {editingEntryId === entry._id ? (
                    // Display the edit form if entry is being edited
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEdit(entry._id);
                      }}
                      class="flex flex-row "
                    >
                      <input
                        type="text"
                        name="editedEntryText"
                        value={editedEntryText}
                        onChange={handleEditChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ml-2 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-3"
                      >
                        Save
                      </button>
                    </form>
                  ) : (
                    // Display the entry text if not being edited
                    <>{entry.entry}</>
                  )}
                </div>
                <div className="mt-4 text-gray-600 text-sm">
                  Created at: {new Date(entry.createdAt).toLocaleString()}
                </div>
                <button
                  onClick={() => handleDelete(entry._id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditingEntryId(entry._id);
                    setEditedEntryText(entry.entry);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ml-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Edit
                </button>
              </li>
            ))
          ) : (
            <div>Create an entry, No entry to display</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Entry;
