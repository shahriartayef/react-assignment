import React from "react";
import Container from "./Container";
const Banner = ({ inProgress, resolved }) => {
  return (
    <div className=" text-white py-8 px-6">
      <Container>
        <div className="flex gap-8 ">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-500  rounded-lg h-[250px] w-[708px] flex flex-col items-center justify-center mx-auto">
          <p className="text-[32px]">In Progress</p>
          <h2 className="text-[50px] font-bold">{inProgress}</h2>
        </div>
        <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] h-[250px] rounded-lg w-[708px] flex flex-col items-center justify-center mx-auto">
          <p className="text-[32px]">Resolved</p>
          <h2 className="text-[50px] font-bold">{resolved}</h2>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Banner;