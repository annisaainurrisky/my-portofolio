// links
import Link from "next/link";

// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiWhatsappFill,
  RiTelegramFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/annisa-ainur-risky/"}
        className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://github.com/annisaainurrisky"}
        className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link
        href={"https://wa.me/+6282111906468"}
        className="hover:text-accent transition-all duration-300">
        <RiWhatsappFill />
      </Link>
      <Link
        href={"https://t.me/annisaainurrisky"}
        className="hover:text-accent transition-all duration-300">
        <RiTelegramFill />
      </Link>
      <Link
        href={"https://www.instagram.com/annisaainur03/"}
        className="hover:text-accent transition-all duration-300">
        <RiInstagramFill />
      </Link>
      <Link
        href={"https://web.facebook.com/annisa.ainurrisky/"}
        className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
