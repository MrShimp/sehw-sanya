"use client";

import { useI18n } from "../i18n/context";
import QuestionnaireForm from "../components/QuestionnaireForm";

export default function QuestionnairePage() {
  const { t } = useI18n();

  return (
    <section className="questionnaire-page">
      <div className="questionnaire-container">
        <div className="questionnaire-header">
          <h1 className="questionnaire-title">{t("questionnaire.title")}</h1>
          <p className="questionnaire-subtitle">{t("questionnaire.subtitle")}</p>
        </div>
        <QuestionnaireForm />
      </div>
    </section>
  );
}
