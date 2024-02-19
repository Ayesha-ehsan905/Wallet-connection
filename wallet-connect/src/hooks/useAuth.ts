import { useWeb3React } from "@web3-react/core";

export const useAuth = () => {
  const { isActive, account } = useWeb3React();
  if (isActive) {
    console.log("Wallet is connected");
    console.log("Connected account:", account);

    // You can perform actions or render content based on the connected state
  } else {
    console.log("Wallet is not connected");

    // You can prompt the user to connect their wallet or render content accordingly
  }
};
