// "use strict;";
import { createContext, useContext, useState, PropsWithChildren } from "react";
interface SocialContextType {
  account: string;
  setAccount: (value: string) => void;
  contract: unknown; // Change 'any' to the actual type of 'contract' if possible
  setContract: (value: any) => void;
  provider: any; // Change 'any' to the actual type of 'provider' if possible
  setProvider: (value: any) => void;
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const SocialContext = createContext<SocialContextType>({
  account: "",
  setAccount: () => {},
  contract: null,
  setContract: () => {},
  provider: null,
  setProvider: () => {},
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const useContract = () => useContext(SocialContext);

export const SocialProvider = (props: PropsWithChildren<{}>) => {
  const [account, setAccount] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
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
        isAuthenticated,
        setAuthenticated,
      }}
    >
      {props.children}
    </SocialContext.Provider>
  );
};

export default SocialProvider;
