import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-black.png";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
      style={{ backgroundColor: 'var(--cream)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="202 Café Logo" className="w-6 h-6 object-contain" />
          <span className="text-xl" style={{ color: 'var(--espresso)', fontWeight: '700' }}>
            The 202 Cafe & Kitchen
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors"
              style={{ color: 'var(--dark-brown)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--coffee-brown)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-brown)'}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'var(--coffee-brown)', color: 'var(--cream)', fontWeight: '600' }}
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" style={{ color: 'var(--espresso)' }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: 'var(--espresso)' }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2"
                  style={{ color: 'var(--dark-brown)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full text-center"
                style={{ backgroundColor: 'var(--coffee-brown)', color: 'var(--cream)', fontWeight: '600' }}
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}