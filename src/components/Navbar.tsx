import { Download, Menu, ShoppingCart, UserRound } from "lucide-react";
import { useState } from "react";
import { navbarDropdowns } from "../data/navbar";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="p-2 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <Logo />

            <div className="space-x-1 hidden lg:block">
              {navbarDropdowns.map((dropdown) => (
                <Dropdown
                  key={dropdown.label}
                  label={dropdown.label}
                  items={dropdown.items}
                  isActive={dropdown.isActive}
                  variant="mega"
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-pink-100 font-semibold text-pink-800 hover:bg-pink-200 px-4 py-3 rounded-md cursor-pointer">
              Download FREE
              <Download className="size-5" />
            </button>

            <a className="p-3 rounded-md hover:bg-pink-50/10 flex items-center gap-1 cursor-pointer">
              <UserRound className="size-5" />
              Login
            </a>

            <a className="block p-3 rounded-md hover:bg-pink-50/10 cursor-pointer">
              <ShoppingCart className="size-5" />
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-3 rounded-md hover:bg-pink-50/10 cursor-pointer"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
