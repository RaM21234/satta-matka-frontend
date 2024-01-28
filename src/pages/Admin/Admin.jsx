import React, { useState } from 'react'
import Tricks from './Tricks.jsx'
import LiveUpdate from './Liveupdate.jsx'
import WeeklyResults from './WeeklyUpdate.jsx'
import TimelyResults from './TimelyResults.jsx'

const FormTypes = {
    LIVE_UPDATE: 'Live Update',
    POST_TRICK: 'Post a Trick',
    TIMELY_RESULT: 'Timely Result',
    WEEKLY_UPDATE: 'Weekly Update'
};

const Admin = () => {
    const [currentForm, setCurrentForm] = useState(FormTypes.LIVE_UPDATE);

    const renderForm = () => {
        switch (currentForm) {
            case FormTypes.LIVE_UPDATE:
                return <LiveUpdate />;
            case FormTypes.POST_TRICK:
                return <Tricks />;
            case FormTypes.TIMELY_RESULT:
                return <TimelyResults />;
            case FormTypes.WEEKLY_UPDATE:
                return <WeeklyResults />;
            default:
                return null;
        }
    };


    return (
        <>
            <div>
                <div className="flex justify-center mb-4 mt-3">
                    {Object.values(FormTypes).map(formType => (
                        <button
                            key={formType}
                            className={`mx-2 px-4 py-2 rounded-md ${currentForm === formType ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setCurrentForm(formType)}
                        >
                            {formType}
                        </button>
                    ))}
                </div>
                <div>
                    {renderForm()}
                </div>
            </div>
        </>
    )
}

export default Admin
