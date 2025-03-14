import { Box } from "@chakra-ui/react";

function ParallaxImage() {
  return (
    <Box
      w="100svw"
      h="240px"
      backgroundImage="url(/images/ParallaxImage.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    />
  );
}

export default ParallaxImage;
