import { createContext, useContext, useState, PropsWithChildren } from "react";

interface SocialContextType {
  account: string;
  setAccount: (value: string) => void;
  contract: any; // Change 'any' to the actual type of 'contract' if possible
  setContract: (value: any) => void;
  provider: any; // Change 'any' to the actual type of 'provider' if possible
  setProvider: (value: any) => void;
  userType: string;
  setUserType: (value: string) => void;
}

export const SocialContext = createContext<SocialContextType>({
  account: "",
  setAccount: () => {},
  contract: null,
  setContract: () => {},
  provider: null,
  setProvider: () => {},
  userType: "",
  setUserType: () => {},
});

export const useContract = () => useContext(SocialContext);

export const SocialProvider = (props: PropsWithChildren<{}>) => {
  const [userType, setUserType] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);

  return (
    <SocialContext.Provider
      value={{
        account,
        setAccount,
        contract,
        setContract,
        provider,
        setProvider,
        userType,
        setUserType
      }}
    >
      {props.children}
    </SocialContext.Provider>
  );
};

export default SocialProvider;
