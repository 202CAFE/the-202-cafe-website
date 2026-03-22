import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../../assets/logo-black.png";
import whiteLogo from "../../assets/logo-white.png";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1587288672797-74093d795afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjB3b29kJTIwd2FybXxlbnwxfHx8fDE3NzM1NTkzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="202 Café Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 bg-[var(--cream)] px-8 py-4 rounded-full shadow-2xl">
            <img src={logo} alt="202 Café Logo" className="w-10 h-10" />
            <span className="text-4xl md:text-5xl tracking-tight" style={{ color: 'var(--espresso)', fontWeight: '600' }}>
              The 202 Cafe & Kitchen
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          className="text-5xl md:text-7xl mb-6 max-w-4xl"
          style={{ color: 'white', fontWeight: '700', lineHeight: '1.1' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Coffee, Community, and Conversations
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-2xl"
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A relaxed space where nature meets urban life. Work, unwind, and connect.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#menu"
            className="group px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-2"
            style={{ backgroundColor: 'var(--coffee-brown)', color: 'var(--cream)' }}
          >
            <span className="text-lg">View Menu</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://www.swiggy.com/restaurants/1099790/dineout"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl border-2 inline-flex items-center gap-2"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
              color: 'white',
              borderColor: 'white',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span className="text-lg">Order on Swiggy</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <img src={whiteLogo} alt="202 Café Logo" className="w-12 h-12 object-contain" />
        </motion.div>
      </motion.div>
    </div>
  );
}