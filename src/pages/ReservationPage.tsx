import React, {useEffect, useMemo, useState} from 'react';
import {
  AlertCircle,
  Calendar,
  Check,
  Copy,
  ExternalLink,
  Info,
  MessageCircle,
} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {BRANCHES} from '../data/restaurantData';
import {ReservationFormData} from '../types';

const TIME_SLOTS = ['13:30', '15:00', '18:30', '19:30', '20:30', '21:30', '22:30'];

const getTodayIso = (): string => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const ReservationPage: React.FC = () => {
  const {lang, preselectedDish, clearPreselectedDish, t} = useApp();
  const todayIso = useMemo(() => getTodayIso(), []);

  const [form, setForm] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    email: '',
    branchId: BRANCHES[0].id,
    guests: 2,
    date: todayIso,
    time: '20:30',
    notes: '',
  });

  useEffect(() => {
    if (preselectedDish) {
      setForm((prev) => ({
        ...prev,
        notes: prev.notes
          ? prev.notes
          : lang === 'ar'
            ? `أرغب بتجربة: ${preselectedDish}`
            : `Interested in trying: ${preselectedDish}`,
      }));
      clearPreselectedDish();
    }
  }, [preselectedDish, clearPreselectedDish, lang]);

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedBranch = useMemo(
    () => BRANCHES.find((b) => b.id === form.branchId) ?? BRANCHES[0],
    [form.branchId],
  );

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof ReservationFormData, string>> = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = t('form.errorRequired');
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) {
      nextErrors.phone = t('form.errorRequired');
    } else if (digitsOnly.length < 8) {
      nextErrors.phone = t('form.errorPhone');
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t('form.errorEmail');
    }
    if (!form.date || form.date < todayIso) {
      nextErrors.date = t('form.errorDate');
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildWhatsappText = (): string => {
    if (lang === 'ar') {
      return [
        `مرحباً فريق مطعم نُورا (${selectedBranch.city.ar})،`,
        `أرغب بحجز طاولة بالتفاصيل التالية:`,
        `• الاسم: ${form.fullName.trim()}`,
        `• الهاتف: ${form.phone.trim()}`,
        form.email.trim() ? `• البريد: ${form.email.trim()}` : null,
        `• الفرع: ${selectedBranch.city.ar} - ${selectedBranch.district.ar}`,
        `• عدد الضيوف: ${form.guests}`,
        `• التاريخ: ${form.date}`,
        `• الوقت: ${form.time}`,
        form.notes.trim() ? `• ملاحظات: ${form.notes.trim()}` : null,
      ]
        .filter(Boolean)
        .join('\n');
    }

    return [
      `Hello NŪRA Team (${selectedBranch.city.en}),`,
      `I would like to request a table reservation:`,
      `• Name: ${form.fullName.trim()}`,
      `• Phone: ${form.phone.trim()}`,
      form.email.trim() ? `• Email: ${form.email.trim()}` : null,
      `• Branch: ${selectedBranch.city.en} — ${selectedBranch.district.en}`,
      `• Guests: ${form.guests}`,
      `• Date: ${form.date}`,
      `• Seating Time: ${form.time}`,
      form.notes.trim() ? `• Notes: ${form.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setPreparedMessage(buildWhatsappText());
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard fallback ignored
    }
  };

  const whatsappUrl = preparedMessage
    ? `https://wa.me/${selectedBranch.whatsapp}?text=${encodeURIComponent(preparedMessage)}`
    : '#';

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-wide">
            <span className="w-7 h-px bg-gold" aria-hidden="true" />
            <span>{t('reservation.eyebrow')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-olive">
            {t('reservation.title')}
          </h1>
          <p className="text-base text-muted leading-relaxed">
            {t('reservation.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Form or WhatsApp Handoff Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-olive/10 shadow-xs">
            {!preparedMessage ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="res-name"
                      className="block text-sm font-medium text-olive"
                    >
                      {t('form.fullName')} *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => {
                        setForm({...form, fullName: e.target.value});
                        if (errors.fullName) setErrors({...errors, fullName: undefined});
                      }}
                      placeholder={t('form.fullNamePlaceholder')}
                      aria-invalid={Boolean(errors.fullName)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-olive bg-cream/35 focus:outline-none focus:border-gold ${
                        errors.fullName ? 'border-red-600' : 'border-olive/15'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="res-phone"
                      className="block text-sm font-medium text-olive"
                    >
                      {t('form.phone')} *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({...form, phone: e.target.value});
                        if (errors.phone) setErrors({...errors, phone: undefined});
                      }}
                      placeholder={t('form.phonePlaceholder')}
                      aria-invalid={Boolean(errors.phone)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-olive bg-cream/35 focus:outline-none focus:border-gold ${
                        errors.phone ? 'border-red-600' : 'border-olive/15'
                      }`}
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="res-branch"
                      className="block text-sm font-medium text-olive"
                    >
                      {t('form.branch')}
                    </label>
                    <select
                      id="res-branch"
                      value={form.branchId}
                      onChange={(e) => setForm({...form, branchId: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-olive/15 text-sm text-olive bg-cream/35 focus:outline-none focus:border-gold"
                    >
                      {BRANCHES.map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {branch.city[lang]} — {branch.district[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="res-guests"
                      className="block text-sm font-medium text-olive"
                    >
                      {t('form.guests')}
                    </label>
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={(e) =>
                        setForm({...form, guests: Number(e.target.value)})
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-olive/15 text-sm text-olive bg-cream/35 tabular-nums focus:outline-none focus:border-gold"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((count) => (
                        <option key={count} value={count}>
                          {count}{' '}
                          {count === 1 ? t('form.guestSingular') : t('form.guestPlural')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="res-date"
                      className="block text-sm font-medium text-olive"
                    >
                      {t('form.date')} *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={todayIso}
                      value={form.date}
                      onChange={(e) => {
                        setForm({...form, date: e.target.value});
                        if (errors.date) setErrors({...errors, date: undefined});
                      }}
                      aria-invalid={Boolean(errors.date)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-olive bg-cream/35 tabular-nums focus:outline-none focus:border-gold ${
                        errors.date ? 'border-red-600' : 'border-olive/15'
                      }`}
                    />
                    {errors.date && (
                      <p className="flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="res-time"
                      className="block text-sm font-medium text-olive"
                    >
                      {t('form.time')}
                    </label>
                    <select
                      id="res-time"
                      value={form.time}
                      onChange={(e) => setForm({...form, time: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-olive/15 text-sm text-olive bg-cream/35 tabular-nums focus:outline-none focus:border-gold"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="res-email"
                    className="block text-sm font-medium text-olive"
                  >
                    {t('form.email')}
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => {
                      setForm({...form, email: e.target.value});
                      if (errors.email) setErrors({...errors, email: undefined});
                    }}
                    placeholder={t('form.emailPlaceholder')}
                    aria-invalid={Boolean(errors.email)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-olive bg-cream/35 focus:outline-none focus:border-gold ${
                      errors.email ? 'border-red-600' : 'border-olive/15'
                    }`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs text-red-700">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="res-notes"
                    className="block text-sm font-medium text-olive"
                  >
                    {t('form.notes')}
                  </label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({...form, notes: e.target.value})}
                    placeholder={t('form.notesPlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl border border-olive/15 text-sm text-olive bg-cream/35 focus:outline-none focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-olive hover:bg-olive-soft text-cream text-sm font-semibold transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-gold-bright" aria-hidden="true" />
                  <span>{t('form.submit')}</span>
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-gold">
                      {t('reservation.eyebrow')}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-olive">
                      {t('reservation.handoffTitle')}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreparedMessage(null)}
                    className="text-xs font-medium text-olive underline hover:text-gold cursor-pointer"
                  >
                    {t('reservation.editDetails')}
                  </button>
                </div>

                <pre className="whitespace-pre-wrap font-sans text-sm text-olive bg-cream/80 p-5 rounded-xl border border-olive/10 leading-relaxed">
                  {preparedMessage}
                </pre>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-sand/70 border border-olive/10 text-xs text-olive/90 leading-relaxed">
                  <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{t('reservation.handoffNotice')}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-sm font-semibold transition-colors"
                  >
                    <span>{t('actions.continueWhatsapp')}</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-olive/10 hover:bg-olive/15 text-olive text-sm font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                    <span>{copied ? t('actions.copied') : t('actions.copyMessage')}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right 5 Cols: Live Summary + Instructions */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-olive text-cream rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="font-serif text-2xl font-semibold">
                  {t('reservation.summaryTitle')}
                </h2>
                <Calendar className="w-5 h-5 text-gold-bright" aria-hidden="true" />
              </div>

              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-cream/65">{t('form.branch')}</dt>
                  <dd className="font-medium text-end">
                    {selectedBranch.city[lang]}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-cream/65">{t('form.guests')}</dt>
                  <dd className="font-medium tabular-nums">
                    {form.guests}{' '}
                    {form.guests === 1
                      ? t('form.guestSingular')
                      : t('form.guestPlural')}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-cream/65">{t('form.date')}</dt>
                  <dd className="font-medium tabular-nums">{form.date}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-cream/65">{t('form.time')}</dt>
                  <dd className="font-medium tabular-nums">{form.time}</dd>
                </div>
                {form.fullName.trim() && (
                  <div className="flex justify-between gap-4 pt-2 border-t border-white/10">
                    <dt className="text-cream/65">{t('form.fullName')}</dt>
                    <dd className="font-medium text-end">{form.fullName.trim()}</dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="bg-sand/75 rounded-2xl p-6 border border-olive/10 space-y-2.5">
              <h3 className="font-serif text-xl font-semibold text-olive">
                {t('reservation.instructionsTitle')}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {t('reservation.instructionsBody')}
              </p>
              <p className="text-xs text-olive/80 tabular-nums pt-1" dir="ltr">
                {selectedBranch.phone} · {selectedBranch.hours[lang]}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
