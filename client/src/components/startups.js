import React from 'react'
import StartupTitle from './startuptitle'

const Startups = ({startups}) => {
    return (
        startups.map(startup => (
            <StartupTitle key={startup.id} startup={startup} /> 
        )
    ))
}

export default Startups