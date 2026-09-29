"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Loader2,
  Mail,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setSent(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
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
            05 — CONTACT
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6f8aa3]">
              Let's Connect
            </p>

            <h2 className="mt-4 max-w-md text-4xl font-medium leading-tight tracking-[-0.045em] text-[#17324d] sm:text-5xl">
              Have a question or opportunity?
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#60758a]">
              I’m always open to learning, meeting new people, and exploring
              opportunities where I can contribute and gain practical
              experience.
            </p>

            <div className="mt-8 space-y-3">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#17324d]/10 bg-[#f6faff] p-4 transition-all hover:border-[#2f6fae]/25"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae]">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-[#7891a7]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-[#315d83]">
                    {profile.email}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-[#9ab1c5] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#17324d]/10 bg-[#f6faff] p-4 transition-all hover:border-[#2f6fae]/25"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dceeff] text-[#2f6fae]">
                  <span className="text-base font-bold">
                    in
                  </span>
                </div>

                <div>
                  <p className="text-xs text-[#7891a7]">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#315d83]">
                    Connect on LinkedIn
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-[#9ab1c5] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-[#17324d]/10 bg-[#f6faff] p-5 sm:p-7 lg:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#7891a7]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#17324d]/10 bg-white px-4 py-3.5 text-sm text-[#17324d] outline-none transition placeholder:text-[#a0b0bd] focus:border-[#2f6fae]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#7891a7]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#17324d]/10 bg-white px-4 py-3.5 text-sm text-[#17324d] outline-none transition placeholder:text-[#a0b0bd] focus:border-[#2f6fae]/40"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#7891a7]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can I help?"
                  className="w-full rounded-xl border border-[#17324d]/10 bg-white px-4 py-3.5 text-sm text-[#17324d] outline-none transition placeholder:text-[#a0b0bd] focus:border-[#2f6fae]/40"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[#7891a7]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-[#17324d]/10 bg-white px-4 py-3.5 text-sm text-[#17324d] outline-none transition placeholder:text-[#a0b0bd] focus:border-[#2f6fae]/40"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2f6fae] px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#245d96] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <Check size={17} />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>

              {/* Success */}
              {sent && (
                <p className="text-center text-sm text-[#4f7f9e]">
                  Thanks! Your message has been sent successfully.
                </p>
              )}

              {/* Error */}
              {error && (
                <p className="text-center text-sm text-red-500">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}