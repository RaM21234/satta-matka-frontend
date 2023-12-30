import React from 'react'

const Card = (props) => {
    return (
        <div>
            {/* <h1 className="text-4xl my-3 font-serif text-center">{props.title}</h1> */}
            <div className="card card-side bg-base-100 shadow-2xl   flex flex-col">
                {/* <img className="  mx-auto sm:max-w-xl py-5" src="" alt="Album" /> */}
                <div className="card-body  text-justify">
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
