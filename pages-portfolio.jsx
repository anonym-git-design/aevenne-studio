// pages-portfolio.jsx — grid + filter + lightbox

const PORTFOLIO_IMAGES = [
  { cat: 'weddings', label: 'Héloïse & Maxime — Loire', variant: 'warm', span: 'tall' },
  { cat: 'weddings', label: 'Ceremony kiss — Bourgogne', variant: 'dark', span: 'wide' },
  { cat: 'couples', label: 'Engagement — Montmartre', variant: '', span: 'normal' },
  { cat: 'weddings', label: 'Rings on linen', variant: '', span: 'normal' },
  { cat: 'family', label: 'Summer garden — family of five', variant: 'warm', span: 'tall' },
  { cat: 'maternity', label: 'Maternity — golden hour', variant: 'warm', span: 'normal' },
  { cat: 'weddings', label: 'Reception candlelight — Cap d\u2019Antibes', variant: 'dark', span: 'wide' },
  { cat: 'newborn', label: 'Newborn — linen & lace', variant: '', span: 'normal' },
  { cat: 'events', label: 'Birthday dinner — Paris', variant: 'dark', span: 'normal' },
  { cat: 'couples', label: 'Vineyard — Provence', variant: 'warm', span: 'tall' },
  { cat: 'weddings', label: 'Bride portrait — window light', variant: 'warm', span: 'normal' },
  { cat: 'family', label: 'Family portrait — studio', variant: '', span: 'normal' },
  { cat: 'maternity', label: 'Maternity — silk drape', variant: '', span: 'normal' },
  { cat: 'events', label: 'Engagement party — château', variant: 'dark', span: 'wide' },
  { cat: 'newborn', label: 'Mother and child', variant: 'warm', span: 'tall' },
  { cat: 'weddings', label: 'First dance — Fontenay', variant: 'dark', span: 'normal' },
  { cat: 'couples', label: 'Couple at sea — Étretat', variant: 'cool', span: 'normal' },
  { cat: 'family', label: 'Grandmother & grandchild', variant: 'warm', span: 'normal' },
];

function Lightbox({ img, index, total, onClose, onPrev, onNext, lang }) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(15, 13, 10, 0.96)',
      display: 'flex', flexDirection: 'column',
      animation: 'lbFade 0.4s var(--ease)',
    }}>
      <style>{`@keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <div style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--ivory)' }}>
        <div className="mono" style={{ color: 'rgba(246,241,232,0.6)' }}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
        <button onClick={onClose} style={{ color: 'var(--ivory)', fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase' }}>
          {t(lang, 'common.closing')} ✕
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 40px', gap: 32 }}>
        <button onClick={onPrev} style={{ color: 'var(--ivory)', fontSize: 32, opacity: 0.6, padding: 20 }}>‹</button>
        <div style={{ flex: 1, maxWidth: 1100, maxHeight: '80vh', aspectRatio: '4/5' }}>
          <Ph variant={img.variant} label={img.label} note={`— ${img.cat}`} style={{ width: '100%', height: '100%' }} />
        </div>
        <button onClick={onNext} style={{ color: 'var(--ivory)', fontSize: 32, opacity: 0.6, padding: 20 }}>›</button>
      </div>
      <div style={{ padding: '20px 40px 32px', textAlign: 'center', color: 'rgba(246,241,232,0.7)' }}>
        <div className="serif-italic" style={{ fontSize: 18 }}>{img.label}</div>
        <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.4)', marginTop: 8 }}>
          {t(lang, 'portfolio.categories.' + img.cat)}
        </div>
      </div>
    </div>
  );
}

function PortfolioPage({ lang, gridLayout }) {
  const [cat, setCat] = React.useState('all');
  const [lightbox, setLightbox] = React.useState(null);

  const cats = ['all', 'weddings', 'couples', 'family', 'maternity', 'newborn', 'events'];
  const filtered = cat === 'all' ? PORTFOLIO_IMAGES : PORTFOLIO_IMAGES.filter((i) => i.cat === cat);

  const masonry = gridLayout === 'masonry';

  return (
    <div className="route">
      <section style={{ padding: '180px 0 60px' }}>
        <div className="container">
          <Reveal>
            <div className="count" style={{ marginBottom: 28 }}>— 02 / 04</div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>{t(lang, 'portfolio.eyebrow')}</div>
            <h1 className="display" style={{ fontSize: 'clamp(48px, 6.6vw, 96px)', lineHeight: 1, maxWidth: 1100 }}>
              {t(lang, 'portfolio.title')}
            </h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '20px 0', justifyContent: 'center' }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: '10px 20px',
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  color: cat === c ? 'var(--espresso)' : 'var(--taupe)',
                  borderBottom: cat === c ? '1px solid var(--espresso)' : '1px solid transparent',
                  transition: 'all 0.3s',
                }}
              >
                {c === 'all' ? t(lang, 'portfolio.filter_all') : t(lang, 'portfolio.categories.' + c)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 0 100px' }}>
        <div className="container">
          {masonry ? (
            <div style={{ columnCount: 3, columnGap: 18 }}>
              {filtered.map((img, i) => {
                const ratios = ['3/4', '4/5', '1/1', '3/5', '5/6', '4/3'];
                const r = ratios[i % ratios.length];
                return (
                  <div
                    key={i}
                    onClick={() => setLightbox(i)}
                    style={{ breakInside: 'avoid', marginBottom: 18, cursor: 'pointer' }}
                  >
                    <Ph variant={img.variant} label={img.label} ratio={r} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridAutoRows: '180px',
              gap: 16,
            }}>
              {filtered.map((img, i) => {
                let span = { gridColumn: 'span 2', gridRow: 'span 2' };
                if (img.span === 'wide') span = { gridColumn: 'span 4', gridRow: 'span 2' };
                if (img.span === 'tall') span = { gridColumn: 'span 2', gridRow: 'span 3' };
                return (
                  <div key={i} onClick={() => setLightbox(i)} style={{ ...span, cursor: 'pointer' }}>
                    <Ph variant={img.variant} label={img.label} style={{ width: '100%', height: '100%' }} />
                  </div>
                );
              })}
            </div>
          )}

          <p className="serif-italic" style={{ fontSize: 17, color: 'var(--taupe-2)', textAlign: 'center', maxWidth: 640, margin: '100px auto 0', lineHeight: 1.6 }}>
            {t(lang, 'portfolio.closing')}
          </p>
        </div>
      </section>

      {lightbox != null && (
        <Lightbox
          img={filtered[lightbox]}
          index={lightbox}
          total={filtered.length}
          lang={lang}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightbox((i) => (i + 1) % filtered.length)}
        />
      )}
    </div>
  );
}

Object.assign(window, { PortfolioPage });
