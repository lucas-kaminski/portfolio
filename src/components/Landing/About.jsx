import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine } from "react-icons/ri";

export default function About() {
  return (
    <>
      <Box minH="100vh" w="100%" pt="10vh">
        <Heading px="60px">sobre mim</Heading>
        <Box alignSelf={"center"} w="100%" pl={10} px="80px">
          <Text fontSize={"2xl"} w="42%" mt="10px" textAlign={"justify"}>
            meu nome é Lucas Kaminski, atualmente moro em Curitiba/PR mas meu
            trabalho está conectado no mundo todo.
          </Text>
          <Text fontSize={"xl"} textAlign={"end"} mt="4vh">
            sou desenvolvedor back-end na Siemens AG e faço projetos freelancer,
          </Text>
          <Text fontSize={"lg"} textAlign={"end"}>
            mas já trabalhei como full stack e assistente contábil.
          </Text>
          <Text fontSize={"xl"} textAlign={"center"} mt="4vh">
            nos meus projetos uso principalmente javascript/typescript e suas
            ferramentas como Node e React,
          </Text>
          <Text fontSize={"lg"} textAlign={"center"}>
            também conheço outras linguagens como C/C++, Python e SQL.
          </Text>
          <Text fontSize={"xl"} mt="4vh">
            tento impactar na comunidade com postagens nos blogs e tutoriais em
            repositórios,
          </Text>
          <Text fontSize={"md"}>
            apoio o mundo open source da forma que posso e recomendo você
            também!
          </Text>
          <Flex fontSize={"lg"} mt="5vh">
            <Text ml="3vw" align={"end"}>
              minha formação:
            </Text>
            <Text pl="4">
              técnico de informática pelo TECPUC (2018/2)
              <br />
              graduando em engenharia da computação pela PUCPR (2024/2)
              <br />
              graduando em ciência de dados e inteligência artificial pela
              UNIDOMBOSCO EAD (2023/1)
            </Text>
          </Flex>
          <Text fontSize={"md"} textAlign={"end"} mt="4vh" mr="3vw">
            cripto stacker, minimalista e apaixonado por todo tipo de game.
          </Text>
          <Text fontSize={"md"} textAlign={"center"} mt="3vh">
            tenho três gatinhas, sou vegano e luto por um mundo que tenha mais
            respeito com a natureza.
          </Text>
        </Box>
        <Flex
          position={"absolute"}
          bottom="0"
          mx="5vh"
          my="3vh"
          fontSize="md"
          bg="red"
          align={"center"}
          verticalAlign="bottom"
        >
          meus trabalhos <RiArrowDownLine />
        </Flex>
      </Box>
    </>
  );
}
