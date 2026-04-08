"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "../../i18n/context";
import { translations } from "../../i18n/translations";

const EVENTS_PER_PAGE = 3;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getEventCount(lang: string): number {
  const data = translations[lang] as any;
  return data?.experience?.wellness?.events?.length ?? 0;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPartnerCount(lang: string): number {
  const data = translations[lang] as any;
  return data?.experience?.wellness?.wellnessPartners?.length ?? 0;
}

function EventsCarousel({ t, eventCount }: { t: (key: string) => string; eventCount: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = Math.ceil(eventCount / EVENTS_PER_PAGE);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const page = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(Math.min(page, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const goToPage = (page: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      <div className="retreat-cards" ref={containerRef}>
        {Array.from({ length: eventCount }, (_, i) => (
          <div key={i} className="retreat-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="card-image"
              src={t(`experience.wellness.events.${i}.image`) || "/image/wellness-event-1.jpg"}
              alt={t(`experience.wellness.events.${i}.title`)}
            />
            <div className="card-content">
              <p className="location-tag">{t(`experience.wellness.events.${i}.overline`)}</p>
              <h3 className="card-title">{t(`experience.wellness.events.${i}.title`)}</h3>
              <p className="card-desc">{t(`experience.wellness.events.${i}.description`)}</p>
              <span className="card-price">{t(`experience.wellness.events.${i}.price`)}</span>
              <Link href="/questionnaire" className="discover-btn">
                {t("home.hero.cta")}
              </Link>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination-dots">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pagination-dot ${activeIndex === i ? "pagination-dot-active" : ""}`}
              onClick={() => goToPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default function WellnessPage() {
  const { language, t } = useI18n();
  const eventCount = getEventCount(language);
  const partnerCount = getPartnerCount(language);

  return (
    <main className="experience-page">
      <section className="exp-section exp-section-parchment">
        <div className="exp-container">
          <div className="exp-centered-intro">
            <span className="overline">{t("experience.wellness.overline")}</span>
            <h2 className="exp-headline">
              {t("experience.wellness.headline")}
              <em className="exp-headline-italic">{t("experience.wellness.headlineItalic")}</em>
            </h2>
            <p className="exp-intro-text">{t("experience.wellness.description")}</p>
          </div>
        </div>
      </section>

      {/* Checkup (体检) — Standalone Feature Module */}
      <section className="exp-section exp-section-cream">
        <div className="exp-container">
          <div className="checkup-feature">
            <div className="checkup-feature-image img-hover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t("experience.wellness.tijian.image") || "/image/main-1.jpg"}
                alt={t("experience.wellness.tijian.title")}
              />
            </div>
            <div className="checkup-feature-content">
              <span className="overline">{t("experience.wellness.tijian.overline")}</span>
              <h2 className="checkup-feature-title">{t("experience.wellness.tijian.title")}</h2>
              <p className="checkup-feature-desc">{t("experience.wellness.tijian.description")}</p>
              <span className="checkup-feature-price">{t("experience.wellness.tijian.price")}</span>
              <Link href="/experience/wellness/checkup" className="discover-btn">
                Discover more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <section className="exp-section exp-section-parchment">
        <div className="exp-container">
          <div className="exp-centered-intro">
            <h2 className="exp-headline" style={{ fontStyle: "italic" }}>
              {t("experience.wellness.eventTitle")}
            </h2>
            <p className="exp-intro-text">{t("experience.wellness.eventDescription")}</p>
          </div>
          <EventsCarousel t={t} eventCount={eventCount} />
        </div>
      </section>

      {/* Wellness Partners */}
      <section className="exp-section exp-section-cream">
        <div className="exp-container">
          <div className="exp-partners-section">
            <div className="exp-centered-intro">
              <span className="overline">{t("experience.wellness.wellnessPartnersTitle")}</span>
              <p className="exp-intro-text">{t("experience.wellness.wellnessPartnersDescription")}</p>
            </div>
            {Array.from({ length: partnerCount }, (_, i) => (
              <div key={i} className={`exp-partner-row ${i % 2 === 1 ? "exp-partner-row-reverse" : ""}`}>
                <div className="exp-partner-row-text">
                  <h3 className="exp-partner-row-title">{t(`experience.wellness.wellnessPartners.${i}.title`)}</h3>
                  <p className="exp-partner-row-desc">{t(`experience.wellness.wellnessPartners.${i}.description`)}</p>
                </div>
                <div className="exp-partner-row-image img-hover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t(`experience.wellness.wellnessPartners.${i}.image`)} alt={t(`experience.wellness.wellnessPartners.${i}.title`)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
