import { useAccount } from "wagmi";
import { Account } from "./Account";
import { WalletOptions } from "./WalletOption";

function App() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export default App;
