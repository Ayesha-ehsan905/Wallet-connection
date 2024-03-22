import { Address } from "viem";
import Navbar from "./component/Navbar/Navbar";
import abi from "./abi/Contractabi.json";
import { readContract } from "@wagmi/core";
import { config } from "./wagmi/config";
import { Button } from "@chakra-ui/button";

function App() {
  const contract = async () => {
    const tokenId = 32;
    const result = await readContract(config, {
      abi,
      address: "0xd82f274123C69Fac621284bf4A76b494d6bc6a2D",
      functionName: "ownerOf",
      args: [tokenId],
    });
    console.log(result);
  };
  return (
    <>
      <Navbar />
      <Button onClick={contract}>Read Contract</Button>
    </>
  );
}

export default App;
