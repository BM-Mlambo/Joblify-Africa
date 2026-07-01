"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || "Joblify Africa visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:bmwakondo@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand mb-3">Contact Us</h1>
        <p className="text-lg text-ink/80 mb-10">
          Questions, feedback, or partnership ideas we'd love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-brand mb-1">Email</h3>
            <a
              href="mailto:bmwakondo@gmail.com"
              className="text-sm text-ink/70 hover:text-accent transition-colors"
            >
              bmwakondo@gmail.com
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-accent mb-1">Response Time</h3>
            <p className="text-sm text-ink/70">
              We typically reply within 1–2 business days.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-gray-200 rounded-xl p-6">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="How can we help?"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark text-white font-medium rounded-lg px-4 py-3 text-sm transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}