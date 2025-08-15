import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-sans">KMLservices</h3>
            <p className="text-sm mb-4 opacity-90 font-serif">
              Your trusted partner for professional insurance repairs, collision
              work, and complete automotive repair services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                {/* Phone Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-serif">0800 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Email Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="20"
                    height="16"
                    x="2"
                    y="4"
                    rx="2"
                  />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="font-serif">info@kmlservices.co.uk</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 font-sans">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="font-serif">Insurance Repairs</li>
              <li className="font-serif">Collision Repairs</li>
              <li className="font-serif">Bodywork &amp; Dents</li>
              <li className="font-serif">End of Lease Repairs</li>
              <li className="font-serif">Windscreen Replacement</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 font-sans">Support</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="font-serif">24/7 Accident Support</li>
              <li className="font-serif">Insurance Claims</li>
              <li className="font-serif">Courtesy Cars</li>
              <li className="font-serif">Free Estimates</li>
              <li className="font-serif">ADAS Calibration</li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-sans">Emergency Contact</h4>
            <div className="bg-green-900/40 p-4 rounded">
              <p className="text-sm mb-2 font-serif">Accident Helpline:</p>
              <p className="text-lg font-bold font-sans">0800 123 4567</p>
              <p className="text-xs mt-2 opacity-75 font-serif">
                Available 24/7 for immediate assistance
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75 font-serif">
            © 2024 KMLservices. All rights reserved. Professional automotive
            repair services nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
