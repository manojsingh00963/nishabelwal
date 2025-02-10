import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=" w-full h-[70px] bg-slate-100 bottom-0 fixed" >
      <div className="line w-[95'vw] mx-auto h-[1px] bg-[#C7C7C7] rounded-sm "></div>
      <div className="box w-full h-10 flex justify-between items-center mt-4 mx-auto px-6 text-sm ">
        <div className="tag text-[10px] font-bold relative text-center ">
        <FaPhoneAlt className=" absolute right-[42px] top-[7px] " />
        Phone
        <p className="text-[8px] font-normal ">
        +123 0987654</p>
        </div>
        <div className="tag text-[10px] font-bold relative text-center ">
        Email
        <p className="text-[8px] font-normal ">
        <SiGmail  className=" absolute right-[45px] top-[7px] " />
        info.@gmail.com</p>

        </div>
        <div className="tag text-[10px] font-bold ">
        Follow Me
        <div className=" flex flex-row gap-2 "
        >
        <span className="text-[10px]"><FaInstagram /></span>
        <span className="text-[10px]"><FaLinkedinIn /></span>
        <span className="text-[10px]"><FaTwitter /></span>
        </div>
        </div>
        <div className="text-[8px] leading-3 text-center" >

        <div className="tag">
        &copy;2024 By Nisha-Belwal
        <p>Powered and secured by Coder.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
