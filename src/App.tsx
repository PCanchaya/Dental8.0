import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./framer/styles.css";

// Shared components
import HeaderSection4FramerComponent from "../framer/header-section-4.jsx";
import HomeButtonFramerComponent from "./framer/home-button";

// 📱 Mobile components
import HeroWithCarouselMobileFramerComponent from "./framer/hero-with-carousel-mobile";
import VideoCarouselMobileFramerComponent from "./framer/video-carousel-mobile";
import BeyondDentistrySectionMobileFramerComponent from "./framer/beyond-dentistry-section-mobile";
import ReviewsMobileFramerComponent from "./framer/reviews-mobile";
import FeaturedMobileFramerComponent from "./framer/featured-mobile";
import DoctorsMobileFramerComponent from "./framer/doctors-mobile";
import BookYourDentalSectionMobileFramerComponent from "./framer/book-your-dental-section-mobile";
import LatestBlogMobileFramerComponent from "./framer/latest-blog-mobile";
import FooterFramerComponent from "./framer/footer";
import FooterLogoFramerComponent from "../framer/footer-logo.jsx";

// 💻 Desktop components
import HeroWithCarouselsDesktopFramerComponent from "./framer/hero-with-carousels-desktop";
import VideoCarouselDesktopFramerComponent from "./framer/video-carousel-desktop";
import BeyondDentistryDesktopFramerComponent from "./framer/beyond-dentistry-desktop";
import ReviewSectionDesktopFramerComponent from "./framer/review-section-desktop";
import FeaturedInDesktopFramerComponent from "./framer/featured-in-desktop";
import YourSmileSectionDesktopFramerComponent from "./framer/your-smile-section-desktop";
import BookYourDentalDesktopFramerComponent from "./framer/book-your-dental-desktop";
import LatestFromTheBlogFramerComponent from "./framer/latest-from-the-blog";
import FooterDesktopFramerComponent from "./framer/footer-desktop";
import ContactPage from "./pages/Contact";

export default function App() {
  const [isDesktop, setIsDesktop] = useState<null | boolean>(null);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1020);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isDesktop === null) {
    return (
      <div className="flex flex-col items-center bg-white">
        <HeaderSection4FramerComponent.Responsive />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage isDesktop={isDesktop} />} />
      <Route path="/contact" element={<ContactPage isDesktop={isDesktop} />} />
    </Routes>
  );
}

function HomePage({ isDesktop }: { isDesktop: boolean | null }) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white">
      {/* 🧭 Header + Home Button */}
      <div
        className={`relative w-full flex items-center ${
          isDesktop ? "justify-end pr-12" : "justify-center"
        }`}
      >
        {/* Home button — higher on mobile */}
        <div
          className={`absolute z-[100] ${
            isDesktop
              ? "left-8 top-[20px]"
              : "left-2 top-[10px]"
          }`}
        >
          <HomeButtonFramerComponent.Responsive />
        </div>

        {/* Header (menu bar) */}
        <div
          className={`${
            isDesktop ? "absolute top-0 right-12 z-[50]" : "relative z-[5]"
          }`}
        >
          <HeaderSection4FramerComponent.Responsive />
        </div>
      </div>

      {/* 🧩 Layouts */}
      {isDesktop ? (
        <>
          <div className="mt-32" />
          <HeroWithCarouselsDesktopFramerComponent.Responsive />
          <VideoCarouselDesktopFramerComponent.Responsive />
          <BeyondDentistryDesktopFramerComponent.Responsive />
          <ReviewSectionDesktopFramerComponent.Responsive />
          <FeaturedInDesktopFramerComponent.Responsive />
          <YourSmileSectionDesktopFramerComponent.Responsive />
          <BookYourDentalDesktopFramerComponent.Responsive />
          <LatestFromTheBlogFramerComponent.Responsive />
          <FooterDesktopFramerComponent.Responsive />
        </>
      ) : (
        <>
          <HeroWithCarouselMobileFramerComponent.Responsive />
          <VideoCarouselMobileFramerComponent.Responsive />
          <BeyondDentistrySectionMobileFramerComponent.Responsive />
          <ReviewsMobileFramerComponent.Responsive />
          <FeaturedMobileFramerComponent.Responsive />
          <DoctorsMobileFramerComponent.Responsive />
          <BookYourDentalSectionMobileFramerComponent.Responsive />
          <LatestBlogMobileFramerComponent.Responsive />
          <FooterFramerComponent.Responsive />

          {/* 👇 Remove white strip above footer logo on mobile */}
          <div className="-mt-4 sm:mt-0">
            <FooterLogoFramerComponent.Responsive />
          </div>
        </>
      )}
    </div>
  );
}
