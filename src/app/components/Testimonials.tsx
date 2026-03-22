import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { Instagram } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    handle: "@priyaeats",
    text: "202 Café is my go-to spot for both work and relaxation. The coffee is exceptional, and I love that I can bring my dog!",
    rating: 5,
    verified: true
  },
  {
    name: "Arjun Patel",
    handle: "@arjunfoodie",
    text: "Best café in town! The open mic nights are incredible, and the baristas know my order by heart. Feels like family.",
    rating: 5,
    verified: true
  },
  {
    name: "Meera Krishnan",
    handle: "@meeratravels",
    text: "A hidden gem with the most cozy atmosphere. Perfect for a Sunday brunch or watching the match with friends. Highly recommend!",
    rating: 5,
    verified: true
  },
  {
    name: "Rohan Mehta",
    handle: "@rohanshots",
    text: "The aesthetic is unmatched — warm lighting, plants everywhere, and the best latte art I've seen. A photographer's dream!",
    rating: 5,
    verified: true
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 md:px-8" style={{ backgroundColor: 'var(--cream)' }}>
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
            What Our Guests Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--dark-brown)' }}>
            We'd love to hear your story too! Tag us on Instagram.
          </p>
          <a 
            href="https://www.instagram.com/the202cafe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
            style={{ backgroundColor: 'var(--coffee-brown)', color: 'var(--cream)', fontWeight: '600' }}
          >
            <Instagram className="w-5 h-5" />
            Share Your Experience
          </a>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.handle}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: 'var(--light-cream)' }}
            >
              {/* Quote Icon */}
              <div 
                className="absolute top-6 right-6 opacity-20"
              >
                <Quote className="w-12 h-12" style={{ color: 'var(--coffee-brown)' }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current" 
                    style={{ color: 'var(--warm-brown)' }} 
                  />
                ))}
              </div>

              {/* Text */}
              <p 
                className="text-lg mb-6 leading-relaxed relative z-10"
                style={{ color: 'var(--dark-brown)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--soft-beige)', color: 'var(--coffee-brown)', fontWeight: '600' }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div style={{ color: 'var(--espresso)', fontWeight: '600' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    {testimonial.handle}
                    {testimonial.verified && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--plant-green)', color: 'white' }}>
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}