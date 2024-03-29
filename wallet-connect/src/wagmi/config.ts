import { polygonMumbai } from "viem/chains";
import { http, createConfig } from "wagmi";
import { metaMask } from "wagmi/connectors";
// const projectId = "af2f61a69d6f2e693f1183cd04aeb9a0";

export const config = createConfig({
  chains: [polygonMumbai], //mainnet and test net
  connectors: [metaMask()],
  transports: {
    [polygonMumbai.id]: http(),
  },
});
