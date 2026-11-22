"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const CATEGORIES = ["", "Annotation", "Translation", "Web Dev", "Transcription", "Design", "Other"];
const TYPES = ["", "Full-time", "Part-time", "Contract", "Gig"];

function FindJobsInner() {
  const urlParams = useSearchParams();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(urlParams.get("search") || "");
  const [category, setCategory] = useState(urlParams.get("category") || "");
  const [type, setType] = useState(urlParams.get("type") || "");

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);
    if (type) params.set("type", type);

    setLoading(true);
    fetch(`/api/jobs?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .finally(() => setLoading(false));
  }, [search, category, type]);

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand mb-2">Find Jobs</h1>
        <p className="text-ink/70 mb-6">
          Browse remote and freelance opportunities across Africa and the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Search by title, company, keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c || "All Categories"}
              </option>
            ))}
          </select>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand"
          >
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t || "All Types"}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className="text-ink/50">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-ink/50">No jobs match your search. Try different filters.</p>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`border rounded-xl p-5 bg-white hover:shadow-md transition ${
                  job.featured ? "border-brand bg-brand/5" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h2 className="text-lg font-semibold text-ink">{job.title}</h2>
                    <p className="text-sm text-ink/60">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">
                    {job.category}
                  </span>
                </div>

                <p className="text-ink/80 mt-2 line-clamp-2">{job.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-ink/50">
                    {job.type}
                    {job.salaryMin && job.salaryMax
                      ? ` • $${job.salaryMin}–$${job.salaryMax}`
                      : ""}
                  </span>
                  {job.applyUrl ? (
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white text-sm px-4 py-2 rounded-lg hover:bg-accent-dark transition"
                    >
                      Apply
                    </a>
                  ) : (
                    <a
                      href={`mailto:${job.applyEmail}`}
                      className="bg-accent text-white text-sm px-4 py-2 rounded-lg hover:bg-accent-dark transition"
                    >
                      Apply
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function FindJobsPage() {
  return (
    <Suspense fallback={<div className="bg-surface min-h-screen" />}>
      <FindJobsInner />
    </Suspense>
  );
}