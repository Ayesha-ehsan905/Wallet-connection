import { useEffect, useState } from "react";
import { Connector, useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  console.log(connectors, "connectors");
  const [uniqueConnectors, setUniqueConnectors] = useState<Connector[]>([]);

  useEffect(() => {
    // Sort connectors array based on type, with "injected" type connectors first
    const sortedConnectors = [...connectors].sort((a, b) => {
      if (a.type === "injected" && b.type !== "injected") {
        return -1;
      } else if (a.type !== "injected" && b.type === "injected") {
        return 1;
      }
      return 0;
    });
    // Filter out duplicate connectors based on the 'name' property
    const filteredConnectors = sortedConnectors.filter(
      (connector, index, self) =>
        index ===
        self.findIndex((c) => (c as Connector).name === connector.name)
    ) as Connector[];

    // Check if 'coinbase' and 'metamask' are missing and add them if necessary
    const uniqueWithCoinbaseMetamask = filteredConnectors.reduce(
      (acc: Connector[], connector: Connector) => {
        if (
          connector.name === "Coinbase Wallet" ||
          connector.name === "MetaMask" ||
          connector.name === "WalletConnect"
        ) {
          acc.push(connector);
        }
        return acc;
      },
      []
    );

    setUniqueConnectors(uniqueWithCoinbaseMetamask);
  }, [connectors]);
  //avaible connection option we provided in config file
  return uniqueConnectors.map((connector) => (
    <button key={connector.id} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
}

// function WalletOption({
//   connector,
//   onClick,
// }: {
//   connector: Connector;
//   onClick: () => void;
// }) {
//   const [ready, setReady] = React.useState(false);

//   React.useEffect(() => {
//     (async () => {
//       const provider = await connector.getProvider();
//       setReady(!!provider);
//     })();
//   }, [connector]);

//   return (
//     <button disabled={!ready} onClick={onClick}>
//       {connector.name}
//     </button>
//   );
// }
