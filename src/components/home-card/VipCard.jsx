
import React from "react";
import CardHome from "../cardata/CardHome";
import { Link } from "react-router-dom";
import moreBtn from '../../assets/img/text-button.svg'
import { useFetchDataQuery } from "../../manager/api/apiSlice";


export default function VipCard() {
  let content

  const {isSuccess, data}=useFetchDataQuery()
 
  if (isSuccess) {
content=data?.data?.map((item, index)=>{
  return  <CardHome key={index} item={item}/>
})    
  }
  return (
    <>
      <div className="flex py-10 flex-wrap justify-between">
        <h2 className="font-extrabold text-btnColor text-[36px]">VIP elanlar</h2>
        <Link href="#" className="flex text-text font-bold text-[12px] items-center">
        Daha çox
          <img
              src={moreBtn}
              width={24}
              height={24}
              alt="text-arrow"
              className="ml-2"
        
            />
          </Link>

      </div>

       <div   className="grid max-w-screen-2xl mx-auto sm:place-items-center
        lg:place-items-stretch 
        lg:grid-cols-4 
        md:grid-cols-2
         sm:grid-cols-1
         xs:grid-cols-1 gap-8
       ">
       
     {content}
        
        
      </div>
    </>
  );
}
