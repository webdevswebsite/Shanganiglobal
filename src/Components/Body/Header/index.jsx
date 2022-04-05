import React from 'react'
import './style.scss'
import Energy from '../../../Assets/Images/header1.png'

const Header = () => {
    return (
        <>
            <header>
                <div className='color'></div>
                <div className='color2'></div>
                <div>
                    <h1>Energy & Utilities</h1>
                <div>
                    <img className='energy' src={Energy} alt='' />
                    <div className='para'>
                        <p className='p1'>Five years from now the energy industry as we know it will no longer exist. Societal and political demands for renewable energy and the opportunities digitization offers are eroding traditional business models, blurring sectorial boundaries and creating openings for new, global competitors. For the first time, cooperation across countries and industries is mandatory.<br /></p>
                        <p className='p2'>However, the fundamental change we are seeing will only succeed long-term if a strong orientation on the customers’ needs is met with great agility.<br/></p>
                        <p className='p3'>Our end-to-end capabilities allow us to design strategies, business models and implementation roadmaps, but also to manage largescale projects, realise technical products, lower their costs, optimize the IT environment and security, and develop software.<br/></p>
                        <p className='p4'>With our unique mix of technical expertise and cross-industry capabilities, we are helping the energy industry to transform itself, its infrastructure and its employees’ capabilities to enable them to tackle the challenges of day-to-day business. Today - and in future.</p>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header