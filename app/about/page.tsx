"use client";

import Link from "next/link";
import { useI18n } from "../i18n/context";
import { translations } from "../i18n/translations";

export default function AboutPage() {
  const { language, t } = useI18n();
  const data = translations[language];
  const about = data.about;

  const teamMembers = [
    {
      ...about.team.member1,
      image: "https://via.placeholder.com/300x300",
      altZh: "首席医疗顾问陈明远医生的职业照",
      altEn: "Professional portrait of Dr. Chen Mingyuan, Chief Medical Advisor",
    },
    {
      ...about.team.member2,
      image: "https://via.placeholder.com/300x300",
      altZh: "抗衰医美总监林雅琪医生的职业照",
      altEn: "Professional portrait of Dr. Lin Yaqi, Anti-aging Aesthetics Director",
    },
    {
      ...about.team.member3,
      image: "https://via.placeholder.com/300x300",
      altZh: "高端旅行顾问王海涛的职业照",
      altEn: "Professional portrait of Wang Haitao, Premium Travel Consultant",
    },
  ];

  return (
    <main>
      {/* ===== Brand Philosophy Section (moved from home) ===== */}
      <section className="philosophy">
        <div className="philosophy-container">
          <div className="philosophy-left">
            <span className="overline">{t("home.philosophy.overline")}</span>
            <h2 className="philosophy-headline">
              {t("home.philosophy.headline")}
              <em className="philosophy-headline-italic">{t("home.philosophy.headlineItalic")}</em>
            </h2>
          </div>
          <div className="philosophy-center">
            <p className="philosophy-body">{t("home.philosophy.body")}</p>
            <p className="philosophy-detail">{t("home.philosophy.detail")}</p>
          </div>
          <div className="philosophy-right img-hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://via.placeholder.com/500x600"
              alt={language === "zh"
                ? "一对一个性化健康咨询"
                : "One-on-one personalized health consultation"}
            />
          </div>
        </div>
      </section>

      {/* ===== Brand Story Section ===== */}
      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-text">
            <span className="overline">{about.story.overline}</span>
            <h1 className="about-story-headline">{about.story.headline}</h1>
            <p className="about-story-body">{about.story.body}</p>
            <p className="about-story-detail">{about.story.bodyDetail}</p>
          </div>
          <div className="about-story-image img-hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://via.placeholder.com/600x450"
              alt={language === "zh"
                ? "三亚自然风光与森纳品牌理念"
                : "Sanya natural scenery reflecting Sanare brand philosophy"}
            />
          </div>
        </div>
      </section>


      {/* ===== Service Advantages Section ===== */}
      <section className="about-advantages">
        <div className="about-advantages-container">
          <div className="about-advantages-header">
            <span className="overline">{about.advantages.overline}</span>
            <h2 className="about-advantages-headline">{about.advantages.headline}</h2>
          </div>
          <ul className="about-advantages-list">
            {(translations[language].about.advantages.items as string[]).map(
              (item: string, index: number) => (
                <li key={index} className="about-advantages-item">
                  <span className="about-advantages-icon">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* ===== Partner Resources Section ===== */}
      <section className="about-partners">
        <div className="about-partners-container">
          <div className="about-partners-header">
            <span className="overline">{about.partners.overline}</span>
            <h2 className="about-partners-headline">{about.partners.headline}</h2>
          </div>
          <div className="about-partners-grid">
            <div className="about-partners-card">
              <div className="about-partners-card-icon">
                <i className="fa-solid fa-hospital"></i>
              </div>
              <h3 className="about-partners-card-title">
                {language === "zh" ? "医疗机构" : "Medical Institutions"}
              </h3>
              <p className="about-partners-card-text">{about.partners.hospitals}</p>
            </div>
            <div className="about-partners-card">
              <div className="about-partners-card-icon">
                <i className="fa-solid fa-spa"></i>
              </div>
              <h3 className="about-partners-card-title">
                {language === "zh" ? "健康机构" : "Wellness Institutions"}
              </h3>
              <p className="about-partners-card-text">{about.partners.wellness}</p>
            </div>
            <div className="about-partners-card">
              <div className="about-partners-card-icon">
                <i className="fa-solid fa-hotel"></i>
              </div>
              <h3 className="about-partners-card-title">
                {language === "zh" ? "酒店资源" : "Hotel Partners"}
              </h3>
              <p className="about-partners-card-text">{about.partners.hotels}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
