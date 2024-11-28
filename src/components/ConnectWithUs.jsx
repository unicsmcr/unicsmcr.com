import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const ConnectWithUs = () => {
  const icons = [
    { href: "https://www.facebook.com/unicsmcr", icon: FaFacebook },
    { href: "https://www.instagram.com/unicsmcr/", icon: FaInstagram },
    {
      href: "https://www.linkedin.com/company/unics-manchester/",
      icon: FaLinkedin,
    },
    { href: "https://x.com/unicsmcr", icon: FaX },
    {
      href: "https://github.com/unicsmcr",
      icon: FaGithub,
    },
    {
      href: "mailto:mailto:contact@unicsmcr.com",
      icon: FaEnvelope,
    },
    {
      href: "https://discord.com/invite/k2rttpghw2",
      icon: FaDiscord,
    },
  ];

  return (
    <div className="connect" id="connect">
      <div className="connect-content">
        <h2 className="header2">Connect With Us</h2>
        <div className="social-media-icons">
          {icons.map(({ href, icon }) => (
            <a key={href} href={href} className="social-media-icon">
              {icon()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
