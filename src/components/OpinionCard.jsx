import { Flex, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
console.log(FaStar);

function OpinionCard({ opinion }) {
  return (
    <Flex
      direction="column"
      bg="bgCustomGreen"
      p={"48px"}
      borderRadius={"16px"}
      border={"2px solid primary"}
      boxShadow={"0px 0px 24px 0px rgba(0,0,0,0.5)"}
      w={"320px"}
      h={"480px"}
      textAlign="center"
      alignItems={"center"}
    >
      <VStack gap={"16px"}>
        <Image
          borderRadius={"100%"}
          w={"120px"}
          h={"120px"}
          src={opinion.image.url}
          alt={opinion.image.alt}
          boxShadow={"0px 0px 12px 0px rgba(0,0,0,0.5)"}
        />
        <Text as="h3" color="primary">
          {opinion.name}
        </Text>
        <Stack
          direction="row"
          justify="center"
          transform="scale(3)"
          gap={"2px"}
        >
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon
                key={i}
                as={FaStar}
                color={i < opinion.rating ? "yellowStar" : "gray"}
                boxSize={5}
              />
            ))}
        </Stack>
      </VStack>
      <Text
        color="primary"
        noOfLines={5}
        w={"200px"}
        mt={"32px"}
        fontSize={"18px"}
      >
        {opinion.comment}
      </Text>
    </Flex>
  );
}

export default OpinionCard;
