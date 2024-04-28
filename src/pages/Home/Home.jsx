import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import SattaResult from "./SattaResult.jsx";
import TimelyResultUser from "./TimelyResultUser.jsx";
import WeeklyUpdateUser from "./WeeklyUpdateUser.jsx";
import brand from "../../assets/kalyan-matka-home-white-logo.png";
import FinalAnk from "../../components/FinalAnk.jsx";
import Navbar from "../../components/Navbar.jsx";

const baseUrl = import.meta.env.VITE_APP_BASE_URL || 5000;
console.log("base url is ", baseUrl);

const Home = () => {
  const text =
    "Welcome to spboss.blog no1 website satta Matka kalyan Matka fast result daily free game Kalyan milan Rajdhani ratan main bazar international sp boss no1.matka chat top fast result matka site SpBoss guessing daily Final ank single open Motor Pattai Update by by Your market ad free admin sir contact Best application download spboss";

  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const [liveUpdateData, setLiveUpdateData] = useState([]);
  const [trickData, setTrickData] = useState([]);
  const [loading, setLoading] = useState(true);

  //liveupdate
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/liveupdate`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response?.json();
        console.log(data);
        setLiveUpdateData(data?.liveUpdates);
        console.log("liveupdate data", liveUpdateData);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/trick`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response?.json();
        // console.log("trick data", data?.tricks)
        setTrickData(data?.tricks);
        console.log("trick data", trickData);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  //subhank
  const [subhank, setsubhank] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the specified URL
        const response = await fetch(`${baseUrl}/api/subhank-lucky-number`);

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Do something with the JSON data
        console.log("lucky number subhank", data.subhankLuckyNumbers[0].number);
        setsubhank(data?.subhankLuckyNumbers[0]?.number);
      } catch (error) {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []);

  //lucky number
  const [luckyNumber, setluckyNumber] = useState(
    new Date().toISOString().split("T")[0]
  );

  //final ank
  const [finalAnk, setfinalAnk] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the specified URL
        const response = await fetch(`${baseUrl}/api/final-ank`);

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Do something with the JSON data
        console.log("final ank ", data.finalAnkRecords);
        setfinalAnk(data?.finalAnkRecords);
      } catch (error) {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []);

  const [activeCard, setActiveCard] = useState(0);
  const handleButtonClick = (index) => {
    setActiveCard(index);
    // console.log(activeCard)
  };

  const [result, setresult] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to the specified URL
        const response = await fetch("http://localhost:5000/api/result");

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Do something with the JSON data
        console.log("result ", data?.result);
        setresult(data?.result);
      } catch (error) {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []);

  const [weeklyUpdates, setWeeklyUpdates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/weeklyupdate`);
        const data = await response.json();
        console.log("weekly updates ", data?.weeklyUpdates);
        setWeeklyUpdates(data?.weeklyUpdates);
      } catch (error) {
        console.error("Error fetching weekly updates:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div class="bg-[#3d7aa3]">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center space-x-8">
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                !! Welcome to <tbsp />
                <ReactTypingEffect
                  speed="200"
                  text={["Kalyan Matka"]}
                  cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                />
              </h1>
              <p class="mb-8 leading-relaxed text-white">{text}</p>
            </div>
            <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={brand}
              />
            </div>
          </div>
        </section>
      </div>

      <div class="container mx-auto flex flex-col text-white p-2">
        <div class=" ">
          <div class=" text-center my-8 py-4 shadow-xl rounded-xl ring-1 mx-auto w-full bg-[#3d7aa3]">
            <div class=" text-3xl my-2">Todays Lucky number </div>
            <div class="text-yellow-400 text-2xl font-bold">{luckyNumber}</div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col ">
          <div class="md:w-2/5 text-center my-8 py-4 shadow-xl rounded-xl ring-1 md:mr-auto bg-[#3d7aa3]">
            <div class=" text-3xl my-2">Subhank</div>
            <div class="text-yellow-400 font-bold text-2xl">{subhank}</div>
          </div>

          <div class="md:w-2/5 text-center my-8 py-4 shadow-xl rounded-xl ring-1 md:ml-auto bg-[#3d7aa3]">
            <div class=" text-3xl my-2">Final Ank </div>
            <div class="text-yellow-400 text-2xl font-bold">
              <FinalAnk data={finalAnk} />
            </div>
          </div>
        </div>
      </div>
      <SattaResult livedata={liveUpdateData} data={result} />
      <div class="bg-gray-200 py-3">
        <div class="container flex md:flex-row flex-col  mx-auto py-5 my-5 space-x-4 ">
          <div className="   md:w-2/5  xl:w-1/5 min-h-full bg-white text-base-content p-5 shadow-2xl text-center">
            <span className=" my-4  text-4xl font-bold"> Tricks</span>
            <hr />
            {trickData?.map((element, index) => (
              <button
                className={`bg-blue-200 my-2 p-3 rounded-xl text-start w-full ${index == activeCard ? "border-2 border-blue-500" : ""
                  }`}
                key={element?._id}
                onClick={() => handleButtonClick(index)}
              >
                {element?.title}
              </button>
            ))}
            <hr />
          </div>
          <div class=" w-full bg-white p-5 shadow-2xl">
            <p class="text-3xl my-3 text-blue-500 font-medium">
              {" "}
              {trickData[activeCard]?.title}
            </p>
            <p class="my-3 text-lg"> {trickData[activeCard]?.description}</p>
          </div>
        </div>
      </div>


      <div>
        <TimelyResultUser />
      </div>
      <div class="py-5" style={{ backgroundColor: 'rgb(238 245 255)' }}>

        {weeklyUpdates.map((item, index) => {
          return (
            <div key={index}>
              <WeeklyUpdateUser data={item} key={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
