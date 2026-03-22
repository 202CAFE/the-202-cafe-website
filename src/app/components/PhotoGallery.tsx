import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  {
    src: "/src/assets/moment-1-chair.jpg",
    alt: "Wooden chair at 202 Café"
  },
  {
    src: "/src/assets/moment-2-coffee-machine.jpg",
    alt: "Coffee machine at 202 Café"
  },
  {
    src: "/src/assets/moment-3-coffee-beans.jpg",
    alt: "Coffee beans at 202 Café"
  },
  {
    src: "/src/assets/moment-4-latte-art.jpg",
    alt: "Latte art at 202 Café"
  },
  {
    src: "/src/assets/moment-5-pastries.jpg",
    alt: "Fresh pastries at 202 Café"
  }
];

export function PhotoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        }
      }
    ]
  };

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
            Moments at 202
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--dark-brown)' }}>
            A visual journey through our café — the coffee, the people, the vibes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <style>{`
            .slick-slider {
              margin: 0 -20px;
            }
            .slick-slide {
              padding: 0 20px;
            }
            .slick-dots {
              bottom: -40px;
            }
            .slick-dots li button:before {
              color: var(--coffee-brown);
              opacity: 0.5;
            }
            .slick-dots li.slick-active button:before {
              color: var(--coffee-brown);
              opacity: 1;
            }
            .slick-prev, .slick-next {
              z-index: 10;
              width: 40px;
              height: 40px;
              background-color: var(--coffee-brown);
              border-radius: 50%;
            }
            .slick-prev:before, .slick-next:before {
              color: white;
              font-size: 16px;
            }
          `}</style>
          <Slider {...sliderSettings}>
            {galleryImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}