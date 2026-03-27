import { profile } from "../data/index.js";
import { motion } from "framer-motion";

const fadeDown = { hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const scaleX = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1 },
};

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-12 w-full min-h-screen bg-white dark:bg-dark-bg">
        {/* ── Côté gauche ── */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-between px-8 pt-28 pb-10 md:px-16 py-20">
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-dark-border text-dark dark:text-white text-xs font-medium px-4 py-2 rounded-full w-fit"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Disponible pour des missions
          </motion.div>

          <div className="hero-content flex-1 flex flex-col justify-center">
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-bold text-5xl md:text-7xl text-dark dark:text-white leading-tight mb-8"
            >
              Bonjour, je suis
            </motion.h1>

            <motion.div
              variants={scaleX}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
              className="w-full h-px bg-black/20 dark:bg-dark-border mb-8"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <p className="text-dark dark:text-white font-bold text-sm uppercase tracking-widest">
                  {profile.name} {profile.lastname}
                </p>
                <p className="text-muted text-sm">{profile.role}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-orange text-white font-semibold text-sm px-5 py-3 rounded-lg hover:opacity-90 transition text-center"
                >
                  ✉ Me contacter
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-dark/40 dark:border-dark-border hover:border-dark dark:hover:border-white text-dark dark:text-white font-semibold text-sm px-5 py-3 rounded-lg transition text-center"
                >
                  Voir mes projets
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 bg-white dark:bg-dark-card flex items-center justify-center py-10 md:py-0 overflow-hidden">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[220px] h-[280px] md:w-[300px] md:h-[380px] rounded-[40px] rounded-tl-[120px] overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src="/img/lari.png"
              alt="Larissa KOUSSEY"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
