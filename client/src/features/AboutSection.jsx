import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Activity, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden font-[Michroma]">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95"></div>

      {/* 🌟 Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 text-transparent bg-clip-text">
            Athletix
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-16"
        >
          Athletix is your ultimate fitness partner — empowering you to track workouts, 
          monitor progress, and stay consistent with science-driven insights. 
          Whether you’re a beginner or a pro athlete, we’re here to make every rep count.
        </motion.p>

        {/* 💪 Feature Highlights */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
          
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] transition-all"
          >
            <Dumbbell className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              Smart Workout Tracking
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Log your lifts, track your sets, and see performance analytics evolve 
              with intelligent progress charts.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-all"
          >
            <Activity className="w-10 h-10 text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">
              AI Progress Insights
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Understand your body with AI-based recommendations that help 
              optimize recovery and boost strength.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] transition-all"
          >
            <Users className="w-10 h-10 text-indigo-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-indigo-300">
              Connected Community
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join thousands of athletes worldwide, share progress, and 
              get inspired by people chasing the same goals.
            </p>
          </motion.div>
        </div>

        {/* ⚡ CTA */}
        <motion.div whileHover={{ scale: 1.05 }} className="mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-black font-semibold hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all">
            Join the Athletix Revolution
          </button>
        </motion.div>
      </div>

      {/* 🔷 Decorative Corners */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl"></div>
    </section>
  );
};

export default AboutSection;
