"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f6faff]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-[#17324d]/10 pb-10 md:flex-row md:items-end md:justify-between">
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-medium tracking-[-0.03em] text-[#17324d]">
              {profile.nickname}

              <span className="ml-2 text-sm font-normal text-[#60758a]">
                ({profile.name})
              </span>
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#7891a7]">
              International Tourism & Hospitality Management Student
            </p>
          </motion.div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17324d]/10 bg-white text-[#60758a] transition-all hover:border-[#2f6fae]/30 hover:text-[#2f6fae]"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17324d]/10 bg-white text-[#60758a] transition-all hover:border-[#2f6fae]/30 hover:text-[#2f6fae]"
              aria-label="LinkedIn"
            >
              <span className="text-sm font-bold">
                in
              </span>
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              className="ml-2 flex items-center gap-2 rounded-full bg-[#2f6fae] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#245d96]"
            >
              Back to top
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 pt-6 text-xs text-[#8aa0b3] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <p>
            Based in {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}