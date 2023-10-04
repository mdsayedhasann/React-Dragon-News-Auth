import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <div className="bg-gray-100 my-4 w-full py-3 px-2 rounded-md flex items-center">
        <p className="bg-[#D72050] px-4 rounded-md ml-3 py-2 text-white ">
          Latest
        </p>

        <p className="font-bold">
          <Marquee speed={100} pauseOnHover={true} >
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </p>
      </div>
    </div>
  );
};

export default BreakingNews;
