'use client';

import { useState } from 'react';
import Link from 'next/link';
import Wordmark from './Wordmark';

const links = [
  { href: '/#solutions', label: 'Solutions' },
  { href: '/radar', label: 'RADAR' },
  { href: '/#results', label: 'Results' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--color-paper)',
        borderBottom: 'var(--rule)',
        backdropFilter: 'saturate(180%) blur(8px)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
          height: 'var(--nav-h)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          onClick={close}
          aria-label="Dealer Transparency home"
          style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-ink)' }}
        >
          <Wordmark size={20} />
        </Link>

        {/* desktop */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 'var(--space-8)' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: 'var(--color-ink-2)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:ward.matt@me.com?subject=Dealer%20Transparency%20-%20Health%20Report"
            className="btn btn-primary"
          >
            Request a Health Report
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-ink)',
            padding: 'var(--space-2)',
            cursor: 'pointer',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: 'var(--rule)',
            padding: 'var(--space-4) var(--space-6) var(--space-6)',
            display: 'grid',
            gap: 'var(--space-3)',
            background: 'var(--color-paper)',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              style={{
                color: 'var(--color-ink)',
                fontSize: 'var(--text-body)',
                fontWeight: 500,
                textDecoration: 'none',
                padding: 'var(--space-2) 0',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:ward.matt@me.com?subject=Dealer%20Transparency%20-%20Health%20Report"
            className="btn btn-primary"
            onClick={close}
            style={{ justifyContent: 'center', marginTop: 'var(--space-2)' }}
          >
            Request a Health Report
          </a>
        </div>
      )}
    </header>
  );
}
