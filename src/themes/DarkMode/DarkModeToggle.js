import React from 'react';

import './DarkModeToggle.scss';
import useDarkMode from 'use-dark-mode';

import Goggles from "../../static/images/icons/bender-face-2.png"
import GogglesDarkMode from "../../static/images/icons/bender-face-2-red-eyes.png"


const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  
  return (
    <div className="dark-mode-toggle">
      <input
        // className="icon glasses"
        className="icon"
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        id="dm-toggle"
      />
      <img className="goggles" src={Goggles} alt="goggles-logo"/>
      <img className="goggles-dark-mode" src={GogglesDarkMode} alt="goggles-logo"/>
    </div>
  );
};

export default DarkModeToggle;


  // return (
  //   <div className="dark-mode-toggle">
  //     <input
  //       className="icon glasses"
  //       type="checkbox"
  //       checked={darkMode.value}
  //       onChange={darkMode.toggle}
  //       id="dm-toggle"
  //     />
  //   </div>
  // );