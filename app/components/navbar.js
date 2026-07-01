"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [query, setQuery] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/jobs?search=${encodeURIComponent(query.trim())}`);
        } else {
            router.push("/jobs");
        }
    }

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-50 border-b border-gray-200">
            <a href="/" className="text-blue-600 text-3xl font-extrabold tracking-tight">
                Joblify <span className="text-purple-600">Africa</span>
            </a>

            <div className="flex items-center gap-8">
                <a href="/" className="text-gray-900 font-medium hover:text-purple-600 transition-colors">
                    Home
                </a>
                <a href="/jobs" className="text-gray-900 font-medium hover:text-purple-600 transition-colors">
                    Find Jobs
                </a>
                <a href="/jobpost" className="text-gray-900 font-medium hover:text-purple-600 transition-colors">
                    Post Job
                </a>
                <a href="/about" className="text-gray-900 font-medium hover:text-purple-600 transition-colors">
                    About
                </a>
                <a href="/contact" className="text-gray-900 font-medium hover:text-purple-600 transition-colors">
                    Contact
                </a>

                <form onSubmit={handleSearch} className="relative">
                    <button
                        type="submit"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                        aria-label="Search"
                    >
                        🔍
                    </button>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search jobs..."
                        className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </form>
            </div>

            <div className="flex items-center gap-4">
                <a href="/login" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Login
                </a>
                <a
                    href="/signup"
                    className="bg-purple-600 text-white font-medium px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                    Signup
                </a>
            </div>
        </nav>
    )
}