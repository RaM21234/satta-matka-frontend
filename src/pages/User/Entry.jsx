import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { entrySchema } from "../../schema/Schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

const Entry = () => {
  const [allentries, setAllEntries] = useState([]);
  const [userEntries, setuserEntries] = useState([]);
  const [editingEntryId, setEditingEntryId] = useState(null);
  const [editedEntryText, setEditedEntryText] = useState("");
  const [selectedTab, setselectedTab] = useState("tab1");

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
        toast.success('Guess Added')
        resetForm(); // Clear the form
        fetchEntriesUser();
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

  useEffect(() => {
    if (selectedTab === "tab1") {
      fetchEntries();
    } else {
      fetchEntriesUser();
    }
  }, [selectedTab]);

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

  const fetchEntriesUser = async () => {
    try {
      // Send a GET request to fetch entries
      const response = await fetch("http://localhost:5000/api/user/entry", {
        method: "GET",
        headers: {
          "auth-token": `${localStorage.getItem("user-token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Update the state with the fetched entries
        setuserEntries(data?.entries);
        console.log("frontend entry data ", userEntries);
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
            "auth-token": `${localStorage.getItem("user-token")}`,
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
        fetchEntriesUser();
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

  const handleEdit = async (id) => {
    try {
      // Send a PUT request to update the entry
      const response = await fetch(
        `http://localhost:5000/api/user/entry/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${localStorage.getItem("user-token")}`,
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

  const handleEditChange = (e) => {
    setEditedEntryText(e.target.value);
  };
  const handleTabSelect = (tab) => {
    if (tab === "tab2") {
      if (!localStorage.getItem("user-token")) {
        toast.error("login first");
        return;
      }
    }
    setselectedTab(tab);
    console.log("selected tab is ", tab);
  };

  return (
    <>
      <div className="flex flex-row-reverse">
        {localStorage.getItem("user-token") ? (
          <button
            className="btn btn-primary mt-2"
            onClick={() => localStorage.removeItem("user-token")}
          >
            Logout
          </button>
        ) : (
          <button
            className="btn btn-primary mt-2"
            onClick={() => navigate("/userlogin")}
          >
            Login
          </button>
        )}
      </div>
      <div className="flex md:flex-row flex-col-reverse ">
        <div className="md:w-8/12   px-5">
          <div role="tablist" className="tabs tabs-boxed w-52 mx-auto mt-11">
            <a
              role="tab"
              className={`tab ${selectedTab == "tab1" ? "tab-active" : ""}`}
              onClick={() => handleTabSelect("tab1")}
            >
              {" "}
              Guesses{" "}
            </a>
            <a
              role="tab"
              className={`tab ${selectedTab == "tab2" ? "tab-active" : ""}`}
              onClick={() => handleTabSelect("tab2")}
            >
              Your Guesses{" "}
            </a>
          </div>
          {selectedTab == "tab1" && (
            <div className="container mx-auto mt-5">
              <ul className="flex flex-col gap-4">
                {allentries.length !== 0 ? (
                  allentries.map((entry) => (
                    <li
                      key={entry._id}
                      className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                    >
                      <div className="mb-2 flex flex-row">
                        <div class="font-bold">
                          {entry?.user?.name}
                        </div>
                        <div className=" text-gray-600 ml-auto">
                          {new Date(entry.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <div class=" flex  justify-center">

                        {entry.entry}
                      </div>

                    </li>
                  ))
                ) : (
                  <div>Create an entry, No entry to display</div>
                )}
              </ul>
            </div>
          )}
          {selectedTab == "tab2" && (
            <div className="container mx-auto mt-5">
              <ul className="flex flex-col gap-4">
                {userEntries.length !== 0 ? (
                  userEntries.map((entry) => (
                    <li
                      key={entry._id}
                      className="flex flex-col bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                    >
                      <div>
                        <div className="mb-2 flex flex-row">
                          <div class="font-bold ">
                            {entry?.user?.name}
                          </div>
                          <div className=" text-gray-600 ml-auto">
                            {new Date(entry.createdAt).toLocaleString()}
                          </div>

                        </div>
                        <div>

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
                            <div class=" flex  justify-center">

                              {entry.entry}
                            </div>
                          )}
                        </div>

                      </div>
                      <div class="ml-auto">
                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300"
                        >
                          <MdDelete />
                        </button>
                        <button
                          onClick={() => {
                            setEditingEntryId(entry._id);
                            setEditedEntryText(entry.entry);
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ml-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        >
                          <MdEdit />
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <div>Create an entry, No entry to display</div>
                )}
              </ul>
            </div>
          )}
        </div>

        <div class="md:w-4/12  mx-auto">
          <div className="mt-12 mx-auto max-w-md bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl ">
            <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
              Guess Form
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="entryText"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guess
                </label>
                <textarea
                  rows={5}
                  type="text"
                  name="entryText"
                  placeholder="Make your guess"
                  value={formik.values.entryText}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
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
          <div className="mt-12 xl:text-3xl lg:text-xl text-lg md:text-xs mx-auto max-w-md bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl flex flex-col ">
            <div class="mx-auto">
              Make your guess renowned!
            </div>
            <div class="mx-auto">
              Register now!
            </div>
            <div class="flex flex-row mx-auto">
              Contact
              <div class="text-red-600 ml-2 animate-pulse" style={{ animationDuration: '1s', animationIterationCount: 'infinite' }}>
                +91 99999-99999
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Entry;
