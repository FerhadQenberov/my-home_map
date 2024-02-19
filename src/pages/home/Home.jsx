import React from "react";
import Header from "../../layout/Header";
import VipCard from "../../components/home-card/VipCard";
import EndAdd from "../../components/home-card/EndAdd";
import Apartman from "../../components/home-card/Apartman";
import Courtyard from "../../components/home-card/Courtyard";


const Home = () => {
  return (
    <>
      <main className=" h-full">
        <Header />
        <div className="max-w-[1300px] mx-auto">
          <VipCard />
          <EndAdd />
          <Apartman />
          <Courtyard />
        </div>
     
      </main>
    </>
  );
};

export default Home;
