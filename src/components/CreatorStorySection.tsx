import { useEffect, useRef, useState, type ReactNode } from 'react';
import { CREATOR_STORY, STUDIO_IMAGES } from '../data/games';
import { ResilientImage } from './ResilientImage';

interface RevealBlockProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

function RevealBlock({ children, className = '', delayMs = 0 }: RevealBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CreatorStorySection() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden border-b border-white/10 bg-[#050608] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Monumental Opening */}
        <RevealBlock>
          <p className="text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
            {CREATOR_STORY.eyebrow}
          </p>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,3.8vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-white text-balance">
            {CREATOR_STORY.openingHeadline}
          </h2>
        </RevealBlock>

        {/* First Act + Creator Desk Photograph */}
        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <RevealBlock className="space-y-6 text-base leading-[1.8] text-neutral-300 sm:text-lg lg:col-span-7">
            {CREATOR_STORY.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  paragraph === 'Pero decidí intentarlo.'
                    ? 'font-display text-2xl font-semibold text-white'
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </RevealBlock>

          <RevealBlock delayMs={80} className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0D0F13]">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ResilientImage
                  src={STUDIO_IMAGES.creatorDesk}
                  alt="Espacio de trabajo nocturno con bocetos de niveles en cuaderno, auriculares y computadora"
                  fallbackTitle="El origen de una idea"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="text-xs leading-relaxed text-neutral-400">
                  De los bocetos en cuaderno y la ilusión de una exposición escolar a tres universos jugables en la web.
                </p>
              </div>
            </div>
          </RevealBlock>
        </div>

        {/* Centerpiece Core Identity Quote */}
        <RevealBlock>
          <blockquote className="my-16 border-y border-amber-400/25 py-10 text-center sm:my-20 sm:py-12">
            <p className="font-display mx-auto max-w-3xl text-[clamp(1.5rem,2.8vw,2.35rem)] font-semibold leading-[1.3] tracking-tight text-amber-100 text-balance">
              «{CREATOR_STORY.featuredQuote}»
            </p>
            <footer className="mt-5 font-mono-tech text-xs tracking-[0.22em] text-amber-400">
              — {CREATOR_STORY.signature}
            </footer>
          </blockquote>
        </RevealBlock>

        {/* Second Act: Overcoming Limits */}
        <RevealBlock className="mx-auto max-w-3xl space-y-6 text-base leading-[1.8] text-neutral-300 sm:text-lg">
          {CREATOR_STORY.continuationParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </RevealBlock>

        {/* Memorable Closing Call-to-Action & YNSA Signature */}
        <RevealBlock>
          <div className="mt-16 rounded-xl border border-white/10 bg-[#0A0C10] px-6 py-12 text-center sm:px-12 sm:py-14">
            <p className="font-display mx-auto max-w-3xl text-[clamp(1.35rem,2.5vw,2rem)] font-bold leading-snug tracking-tight text-white text-balance">
              {CREATOR_STORY.closingStatement}
            </p>
            <div className="mt-8 inline-flex flex-col items-center">
              <span className="h-px w-16 bg-amber-400/60" aria-hidden="true" />
              <span className="font-display mt-4 text-3xl font-extrabold tracking-[0.22em] text-amber-400">
                {CREATOR_STORY.signature}
              </span>
              <span className="mt-1 text-xs text-neutral-400">YNSA STUDIOS — Beyond Imagination</span>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
