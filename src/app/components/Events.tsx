import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mic2, Tv2, Users, Music, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const events = [
  {
    icon: Mic2,
    title: "Open Mic Nights",
    day: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    description: "Share your talent — poetry, music, comedy, or storytelling. Sign up at the counter!",
    color: "var(--warm-brown)"
  },
  {
    icon: Tv2,
    title: "Live Sports Screening",
    day: "Match Days",
    time: "As per schedule",
    description: "Catch all major cricket, football, and sports events on our big screens with fellow fans.",
    color: "var(--coffee-brown)"
  },
  {
    icon: Music,
    title: "Live Music Sessions",
    day: "Saturdays",
    time: "8:00 PM - 11:00 PM",
    description: "Enjoy live acoustic performances by local artists while sipping your favorite brew.",
    color: "var(--plant-green)"
  },
  {
    icon: Users,
    title: "Community Meetups",
    day: "First Sunday",
    time: "4:00 PM - 7:00 PM",
    description: "Book clubs, creative workshops, networking events — connect with like-minded people.",
    color: "var(--dark-brown)"
  }
];

export function Events() {
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
            Events & Community
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--dark-brown)' }}>
            More than a café — we're a hub for creativity, connection, and celebration.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: 'var(--light-cream)' }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: event.color }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl mb-2"
                      style={{ color: 'var(--espresso)', fontWeight: '600' }}
                    >
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="text-sm px-3 py-1 rounded-full"
                        style={{ backgroundColor: 'var(--soft-beige)', color: 'var(--dark-brown)', fontWeight: '500' }}
                      >
                        {event.day}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                        {event.time}
                      </span>
                    </div>
                    <p style={{ color: 'var(--dark-brown)' }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Event Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[21/9] relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1720749401729-ffbadd0c7dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjB2ZW51ZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MzU1OTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Live event at 202 Café"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Event CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <h3 
                  className="text-3xl md:text-4xl mb-4 text-white"
                  style={{ fontWeight: '700' }}
                >
                  Join us for upcoming events
                </h3>
                <p className="text-lg text-white/90 mb-6">
                  Follow us on social media to stay updated on all our events, special performances, and community gatherings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/the202cafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
                    style={{ backgroundColor: 'var(--coffee-brown)', color: 'var(--cream)', fontWeight: '600' }}
                  >
                    <Instagram className="w-5 h-5" />
                    Follow Us on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}