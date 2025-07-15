import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-2 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left: Logo & Links */}
        <div className="flex flex-col gap-4 ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="CivicDataSpace"
              width={35}
              height={15}
              className="object-contain"
              loading="lazy"
            />
            <span className="text-white font-normal text-base md:text-lg">
              CivicDataSpace
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-xs md:text-sm font-normal md:font-medium text-white mt-0 md:mt-2">
            <Link href="#" className="hover:underline">
              ABOUT US
            </Link>
            <Link href="#" className="hover:underline">
              SITEMAP
            </Link>
            <Link href="#" className="hover:underline">
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Right: Social + Credit */}
        <div className="flex flex-col items-start md:items-end gap-3 text-sm">
          <div className="text-orange-400 font-semibold">Follow Us</div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://github.com/CivicDataLab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary w-5 h-5 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/company/civicdatalab/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary w-5 h-5 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/civicdatalab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary w-5 h-5 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/CivicDataLab/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary w-5 h-5 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
          </div>

          {/* Made by */}
          <div className="text-xs text-white mt-2 flex items-center gap-1">
            made by{" "}
            <a
              href="https://civicdatalab.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 md:w-9 md:h-9 rounded-full overflow-hidden block hover:scale-110 transition"
            >
              <img
                src="/civicLogo.png"
                alt="CivicDataLab Logo"
                className="object-cover w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
