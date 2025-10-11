// app/careers/page.tsx

"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const jobs = [
  {
    title: "Electrical Site Engineer",
    location: "Islamabad",
    type: "Full-time",
    description:
      "Supervise electrical installation work on construction sites. Ensure compliance with project specifications, safety standards, and timely completion.",
  },
  {
    title: "Project Manager – Electrical Division",
    location: "Lahore",
    type: "Full-time",
    description:
      "Lead project teams from planning to execution. Oversee budgets, resource allocation, and coordination between engineering and construction departments.",
  },
  {
    title: "Procurement Officer",
    location: "Rawalpindi",
    type: "Full-time",
    description:
      "Manage purchasing of electrical materials and construction supplies. Build relationships with vendors and ensure timely delivery of quality materials.",
  },
  {
    title: "Electrical Technician",
    location: "Karachi",
    type: "Contract",
    description:
      "Perform wiring, cabling, and troubleshooting tasks on-site. Work closely with engineers to maintain and repair electrical systems.",
  },
  {
    title: "AutoCAD Draftsman – Electrical",
    location: "Remote / On-site",
    type: "Full-time",
    description:
      "Prepare detailed technical drawings and layouts for electrical installations and schematics according to project requirements.",
  },
  {
    title: "HSE Officer (Health, Safety & Environment)",
    location: "Multan",
    type: "Full-time",
    description:
      "Ensure compliance with safety regulations on construction sites. Conduct safety audits, risk assessments, and employee safety training.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col">
      <section className="relative flex flex-col items-center justify-center py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#ec7037]/10 blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-5xl font-bold text-[#ec7037]"
        >
          Join Our Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 mt-4 text-lg text-gray-600 max-w-xl"
        >
          Be part of a culture that values creativity, innovation, and growth.
        </motion.p>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {job.title}
              </h3>
              <FaBriefcase className="text-[#ec7037] text-lg" />
            </div>

            <p className="text-sm text-gray-600 flex-grow">{job.description}</p>

            <div className="flex items-center text-sm text-gray-500 gap-3 mt-4">
              <FaMapMarkerAlt className="text-[#ec7037]" />
              <span>{job.location}</span> • <span>{job.type}</span>
            </div>

            <button className="mt-5 bg-[#ec7037] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#d8642e] transition-colors">
              Apply Now
            </button>
          </motion.div>
        ))}
      </section>

      <section className="text-center py-24 bg-[#ec7037]/5">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Don’t see your dream role?
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          We’re always looking for passionate people to join our team.  
          Send us your resume, and we’ll reach out when the right opportunity arises.
        </p>
        <button className="bg-[#ec7037] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d8642e] transition-colors">
          Submit Resume
        </button>
      </section>
    </main>
  );
}
