import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { homeAbout } from '../../../manager/features/allState';

const HomeAbout = () => {
  const dispatch=useDispatch()
  const [homeText, setHomeText] = useState('');
 

  const handleTextareaChange = (event) => {
    setHomeText(event.target.value);
  };
  if (homeText) {
    dispatch(homeAbout(homeText))
    
  }



  return (
    <>
      <div className="pt-10 flex items-center ">
        <label className="block w-[250px] mb-2 text-[14px] font-medium flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
          Ev haqqında
        </label>
        <textarea
     
          className="border text-[13px] rounded-[4px] h-[200px] outline-none"
          value={homeText}
          onChange={handleTextareaChange}
          cols="60"
          rows="60"
        ></textarea>
      </div>
    </>
  );
};

export default HomeAbout;
