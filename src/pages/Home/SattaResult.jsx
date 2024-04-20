import React from "react";
import { useNavigate } from "react-router-dom";

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
      <section class="text-gray-600 body-font bg-white">
        <div class=" px-5 py-24 mx-auto">
          <p class="text-3xl text-center pb-5">
            WORLD ME SABSE FAST SATTA MATKA RESULT
          </p>
          <div class="">
            <div class="flex flex-row">
              <div class=" w-1/4  flex flex-col h-1/2 ">
                <p class="text-4xl mx-auto text-red-500 mb-2">Live Updates</p>
                <div class="overflow-y-scroll flex flex-wrap h-1/2">
                  {livedata?.map((jodi) => {
                    return (
                      <>
                        <div class=" p-4 w-full  ">
                          <div class="border-2 p-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
                            <h3 class="text-white text-xl tracking-widest title-font font-bold mb-1">
                              {jodi?.title}
                            </h3>
                            <h2 class="text-white title-font text-lg font-medium">
                              {jodi?.number}
                            </h2>
                            <div class="flex space-x-10"></div>
                            <div class="space-x-8 mt-3">
                              <button class="btn bg-blue-300 text-base">
                                {" "}
                                Refresh
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div class="w-3/4  flex flex-col h-1/2">
                <p class="text-4xl mx-auto text-red-500 mb-2">Satta Results </p>
                <div class="overflow-y-scroll flex flex-wrap ">
                  {data?.map((jodi) => {
                    return (
                      <>
                        <div class=" p-4 w-1/4 ">
                          <div class="border-2 p-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
                            <h3 class="text-white text-xl tracking-widest title-font font-bold mb-1">
                              {jodi?.name}
                            </h3>
                            <h2 class="text-white title-font text-lg font-medium">
                              {jodi?.result}
                            </h2>
                            <div class="flex space-x-10">
                              <p class="mt-1"> {jodi.startDate}</p>
                              <p class="mt-1"> {jodi.endDate}</p>
                            </div>
                            <div class="space-x-8 mt-3">
                              <button
                                class="btn bg-blue-300 text-base"
                                onClick={() => {
                                  handleJodiView(jodi?.name);
                                }}
                              >
                                {" "}
                                Jodi
                              </button>
                              <button
                                class="btn bg-blue-300 text-base"
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
