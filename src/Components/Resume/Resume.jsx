import React from "react";
import { RESUME } from "../../Content";
import { NavLink } from "react-router-dom";

function Resume() {
  return (
    <div className="container mt-20 mx-auto w-full h-auto min-h-[80vh] border-black p-10 pb-20">
      <h1 className="text-3xl font-bold absolute top-28 left-56">
        <NavLink to="/profile">Resume</NavLink>
      </h1>

      <div className="flex flex-col gap-6 justify-center items-center mt-16">
        {RESUME.map((resume) => (
          <div
            key={resume.id}
            className="relative w-full max-w-3xl shadow-xl rounded-md p-5 flex flex-col gap-6 bg-white"
          >
            <h2 className="font-bold text-xl">{resume.name}</h2>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-start">
                <p className="text-sm font-semibold">{resume.duration}</p>
                <div>
                  <h2 className="text-lg font-bold">{resume.title}</h2>
                  <p className="text-xs text-gray-600">{resume.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}


export default Resume;
