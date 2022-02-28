import {
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import React from "react";
import { useThemeContext } from "../../context/theme";

const MenuButton = ({ title, ...props }) => {
  return (
    <Button
      variant="ghost"
      fontWeight={"light"}
      onClick={() => console.log("teste")}
      {...props}
    >
      {title}
    </Button>
  );
};

const MenuIcon = ({ icon, ...props }) => {
  return (
    <IconButton
      variant="ghost"
      icon={icon}
      onClick={() => console.log("teste")}
      {...props}
    />
  );
};

const Logo = () => {
  return (
    <Box
      fontWeight={"semibold"}
      fontSize={"lg"}
      letterSpacing="8px"
      onClick={() => console.log("teste")}
    >
      Lucas Kaminski
    </Box>
  );
};

export default function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { backgroundColor } = useThemeContext();
  return (
    <Flex
      position="fixed"
      direction="row"
      align="center"
      minH="10vh"
      w="100%"
      px="4"
      pt="2"
      bg={backgroundColor}
    >
      <Logo />
      <Spacer />
      <MenuButton title="sobre mim" />
      <MenuButton title="trabalhos" />
      <MenuButton title="contato" />
      <MenuIcon
        icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
        onClick={() => {
          toggleColorMode();
        }}
      />
    </Flex>
  );
}
