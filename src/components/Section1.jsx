import { Text, Button, VStack } from "@chakra-ui/react";
import { handleScroll } from "../utils/handleScroll";

function Section1() {
  return (
    <VStack
      as="section"
      width={"100svw"}
      height={"100svh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      bgImage="url(/images/citric_bg.jpg)"
      backgroundRepeat={"repeat-x"}
      backgroundPosition={"bottom"}
    >
      <Text fontSize={"120px"} color={"primary"} fontWeight={"600"}>
        EAT HEALTHY
      </Text>
      <Text
        fontSize={"36px"}
        textAlign={"center"}
        color={"primary"}
        maxW={"1000px"}
      >
        Descubre el sabor y la calidad de las mejores legumbres
      </Text>
      <Button
        cursor={"pointer"}
        mt={36}
        border="none"
        borderRadius={8}
        bg="bgButton"
        px={16}
        py={8}
        color={"primary"}
        transition={"all 0.2s"}
        _hover={{
          bg: "bgButton_hover",
        }}
        onClick={() => handleScroll("products")}
      >
        <p>Nuestros Productos</p>
      </Button>
    </VStack>
  );
}

export default Section1;
