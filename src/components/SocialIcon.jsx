const SocialIcon = ({ icon, href, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt={alt} className="w-8 h-8 filter brightness-0 invert" />
  </a>
);

export default SocialIcon;
