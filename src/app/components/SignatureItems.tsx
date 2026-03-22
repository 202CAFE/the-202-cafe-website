import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import woodFiredPizzaImg from "../../assets/wood-fired-pizza.png";

const items = [
  {
    name: "Signature Latte",
    description: "Silky smooth espresso with perfectly steamed milk and intricate latte art",
    image: "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzM0ODg2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Artisan Pastries",
    description: "Freshly baked croissants and pastries made daily with premium ingredients",
    image: "https://images.unsplash.com/photo-1773027270919-8714e0af1172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcGFzdHJ5JTIwZGVzc2VydCUyMGNyb2lzc2FudHxlbnwxfHx8fDE3NzM1NTkzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Wood Fired Pizza",
    description: "Authentic wood-fired pizzas with fresh toppings and perfectly crispy crust",
    image: woodFiredPizzaImg
  },
  {
    name: "Specialty Brews",
    description: "Pour-over, cold brew, and seasonal specialty drinks crafted with care",
    image: "https://images.unsplash.com/photo-1608552265230-08997ef53e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBicmV3aW5nfGVufDF8fHx8MTc3MzU1NjExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function SignatureItems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 md:px-8" style={{ backgroundColor: 'var(--light-cream)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ color: 'var(--espresso)', fontWeight: '700' }}
          >
            Signature Food & Drinks
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--dark-brown)' }}>
            Crafted with passion, served with love. Explore our curated selection of coffee, food, and treats.
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 bg-[var(--cream)] h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  {typeof item.image === 'string' ? (
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 
                    className="text-xl mb-2"
                    style={{ color: 'var(--espresso)', fontWeight: '600' }}
                  >
                    {item.name}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'var(--dark-brown)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}