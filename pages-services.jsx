// pages-services.jsx

const SERVICE_DETAILS_FR = {
  wedding: { included: ['Consultation personnalisée', 'Couverture de 8 à 12 heures', 'Galerie privée en ligne', 'Retouches sur l\u2019ensemble des images'], addons: ['Second photographe', 'Album relié main', 'Tirages fine art'] },
  engagement: { included: ['Séance de 90 minutes', 'Repérage du lieu ensemble', '50 images retouchées', 'Galerie privée en ligne'], addons: ['Tirages encadrés', 'Séance couple vidéo'] },
  family: { included: ['Séance de 60 minutes', 'Direction douce & naturelle', '40 images retouchées', 'Galerie privée en ligne'], addons: ['Tirages grand format', 'Livre photo relié'] },
  maternity: { included: ['Séance de 75 minutes', 'Lumière naturelle ou studio', '40 images retouchées', 'Galerie privée en ligne'], addons: ['Séance nouveau-né associée'] },
  newborn: { included: ['Séance à domicile 2 heures', 'Portraits parents-bébé inclus', '50 images retouchées'], addons: ['Livre photo relié', 'Tirages assortis'] },
  events: { included: ['Couverture jusqu\u2019à 4 heures', 'Reportage candide', '80 à 120 images retouchées', 'Galerie privée'], addons: ['Portraits studio', 'Film événement'] },
  lifestyle: { included: ['Direction artistique complète', 'Stylisme & repérage', 'Livrables éditoriaux'], addons: ['Vidéo courte', 'Redéfinition de marque'] },
  videography: { included: ['Film long 4 à 8 minutes', 'Film court 60 secondes', 'Son en direct & musique sous licence', 'Livraison 4K'], addons: ['Film des préparatifs', 'Interviews des proches'] },
};

const SERVICE_DETAILS_EN = {
  wedding: { included: ['Personal consultation', '8 to 12 hours coverage', 'Private online gallery', 'Full retouching on all images'], addons: ['Second photographer', 'Hand-bound album', 'Fine-art prints'] },
  engagement: { included: ['90-minute session', 'Location scouting together', '50 retouched images', 'Private online gallery'], addons: ['Framed prints', 'Couple video session'] },
  family: { included: ['60-minute session', 'Gentle, natural direction', '40 retouched images', 'Private online gallery'], addons: ['Large format prints', 'Bound photo book'] },
  maternity: { included: ['75-minute session', 'Natural light or studio', '40 retouched images', 'Private online gallery'], addons: ['Paired newborn session'] },
  newborn: { included: ['2-hour in-home session', 'Parent & baby portraits included', '50 retouched images'], addons: ['Bound photo book', 'Matching prints'] },
  events: { included: ['Up to 4 hours coverage', 'Candid reportage', '80 to 120 retouched images', 'Private gallery'], addons: ['Studio portraits', 'Event film'] },
  lifestyle: { included: ['Full art direction', 'Styling & scouting', 'Editorial deliverables'], addons: ['Short video', 'Brand refresh'] },
  videography: { included: ['Long film 4 to 8 minutes', 'Short film 60 seconds', 'Live sound & licensed music', '4K delivery'], addons: ['Prep-day film', 'Family interviews'] },
};

function ServiceRow({ lang, k, variant, idx }) {
  const details = (lang === 'fr' ? SERVICE_DETAILS_FR : SERVICE_DETAILS_EN)[k];
  return (
    <Reveal>
      <div style={{
        display: 'grid',
        gridTemplateColumns: idx % 2 === 0 ? '1.3fr 1fr' : '1fr 1.3fr',
        gap: 64,
        padding: '64px 0',
        borderTop: '1px solid var(--hairline)',
        alignItems: 'center',
      }}>
        <Ph variant={variant} label={t(lang, 'services.' + k).toLowerCase()} ratio="5/4" style={{ order: idx % 2 === 0 ? 0 : 1 }} />
        <div>
          <div className="count" style={{ marginBottom: 18 }}>0{idx + 1}</div>
          <h3 className="display" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', lineHeight: 1.05, marginBottom: 22 }}>
            {t(lang, 'services.' + k)}
          </h3>
          <p className="serif-italic" style={{ fontSize: 18, color: 'var(--taupe-2)', lineHeight: 1.55, marginBottom: 36, maxWidth: 520 }}>
            {t(lang, 'serviceDesc.' + k)}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>{t(lang, 'servicesPage.included')}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {details.included.map((x, i) => (
                  <li key={i} style={{ fontSize: 14.5, display: 'flex', gap: 10, color: 'var(--espresso)' }}>
                    <span style={{ color: 'var(--taupe)' }}>—</span>{x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>{t(lang, 'servicesPage.addons')}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {details.addons.map((x, i) => (
                  <li key={i} style={{ fontSize: 14.5, display: 'flex', gap: 10, color: 'var(--espresso)' }}>
                    <span style={{ color: 'var(--taupe)' }}>+</span>{x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ServicesPage({ lang, setRoute }) {
  const wedding = [
    { k: 'wedding', variant: 'warm' },
    { k: 'videography', variant: 'dark' },
    { k: 'engagement', variant: '' },
  ];
  const lifestyle = [
    { k: 'family', variant: 'warm' },
    { k: 'maternity', variant: 'cool' },
    { k: 'newborn', variant: '' },
    { k: 'events', variant: 'dark' },
    { k: 'lifestyle', variant: 'warm' },
  ];

  return (
    <div className="route">
      <section style={{ padding: '180px 0 80px' }}>
        <div className="container">
          <Reveal>
            <div className="count" style={{ marginBottom: 28 }}>— 04 / 04</div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>{t(lang, 'servicesPage.eyebrow')}</div>
            <h1 className="display" style={{ fontSize: 'clamp(48px, 6.4vw, 92px)', lineHeight: 1, maxWidth: 1100 }}>
              {t(lang, 'servicesPage.title')}
            </h1>
            <p className="serif-italic" style={{ fontSize: 21, color: 'var(--taupe-2)', maxWidth: 620, marginTop: 40, lineHeight: 1.55 }}>
              {t(lang, 'servicesPage.lede')}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid var(--espresso)', paddingBottom: 20, marginBottom: 0 }}>
              <h2 className="display" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>{t(lang, 'servicesPage.wedding_title')}</h2>
              <div className="serif-italic" style={{ fontSize: 16, color: 'var(--taupe-2)' }}>{t(lang, 'servicesPage.wedding_sub')}</div>
            </div>
          </Reveal>
          {wedding.map((s, i) => <ServiceRow key={s.k} lang={lang} k={s.k} variant={s.variant} idx={i} />)}
        </div>
      </section>

      <section style={{ padding: '80px 0 120px', background: 'var(--ivory-2)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid var(--espresso)', paddingBottom: 20 }}>
              <h2 className="display" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>{t(lang, 'servicesPage.lifestyle_title')}</h2>
              <div className="serif-italic" style={{ fontSize: 16, color: 'var(--taupe-2)' }}>{t(lang, 'servicesPage.lifestyle_sub')}</div>
            </div>
          </Reveal>
          {lifestyle.map((s, i) => <ServiceRow key={s.k} lang={lang} k={s.k} variant={s.variant} idx={i} />)}
          <div style={{ borderTop: '1px solid var(--hairline)' }} />
        </div>
      </section>

      <section style={{ padding: '120px 0 160px', textAlign: 'center' }}>
        <div className="container-narrow">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>—</div>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, marginBottom: 40 }}>
              {lang === 'fr' ? 'Consulter l\u2019investissement détaillé' : 'View the detailed investment'}
            </h2>
            <button className="btn solid" onClick={() => setRoute('forfaits')}>
              {lang === 'fr' ? 'Nos forfaits' : 'Our collections'} <span className="arrow" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServicesPage });
