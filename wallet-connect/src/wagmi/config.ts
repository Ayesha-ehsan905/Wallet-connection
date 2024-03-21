import { http, createConfig } from "wagmi";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";
import { base, mainnet } from "wagmi/chains";
const projectId = "af2f61a69d6f2e693f1183cd04aeb9a0";

export const config = createConfig({
  chains: [mainnet, base], //mainnet and test net
  connectors: [
    coinbaseWallet({
      appName: "YourAppName",
      // appLogoUrl: "https://example.com/logo.png",
      // darkMode: true,
      // linkAPIUrl: "https://example.com/linkapi",
      // Add other properties as needed
    }),
    walletConnect({ projectId }),
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
