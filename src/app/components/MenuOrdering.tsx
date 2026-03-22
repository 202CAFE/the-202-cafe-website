import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { QrCode, ShoppingBag, Coffee, Sandwich, Cookie, Leaf } from "lucide-react";
import swiggyQR from "../../assets/202_Swiggy_QR.jpeg";
import swiggyLogo from "../../assets/swiggy-logo.svg";
import zomatoLogo from "../../assets/zomato-logo.svg";

const menuPreview = [
  { icon: Coffee, name: "Espresso Based", count: "12 items" },
  { icon: Leaf, name: "Teas & Infusions", count: "8 items" },
  { icon: Sandwich, name: "Sandwiches & Wraps", count: "10 items" },
  { icon: Cookie, name: "Pastries & Desserts", count: "15 items" }
];

export function MenuOrdering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="menu" ref={ref} className="py-24 px-4 md:px-8" style={{ backgroundColor: 'var(--light-cream)' }}>
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
            Menu & Ordering
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--dark-brown)' }}>
            Explore our full menu or order delivery directly to your doorstep.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code & Ordering */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-2xl shadow-xl text-center"
            style={{ backgroundColor: 'var(--cream)' }}
          >
            {/* QR Code */}
            <div className="w-64 h-64 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg bg-white p-4">
              <img 
                src={swiggyQR} 
                alt="Scan for Swiggy Menu" 
                className="w-full h-full object-contain"
              />
            </div>

            <h3 
              className="text-2xl mb-4"
              style={{ color: 'var(--espresso)', fontWeight: '600' }}
            >
              View Our Complete Menu
            </h3>
            <p className="mb-8" style={{ color: 'var(--dark-brown)' }}>
              Scan the Swiggy QR code or order directly from Swiggy or Zomato
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.swiggy.com/restaurants/1099790/dineout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#FC8019', color: 'white', fontWeight: '600' }}
              >
                <img src={swiggyLogo} alt="Swiggy" className="w-5 h-5" />
                Order on Swiggy
              </a>
              <a
                href="https://www.zomato.com/jaipur/the-202-cafe-kitchen-khatipura-road"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#E23744', color: 'white', fontWeight: '600' }}
              >
                <img src={zomatoLogo} alt="Zomato" className="w-5 h-5" />
                Order on Zomato
              </a>
            </div>
          </motion.div>

          {/* Menu Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 
              className="text-2xl mb-6"
              style={{ color: 'var(--espresso)', fontWeight: '600' }}
            >
              Quick Menu Preview
            </h3>
            
            {menuPreview.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  style={{ backgroundColor: 'var(--cream)' }}
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--soft-beige)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: 'var(--coffee-brown)' }} />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg"
                      style={{ color: 'var(--espresso)', fontWeight: '600' }}
                    >
                      {category.name}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      {category.count}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Pricing Note */}
            <div 
              className="mt-8 p-6 rounded-xl"
              style={{ backgroundColor: 'var(--soft-beige)' }}
            >
              <p className="text-sm" style={{ color: 'var(--dark-brown)' }}>
                💡 <strong>Pro tip:</strong> Join our loyalty program and get a free coffee on your 10th visit!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
