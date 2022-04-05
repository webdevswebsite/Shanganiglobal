import React from 'react'
import Interview from '../../../Assets/Images/interview.jpeg'
import Study from '../../../Assets/Images/study.jpeg'
import Phone from '../../../Assets/Images/Germany.jpeg'
import City from '../../../Assets/Images/lumlautu.jpeg'
import Charging from '../../../Assets/Images/charging.jpeg'
import AltArrow from '../../../Assets/Images/altarrow/2x/outline_arrow_right_alt_black_24dp.png'
import './style.scss'

const Main = () => {
    return (
        <>
            <section>
                <div className='color'></div>
                <div>
                    <div className='container'>
                    <div><img className='images' src={Interview} alt=''/></div>
                    <div className='bgn-card'>
                        <p>Interview</p>
                        <h1>'We have to think hydrogen from end-to-<br/>end'</h1>
                        <p className='p'>'The time is ripe for hydrogen', says Patrick Wienert. A<br/> conversation about the potential in all parts of the hydrogen value<br/> chain.</p>
                    </div>
                    
                </div>
                <div className='container reverse'>
                    <div><img className='images' src={Study} alt=''/></div>
                    <div className='bgn-card'>
                        <p>Study</p>
                        <h1>Hydrogen - opportunities, potentials & <br/>challenges</h1>
                        <p className='p'>The importance of hydrogen as a sustainable energy source </p>
                    </div>
                </div>
                <div className='container'>
                    <div><img className='images' src={Phone} alt=''/></div>
                    <div className='bgn-card'>
                        <p>Interview</p>
                        <h1>'Germany could become Europe’s battery'</h1>
                        <p className='p'>Shangani global monitors the COVID-19 impact and provides customized and proven methods to guide and support companies through the crisis.</p>
                    </div>
                </div>
                <div className='container reverse center'>
                    <div><img className='images' src={Charging} alt=''/></div>
                    <div className='bgn-card'>
                        <p>Interview</p>
                        <h1>'Each charging park is one of a kind'</h1>
                        <p className='p'>Sören Schrader and Roman Scholdan on the integration of eMobility into the electric power grid and decentralised concepts for charging infrastructure. </p>
                    </div>
                </div>
                <div className='container'>
                    <div><img className='images' src={City} alt=''/></div>
                    <div className='bgn-card rem'>
                        <h1>'Shangani global is your partner - even in tough <br/>times</h1>
                        <p className='p'>Shangani global monitors the COVID-19 impact and provides customized and proven methods to guide and support companies through the crisis.</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Main