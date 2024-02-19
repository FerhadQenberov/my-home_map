
import React from "react";
import CardHome from "../cardata/CardHome";
import { Link } from "react-router-dom";
import moreBtn from '../../assets/img/text-button.svg'

const EndAdd = () => {
  return (
    <>
      <div className="flex py-4 flex-wrap justify-between">
        <h2 className="font-extrabold text-[36px] text-btnColor">Son elanlar</h2>
        <Link
          href="#"
          className="flex text-text font-bold text-[12px] items-center"
        >
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
      <div className="flex pb-6   font-bold space-x-4">
        <Link
          href="#"
          className="flex text-text font-bold text-[18px] items-center"
        >
          Alqı-satqı
        </Link>
        <Link
          href="#"
          className="flex text-text font-bold text-[18px] items-center"
        >
          Kirayə
        </Link>
        <Link
          href="#"
          className="flex text-text font-bold text-[18px] items-center"
        >
          Günlük kirayə
        </Link>
      </div>

      <div
        className="grid max-w-screen-2xl mx-auto sm:place-items-center
        lg:place-items-stretch 
        lg:grid-cols-4 
        md:grid-cols-2
         sm:grid-cols-1
         xs:grid-cols-1 gap-8"
      >
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </>
  );
};

export default EndAdd;
