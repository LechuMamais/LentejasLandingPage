import { motion } from "motion/react";

const SocialIcon = ({ icon, href, alt }) => (
  <motion.div
    className="w-[48px] h-[48px] rounded-full"
    whileHover={{ backgroundColor: "#373737", transition: { duration: 0.2 } }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex justify-center items-center"
    >
      <img
        src={icon}
        alt={alt}
        className="w-8 h-8 filter brightness-0 invert"
      />
    </a>
  </motion.div>
);

export default SocialIcon;
