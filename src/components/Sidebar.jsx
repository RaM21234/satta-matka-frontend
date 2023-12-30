import React from 'react'

const Sidebar = ({ name }) => {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu  w-80 min-h-full bg-white text-base-content">
                        <span className=" my-4 text-center "> <li className="text-4xl my-2  font-bold  ">Jodi</li></span>
                        <hr />
                        {name.map((element, index) => (
                            <button className="bg-green-200 my-2 p-3 rounded-xl text-start" key={index} onClick={() => handleButtonClick(index)}>
                                {element}
                            </button>
                        ))}
                        <hr />
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Sidebar
