import { Box, Button, Flex, chakra, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import MarketPlaceIcon from "../Icons/Marketplace";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useEffect } from "react";
import { getConnections } from "@wagmi/core";
import { config } from "../../wagmi/config";
const Navbar = () => {
  const { connectors, connect, isSuccess, isError, error } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const connections = getConnections(config);
  console.log(connections, "connections");

  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "success connected.",
        description: "wallet connected successfully",
        status: "success",
        duration: 3000,
        isClosable: false,
      });
    }
    isError &&
      toast({
        title: "Error in connection.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: false,
      });
  }, [error, isError, isSuccess, toast]);

  const handleClickConnectWallet = async () => {
    try {
      // Find Metamask connector from the list of available connectors
      const connector = connectors.find(
        (connector) =>
          connector.type === "injected" && connector.name === "MetaMask"
      );
      if (!connector) {
        throw new Error("Metamask connector not found!");
      }

      // Connect using the Metamask connector
      // await connect({ connector, chainId: 5 });
      await connect({ connector });
    } catch (error) {
      console.error("metaMask error handling", error);
    }
  };

  return (
    <>
      <Box width="100%" p={5}>
        <Container>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Box>
              <Flex flexDirection={"row"}>
                <MarketPlaceIcon />
                <Box margin={"auto 0"}>
                  <Text fontSize="1rem" color={"white"} fontWeight={"bold"}>
                    NFT MarketPlace
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              {isConnected ? (
                <Flex
                  flexDirection={"row"}
                  flexWrap={"wrap"}
                  gap={2}
                  alignItems={"center"}
                >
                  <Text color="white" css={TextCss}>
                    {address}
                  </Text>
                  <Button background={"white"} onClick={() => disconnect()}>
                    Disconnect
                  </Button>
                </Flex>
              ) : (
                <Button
                  background={"green.2"}
                  onClick={handleClickConnectWallet}
                >
                  Connect Wallet
                </Button>
              )}
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
const Container = chakra(Box, {
  baseStyle: {
    margin: "0 2rem",
  },
});
const TextCss = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "50px",
};
