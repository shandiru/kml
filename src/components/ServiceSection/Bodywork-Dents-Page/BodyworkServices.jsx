import React from "react";
import {
  Hammer,
  Paintbrush,
  Wrench,
  CircleCheckBig,
  Leaf,
  Droplet,
} from "lucide-react";

// ✅ Brand palette
const COLORS = {
  blue: "#0096E6", // accent
};

export default function BodyworkServices() {
  const cards = [
    {
      title: "Dent Removal",
      icon: <Hammer className="h-12 w-12" />,
      desc:
        "Professional dent repair using paintless dent removal and traditional bodywork techniques",
      bullets: [
        "Paintless dent removal (PDR)",
        "Traditional panel beating",
        "Hail damage repair",
        "Door ding removal",
      ],
    },
    {
      title: "Scratch Repair",
      icon: <Paintbrush className="h-12 w-12" />,
      desc:
        "Complete scratch removal and paint restoration services for all types of surface damage",
      bullets: [
        "Key scratch repair",
        "Scuff mark removal",
        "Paint touch-ups",
        "Clear coat restoration",
      ],
    },
    {
      title: "Panel Replacement",
      icon: <Wrench className="h-12 w-12" />,
      desc:
        "Complete panel replacement and fitting using genuine manufacturer parts",
      bullets: [
        "Door panel replacement",
        "Wing and quarter panels",
        "Bumper replacement",
        "Bonnet and boot lids",
      ],
    },
    {
      title: "Eco Low Bake Oven",
      icon: <Leaf className="h-12 w-12" />,
      desc:
        "Energy-efficient, noise-reduced, and eco-friendly — our low bake oven ensures top-quality results with care for the environment.",
      bullets: [
        "Eco-friendly system",
        "Energy efficient",
        "Noise reduction",
        "Quality finish",
      ],
    },
    {
      title: "Precision Colour Matching",
      icon: <Droplet className="h-12 w-12" />,
      desc:
        "Using the latest water-based technology and our in-house spectrometer system, we deliver perfect paint matches every time.",
      bullets: [
        "Water-based colour matching",
        "In-house spectrometer accuracy",
        "Eco-friendly paint products",
        "Flawless factory-finish results",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-sans text-black dark:text-white">
            Our Bodywork Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((c) => (
              <div
                key={c.title}
                className="flex flex-col gap-6 rounded-xl py-6 shadow-sm border transition-all duration-300
                           hover:shadow-[0_0_20px_rgba(0,150,230,0.6)] hover:-translate-y-1 active:scale-[0.98]
                           bg-white dark:bg-black border-gray-200 dark:border-gray-700"
              >
                <div className="px-6">
                  {/* Icon */}
                  <div
                    className="mb-4"
                    style={{ color: COLORS.blue }}
                    aria-hidden="true"
                  >
                    {c.icon}
                  </div>

                  {/* Title */}
                  <div className="leading-none font-semibold font-sans text-black dark:text-white">
                    {c.title}
                  </div>

                  {/* Description */}
                  <div className="text-sm mt-2 font-serif text-gray-700 dark:text-gray-300">
                    {c.desc}
                  </div>
                </div>

                {/* Bullet list */}
                <div className="px-6">
                  <ul className="space-y-2 text-sm font-serif">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CircleCheckBig
                          className="h-4 w-4"
                          style={{ color: COLORS.blue }}
                          aria-hidden="true"
                        />
                        <span className="text-black dark:text-white">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
