"use client";

import Link from "next/link";
import { useI18n } from "../i18n/context";

export default function FloatingCTA() {
  const { t } = useI18n();

  return (
    <Link href="/questionnaire" className="floating-cta">
      {t("floatingCta.label")}
    </Link>
  );
}
