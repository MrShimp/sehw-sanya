"use client";

import Link from "next/link";
import { useI18n } from "../../i18n/context";
import { translations } from "../../i18n/translations";

export default function EscortPage() {
  const { language } = useI18n();
  const data = translations[language];
  const escort = data.products.escort;

  const audienceIcons = [
    "fa-solid fa-plane-departure",
    "fa-solid fa-user-doctor",
    "fa-solid fa-language",
    "fa-solid fa-people-arrows",
    "fa-solid fa-star",
  ];

  const stepImages = [
    { src: "https://via.placeholder.com/500x300", alt: "Medical consultant reviewing patient records for specialist matching" },
    { src: "https://via.placeholder.com/500x300", alt: "Coordinating specialist appointment scheduling at top hospital" },
    { src: "https://via.placeholder.com/500x300", alt: "Comfortable transportation and accommodation arrangements in Sanya" },
    { src: "https://via.placeholder.com/500x300", alt: "Professional escort accompanying patient during hospital consultation" },
    { src: "https://via.placeholder.com/500x300", alt: "Organizing medical records and follow-up care plan" },
  ];

  return (
    <main>
      <div className="product-detail">
        <div className="product-detail-container">
          {/* ===== Product Introduction — Full-Width Hero Image ===== */}
          <section className="escort-layout-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://via.placeholder.com/1920x800"
              alt="Professional medical escort accompanying patient through hospital visit"
            />
            <div className="escort-layout-hero-overlay" />
            <div className="escort-layout-hero-content">
              <span className="overline">{data.nav.productsEscort}</span>
              <h1 className="escort-layout-hero-title">
                {escort.title}
                <br />
                <em>{escort.intro}</em>
              </h1>
              <p className="escort-layout-hero-desc">{escort.introDetail}</p>
            </div>
          </section>

          {/* ===== Centered Lead Text ===== */}
          <div className="escort-layout-lead">
            <p className="escort-layout-lead-text">
              {escort.introDetail}
            </p>
          </div>

          {/* ===== Service Flow — Zigzag Alternating Image-Text ===== */}
          <section className="escort-layout-flow">
            <h2 className="product-detail-section-title">{escort.serviceFlow.title}</h2>
            <div className="escort-layout-zigzag">
              {escort.serviceFlow.steps.map((step: string, index: number) => (
                <div key={index} className="escort-layout-zigzag-step">
                  <div className="escort-layout-zigzag-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={stepImages[index]?.src || "https://via.placeholder.com/500x300"}
                      alt={stepImages[index]?.alt || `Service step ${index + 1}`}
                    />
                  </div>
                  <div>
                    <div className="escort-layout-zigzag-number">{String(index + 1).padStart(2, "0")}</div>
                    <p className="escort-layout-zigzag-text">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Target Audience — Full-Width Cream + Icon Card Grid ===== */}
          <section className="escort-layout-audience">
            <div className="escort-layout-audience-inner">
              <h2 className="product-detail-section-title">{escort.targetAudience.title}</h2>
              <div className="escort-layout-audience-grid">
                {escort.targetAudience.items.map((item: string, index: number) => (
                  <div key={index} className="escort-layout-audience-card">
                    <div className="escort-layout-audience-icon">
                      <i className={audienceIcons[index] || "fa-solid fa-circle-check"} />
                    </div>
                    <p className="escort-layout-audience-card-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Client Cases — Alternating + Green Border Quote ===== */}
          <section className="escort-layout-cases">
            <h2 className="product-detail-section-title">{escort.cases.title}</h2>
            <div className="escort-layout-case">
              <div className="escort-layout-case-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://via.placeholder.com/500x300"
                  alt="Overseas Chinese patient receiving guided specialist medical consultation"
                />
              </div>
              <div className="escort-layout-case-quote">
                <p className="escort-layout-case-narrative">{escort.cases.case1.narrative}</p>
                <span className="escort-layout-case-type">{escort.cases.case1.serviceType}</span>
              </div>
            </div>
          </section>

          {/* ===== Consultation CTA ===== */}
          <div className="product-detail-cta">
            <Link href="/questionnaire" className="btn-pill">
              {escort.cta}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
