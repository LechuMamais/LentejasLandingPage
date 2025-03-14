import { Box, Flex, Button, Stack, Image } from "@chakra-ui/react";
import { handleScroll } from "../utils/handleScroll";

function Header() {
  return (
    <Box
      as="header"
      bgColor="bgHeader"
      py={8}
      px={12}
      w={"100%"}
      h={"60px"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={10}
      backdropFilter={"blur(8px)"}
    >
      <Flex justify="space-between" align="center" h="100%">
        <Image
          borderRadius={"100%"}
          src="/images/branding/logo_64_b&w_round.png"
          alt="logo"
          w="32px"
        />

        <Stack direction="row" gap={64}>
          <Box as="span" cursor="pointer" onClick={() => handleScroll("home")}>
            Inicio
          </Box>
          <Box
            as="span"
            cursor="pointer"
            onClick={() => handleScroll("products")}
          >
            Productos
          </Box>
          <Box as="span" cursor="pointer" onClick={() => handleScroll("about")}>
            Nosotros
          </Box>
          <Box
            as="span"
            cursor="pointer"
            onClick={() => handleScroll("opinions")}
          >
            Opiniones
          </Box>
        </Stack>

        <Button>Burger menu</Button>
      </Flex>
    </Box>
  );
}

export default Header;
