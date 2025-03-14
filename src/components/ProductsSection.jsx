import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { BsArrowRight } from "react-icons/bs";

function ProductsSection() {
  return (
    <Flex
      as="section"
      id="products"
      direction={"column"}
      justifyContent={"space-evenly"}
      width={"100svw"}
      height={"100svh"}
      bg={"bgCustomGreen"}
      px={120}
    >
      <Text color={"primary"} fontSize={"48px"}>
        Nuestros Productos
      </Text>
      <HStack gap={48}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </HStack>
      <Flex flexDirection={"row-reverse"}>
        <Box
          pr={"24px"}
          transition={"all 0.2s"}
          _hover={{
            pr: "0px",
            "& svg": {
              fill: "bgButton_hover",
              transition: "all 0.4s",
            },
          }}
          fontSize={"120px"}
          cursor={"pointer"}
        >
          <BsArrowRight fill={"#D9D9D9"} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default ProductsSection;
