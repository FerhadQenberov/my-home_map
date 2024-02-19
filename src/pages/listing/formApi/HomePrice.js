import React, { useState } from 'react'
import { price } from '../../../manager/features/allState';
import { useDispatch } from 'react-redux';

export default function HomePrice() {
  const dispatch=useDispatch()
  const [priceData, setPrice] = useState(null)
 
 
 
  function handlePrice(e) {
    setPrice(e.target.value)
  }
  if (priceData) {
    dispatch(price(priceData))

    
  }

  return (
    <div className="pt-10 flex items-center  flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px]  ">
      <label className="block w-[250px] mb-2 text-[14px] font-medium ">
        Qiymət
      </label>
      <input
        type="number"
        required
        value={priceData}
        onChange={handlePrice}
        name="price"
        id="price"
        className="border w-[324px] px-4 rounded-[4px] h-[42px] text-[13px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      
    </div>
  )
}
