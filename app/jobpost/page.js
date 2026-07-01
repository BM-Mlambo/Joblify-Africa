"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = ["Annotation", "Translation", "Web Dev", "Transcription", "Design", "Other"];
const TYPES = ["Full-time", "Part-time", "Contract", "Gig"];

export default function PostJobPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    category: CATEGORIES[0],
    type: TYPES[0],
    location: "",
    salaryMin: "",
    salaryMax: "",
    applyUrl: "",
    applyEmail: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.applyUrl && !form.applyEmail) {
      setError("Provide either an application URL or an application email.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      router.push("/jobs?posted=true");
    } catch (err) {
      setError("Failed to submit job. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand mb-2">Post a Job</h1>
        <p className="text-ink/70 mb-8">
          Your listing will appear on the Find Jobs page as soon as it's submitted.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Job Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="e.g. English-Swahili Translator"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Company *</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Location *</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="e.g. Remote - Africa"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1">Category *</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1">Job Type *</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1">Salary Min</label>
              <input
                name="salaryMin"
                type="number"
                min="0"
                value={form.salaryMin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1">Salary Max</label>
              <input
                name="salaryMax"
                type="number"
                min="0"
                value={form.salaryMax}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">Description *</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What will this person be doing?"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1">Application URL</label>
              <input
                name="applyUrl"
                type="url"
                value={form.applyUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1">Application Email</label>
              <input
                name="applyEmail"
                type="email"
                value={form.applyEmail}
                onChange={handleChange}
                placeholder="hiring@company.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
          </div>
          <p className="text-xs text-ink/50 -mt-3">Provide at least one of the two above.</p>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-accent hover:bg-accent-dark text-white font-medium rounded-lg px-4 py-3 text-sm transition disabled:opacity-50"
          >
            {submitting ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
}