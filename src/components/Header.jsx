import { Link } from "react-router-dom"
import { isWallectConnected, connectWallet } from "../services/blockchain"
import { truncate, useGlobalState } from "../store"

const Header = () => {
  const [connectedAccount] = useGlobalState ('connectedAccount')
  return <header className=" bg-white text-gray-500  flex justify-between items-center p-5 shadow-lg fixed top-0 right-0 left-0">
  
  <Link 
  to= "./"
  className=" flex justify-start items-center text-xl text-black"> 
  <span className="">C&E CROWDFUNDING </span>
  </Link>

  <div className=" flex space-x-2 justify-center">
    {connectedAccount ? (
      <button type="button" className="inline-blockn px-6 py-2 bg-blue-800
       text-white leading-tight hover: uppercase rounded-full shadow-lg
        hover:bg-blue-600"
    >
      {truncate(connectedAccount,4,4,11)}
    </button>
    ) : (
      <button type="button" className="inline-blockn px-6 py-2 bg-blue-800
       text-white leading-tight hover: uppercase rounded-full shadow-lg
        hover:bg-blue-600"
        onClick={connectWallet}
        >
        Connect MetaMask Wallet
    </button>
    )}
  </div>
  
  </header>
  
}

export default Header