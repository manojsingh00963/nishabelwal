// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className=" flex justify-between items-center text-center w-full h-10 bg-slate-200 "  >
      <div className="left ml-4 flex gap-[4px] items-center text-center ">
      <span className=" w-5 h-5 bg-[#EEA302] rounded-full " ></span>
        <h2 className=" cursor-not-allowed " >
        <NavLink to='/profile'>
        NiSha BelwaL
        </NavLink>
        </h2>
      <span className=" mt-1 text-[10px] text-slate-800 border border-t-0 border-r-0 border-l-0 border-b-slate-900 p-[2px] " >Web-Developer</span>
      </div>
      <div className="right flex mr-16 NavLinkst-none gap-[6px]">
        <NavLink className=" cursor-pointer " to="/resume" >Resume</NavLink>
        <span className=" w-[1px] h-6 bg-[#171717] " ></span>
        <NavLink className=" cursor-pointer " to="/project" >Project</NavLink>
        <span className=" w-[1px] h-6 bg-[#171717] " ></span>
        <NavLink className=" cursor-pointer " to="/contact"  >Contact</NavLink>
      </div>
    </div>
  )
}

export default Header
