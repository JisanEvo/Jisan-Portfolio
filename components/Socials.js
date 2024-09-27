import Link from"next/link"
// icons
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 mt-0 sm:mt-10">
    <Link href={'https://www.facebook.com/jisanevo'} className="hover:text-accent transition-all duration-300 text-4xl "><FaFacebook />
    </Link>
    <Link href={'https://www.linkedin.com/in/jisanevo'} className="hover:text-accent transition-all duration-300 text-4xl "><FaLinkedin />
    </Link>
    <Link href={'https://github.com/JisanEvo'} className="hover:text-accent transition-all duration-300 text-4xl "><FaGithub />
    </Link>
  </div>
  );
};

export default Socials;
