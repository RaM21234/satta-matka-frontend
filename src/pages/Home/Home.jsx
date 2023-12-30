import React, { useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Sidebar from '../../components/Sidebar.jsx'
import SattaResult from '../../components/SattaResult.jsx';


const Home = () => {

    const text = "Welcome to spboss.blog no1 website satta Matka kalyan Matka fast result daily free game Kalyan milan Rajdhani ratan main bazar international sp boss no1.matka chat top fast result matka site SpBoss guessing daily Final ank single open Motor Pattai Update by by Your market ad free admin sir contact Best application download spboss"

    const data = [
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        }, {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },

        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        },
        {
            name: "MADHURI",
            time1: "10:00 AM",
            time2: "10:00 AM",
            number: "350-87-359 ",

        }
    ];

    const Tricks = [
        {
            "name": "Sridevi",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "name": "Kalyan morning",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "name": "Milan morning",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "name": "Madhuri",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "name": "Karnataka day",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]


    const [activeCard, setActiveCard] = useState(0);
    const handleButtonClick = (index) => {
        setActiveCard(index);
        console.log(activeCard)
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
            <SattaResult data={data} />

            <div class="container flex flex-row   mx-auto py-5 my-5 space-x-4">
                <div className="  w-80 min-h-full bg-white text-base-content p-5 shadow-2xl text-center">
                    <span className=" my-4  text-4xl font-bold">  Tricks</span>
                    <hr />
                    {Tricks.map((element, index) => (
                        <button className="bg-blue-200 my-2 p-3 rounded-xl text-start w-72" key={index} onClick={() => handleButtonClick(index)}>
                            {element.name}
                        </button>
                    ))}
                    <hr />
                </div>
                <div class=" w-full bg-white p-5 shadow-2xl">
                    <p class="text-3xl my-3 text-blue-500 font-medium" > {Tricks[activeCard].name}</p>
                    <p class="my-3 text-lg" > {Tricks[activeCard].text}</p>
                </div>
            </div>
        </>
    )
}

export default Home
