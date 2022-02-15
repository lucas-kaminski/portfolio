import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine } from "react-icons/ri";

export default function Home() {
  return (
    <Flex bg="blue" height={"90vh"} align="end" p="5vh" direction={"row"}>
      <Text fontSize="2xl">
        saiba mais <RiArrowDownLine />
      </Text>
      <Text textAlign="end" ml="auto" fontSize="8xl">
        Desenvolvedor <br /> Full Stack
      </Text>
    </Flex>
  );
}
