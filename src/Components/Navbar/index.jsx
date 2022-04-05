import { useState } from 'react'
import SideNav from './Sidebar'
import Hamburger from '../../Assets/Images/black-24dp/2x/outline_menu_black_24dp.png'
import Dropdown from '../../Assets/Images/arrow/2x/outline_arrow_drop_down_black_24dp.png'
import './style.scss'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
  const handleChange = () => {
    setIsActive(!isActive);
  };
    return (
        <>
            <nav>
                <div>
                    <h2>Shangani Global</h2>
                </div>
                <div className='navtags'>
                    <div>
                        <span className='dropdown'>
                            <div className='dropbtn'>
                                <div className='btn'>
                                    <p>EN</p>
                                </div>
                                <div>
                                    <img className='img' src={Dropdown} alt='' />
                                </div>
                            </div>
                        <div class="dropdown-content">
                            <a href="google.com">DE</a>
                            <a href="google.com">FR</a>
                        </div>
                        </span>
                    </div>
                    <div className="hamburger" onClick={handleChange}>
                        <img src={Hamburger} alt='' />
                    </div>
                     <SideNav isActive={isActive} onClose={() => setIsActive(!isActive)} />
                    
                </div>
            </nav>
        </>
    )
}


export default Navbar
 