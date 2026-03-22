import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Dog, Trees, Laptop, Tv, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import petFriendlyImg from "../../assets/pet-friendly.png";
import openNatureImg from "../../assets/open-nature-seating.png";
import workspaceImg from "../../assets/workspace.png";

const features = [
  {
    icon: Dog,
    title: "Pet Friendly",
    description: "Bring your furry friends along! We love pets and have a dedicated pet-friendly area.",
    image: petFriendlyImg
  },
  {
    icon: Trees,
    title: "Open Nature Seating",
    description: "Enjoy fresh air and natural light in our open-nature seating spaces with plants and greenery.",
    image: openNatureImg
  },
  {
    icon: Laptop,
    title: "Workspace Friendly",
    description: "Free WiFi, charging ports, and quiet corners perfect for productivity and focus.",
    image: workspaceImg
  },
  {
    icon: Tv,
    title: "Live Sports Screening",
    description: "Catch all the big games on our big screens. The perfect spot for sports enthusiasts.",
    image: "https://images.unsplash.com/photo-1763888834624-9021ada82ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB3YXRjaGluZyUyMHRlbGV2aXNpb24lMjBiYXJ8ZW58MXx8fHwxNzczNTYzMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Calendar,
    title: "Community Events",
    description: "Open mic nights, live music, art exhibitions, and more. A hub for local creativity.",
    image: "https://images.unsplash.com/photo-1763731374100-24ee3f91a896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZyUyMHBlb3BsZXxlbnwxfHx8fDE3NzM1NjMwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CafeExperience() {
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
            The 202 Café Experience
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--dark-brown)' }}>
            More than just coffee — it's a lifestyle, a community, and a home away from home.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
                  style={{ backgroundColor: 'var(--light-cream)' }}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {typeof feature.image === 'string' ? (
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'var(--soft-beige)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: 'var(--coffee-brown)' }} />
                    </div>

                    <h3 
                      className="text-lg mb-2"
                      style={{ color: 'var(--espresso)', fontWeight: '600' }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--dark-brown)' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}