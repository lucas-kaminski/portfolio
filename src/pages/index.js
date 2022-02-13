import { Box, Button, Flex } from "@chakra-ui/react"
import Menu from "../components/Menu"
import { useThemeContext } from "../context/theme"

export default function Home() {
  const { backgroundColor, fontColor } = useThemeContext()
  return (
    <Box bg={backgroundColor} color={fontColor} minH="100vh">
      <Menu />
    </Box>
  )
}
