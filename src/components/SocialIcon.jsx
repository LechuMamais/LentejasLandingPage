import { Box, Link } from "@chakra-ui/react";

const SocialIcon = ({ icon, href, alt }) => (
  <Link href={href} isExternal>
    <Box
      as="img"
      src={icon}
      alt={alt}
      boxSize="32px"
      filter="brightness(0) invert(1)"
    />
  </Link>
);
export default SocialIcon;

/*

npm install prop-types

// Define las propTypes
SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired, // 'icon' debe ser una cadena y es obligatoria
  href: PropTypes.string.isRequired, // 'href' debe ser una cadena y es obligatoria
  alt: PropTypes.string.isRequired,  // 'alt' debe ser una cadena y es obligatoria
};

*/
