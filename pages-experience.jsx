// pages-experience.jsx

function ExperiencePage({ lang, setRoute }) {
  const isMobile = useIsMobile();
  const steps = t(lang, 'experience.steps');
  return (
    <div className="route">
      <section style={{ padding: '180px 0 80px' }}>
        <div className="container">
          <Reveal>
            <div className="count" style={{ marginBottom: 28 }}>— 03 / 04</div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>{t(lang, 'experience.eyebrow')}</div>
            <h1 className="display" style={{ fontSize: 'clamp(44px, 5.8vw, 84px)', lineHeight: 1.02, maxWidth: 1100 }}>
              {t(lang, 'experience.title')}
            </h1>
            <p className="serif-italic" style={{ fontSize: 21, color: 'var(--taupe-2)', maxWidth: 620, marginTop: 40, lineHeight: 1.55 }}>
              {t(lang, 'experience.lede')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px' }}>
        <div className="container">
          {steps.map((s, i) => (
            <Reveal key={i}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '100px 1fr 1fr',
                gap: isMobile ? 16 : 60,
                padding: isMobile ? '36px 0' : '52px 0',
                borderTop: '1px solid var(--hairline)',
                alignItems: 'start',
              }}>
                <div className="display" style={{ fontSize: 42, color: 'var(--taupe)' }}>{s.n}</div>
                <h2 className="display" style={{ fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.08 }}>
                  {s.t}
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--espresso)', fontWeight: 300, maxWidth: 440 }}>
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--hairline)' }} />
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'var(--ink)', color: 'var(--ivory)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'center' }}>
          <Reveal>
            <Ph variant="dark" label="album — hand-bound, linen" note="Keepsake" ratio="4/5" />
          </Reveal>
          <Reveal delay={150}>
            <div className="eyebrow" style={{ color: 'var(--taupe)', marginBottom: 28 }}>
              {lang === 'fr' ? 'L\u2019album, reliure main' : 'The album, hand-bound'}
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.08, marginBottom: 30, color: 'var(--ivory)' }}>
              {lang === 'fr' ? 'Un objet destiné à traverser les générations.' : 'An object made to cross generations.'}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(246,241,232,0.78)', fontWeight: 300, maxWidth: 480, marginBottom: 36 }}>
              {lang === 'fr'
                ? 'Reliures en lin naturel, papier d\u2019art mat, dorure à chaud. Chaque album est composé à la main dans notre atelier parisien, en dialogue avec vous.'
                : 'Natural linen bindings, matte art paper, hot-foil titling. Each album is composed by hand in our Paris atelier, in dialogue with you.'}
            </p>
            <button className="btn light" onClick={() => setRoute('forfaits')}>
              {lang === 'fr' ? 'Voir les forfaits' : 'View collections'} <span className="arrow" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ExperiencePage });
