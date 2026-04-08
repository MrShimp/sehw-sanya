"use client";

import Link from "next/link";
import { useI18n } from "../../i18n/context";
import { translations } from "../../i18n/translations";

export default function CheckupPage() {
  const { language } = useI18n();
  const data = translations[language];
  const checkup = data.products.checkup;

  return (
    <main>
      <div className="product-detail">
        <div className="product-detail-container">
          {/* ===== Product Introduction — Asymmetric 3-Column ===== */}
          <section className="checkup-layout-intro">
            <div className="checkup-layout-intro-left">
              <span className="overline">{data.nav.productsCheckup}</span>
              <h1 className="checkup-layout-intro-title">
                {checkup.title}
                <br />
                <em>{checkup.intro}</em>
              </h1>
            </div>
            <div className="checkup-layout-intro-center">
              <p>{checkup.introDetail}</p>
            </div>
            <div className="checkup-layout-intro-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://via.placeholder.com/600x500"
                alt="Advanced precision medical screening equipment in a modern clinic"
              />
            </div>
          </section>

          {/* ===== Anchor Link Row ===== */}
          <nav className="checkup-layout-anchors" aria-label="Page sections">
            <a href="#service-flow">{checkup.serviceFlow.title}</a>
            <a href="#tiers">{checkup.tiers.title}</a>
            <a href="#cases">{checkup.cases.title}</a>
          </nav>

          {/* ===== Service Flow — Horizontal Timeline ===== */}
          <section id="service-flow" className="checkup-layout-flow">
            <h2 className="product-detail-section-title">{checkup.serviceFlow.title}</h2>
            <div className="checkup-layout-timeline">
              {checkup.serviceFlow.steps.map((step: string, index: number) => (
                <div key={index} className="checkup-layout-timeline-step">
                  <div className="checkup-layout-timeline-number">{String(index + 1).padStart(2, "0")}</div>
                  <p className="checkup-layout-timeline-text">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Target Audience — Left Lead + Right List ===== */}
          <section className="checkup-layout-audience">
            <div>
              <h2 className="product-detail-section-title" style={{ textAlign: "left" }}>{checkup.targetAudience.title}</h2>
              <p className="checkup-layout-audience-lead">{checkup.targetAudience.items[0]}</p>
            </div>
            <ul className="checkup-layout-audience-list">
              {checkup.targetAudience.items.slice(1).map((item: string, index: number) => (
                <li key={index} className="checkup-layout-audience-item">{item}</li>
              ))}
            </ul>
          </section>

          {/* ===== Checkup Package Tiers ===== */}
          <section id="tiers" className="product-detail-tiers">
            <h2 className="product-detail-section-title">{checkup.tiers.title}</h2>
            <div className="product-detail-tiers-grid">
              <div className="product-detail-tier-card">
                <h3 className="product-detail-tier-name">{checkup.tiers.basic.name}</h3>
                <ul className="product-detail-tier-items">
                  {checkup.tiers.basic.items.map((item: string, i: number) => (
                    <li key={i} className="product-detail-tier-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-detail-tier-card" style={{ border: "2px solid var(--color-sage)" }}>
                <h3 className="product-detail-tier-name">{checkup.tiers.premium.name}</h3>
                <ul className="product-detail-tier-items">
                  {checkup.tiers.premium.items.map((item: string, i: number) => (
                    <li key={i} className="product-detail-tier-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-detail-tier-card">
                <h3 className="product-detail-tier-name">{checkup.tiers.comprehensive.name}</h3>
                <ul className="product-detail-tier-items">
                  {checkup.tiers.comprehensive.items.map((item: string, i: number) => (
                    <li key={i} className="product-detail-tier-item">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ===== Client Cases — 1:2 Left Image Right Text ===== */}
          <section id="cases" className="product-detail-cases">
            <h2 className="product-detail-section-title">{checkup.cases.title}</h2>
            <div className="checkup-layout-case">
              <div className="checkup-layout-case-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Executive client reviewing precision health screening results with doctor"
                />
              </div>
              <div>
                <span className="product-detail-case-type">{checkup.cases.case1.serviceType}</span>
                <p className="product-detail-case-narrative">{checkup.cases.case1.narrative}</p>
              </div>
            </div>
          </section>

          {/* ===== Consultation CTA ===== */}
          <div className="product-detail-cta">
            <Link href="/questionnaire" className="btn-pill">
              {checkup.cta}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
