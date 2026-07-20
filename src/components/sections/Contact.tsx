"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.sendForm(
        "service_ys966aj",
        "template_hhs4xvh",
        formRef.current!,
        "dtc2a8PhIRZXeJWMO"
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? Reach out."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: Mail, label: "Email", value: "cmareeswaranc@gmail.com", href: "mailto:cmareeswaranc@gmail.com" },
              { icon: MapPin, label: "Location", value: "India (Remote Global)", href: null },
              { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/mareeswaranc", href: SOCIAL_LINKS.linkedin },
              { icon: FaGithub, label: "GitHub", value: "github.com/mareeswaranc", href: SOCIAL_LINKS.github },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass flex items-center gap-4 rounded-2xl p-4 sm:p-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="text-primary" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate text-sm font-medium hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="glass flex h-full flex-col items-center justify-center rounded-2xl p-8 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-green-400" />
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/60"
                >
                  <Send size={16} /> Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-8 space-y-4">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400"
                  >
                    <AlertCircle size={16} />
                    {error}
                  </motion.div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-card-border bg-muted/30 px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-card-border bg-muted/30 px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-card-border bg-muted/30 px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none transition-colors"
                    placeholder="Let's discuss..."
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-card-border bg-muted/30 px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none transition-colors"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
