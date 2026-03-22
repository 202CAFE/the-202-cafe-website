import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import cafeInterior from "../../assets/cafe-interior.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={cafeInterior}
                alt="202 Café Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div 
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -z-10"
              style={{ backgroundColor: 'var(--soft-beige)' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ color: 'var(--espresso)', fontWeight: '700' }}
            >
              About the Café
            </h2>
            <div className="space-y-4" style={{ color: 'var(--dark-brown)' }}>
              <p className="text-lg leading-relaxed">
                Nestled in the heart of the community, <span style={{ color: 'var(--coffee-brown)', fontWeight: '600' }}>202 Café</span> is more than just a place to grab your morning brew — it's a sanctuary for dreamers, doers, and dog lovers alike.
              </p>
              <p className="text-lg leading-relaxed">
                We believe coffee tastes better when shared with friends, pets, and kindred spirits. Our open-nature design brings the outdoors in, creating a space that feels both energizing and calming.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're here to work on your next big project, catch the big game with friends, or enjoy live music at our weekly open mic nights, 202 Café welcomes you with open arms and fresh coffee.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div 
                  className="text-3xl mb-1"
                  style={{ color: 'var(--coffee-brown)', fontWeight: '700' }}
                >
                  100+
                </div>
                <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  Daily Guests
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl mb-1"
                  style={{ color: 'var(--coffee-brown)', fontWeight: '700' }}
                >
                  50+
                </div>
                <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  Menu Items
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-2xl mb-1"
                  style={{ color: 'var(--coffee-brown)', fontWeight: '700' }}
                >
                  Pet-Friendly
                </div>
                <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  Always
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}