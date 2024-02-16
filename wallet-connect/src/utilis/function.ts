import { Networks } from "./constant";
import { WindowChain } from "./type";

export const setUpNetwork = async (chainID: string = "5") => {
  const provider = (window as WindowChain).ethereum;
  const networkDetail = await fetchNetworkDetail(+chainID); // current chaai detial
  if (networkDetail !== undefined) {
    if (provider) {
      const chainId = parseInt(chainID as string, 10);
      try {
        await provider?.request?.({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
      } catch (switchError: any) {
        console.log(switchError, "switchError");
        if (switchError?.code === 4001) {
          return 4001; //user reject
        }
        if (switchError === 4002) {
          //when network not found and we have to add using add wallet etherum
        }
      }
    }
  }

  console.log(provider);
};
export const fetchNetworkDetail = (chainID: number) => {
  let selectedNetwork;
  // eslint-disable-next-line
  Networks.map((item) => {
    if (item.chainId === chainID) {
      selectedNetwork = item;
    }
  });
  return selectedNetwork;
};
