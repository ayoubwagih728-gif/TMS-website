import { Link } from 'react-router-dom'
import { Reveal, Counter, Marquee, CTA, FAQ, Icon, ClientMarquee } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang, locNum } from '../i18n.jsx'

const TXT = {
  en: {
    heroMono: 'TMS · Technology for Manufacturing Solutions',
    heroTitle: '<span class="ln"><span>From metal</span></span><em class="ln"><span>into masterpieces.</span></em>',
    heroSub: "Egypt's industrial steel &amp; stainless-steel partner — serving <b>Pepsi, Ezz Steel, SODIC, Americana, Henkel</b> and <b>Air Liquide</b> since 2018.",
    reqQuote: 'Request a Quote →',
    explore: 'Explore Products',
    statFounded: 'Founded',
    statClients: 'Clients',
    statProjects: 'Projects',
    statTeam: 'Team',
    scroll: 'SCROLL',
    marquee: ['METAL FORMING', 'FABRICATION', 'TURNKEY DELIVERY', 'STAINLESS STEEL', 'MAINTENANCE'],
    accH: 'Accountability',
    accP: "One contract, one team — problems don't get passed between vendors.",
    idxWho: '01 / WHO WE ARE',
    whoTitle: 'Built on steel. <em>Scaled on trust.</em>',
    lead: 'We engineer, fabricate <em>&amp; deliver.</em>',
    body: "Since 2018, TMS — Technology for Manufacturing Solutions — has been Egypt's go-to partner for metal forming, fabrication and turnkey industrial projects. We cover production lines, material handling, food processing and public utilities nationwide, with full in-house capability from engineering drawings through on-site commissioning.",
    aboutBtn: 'More About TMS →',
    byNumbers: 'BY THE NUMBERS',
    idxProducts: '02 / PRODUCTS',
    productsTitle: 'Durable metalwork — <em>engineered locally.</em>',
    view: 'VIEW',
    viewAllProducts: 'View All Products →',
    idxFab: '03 / FABRICATION',
    fabTitle: 'Capabilities, <em>under one roof.</em>',
    svc247sm: 'Emergency response &amp; factory maintenance',
    allServices: 'All Services →',
    idxProjects: '04 / PROJECTS',
    projectsTitle: "What we've <em>actually built.</em>",
    fullGallery: 'Full Project Gallery →',
    clientLabel: 'TRUSTED BY THE NAMES THAT BUILD EGYPT',
    idxMv: '05 / MISSION &amp; VISION',
    mvTitle: 'What drives <em>TMS.</em>',
    missionLab: 'MISSION',
    missionTitle: 'Replace expensive imports <em>with local precision.</em>',
    missionP: "We deliver European-standard fabrication at Egyptian economics — engineering, building and installing the industrial steel and stainless systems Egypt's largest manufacturers, developers and operators rely on, all under one roof.",
    visionLab: 'VISION',
    visionTitle: "Shape Egypt's <em>steel future.</em>",
    visionP: "To be the partner Egyptian industry calls first — not because we're the cheapest, but because we're the one operations teams stop calling about after install. Compliance-grade quality, long-term partnerships, no shortcuts.",
    certsHeading: 'QUALITY &amp; COMPLIANCE STANDARDS',
    cert1H: 'Food-Safety Grade',
    cert1P: '316-stainless construction, TIG welds, integrated CIP — dairy &amp; FMCG hygiene.',
    cert2H: 'Fire-Rated Systems',
    cert2P: 'Garbage chutes, fire tanks, emergency doors — built to fire-code requirements.',
    cert3H: 'Structural Engineering',
    cert3P: 'Hangars &amp; warehouses to structural-load standards with stamped drawings.',
    certsView: 'VIEW FULL QUALITY &amp; STANDARDS →',
    idxLatest: '06 / LATEST',
    newsTitle: 'Recent <em>completions.</em>',
    readMore: 'READ MORE →',
    allUpdates: 'All Updates →',
    faqLabel: 'FAQ',
    faqTitle: 'Common <em>questions.</em>',
    faqP: "Buying industrial steel and stainless systems is high-stakes work — these are the questions decision-makers ask us most often. If yours isn't here, talk to our engineering team directly.",
    faqBtn: 'Ask the Team →',
    ctaTitle: "Let's build <em>something.</em>",
    ctaSub: 'Request a site visit, a quote, or a conversation with our engineering team — we respond within one business day.',
    ctaButton: 'Get in Touch',
  },
  ar: {
    heroMono: 'TMS · التكنولوجيا لحلول التصنيع',
    heroTitle: '<span class="ln"><span>من المعدن</span></span><em class="ln"><span>نصنع الروائع.</span></em>',
    heroSub: 'شريك مصر الصناعي في الحديد والستانلس ستيل — نخدم <b>Pepsi وEzz Steel وSODIC وAmericana وHenkel</b> و<b>Air Liquide</b> منذ 2018.',
    reqQuote: 'اطلب عرض سعر →',
    explore: 'استكشف المنتجات',
    statFounded: 'تأسّست',
    statClients: 'عملاء',
    statProjects: 'مشروع',
    statTeam: 'فريق',
    scroll: 'انزل للأسفل',
    marquee: ['تشكيل المعادن', 'التصنيع المعدني', 'تسليم مفتاح', 'الستانلس ستيل', 'الصيانة'],
    accH: 'المسؤولية',
    accP: 'عقد واحد وفريق واحد — لا تُحال المشكلات بين موردين متعددين.',
    idxWho: '01 / من نحن',
    whoTitle: 'قوة من حديد. <em>ثقة تتّسع.</em>',
    lead: 'نصمّم ونصنّع <em>ونُسلّم.</em>',
    body: 'منذ عام 2018، أصبحت TMS — التكنولوجيا لحلول التصنيع — الشريك المفضّل في مصر لتشكيل المعادن والتصنيع المعدني والمشروعات الصناعية المتكاملة تسليم مفتاح. نغطي خطوط الإنتاج ومناولة المواد وتصنيع الأغذية والمرافق العامة على مستوى الجمهورية، بقدرات داخلية كاملة من الرسومات الهندسية حتى التشغيل في الموقع.',
    aboutBtn: 'المزيد عن TMS →',
    byNumbers: 'بالأرقام',
    idxProducts: '02 / المنتجات',
    productsTitle: 'أعمال معدنية متينة — <em>بتصميم محلي.</em>',
    view: 'عرض',
    viewAllProducts: 'عرض كل المنتجات →',
    idxFab: '03 / التصنيع المعدني',
    fabTitle: 'قدرات <em>تحت سقف واحد.</em>',
    svc247sm: 'استجابة للطوارئ وصيانة المصانع',
    allServices: 'كل الخدمات →',
    idxProjects: '04 / المشروعات',
    projectsTitle: 'ما بنيناه <em>فعلاً.</em>',
    fullGallery: 'معرض المشروعات كامل →',
    clientLabel: 'موضع ثقة الأسماء التي تبني مصر',
    idxMv: '05 / المهمة والرؤية',
    mvTitle: 'ما يقود <em>TMS.</em>',
    missionLab: 'المهمة',
    missionTitle: 'نستبدل الواردات الباهظة <em>بدقّة محلية.</em>',
    missionP: 'نقدّم تصنيعاً بمعايير أوروبية وباقتصاديات مصرية — نصمّم ونبني ونركّب أنظمة الحديد والستانلس الصناعية التي يعتمد عليها كبار المصنّعين والمطوّرين والمشغّلين في مصر، وكل ذلك تحت سقف واحد.',
    visionLab: 'الرؤية',
    visionTitle: 'نصنع <em>مستقبل الحديد في مصر.</em>',
    visionP: 'أن نكون الشريك الأول الذي تتّصل به الصناعة المصرية — ليس لأننا الأرخص، بل لأننا الجهة التي تتوقّف فرق التشغيل عن الاتصال بشأنها بعد التركيب. جودة مطابقة للمعايير، وشراكات طويلة الأمد، ودون حلول التفافية.',
    certsHeading: 'معايير الجودة والمطابقة',
    cert1H: 'درجة سلامة غذائية',
    cert1P: 'تصنيع من ستانلس 316، ولحام TIG، ونظام CIP مدمج — لنظافة الألبان والسلع الاستهلاكية.',
    cert2H: 'أنظمة مقاومة للحريق',
    cert2P: 'مزالق النفايات وخزانات الحريق وأبواب الطوارئ — مصمّمة وفق متطلبات أكواد الحريق.',
    cert3H: 'هندسة إنشائية',
    cert3P: 'الهناجر والمستودعات وفق معايير الأحمال الإنشائية مع رسومات معتمدة.',
    certsView: 'عرض الجودة والمعايير كاملة →',
    idxLatest: '06 / الأحدث',
    newsTitle: 'إنجازات <em>حديثة.</em>',
    readMore: 'اقرأ المزيد →',
    allUpdates: 'كل الأخبار →',
    faqLabel: 'الأسئلة الشائعة',
    faqTitle: 'أسئلة <em>شائعة.</em>',
    faqP: 'شراء أنظمة الحديد والستانلس الصناعية قرار عالي المخاطر — وهذه هي الأسئلة التي يطرحها علينا صنّاع القرار أكثر من غيرها. وإن لم تجد سؤالك هنا، تحدّث إلى فريقنا الهندسي مباشرة.',
    faqBtn: 'اسأل الفريق →',
    ctaTitle: 'لنبنِ <em>شيئاً معاً.</em>',
    ctaSub: 'اطلب زيارة ميدانية أو عرض سعر أو محادثة مع فريقنا الهندسي — نردّ خلال يوم عمل واحد.',
    ctaButton: 'تواصل معنا',
  },
}

export default function Home() {
  const { lang, C } = useLang()
  const { stats, values, products, services, projects, clients, faqs, news } = C
  const t = TXT[lang]
  const featuredProjects = projects.slice(0, 3)
  const featuredNews = news.slice(0, 3)
  const featuredProducts = products.slice(0, 8)
  const valueIcons = [Icon.Star, Icon.Sliders, Icon.Leaf, Icon.Shield]
  const valuesPlus = [...values, { h: t.accH, p: t.accP }]

  return (
    <>
      {/* 1. HERO */}
      <section className="hero" id="top">
        <div className="hero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap hero-inner">
          <div className="hero-tag">
            <span className="rule"></span>
            <span className="mono">{t.heroMono}</span>
          </div>
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.heroTitle }}></h1>
          <p className="hero-sub" dangerouslySetInnerHTML={{ __html: t.heroSub }}></p>
          <div className="hero-actions">
            <Link className="btn white" to="/contact">{t.reqQuote}</Link>
            <Link className="btn ghost" to="/products">{t.explore}</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="num">{locNum(2018, lang)}</div><div className="lbl">{t.statFounded}</div></div>
            <div className="stat"><div className="num"><Counter to={50} suffix="+" /></div><div className="lbl">{t.statClients}</div></div>
            <div className="stat"><div className="num"><Counter to={200} suffix="+" /></div><div className="lbl">{t.statProjects}</div></div>
            <div className="stat"><div className="num"><Counter to={80} suffix="+" /></div><div className="lbl">{t.statTeam}</div></div>
          </div>
        </div>
        <div className="scroll-hint"><span>{t.scroll}</span><span className="dot"></span></div>
      </section>

      <Marquee items={t.marquee} />

      {/* 2. VALUE-PROP PILLS (4-up, near top — canonical pattern) */}
      <section className="vpills">
        <div className="wrap">
          <Reveal className="vpills-grid">
            {valuesPlus.map((v, i) => {
              const Ic = valueIcons[i] || Icon.Check
              return (
                <div className="vpill" key={v.h}>
                  <div className="ico"><Ic /></div>
                  <h4>{v.h}</h4><p>{v.p}</p>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* 3. ABOUT TEASER + STATS PANEL */}
      <section className="about-teaser pad">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="idx">{t.idxWho}</span>
            <h2 className="ht" dangerouslySetInnerHTML={{ __html: t.whoTitle }}></h2>
          </Reveal>
          <div className="about-teaser-grid">
            <Reveal>
              <p className="lead" dangerouslySetInnerHTML={{ __html: t.lead }}></p>
              <p className="body">{t.body}</p>
              <p style={{marginTop:24}}><Link className="btn" to="/about">{t.aboutBtn}</Link></p>
            </Reveal>
            <Reveal className="about-stats" delay={140}>
              <h5>{t.byNumbers}</h5>
              <div className="stat-grid">
                {stats.map(s => (
                  <div className="s" key={s.label}>
                    <div className="n"><Counter to={s.n} suffix={s.suffix} /></div>
                    <div className="l">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS showcase */}
      <section className="products-band pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.idxProducts}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.productsTitle }}></h2></Reveal>
          <Reveal className="pgrid">
            {featuredProducts.map(p => {
              const Ic = Icon[p.icon] || Icon.Check
              return (
                <Link to={`/products/${p.slug}`} className="pitem" key={p.slug}>
                  <div className="ico"><Ic /></div>
                  <h4>{p.h}</h4>
                  <p>{p.short}</p>
                  <div className="more">{t.view} <span>→</span></div>
                </Link>
              )
            })}
          </Reveal>
          <Reveal style={{textAlign:'center',marginTop:36}}><Link className="btn" to="/products">{t.viewAllProducts}</Link></Reveal>
        </div>
      </section>

      {/* 5. SERVICES — how we work */}
      <section className="svc pad">
        <div className="wrap">
          <div className="svc-top">
            <Reveal className="sec-head" style={{marginBottom:0}}><span className="idx">{t.idxFab}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.fabTitle }}></h2></Reveal>
            <Reveal className="svc-247"><span className="big">24/7</span><span className="sm">{t.svc247sm}</span></Reveal>
          </div>
          <Reveal>
            {services.map(s => (
              <div className="svc-row" key={s.n}>
                <span className="sn">{s.n}</span>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </Reveal>
          <Reveal style={{textAlign:'center',marginTop:34}}><Link className="btn dark" to="/services">{t.allServices}</Link></Reveal>
        </div>
      </section>

      {/* 6. PROJECTS gallery preview */}
      <section className="projects-band pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.idxProjects}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.projectsTitle }}></h2></Reveal>
          <Reveal className="proj-grid">
            {featuredProjects.map(p => (
              <Link key={p.slug} to="/projects" className="proj-card">
                <span className="arrow">→</span>
                <div className="ptag">{p.sector}</div>
                <div className="pclient">{p.client}</div>
                <h4>{p.h}</h4>
                <p>{p.short}</p>
              </Link>
            ))}
          </Reveal>
          <Reveal style={{textAlign:'center',marginTop:36}}><Link className="btn" to="/projects">{t.fullGallery}</Link></Reveal>
        </div>
      </section>

      {/* 7. CLIENT LOGOS — auto-scrolling marquee */}
      <ClientMarquee label={t.clientLabel} items={[...clients.realEstate, ...clients.industrial]} duration={40} />

      {/* 8. MISSION & VISION */}
      <section className="mv pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx" dangerouslySetInnerHTML={{ __html: t.idxMv }}></span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.mvTitle }}></h2></Reveal>
          <div className="mv-grid">
            <Reveal className="mv-card">
              <div className="ico"><Icon.Target /></div>
              <div className="lab">{t.missionLab}</div>
              <h3 dangerouslySetInnerHTML={{ __html: t.missionTitle }}></h3>
              <p>{t.missionP}</p>
            </Reveal>
            <Reveal className="mv-card" delay={140}>
              <div className="ico"><Icon.Eye /></div>
              <div className="lab">{t.visionLab}</div>
              <h3 dangerouslySetInnerHTML={{ __html: t.visionTitle }}></h3>
              <p>{t.visionP}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS / STANDARDS strip */}
      <section className="certs">
        <div className="wrap">
          <Reveal as="h5" dangerouslySetInnerHTML={{ __html: t.certsHeading }}></Reveal>
          <Reveal className="certs-grid">
            <div className="cert"><div className="ico"><Icon.Award /></div><h6>{t.cert1H}</h6><p dangerouslySetInnerHTML={{ __html: t.cert1P }}></p></div>
            <div className="cert"><div className="ico"><Icon.Flame /></div><h6>{t.cert2H}</h6><p dangerouslySetInnerHTML={{ __html: t.cert2P }}></p></div>
            <div className="cert"><div className="ico"><Icon.Structure /></div><h6>{t.cert3H}</h6><p dangerouslySetInnerHTML={{ __html: t.cert3P }}></p></div>
          </Reveal>
          <Reveal style={{textAlign:'center',marginTop:30}}><Link to="/quality" style={{fontFamily:'var(--mono)',fontSize:12,letterSpacing:'.18em',color:'var(--red)',fontWeight:600}} dangerouslySetInnerHTML={{ __html: t.certsView }}></Link></Reveal>
        </div>
      </section>

      {/* 10. NEWS preview */}
      <section className="news-band pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.idxLatest}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.newsTitle }}></h2></Reveal>
          <Reveal className="news-grid">
            {featuredNews.map((n, i) => (
              <Link key={i} to="/news" className="news-card">
                <div className="nhdr"><span className="ntag">{n.tag}</span><span>{n.date}</span></div>
                <div className="nbody">
                  <h4>{n.h}</h4>
                  <p>{n.p}</p>
                  <span className="read">{t.readMore}</span>
                </div>
              </Link>
            ))}
          </Reveal>
          <Reveal style={{textAlign:'center',marginTop:36}}><Link className="btn" to="/news">{t.allUpdates}</Link></Reveal>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="faq-band pad">
        <div className="wrap">
          <div className="faq-grid">
            <Reveal className="faq-intro">
              <p className="mono" style={{color:'var(--red)',marginBottom:14}}>{t.faqLabel}</p>
              <h3 dangerouslySetInnerHTML={{ __html: t.faqTitle }}></h3>
              <p>{t.faqP}</p>
              <Link className="btn" to="/contact">{t.faqBtn}</Link>
            </Reveal>
            <Reveal delay={140}><FAQ items={faqs} /></Reveal>
          </div>
        </div>
      </section>

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
