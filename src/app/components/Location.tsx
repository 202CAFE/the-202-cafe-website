import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
            Visit Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--dark-brown)' }}>
            Come say hello! We can't wait to serve you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-auto"
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d75.7389344!3d26.9211856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db32c632f6991:0x5cb6e333f5ea9401!2sThe+202+Cafe+%26+Kitchen!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The 202 Cafe & Kitchen Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div 
              className="p-6 rounded-xl flex gap-4"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--soft-beige)' }}
              >
                <MapPin className="w-6 h-6" style={{ color: 'var(--coffee-brown)' }} />
              </div>
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ color: 'var(--espresso)', fontWeight: '600' }}
                >
                  Address
                </h3>
                <p style={{ color: 'var(--dark-brown)' }}>
                  202, Sirsi Rd, Officers Campus<br />
                  Vaishali Nagar, Jaipur<br />
                  Rajasthan 302021, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div 
              className="p-6 rounded-xl flex gap-4"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--soft-beige)' }}
              >
                <Phone className="w-6 h-6" style={{ color: 'var(--coffee-brown)' }} />
              </div>
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ color: 'var(--espresso)', fontWeight: '600' }}
                >
                  Phone
                </h3>
                <p style={{ color: 'var(--dark-brown)' }}>
                  99281 20202<br />
                  <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    Call for reservations & catering
                  </span>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div 
              className="p-6 rounded-xl flex gap-4"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--soft-beige)' }}
              >
                <Clock className="w-6 h-6" style={{ color: 'var(--coffee-brown)' }} />
              </div>
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ color: 'var(--espresso)', fontWeight: '600' }}
                >
                  Opening Hours
                </h3>
                <div className="space-y-1" style={{ color: 'var(--dark-brown)' }}>
                  <p>Monday - Sunday: 9:00 AM - 11:00 PM</p>
                  <p className="text-sm mt-2" style={{ color: 'var(--plant-green)', fontWeight: '600' }}>
                    Open every day!
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=The+202+Cafe+%26+Kitchen&destination_place_id=0x396db32c632f6991:0x5cb6e333f5ea9401"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--coffee-brown)', color: 'var(--cream)', fontWeight: '600' }}
            >
              <span className="inline-flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Get Directions
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}