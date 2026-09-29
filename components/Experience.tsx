"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[#17324d]/10 bg-white py-20 sm:py-24 lg:py-28"
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
            03 — EXPERIENCE & ACTIVITIES
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm leading-7 text-[#60758a]">
              Experiences that have helped me develop communication, teamwork,
              organization, and customer-focused skills.
            </p>
          </motion.div>

          {/* Experience List */}
          <div className="border-t border-[#17324d]/10">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="border-b border-[#17324d]/10 py-8 sm:py-10"
              >
                <div className="grid gap-6 md:grid-cols-[130px_1fr_auto] md:gap-8">
                  {/* Period */}
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] text-[#7891a7]">
                      {experience.period}
                    </p>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae]">
                        <BriefcaseBusiness size={18} />
                      </div>

                      <div>
                        <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#17324d] sm:text-3xl">
                          {experience.title}
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#60758a] sm:text-base sm:leading-8">
                          {experience.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-[#2f6fae]/15 bg-[#f6faff] px-3 py-1.5 text-xs text-[#5f82a2]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={19}
                    className="hidden text-[#9ab1c5] md:block"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}