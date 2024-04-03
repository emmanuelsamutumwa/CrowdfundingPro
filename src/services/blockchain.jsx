import abi from '../abis/src/contracts/Crowdfunding.sol/Crowdfunding.json'
import address from '../abis/contractAddress.json'
import { getGlobalState, setGlobalState } from '../store'
import { ethers } from 'ethers'

const { ethereum } = window;
console.log(window.ethereum);

const contractAddress = address.address;
const contractAbi = abi.abi;

const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask')
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
    } catch (error) {
      reportError(error)
    }
}

const isWallectConnected = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask')
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
  
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload()
      })
  
      window.ethereum.on('accountsChanged', async () => {
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
        await isWallectConnected()
      })
  
      if (accounts.length) {
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
      } else {
        alert('Please connect wallet.')
        console.log('No accounts found.')
      }
    } catch (error) {
        reportError(error)
      }
    }

    const getEtheriumContract = async () => {
      const connectedAccount = getGlobalState('connectedAccount');
  
      if (connectedAccount && ethereum) { // Check if ethereum is available
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  
          return contract;
      } else {
          return getGlobalState('contract');
      }
  }
  
    
    const createProject = async ({
      title,
      description,
      imageURL,
      cost,
      expiresAt,
  }) => {
      try {
          if (!ethereum) throw new Error('No ethereum object'); // Check if ethereum object exists
          const contract = await getEtheriumContract();
          cost = ethers.utils.parseEther(cost);
          const tx = await contract.createProject(title, description, imageURL, cost, expiresAt);
          await tx.wait();
          await loadProjects();
      } catch (error) {
          reportError(error);
      }
  }
  
const reportError = (error) => {
    console.log(error.message)
    throw new Error('No ethereum object')
}

export { connectWallet, isWallectConnected, createProject };
