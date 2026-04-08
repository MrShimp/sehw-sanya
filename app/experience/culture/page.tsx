"use client";

import Link from "next/link";
import { useI18n } from "../../i18n/context";

export default function CulturePage() {
  const { t } = useI18n();

  return (
    <main className="experience-page">
      {/* Part 1: Centered Hero — Title + Subtitle + Description */}
      <section className="exp-section exp-section-parchment">
        <div className="exp-container">
          <div className="exp-centered-intro">
            <span className="overline">{t("experience.culture.overline")}</span>
            <h2 className="exp-headline" style={{ fontStyle: "italic" }}>
              {t("experience.culture.headline")}
            </h2>
            <p className="exp-intro-text" style={{ fontStyle: "italic", fontFamily: "var(--font-heading)" }}>
              {t("experience.culture.headlineItalic")}
            </p>
            <p className="exp-intro-text" style={{ marginTop: "1.5rem" }}>
              {t("experience.culture.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Part 2: Two offset photos + description */}
      <section className="exp-section exp-section-parchment" style={{ paddingTop: 0 }}>
        <div className="exp-container">
          <div className="clt-hero-collage">
            <div className="clt-hero-collage-img clt-hero-collage-img-1 img-hover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://via.placeholder.com/480x640" alt="Traditional Chinese medicine practitioner" />
            </div>
            <div className="clt-hero-collage-img clt-hero-collage-img-2 img-hover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://via.placeholder.com/560x700" alt="Ancient healing herbs and instruments" />
            </div>
          </div>
          <div className="clt-hero-description">
            <p>{t("experience.culture.heroDescription")}</p>
          </div>
        </div>
      </section>

      {/* Part 3: Cultural Retreats — 5 practice cards in grid */}
      <section className="exp-section exp-section-cream">
        <div className="exp-container">
          <div className="exp-centered-intro">
            <span className="overline">{t("experience.culture.retreatsOverline")}</span>
          </div>

          <div className="clt-practices-grid">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="clt-practice-card">
                <div className="clt-practice-card-image img-hover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://via.placeholder.com/480x640`} alt={t(`experience.culture.practices.${i}.title`)} />
                </div>
                <div className="clt-practice-card-content">
                  <span className="clt-practice-card-overline">{t(`experience.culture.practices.${i}.overline`)}</span>
                  <h3 className="clt-practice-card-title">{t(`experience.culture.practices.${i}.title`)}</h3>
                  <p className="clt-practice-card-desc">{t(`experience.culture.practices.${i}.description`)}</p>
                  <Link href="/questionnaire" className="exp-event-card-link">
                    {t("home.hero.cta")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
