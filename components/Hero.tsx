"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f6faff]"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#dceeff] opacity-70 blur-3xl sm:h-[500px] sm:w-[500px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div>
            {/* Portfolio Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#2f6fae]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6f8aa3] sm:text-xs">
                Personal Portfolio · 2026
              </span>
            </motion.div>

            {/* Hello */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="text-xs font-medium uppercase tracking-[0.18em] text-[#6f8aa3] sm:text-sm"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 text-[3.2rem] font-medium leading-[0.95] tracking-[-0.055em] text-[#17324d] sm:text-6xl lg:text-[6rem]"
            >
              {profile.nickname}
            </motion.h1>

            {/* Full Name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-3 text-lg text-[#5f82a2] sm:text-2xl"
            >
              {profile.name}
            </motion.p>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="mt-7 max-w-2xl"
            >
              <h2 className="text-lg font-medium leading-7 text-[#315d83] sm:text-xl sm:leading-8">
                International Tourism &amp; Hospitality
                <br />
                Management Student
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#6f8aa3] sm:text-base">
                Business Law Background · Customer Service · Communication
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="mt-7 max-w-xl text-sm leading-7 text-[#60758a] sm:text-base sm:leading-8"
            >
              {profile.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {/* View Profile */}
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2f6fae] px-5 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#245d96]"
              >
                View My Profile

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* Download CV */}
              <a
                href={profile.cv}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-[#2f6fae]/20 bg-white px-5 py-3.5 text-sm font-medium text-[#315d83] transition-all hover:border-[#2f6fae]/40 hover:bg-[#f6faff]"
              >
                Download CV

                <Download
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#2f6fae]/20 bg-white px-5 py-3.5 text-sm font-medium text-[#315d83] transition-all hover:border-[#2f6fae]/40 hover:bg-[#f6faff]"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="mt-8 flex items-center gap-2 text-xs text-[#7891a7]"
            >
              <MapPin size={14} />

              {profile.location}
            </motion.div>

            {/* Explore */}
            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
              }}
              className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#7891a7] sm:mt-10"
            >
              <motion.span
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown size={15} />
              </motion.span>

              Explore
            </motion.a>
          </div>

          {/* =========================
              RIGHT / PROFILE IMAGE
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            {/* Blue Circle */}
            <div className="absolute inset-4 rounded-full bg-[#d8ebfb]" />

            {/* Outer Ring */}
            <div className="absolute -inset-2 rounded-full border border-[#8fbce0]/40" />

            {/* Profile Image */}
            <div className="relative mx-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[45%_45%_35%_35%] border-8 border-white shadow-xl">
              <img
                src={profile.images.home}
                alt={`${profile.nickname} - ${profile.name}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
              className="absolute bottom-8 left-0 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:left-2"
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#7891a7] sm:text-xs">
                Currently studying
              </p>

              <p className="mt-1 text-sm font-medium text-[#17324d]">
                Tourism &amp; Hospitality
              </p>
            </motion.div>

            {/* Decorative Text */}
            <div className="absolute right-0 top-10 hidden text-right sm:block">
              <p className="font-serif text-2xl italic text-[#77a8d0]">
                Exploring
              </p>

              <p className="font-serif text-2xl italic text-[#77a8d0]">
                People &amp; Places
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#17324d]/10" />
    </section>
  );
}