"use client";

import { useState } from "react";
import { useI18n } from "../i18n/context";
import { translations } from "../i18n/translations";
import Modal from "./Modal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getOptions(lang: string, path: string): string[] {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let obj: any = translations[lang];
  for (const p of parts) obj = obj?.[p];
  return Array.isArray(obj) ? obj : [];
}

/* ---- Mini Calendar Component ---- */
function MiniCalendar({ selected, onSelect }: { selected: string; onSelect: (d: string) => void }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) { weeks.push(week); week = []; }
  }
  if (week.length > 0) { while (week.length < 7) week.push(null); weeks.push(week); }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const toStr = (d: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  return (
    <div className="cal">
      <div className="cal-header">
        <button type="button" className="cal-nav" onClick={prevMonth} aria-label="Previous month">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <span className="cal-month">{monthNames[month]} {year}</span>
        <button type="button" className="cal-nav" onClick={nextMonth} aria-label="Next month">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
      <div className="cal-grid">
        {dayHeaders.map((d) => <div key={d} className="cal-day-header">{d}</div>)}
        {weeks.flat().map((d, i) => {
          if (d === null) return <div key={`e${i}`} className="cal-cell cal-empty" />;
          const ds = toStr(d);
          const isPast = ds < todayStr;
          const isSelected = ds === selected;
          return (
            <button
              key={ds}
              type="button"
              className={`cal-cell ${isSelected ? "cal-selected" : ""} ${isPast ? "cal-past" : ""}`}
              onClick={() => !isPast && onSelect(ds)}
              disabled={isPast}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---- Form ---- */
interface FormData {
  name: string;
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
  medicalProject: string;
  specialNeeds: string;
}

const INITIAL: FormData = {
  name: "", phone: "", appointmentDate: "", appointmentTime: "", medicalProject: "", specialNeeds: "",
};

export default function QuestionnaireForm() {
  const { language, t } = useI18n();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (k in errors) setErrors((p) => { const n = { ...p }; delete n[k]; return n; });
  };

  const timeSlots = getOptions(language, "questionnaire.fields.appointmentTime.options");
  const projectOpts = getOptions(language, "questionnaire.fields.medicalProject.options");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = t("questionnaire.fields.name.error");
    if (!form.phone.trim()) errs.phone = t("questionnaire.fields.phone.error");
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setShowModal(true);
    setForm(INITIAL);
  };

  return (
    <>
      <form className="questionnaire-form q-two-col" onSubmit={handleSubmit} noValidate>
        {/* Left Column: Personal Info + Special Needs */}
        <div className="q-col-left">
          <h2 className="q-section-title">{t("questionnaire.sections.personal")}</h2>

          <div className="questionnaire-group">
            <label htmlFor="name">{t("questionnaire.fields.name.label")}</label>
            <input type="text" id="name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder={t("questionnaire.fields.name.placeholder")} />
            {errors.name && <span className="questionnaire-error">{errors.name}</span>}
          </div>

          <div className="questionnaire-group">
            <label htmlFor="phone">{t("questionnaire.fields.phone.label")}</label>
            <input type="tel" id="phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder={t("questionnaire.fields.phone.placeholder")} />
            {errors.phone && <span className="questionnaire-error">{errors.phone}</span>}
          </div>

          <div className="questionnaire-group">
            <label htmlFor="specialNeeds">{t("questionnaire.fields.specialNeeds.label")}</label>
            <textarea id="specialNeeds" value={form.specialNeeds} onChange={(e) => set("specialNeeds", e.target.value)} placeholder={t("questionnaire.fields.specialNeeds.placeholder")} rows={4} />
          </div>

          <button type="submit" className="btn-pill btn-primary questionnaire-submit">{t("questionnaire.submit")}</button>
        </div>

        {/* Right Column: Calendar */}
        <div className="q-col-right">
          <h2 className="q-section-title">{t("questionnaire.sections.appointment")}</h2>

          <div className="questionnaire-group">
            <label>{t("questionnaire.fields.appointmentDate.label")}</label>
            <MiniCalendar selected={form.appointmentDate} onSelect={(d) => set("appointmentDate", d)} />
          </div>
        </div>
      </form>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={t("questionnaire.modal.title")} message={t("questionnaire.modal.message")} />
    </>
  );
}
