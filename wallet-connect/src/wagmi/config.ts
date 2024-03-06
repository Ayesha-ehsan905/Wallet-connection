import { http, createConfig } from "wagmi";
import { injected, metaMask, walletConnect } from "wagmi/connectors";
import { base, mainnet } from "wagmi/chains";
const projectId = "af2f61a69d6f2e693f1183cd04aeb9a0";

export const config = createConfig({
  chains: [mainnet, base], //mainnet and test net
  connectors: [injected(), walletConnect({ projectId }), metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
