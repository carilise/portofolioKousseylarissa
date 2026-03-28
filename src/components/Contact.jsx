import { contacts } from "../data/index.js";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-light dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border py-24 px-6 md:px-10 text-center"
    >
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
            Contact
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-dark dark:text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-muted text-base max-w-sm mx-auto mb-12 leading-relaxed">
            N'hésitez pas à me contacter pour discuter d'un projet ou d'une
            opportunité.
          </p>
        </motion.div>

        {/* Cartes contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 text-center block"
              >
                <motion.div
                  className="text-3xl mb-3 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ color: c.color }}
                >
                  <Icon />
                </motion.div>
                <h3 className="text-base font-bold text-dark dark:text-white mb-1">
                  {c.label}
                </h3>
                <p className="text-xs text-muted break-all">{c.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div> 
    </section>
  );
}
