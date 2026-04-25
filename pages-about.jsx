// pages-about.jsx

function AboutPage({ lang, setRoute }) {
  const values = t(lang, 'about.values');
  return (
    <div className="route">
      <section style={{ padding: '180px 0 100px' }}>
        <div className="container">
          <Reveal>
            <div className="count" style={{ marginBottom: 28 }}>— 01 / 04</div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>{t(lang, 'about.eyebrow')}</div>
            <h1 className="display" style={{ fontSize: 'clamp(48px, 6.6vw, 96px)', lineHeight: 1, maxWidth: 1100 }}>
              {t(lang, 'about.title')}
            </h1>
            <p className="serif-italic" style={{ fontSize: 22, color: 'var(--taupe-2)', maxWidth: 760, marginTop: 44, lineHeight: 1.55 }}>
              {t(lang, 'about.lede')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <Reveal>
            <Ph variant="warm" label="Inesse — lead photographer" ratio="4/5" />
            <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--hairline)', paddingBottom: 14 }}>
              <div className="display" style={{ fontSize: 32 }}>Inesse</div>
              <div className="mono">01</div>
            </div>
            <div className="eyebrow" style={{ marginTop: 14, marginBottom: 18 }}>{t(lang, 'about.inesse_role')}</div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--espresso)', maxWidth: 480, fontWeight: 300 }}>
              {t(lang, 'about.inesse_bio')}
            </p>
          </Reveal>
          <Reveal delay={180} style={{ marginTop: 80 }}>
            <Ph variant="dark" label="Aymen — director & cinematographer" ratio="4/5" />
            <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--hairline)', paddingBottom: 14 }}>
              <div className="display" style={{ fontSize: 32 }}>Aymen</div>
              <div className="mono">02</div>
            </div>
            <div className="eyebrow" style={{ marginTop: 14, marginBottom: 18 }}>{t(lang, 'about.aymen_role')}</div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--espresso)', maxWidth: 480, fontWeight: 300 }}>
              {t(lang, 'about.aymen_bio')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'var(--ivory-2)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 60 }}>— {t(lang, 'about.values_eyebrow')} —</div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 24 }}>
                  <div className="count" style={{ marginBottom: 20 }}>0{i + 1}</div>
                  <h3 className="display" style={{ fontSize: 28, marginBottom: 16 }}>{v.t}</h3>
                  <p className="serif-italic" style={{ fontSize: 15.5, color: 'var(--taupe-2)', lineHeight: 1.6 }}>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ textAlign: 'center', marginTop: 96, fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--taupe-2)' }}>
              {t(lang, 'about.based')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '120px 0 160px', textAlign: 'center' }}>
        <div className="container-narrow">
          <Reveal>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, marginBottom: 44 }}>
              {lang === 'fr' ? 'Et si l\u2019on se rencontrait ?' : 'Shall we meet?'}
            </h2>
            <button className="btn solid" onClick={() => setRoute('contact')}>
              {t(lang, 'common.inquire')} <span className="arrow" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage });
