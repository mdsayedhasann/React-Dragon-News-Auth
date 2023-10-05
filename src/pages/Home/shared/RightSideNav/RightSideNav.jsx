import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import qZone1 from '../../../../assets/qZone1.png'
import qZone2 from '../../../../assets/qZone2.png'
import qZone3 from '../../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Login with</h2>

      <div className="mt-4">
        <button className="btn btn-outline w-full gap-4 ">
          <FcGoogle></FcGoogle>
          Login with Google
        </button>
      </div>

      <div className="mt-4">
        <button className="btn btn-outline w-full gap-4 ">
          <ImGithub></ImGithub>
          Login with GitHub
        </button>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-bold">Find Us On</h2>

        <div className="flex justify-start gap-5 text-xl border px-3 mt-3 mx-2 py-2 rounded-t-md items-center">
            <BsFacebook></BsFacebook>
            <a href="">
                Facebook
            </a>
        </div>


        <div className="flex justify-start gap-5 text-xl border-x px-3 mx-2 py-2 items-center">
            <BsTwitter></BsTwitter>
            <a href="">
                Twitter
            </a>
        </div>

        <div className="flex justify-start gap-5 text-xl border-x px-3 mx-2 py-2 items-center border rounded-b-md">
            <BsInstagram></BsInstagram>
            <a href="">
                Instagram
            </a>
        </div>
      </div>


      <div className="mt-7 bg-[#F3F3F3] py-3">
      <h2 className="text-xl font-bold px-4">Q-Zone</h2>
        <img className="ml-6" src={qZone1} alt="" />
        <img className="ml-6" src={qZone2} alt="" />
        <img className="ml-6" src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
