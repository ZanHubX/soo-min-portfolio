"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Heart,
  MessageCircle,
  Users,
  Lightbulb,
  ClipboardCheck,
  Languages,
} from "lucide-react";

import { skills } from "@/data/skills";
import { languages } from "@/data/languages";

const skillIcons = [
  Heart,
  Clock3,
  Users,
  MessageCircle,
  Lightbulb,
  ClipboardCheck,
  ClipboardCheck,
  MessageCircle,
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-[#17324d]/10 bg-[#f6faff] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-4 sm:mb-20"
        >
          <span className="h-px w-8 bg-[#2f6fae] sm:w-10" />

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7891a7] sm:text-sm">
            04 — SKILLS & LANGUAGES
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Skills */}
          <div>
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6f8aa3]">
                Core Skills
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#17324d] sm:text-4xl">
                Skills I bring to a team
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = skillIcons[index % skillIcons.length];

                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group rounded-2xl border border-[#17324d]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2f6fae]/25 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae] transition-colors group-hover:bg-[#cde6fb]">
                        <Icon size={18} />
                      </div>

                      <span className="text-sm font-medium text-[#315d83]">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae]">
                  <Languages size={19} />
                </div>

                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6f8aa3]">
                  Languages
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-[#17324d] sm:text-4xl">
                Communication across cultures
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#17324d]/10 bg-white">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="flex items-center justify-between border-b border-[#17324d]/10 px-5 py-5 last:border-b-0 sm:px-6"
                >
                  <span className="text-sm font-medium text-[#315d83]">
                    {language.name}
                  </span>

                  <span className="rounded-full bg-[#f0f7fd] px-3 py-1.5 text-xs text-[#7891a7]">
                    {language.level}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#2f6fae]/10 bg-[#eaf5ff] p-5">
              <p className="text-sm leading-7 text-[#55738d]">
                Interested in developing communication skills and gaining
                experience in international and multicultural environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}