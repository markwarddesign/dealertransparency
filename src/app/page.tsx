import Link from 'next/link';

function SectionIndex({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.12em',
          color: 'var(--color-accent-deep)',
          fontWeight: 600,
        }}
      >
        {n}
      </span>
      <span style={{ width: '24px', height: '1px', background: 'var(--color-rule)' }} />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

const products = [
  {
    code: 'RADAR',
    title: 'Behavioral engagement layer',
    name: 'Retention & Advertising Drip',
    body: 'Automated messaging that works 24/7 inside your CRM, nurturing leads for months after everyone else gives up.',
    href: '/radar',
    cta: 'Read the brief',
    status: 'available' as const,
  },
  {
    code: 'PACE',
    title: 'Inventory acquisition from service',
    name: 'Premium Acquisition & Exchange',
    body: 'Turn service customers into inventory sources. Acquire high-demand vehicles before they hit the open market.',
    href: '#',
    cta: 'Coming soon',
    status: 'soon' as const,
  },
  {
    code: 'MILES',
    title: 'Transparent monthly investment',
    name: 'Monthly Investment & Lifetime Savings',
    body: 'Show customers their true monthly investment and lifetime savings. Make every deal crystal clear.',
    href: 'https://miles.dealertransparency.com/',
    cta: 'Try it now',
    status: 'external' as const,
  },
];

const stats = [
  { figure: '$5M', label: 'PACE annual revenue', note: 'Per dealer group, per year' },
  { figure: '70%+', label: 'Internet-lead contact rate', note: 'Sustained across cohorts' },
  { figure: '$3M', label: 'RADAR annual revenue', note: 'Recovered from cold + lost' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-24) var(--space-6) var(--space-20)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-6)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.16em',
                color: 'var(--color-accent-deep)',
                fontWeight: 600,
              }}
            >
              RPM
            </span>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-rule)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              Revenue Performance Management
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 1.02,
              color: 'var(--color-ink)',
              margin: '0 0 var(--space-6)',
            }}
          >
            A suite of tools that recovers the revenue your dealership already earned.
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.5,
              color: 'var(--color-muted)',
              maxWidth: '60ch',
              margin: '0 0 var(--space-10)',
            }}
          >
            RADAR, PACE, and MILES are three integrated products built on thirty years of dealership operations.
            They work where salespeople, AI tools, and CRM workflows give up.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <a href="#solutions" className="btn btn-ink">Explore the suite</a>
            <a
              href="mailto:ward.matt@me.com?subject=Dealer%20Transparency%20-%20Conversation"
              className="btn btn-ghost"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────── */}
      <section
        id="solutions"
        style={{
          borderTop: 'var(--rule)',
          padding: 'var(--space-20) var(--space-6)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-12)', maxWidth: '60ch' }}>
            <SectionIndex n="01" label="The Suite" />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h1)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--color-ink)',
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              Three products. One operating model.
            </h2>
            <p style={{ color: 'var(--color-muted)', margin: 0 }}>
              Each tool addresses a measurable revenue leak. They share the same approach: read the data the CRM
              already has, act when humans and AI stop, and stay out of the way.
            </p>
          </div>

          <div className="solutions-grid">
            {products.map((p, i) => (
              <article
                key={p.code}
                style={{
                  background: 'var(--color-paper-2)',
                  border: 'var(--rule)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-8)',
                  display: 'grid',
                  gap: 'var(--space-4)',
                  alignContent: 'start',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: 'var(--space-4)',
                    borderBottom: 'var(--rule)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.14em',
                      color: 'var(--color-muted-2)',
                    }}
                  >
                    0{i + 1} / 03
                  </span>
                  {p.status === 'soon' && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-muted)',
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {p.code}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 'var(--text-h3)',
                    fontWeight: 600,
                    color: 'var(--color-ink)',
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent-deep)',
                    margin: 0,
                  }}
                >
                  {p.name}
                </p>
                <p style={{ color: 'var(--color-muted)', margin: 0, lineHeight: 1.55 }}>
                  {p.body}
                </p>
                <div style={{ marginTop: 'var(--space-2)' }}>
                  {p.status === 'soon' ? (
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted-2)' }}>
                      Available 2026
                    </span>
                  ) : p.status === 'external' ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-accent-deep)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--color-accent)',
                        paddingBottom: '2px',
                      }}
                    >
                      {p.cta} →
                    </a>
                  ) : (
                    <Link
                      href={p.href}
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-accent-deep)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--color-accent)',
                        paddingBottom: '2px',
                      }}
                    >
                      {p.cta} →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────── */}
      <section
        id="results"
        style={{
          borderTop: 'var(--rule)',
          padding: 'var(--space-20) var(--space-6)',
          background: 'var(--color-paper-2)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-12)', maxWidth: '60ch' }}>
            <SectionIndex n="02" label="Results" />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h1)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--color-ink)',
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              Measurable impact from real dealer groups.
            </h2>
          </div>

          <div className="stats-grid">
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  borderTop: '2px solid var(--color-ink)',
                  paddingTop: 'var(--space-5)',
                  display: 'grid',
                  gap: 'var(--space-2)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    color: 'var(--color-ink)',
                    lineHeight: 1,
                  }}
                >
                  {s.figure}
                </div>
                <div style={{ fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--color-ink)' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
                  {s.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: 'var(--color-paper-dark)',
          color: '#fff',
          padding: 'var(--space-24) var(--space-6)',
        }}
      >
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            display: 'grid',
            gap: 'var(--space-6)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
            }}
          >
            Free analysis
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h1)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Ready to see what your dealership is leaving on the table?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-body)', margin: 0, maxWidth: '52ch' }}>
            We&rsquo;ll review your current operations and identify the hidden opportunities — no commitment, no slide deck.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <a
              href="mailto:ward.matt@me.com?subject=Dealer%20Transparency%20-%20Free%20Analysis"
              className="btn btn-primary"
            >
              Request a free analysis
            </a>
            <a href="tel:425-985-8227" className="btn btn-ghost-inverse">
              425-985-8227
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .solutions-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: var(--space-6);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: var(--space-10);
        }
        @media (min-width: 720px) {
          .stats-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 900px) {
          .solutions-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
    </>
  );
}
