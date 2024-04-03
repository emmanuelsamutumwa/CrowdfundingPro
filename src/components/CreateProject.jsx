import { FaTimes } from "react-icons/fa";
import { useGlobalState, setGlobalState } from '../store';
import { useState } from "react";
import { createProject } from "../services/blockchain";
import { toast } from "react-toastify";

const CreateProject = () => {
  const [createModal] = useGlobalState('createModal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [imageURL, setImageURL] = useState('');

  const closeModal = () => {
    setGlobalState("createModal", 'scale-0');
  };

  const toTimestamp = (dateStr) =>{
    const dateObj = Date.parse(dateStr)
    return dateObj /1000
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation logic goes here
    if (!title || !description || !cost || !date || !imageURL) return;

    const params = {
      title,
      description,
      cost,
      expiresAt: toTimestamp(date),
      imageURL
    }

    console.log(params);

    await createProject(params)
    toast.success('Project has been created successfully, it will reflect shortly.')
  }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${createModal}`}>
      <div className="bg-white shadow-lg rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Add New Project</p>
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
                src={imageURL || "https://cdn2.vectorstock.com/i/1000x1000/33/51/source-vector-47533351.jpg"}
                alt="Project title"
                className="h-full object-cover w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="text"
              name="title"
              placeholder="  Project Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="cost"
              placeholder="  Cost (ETH)"
              onChange={(e) => setCost(e.target.value)}
              value={cost}
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="date"
              name="date"
              placeholder="  Deadline"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <input
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0"
              type="text"
              name="imageURL"
              placeholder="  Image URL"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
              required={true}
            />
          </div>
          <div className="flex justify-between items-center bg-gray-300 rounded-l mt-7">
            <textarea
              className="block w-full bg-transparent border-0 text-sm text-black focus:outline focus:ring-0 "
              name="description"
              placeholder="  Project Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required={true}
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-block px-6 py-2.5 border border-blue-800 font-medium text-xs leading-tight hover:uppercase text-blue-800 rounded-full shadow-md bg-transparent hover:bg-blue-500 mt-10"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
