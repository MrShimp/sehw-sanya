"use client";

import Link from "next/link";
import { useI18n } from "../../i18n/context";
import { translations } from "../../i18n/translations";

export default function RehabilitationPage() {
  const { language } = useI18n();
  const data = translations[language];
  const rehab = data.products.rehabilitation;

  return (
    <main>
      <div className="product-detail">
        <div className="product-detail-container">
          {/* ===== Product Introduction — Left Text + Right Organic Mosaic ===== */}
          <section className="rehab-layout-intro">
            <div>
              <span className="overline">{data.nav.productsRehabilitation}</span>
              <h1 className="rehab-layout-intro-title">
                {rehab.title}
                <br />
                <em>{rehab.intro}</em>
              </h1>
              <p className="rehab-layout-intro-text">{rehab.introDetail}</p>
            </div>
            <div className="rehab-layout-mosaic">
              <div className="rehab-layout-mosaic-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://via.placeholder.com/500x400" alt="Rehabilitation therapy in Sanya tropical healing environment" />
              </div>
              <div className="rehab-layout-mosaic-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://via.placeholder.com/300x200" alt="Professional physiotherapy session with modern equipment" />
              </div>
              <div className="rehab-layout-mosaic-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://via.placeholder.com/300x200" alt="Warm climate outdoor recovery garden in Sanya" />
              </div>
            </div>
          </section>

          {/* ===== Service Flow — Vertical Card Timeline ===== */}
          <section className="rehab-layout-flow">
            <h2 className="product-detail-section-title">{rehab.serviceFlow.title}</h2>
            <div className="rehab-layout-timeline">
              {rehab.serviceFlow.steps.map((step: string, index: number) => (
                <div key={index} className="rehab-layout-timeline-step">
                  <div className="rehab-layout-timeline-number">{index + 1}</div>
                  <div className="rehab-layout-timeline-card">
                    <p className="rehab-layout-timeline-text">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Target Audience — Cream Background, Left Title Right List ===== */}
          <section className="rehab-layout-audience">
            <div>
              <h2 className="product-detail-section-title" style={{ textAlign: "left" }}>{rehab.targetAudience.title}</h2>
              <p className="rehab-layout-audience-lead">{rehab.targetAudience.items[0]}</p>
            </div>
            <ul className="rehab-layout-audience-list">
              {rehab.targetAudience.items.slice(1).map((item: string, index: number) => (
                <li key={index} className="rehab-layout-audience-item">{item}</li>
              ))}
            </ul>
          </section>

          {/* ===== Client Cases — Full-Width Background Image + Overlay ===== */}
          <section>
            <h2 className="product-detail-section-title">{rehab.cases.title}</h2>
            <div className="rehab-layout-case">
              <div className="rehab-layout-case-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://via.placeholder.com/1280x400"
                  alt="Patient recovering with professional rehabilitation support in warm climate"
                />
              </div>
              <div className="rehab-layout-case-overlay" />
              <div className="rehab-layout-case-content">
                <span className="rehab-layout-case-type">{rehab.cases.case1.serviceType}</span>
                <p className="rehab-layout-case-quote">{rehab.cases.case1.narrative}</p>
              </div>
            </div>
          </section>

          {/* ===== Consultation CTA ===== */}
          <div className="product-detail-cta">
            <Link href="/questionnaire" className="btn-pill">
              {rehab.cta}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
