import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/samvadlabs-icon.png";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Product",
    path: "/product",
  },
  {
    label: "Solutions",
    path: "/solutions",
  },
  {
    label: "Industries",
    path: "/industries",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
  {
    label: "Docs",
    path: "/docs",
  },
  {
    label: "About",
    path: "/about",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#05050a]/85 px-5 py-3 backdrop-blur-xl">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >

            <div className="h-10 w-10 overflow-hidden rounded-xl">
              <img
                src={logo}
                alt="SamvadLabs"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-sm font-bold">
              Samvad<span className="text-cyan-300">Labs</span>
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">

            {navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`relative px-1 py-2 text-xs transition ${
                  isActive(item.path)
                    ? "text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >

                {item.label}

                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-300" />
                )}

              </Link>

            ))}

          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 lg:flex">

            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-4 py-2.5 text-xs font-semibold transition hover:scale-[1.03]"
            >

              Get Started

              <ArrowRight
                size={13}
                className="transition group-hover:translate-x-0.5"
              />

            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >

            {mobileOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}

          </button>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-white/8 pt-4 lg:hidden">

            <div className="space-y-1">

              {navItems.map((item) => (

                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                    isActive(item.path)
                      ? "bg-cyan-400/[0.06] text-cyan-300"
                      : "text-white/50 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >

                  {item.label}

                  {isActive(item.path) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  )}

                </Link>

              ))}

            </div>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-4 py-3 text-xs font-semibold"
            >

              Start Building

              <ArrowRight size={14} />

            </Link>

          </div>
        )}

      </nav>
    </>
  );
}

export default Navbar;