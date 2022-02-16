import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const TextGridItem = ({
  rowSpan,
  colSpan,
  rowStart,
  colStart,
  fontSize,
  children,
  ...props
}) => {
  return (
    <GridItem
      // bg="blue"
      rowSpan={rowSpan}
      colSpan={colSpan}
      rowStart={rowStart}
      colStart={colStart}
      {...props}
    >
      <Text
        textAlign="justify"
        sx={{ textAlignLast: "justify" }}
        fontSize={fontSize}
      >
        {children}
      </Text>
    </GridItem>
  );
};

export default function About() {
  return (
    <Box minH="100vh">
      <Heading mt="100px" ml="100px">
        sobre mim
      </Heading>
      <Grid
        w="100%"
        minH="200vh"
        // bg="red"
        templateRows="repeat(30, 1fr)"
        templateColumns="repeat(10, 1fr)"
        pt="25px"
      >
        {/* Col: 2->5 | Row: 1 */}
        <TextGridItem colStart="2" colSpan={3} rowStart={1} fontSize="2xl">
          Meu nome é Lucas Kaminski, atualmente moro em Curitiba/PR e sou
          desenvolvedor back-end na Siemens.
        </TextGridItem>
        {/* Col: 6->10 | Row: 2 */}
        <TextGridItem
          colStart={6}
          colSpan={4}
          rowStart={2}
          fontSize="md"
          mt={-25}
        >
          Sou formado em Técnico de Informática pelo TECPUC e atualmente sou
          graduando em Engenharia da Computação pela PUCPR e também em Ciência
          de Dados e Inteligência Artificial pela UNIDOMBOSCO (EAD).
        </TextGridItem>
        {/* Col: 3->8 | Row: 2 */}
        <TextGridItem colStart={3} colSpan={5} rowStart={3} fontSize="lg">
          Sendo um grande entusiasta do Javascript, trabalho com as suas
          principais ferramentas do mercado, como React para desenvolvimento
          front-end ou NodeJS para back-end.
        </TextGridItem>
        {/* Col: 6->10 | Row: 4 */}
        <TextGridItem
          colStart={2}
          colSpan={3}
          rowStart={5}
          fontSize="lg"
          ml="-25px"
          mt={-10}
        >
          Tendo experiência em diversas áreas da computação, como IA e robótica,
          busco sempre compartilhar o meu conhecimento e visão através de
          tutoriais e posts do blog.
        </TextGridItem>
      </Grid>
    </Box>
  );
}
