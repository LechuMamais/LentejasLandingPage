import { Box, Image, Text, Stack } from "@chakra-ui/react";

function ProductCard({ product }) {
  return (
    <Box
      maxW="300px"
      borderWidth="1px"
      borderRadius={"16px"}
      overflow="hidden"
      boxShadow="md"
      bg="bgCustom"
      transition="transform 0.1s, box-shadow 0.1s"
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Image
        src={product.image.url}
        alt={product.image.alt}
        objectFit="cover"
        w="100%"
        h="300px"
      />

      <Stack p={4} spacing={2}>
        <Text
          fontSize="xl"
          fontWeight="semibold"
          textAlign="center"
          color="primary"
        >
          {product.title}
        </Text>

        <Text fontSize="sm" color="primary" textAlign="center">
          {product.description}
        </Text>
      </Stack>
    </Box>
  );
}

export default ProductCard;
