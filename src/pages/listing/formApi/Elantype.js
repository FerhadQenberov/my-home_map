import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { houesarea } from '../../../manager/features/allState';

const Elantype = () => {
  const [value, setValue]=useState(null)
  const dispatch=useDispatch()
 
if (value) {
  dispatch(houesarea(value))
  
}
  return (
    <>
      <div className="pt-10  flex items-center flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
        <label className="w-[250px] mb-2 text-[14px]  font-medium" htmlFor="areaInput">
          Sahəsi
        </label>
        <input
          type="number"
          id="areaInput"
          min="0"
          placeholder='0'
          
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="bg-white border outline-none h-[42px] border-selectColor text-gray-900 text-[14px] rounded-[4px] w-[114px] p-2.5"
        />
        {/* <span className="bg-white text-gray-400 absolute left-[36%] font-medium text-[18px]">
        
        </span> */}
      </div>
    </>
  );
};

export default Elantype;
