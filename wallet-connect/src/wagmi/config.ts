import { http, createConfig } from "wagmi";
import { injected, metaMask, walletConnect } from "wagmi/connectors";
import { base, mainnet } from "wagmi/chains";
const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [mainnet, base], //mainnet and test net
  connectors: [injected(), walletConnect({ projectId }), metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
