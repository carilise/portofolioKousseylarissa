import { profile, skills } from "../data/index.js";
import { FaGraduationCap, FaBriefcase, FaGlobe, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    icon: FaGraduationCap,
    color: "#fbbf24",
    label: "Formation",
    key: "formation",
  },
  { icon: FaBriefcase, color: "#f97316", label: "Rôle", key: "role" },
  { icon: FaGlobe, color: "#2596be", label: "Langues", key: "langues" },
  {
    icon: FaBook,
    color: "#22c55e",
    label: "En Apprentissage",
    key: "apprentissage",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } };

export default function About() {
  return (
    <section
      id="about"
      className="bg-light dark:bg-dark-bg border-t border-b border-gray-200 dark:border-dark-border py-24 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-orange uppercase tracking-widest mb-3">
            À Propos
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-dark dark:text-white mb-12">
            Qui suis-je ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Côté gauche */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-muted leading-relaxed text-base mb-4">
              Développeuse passionnée avec une solide expérience en
              développement web full stack. J'aime créer des applications
              modernes, performantes et accessibles.
            </p>
            <p className="text-muted leading-relaxed text-base mb-8">
              Je suis toujours à la recherche de nouveaux défis et
              d'opportunités pour collaborer sur des projets innovants.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white dark:bg-dark-inner border border-gray-200 dark:border-dark-border text-dark dark:text-white text-xs font-medium px-3 py-1.5 rounded-md"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                  className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-5 transition duration-300 cursor-default"
                >
                  <div className="text-2xl mb-3">
                    <Icon style={{ color: card.color }} />
                  </div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
                    {card.label}
                  </p>
                  <h4 className="text-sm font-bold text-dark dark:text-white">
                    {profile[card.key]}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
