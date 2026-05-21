import React from 'react';

export default function Wordmark({
  size = 20,
  showMark = true,
}: {
  size?: number;
  showMark?: boolean;
}) {
  const markSize = Math.round(size * 1.05);
  const gap = Math.round(size * 0.55);

  return (
    <span
      aria-label="Dealer Transparency"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${gap}px`,
        fontFamily: 'var(--font-display)',
        fontSize: `${size}px`,
        lineHeight: 1,
        letterSpacing: '-0.035em',
        color: 'currentColor',
        whiteSpace: 'nowrap',
      }}
    >
      {showMark && (
        <span
          aria-hidden="true"
          style={{
            position: 'relative',
            display: 'inline-block',
            width: `${markSize}px`,
            height: `${markSize}px`,
            flexShrink: 0,
          }}
        >
          {/* outlined square — back layer, offset up-left */}
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${Math.round(markSize * 0.7)}px`,
              height: `${Math.round(markSize * 0.7)}px`,
              border: `2px solid var(--color-accent)`,
              borderRadius: '2px',
            }}
          />
          {/* filled square — front layer, offset down-right */}
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: `${Math.round(markSize * 0.7)}px`,
              height: `${Math.round(markSize * 0.7)}px`,
              background: 'var(--color-accent)',
              borderRadius: '2px',
            }}
          />
        </span>
      )}
      <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
        <span style={{ fontWeight: 400 }}>Dealer</span>
        <span style={{ fontWeight: 800 }}>Transparency</span>
      </span>
    </span>
  );
}
