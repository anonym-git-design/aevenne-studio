// pages-contact.jsx — validated inquiry form

function ContactPage({ lang }) {
  const isMobile = useIsMobile();
  const [form, setForm] = React.useState({
    name: '', email: '', type: '', date: '', location: '', message: '',
  });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle'); // idle | submitting | success

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: null }));
  };

  const validate = () => {
    const e = {};
    for (const k of ['name', 'email', 'type', 'date', 'location', 'message']) {
      if (!form[k] || !form[k].trim()) e[k] = t(lang, 'contact.errors.required');
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t(lang, 'contact.errors.email');
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1100);
  };

  const reset = () => {
    setForm({ name: '', email: '', type: '', date: '', location: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  const eventTypes = lang === 'fr'
    ? [
        { v: 'wedding', l: 'Mariage' },
        { v: 'engagement', l: 'Séance couple / fiançailles' },
        { v: 'family', l: 'Famille' },
        { v: 'maternity', l: 'Grossesse' },
        { v: 'newborn', l: 'Nouveau-né' },
        { v: 'event', l: 'Événement privé' },
        { v: 'other', l: 'Autre' },
      ]
    : [
        { v: 'wedding', l: 'Wedding' },
        { v: 'engagement', l: 'Engagement session' },
        { v: 'family', l: 'Family' },
        { v: 'maternity', l: 'Maternity' },
        { v: 'newborn', l: 'Newborn' },
        { v: 'event', l: 'Private event' },
        { v: 'other', l: 'Other' },
      ];

  return (
    <div className="route">
      <section style={{ padding: '180px 0 60px' }}>
        <div className="container">
          <Reveal>
            <div className="count" style={{ marginBottom: 28 }}>— 07</div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>{t(lang, 'contact.eyebrow')}</div>
            <h1 className="display" style={{ fontSize: 'clamp(48px, 6.4vw, 92px)', lineHeight: 1 }}>
              {t(lang, 'contact.title')}
            </h1>
            <p className="serif-italic" style={{ fontSize: 21, color: 'var(--taupe-2)', maxWidth: 640, marginTop: 40, lineHeight: 1.55 }}>
              {t(lang, 'contact.lede')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '60px 0 160px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr', gap: isMobile ? 48 : 96 }}>
          <Reveal>
            {status === 'success' ? (
              <div style={{ padding: '60px 40px', border: '1px solid var(--hairline)', textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 64, color: 'var(--taupe)', marginBottom: 20 }}>—</div>
                <h2 className="display" style={{ fontSize: 40, lineHeight: 1.1, marginBottom: 20 }}>
                  {t(lang, 'contact.form.success_title')}
                </h2>
                <p className="serif-italic" style={{ fontSize: 18, color: 'var(--taupe-2)', marginBottom: 36 }}>
                  {t(lang, 'contact.form.success_body')}
                </p>
                <button className="btn" onClick={reset}>
                  {t(lang, 'contact.form.success_next')} <span className="arrow" />
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '32px 40px' }}>
                  <Field label={t(lang, 'contact.form.name')} error={errors.name}>
                    <input type="text" value={form.name} onChange={update('name')} className="aven-input" />
                  </Field>
                  <Field label={t(lang, 'contact.form.email')} error={errors.email}>
                    <input type="email" value={form.email} onChange={update('email')} className="aven-input" />
                  </Field>
                  <Field label={t(lang, 'contact.form.type')} error={errors.type}>
                    <select value={form.type} onChange={update('type')} className="aven-input">
                      <option value="">{t(lang, 'contact.form.placeholder_select')}</option>
                      {eventTypes.map((e) => <option key={e.v} value={e.v}>{e.l}</option>)}
                    </select>
                  </Field>
                  <Field label={t(lang, 'contact.form.date')} error={errors.date}>
                    <input type="date" value={form.date} onChange={update('date')} className="aven-input" />
                  </Field>
                  <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
                    <Field label={t(lang, 'contact.form.location')} error={errors.location}>
                      <input type="text" value={form.location} onChange={update('location')}
                        placeholder={lang === 'fr' ? 'Lieu de la cérémonie, ville, ou région' : 'Venue, city, or region'}
                        className="aven-input" />
                    </Field>
                  </div>
                  <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
                    <Field label={t(lang, 'contact.form.message')} error={errors.message} hint={t(lang, 'contact.form.message_hint')}>
                      <textarea rows={6} value={form.message} onChange={update('message')} className="aven-input" />
                    </Field>
                  </div>
                </div>
                <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 28 }}>
                  <button type="submit" className="btn solid" disabled={status === 'submitting'}>
                    {status === 'submitting' ? t(lang, 'contact.form.submitting') : t(lang, 'contact.form.submit')}
                    <span className="arrow" />
                  </button>
                  <div className="mono" style={{ opacity: 0.7 }}>
                    {lang === 'fr' ? 'Votre demande reste strictement confidentielle' : 'Your inquiry remains strictly confidential'}
                  </div>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={200}>
            <aside style={{ borderTop: '1px solid var(--hairline)', paddingTop: 30 }}>
              <div className="eyebrow" style={{ marginBottom: 40 }}>— {t(lang, 'contact.aside_h')} —</div>
              <AsideBlock label={t(lang, 'contact.email_label')} value={t(lang, 'contact.email_value')} />
              <AsideBlock label={t(lang, 'contact.phone_label')} value={t(lang, 'contact.phone_value')} />
              <AsideBlock label={t(lang, 'contact.studio_label')} value={t(lang, 'contact.studio_value')} multi />
              <AsideBlock label={t(lang, 'contact.hours_label')} value={t(lang, 'contact.hours_value')} multi />
              <div style={{ marginTop: 48 }}>
                <Ph variant="warm" label="atelier — 18 rue de Sévigné" ratio="4/3" />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <style>{`
        .aven-input {
          width: 100%;
          padding: 14px 0;
          border: 0;
          border-bottom: 1px solid var(--hairline);
          background: transparent;
          color: var(--espresso);
          font-family: var(--f-sans);
          font-weight: 300;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;
          border-radius: 0;
          appearance: none;
          -webkit-appearance: none;
        }
        .aven-input:focus { border-bottom-color: var(--espresso); }
        .aven-input::placeholder { color: var(--taupe); opacity: 0.6; }
        textarea.aven-input { resize: vertical; line-height: 1.6; }
        select.aven-input {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%239B8B73' d='M0 0h10L5 6z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 0 center;
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, hint, children }) {
  return (
    <div>
      <label className="eyebrow" style={{ display: 'block', marginBottom: 6, color: error ? '#8B3A2A' : 'var(--taupe-2)' }}>
        {label}
      </label>
      {children}
      {hint && !error && (
        <div className="serif-italic" style={{ fontSize: 13, color: 'var(--taupe)', marginTop: 8 }}>{hint}</div>
      )}
      {error && (
        <div className="serif-italic" style={{ fontSize: 12.5, color: '#8B3A2A', marginTop: 8 }}>{error}</div>
      )}
    </div>
  );
}

function AsideBlock({ label, value, multi }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>{label}</div>
      <div className="serif-italic" style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--espresso)', whiteSpace: multi ? 'pre-line' : 'normal' }}>
        {value}
      </div>
    </div>
  );
}

Object.assign(window, { ContactPage });
