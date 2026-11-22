"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const formData = { name, email, password };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setName("");
      setEmail("");
      setPassword("");
      router.push("/login");
    } catch (err) {
      setError("Failed to sign up. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl p-10 border rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-blue-700 text-center">Create account</h1>

        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-3 rounded-md placeholder-gray-500"
          />

          <input
            type="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-3 rounded-md placeholder-gray-500"
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-3 rounded-md placeholder-gray-500"
          />

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white py-3 rounded-md disabled:opacity-50"
          >
            {submitting ? "Creating account..." : "Signup"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <a href="/login" className="text-blue-600 ml-1">
            {" "}
            Login
          </a>
        </p>
      </div>
    </div>
  );
}