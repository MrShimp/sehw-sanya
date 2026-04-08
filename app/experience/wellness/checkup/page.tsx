"use client";

import Link from "next/link";
import { useI18n } from "../../../i18n/context";
import { translations } from "../../../i18n/translations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCheckupData(lang: string) {
  const data = translations[lang] as any;
  return data?.checkupDetail ?? null;
}

interface TierSection {
  color: string;
  label: string;
  categories: { title: string; items: string[] }[];
}

export default function CheckupDetailPage() {
  const { language, t } = useI18n();
  const detail = getCheckupData(language);
  if (!detail) return null;

  const tiers: TierSection[] = detail.tiers;
  const tierColors = ["var(--color-sage)", "#B8963E", "#8B4513"];

  return (
    <main className="experience-page">
      {/* Hero */}
      <section className="ckd-hero">
        <div className="ckd-hero-inner">
          <span className="overline">{detail.overline}</span>
          <h1 className="ckd-hero-title">{detail.title}</h1>
          <p className="ckd-hero-desc">{detail.description}</p>
          <div className="ckd-hero-tiers-nav">
            {tiers.map((tier, i) => (
              <a key={i} href={`#tier-${i}`} className="ckd-tier-nav-pill" style={{ borderColor: tierColors[i] || tier.color }}>
                {tier.label.split("（")[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Sections */}
      {tiers.map((tier, ti) => (
        <section
          key={ti}
          id={`tier-${ti}`}
          className={`ckd-tier-section ${ti % 2 === 0 ? "ckd-tier-cream" : "ckd-tier-parchment"}`}
        >
          <div className="ckd-tier-container">
            {/* Tier Header */}
            <div className="ckd-tier-head">
              <span className="ckd-tier-dot" style={{ background: tierColors[ti] || tier.color }} />
              <h2 className="ckd-tier-label">{tier.label}</h2>
            </div>

            {/* Categories */}
            <div className="ckd-categories">
              {tier.categories.map((cat, ci) => (
                <div key={ci} className="ckd-category">
                  <h3 className="ckd-cat-title">{cat.title}</h3>
                  <div className="ckd-items-grid">
                    {cat.items.map((item, ii) => (
                      <div key={ii} className="ckd-item">
                        <span className="ckd-item-dot" style={{ background: tierColors[ti] || tier.color }} />
                        <span className="ckd-item-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="ckd-cta-section">
        <div className="ckd-cta-inner">
          <h2 className="ckd-cta-title">{t("experience.wellness.tijian.title")}</h2>
          <p className="ckd-cta-price">{t("experience.wellness.tijian.price")}</p>
          <Link href="/questionnaire" className="btn-pill ckd-cta-btn">
            {t("home.hero.cta")}
          </Link>
        </div>
      </section>
    </main>
  );
}
