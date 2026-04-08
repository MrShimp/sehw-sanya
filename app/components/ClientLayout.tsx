"use client";

import { usePathname } from "next/navigation";
import I18nProvider from "../i18n/provider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ExperienceSubnav from "./ExperienceSubnav";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const isHome = pathname === "/home";
  const isExperience = pathname.startsWith("/experience");

  if (isLanding) {
    return (
      <I18nProvider>
        {children}
      </I18nProvider>
    );
  }

  if (isHome) {
    return (
      <I18nProvider>
        <Navbar />
        {children}

      </I18nProvider>
    );
  }

  if (isExperience) {
    return (
      <I18nProvider>
        <Navbar />
        <ExperienceSubnav />
        {children}
        <Footer />

      </I18nProvider>
    );
  }

  return (
    <I18nProvider>
      <Navbar />
      {children}
      <Footer />
    </I18nProvider>
  );
}
