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
      <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#dceeff] opacity-70 blur-3xl sm:h-[500px] sm:w-[500px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-[#e8f4ff] opacity-60 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="relative z-10">
            {/* Portfolio Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#2f6fae] sm:w-10" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6f8aa3] sm:text-xs">
                Personal Portfolio · 2026
              </span>
            </motion.div>

            {/* Hello */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#6f8aa3] sm:text-sm"
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
              className="mt-4 max-w-[780px] text-[3.4rem] font-medium leading-[0.92] tracking-[-0.055em] text-[#17324d] sm:text-6xl lg:text-[5.8rem]"
            >
              {profile.name}
            </motion.h1>

            {/* Nickname */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 text-lg text-[#5f82a2] sm:text-2xl"
            >
              {profile.nickname}
            </motion.p>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-7"
            >
              <h2 className="max-w-xl text-lg font-medium leading-7 text-[#315d83] sm:text-xl sm:leading-8">
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
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-[#60758a] sm:text-base sm:leading-8"
            >
              {profile.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {/* View Profile */}
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2f6fae] px-5 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#245d96] hover:shadow-md"
              >
                View My Profile

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* Download CV */}
              <a
                href={profile.cv}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-[#2f6fae]/20 bg-white px-5 py-3.5 text-sm font-medium text-[#315d83] transition-all duration-300 hover:border-[#2f6fae]/40 hover:bg-[#f6faff]"
              >
                Download CV

                <Download
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#2f6fae]/20 bg-white px-5 py-3.5 text-sm font-medium text-[#315d83] transition-all duration-300 hover:border-[#2f6fae]/40 hover:bg-[#f6faff]"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-8 flex items-center gap-2 text-xs text-[#7891a7]"
            >
              <MapPin size={14} />
              <span>{profile.location}</span>
            </motion.div>

            {/* Explore */}
            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#7891a7] sm:mt-10"
            >
              <motion.span
                animate={{ y: [0, 5, 0] }}
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
              RIGHT IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[430px] lg:max-w-[460px]"
          >
            {/* Soft Circle */}
            <div className="absolute inset-5 rounded-full bg-[#d8ebfb]" />

            {/* Outer Ring */}
            <div className="absolute -inset-2 rounded-full border border-[#8fbce0]/40" />

            {/* Image Container */}
            <div className="relative mx-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[45%_45%_35%_35%] border-8 border-white shadow-xl">
              <img
                src={profile.images.home}
                alt={`${profile.nickname} - ${profile.name}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Currently Studying Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-6 left-0 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-2"
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#7891a7] sm:text-xs">
                Currently studying
              </p>

              <p className="mt-1 text-sm font-medium text-[#17324d]">
                Tourism &amp; Hospitality
              </p>
            </motion.div>

            {/* Decorative Text */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute right-0 top-8 hidden text-right sm:block"
            >
              <p className="font-serif text-2xl italic text-[#77a8d0]">
                Exploring
              </p>

              <p className="font-serif text-2xl italic text-[#77a8d0]">
                People &amp; Places
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#17324d]/10" />
    </section>
  );
}