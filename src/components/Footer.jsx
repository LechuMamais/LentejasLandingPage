import { Box, Stack, Text, HStack, VStack, Link, Flex } from "@chakra-ui/react";
import SocialIcon from "./SocialIcon";
import InstagramIcon from "/icons/instagram.svg";
import FacebookIcon from "/icons/facebook.svg";
import TwitterIcon from "/icons/twitter.svg";

function Footer() {
  return (
    <Box as="footer" bg="bgFooter" p={32} width="100%" height="400px">
      <Flex justify="space-around" align="center" h="100%" w="100%">
        <Stack spacing={1}>
          <Text color="secondary">Lentejas Premium © 2018.</Text>
          <Text color="secondary">Marca registrada</Text>
        </Stack>

        <VStack gap={16}>
          <Text color="secondary" fontSize="20px">
            ONLINE COMMUNITY
          </Text>
          <HStack gap={32}>
            <SocialIcon
              icon={InstagramIcon}
              href="https://instagram.com"
              alt="Instagram"
              color="secondary"
            />
            <SocialIcon
              icon={FacebookIcon}
              href="https://facebook.com"
              alt="Facebook"
              color="secondary"
            />
            <SocialIcon
              icon={TwitterIcon}
              href="https://twitter.com"
              alt="Twitter"
              color="secondary"
            />
          </HStack>
        </VStack>

        <Link href="/#">
          <Text color="secondary" fontSize="20px">
            Web Design
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
