import { Flex } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Home from "./Home";

export default function Landing() {
  return (
    <Flex minH="90vh" maxH="90vh" direction={"column"}>
      <Home />
      <About />
    </Flex>
  );
}
