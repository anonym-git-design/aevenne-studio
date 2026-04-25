// shell.jsx — nav, footer, placeholder helpers, logo, language switcher

// Logo wordmark
function Logo({ onClick, sub }) {
  return (
    <div className="nav-logo" onClick={onClick}>
      <div className="mark">AEVENNE</div>
      <div className="sub">{sub || 'Photography & Films'}</div>
    </div>);

}

function LangSwitch({ lang, onChange }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        className={lang === 'fr' ? 'active' : ''}
        onClick={() => onChange('fr')}
        aria-pressed={lang === 'fr'}>
        FR</button>
      <span className="sep">/</span>
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}>
        EN</button>
    </div>);

}

function Nav({ lang, setLang, route, setRoute, heroDark }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reset scroll on route change — and recompute scrolled state
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setScrolled(false);
  }, [route]);

  const cls = 'nav' + (scrolled ? ' scrolled' : '') + (heroDark ? ' hero-dark' : '');
  const go = (r) => (e) => {e.preventDefault();setRoute(r);};

  const leftLinks = ['about', 'portfolio', 'experience', 'services'];
  const rightLinks = ['forfaits', 'journal', 'contact'];

  return (
    <nav className={cls} data-screen-label="Navigation">
      <div className="nav-left">
        {leftLinks.map((k) =>
        <a key={k} href="#"
        className={'nav-link' + (route === k ? ' active' : '')}
        onClick={go(k)}>
            {t(lang, 'nav.' + k)}
          </a>
        )}
      </div>
      <a href="#" onClick={go('home')} style={{ display: 'block' }}>
        <Logo sub={t(lang, 'logo.sub')} />
      </a>
      <div className="nav-right">
        {rightLinks.map((k) =>
        <a key={k} href="#"
        className={'nav-link' + (route === k ? ' active' : '')}
        onClick={go(k)}>
            {t(lang, 'nav.' + k)}
          </a>
        )}
        <LangSwitch lang={lang} onChange={setLang} />
      </div>
    </nav>);

}

// Striped placeholder — used everywhere instead of real imagery
function Ph({ label, note, variant = '', ratio, style, className = '' }) {
  const s = { ...(style || {}) };
  if (ratio) s.aspectRatio = ratio;
  return (
    <div className={`ph ${variant} ${className}`} style={{ ...s, color: "rgb(246, 242, 232)" }}>
      <div className="ph-label">
        {label}
        {note && <small>{note}</small>}
      </div>
    </div>);

}

// IntersectionObserver fade-in wrapper
function Reveal({ children, delay = 0, as: Tag = 'div', style, className = '' }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref}
    className={`reveal ${shown ? 'in' : ''} ${className}`}
    style={{ transitionDelay: `${delay}ms`, ...(style || {}) }}>
      {children}
    </Tag>);

}

// Footer
function Footer({ lang, setRoute }) {
  const go = (r) => (e) => {e.preventDefault();setRoute(r);};

  return (
    <footer className="footer" style={{ backgroundColor: "rgb(46, 33, 11)" }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 48, paddingBottom: 72 }}>
        <div>
          <div style={{ fontFamily: 'var(--f-display)', fontSize: 32, letterSpacing: '0.14em', marginBottom: 14 }}>AEVENNE</div>
          <div style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--taupe-2)', lineHeight: 1.6, maxWidth: 280 }}>
            {t(lang, 'footer.tagline')}
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 16, fontSize: 10.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(246,241,232,0.55)' }}>
            <a href="#" className="link-u">Instagram</a>
            <a href="#" className="link-u">Pinterest</a>
            <a href="#" className="link-u">Vimeo</a>
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.5)', marginBottom: 18 }}>{t(lang, 'footer.cols.explore')}</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12.5, letterSpacing: '0.06em' }}>
            {['home', 'about', 'portfolio', 'experience', 'journal'].map((k) =>
            <li key={k}><a href="#" onClick={go(k)} className="link-u">{t(lang, 'nav.' + k)}</a></li>
            )}
          </ul>
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.5)', marginBottom: 18 }}>{t(lang, 'footer.cols.services')}</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12.5, letterSpacing: '0.06em' }}>
            {['wedding', 'engagement', 'family', 'maternity', 'newborn', 'videography'].map((k) =>
            <li key={k}><a href="#" onClick={go('services')} className="link-u">{t(lang, 'services.' + k)}</a></li>
            )}
          </ul>
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.5)', marginBottom: 18 }}>{t(lang, 'footer.newsletter_h')}</div>
          <div style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(246,241,232,0.7)', lineHeight: 1.55, marginBottom: 18 }}>
            {t(lang, 'footer.newsletter_d')}
          </div>
          <form style={{ display: 'flex', borderBottom: '1px solid rgba(246,241,232,0.25)', paddingBottom: 8 }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t(lang, 'footer.newsletter_p')}
              style={{ flex: 1, background: 'transparent', border: 0, outline: 'none', color: 'var(--ivory)', fontFamily: 'var(--f-sans)', fontSize: 13, fontWeight: 300, padding: '4px 0' }} />
            
            <button style={{ fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(246,241,232,0.75)' }}>
              →
            </button>
          </form>
        </div>
      </div>

      <div className="mark" style={{ color: 'var(--espresso)' }}>AEVENNE</div>
      <div className="sub" style={{ color: 'var(--taupe-2)' }}>PARIS · FRANCE · WORLDWIDE</div>

      <div className="container" style={{ marginTop: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(246,241,232,0.45)', borderTop: '1px solid rgba(246,241,232,0.1)', paddingTop: 28 }}>
        <div>{t(lang, 'footer.copy')}</div>
        <div style={{ display: 'flex', gap: 28 }}>
          <a href="#" className="link-u">{t(lang, 'footer.legal')}</a>
          <a href="#" className="link-u">{t(lang, 'footer.privacy')}</a>
          <span style={{ opacity: 0.6 }}>{t(lang, 'footer.credits')}</span>
        </div>
      </div>
    </footer>);

}

// Section header block used across pages
function SectionHeader({ eyebrow, title, lede, align = 'left', count }) {
  const center = align === 'center';
  return (
    <div style={{
      textAlign: center ? 'center' : 'left',
      maxWidth: center ? 820 : 'none',
      margin: center ? '0 auto' : 0
    }}>
      {count && <div className="count" style={{ marginBottom: 22 }}>{count}</div>}
      <div className="eyebrow" style={{ marginBottom: 26 }}>{eyebrow}</div>
      <h2 className="display" style={{
        fontSize: 'clamp(38px, 5.2vw, 72px)',
        maxWidth: center ? '100%' : 820,
        marginBottom: lede ? 28 : 0
      }}>{title}</h2>
      {lede &&
      <p className="serif-italic" style={{
        fontSize: 'clamp(17px, 1.4vw, 21px)',
        color: 'var(--taupe-2)',
        maxWidth: 640,
        margin: center ? '0 auto' : 0,
        lineHeight: 1.55
      }}>{lede}</p>
      }
    </div>);

}

Object.assign(window, { Nav, Footer, Logo, LangSwitch, Ph, Reveal, SectionHeader });