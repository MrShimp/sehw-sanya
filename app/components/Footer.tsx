"use client";

import Link from "next/link";
import { useI18n } from "../i18n/context";

const FOOTER_NAV = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.experience", href: "/experience/wellness" },
  { labelKey: "nav.productsCheckup", href: "/products/checkup" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.questionnaire", href: "/questionnaire" },
];

const SOCIAL_LINKS = [
  { icon: "fa-brands fa-weixin", label: "WeChat", href: "#" },
  { icon: "fa-brands fa-weibo", label: "Weibo", href: "#" },
  { icon: "fa-brands fa-instagram", label: "Instagram", href: "#" },
  { icon: "fa-brands fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fa-brands fa-x-twitter", label: "X", href: "#" },
  { icon: "fa-brands fa-youtube", label: "YouTube", href: "#" },
  { icon: "fa-brands fa-pinterest-p", label: "Pinterest", href: "#" },
  { icon: "fa-brands fa-whatsapp", label: "WhatsApp", href: "#" },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-brand-name">森纳 Sanare</div>
          <p className="footer-brand-desc">{t("footer.brandDescription")}</p>
        </div>

        {/* Navigation Column */}
        <div className="footer-nav">
          <h3 className="footer-heading">{t("footer.navTitle")}</h3>
          <ul className="footer-nav-list">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h3 className="footer-heading">{t("footer.contactTitle")}</h3>
          <p className="footer-contact-item">
            <i className="fa-solid fa-envelope" />
            {t("footer.contact.email")}
          </p>
          <p className="footer-contact-item">
            <i className="fa-solid fa-phone" />
            {t("footer.contact.phone")}
          </p>
        </div>
      </div>

      {/* Social Bar */}
      <div className="footer-social-bar">
        <div className="footer-social-bar-inner">
          <span className="footer-social-brand">森纳 Sanare</span>
          <div className="footer-social-links">
            <span className="footer-social-label">Follow us on:</span>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-social-icon"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
          <span className="footer-social-copyright">© 2026 Sanare Sanya</span>
        </div>
      </div>
    </footer>
  );
}
