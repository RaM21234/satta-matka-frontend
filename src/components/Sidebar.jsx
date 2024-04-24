import React, { useState } from "react";
import Liveupdate from "../pages/Admin/Liveupdate";
import Tricks from "../pages/Admin/Tricks";
import TimelyResults from "../pages/Admin/TimelyResults";
import WeeklyResults from "../pages/Admin/WeeklyUpdate";
import SubhankLuckyNumber from "../pages/Admin/SubhankLuckyNumber";
import FinalAnk from "../pages/Admin/FinalAnk";
import ResultForm from "../pages/Admin/ResultForm";
import Admin from "../pages/Admin/Admin";
import { HiHashtag, HiMenu, HiX } from "react-icons/hi";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Kalyan-Matka-logos_black.png";
import EditJodi from "../pages/Admin/EditJodi";
import UpdatePanel from "../pages/Admin/UpdatePanel";

const Sidebar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false); // State to handle sidebar toggle

  const FormTypes = {
    LIVE_UPDATE: "Live Update",
    POST_TRICK: "Post a Trick",
    TIMELY_RESULT: "Timely Result",
    WEEKLY_UPDATE: "Weekly Update",
    SUBHANK_LUCKY_NUMBER: "Subhank Lucky Number",

    FINAL_ANK: "Final Ank",
    RESULT: "Satta Result",
    PANEL: "New Panel",
    PANEL_UPDATE: "Update Panel",
    JODI: "New Jodi",
    EDIT_JODI: "Edit Jodi",
  };

  const [currentForm, setCurrentForm] = useState(FormTypes.LIVE_UPDATE);

  const renderForm = () => {
    switch (currentForm) {
      case FormTypes.LIVE_UPDATE:
        return <Liveupdate />;
      case FormTypes.POST_TRICK:
        return <Tricks />;
      case FormTypes.TIMELY_RESULT:
        return <TimelyResults />;
      case FormTypes.WEEKLY_UPDATE:
        return <WeeklyResults />;
      case FormTypes.SUBHANK_LUCKY_NUMBER:
        return <SubhankLuckyNumber />;
      case FormTypes.FINAL_ANK:
        return <FinalAnk />;
      case FormTypes.RESULT:
        return <ResultForm />;
      case FormTypes.PANEL:
        return <Panelcsv />;
      case FormTypes.PANEL_UPDATE:
        return <UpdatePanel />;
      case FormTypes.EDIT_JODI:
        return <EditJodi />;
      case FormTypes.JODI:
        return <Jodicsv />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    localStorage.clear("auth-token");
    navigate("/adminlogin");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />
      <div className="lg:hidden">
        <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaChevronLeft className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`flex z-50   h-screen ${
          isOpen ? "flex-row" : "hidden"
        } lg:flex lg:flex-row min-h-screen shadow-xl absolute inset-y-0 left-0 transform ${
          !isOpen && "-translate-x-full"
        } lg:relative lg:translate-x-0 transition duration-300 ease-in-out`}
        style={{ position: "absolute", top: "0px" }}
      >
        <div class="flex flex-col w-60 bg-white rounded-r-3xl overflow-scroll-y  shadow-xl">
          <div class="flex items-center justify-center h-20 shadow-md">
            <h1 class="text-3xl uppercase text-indigo-500">
              <img src={logo} />
            </h1>
          </div>
          <ul class="flex flex-col py-4">
            {Object.values(FormTypes).map((formType) => (
              <li
                className={`mx-2 px-4 py-2 rounded-md ${
                  currentForm === formType
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-500"
                }`}
                key={formType}
                onClick={() => setCurrentForm(formType)}
              >
                <a
                  href="#"
                  class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-gray-800"
                >
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg ">
                    <HiHashtag />
                  </span>
                  <span class="text-sm font-medium"> {formType}</span>
                </a>
              </li>
            ))}

            <li class="  rounded-b-3xl px-4 bg-white">
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 w-60  text-gray-500 hover:text-gray-800"
              >
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400 ml-2">
                  <i class="bx bx-log-out"></i>
                </span>
                <span class="text-sm font-medium  " onClick={handleLogout}>
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className={`flex items-center bg-gray-200 lg:hidden`}>
          <button className="" onClick={() => setIsOpen(false)}>
            <FaChevronLeft className=" text-gray-600" />
          </button>
        </div>
      </div>

      <Admin currentForm={currentForm} />
    </>
  );
};

export default Sidebar;
