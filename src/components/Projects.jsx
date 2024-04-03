import { Link } from "react-router-dom"
import Identicons from "react-identicons"

//Hosts all projects on crowdfund
const Projects = () => {
  return (
    <div className=" flex flex-col px-6">
      <div className=" flex justify-center items-center flex-wrap">
      {Array(10)
      .fill()
      .map((card, i) =>(
        <ProjectCard key={i} id={i} project={card}/>
      ))}
      </div>
    </div>
  )
}

const ProjectCard = ({project,id}) => (
  <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
  <Link to={'/projects/' + id}>
    <img
      src= "https://cdn2.vectorstock.com/i/1000x1000/33/51/source-vector-47533351.jpg"
      alt="Project title"
      className="rounded-xl h-64 w-full object-cover"
    />
    <div className=" p-4">
      <h5>Project Lambo</h5>

      <div>
        <div className=" flex justify-between mb-3 items-center">
          <Identicons
          className= "rounded-full shadow-md"
          string ="0x14....5gs2"
          size={12} />
          <small className="text-gray-700">0x14....5gs2</small>
        </div>
        <small className=" text-gray-500">
          14 Days left
        </small>
      </div>
      <div className="w-full bg-white">
          <div className=" bg-orange-500 text-xs font-medium text-blue-300 text-center p-0.5 leading-none rounded-l-full"
            style={{width: '69%'}}> 
          </div>
          <div className=" flex justify-between items-center flex-wrap mt-4 mb-2 text-black font-bold">
            <small>{14} Backers</small>
            <div>
              <small className="text-green-500"> Open</small>
            </div>
          </div>

      </div>
    </div>
  </Link>
  </div>
)
export default Projects