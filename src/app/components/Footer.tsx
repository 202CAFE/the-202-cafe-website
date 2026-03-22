import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import whiteLogo from "../../assets/logo-white.png";

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8" style={{ backgroundColor: 'var(--espresso)', color: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={whiteLogo} alt="202 Café Logo" className="w-8 h-8 object-contain" />
              <span className="text-2xl" style={{ fontWeight: '700' }}>The 202 Cafe & Kitchen</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--soft-beige)' }}>
              Coffee, Community, and Conversations. Your neighborhood café for work, relaxation, and connection.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/the202cafe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--dark-brown)' }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/202cafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--dark-brown)' }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/202cafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--dark-brown)' }}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: '600' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--soft-beige)' }}>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: '600' }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--soft-beige)' }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>202, Sirsi Rd, Officers Campus<br />Vaishali Nagar, Jaipur<br />Rajasthan 302021</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>99281 20202</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@the202cafe.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: '600' }}>Opening Hours</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--soft-beige)' }}>
              <li>
                <div className="flex justify-between">
                  <span>Mon - Sun</span>
                  <span className="text-white">9AM - 11PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t text-center text-sm"
          style={{ borderColor: 'var(--dark-brown)', color: 'var(--soft-beige)' }}
        >
          <p>
            © 2026 202 Café. All rights reserved. Made with ❤️ and ☕ by Novarc Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}