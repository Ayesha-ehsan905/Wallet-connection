import { Networks } from "./constant";
import { NetworkDetail, WindowChain } from "./type";

//error if metamask extension is not installed
//if user reject the request
//if chain is not added
export const setUpNetwork = async (chainID: string) => {
  const provider = (window as WindowChain).ethereum;
  const networkDetail = await fetchNetworkDetail(+chainID); // current chain details

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
        if (switchError?.code === 4902) {
          try {
            await provider?.request?.({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${chainId.toString(16)}`,
                  chainName: networkDetail.chainName,
                  nativeCurrency: networkDetail.nativeCurrency,
                  rpcUrls: networkDetail.rpcUrls,
                  blockExplorerUrls: networkDetail.blockExplorerUrl,
                },
              ],
            });
            return true;
          } catch (error) {
            console.error(error);
            return false;
          }
        }
      }
    }
  }
};
export const fetchNetworkDetail = (
  chainID: number
): NetworkDetail | undefined => {
  const selectedNetwork = Networks.find((item) => item.chainId === chainID);
  return selectedNetwork as NetworkDetail | undefined;
};
