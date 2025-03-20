import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import WebsitePreview from "./WebsitePreview";

const ConnectWithUs = () => {
  const icons = [
    { href: "https://www.facebook.com/unicsmcr", icon: FaFacebook },
    { href: "https://www.instagram.com/unicsmcr/", icon: FaInstagram },
    {
      href: "https://www.linkedin.com/company/unics-manchester/",
      icon: FaLinkedin,
    },
    {
      href: "https://discord.com/invite/k2rttpghw2",
      icon: FaDiscord,
    },
    { href: "https://x.com/unicsmcr", icon: RiTwitterXFill },
    {
      href: "https://github.com/unicsmcr",
      icon: FaGithub,
    },

    {
      href: "mailto:mailto:contact@unicsmcr.com",
      icon: FaEnvelope,
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <WebsitePreview
          image="/guh-website.png"
          title="Great Uni Hack 2024"
          link="https://greatunihack.com"
        />
        <span
          style={{
            color: "#a020f0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          More information about the Game Dev website coming soon!
        </span>
      </div>
    </div>
  );
};

export default ConnectWithUs;
