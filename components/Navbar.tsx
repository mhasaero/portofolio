import { title } from "process";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";

import Link from "next/link";

const NavList = [
  {
    title: "Home",
    href: "#hero",
  },
  {
    title: "About Me",
    href: "#about-me",
  },
  {
    title: "My Works",
    href: "#works",
  },
  {
    title: "CTA",
    href: "#cta",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar fixed z-10 bg-transparent backdrop-blur-sm shadow-md px-8 md:px-12 lg:px-16 py-2 md:py-6 left-0">
      <div className="navbar-start gap-4">
        <a className="btn btn-ghost text-xl">Log0</a>
        <ul className="hidden md:flex gap-6">
          {NavList.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-white text-lg hover:text-2xl hover:bg-white hover:text-blue-300 hover:scale-x-125 px-2 rounded-md py-1 transition-colors duration-500">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown md:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer">
                <GiHamburgerMenu className="size-6 text-white" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content rounded-box text-base min-h-full w-1/2 py-6 space-y-4 ps-8 border-e-4 border-base-300">
                {NavList.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-white hover:bg-white hover:text-transparent transition-colors duration-300">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <Link href={`#`} className="text-white hover:border-white border-transparent border-2 px-2 py-1 rounded-md transition-colors duration-600 flex gap-2 items-center">
          <MdOutlineCallMissedOutgoing />
          Call Me ea
        </Link>
      </div>
    </nav>
  );
}

//
