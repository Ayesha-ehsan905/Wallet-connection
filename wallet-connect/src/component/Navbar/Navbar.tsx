import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Wrap,
  WrapItem,
  chakra,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import MarketPlaceIcon from "../Icons/Marketplace";
const Navbar = () => {
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
              <Button background={"green.2"}>Connect Wallet</Button>
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
