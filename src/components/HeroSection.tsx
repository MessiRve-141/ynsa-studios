import { ArrowDownRight } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/games';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onExploreGames: () => void;
}

export function HeroSection({ onExploreGames }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/10 bg-[#07080A]"
    >
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Studio identity & primary proposition */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-amber-400 uppercase">
                YNSA STUDIOS — Beyond Imagination
              </p>

              <h1 className="font-display mt-5 text-[clamp(2.35rem,4.4vw,4rem)] font-bold leading-[1.04] tracking-tight text-white text-balance">
                Tres mundos. Tres experiencias. Una misma mente creativa.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Tres universos diferentes. Tres aventuras por descubrir. Una misma pasión: crear.
                Sumergite en el terror psicológico en Rosario, la velocidad 3D en circuito o la supervivencia
                táctica tras el colapso.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExploreGames}
                  className="inline-flex min-h-[44px] items-center gap-2.5 rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition-all duration-150 hover:bg-amber-300 active:translate-y-px whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <span>Explorar juegos</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href="#historia"
                  className="inline-flex min-h-[44px] items-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-neutral-200 transition-colors duration-150 hover:border-white/30 hover:bg-white/[0.04] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  Leer historia del creador
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm text-neutral-400">
                «La inteligencia artificial no tuvo el sueño por mí. Solamente me ayudó a encontrar una forma de hacerlo realidad.» — YNSA
              </p>
            </div>
          </div>

          {/* Right column: Cinematic studio visual */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-white/10 bg-[#0D0F13] sm:min-h-[380px]">
              <ResilientImage
                src={STUDIO_IMAGES.heroStudio}
                alt="Estudio independiente YNSA STUDIOS iluminado en la noche frente a un proyecto en pantalla"
                fallbackTitle="YNSA STUDIOS — Beyond Imagination"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080A]/85 via-[#07080A]/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-300">
                  <span>Estudio independiente</span>
                  <span aria-hidden="true">·</span>
                  <span>3 videojuegos web jugables</span>
                  <span aria-hidden="true">·</span>
                  <span>Desarrollado por YNSA (6.° año)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Studio Index Strip below hero split */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="font-mono-tech text-xs text-neutral-400">01 · TERROR PSICOLÓGICO</p>
            <p className="font-display mt-1.5 text-lg font-semibold text-white">VIGILIA — Las noches de Martín</p>
            <p className="mt-1 text-sm text-neutral-400">Rosario, invierno de 1988 · Supervivencia sonora</p>
          </div>
          <div>
            <p className="font-mono-tech text-xs text-neutral-400">02 · CARRERAS ARCADE 3D</p>
            <p className="font-display mt-1.5 text-lg font-semibold text-white">YNSANITY RACING</p>
            <p className="mt-1 text-sm text-neutral-400">7 modos · 10 circuitos · Clases D a S+</p>
          </div>
          <div>
            <p className="font-mono-tech text-xs text-neutral-400">03 · SUPERVIVENCIA ZOMBIE FPS</p>
            <p className="font-display mt-1.5 text-lg font-semibold text-white">AFTER THE FALL</p>
            <p className="mt-1 text-sm text-neutral-400">Dead Sector · Mercado Negro · 23 armas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
