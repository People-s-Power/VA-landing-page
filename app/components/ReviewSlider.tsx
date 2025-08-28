import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Review {
  name: string;
  image: string;
  role: string;
  review: string;
  stars: number;
}

const reviews: Review[] = [
  {
    name: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "CEO, Acme Corp",
    review: "ExpertHub VA has transformed my workflow. Highly recommended!",
    stars: 5,
  },
  {
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Founder, StartupX",
    review: "Efficient, reliable, and professional. My business runs smoother than ever.",
    stars: 5,
  },
  {
    name: "Emily Chen",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "COO, TechFlow",
    review: "The best virtual assistant service I've used. Great support team!",
    stars: 4,
  },
  {
    name: "Carlos Ruiz",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    role: "Manager, BizOps",
    review: "ExpertHub VA is a game changer for remote teams.",
    stars: 5,
  },
];

const StarRating = ({ stars }: { stars: number }) => (
  <div className="flex gap-1 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
      </svg>
    ))}
  </div>
);

const ReviewSlider: React.FC = () => (
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
    loop={true}
    autoplay={{ delay: 4000 }}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="w-full"
  >
    {reviews.map((r, idx) => (
      <SwiperSlide key={idx}>
        <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center max-w-xl mx-auto h-full min-h-[340px]">
          <StarRating stars={r.stars} />
          <p className="text-lg text-gray-700 mb-6 text-center flex-1">“{r.review}”</p>
          <div className="flex items-center gap-4">
            <img src={r.image} alt={r.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
            <div>
              <div className="font-bold text-gray-800">{r.name}</div>
              <div className="text-sm text-gray-500">{r.role}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ReviewSlider;
