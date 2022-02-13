import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const MenuButton = ({ title }) => {
  return <Button variant="ghost">{title}</Button>;
};

export default function Menu() {
  return (
    <Flex direction="row" justify="end" align="center" h="100%">
      <MenuButton title="About" />
      <MenuButton title="Work" />
      <MenuButton title="Contact" />
    </Flex>
  );
}
