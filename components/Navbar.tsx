import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="navbar backdrop-blur-2xl bg-blur fixed z-10 bg-transparent shadow-sm px-8 md:px-12 lg:px-16 py-2 md:py-6">
      <div className="navbar-start ">
        <a className="btn btn-ghost text-xl">Log0</a>
      </div>
      <div className="navbar-end">
        <ul className="hidden md:flex gap-6">
          <li>Home</li>
          <li>About Me</li>
          <li>My Works</li>
          <li>CTA</li>
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
                <li>Home</li>
                <li>About Me</li>
                <li>My Works</li>
                <li>CTA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
