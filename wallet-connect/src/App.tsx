import { useAccount } from "wagmi";
import { Account } from "./Account";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
