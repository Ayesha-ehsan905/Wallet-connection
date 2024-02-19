import { ReactNode } from "react";

export type NetworksType = {
  name: string;
  selectIcon?: ReactNode;
  chainId: number;
  chainName: string;
  rpcUrls: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrl: string;
  address?: string;
  eventKey: string;
};
export interface WindowChain {
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => void;
  };
}
export type NetworkDetail = {
  chainId: number;
  chainName: string;
  nativeCurrency: number;
  rpcUrls: string[];
  blockExplorerUrl: string[];
};
