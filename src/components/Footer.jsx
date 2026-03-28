import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="py-6 text-center text-sm text-muted">
        Design & Développement : Larissa KOUSSEY
      </div>
    </motion.footer>
  );
}
