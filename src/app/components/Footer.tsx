import Link from 'next/link';
import Wordmark from './Wordmark';

const links = [
  { href: '/#solutions', label: 'Solutions' },
  { href: '/radar', label: 'RADAR' },
  { href: '/#results', label: 'Results' },
  { href: 'mailto:ward.matt@me.com', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: 'var(--rule)',
        background: 'var(--color-paper)',
        color: 'var(--color-ink-2)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'var(--space-16) var(--space-6) var(--space-10)',
          display: 'grid',
          gap: 'var(--space-10)',
        }}
      >
        {/* top row — brand + links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-8)',
          }}
          className="footer-grid"
        >
          <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
            <Link href="/" aria-label="Dealer Transparency home" style={{ color: 'var(--color-ink)' }}>
              <Wordmark size={26} />
            </Link>
            <span
              className="mono-label"
              style={{ color: 'var(--color-muted-2)', letterSpacing: '0.14em' }}
            >
              Revenue Performance Management
            </span>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', maxWidth: '38ch', margin: 0, lineHeight: 1.55 }}>
              Blending three decades of dealership experience with intelligent automation. Built for dealer groups who refuse to leave revenue on the table.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', alignItems: 'center' }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: 'var(--color-ink-2)',
                  fontSize: 'var(--text-sm)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* bottom row — copyright + patent mark */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            borderTop: 'var(--rule)',
            paddingTop: 'var(--space-6)',
          }}
        >
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', margin: 0 }}>
            © {new Date().getFullYear()} Dealer Transparency. All rights reserved.
          </p>
          <img
            src="/patent-pending.svg"
            alt="Patent pending"
            style={{ height: '64px', width: 'auto', opacity: 0.75 }}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr auto !important;
            align-items: end !important;
          }
        }
      `}</style>
    </footer>
  );
}
