import Address from "./formApi/Address";
import Dropzone from "./Dropzone";

import List from "./formApi/List";
import PropertyType from "./formApi/PropertyType";
import BuildType from "./formApi/BuildType";
import RepairType from "./formApi/RepairType";
import RoomCount from "./formApi/RoomCount";
import Floor from "./formApi/Floor";
import DocType from "./formApi/DocType";
import City from "./formApi/City";
import District from "./formApi/District";
import Settlement from "./formApi/Settlement";
import HomePrice from "./formApi/HomePrice";

import Sahe from "./formApi/Sahe";
import Elantype from "./formApi/Elantype";
import HomeAbout from "./formApi/Home-about";
import { selectAllCity, selectAllDistrict } from "../../manager/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { announcementTypes } from "../../manager/features/allState";


export default function Form() {
  const cityId=useSelector(selectAllCity)
  const districtId=useSelector(selectAllDistrict)
  const dispatch=useDispatch()
  const handleBuy=(type)=>{
    if (type==='satilir') {
      dispatch(announcementTypes(1))
      
    }else if(type==='kiraye'){
      dispatch(announcementTypes(2))
    }

  }



  return (
    <div className="max-w-[964px] min-w-[10px]  h-auto  mt-10 rounded-lg px-5 py-8 border border-main bg-white">
      <form method="GET" action="/elan/axtar">
        <h2 className="text-formText text-[16px] pb-4 font-normal">
          56% tamamlandı
        </h2>
        <div class="w-full bg-main rounded-full dark:bg-gray-700">
          <div
            className="bg-rangeColor text-xs font-medium text-blue-100 text-center h-[8px] leading-none rounded-full"
            style={{ width: "10%" }}
          ></div>
        </div>

        <div className="pt-10">
          <label htmlFor="elanTipi" className="   items-center flex flex-wrap  sm:w-auto w-full lg:w-full     ">
            <span className="font-medium w-[260px] text-formtext text-[14px]">
              Elan tipi
            </span>
            <div>
              <button type="button" onClick={()=>handleBuy('satilir')} className="w-[88px] rounded-s-[4px] text-[14px] font-medium h-[42px] text-textColor bg-main">
                Satılır
              </button>
              <button type="button" onClick={()=>handleBuy('kiraye')}  className="w-[88px] rounded-r-[4px] text-[14px] font-medium h-[42px] text-textColor bg-btnGray">
                Kirayə
              </button>
            </div>
          </label>
        </div>
        <List />
        <PropertyType />
        <BuildType />
        <RepairType />
        <Elantype />
        <RoomCount />
        <Sahe />
        <Floor />
        <DocType />
        <City  />
      {cityId ? <District /> :""}
        
      { districtId && cityId? <Settlement  />:null}

        <Address />
        <HomePrice />
        <HomeAbout />

        <div className="pt-10 flex ">
          <label class="block w-[250px] mb-2 text-[14px] font-medium ">
            Şəkillər
          </label>
          <Dropzone />
        </div>
      </form>
    </div>
  );
}
