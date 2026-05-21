'use client';

import { useState } from 'react';

type TabId = 'problem' | 'why' | 'radar' | 'how' | 'outcome';

const tabs: { id: TabId; label: string; heading: string; body: string; bullets: string[]; close?: string }[] = [
  {
    id: 'problem',
    label: 'Why leads go silent',
    heading: 'The problem no one sees',
    body:
      "Most customers don't go silent because they already purchased — they go silent because follow-up ends too early. Without a process change, most leads end up in cold or lost status within just 14–30 days. The CRM closes them long before many of these customers are actually out of the market.",
    bullets: [
      'Follow-up typically stops after just a few days of no response',
      'CRM automation moves leads to cold or lost at preset inactivity thresholds',
      'AI workflows end early because they focus on appointment-first engagement',
      "Customers buy on their own timeline — not the dealership's",
      'The cold/lost pool grows larger every single month',
    ],
  },
  {
    id: 'why',
    label: 'Why follow-up breaks down',
    heading: 'Why traditional follow-up fails',
    body:
      'Salespeople, AI tools, and CRM workflows handle the short term well. But none were designed for the long, slow, unpredictable buying cycle customers follow today. Salespeople and CRM systems often interpret silence as disinterest, causing leads to be closed too early.',
    bullets: [
      "Salespeople naturally prioritize today's buyers",
      'AI tools focus on early engagement and quick appointment asks',
      'Salespeople and CRM systems often close leads too early due to silence',
      'Customers pause, research, and return weeks or months later',
      'Each month, more good customers get swept into cold or lost status',
    ],
    close: "Traditional follow-up isn't built for long-term patience or timing-based re-engagement.",
  },
  {
    id: 'radar',
    label: 'Where RADAR takes over',
    heading: 'Where RADAR takes over',
    body:
      'RADAR activates exactly where salespeople stop, where AI finishes, and where the CRM is about to close the opportunity. It fills the long-term gap no existing system covers.',
    bullets: [
      'Maintains friendly, low-pressure dialogue over time',
      'Stays with customers until their timing aligns',
      'Prevents leads from slipping into cold or lost prematurely',
      'Intercepts customers before CRM automation closes them out',
      'Converts a compounding cold/lost pool into a compounding pipeline of opportunity',
    ],
    close: "RADAR doesn't push — it stays present.",
  },
  {
    id: 'how',
    label: 'How RADAR actually works',
    heading: 'How RADAR works behind the scenes',
    body:
      'RADAR reads customer behavior inside your CRM and engages using simple, human-sounding messages at the moments when traditional follow-up disappears.',
    bullets: [
      'Monitors timing signals',
      'Uses silence as "not yet," not "no"',
      'Detects inactivity before auto-close rules trigger',
      'Sends natural check-ins rather than appointment pressure',
      'Scales every month as more long-term customers accumulate',
    ],
    close: 'The longer RADAR runs, the stronger it becomes.',
  },
  {
    id: 'outcome',
    label: "The revenue you're losing",
    heading: "The outcome: revenue that would've never happened",
    body:
      'RADAR re-engages customers who still intended to buy but were pushed into cold or lost status long before their buying cycle ended.',
    bullets: [
      'Reopens conversations with long-cycle buyers',
      'Revives opportunities the CRM buried too early',
      'Surfaces meaningful revenue that was previously unreachable',
      'Builds a growing reservoir of warm customers over time',
      'Converts long-term silence into long-term opportunity',
    ],
    close: 'RADAR turns abandoned revenue into recovered opportunity.',
  },
];

function RadarArcs({ origin = 'bottom' }: { origin?: 'bottom' | 'top' }) {
  const cy = origin === 'bottom' ? 850 : -50;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.18,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <radialGradient id="rd" cx="50%" cy="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="1" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[700, 550, 400, 250].map((r, i) => (
        <circle
          key={r}
          cx="600"
          cy={cy}
          r={r}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={3 - i * 0.5}
          opacity={0.5 - i * 0.05}
        />
      ))}
      <circle cx="600" cy={origin === 'bottom' ? 700 : 100} r="18" fill="url(#rd)" />
      <circle cx="400" cy={origin === 'bottom' ? 600 : 200} r="14" fill="url(#rd)" opacity="0.8" />
      <circle cx="800" cy={origin === 'bottom' ? 600 : 200} r="14" fill="url(#rd)" opacity="0.8" />
      <circle cx="300" cy={origin === 'bottom' ? 450 : 350} r="12" fill="url(#rd)" opacity="0.7" />
      <circle cx="900" cy={origin === 'bottom' ? 450 : 350} r="12" fill="url(#rd)" opacity="0.7" />
    </svg>
  );
}

export default function RadarPage() {
  const [active, setActive] = useState<TabId>('problem');
  const [openAccordion, setOpenAccordion] = useState<TabId | null>('problem');

  const current = tabs.find((t) => t.id === active)!;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          background: 'var(--color-paper-dark)',
          color: '#fff',
          padding: 'var(--space-24) var(--space-6) var(--space-24)',
          overflow: 'hidden',
        }}
      >
        <RadarArcs origin="bottom" />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              display: 'inline-block',
              marginBottom: 'var(--space-5)',
            }}
          >
            RADAR · Retention & Advertising Drip
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              margin: '0 0 var(--space-6)',
            }}
          >
            Behavioral engagement layer inside your CRM.
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.78)', margin: '0 auto var(--space-4)', maxWidth: '52ch' }}>
            Quietly works mid- and long-term customers who go silent — recovering abandoned revenue.
          </p>
          <p style={{ fontSize: 'var(--text-body)', color: 'rgba(255,255,255,0.6)', margin: '0 auto var(--space-10)', maxWidth: '52ch' }}>
            Captures the growing pool of customers who fall into cold or lost status every month — turning long-term silence into long-term opportunity.
          </p>
          <a
            href="mailto:ward.matt@me.com?subject=RADAR%20-%20Let%27s%20Connect"
            className="btn btn-primary"
          >
            Get started
          </a>
        </div>
      </section>

      {/* ── WORKBENCH (desktop) / ACCORDION (mobile) ── */}
      <section
        style={{
          padding: 'var(--space-20) var(--space-6)',
          background: 'var(--color-paper-2)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-12)', maxWidth: '60ch' }}>
            <span className="mono-label">The Silent Profit Leak</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h1)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: 'var(--color-ink)',
                margin: 0,
              }}
            >
              And how to stop it.
            </h2>
          </div>

          {/* mobile accordion */}
          <div className="rd-mobile" style={{ display: 'grid', gap: 'var(--space-2)' }}>
            {tabs.map((tab, i) => {
              const isOpen = openAccordion === tab.id;
              return (
                <div
                  key={tab.id}
                  style={{
                    border: 'var(--rule)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    background: 'var(--color-paper)',
                  }}
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : tab.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      padding: 'var(--space-4) var(--space-5)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'var(--color-ink)',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-accent-deep)',
                        minWidth: '2ch',
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span style={{ flex: 1, fontSize: 'var(--text-body)', fontWeight: 600 }}>{tab.label}</span>
                    <span style={{ color: 'var(--color-accent)', fontSize: '1.25rem', lineHeight: 1 }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 var(--space-5) var(--space-6) calc(var(--space-5) + 3ch)',
                        borderTop: 'var(--rule)',
                        background: 'var(--color-paper-2)',
                      }}
                    >
                      <p style={{ marginTop: 'var(--space-5)', color: 'var(--color-muted)' }}>{tab.body}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-4) 0 0', display: 'grid', gap: 'var(--space-2)' }}>
                        {tab.bullets.map((b) => (
                          <li key={b} style={{ display: 'flex', gap: 'var(--space-3)', color: 'var(--color-ink-2)' }}>
                            <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {tab.close && (
                        <p
                          style={{
                            marginTop: 'var(--space-5)',
                            fontWeight: 600,
                            color: 'var(--color-ink)',
                          }}
                        >
                          {tab.close}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* desktop workbench */}
          <div className="rd-desktop" style={{ display: 'none' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'var(--space-12)', alignItems: 'start' }}>
              <nav role="tablist" aria-label="RADAR overview" style={{ display: 'grid', borderLeft: '2px solid var(--color-rule)' }}>
                {tabs.map((tab, i) => {
                  const isActive = active === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(tab.id)}
                      style={{
                        textAlign: 'left',
                        padding: 'var(--space-4) var(--space-5)',
                        marginLeft: '-2px',
                        borderLeft: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                        background: 'transparent',
                        color: isActive ? 'var(--color-ink)' : 'var(--color-muted)',
                        fontSize: 'var(--text-body)',
                        fontWeight: isActive ? 600 : 500,
                        cursor: 'pointer',
                        display: 'flex',
                        gap: 'var(--space-3)',
                        alignItems: 'baseline',
                        transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-xs)',
                          color: isActive ? 'var(--color-accent-deep)' : 'var(--color-muted-2)',
                        }}
                      >
                        0{i + 1}
                      </span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>

              <article
                style={{
                  background: 'var(--color-paper)',
                  border: 'var(--rule)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-12)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-ink)',
                    margin: '0 0 var(--space-5)',
                  }}
                >
                  {current.heading}
                </h3>
                <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--color-muted)', margin: 0 }}>
                  {current.body}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-6) 0 0', display: 'grid', gap: 'var(--space-3)' }}>
                  {current.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        gap: 'var(--space-4)',
                        color: 'var(--color-ink-2)',
                        fontSize: 'var(--text-body)',
                        paddingTop: 'var(--space-3)',
                        borderTop: 'var(--rule)',
                      }}
                    >
                      <span style={{ color: 'var(--color-accent)', flexShrink: 0, fontFamily: 'var(--font-mono)' }}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {current.close && (
                  <p
                    style={{
                      marginTop: 'var(--space-8)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {current.close}
                  </p>
                )}
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          background: 'var(--color-paper-dark)',
          color: '#fff',
          padding: 'var(--space-24) var(--space-6)',
          overflow: 'hidden',
        }}
      >
        <RadarArcs origin="top" />
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              display: 'inline-block',
              marginBottom: 'var(--space-5)',
            }}
          >
            Get on the RADAR
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h1)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              margin: '0 0 var(--space-5)',
            }}
          >
            Get started with RADAR.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-body)', maxWidth: '52ch', margin: '0 auto var(--space-10)' }}>
            If you&rsquo;re tired of converting a painfully low percentage of opportunities, let&rsquo;s talk.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="mailto:ward.matt@me.com?subject=RADAR%20-%20quick%20conversation"
              className="btn btn-primary"
            >
              Contact us
            </a>
            <a href="tel:425-985-8227" className="btn btn-ghost-inverse">
              425-985-8227
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 960px) {
          .rd-mobile { display: none !important; }
          .rd-desktop { display: block !important; }
        }
      `}</style>
    </>
  );
}
