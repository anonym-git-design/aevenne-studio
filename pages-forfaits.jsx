// pages-forfaits.jsx — Pricing / collections page

const WEDDING_PACKAGES_FR = [
  {
    name: 'Essentielle',
    subtitle: 'Pour les cérémonies intimes',
    price: '600',
    hours: '6 heures de couverture',
    features: [
      'Une photographe principale',
      'Consultation pré-mariage',
      'Galerie privée en ligne',
      'Ensemble des images retouchées',
      'Livraison sous 6 semaines',
    ],
  },
  {
    name: 'Signature',
    subtitle: 'Notre forfait le plus choisi',
    price: '1 500',
    hours: '10 heures de couverture',
    featured: true,
    features: [
      'Photographe principale + assistante',
      'Séance couple offerte',
      'Galerie privée & tirages tests',
      'Ensemble des images retouchées',
      'Album relié main (25 pages)',
      'Livraison prioritaire sous 4 semaines',
    ],
  },
  {
    name: 'Aven',
    subtitle: 'L\u2019expérience complète',
    price: '2200',
    hours: 'Journée et soirée jusqu\u2019à 1h',
    features: [
      'Photographie & film',
      'Photographe, vidéaste, assistante',
      'Séance couple & préparatifs',
      'Film long (6 min) & film court (60 s)',
      'Album grand format relié main',
      'Coffret archives en lin naturel',
      'Livraison prioritaire sous 3 semaines',
    ],
  },
];

const WEDDING_PACKAGES_EN = [
  {
    name: 'Essential',
    subtitle: 'For intimate ceremonies',
    price: '3,400',
    hours: '6 hours of coverage',
    features: [
      'Lead photographer',
      'Pre-wedding consultation',
      'Private online gallery',
      'All images fully retouched',
      'Delivery within 6 weeks',
    ],
  },
  {
    name: 'Signature',
    subtitle: 'Our most-chosen collection',
    price: '5,800',
    hours: '10 hours of coverage',
    featured: true,
    features: [
      'Lead photographer + assistant',
      'Complimentary couple session',
      'Private gallery & test prints',
      'All images fully retouched',
      'Hand-bound album (25 pages)',
      'Priority delivery within 4 weeks',
    ],
  },
  {
    name: 'Aevenne',
    subtitle: 'The complete experience',
    price: '9,200',
    hours: 'Full day + day before',
    features: [
      'Photography & film',
      'Photographer, cinematographer, assistant',
      'Couple session & prep-day',
      'Long film (6 min) & short film (60 s)',
      'Large hand-bound album',
      'Linen archive keepsake box',
      'Priority delivery within 3 weeks',
    ],
  },
];

const LIFESTYLE_PACKAGES_FR = [
  { name: 'Couple / Fiançailles', price: '690', duration: '90 min · 50 images retouchées · galerie privée' },
  { name: 'Famille', price: '590', duration: '60 min · 40 images retouchées · galerie privée' },
  { name: 'Grossesse', price: '650', duration: '75 min · 40 images retouchées · galerie privée' },
  { name: 'Nouveau-né', price: '750', duration: '2 h à domicile · 50 images retouchées · galerie privée' },
];

const LIFESTYLE_PACKAGES_EN = [
  { name: 'Couple / Engagement', price: '690', duration: '90 min · 50 retouched images · private gallery' },
  { name: 'Family', price: '590', duration: '60 min · 40 retouched images · private gallery' },
  { name: 'Maternity', price: '650', duration: '75 min · 40 retouched images · private gallery' },
  { name: 'Newborn', price: '750', duration: '2 h in-home · 50 retouched images · private gallery' },
];

function ForfaitsPage({ lang, setRoute }) {
  const weddings = lang === 'fr' ? WEDDING_PACKAGES_FR : WEDDING_PACKAGES_EN;
  const lifestyle = lang === 'fr' ? LIFESTYLE_PACKAGES_FR : LIFESTYLE_PACKAGES_EN;
  const cur = t(lang, 'forfaits.currency');

  return (
    <div className="route">
      <section style={{ padding: '180px 0 80px' }}>
        <div className="container">
          <Reveal>
            <div className="count" style={{ marginBottom: 28 }}>— 05</div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>{t(lang, 'forfaits.eyebrow')}</div>
            <h1 className="display" style={{ fontSize: 'clamp(48px, 6.4vw, 92px)', lineHeight: 1 }}>
              {t(lang, 'forfaits.title')}
            </h1>
            <p className="serif-italic" style={{ fontSize: 21, color: 'var(--taupe-2)', maxWidth: 680, marginTop: 40, lineHeight: 1.55 }}>
              {t(lang, 'forfaits.lede')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 60 }}>— {t(lang, 'forfaits.wedding_h')} —</div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}>
            {weddings.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{
                  position: 'relative',
                  padding: '48px 36px 44px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: p.featured ? 'var(--ink)' : 'transparent',
                  color: p.featured ? 'var(--ivory)' : 'var(--espresso)',
                  border: p.featured ? 'none' : '1px solid var(--hairline)',
                  transition: 'all 0.4s var(--ease)',
                }}>
                  {p.featured && (
                    <div style={{
                      position: 'absolute',
                      top: -10, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--beige)', color: 'var(--ink)',
                      padding: '5px 18px',
                      fontSize: 9.5, letterSpacing: '0.36em', textTransform: 'uppercase', fontWeight: 400,
                    }}>
                      {t(lang, 'forfaits.most_loved')}
                    </div>
                  )}
                  <div className="count" style={{ color: p.featured ? 'var(--taupe)' : 'var(--taupe)', marginBottom: 20 }}>0{i + 1}</div>
                  <h3 className="display" style={{ fontSize: 38, lineHeight: 1.05, marginBottom: 10, minHeight: 80 }}>{p.name}</h3>
                  <div className="serif-italic" style={{ fontSize: 16, color: p.featured ? 'rgba(246,241,232,0.7)' : 'var(--taupe-2)', marginBottom: 36, minHeight: 25 }}>
                    {p.subtitle}
                  </div>

                  <div style={{ marginBottom: 10, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span className="display" style={{ fontSize: 64, lineHeight: 1 }}>{p.price}</span>
                    <span className="display" style={{ fontSize: 24, opacity: 0.6 }}>{cur}</span>
                  </div>
                  <div className="eyebrow" style={{ color: p.featured ? 'var(--taupe)' : 'var(--taupe-2)', marginBottom: 32, minHeight: 32 }}>{p.hours}</div>

                  <div style={{ height: 1, background: p.featured ? 'rgba(246,241,232,0.15)' : 'var(--hairline)', marginBottom: 28 }} />

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36, flex: 1 }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{ fontSize: 14.5, lineHeight: 1.55, display: 'flex', gap: 12, fontWeight: 300 }}>
                        <span style={{ color: p.featured ? 'var(--beige)' : 'var(--taupe)', flexShrink: 0 }}>—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={p.featured ? 'btn light' : 'btn'}
                    onClick={() => setRoute('contact')}
                    style={{ justifyContent: 'center', width: '100%' }}
                  >
                    {t(lang, 'forfaits.book')} <span className="arrow" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 60 }}>— {t(lang, 'forfaits.lifestyle_h')} —</div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
            {lifestyle.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <div style={{
                  padding: '44px 28px',
                  borderRight: i < lifestyle.length - 1 ? '1px solid var(--hairline)' : 'none',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div className="count" style={{ marginBottom: 20 }}>0{i + 1}</div>
                  <h3 className="display" style={{ fontSize: 26, lineHeight: 1.1, marginBottom: 18, minHeight: 60 }}>{p.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 18 }}>
                    <span className="display" style={{ fontSize: 40 }}>{p.price}</span>
                    <span className="display" style={{ fontSize: 18, opacity: 0.6 }}>{cur}</span>
                  </div>
                  <p className="serif-italic" style={{ fontSize: 13.5, color: 'var(--taupe-2)', lineHeight: 1.6, marginBottom: 24, flex: 1 }}>
                    {p.duration}
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); setRoute('contact'); }} className="link-u mono">
                    {t(lang, 'forfaits.book')} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 140px' }}>
        <div className="container-narrow">
          <Reveal>
            <p className="serif-italic" style={{ fontSize: 16, color: 'var(--taupe-2)', textAlign: 'center', lineHeight: 1.7 }}>
              {t(lang, 'forfaits.note')}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ForfaitsPage });
