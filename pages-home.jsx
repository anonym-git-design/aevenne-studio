// pages-home.jsx — Home page with 3 hero variants

function HeroFullBleed({ lang, setRoute }) {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: 680,
      color: 'var(--ivory)',
      overflow: 'hidden',
    }}>
      <Ph variant="dark" label="hero — bride in garden light" note="Full-bleed cinematic image" style={{ position: 'absolute', inset: 0 }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,13,10,0.25) 0%, rgba(15,13,10,0.05) 30%, rgba(15,13,10,0.55) 100%)'
      }} />

      <div className="container" style={{
        position: 'relative', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingBottom: 120,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 60 }}>
          <div style={{ maxWidth: 880 }}>
            <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.85)', marginBottom: 36 }}>
              {t(lang, 'home.eyebrow')} · Paris · France · Worldwide
            </div>
            <h1 className="display" style={{
              fontSize: 'clamp(48px, 7.6vw, 116px)',
              lineHeight: 0.95,
              fontWeight: 400,
              color: 'var(--ivory)',
            }}>
              {t(lang, 'home.h1Line1')}{' '}
              <em style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontWeight: 300 }}>
                {t(lang, 'home.h1Line2')}
              </em>
              <br />
              {t(lang, 'home.h1Line3')}
              <br />
              <span style={{ color: 'rgba(246,241,232,0.78)' }}>{t(lang, 'home.h1Line4')}</span>
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 24, paddingBottom: 12 }}>
            <div className="serif-italic" style={{ fontSize: 18, color: 'rgba(246,241,232,0.85)', textAlign: 'right', maxWidth: 320, lineHeight: 1.55 }}>
              {t(lang, 'home.sub')}
            </div>
            <button className="btn light" onClick={() => setRoute('contact')}>
              {t(lang, 'home.cta')} <span className="arrow" />
            </button>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 56, bottom: 30,
        display: 'flex', alignItems: 'center', gap: 14,
        color: 'rgba(246,241,232,0.6)',
      }}>
        <div style={{ width: 1, height: 42, background: 'currentColor', opacity: 0.4,
          animation: 'scrollBar 2s ease-in-out infinite' }} />
        <div className="eyebrow" style={{ color: 'inherit' }}>{t(lang, 'home.scroll')}</div>
      </div>
      <style>{`@keyframes scrollBar {
        0%,100% { transform: scaleY(0.4); transform-origin: top; }
        50% { transform: scaleY(1); transform-origin: top; }
      }`}</style>
    </section>
  );
}

function HeroSplit({ lang, setRoute }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: 140,
      paddingBottom: 80,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, width: '100%', alignItems: 'center' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 42 }}>{t(lang, 'home.eyebrow')}</div>
          <h1 className="display" style={{
            fontSize: 'clamp(48px, 6vw, 96px)',
            lineHeight: 0.98,
            marginBottom: 40,
          }}>
            {t(lang, 'home.h1Line1')}{' '}
            <em style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic' }}>
              {t(lang, 'home.h1Line2')}
            </em>{' '}
            {t(lang, 'home.h1Line3')}{' '}
            {t(lang, 'home.h1Line4')}.
          </h1>
          <p className="serif-italic" style={{ fontSize: 20, color: 'var(--taupe-2)', maxWidth: 440, lineHeight: 1.55, marginBottom: 44 }}>
            {t(lang, 'home.sub')}
          </p>
          <button className="btn" onClick={() => setRoute('contact')}>
            {t(lang, 'home.cta')} <span className="arrow" />
          </button>
        </div>
        <div style={{ position: 'relative', paddingRight: 40 }}>
          <Ph variant="warm" label="editorial portrait — couple, vineyard" note="Primary hero" ratio="3/4" />
          <div style={{ position: 'absolute', right: -10, bottom: -60, width: '45%', aspectRatio: '3/4' }}>
            <Ph label="bride — hand & bouquet" note="Detail shot" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSequence({ lang, setRoute }) {
  const slides = [
    { label: 'ceremony — first kiss', variant: 'dark' },
    { label: 'reception — candlelight', variant: 'dark' },
    { label: 'bride — morning window', variant: 'warm' },
    { label: 'rings on silk', variant: '' },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 680, color: 'var(--ivory)', overflow: 'hidden' }}>
      {slides.map((s, idx) => (
        <div key={idx} style={{
          position: 'absolute', inset: 0,
          opacity: idx === i ? 1 : 0,
          transition: 'opacity 1.6s cubic-bezier(.22,.61,.36,1)',
        }}>
          <Ph variant={s.variant || 'dark'} label={s.label} note={`${String(idx+1).padStart(2,'0')} · ${slides.length}`} style={{ position: 'absolute', inset: 0 }} />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,13,10,0.3) 0%, rgba(15,13,10,0) 30%, rgba(15,13,10,0.5) 100%)' }} />

      <div className="container" style={{
        position: 'relative', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center',
      }}>
        <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.85)', marginBottom: 40 }}>
          {t(lang, 'home.eyebrow')}
        </div>
        <h1 className="display" style={{
          fontSize: 'clamp(44px, 6.6vw, 100px)',
          lineHeight: 1.02,
          color: 'var(--ivory)',
          maxWidth: 1100,
          marginBottom: 44,
        }}>
          {t(lang, 'home.h1Line1')}{' '}
          <em style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic' }}>
            {t(lang, 'home.h1Line2')}
          </em>
          <br />
          {t(lang, 'home.h1Line3')} {t(lang, 'home.h1Line4')}.
        </h1>
        <p className="serif-italic" style={{ fontSize: 19, color: 'rgba(246,241,232,0.85)', maxWidth: 560, lineHeight: 1.55, marginBottom: 44 }}>
          {t(lang, 'home.sub')}
        </p>
        <button className="btn light" onClick={() => setRoute('contact')}>
          {t(lang, 'home.cta')} <span className="arrow" />
        </button>
      </div>

      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10 }}>
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} style={{
            width: 24, height: 1.5,
            background: idx === i ? 'var(--ivory)' : 'rgba(246,241,232,0.3)',
            transition: 'all 0.4s',
            padding: 0,
          }} />
        ))}
      </div>
    </section>
  );
}

function HomeIntro({ lang }) {
  return (
    <section style={{ padding: '140px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 100, alignItems: 'center' }}>
        <Reveal>
          <Ph variant="warm" label="Inesse & Aymen — studio portrait" note="About image" ratio="4/5" />
        </Reveal>
        <Reveal delay={150}>
          <div className="eyebrow" style={{ marginBottom: 26 }}>{t(lang, 'home.intro_eyebrow')}</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', lineHeight: 1.05, marginBottom: 36 }}>
            {t(lang, 'home.intro_title')}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--espresso)', maxWidth: 560, marginBottom: 28, fontWeight: 300 }}>
            {t(lang, 'home.intro_body')}
          </p>
          <div className="serif-italic" style={{ fontSize: 22, color: 'var(--taupe-2)', marginBottom: 6 }}>
            {t(lang, 'home.intro_signature')}
          </div>
          <div className="eyebrow">{t(lang, 'logo.sub')}</div>
        </Reveal>
      </div>
    </section>
  );
}

function HomeServices({ lang, setRoute }) {
  const services = [
    { k: 'wedding', var_: 'warm' },
    { k: 'engagement', var_: '' },
    { k: 'family', var_: 'cool' },
    { k: 'maternity', var_: 'warm' },
    { k: 'newborn', var_: '' },
    { k: 'videography', var_: 'dark' },
  ];
  return (
    <section style={{ padding: '140px 0', background: 'var(--ivory-2)' }}>
      <div className="container">
        <Reveal>
          <SectionHeader
            count="— 02"
            eyebrow={t(lang, 'home.services_eyebrow')}
            title={t(lang, 'home.services_title')}
          />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '56px 48px', marginTop: 90 }}>
          {services.map((s, idx) => (
            <Reveal key={s.k} delay={(idx % 3) * 120}>
              <div onClick={() => setRoute('services')} style={{ cursor: 'pointer', group: '' }}>
                <Ph variant={s.var_} label={t(lang, 'services.' + s.k).toLowerCase()} ratio="4/5" />
                <div style={{ marginTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--hairline)', paddingBottom: 16 }}>
                  <div className="display" style={{ fontSize: 26 }}>{t(lang, 'services.' + s.k)}</div>
                  <div className="mono">0{idx + 1}</div>
                </div>
                <p className="serif-italic" style={{ fontSize: 15.5, color: 'var(--taupe-2)', marginTop: 14, lineHeight: 1.55 }}>
                  {t(lang, 'serviceDesc.' + s.k)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFeatured({ lang, setRoute }) {
  const stories = [
    { t1: 'Héloïse & Maxime', sub: 'Château de Villandry · Loire · Juin 2026', variant: 'warm' },
    { t1: 'Amélia & Thomas', sub: 'Cap d\u2019Antibes · Côte d\u2019Azur · Septembre 2025', variant: 'dark' },
    { t1: 'Salomé & Lucien', sub: 'Abbaye de Fontenay · Bourgogne · Mai 2025', variant: '' },
  ];
  return (
    <section style={{ padding: '140px 0' }}>
      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
            <SectionHeader count="— 03" eyebrow={t(lang, 'home.featured_eyebrow')} title={t(lang, 'home.featured_title')} />
            <a href="#" onClick={(e) => { e.preventDefault(); setRoute('portfolio'); }} className="link-u mono">
              {t(lang, 'common.viewAll')} →
            </a>
          </div>
        </Reveal>

        {stories.map((s, i) => (
          <Reveal key={i}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1.4fr 1fr' : '1fr 1.4fr',
              gap: 56,
              marginBottom: 100,
              alignItems: 'center',
            }}>
              <Ph variant={s.variant} label={s.t1} note="wedding editorial" ratio="4/5" style={{ order: i % 2 === 0 ? 0 : 1 }} />
              <div style={{ padding: '0 20px' }}>
                <div className="count" style={{ marginBottom: 18 }}>— 0{i + 1}</div>
                <h3 className="display" style={{ fontSize: 'clamp(32px, 3.4vw, 46px)', lineHeight: 1.05, marginBottom: 20 }}>
                  {s.t1}
                </h3>
                <div className="serif-italic" style={{ fontSize: 16, color: 'var(--taupe-2)', marginBottom: 28 }}>
                  {s.sub}
                </div>
                <a href="#" onClick={(e) => { e.preventDefault(); setRoute('portfolio'); }} className="link-u mono">
                  {t(lang, 'common.readMore')} →
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HomeManifesto({ lang }) {
  const text = t(lang, 'home.manifesto');
  const lines = text.split('\n');
  return (
    <section style={{ padding: '180px 0', background: 'var(--ink)', color: 'var(--ivory)', textAlign: 'center' }}>
      <div className="container-narrow">
        <Reveal>
          <div className="eyebrow" style={{ color: 'var(--taupe)', marginBottom: 56 }}>
            — {t(lang, 'home.manifesto_eyebrow')} —
          </div>
          <div className="display" style={{ fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.25 }}>
            {lines.map((ln, i) => (
              <div key={i} style={{ color: i === 1 ? 'var(--beige)' : 'var(--ivory)', fontStyle: i === 1 ? 'italic' : 'normal', fontFamily: i === 1 ? 'var(--f-serif)' : 'var(--f-display)', fontWeight: i === 1 ? 300 : 400 }}>
                {ln}
              </div>
            ))}
          </div>
          <div style={{ width: 40, height: 1, background: 'var(--taupe)', margin: '64px auto 0' }} />
        </Reveal>
      </div>
    </section>
  );
}

function HomeJournal({ lang, setRoute }) {
  const posts = [
    { title: 'L\u2019art du premier regard', titleEn: 'The art of the first look', cat: 'Mariage', read: 5 },
    { title: 'Une cérémonie à la bougie en Provence', titleEn: 'A candlelit ceremony in Provence', cat: 'Éditorial', read: 8 },
    { title: 'Tables longues, soirs longs', titleEn: 'Long tables, long evenings', cat: 'Journal', read: 4 },
  ];
  return (
    <section style={{ padding: '140px 0 160px' }}>
      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
            <SectionHeader count="— 04" eyebrow={t(lang, 'home.journal_eyebrow')} title={t(lang, 'home.journal_title')} />
            <a href="#" onClick={(e) => { e.preventDefault(); setRoute('journal'); }} className="link-u mono">
              {t(lang, 'common.viewAll')} →
            </a>
          </div>
        </Reveal>
        <div className="grid-3">
          {posts.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <article onClick={() => setRoute('journal')} style={{ cursor: 'pointer' }}>
                <Ph variant={i === 1 ? 'dark' : i === 2 ? 'warm' : ''} label={p.title} ratio="5/6" />
                <div className="mono" style={{ marginTop: 22 }}>{p.cat} · {p.read} {t(lang, 'journal.readtime')}</div>
                <h3 className="display" style={{ fontSize: 26, marginTop: 12, lineHeight: 1.15 }}>
                  {lang === 'fr' ? p.title : p.titleEn}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({ lang, setRoute, heroVariant }) {
  return (
    <div className="route">
      {heroVariant === 'full' && <HeroFullBleed lang={lang} setRoute={setRoute} />}
      {heroVariant === 'split' && <HeroSplit lang={lang} setRoute={setRoute} />}
      {heroVariant === 'sequence' && <HeroSequence lang={lang} setRoute={setRoute} />}
      <HomeIntro lang={lang} />
      <HomeServices lang={lang} setRoute={setRoute} />
      <HomeFeatured lang={lang} setRoute={setRoute} />
      <HomeManifesto lang={lang} />
      <HomeJournal lang={lang} setRoute={setRoute} />
    </div>
  );
}

Object.assign(window, { HomePage });
