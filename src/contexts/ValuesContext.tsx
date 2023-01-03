import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface CryptoProps {
  bitcoin: string;
  ethereum: string;
}

export interface ValuesContextDataProps {
  howMuchBuyBTC: string;
  setHowMuchBuyBTC: Dispatch<SetStateAction<string>>;

  howMuchBuyETH: string;
  setHowMuchBuyETH: Dispatch<SetStateAction<string>>;

  percentageBuyBTC: string;
  setPercentageBuyBTC: Dispatch<SetStateAction<string>>;

  percentageBuyETH: string;
  setPercentageBuyETH: Dispatch<SetStateAction<string>>;

  prices: CryptoProps;
  setPrices: Dispatch<SetStateAction<CryptoProps>>;
}

type ValuesProviderProps = {
  children: ReactNode;
};

export const ValuesContext = createContext(
  {} as ValuesContextDataProps
);

function ValuesContextProvider({ children }: ValuesProviderProps) {
  const [howMuchBuyBTC, setHowMuchBuyBTC] = useState("");
  const [howMuchBuyETH, setHowMuchBuyETH] = useState("");
  const [percentageBuyBTC, setPercentageBuyBTC] = useState("");
  const [percentageBuyETH, setPercentageBuyETH] = useState("");
  const [prices, setPrices] = useState<CryptoProps>({} as CryptoProps);

  return (
    <ValuesContext.Provider
      value={{
        howMuchBuyBTC,
        setHowMuchBuyBTC,
        howMuchBuyETH,
        setHowMuchBuyETH,
        percentageBuyBTC,
        setPercentageBuyBTC,
        percentageBuyETH,
        setPercentageBuyETH,
        prices,
        setPrices,
      }}
    >
      {children}
    </ValuesContext.Provider>
  );
}

export { ValuesContextProvider };
