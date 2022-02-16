import { Flex } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Home from "./Home";

export default function Landing() {
  return (
    <Flex direction={"column"}>
      <Home />
      <About />
    </Flex>
  );
}
