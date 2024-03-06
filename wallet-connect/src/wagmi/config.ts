import { http, createConfig } from "wagmi";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";
import { base, mainnet } from "wagmi/chains";
const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
