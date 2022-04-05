import React from "react";
import "./style.scss";
import Image from '../../../Assets/Images/white-24dp/1x/outline_close_white_24dp.png'

const SideBar = ({ isActive, onClose }) => {

  const HandleClick = () => {
    onClose()
  };
  return (
    <>
      <div
        className={`sidenav_container ${
          isActive ? "open_side_nav" : "close_side_nav"
        }`}
      >
        <ul>
          <span className='margin flex'>
            <div>
              <li>What we do</li>
            <li className="none">Capabilities</li>
            <li className="none">Industries</li>
            <li className="none bottom">Buzz Topics</li>
            </div>
            <div>
              <img src={Image} onClick={HandleClick} alt=''/>
            </div>
          </span>
          <span className='margin'>
            <li>What drives us</li>
            <li className="none bottom">Stories</li>
          </span>
          <span className='margin'>
            <li>Who we are</li>
            <li className="none">Locations</li>
            <li className="none bottom">About</li>
          </span>
          <span className='margin'>
            <li>Work with us</li>
            <li className="none">Career</li>
          </span>
          <li><input className='input' type='text' placeholder='search'/></li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;