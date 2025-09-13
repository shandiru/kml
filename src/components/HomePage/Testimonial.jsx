"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Had my car resprayed here today after an awful insurance job. The car now looks brand new. Would highly recommend. Outstanding service, really helpful and friendly too.",
    name: "Lu McDermott",
  },
  {
    text: "Took our car in for a small blemish in the paintwork, after 18 months and the guarantee was fully honoured. True sign of great service and company.",
    name: "Christine Twigg",
  },
  {
    text: "After a run in with a concrete post I was in need of repairs. The work completed was amazing and my car now looks like new. Very reasonably priced, speedy service and fantastic work. Would highly recommend.",
    name: "Helen Duffy",
  },
  {
    text: "The guys did a perfect job. The dents and damage they repaired look perfect. Puts the rest of the truck to shame. Quick turn around also. From enquiry to complete in just a few days. Highly recommended.",
    name: "Daniel Walker",
  },
  {
    text: "Took my Kia Ceed to be repaired after damaging my bumper and side panel. Booked me in for a few days later and finished the work on the same day. Great service and impressed with the work.",
    name: "Dave C",
  },
  {
    text: "KML have done a fantastic job in repairing the back of my car. It looks brand new again!! Thank you guys.",
    name: "Holly Sheals",
  },
  {
    text: "Great, professional service from this garage. I had a minor job to do and nobody in Middleton wanted to take it on, or were giving me 4-6 weeks away date. It literally was 5 minutes job and these guys made it quick and as wanted.",
    name: "Andrzej Węgielnik",
  },
  {
    text: "Left 1 of my businesses vans with KML after 1 of my employees reversed into a dump truck. Job was to replace re-door and replace twisted sections of the main van structure. Professional service and workmanship.",
    name: "Stephen Davison",
  },
];

function InitialAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-12 h-12 min-w-[3rem] rounded-full bg-[#d4ebe2] border border-[#066a3c66] flex items-center justify-center text-[#066a3c] font-semibold text-base">
      {initials}
    </div>
  );
}

export default function ReviewsSlider() {
  return (
    <section
      className="w-full bg-white text-[#1f2937] py-16 px-4 relative"
      id="testimonial"
    >
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: transparent;
          border: 2px solid #066a3c;
          width: 10px;
          height: 10px;
          opacity: 1;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #066a3c;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#066a3c]">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-sm md:text-lg font-semibold">
            Don’t just take our word for it – hear from our satisfied customers
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="flex">
              <article
                className="
                  flex flex-col justify-between
                  h-full w-full min-h-[320px] 
                  rounded-2xl border border-[#dbe7f2] 
                  bg-[#f1f7fb] p-6 shadow-md 
                  transition hover:border-[#066a3cb3] group relative
                "
              >
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#066a3c]/5 via-transparent to-transparent" />

                <div>
                  <div className="flex items-center gap-3">
                    <InitialAvatar name={t.name} />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 text-green-800">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 fill-green-800" />
                        ))}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Verified review
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
                    “{t.text}”
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="font-semibold text-[#066a3c]">{t.name}</div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-[#066a3c66] text-[#066a3c]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 fill-[#066a3c]" />
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-6 mt-10">
          <button className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full border border-[#066a3c] text-[#066a3c] hover:bg-[#066a3c] hover:text-white transition">
            <BsArrowLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full border border-[#066a3c] text-[#066a3c] hover:bg-[#066a3c] hover:text-white transition">
            <BsArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://www.google.com/search?q=Kml+accident+repair+centre+ltd+-+Car+Body+Repair+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md text-white text-sm font-semibold bg-[#066a3c] hover:bg-[#055a33] transition"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
