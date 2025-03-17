import SocialIcon from "./SocialIcon";
import InstagramIcon from "/icons/instagram.svg";
import FacebookIcon from "/icons/facebook.svg";
import TwitterIcon from "/icons/twitter.svg";

function Footer() {
  return (
    <footer className="bg-bgFooter p-32 w-full h-[400px] font-Kalnia">
      <div className="flex justify-around items-center h-full w-full">
        <div className="flex flex-col space-y-1">
          <p className="text-secondary">Lentejas Premium © 2018.</p>
          <p className="text-secondary">Marca registrada</p>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-secondary text-[20px] text-center">
            ONLINE COMMUNITY
          </p>
          <div className="flex gap-16">
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
          </div>
        </div>

        <a href="/#">
          <p className="text-secondary text-[20px]">Web Design</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
