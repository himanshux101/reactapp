import React from 'react'

const StartupTitle = ({startup}) => {
    return (
        <div className="startup">
            <h1>{startup.title}</h1>
            {/* <p>{startup.id}</p> */}
        </div>
    )
}

export default StartupTitle