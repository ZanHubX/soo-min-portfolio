"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#17324d]/10 bg-[#f6faff]/90 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex h-[68px] items-center justify-between">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium tracking-[-0.03em] text-[#17324d]"
          >
            Soo Min
            <span className="ml-2 text-sm font-normal text-[#60758a]">
              (Phoo Pwint Zaw)
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#60758a] transition-colors hover:text-[#17324d]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-[#2f6fae] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#245d96]"
            >
              Let's Connect
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17324d]/10 bg-white text-[#17324d] md:hidden"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-[#17324d]/10 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="block border-b border-[#17324d]/[0.06] py-3.5 text-sm text-[#60758a]"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#2f6fae] px-4 py-3.5 text-sm font-medium text-white"
                >
                  Let's Connect
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}