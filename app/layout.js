import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joblify Africa",
  description: "Connecting you to remote and freelance job opportunities across Africa and the world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}