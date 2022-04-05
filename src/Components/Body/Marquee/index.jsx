import React from 'react'
import './style.scss'

const Marquee = () => {

    return (
        <>
            <section className='bg-mini'>
                <div className='mini'>
                    <div><h2>Capabilities</h2></div>
                    <div className='diff'><h2>Industries</h2></div>
                    <div><h2>Buzz Topics</h2></div>
                </div>
                <div className='bg'>
                    <marquee><p>Automotive & Mobility - Aerospace & Defence Telecommunications - Energy & Utilities - Rail & Logistics - Health & Life Science - Machinery - Public Sector -</p></marquee>
                    <marquee className='right' direction='right'><p>Automotive & Mobility - Aerospace & Defence Telecommunications - Energy & Utilities - Rail & Logistics - Health & Life Science - Machinery - Public Sector -</p></marquee>
                    <marquee className='right'><p>Automotive & Mobility - Aerospace & Defence Telecommunications - Energy & Utilities - Rail & Logistics - Health & Life Science - Machinery - Public Sector -</p></marquee>
                </div>
            </section>
        </>
    )
}

export default Marquee