import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./wagmi/config.ts";
import { WagmiProvider } from "wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/commonTheme.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
