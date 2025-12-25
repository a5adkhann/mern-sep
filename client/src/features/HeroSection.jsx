import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white font-[Michroma] flex flex-col relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 via-[#38BDF8]/10 to-black -z-10"></div>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-[#38BDF8]/10 blur-3xl rounded-full animate-pulse -z-10"></div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#1E3A8A]/10 blur-3xl rounded-full animate-pulse -z-10"></div>

      {/* Grid / Flex Layout */}
      <div className="flex flex-col md:flex-col lg:grid lg:grid-cols-2 items-center justify-center min-h-[calc(100vh-64px)] px-4 sm:px-6 md:px-10 lg:px-20 gap-8 sm:gap-10 py-12 sm:py-16 md:py-20 lg:py-24 text-center lg:text-left">

        {/* Hero Text */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 text-[#38BDF8]">
            <Dumbbell className="w-6 h-6" />
            <p className="uppercase tracking-widest text-xs sm:text-sm">
              Track. Train. Transform.
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight mb-6">
            Defy{" "}
            <span className="bg-gradient-to-r from-[#1E3A8A] via-[#38BDF8] to-[#60A5FA] text-transparent bg-clip-text">
              Limits
            </span>{" "}
            — <br className="hidden lg:block" /> Build a Stronger You.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed">
            Log workouts, manage nutrition, and track progress effortlessly with AthLetix.{" "}
            <span className="text-[#38BDF8] font-semibold">AthLetix</span> gives
            you the power to stay consistent and reach your goals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] rounded-full text-white font-semibold hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all w-full sm:w-auto"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-full hover:bg-[#38BDF8]/10 transition-all w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </div>

          <p className="mt-6 text-gray-400 text-xs sm:text-sm tracking-widest">
            🚴 Track Workouts | 🥗 Log Meals | 📈 See Progress
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center items-center"
        >
          <img
            src="b1.png"
            alt="Fitness Workout"
            className="
    w-[250px]
    sm:w-[350px]
    md:w-[600px]
    lg:w-[900px]
    xl:w-[950px]
    object-contain
    drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]
  "
          />

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
