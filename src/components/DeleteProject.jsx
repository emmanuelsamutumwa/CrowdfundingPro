import { FaTimes } from "react-icons/fa";
import { useGlobalState, setGlobalState } from '../store';

const DeleteProject = () => {
  const [deleteModel] = useGlobalState('deleteModel');

  const closeModal = () => {
  setGlobalState("deleteModel", 'scale-0');
};


  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${deleteModel}`}>
      <div className="bg-white shadow-lg rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Project Title</p>
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
          <div className="flex flex-col justify-center items-center bg-gray-300 rounded-l mt-7">
          <p>Are you sure?</p>
          <small className=" text-red-600">This can not be undone!</small>
          </div>
          <button
            type="button"
            className="inline-block px-6 py-2.5 border border-red-800 font-medium text-xs leading-tight hover:uppercase text-white rounded-full shadow-md bg-red-500 mt-10"
          >
            Delete Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProject;
