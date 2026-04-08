"use client";

import Link from "next/link";
import { useI18n } from "../../i18n/context";

export default function JourneyPage() {
  const { t } = useI18n();

  return (
    <main className="experience-page">
      {/* Part 1: Hero — Title & Description */}
      <section className="exp-section exp-section-parchment">
        <div className="exp-container">
          <div className="exp-centered-intro">
            <span className="overline">{t("experience.journey.overline")}</span>
            <h2 className="exp-headline" style={{ fontStyle: "italic" }}>
              {t("experience.journey.headline")}
              <em className="exp-headline-italic">{t("experience.journey.headlineItalic")}</em>
            </h2>
            <p className="exp-intro-text">{t("experience.journey.description")}</p>
          </div>
        </div>
      </section>

      {/* Part 2: Hotel Partners — Logo Only Grid */}
      <section className="exp-section exp-section-parchment" style={{ paddingTop: 0 }}>
        <div className="exp-container">
          <div className="jny-stay-intro">
            <h3 className="jny-stay-title">{t("experience.journey.stayTitle")}</h3>
            <p className="jny-stay-desc">{t("experience.journey.stayDescription")}</p>
          </div>
          <div className="jny-hotel-logos-grid">
            {[0, 1, 2, 3, 4].map((i) => {
              const logo = t(`experience.journey.stays.${i}.logo`);
              const name = t(`experience.journey.stays.${i}.name`);
              if (!name || name.includes("stays.")) return null;
              return (
                <div key={i} className="jny-hotel-logo-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="jny-hotel-logo-img"
                    src={logo}
                    alt={name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part 3: Activities — Title + text left, activity cards right */}
      <section className="exp-section exp-section-parchment">
        <div className="exp-container">
          <div className="jny-activities-section">
            <div className="jny-activities-left">
              <h3 className="jny-activities-title">{t("experience.journey.activitiesTitle")}</h3>
              <p className="jny-activities-desc">{t("experience.journey.activitiesDescription")}</p>
            </div>
            <div className="jny-activities-right">
              {[0, 1, 2].map((i) => (
                <div key={i} className="jny-activity-card">
                  <div className="jny-activity-card-image img-hover">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t(`experience.journey.activities.${i}.image`) || "https://via.placeholder.com/400x520"}
                      alt={t(`experience.journey.activities.${i}.name`)}
                    />
                  </div>
                  <h4 className="jny-activity-card-name">{t(`experience.journey.activities.${i}.name`)}</h4>
                  <p className="jny-activity-card-desc">{t(`experience.journey.activities.${i}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Destinations — Alternating text/image rows */}
      <section className="exp-section exp-section-cream">
        <div className="exp-container">
          <div className="exp-centered-intro">
            <span className="overline">{t("experience.journey.destinationsOverline")}</span>
          </div>

          {[0, 1, 2].map((i) => (
            <div key={i} className={`exp-partner-row ${i % 2 === 1 ? "exp-partner-row-reverse" : ""}`}>
              <div className="exp-partner-row-text">
                <h3 className="exp-partner-row-title">{t(`experience.journey.destinations.${i}.name`)}</h3>
                <p className="exp-partner-row-desc">{t(`experience.journey.destinations.${i}.description`)}</p>
                <Link href="/questionnaire" className="exp-event-card-link" style={{ marginTop: "1.25rem" }}>
                  {t("home.hero.cta")}
                </Link>
              </div>
              <div className="exp-partner-row-image img-hover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t(`experience.journey.destinations.${i}.image`) || "https://via.placeholder.com/800x520"}
                  alt={t(`experience.journey.destinations.${i}.name`)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
