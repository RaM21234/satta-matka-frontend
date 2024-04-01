import React, { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import SattaResult from '../../components/SattaResult.jsx';
import TimelyResultUser from './TimelyResultUser.jsx';
import WeeklyUpdateUser from './WeeklyUpdateUser.jsx';


const Home = () => {

    const text = "Welcome to spboss.blog no1 website satta Matka kalyan Matka fast result daily free game Kalyan milan Rajdhani ratan main bazar international sp boss no1.matka chat top fast result matka site SpBoss guessing daily Final ank single open Motor Pattai Update by by Your market ad free admin sir contact Best application download spboss"

    const baseUrl = import.meta.env.VITE_APP_BASE_URL;
    const [liveUpdateData, setLiveUpdateData] = useState([]);
    const [trickData, setTrickData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/liveupdate`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response?.json();
                console.log(data)
                setLiveUpdateData(data?.liveUpdates)
                console.log("liveupdate data", liveUpdateData);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

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
                setTrickData(data?.tricks)
                console.log("trick data", trickData)

            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

        fetchData();
    }, []);

    const [activeCard, setActiveCard] = useState(0);
    const handleButtonClick = (index) => {
        setActiveCard(index);
        // console.log(activeCard)
    };

    return (
        <>


            <div class="bg-blue-900" >
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center space-x-8">

                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">!! Welcome to <tbsp />
                                <ReactTypingEffect
                                    speed="200"
                                    text={["Kalyan Matka"]}
                                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                                />

                            </h1>
                            <p class="mb-8 leading-relaxed text-white">{text}</p>
                        </div>
                        <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />


                        </div>
                    </div>
                </section>
            </div>
            <SattaResult data={liveUpdateData} />

            <div class="container flex flex-row   mx-auto py-5 my-5 space-x-4">
                <div className="  w-1/5 min-h-full bg-white text-base-content p-5 shadow-2xl text-center">
                    <span className=" my-4  text-4xl font-bold">  Tricks</span>
                    <hr />
                    {trickData?.map((element, index) => (
                        <button className={`bg-blue-200 my-2 p-3 rounded-xl text-start w-full ${index == activeCard ? "border-2 border-blue-500" : ""}`} key={element?._id} onClick={() => handleButtonClick(index)}>
                            {element?.title}
                        </button>
                    ))}
                    <hr />
                </div>
                <div class=" w-full bg-white p-5 shadow-2xl">
                    <p class="text-3xl my-3 text-blue-500 font-medium" > {trickData[activeCard]?.title}</p>
                    <p class="my-3 text-lg" > {trickData[activeCard]?.description}</p>
                </div>
            </div>
            <div>
                <TimelyResultUser />
            </div>
            <div>
                <WeeklyUpdateUser />
            </div>
        </>
    )
}

export default Home
