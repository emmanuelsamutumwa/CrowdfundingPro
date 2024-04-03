import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./views/Home";
import Project from "./views/Project";
import { useEffect } from "react";
import { isWallectConnected } from "./services/blockchain";
import { ToastContainer } from "react-toastify";


const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      await isWallectConnected();
      console.log("Blockchain is connected");
    };

    fetchData();

    // Since there's no clean-up needed, return an empty function
    return () => {};
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
    </Router>
    
  );
};

export default App;
