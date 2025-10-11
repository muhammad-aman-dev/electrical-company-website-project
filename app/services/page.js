'use client'
import { motion } from "framer-motion";
import { FaBolt, FaTools, FaSolarPanel, FaShieldAlt, FaHome, FaLightbulb, FaIndustry, FaChartLine } from "react-icons/fa";
import Image from "next/image";

const servicesData = [
  {
    icon: <FaBolt size={32} />,
    title: "Electrical Design & Engineering",
    description:
      "Custom electrical solutions for residential, commercial, and industrial projects with precision and safety.",
  },
  {
    icon: <FaTools size={32} />,
    title: "Panel Installation & Automation",
    description:
      "Expert installation and automation of electrical panels to optimize efficiency and reliability.",
  },
  {
    icon: <FaSolarPanel size={32} />,
    title: "Renewable Energy Consultation",
    description:
      "Consulting for solar, wind, and other renewable energy systems for sustainable solutions.",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Safety & Compliance",
    description:
      "Ensuring all projects comply with local regulations and safety standards.",
  },
  {
    icon: <FaHome size={32} />,
    title: "Smart Home Integration",
    description:
      "Integrate smart devices, lighting, and home automation for convenience and energy efficiency.",
  },
  {
    icon: <FaLightbulb size={32} />,
    title: "Energy Audits",
    description:
      "Comprehensive energy audits to identify savings and improve efficiency for homes and businesses.",
  },
  {
    icon: <FaIndustry size={32} />,
    title: "Industrial Wiring & Control Systems",
    description:
      "Design and implement control systems and industrial wiring solutions for factories and plants.",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Project Management & Consultation",
    description:
      "End-to-end project planning, management, and consultation to ensure smooth execution.",
  },
];



const ServicesPage = () => {
  return (
    <div className="w-full min-h-screen font-sans">
      <motion.section
              className="relative h-[50vh] sm:h-[70vh] flex justify-center items-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/services-banner.jpg"
                alt="Services W&C Electrical"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-center items-center z-10 text-center px-4">
                <h1 className="text-[#ec7037] font-bold text-4xl sm:text-5xl">
                  Our Services
                </h1>
                <p className="text-white mt-4 max-w-2xl text-lg sm:text-xl">
                  Safe, reliable, and innovative electrical solutions for every need.
                </p>
              </div>
            </motion.section>

      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-center text-3xl sm:text-4xl text-[#120e49] font-bold relative inline-block">
          What We Offer
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037]"></span>
        </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            Explore our wide range of services designed to power up your projects
            efficiently and safely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-[#ec7037] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#120e49]">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 bg-[#120e49] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Power Your Project?
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Contact us today for a free consultation and quote.
          </p>
          <button className="bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 px-8 py-3 rounded-lg font-semibold transition-colors">
            Request Service
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;
