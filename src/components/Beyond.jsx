import { beyond } from "../data/index.js";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } };

export default function Beyond() {
  return (
    <section
      id="beyond"
      className="bg-white dark:bg-dark-card py-24 px-6 md:px-10"
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
            Au-delà du code
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-dark dark:text-white mb-12">
            Créativité & Commerce
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-dark-border rounded-xl px-4 py-2.5 text-sm font-semibold text-orange mb-6">
              <FaShoppingBag style={{ color: "#f97316" }} />
              Commerçante en ligne
            </div>

            {beyond.description.map((para, i) => (
              <p key={i} className="text-muted leading-relaxed text-base mb-4">
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 my-6">
              {beyond.categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.span
                    key={cat.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 bg-light dark:bg-dark-inner border border-gray-200 dark:border-dark-border rounded-lg px-3.5 py-2 text-sm font-medium text-dark dark:text-white cursor-default"
                  >
                    <Icon style={{ color: "#f97316" }} />
                    {cat.label}
                  </motion.span>
                );
              })}
            </div>

            <motion.a
              href={beyond.shopUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, opacity: 0.9 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-orange text-white font-bold text-sm px-6 py-3 rounded-xl transition duration-200"
            >
              🛒 Visiter LariSTORE
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-gradient-to-br from-[#1a1a2e] to-[#111827] rounded-2xl p-7 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-[-40px] right-[-40px] w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(37,150,190,0.25),transparent_70%)] pointer-events-none" />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-bold text-2xl text-white mb-1"
            >
              Lari<span className="text-blue">STORE</span>
            </motion.p>

            <p className="text-sm text-gray-400 mb-7">{beyond.shopSub}</p>

            <div className="grid grid-cols-2 gap-3 mb-7">
              {beyond.categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                    className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3.5"
                  >
                    <Icon style={{ color: "#2596be", fontSize: "1.1rem" }} />
                    <span className="text-xs text-gray-300 font-medium">
                      {cat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href={beyond.shopUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between bg-blue rounded-xl px-4 py-3.5 transition duration-200"
            >
              <span className="text-sm font-bold text-white">
                Découvrir la boutique
              </span>
              <span className="text-white font-bold">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
