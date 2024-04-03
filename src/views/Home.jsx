import AddButton from "../components/AddButton"
import CreateProject from "../components/CreateProject"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

const Home = () => {
  return(
    <>
    <Hero/>
    <Projects/>
    <div className=" flex justify-center  items-center my-5">
      <button type="button" className="inline-block px-6 py-2 bg-blue-800 text-white leading-tight hover: uppercase rounded-full shadow-lg"
    >Load more
    </button>
  </div>
  <CreateProject />
  <AddButton />
  </>
  )
}

export default Home