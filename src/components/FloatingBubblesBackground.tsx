import type { CSSProperties } from 'react';

/**
 * Decorative light-green bubbles that rise behind section content.
 * Parent must be `relative overflow-hidden`.
 */
const BUBBLE_COUNT = 22;

function seededValues(index: number) {
  const left = ((index * 37 + 11) % 94) + 3;
  const sizeBase = 14 + (index * 19) % 52;
  const duration = 14 + (index % 11) * 1.35;
  const delay = -((index * 2.3) % 24);
  const drift = ((index % 9) - 4) * 28;
  const scale = 0.75 + ((index * 7) % 35) / 100;
  const opacity = 0.22 + ((index * 5) % 18) / 100;
  return { left, sizeBase, duration, delay, drift, scale, opacity };
}

export default function FloatingBubblesBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {Array.from({ length: BUBBLE_COUNT }, (_, i) => {
        const { left, sizeBase, duration, delay, drift, scale, opacity } = seededValues(i);
        const blurSm = i % 3 === 0 ? 'blur-[0.5px]' : i % 3 === 1 ? 'blur-sm' : '';
        return (
          <span
            key={i}
            className={`bubble-float absolute rounded-full ${blurSm}`}
            style={
              {
                left: `${left}%`,
                bottom: '-8%',
                width: sizeBase,
                height: sizeBase,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                '--bubble-drift': `${drift}px`,
                '--bubble-scale': scale,
                '--bubble-opacity': opacity,
                background:
                  'radial-gradient(circle at 32% 28%, rgba(209, 250, 229, 0.85), rgba(167, 243, 208, 0.35) 45%, rgba(110, 231, 183, 0.12) 100%)',
                boxShadow: '0 0 20px rgba(167, 243, 208, 0.25), inset 0 0 12px rgba(255, 255, 255, 0.45)',
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
