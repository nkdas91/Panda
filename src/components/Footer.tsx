import Logo from "./Logo";
import { Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* TOP CTA SECTION */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Start building SEO content with Panda
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Automate WordPress publishing and grow your traffic faster.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-black font-semibold px-5 py-3 rounded-lg transition cursor-pointer">
            Download Free
            <Download className="size-5" />
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* BRAND */}
        <div className="lg:col-span-2">
          <Logo />

          <p className="mt-4 text-sm text-neutral-400 leading-6 max-w-md">
            Panda helps bloggers, marketers, and agencies generate SEO-optimized
            articles and publish them directly to WordPress automatically.
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                AI Writer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                WordPress Publisher
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                SEO Optimizer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bulk Generator
              </a>
            </li>
          </ul>
        </div>

        {/* LEARN */}
        <div>
          <h3 className="text-white font-semibold mb-4">Learn</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                SEO Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                AI Blogging
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                WordPress Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Panda. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
