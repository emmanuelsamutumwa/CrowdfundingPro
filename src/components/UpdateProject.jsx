import { FaTimes } from "react-icons/fa";
import { useGlobalState, setGlobalState } from '../store';

const UpdateProject = () => {
  const [updateModel] = useGlobalState('updateModel');

  const closeModal = () => {
  setGlobalState("updateModel", 'scale-0');
};


  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${updateModel}`}>
      <div className="bg-white shadow-lg rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Update Project</p>
            <button 
              onClick={closeModal}
              type="button" 
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
              <img
                src="https://cdn2.vectorstock.com/i/1000x1000/33/51/source-vector-47533351.jpg"
                alt="Project title"
                className="h-full object-cover w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="text"
              name="amount"
              placeholder="  Project Title"
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="amount"
              placeholder="  Amount (ETH)"
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="date"
              name="date"
              placeholder="  Deadline"
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="text"
              name="imageURL"
              placeholder="  Image URL"
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <textarea
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0 "
              name="description"
              placeholder="  Project Description"
              required={true}
            ></textarea>
          </div>
          <button
            type="button"
            className="inline-block px-6 py-2.5 border border-blue-800 font-medium text-xs leading-tight hover:uppercase text-blue-800 rounded-full shadow-md bg-transparent hover:bg-blue-500 mt-10"
          >
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
