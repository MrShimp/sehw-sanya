"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../i18n/context";

const SUB_NAV_ITEMS = [
  { id: "wellness", href: "/experience/wellness", labelKey: "experience.subnav.wellness" },
  { id: "journey", href: "/experience/journey", labelKey: "experience.subnav.journey" },
];

export default function ExperienceSubnav() {
  const { t } = useI18n();
  const pathname = usePathname();

  return (
    <nav className="exp-subnav" aria-label="Experience sections">
      <div className="exp-subnav-inner">
        {SUB_NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`exp-subnav-item ${pathname === item.href ? "exp-subnav-item-active" : ""}`}
          >
            {t(item.labelKey)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
