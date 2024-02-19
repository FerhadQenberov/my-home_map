import React from 'react'
import { selectAllData } from '../../../manager/features/allState'
import { useSelector } from 'react-redux'

const SubmitForm = () => {
    const postData=useSelector(selectAllData)
    const formdata=new FormData()
    
    const submitForm=()=>{
       


    }

    
  return (
    <>
       <button type="button" onClick={submitForm} className="bg-btnColor w-[159px] h-[56px] text-white font-semibold text-[14px] rounded-[4px]">
      Elanı Göndər
    </button>
      
    </>
  )
}

export default SubmitForm
