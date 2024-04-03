// Project details
import Identicons from "react-identicons"
import { setGlobalState } from "../store";
const ProjectDetails = () => {
    return (
      <div className="pt-24 mb-5 px-6 flex justify-center">
        <div className=" flex justify-center items-center flex-col md:w-2/3">
          <div className="flex justify-start items-start sm:space-x-4 flex-wrap">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/33/51/source-vector-47533351.jpg"
              alt="Project title"
              className="rounded-xl h-64 object-cover w-full sm:w-1/3 object-cover"
            />
            <div className="flex-1 sm:py-0 py-4">
              <div className="flex flex-col justify-start flex-wrap">
                <h5 className="text-gray-950 text-sm font-medium mb-2">Project Lambo</h5>
                <small className=" text-gray-500">14 Days left</small>
              </div>

              <div className=" flex justify-between space-x-2">
              <div className="flex justify-between item-center w-full">
              <div className="flex justify-start space-x-2">
              <Identicons
                className= "rounded-full shadow-md"
                 string ="0x14....5gs2"
                 size={12} />
                <small className="text-gray-700">0x14....5gs2</small>
                <small className=" text-gray-500 font-bold">
                    {16} Backings
                </small>
              </div>
              <div className="font-bold">
                <small className=" text-gray-500"> Open</small>
              </div>
              </div>
              </div>
            </div>
          </div>
          <p className="text-sm font-light mt-5">
          wbdkjsbcjuekbc kejbc dnc defaulte nen che
          ec hebcehjb 
          </p>
          <div className=" w-full bg-gray-300 mt-5">
          <div
          className="bg-green-700 text-xs font-medium text-green-100 text-center p-0.5 leading-none
          rounded-l-full"
          style={{width: '69%'}}
          ></div>
          </div>
          
          <div className=" flex justify-between items-center t-3">
            <small>{3} ETH Raised </small>
            <small className=" flex justify-start items-center">
                <span>{10}ETH</span>
            </small>
          </div>
    <div className=" flex justify-start items-center space-x-3 mt-5">
    <button
       type="button"
        className="inline-block px-6 py-2.5 border border-blue-800
        font-medium text-xs leading-tight hover: uppercase text-white
        rounded-full shadow-md bg-blue-500 hover: bg-blue-500"
        onClick={() => setGlobalState ('backModel', 'scale-100' )}
        >
        Support Project
    </button>

    <button
       type="button"
        className="inline-block px-6 py-2.5 border border-gray-700
        font-medium text-xs leading-tight hover: uppercase text-white
        rounded-full shadow-md bg-gray-800"
        onClick={() => setGlobalState ('updateModel', 'scale-100' )}
        >
        Edit Project
    </button>
        
    <button
       type="button"
        className="inline-block px-6 py-2.5  border border-red-800
        font-medium text-xs leading-tight hover: uppercase text-white
        rounded-full shadow-md bg-red-600 "
        onClick={() => setGlobalState ('deleteModel', 'scale-100' )}
        >
        Delete Project
    </button>
        
    <button
       type="button"
        className="inline-block px-6 py-2.5 border border-green-600
        font-medium text-xs leading-tight hover: uppercase text-white
        rounded-full shadow-md bg-green-500">
        Payout
        </button>
      </div>
        </div>
      </div>
    );
  };
  
  export default ProjectDetails;
  