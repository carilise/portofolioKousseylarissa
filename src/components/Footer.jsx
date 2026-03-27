export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-muted">
          © 2026 Larissa KOUSSEY. Tous droits réservés.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/carilise"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-dark dark:hover:text-white transition-colors duration-200"
          >
            <i className="fab fa-github text-lg" />
          </a>
          <a
            href="https://bj.linkedin.com/in/larissa-koussey-772109385"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-blue transition-colors duration-200"
          >
            <i className="fab fa-linkedin text-lg" />
          </a>
          <a
            href="https://wa.me/22953934771"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-green-500 transition-colors duration-200"
          >
            <i className="fab fa-whatsapp text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
