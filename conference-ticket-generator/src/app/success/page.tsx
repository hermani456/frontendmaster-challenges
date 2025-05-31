"use client";

import React, { useEffect, useState, Suspense } from "react";
import Ticket from "../components/ticket";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle2,
} from "lucide-react";

export default function Success() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-8 px-4 flex items-center justify-center">
          <div className="text-white text-lg">
            Loading ticket information...
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const [imageSrc, setImageSrc] = useState("");

  const name = searchParams.get("name") || "Guest";
  const email = searchParams.get("email") || "email@example.com";
  const github = searchParams.get("github") || "@github";

  useEffect(() => {
    const storedImage = localStorage.getItem("ticketUserImage");
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Thank You Message */}
        <div className="text-center mb-10">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 mx-auto text-[#85B79D]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Thank You for Registering!
          </h1>
          <p className="text-lg text-purple-200 mb-6">
            We&apos;ve emailed your ticket to{" "}
            <span className="font-semibold">{email}</span>.
            <br />
            Get ready for an amazing experience at Coding Conf 2025!
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto my-6"></div>
        </div>

        {/* Ticket Preview */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-center text-white mb-6">
            Your Digital Ticket
          </h2>
          <Ticket
            name={name}
            email={email}
            github={github}
            imageSrc={imageSrc}
          />
        </div>

        {/* Next Steps */}
        <div className="bg-purple-800 rounded-lg p-6 text-white max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">What&apos;s Next?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-purple-300 mr-2" />
              <span>
                Check your email for the ticket confirmation and important
                details
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-purple-300 mr-2" />
              <span>Save the date: May 21-23, 2025</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-purple-300 mr-2" />
              <span>
                Follow us on social media for updates and announcements
              </span>
            </li>
          </ul>
        </div>

        {/* Share and Return to Home */}
        <div className="text-center mt-10">
          <div className="mb-6">
            <p className="text-white mb-4">Share your excitement</p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block bg-[#85B79D] hover:bg-[#6B9A7E] text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
