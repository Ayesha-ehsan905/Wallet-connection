import { http, createConfig } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { goerli } from "wagmi/chains";
// const projectId = "af2f61a69d6f2e693f1183cd04aeb9a0";

export const config = createConfig({
  chains: [goerli], //mainnet and test net
  connectors: [metaMask()],
  transports: {
    [goerli.id]: http(),
  },
});
