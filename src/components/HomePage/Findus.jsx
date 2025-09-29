"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const directionsUrl =
    "https://www.google.com/maps/place/Kml+accident+repair+centre+ltd+-+Car+Body+Repair/@53.5418439,-2.1795345,518m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487bb16ad315b723:0x8f66ab0eb640ec4c!8m2!3d53.5418439!4d-2.1769596!16s%2Fg%2F11sgqyljpr?entry=ttu";

  return (
    <section
      className="py-12 px-4 bg-gray-50 dark:bg-black transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-[#0096E6] dark:text-[#0096E6]"
          data-aos="fade-down"
        >
          Find Us
        </h2>

        {/* Google Maps Embed */}
        <div
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px] border border-gray-200 dark:border-gray-700"
          data-aos="zoom-in"
        >
          <iframe
            title="Google Map - KML Accident Repair Centre"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.382205235293!2d-2.1795345!3d53.5418439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb16ad315b723%3A0x8f66ab0eb640ec4c!2sKml%20accident%20repair%20centre%20ltd%20-%20Car%20Body%20Repair!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Address */}
        <p
          className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
        >
          <span className="font-semibold">KML Accident Repair Centre Ltd</span>
          <br />
          Unit 4 Haslam St, Middleton,
          <br />
          Manchester M24 2AP, United Kingdom
        </p>

        {/* Directions Button */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="100">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Maps directions to KML Accident Repair Centre"
            className="inline-flex items-center gap-2 rounded-md bg-[#0096E6] text-white px-5 py-3 text-sm md:text-base font-semibold 
                       hover:bg-[#007bbf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0096E6] 
                       dark:bg-white dark:text-black dark:hover:opacity-90 dark:focus:ring-white"
          >
            Open Directions in Google Maps
            <svg
              className="h-4 w-4 md:h-5 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h6m0 0v6m0-6L10 16"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
