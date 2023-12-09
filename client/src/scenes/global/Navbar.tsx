import React, { useState } from "react";
import { logLinks, navLinks } from "../../types/constants";
import { hamburger, close } from "../../assets/icons";
import logoNavbar from "../../assets/images/EventHubNoBg.png";
import { useMediaQuery } from "@react-hook/media-query";

interface NavProps {}

const Navbar: React.FC<NavProps> = () => {
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <header className="fle flex-col sm:px-16 px-2 py-2 absolute z-10 w-full border shadow-sm">
      {isAboveMediumScreens ? (
        <nav className="flex justify-between font-mukta items-center max-container">
          <a href="/">
            <img src={logoNavbar} alt="Logo" width={100} height="auto" />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row font-mukta justify-end items-center gap-8 max-lg:hidden">
            {logLinks.map((link, index) => (
              <li className="flex gap-4" key={index}>
                <a href={link.href}>{link.label}</a>
                <img src={link.icon} height={25} width={25} alt={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className="flex justify-between font-mukta items-center max-container">
          <a href="/">
            <img src={logoNavbar} alt="Logo" width={100} height="auto" />
          </a>
          <div className="lg:hidden">
            <img
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              src={hamburger}
              height={25}
              width={25}
              className="block"
              alt="Hamburger Icon"
            />
          </div>
        </nav>
      )}
      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px]  bg-dutchWhite drop-shadow-xl ">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img src={close} className="h-12 w-12 cursor-pointer" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <ul className="flex flex-col font-mukta justify-end gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col font-mukta justify-end gap-8">
              {logLinks.map((link, index) => (
                <li className="flex gap-4" key={index}>
                  <a href={link.href}>{link.label}</a>
                  <img
                    src={link.icon}
                    height={25}
                    width={25}
                    alt={link.label}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
