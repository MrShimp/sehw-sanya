"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "../i18n/context";

const PRIMARY_LINKS = [
  { labelKey: "nav.home", href: "/home" },
  {
    labelKey: "nav.experience",
    href: "/experience/wellness",
    subLinks: [
      { labelKey: "nav.experienceWellness", href: "/experience/wellness" },
      { labelKey: "nav.experienceJourney", href: "/experience/journey" },
    ],
  },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.questionnaire", href: "/questionnaire" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedKey(null);
  };

  const LANG_LABELS: Record<string, string> = { zh: "中文", en: "English", ru: "Русский", vi: "Tiếng Việt", th: "ภาษาไทย" };
  const LANG_ORDER = ["zh", "en", "ru", "vi", "th"] as const;

  return (
    <>
      {/* ===== Collapsed Bar ===== */}
      <nav role="navigation" className="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Left: Menu + Search */}
          <div className="navbar-left">
            <button
              className="navbar-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars" />
              <span className="navbar-menu-label">Menu</span>
            </button>
          </div>

          {/* Center: Logo */}
          <Link href="/home" className="navbar-brand">
            森纳 SANARE
          </Link>

          {/* Right: Reserve CTA */}
          <div className="navbar-right">
            <Link href="/questionnaire" className="navbar-reserve-btn">
              {language === "zh" ? "預約諮詢" : "Reserve"}
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== Side Panel Menu (45%) + Backdrop (55%) ===== */}
      {menuOpen && (
        <div className="nav-overlay-wrapper">
          {/* Clickable backdrop */}
          <div className="nav-overlay-backdrop" onClick={closeMenu} aria-hidden="true" />

          {/* Menu panel */}
          <div className="nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
            {/* Overlay header */}
            <div className="nav-overlay-header">
              <Link href="/home" className="navbar-brand" onClick={closeMenu}>
                森纳 SANARE
              </Link>
              <button className="nav-overlay-close" onClick={closeMenu} aria-label="Close menu">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            {/* Overlay body */}
            <div className="nav-overlay-body">
              {/* Primary nav */}
              <div className="nav-overlay-left">
                <ul className="nav-overlay-links">
                  {PRIMARY_LINKS.map((link) => (
                    <li key={link.labelKey} className="nav-overlay-item">
                      {link.subLinks ? (
                        <button
                          className={`nav-overlay-link ${expandedKey === link.labelKey ? "nav-overlay-link-active" : ""}`}
                          onClick={() => setExpandedKey(expandedKey === link.labelKey ? null : link.labelKey)}
                          aria-expanded={expandedKey === link.labelKey}
                        >
                          {t(link.labelKey)}
                          <i className={`fa-solid fa-chevron-right nav-overlay-arrow ${expandedKey === link.labelKey ? "nav-overlay-arrow-open" : ""}`} />
                        </button>
                      ) : (
                        <Link href={link.href} className="nav-overlay-link" onClick={closeMenu}>
                          {t(link.labelKey)}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column: sublinks for selected item */}
              <div className="nav-overlay-right-col">
                {PRIMARY_LINKS.map((link) =>
                  link.subLinks && expandedKey === link.labelKey ? (
                    <ul key={link.labelKey} className="nav-overlay-right-sublinks">
                      {link.subLinks.map((sub) => (
                        <li key={sub.labelKey}>
                          <Link href={sub.href} className="nav-overlay-right-sublink" onClick={closeMenu}>
                            {t(sub.labelKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null
                )}
              </div>
            </div>

            {/* Language selector */}
            <div className="nav-overlay-lang-section">
              <div className="nav-overlay-lang-box">
                <span className="nav-overlay-lang-label">Language</span>
                {LANG_ORDER.map((l) => (
                  <button key={l} className="nav-overlay-lang-option" onClick={() => { setLanguage(l); }}>
                    {LANG_LABELS[l]} {language === l && <i className="fa-solid fa-check" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
