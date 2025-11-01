import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./WhatsNew.css";

const slides = [
  { id: 1, img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80" },
  { id: 2, img: "https://images.unsplash.com/photo-1588776814546-2e23e7b3f86e?w=1920&q=80" },
  { id: 3, img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80" },
  { id: 4, img: "https://images.unsplash.com/photo-1560264280-6f43801a9c17?w=1920&q=80" },
  { id: 5, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80" },
  { id: 6, img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80" },
  { id: 7, img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=1920&q=80" },
  { id: 8, img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1920&q=80" },
  { id: 9, img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1920&q=80" },
  { id: 10, img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80" },
  { id: 11, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80" },
  { id: 12, img: "https://images.unsplash.com/photo-1473471722191-19e49bb06c5d?w=1920&q=80" },
  { id: 13, img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1920&q=80" },
  { id: 14, img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80" },
  { id: 15, img: "https://images.unsplash.com/photo-1600267175164-3d55b9a1e5dc?w=1920&q=80" },
];

const WhatsNew = () => {
  return (
    <div className="wn-page">
      <section className="wn-hero glassmorphic-card">
        <h1 className="wn-title">What’s New at Rekhta</h1>
        <p className="wn-subtitle">
          Stay updated with the latest happenings, achievements, and announcements at REKHTA Academy.
          Explore our journey of excellence and transformation!
        </p>
      </section>

      <section className="wn-carousel glassmorphic-card">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="wn-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="wn-slide">
                <img src={slide.img} alt={`Slide ${slide.id}`} className="wn-img" />
                <div className="wn-overlay glassmorphic-overlay">
                  <h2>Campus Life Highlights</h2>
                  <p>Discover what makes REKHTA a place of growth, learning, and success.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default WhatsNew;
