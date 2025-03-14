import { Text, Flex, Stack } from "@chakra-ui/react";
import opinions from "../data/opinions";
import OpinionCard from "./OpinionCard";

function Opinions() {
  return (
    <Flex
      direction={"column"}
      id="opinions"
      as="section"
      bg={"url(/images/Opinions_background.png)"}
      h={"1900px"}
      px={"120px"}
      pt={"180px"}
    >
      <Stack h={"50%"} gap={"160px"}>
        <Text
          fontSize={"36px"}
          fontWeight={"600"}
          color={"primary"}
          textAlign={"start"}
        >
          Expertos nos recomiendan
        </Text>

        <Flex direction={"row"} justify={"center"} gap={"120px"}>
          {opinions?.length > 0 &&
            opinions.map((opinion, index) => (
              <OpinionCard key={index} opinion={opinion} />
            ))}
        </Flex>
      </Stack>

      <Flex alignItems={"center"} justifyContent={"center"} h={"50%"}>
        <Text fontSize={"48px"} color={"primary"} fontWeight={"500"}>
          ¡Buscanos en tu supermercado!
        </Text>
      </Flex>
    </Flex>
  );
}
export default Opinions;
