import React from "react";
import HeaderSection4FramerComponent from "../../framer/header-section-4.jsx";
import HomeButtonFramerComponent from "../framer/home-button";

import ContactSectionFramerComponent from "../framer/contact-section";
import ContactFooterDesktopFramerComponent from "../framer/contact-footer-desktop";
import ContactFooterMobileFramerComponent from "../../framer/contact-footer-mobile.jsx";
import ContactBookYourDentalDesktopFramerComponent from "../framer/contact-book-your-dental-desktop";

export default function ContactPage({
  isDesktop,
}: {
  isDesktop: boolean | null;
}) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white">
      {/* 🧭 Header + Home Button */}
      <div
        className={`relative w-full flex items-center ${
          isDesktop ? "justify-end pr-12" : "justify-center"
        }`}
      >
        {/* Home button — same placement as Home */}
        <div
          className={`absolute z-[100] ${
            isDesktop ? "left-8 top-[20px]" : "left-2 top-[10px]"
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

      {/* 🧩 Contact Page Layouts */}
      {isDesktop ? (
        <>
          <div className="mt-32" />
          <ContactBookYourDentalDesktopFramerComponent.Responsive />
          <ContactFooterDesktopFramerComponent.Responsive />
        </>
      ) : (
        <>
          <ContactSectionFramerComponent.Responsive />
          <ContactFooterMobileFramerComponent.Responsive />
        </>
      )}
    </div>
  );
}