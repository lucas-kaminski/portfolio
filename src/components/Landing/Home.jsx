import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine } from "react-icons/ri";

export default function Home() {
  return (
    <Flex minH="90vh" maxH="90vh" align="end" p="5vh" direction={"row"}>
      <Flex direction={"row"} fontSize="2xl" align={"center"}>
        saiba mais <RiArrowDownLine />
      </Flex>
      <Text textAlign="end" ml="auto" fontSize="8xl">
        Desenvolvedor <br /> Full Stack
      </Text>
    </Flex>
  );
}
