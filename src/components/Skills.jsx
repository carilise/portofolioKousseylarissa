import { skills } from "../data/index.js";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-dark-card py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-orange uppercase tracking-widest mb-3">
            Compétences
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-dark dark:text-white mb-12">
            Mon expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -5, boxShadow: "0 12px 28px rgba(0,0,0,0.1)" }}
                className="bg-light dark:bg-dark-inner border border-gray-200 dark:border-dark-border rounded-2xl px-5 py-5 flex items-center gap-4 cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon style={{ color: skill.color, fontSize: "2rem" }} />
                </motion.div>
                <span className="text-sm font-bold text-dark dark:text-white">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
