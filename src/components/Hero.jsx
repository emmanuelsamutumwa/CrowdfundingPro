import { setGlobalState } from "../store"

function Hero() {
  return (
    <div className="py-24 px-6 text-center text-gray-800">
    <h1 className= " bg-white text-5xl md:text-6xl cl:text-7xl font-bold tracking-tight mb-12">
      <span className="capitalize"> Your #1 crowdfunding platform</span>
      <br/>
      <span className="uppercase text-blue-800">C&E</span>
    </h1>
      <div className=" flex justify-center items-center space-x-3">
      <button
       type="button"
        className="inline-blockn px-6 py-2.5 bg-blue-800 border border-blue-800
        font-medium text-xs leading-tight hover: uppercase text-white
        rounded-full shadow-lg hover: bg-blue-600"
        onClick={() => setGlobalState  ("createModal", 'scale-100')}
        >
        Add New Project
    </button>

    <button
       type="button"
        className="inline-block px-6 py-2.5 border border-blue-800
        font-medium text-xs leading-tight hover: uppercase text-white
        rounded-full shadow-lg bg-blue-500 ">
        Support Project
    </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className=" flex flex-col justify-center items-center h-20 border border-gray-300 shadow-md w-full">
            <span className="text-lg font-bold text-blue-900 leading-5">
            {0}
            </span>
            <span>Projects</span>
        </div>
              <div className=" flex flex-col justify-center items-center h-20 border border-gray-300 shadow-md w-full">
            <span className="text-lg font-bold text-blue-900 leading-5">
            {0}
            </span>
            <span>Backings</span>
        </div>
      <div className=" flex flex-col justify-center items-center h-20 border border-gray-300 shadow-md w-full">
            <span className="text-lg font-bold text-blue-900 leading-5">
            {0} ETH
            </span>
            <span>Donated</span>
        </div>
      </div>

    </div>
  )
}

export default Hero