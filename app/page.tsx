import HeroScene from "@/components/HeroScene";
import Reveal from "@/components/Reveal";
import { site, services, team, steps, faqs } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
        areaServed: site.country,
        makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.text } })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="header">
        <div className="container">
          <a href="#top" className="logo" aria-label={site.name}>⛰️ Skyline<span>Squad</span></a>
          <nav className="nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#team">Team</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="btn">Get a quote</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow fade-up d1">Rope access · Facades · Roofs · Towers</p>
              <h1 className="fade-up d2">High-altitude work, <em>done right.</em></h1>
              <p className="lead fade-up d3">
                We are a certified four-person rope-access squad. We clean, repair, inspect and install
                wherever cranes and scaffolding can&apos;t go, safely, quickly and at a fair price.
              </p>
              <div className="cta-row fade-up d4">
                <a href="#contact" className="btn">Request free assessment →</a>
                <a href="#services" className="btn ghost">See services</a>
              </div>
              <div className="badges fade-up d4">
                <span className="badge">✔ Certified team</span>
                <span className="badge">✔ Insured</span>
                <span className="badge">✔ No scaffolding needed</span>
              </div>
            </div>
            <HeroScene />
          </div>
        </section>

        <section className="alt">
          <div className="container stats">
            <Reveal><strong>4</strong><span>Specialists in the squad</span></Reveal>
            <Reveal delay={100}><strong>120 m+</strong><span>Max working height</span></Reveal>
            <Reveal delay={200}><strong>300+</strong><span>Jobs completed</span></Reveal>
            <Reveal delay={300}><strong>0</strong><span>Accidents</span></Reveal>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <Reveal>
              <p className="eyebrow">What we do</p>
              <h2>Services at height</h2>
              <p className="lead">One small team for every job above ground level.</p>
            </Reveal>
            <div className="grid g3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <article className="card">
                    <div className="icon" aria-hidden>{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="alt">
          <div className="container">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2>From call to clean handover</h2>
            </Reveal>
            <div className="grid g4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="card">
                    <div className="step-n">{s.n}</div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="team">
          <div className="container">
            <Reveal>
              <p className="eyebrow">The squad</p>
              <h2>Four people. One rope team.</h2>
              <p className="lead">Small team means direct communication, consistent quality and full accountability.</p>
            </Reveal>
            <div className="grid g4">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 100}>
                  <article className="card">
                    <div className="avatar" aria-hidden>{m.name[0]}</div>
                    <h3>{m.name}</h3>
                    <p className="role">{m.role}</p>
                    <p>{m.bio}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="alt">
          <div className="container" style={{ maxWidth: 760 }}>
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2>Good to know</h2>
            </Reveal>
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2>Need someone at height?</h2>
              <p className="lead" style={{ margin: "0 auto" }}>
                Send us photos and the address. We&apos;ll reply with a quote within 24 hours.
              </p>
              <div className="cta-row" style={{ marginTop: 28 }}>
                <a className="btn" href={`tel:${site.phone.replace(/\s/g, "")}`}>📞 {site.phone}</a>
                <a className="btn ghost" href={`mailto:${site.email}`}>✉️ {site.email}</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">© {new Date().getFullYear()} {site.name} · {site.city}, Serbia</div>
      </footer>
    </>
  );
}
