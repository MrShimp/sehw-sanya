"use client";

import Link from "next/link";
import { useI18n } from "../../i18n/context";
import { translations } from "../../i18n/translations";

export default function AntiAgingPage() {
  const { language } = useI18n();
  const data = translations[language];
  const antiAging = data.products.antiAging;

  const collageImages = [
    { src: "https://via.placeholder.com/400x300", alt: "Luxury anti-aging facial treatment in serene spa setting" },
    { src: "https://via.placeholder.com/500x400", alt: "Advanced regenerative medicine technology for skin rejuvenation" },
    { src: "https://via.placeholder.com/400x350", alt: "Traditional Chinese medicine herbal preparation for wellness" },
    { src: "https://via.placeholder.com/350x280", alt: "Client relaxing during personalized anti-aging therapy session" },
    { src: "https://via.placeholder.com/400x320", alt: "Modern aesthetic clinic interior with warm natural lighting" },
    { src: "https://via.placeholder.com/380x300", alt: "Natural botanical ingredients used in holistic beauty treatments" },
    { src: "https://via.placeholder.com/420x310", alt: "Professional consultation for customized anti-aging program" },
  ];

  return (
    <main>
      <div className="product-detail">
        <div className="product-detail-container">
          {/* ===== Product Introduction — Centered + Scattered Collage ===== */}
          <section className="antiaging-layout-intro">
            <span className="overline">{data.nav.productsAntiAging}</span>
            <h1 className="antiaging-layout-title">
              {antiAging.title}
              <br />
              <em>{antiAging.intro}</em>
            </h1>
            <p className="antiaging-layout-intro-text">{antiAging.introDetail}</p>
            <Link href="/questionnaire" className="btn-pill btn-primary">
              {antiAging.cta}
            </Link>

            <div className="antiaging-layout-collage">
              {collageImages.map((img, i) => (
                <div key={i} className="antiaging-layout-collage-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </section>

          {/* ===== Service Flow — Rotated Cards on Cream Background ===== */}
          <section className="antiaging-layout-flow">
            <h2 className="product-detail-section-title">{antiAging.serviceFlow.title}</h2>
            <div className="antiaging-layout-flow-grid">
              {antiAging.serviceFlow.steps.map((step: string, index: number) => (
                <div key={index} className="antiaging-layout-flow-card">
                  <div className="antiaging-layout-flow-number">{String(index + 1).padStart(2, "0")}</div>
                  <p className="antiaging-layout-flow-text">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Target Audience — Centered Serif Lead ===== */}
          <section className="antiaging-layout-audience">
            <h2 className="product-detail-section-title">{antiAging.targetAudience.title}</h2>
            <p className="antiaging-layout-audience-lead">
              {antiAging.targetAudience.items.join(" · ")}
            </p>
          </section>

          {/* ===== Client Cases — Alternating Image-Text ===== */}
          <section className="antiaging-layout-cases">
            <h2 className="product-detail-section-title">{antiAging.cases.title}</h2>
            <div className="antiaging-layout-case">
              <div className="antiaging-layout-case-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://via.placeholder.com/500x350"
                  alt="Client enjoying a customized anti-aging wellness retreat"
                />
              </div>
              <div>
                <span className="product-detail-case-type">{antiAging.cases.case1.serviceType}</span>
                <p className="product-detail-case-narrative">{antiAging.cases.case1.narrative}</p>
              </div>
            </div>
          </section>

          {/* ===== Consultation CTA ===== */}
          <div className="product-detail-cta">
            <Link href="/questionnaire" className="btn-pill">
              {antiAging.cta}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
