// pages-journal.jsx

const JOURNAL_FR = [
  { cat: 'Éditorial', title: 'L\u2019art du premier regard', date: '12 mars 2026', read: 5, variant: 'warm', excerpt: 'Pourquoi ce moment, suspendu entre attente et reconnaissance, est l\u2019un des plus précieux d\u2019une journée de mariage.', feat: true },
  { cat: 'Mariage', title: 'Héloïse & Maxime — Un dimanche à Villandry', date: '28 février 2026', read: 8, variant: 'warm' },
  { cat: 'Conseils', title: 'Préparer son mariage d\u2019hiver', date: '14 février 2026', read: 6, variant: 'dark' },
  { cat: 'Éditorial', title: 'Tables longues, soirs longs', date: '03 février 2026', read: 4, variant: '' },
  { cat: 'Mariage', title: 'Salomé & Lucien — Abbaye de Fontenay', date: '18 janvier 2026', read: 9, variant: 'cool' },
  { cat: 'Journal', title: 'Notre année en dix images', date: '31 décembre 2025', read: 3, variant: 'warm' },
  { cat: 'Séance', title: 'Grossesse dans la lumière d\u2019octobre', date: '10 novembre 2025', read: 4, variant: '' },
];

const JOURNAL_EN = [
  { cat: 'Editorial', title: 'The art of the first look', date: 'March 12, 2026', read: 5, variant: 'warm', excerpt: 'Why this moment — suspended between anticipation and recognition — is among the most precious of any wedding day.', feat: true },
  { cat: 'Wedding', title: 'Héloïse & Maxime — A Sunday at Villandry', date: 'February 28, 2026', read: 8, variant: 'warm' },
  { cat: 'Guide', title: 'Planning a winter wedding', date: 'February 14, 2026', read: 6, variant: 'dark' },
  { cat: 'Editorial', title: 'Long tables, long evenings', date: 'February 3, 2026', read: 4, variant: '' },
  { cat: 'Wedding', title: 'Salomé & Lucien — Fontenay Abbey', date: 'January 18, 2026', read: 9, variant: 'cool' },
  { cat: 'Journal', title: 'Our year in ten images', date: 'December 31, 2025', read: 3, variant: 'warm' },
  { cat: 'Session', title: 'Maternity in October light', date: 'November 10, 2025', read: 4, variant: '' },
];

function JournalPage({ lang }) {
  const posts = lang === 'fr' ? JOURNAL_FR : JOURNAL_EN;
  const featured = posts.find((p) => p.feat);
  const rest = posts.filter((p) => !p.feat);

  return (
    <div className="route">
      <section style={{ padding: '180px 0 80px' }}>
        <div className="container">
          <Reveal>
            <div className="count" style={{ marginBottom: 28 }}>— 06</div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>{t(lang, 'journal.eyebrow')}</div>
            <h1 className="display" style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 1, maxWidth: 1100 }}>
              {t(lang, 'journal.title')}
            </h1>
            <p className="serif-italic" style={{ fontSize: 21, color: 'var(--taupe-2)', maxWidth: 640, marginTop: 40, lineHeight: 1.55 }}>
              {t(lang, 'journal.lede')}
            </p>
          </Reveal>
        </div>
      </section>

      {featured && (
        <section style={{ padding: '40px 0 80px' }}>
          <div className="container">
            <Reveal>
              <article style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center', borderTop: '1px solid var(--hairline)', paddingTop: 40 }}>
                <Ph variant={featured.variant} label={featured.title} ratio="16/11" />
                <div>
                  <div className="mono" style={{ marginBottom: 22 }}>{featured.cat} · {featured.date}</div>
                  <h2 className="display" style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1.08, marginBottom: 26 }}>
                    {featured.title}
                  </h2>
                  <p className="serif-italic" style={{ fontSize: 18, color: 'var(--taupe-2)', lineHeight: 1.6, marginBottom: 36, maxWidth: 480 }}>
                    {featured.excerpt}
                  </p>
                  <a href="#" onClick={(e) => e.preventDefault()} className="link-u mono">
                    {t(lang, 'common.readMore')} · {featured.read} {t(lang, 'journal.readtime')} →
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      )}

      <section style={{ padding: '40px 0 160px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px 40px', borderTop: '1px solid var(--hairline)', paddingTop: 60 }}>
            {rest.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 120}>
                <article style={{ cursor: 'pointer' }}>
                  <Ph variant={p.variant} label={p.title} ratio="5/6" />
                  <div className="mono" style={{ marginTop: 22 }}>{p.cat} · {p.date}</div>
                  <h3 className="display" style={{ fontSize: 24, marginTop: 10, lineHeight: 1.2, marginBottom: 18 }}>
                    {p.title}
                  </h3>
                  <a href="#" onClick={(e) => e.preventDefault()} className="link-u mono">
                    {t(lang, 'common.readMore')} · {p.read} {t(lang, 'journal.readtime')} →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { JournalPage });
