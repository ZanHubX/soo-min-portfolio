"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Globe2, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[#17324d]/10 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-4 sm:mb-20"
        >
          <span className="h-px w-8 bg-[#2f6fae] sm:w-10" />

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7891a7] sm:text-sm">
            01 — ABOUT ME
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6f8aa3]">
              A little about me
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-medium leading-tight tracking-[-0.04em] text-[#17324d] sm:text-5xl">
              Learning, connecting, and exploring new perspectives.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#60758a]">
              I’m Phoo Pwint Zaw, also known as Soo Min. I’m currently
              studying International Tourism & Hospitality Management at
              Bangkok University, with a background in Business Law.
            </p>

            <p className="mt-5 max-w-lg text-base leading-8 text-[#60758a]">
              I enjoy learning about people, places, cultures, and different
              perspectives. I’m also interested in developing practical
              experience in professional environments where communication,
              teamwork, and customer service are important.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#2f6fae]/20 bg-[#f6faff] px-5 py-3 text-sm font-medium text-[#315d83] transition-all hover:border-[#2f6fae]/40 hover:bg-[#edf6ff]"
            >
              Let's Connect

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-[#17324d]/10 bg-[#f6faff] p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae]">
                <Globe2 size={21} />
              </div>

              <h3 className="mt-5 text-xl font-medium text-[#17324d]">
                Tourism & Hospitality
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#60758a]">
                Interested in people, destinations, hospitality, cultures,
                and creating positive experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-[#17324d]/10 bg-[#f6faff] p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae]">
                <Users size={21} />
              </div>

              <h3 className="mt-5 text-xl font-medium text-[#17324d]">
                Communication & Teamwork
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#60758a]">
                Enjoys working with others, communicating ideas clearly, and
                contributing to team projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl border border-[#17324d]/10 bg-[#f6faff] p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae]">
                <Heart size={21} />
              </div>

              <h3 className="mt-5 text-xl font-medium text-[#17324d]">
                Customer Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#60758a]">
                Interested in customer service, sales techniques, and
                creating friendly and positive experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}