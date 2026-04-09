const navItems = ["home", "skills", "story", "projects", "blogs", "contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="flex justify-center gap-6 py-3">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="capitalize hover:text-primary"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}