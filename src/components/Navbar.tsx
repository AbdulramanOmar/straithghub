import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "/وثر-العمارة.png";


const navbarLinks = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "من نحن",
    href: "/#about",
  },
  {
    title: "الخدمات",
    href: "/#services",
  },

  {
    title: "المشاريع",
    href: "/#projects",
  },
  {
    title: " لماذا نحن",
    href: "/#whyUs",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" absolute back-liner top-0 left-0 w-full z-50">
      <nav className="container  py-1 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="وثر العمارة-logo" className="w-[130px]" />
        </div>

        <ul className="hidden lg:flex gap-6 items-center">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-white text-xl font-medium hover:text-2xl transition-all duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden  lg:flex items-center gap-2">
          <a
            href="#contact"
            className="border-[3px] flex items-center gap-2 text-xl font-bold border-white text-white px-4 py-2 rounded-lg"
          >
            <FaPhoneAlt className="text-xl "/>
            تواصل معنا
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <RxCross2 size={40} />
          ) : (
            <HiMiniBars3BottomLeft size={40} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-3">
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block text-gray-700 hover:text-letsjoygreen"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="flex flex-row gap-2">
                <button className="w-full bg-straighthub text-white px-4 py-2 rounded-lg mt-2">
                  تواصل معنا
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
