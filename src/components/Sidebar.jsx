import React, { useState } from "react";
import Liveupdate from "../pages/Admin/Liveupdate";
import Tricks from "../pages/Admin/Tricks";
import TimelyResults from "../pages/Admin/TimelyResults";
import WeeklyResults from "../pages/Admin/WeeklyUpdate";
import SubhankLuckyNumber from "../pages/Admin/SubhankLuckyNumber";
import LuckyNumber from "../pages/Admin/LuckyNumber";
import FinalAnk from "../pages/Admin/FinalAnk";
import ResultForm from "../pages/Admin/ResultForm";
import Admin from "../pages/Admin/Admin";
import { HiHashtag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Kalyan-Matka-logos_black.png"

const Sidebar = () => {

  const navigate = useNavigate()

  const FormTypes = {
    LIVE_UPDATE: "Live Update",
    POST_TRICK: "Post a Trick",
    TIMELY_RESULT: "Timely Result",
    WEEKLY_UPDATE: "Weekly Update",
    SUBHANK_LUCKY_NUMBER: "Subhank Lucky Number",
    LUCKY_NUMBER: "Lucky Number",
    FINAL_ANK: "Final Ank",
    RESULT: "Result",
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
      case FormTypes.LUCKY_NUMBER:
        return <LuckyNumber />;
      case FormTypes.FINAL_ANK:
        return <FinalAnk />;
      case FormTypes.RESULT:
        return <ResultForm />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    localStorage.clear("auth-token")
    navigate('/adminlogin')
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />

      <div class="min-h-screen flex flex-row shadow-xl" style={{ position: 'absolute', height: '100vh', top: '0px' }}>
        <div class="flex flex-col w-60 bg-white rounded-r-3xl overflow-hidden">
          <div class="flex items-center justify-center h-20 shadow-md">
            <h1 class="text-3xl uppercase text-indigo-500">

              <img src={logo} />

            </h1>
          </div>
          <ul class="flex flex-col py-4">
            {Object.values(FormTypes).map((formType) => (
              <li
                className={`mx-2 px-4 py-2 rounded-md ${currentForm === formType
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
                  <span
                    class="text-sm font-medium"
                  > {formType}</span>
                </a>
              </li>
            ))}


            <li class="mx-2 px-4 py-2 rounded-md">
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-log-out"></i>
                </span>
                <span class="text-sm font-medium " onClick={handleLogout}>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Admin currentForm={currentForm} />
    </>
  );
};

export default Sidebar;
