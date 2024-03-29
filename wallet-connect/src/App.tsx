import Navbar from "./component/Navbar/Navbar";
import abi from "./abi/Contractabi.json";
import { readContract, writeContract } from "@wagmi/core";
import { config } from "./wagmi/config";
import { Button } from "@chakra-ui/button";

function App() {
  const walletAddress = "0x4cF728dBfad4153E281E46f8ca5E07E5278aA0cD";
  const contractAddress = "0xa6cb5138df6fb1fe60da01b3537afa679ea6e38b";

  const contract = async () => {
    //check how many token in a wallet
    const result = await readContract(config, {
      abi,
      address: contractAddress,
      functionName: "balanceOf",
      args: [walletAddress],
    });
    console.log(result, "result");
  };

  const minting = async () => {
    const result = await writeContract(config, {
      abi,
      address: contractAddress,
      functionName: "mint",
      args: [1, 12, 12],
    });
    console.log(result, "minting");
  };
  return (
    <>
      <Navbar />
      <Button onClick={minting}>write Contract</Button>
    </>
  );
}

export default App;
