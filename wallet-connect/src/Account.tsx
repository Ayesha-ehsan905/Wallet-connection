import { Button } from "@chakra-ui/button";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { Text } from "@chakra-ui/react";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      <Text color="white">
        {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      </Text>
      <Button background={"white"} onClick={() => disconnect()}>
        Disconnect
      </Button>
    </div>
  );
}
