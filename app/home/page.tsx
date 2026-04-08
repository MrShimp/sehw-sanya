"use client";

import Link from "next/link";
import { useI18n } from "../i18n/context";
import Footer from "../components/Footer";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="snap-main">
      {/* ===== Hero Section — Full-screen background image ===== */}
      <section className="snap-section hero-fullscreen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-fullscreen-bg" src="/image/main-1.jpg" alt="Sanare Sanya wellness retreat" />
        <div className="hero-fullscreen-overlay" />
        <div className="hero-fullscreen-content">
          <h1 className="hero-fullscreen-headline">
            {t("home.hero.headlineItalic")}
          </h1>
          <p className="hero-fullscreen-desc">{t("home.hero.description")}</p>
          <Link href="/questionnaire" className="btn-pill hero-fullscreen-cta">
            {t("home.hero.cta")}
          </Link>
        </div>
      </section>

      {/* ===== Core Services Section ===== */}
      <section className="snap-section products-snap-panel">
        <div className="products-snap-inner">
          {/* Left: category label + dramatic headline */}
          <div className="products-overview-left">
            <span className="overline">{t("home.products.overline")}</span>
            <h2 className="products-overview-headline">
              {t("home.products.headline")}
              {t("home.products.headlineItalic") && (
                <em className="products-overview-headline-italic">
                  <span className="products-headline-highlight">{t("home.products.headlineItalic")}</span>
                </em>
              )}
            </h2>
          </div>

          {/* Center: editorial text block */}
          <div className="products-overview-center">
            <div className="products-overview-block">
              <h3 className="products-overview-subtitle">{t("home.products.overview.block1Title")}</h3>
              <p className="products-overview-body">{t("home.products.overview.block1Body")}</p>
            </div>
          </div>

          {/* Right: single elegant image */}
        </div>
      </section>

      {/* ===== Wellness Pillars Section (Physical / Mind / Soul) ===== */}
      <section className="snap-section home-wellness-pillars-section">
        <div className="home-wellness-pillars-container">
          <div className="exp-centered-intro">
            <span className="overline">{t("home.pillars.overline")}</span>
            <h2 className="exp-headline">
              {t("home.pillars.headline")}
              <em className="exp-headline-italic">{t("home.pillars.headlineItalic")}</em>
            </h2>
            <p className="exp-intro-text">{t("home.pillars.description")}</p>
          </div>

          <div className="exp-wellness-pillars">
            <div className="exp-wellness-pillar">
              <div className="exp-wellness-pillar-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t("home.pillars.physical.image")} alt={t("home.pillars.physical.title")} />
              </div>
              <h3 className="exp-wellness-pillar-title">{t("home.pillars.physical.title")}</h3>
              <p className="exp-wellness-pillar-desc">{t("home.pillars.physical.description")}</p>
            </div>
            <div className="exp-wellness-pillar">
              <div className="exp-wellness-pillar-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t("home.pillars.mind.image")} alt={t("home.pillars.mind.title")} />
              </div>
              <h3 className="exp-wellness-pillar-title">{t("home.pillars.mind.title")}</h3>
              <p className="exp-wellness-pillar-desc">{t("home.pillars.mind.description")}</p>
            </div>
            <div className="exp-wellness-pillar">
              <div className="exp-wellness-pillar-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t("home.pillars.soul.image")} alt={t("home.pillars.soul.title")} />
              </div>
              <h3 className="exp-wellness-pillar-title">{t("home.pillars.soul.title")}</h3>
              <p className="exp-wellness-pillar-desc">{t("home.pillars.soul.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer (inside snap container) ===== */}
      <section className="snap-section snap-section-footer">
        <Footer />
      </section>
    </main>
  );
}
