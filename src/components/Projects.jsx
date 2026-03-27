import { projects } from "../data/index.js";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-light dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border py-24 px-6 md:px-10"
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
            Projets
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-dark dark:text-white mb-12">
            Mes réalisations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
              className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl overflow-hidden"
            >
              <div className="h-[180px] overflow-hidden bg-gray-900">
                <motion.img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-dark dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-light dark:bg-dark-inner border border-gray-200 dark:border-dark-border text-dark dark:text-white text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.codeUrl && project.codeUrl !== "#" && (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg text-xs font-semibold border border-gray-200 dark:border-dark-border text-dark dark:text-white hover:border-orange hover:text-orange transition duration-200"
                    >
                      ⌥ Code
                    </motion.a>
                  )}

                  {project.demoUrl && project.demoUrl !== "#" && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg text-xs font-semibold border border-gray-200 dark:border-dark-border text-dark dark:text-white hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition duration-200"
                    >
                      ↗ Démo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
