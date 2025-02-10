import profile from "./programmer ❣️❣️.jpeg"
import { NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

function MainProfile() {

  const container = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2.5, delay: delay ,easeInOut},
    }
  });


  return (
    <motion.div
    initial={{ opacity: 0, y:50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
     className=" w-full h-[80vh] flex items-center place-content-center gap-5 " >
      <div className="left">
        <motion.img
        // initial={{ rotate: 0 }}
        // animate={{ rotate: 360 }}
        
         src={profile} alt="profile" width={250} height={250} className=" rounded-full cursor-none " />
      </div>
      <div className="right h-full content-center ">
        <h1 className=" text-4xl font-bold leading-8 ">Hello</h1>
        <h2 className=" mt-5 font-semibold text-[12px] " >A Bit About Me</h2>
        <p className=" w-[250px] text-[10px]" >I&apos;m paragraph to click here add your own text and edit me, I&apos;m grete place for you to tell a story and let your user know a little more about you. </p>
        <div className="box flex w-full text-center justify-start mt-5 gap-4 text-gray-950 font-semibold ">
          <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className=" text-[12px] border-[1px] border-slate-900 rounded-full w-[70px] h-[70px] bg-[#EEA302] content-center cursor-pointer hover:transition-all hover:ease-in-out hover:duration-500 hover:bg-[#F3F3F3] " >
          <NavLink to="/resume">
          Resume
          </NavLink>
          </motion.div>
          <motion.div
          variants={container(0.7)}
          initial="hidden"
          animate="visible"
           className=" text-[12px] border-[1px] border-slate-900 rounded-full w-[70px] h-[70px] bg-[#FF3B25] content-center cursor-pointer hover:transition-all hover:ease-in-out hover:duration-500 hover:bg-[#F3F3F3] " >
           <NavLink to="/project">
            Project
           </NavLink>
           </motion.div>
          <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
           className=" text-[12px] border-[1px] border-slate-900 rounded-full w-[70px] h-[70px] bg-[#80D8DA] content-center cursor-pointer hover:transition-all hover:ease-in-out hover:duration-500 hover:bg-[#F3F3F3] " >
           <NavLink to="/contact">
            Contact
           </NavLink>
           </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default MainProfile
