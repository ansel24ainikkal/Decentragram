import { ethers } from "ethers";
import abi from "../../../contractJSON/abi.json";
import { useContext, useEffect, useState } from "react";
import { SocialContext } from "@/context/contractContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import detectEthereumProvider from "@metamask/detect-provider";
// import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { SignupValidation } from "@/lib/validation";
import { z } from "zod";
import Loader from "@/components/shared/Loader";
import { Link, Navigate, useNavigate } from "react-router-dom";

const provider = await detectEthereumProvider();
if (provider) {
  startApp(provider);
} else {
  console.log("Please install Metamask");
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  }
}

const SignInForm = () => {
  const { setAccount, setContract, setProvider, setAuthenticated } =
    useContext(SocialContext);
  // const navigate = useNavigate();
  const genContract = async () => {
    const browserProvider = new ethers.BrowserProvider(window.ethereum);
    const signer = await browserProvider.getSigner();
    const contract = new ethers.Contract(abi.address, abi.abi, signer);
    setContract(contract);
    //contract.createAccount(userName)
    //contract.createPost()
    setProvider(browserProvider);
    setAccount(await signer.getAddress());
    // console.log(signer);
    if (contract && signer) {
      // setAuthenticated(await signer.getAddress());
      let res = await contract.login();
      if(res[0] == ""){
        let new_acc = await contract.createAccount("Advait Yadav", "myemail@123.com", 0);
        if(new_acc){
          console.log("succcessss");
          setAuthenticated(new_acc);
        }
      }
      else{
        setAuthenticated(true);
        console.log(res);
      }
    }
  };
  useEffect(() => {
    genContract();
  }, []);

  const formSchema = z.object({});
  // const isloading = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  }
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("here");

    const { contract } = useContext(SocialContext);
    // let succ = await contract.createAccount(z.);
    // if (succ) console.log("succ");
    // else console.log("gay");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    return <Navigate to="/" />;
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="src/assets/images/logo.svg" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Sign In</h2>
        <p className="text-light-3 small-medium md:base-regular">
          Enter your details to Sign in
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          {/* <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* 
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Link to="/home-page" className="shad-button_primary">
            {/* {isloading ? ( */}
            <div className="flex-center gap-2">
              {/* <Loader /> Loading ... */}
              Sign In
            </div>
            {/* ) : ( */}
            {/* )} */}
          </Link>
          {/* <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/home-page"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p> */}
        </form>
      </div>
    </Form>
  );
  // import { useContract } from "@/context/contractContext"

  // return <div>SignInForm</div>;
};

export default SignInForm;
