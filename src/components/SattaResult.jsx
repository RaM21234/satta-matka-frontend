import React from 'react'

const SattaResult = ({ data }) => {
    return (
        <div>
            <section class="text-gray-600 body-font bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <p class="text-3xl text-center pb-5">WORLD ME SABSE FAST SATTA MATKA RESULT</p>
                    <div class="flex flex-wrap -m-4">

                        {data.map((jodi) => {
                            return (
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full  " >
                                    <div class="border-2 p-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
                                        <h3 class="text-white text-xl tracking-widest title-font font-bold mb-1">{jodi.name}</h3>
                                        <h2 class="text-white title-font text-lg font-medium">{jodi.number}</h2>
                                        <div class="flex space-x-10">
                                            <p class="mt-1"> {jodi.time1}</p>
                                            <p class="mt-1"> {jodi.time2}</p>
                                        </div>
                                        <div class="space-x-8 mt-3">
                                            <button class="btn bg-blue-300 text-base"> Jodi</button>
                                            <button class="btn bg-blue-300 text-base">Panel</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}





                    </div>
                </div>
            </section>
        </div>
    )
}

export default SattaResult
