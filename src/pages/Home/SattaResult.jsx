import React from "react";
import { useNavigate } from "react-router-dom";
import { RiRefreshLine } from "react-icons/ri";

const SattaResult = ({ livedata, data }) => {
  const navigate = useNavigate();

  const handleJodiView = (name) => {
    console.log("clicked jodi", name);
    navigate(`/jodi/${name}`);
  };
  const handlePanelView = (name) => {
    console.log("clicked panel", name);
    navigate(`/panel/${name}`);
  };

  return (
    <div>
      <section class="text-gray-600 body-font bg-[#EEF5FF]">
        <div class=" px-5 py-24 mx-auto">
          {/* <p class="text-3xl text-center pb-5">
            WORLD ME SABSE FAST SATTA MATKA RESULT
          </p> */}
          <div class="">
            <div class="flex lg:flex-row flex-col ">
              <div class=" lg:w-1/4  flex flex-wrap h-1/2 ">
                <p class="text-4xl mx-auto text-red-600 mb-2 flex flex-row ">
                  <p class=" flex items-center sedan-regular">
                    Live Updates
                  </p>

                  <lottie-player
                    src="https://lottie.host/7fa35ca4-66e8-489d-8a7d-a3b44f5a59d0/vcCppifHRO.json"
                    background="#EEF5FF"
                    speed="1"
                    style={{ width: "80px", height: "80px" }}
                    loop
                    autoplay
                    mode="normal"
                  ></lottie-player>

                </p>
                <div class="overflow-y-scroll flex flex-wrap h-1/2">
                  {livedata?.map((jodi) => {
                    return (
                      <>
                        <div class=" p-4 w-full md:w-1/2 lg:w-full  ">
                          <div class="border-2 p-4 bg-[#86B6F6] text-white">
                            <h3 class=" text-xl tracking-widest title-font font-bold   mb-1  " style={{ color: 'rgb(255 246 38)' }}>
                              {jodi?.title}
                            </h3>
                            <h2 class="text-white title-font text-lg font-medium " style={{ color: 'rgb(255 246 38)' }}>
                              {jodi?.number}
                            </h2>
                            <div class="flex space-x-10"></div>
                            <div class="space-x-8 mt-3">
                              <button
                                class="btn bg-blue-300 text-base border-0"
                                onClick={() => location.reload()}
                              >
                                <RiRefreshLine />
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div class="lg:w-3/4 flex flex-col h-1/2 ">
                <p class="text-4xl mx-auto text-red-600 mb-2 sedan-regular">Satta Results </p>
                <div class="overflow-y-scroll flex  flex-wrap ">
                  {data?.map((jodi) => {
                    return (
                      <>
                        <div class=" p-4  w-full md:w-1/2 lg:w-1/3">
                          <div class="border-2 p-4 bg-[#86B6F6] text-white">
                            <h3 class="text-white text-xl tracking-widest title-font font-bold mb-1 text-center " style={{ color: 'rgb(255 246 38)' }}>
                              {jodi?.name}
                            </h3>
                            <h2 class="text-white title-font text-lg font-medium text-center" style={{ color: 'rgb(255 246 38)' }}>
                              {jodi?.result}
                            </h2>
                            <div class="flex space-x-10">
                              <p class="mt-1 ml-1 mr-auto text-black"> {jodi.startDate}</p>
                              <p class="mt-1 ml-auto text-black"> {jodi.endDate}</p>
                            </div>
                            <div class=" mt-3 flex">
                              <button
                                class="btn bg-blue-300 border-0 text-base mr-auto"
                                onClick={() => {
                                  handleJodiView(jodi?.name);
                                }}
                              >
                                {" "}
                                Jodi
                              </button>
                              <button
                                class="btn bg-blue-300 border-0 text-base ml-auto"
                                onClick={() => {
                                  handlePanelView(jodi?.name);
                                }}
                              >
                                Panel
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SattaResult;
