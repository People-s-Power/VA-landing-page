import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { reviews, type Review } from "~/data/reviews";

/** Fallback avatar for reviewers who don't have a photo yet. */
const Initials: React.FC<{ name: string }> = ({ name }) => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      className="w-16 h-16 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center shrink-0"
      aria-hidden="true"
    >
      <span className="font-bold text-gray-700">{initials}</span>
    </div>
  );
};

const StarRating = ({ stars }: { stars: number }) => (
  <div className="flex gap-1 mb-2" aria-label={`${stars} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
      </svg>
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center max-w-xl mx-auto h-full">
    <StarRating stars={review.stars} />
    <p className="text-lg text-gray-700 mb-8 text-center">
      &ldquo;{review.review}&rdquo;
    </p>
    <div className="flex items-center gap-4 mt-auto">
      {review.image ? (
        <img
          src={review.image}
          alt={review.name}
          loading="lazy"
          className="w-16 h-16 rounded-full object-cover border-2 border-primary shrink-0"
        />
      ) : (
        <Initials name={review.name} />
      )}
      <div>
        <div className="font-bold text-gray-800">{review.name}</div>
        <div className="text-sm text-gray-500">
          {review.role}
          {review.org ? `, ${review.org}` : ""}
        </div>
      </div>
    </div>
  </div>
);

const ReviewSlider: React.FC = () => {
  // Nothing to show until real reviews are supplied (see app/data/reviews.ts).
  if (reviews.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={reviews.length > 3}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // Autoplay was configured below but never registered, so the carousel
        // never advanced. Both modules have to be listed here to take effect.
        modules={[Autoplay, Pagination]}
        className="w-full pb-12"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={`${review.name}-${idx}`} className="h-auto">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ReviewSlider;
