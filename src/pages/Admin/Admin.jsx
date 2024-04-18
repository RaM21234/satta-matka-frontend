import React, { useState } from "react";
import Tricks from "./Tricks.jsx";
import Liveupdate from "./Liveupdate.jsx";
import WeeklyResults from "./WeeklyUpdate.jsx";
import TimelyResults from "./TimelyResults.jsx";
import SubhankLuckyNumber from "./SubhankLuckyNumber.jsx";
import LuckyNumber from "./LuckyNumber.jsx";
import FinalAnk from "./FinalAnk.jsx";
import ResultForm from "./ResultForm.jsx";
import Jodicsv from "./Jodicsv.jsx";
import Panelcsv from "./Panelcsv.jsx";
import EditJodi from "./EditJodi.jsx";

const FormTypes = {
  LIVE_UPDATE: "Live Update",
  POST_TRICK: "Post a Trick",
  TIMELY_RESULT: "Timely Result",
  WEEKLY_UPDATE: "Weekly Update",
  SUBHANK_LUCKY_NUMBER: "Subhank Lucky Number",
  LUCKY_NUMBER: "Lucky Number",
  FINAL_ANK: "Final Ank",
  RESULT: "Result",
  PANEL: "Panel",
  JODI: "New Jodi",
  EDIT_JODI: "Edit Jodi",
};

const Admin = ({ currentForm }) => {
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
      case FormTypes.PANEL:
        return <Panelcsv />;
      case FormTypes.JODI:
        return <Jodicsv />;
      case FormTypes.EDIT_JODI:
        return <EditJodi />;
      default:
        return null;
    }
  };

  return <div>{renderForm()}</div>;
};

export default Admin;
