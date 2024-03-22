import React, { useContext, useEffect } from "react";
import {ethers} from "ethers";
import abi from "../../abi.json";
import { SocialContext } from "@/context/contractContext";
// import { useContract } from "@/context/contractContext";
const SignInForm = () => {
  const {setAccount, setContract, setProvider} = useContext(SocialContext);
  let genContract = async ()=>{
    let browserProvider = new ethers.BrowserProvider(window.ethereum);
    let signer = await browserProvider.getSigner();
    let address = "0x621Ae105e30A01d0C3DB8C271fF4B95C50F3e31D";
    const contract = new ethers.Contract(address,abi,signer);
    console.log(contract);
    setContract(contract);
    setProvider(browserProvider);
    setAccount(await signer.getAddress());
    console.log(signer);
  }
  useEffect(()=>{
    genContract();
    
  }, [])

  return <div>SignInForm</div>;
};

export default SignInForm;
