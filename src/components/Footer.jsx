export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-16 pt-8 border-t border-gray-200 dark:border-dark-border text-sm text-muted"
    >
      © 2026 Larissa KOUSSEY. Tous droits réservés.
    </motion.footer>
  );
}
