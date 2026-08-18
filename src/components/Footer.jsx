import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";

const productLinks = [
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
];

const resourceLinks = [
  {
    label: "Documentation",
    path: "/docs",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030308]">

      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="flex w-fit items-center gap-3"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500">

                <span className="text-sm font-black">
                  S
                </span>

              </div>

              <span className="text-sm font-bold">
                Samvad<span className="text-cyan-300">Labs</span>
              </span>

            </Link>

            <p className="mt-5 max-w-xs text-xs leading-6 text-white/30">

              Intelligent voice AI for businesses that want to
              automate conversations and turn them into outcomes.

            </p>

            <a
              href="mailto:hello@samvadlabs.ai"
              className="mt-5 flex w-fit items-center gap-2 text-xs text-white/35 transition hover:text-cyan-300"
            >

              <Mail size={14} />

              hello@samvadlabs.ai

            </a>

          </div>

          {/* Product */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
              Product
            </p>

            <div className="mt-5 space-y-3">

              {productLinks.map((item) => (

                <Link
                  key={item.path}
                  to={item.path}
                  className="block w-fit text-xs text-white/35 transition hover:text-white"
                >
                  {item.label}
                </Link>

              ))}

            </div>

          </div>

          {/* Resources */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
              Resources
            </p>

            <div className="mt-5 space-y-3">

              {resourceLinks.map((item) => (

                <Link
                  key={item.path}
                  to={item.path}
                  className="block w-fit text-xs text-white/35 transition hover:text-white"
                >
                  {item.label}
                </Link>

              ))}

            </div>

          </div>

          {/* CTA */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
              Build with Samvad
            </p>

            <p className="mt-5 text-xs leading-6 text-white/30">

              Have a workflow worth automating?

            </p>

            <Link
              to="/contact"
              className="group mt-4 inline-flex items-center gap-2 text-xs font-medium text-cyan-300"
            >

              Talk to our team

              <ArrowUpRight
                size={14}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />

            </Link>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-white/20">

            © {new Date().getFullYear()} SamvadLabs. All rights reserved.

          </p>

          <div className="flex items-center gap-3">

            <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-[10px] font-semibold text-white/30 transition hover:border-white/15 hover:text-white"
            >
                GH
            </a>

            <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-[10px] font-semibold text-white/30 transition hover:border-white/15 hover:text-white"
            >
                LI
            </a>

            <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-[10px] font-semibold text-white/30 transition hover:border-white/15 hover:text-white"
            >
                X
            </a>

            </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;