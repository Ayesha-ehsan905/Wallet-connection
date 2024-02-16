import { NetWorkChainId } from "./enum";
import { NetworksType } from "./type";

export const Networks: NetworksType[] = [
  {
    name: "Ethereum",
    chainName: "ethereum",
    chainId: NetWorkChainId.MAINNET,
    rpcUrls: [import.meta.env.VITE_API_KEY],
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    blockExplorerUrl: "https://etherscan.io",
    eventKey: "eth",
  },
  {
    name: "Rinkeby Test Nework",
    chainId: NetWorkChainId.RINKEBY,
    chainName: "rinkeby",
    rpcUrls: [import.meta.env.VITE_API_KEY],
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    blockExplorerUrl: "https://rinkeby.etherscan.io",
    eventKey: "eth",
  },
  {
    name: "Ropsten Test Nework",
    chainId: NetWorkChainId.ROPSTEN,
    chainName: "ropsten",
    rpcUrls: [import.meta.env.VITE_API_KEY],
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    blockExplorerUrl: "https://ropsten.etherscan.io/nwtworks",
    eventKey: "eth",
  },
  {
    name: "Binance Testnet",
    chainId: NetWorkChainId.BINANCE_TESTNET,
    chainName: "binance-testnet-smart-chain",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    blockExplorerUrl: "https://bscscan.com/",
    eventKey: "bnb",
  },
  {
    name: "Goerli Testnet",
    chainId: NetWorkChainId.GÖRLI,
    chainName: "goerli",
    nativeCurrency: {
      name: "ETH",
      symbol: "GoerliETH",
      decimals: 18,
    },
    rpcUrls: [import.meta.env.VITE_API_KEY],
    blockExplorerUrl: "https://goerli.etherscan.io",
    eventKey: "bnb",
  },
];
