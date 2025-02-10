import { PROJECTS } from "../../Content/index.js"
import { NavLink } from "react-router-dom"


function Project() {
  return (
    <div className=" container mt-20 mx-auto w-full h-[80vh] border-black p-10 " >
      <NavLink to='/profile' >

        <h1 className=" text-3xl font-bold absolute top-28 left-56 " >Project</h1>
        <div className="box flex flex-col gap-4 justify-center items-center ">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="relative w-full  h-[400px] shadow-xl rounded-md p-5 flex flex-row gap-52 justify-center items-center"
            >
              <div>

                <h2 className="font-bold text-xl mb-4">{project.name}</h2>
                <div className="flex-grow w-[200px] mb-4 text-xs text-gray-600">
                  {project.discription}
                </div>
                
              </div>

              <div className="flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-[150px] object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </NavLink>
    </div>
  )
}

export default Project
