import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Headphones, Keyboard, Smartphone } from 'lucide-react';
import { VIGILIA_GAME, type GameId } from '../../data/games';
import { getAdjacentGames } from '../../utils/navigation';
import { ResilientImage } from '../ResilientImage';

interface VigiliaPresentationProps {
  onBackToHub: () => void;
  onSelectGame: (id: GameId) => void;
}

export function VigiliaPresentation({ onBackToHub, onSelectGame }: VigiliaPresentationProps) {
  const [deviceMode, setDeviceMode] = useState<'pc' | 'mobile'>('pc');
  const { prev, next } = getAdjacentGames('vigilia');

  return (
    <article className="min-h-screen bg-[#060607] text-stone-100">
      {/* Top return & universe strip */}
      <div className="border-b border-amber-500/15 bg-[#090807]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackToHub}
            className="inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-stone-300 transition-colors hover:text-amber-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver al menú principal</span>
          </button>

          <p className="font-mono-tech text-xs text-amber-300/90">
            01 · ROSARIO, INVIERNO DE 1988 · 12:00 AM
          </p>
        </div>
      </div>

      {/* Bespoke Horror Cover Hero */}
      <section className="relative border-b border-amber-500/15">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="font-mono-tech text-xs tracking-[0.2em] text-amber-400 uppercase">
                  Prólogo · Terror Psicológico
                </p>

                <h1 className="font-display mt-4 text-[clamp(2.25rem,4.2vw,3.75rem)] font-bold leading-[1.04] tracking-tight text-stone-50 text-balance">
                  {VIGILIA_GAME.title}
                </h1>

                <p className="mt-5 text-lg leading-relaxed text-stone-300">
                  {VIGILIA_GAME.narrativeLead}
                </p>

                <div className="mt-6 flex items-center gap-3 border-y border-amber-500/20 py-3.5 text-sm text-amber-200">
                  <Headphones className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                  <span>{VIGILIA_GAME.audioNotice}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={VIGILIA_GAME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-md bg-amber-400 px-7 py-3 text-sm font-bold tracking-wide text-neutral-950 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <span>JUGAR AHORA</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={onBackToHub}
                  className="inline-flex min-h-[48px] items-center rounded-md border border-stone-700 px-5 py-3 text-sm font-medium text-stone-200 transition-colors hover:border-stone-500 hover:bg-white/[0.04] cursor-pointer"
                >
                  Volver al menú principal
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-amber-500/20 bg-black">
                <ResilientImage
                  src={VIGILIA_GAME.coverImage}
                  alt={VIGILIA_GAME.coverAlt}
                  fallbackTitle={VIGILIA_GAME.title}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060607]/90 via-transparent to-[#060607]/25"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono-tech text-xs text-amber-300">12:00 AM · ALGO SE MUEVE EN EL PASILLO</p>
                  <p className="mt-1 text-sm text-stone-300">«Mamá dijo que mañana hay escuela.»</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story, Protagonist & Objective */}
      <section className="border-b border-amber-500/15 bg-[#0A0908] py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-stone-50 sm:text-3xl">
              Historia, atmósfera y el protagonista
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-300">
              {VIGILIA_GAME.storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-amber-500/15 pt-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-amber-300">
                  Objetivo del jugador
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  {VIGILIA_GAME.objective}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-amber-300">
                  Experiencia que ofrece
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  {VIGILIA_GAME.experience}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-amber-500/20 bg-[#110F0D] p-6 sm:p-8">
              <p className="font-mono-tech text-xs text-amber-400 uppercase">Personaje principal</p>
              <h3 className="font-display mt-2 text-2xl font-bold text-white">
                {VIGILIA_GAME.protagonist.name}
              </h3>
              <p className="mt-1 text-xs text-stone-400">{VIGILIA_GAME.protagonist.context}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-300">
                {VIGILIA_GAME.protagonist.premise}
              </p>

              {/* Interactive Controls Switcher */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
                    Controles reales
                  </p>
                  <div className="flex items-center gap-1 rounded-md border border-white/10 bg-black/40 p-1">
                    <button
                      type="button"
                      onClick={() => setDeviceMode('pc')}
                      className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        deviceMode === 'pc'
                          ? 'bg-amber-400 text-neutral-950'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      <Keyboard className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Computadora</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceMode('mobile')}
                      className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        deviceMode === 'mobile'
                          ? 'bg-amber-400 text-neutral-950'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Teléfono</span>
                    </button>
                  </div>
                </div>

                {deviceMode === 'pc' ? (
                  <ul className="mt-4 space-y-2.5">
                    {VIGILIA_GAME.controls.map((ctrl) => (
                      <li
                        key={ctrl.key}
                        className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 text-sm last:border-b-0"
                      >
                        <span className="font-mono-tech text-xs text-amber-300">{ctrl.key}</span>
                        <span className="text-right text-stone-300">{ctrl.action}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-stone-300">
                    Al elegir «Teléfono» al iniciar el juego, Vigilia adapta automáticamente la pantalla con
                    botones táctiles dedicados para moverte, apuntar la linterna, examinar el pasillo y cerrar puertas.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="border-b border-amber-500/15 bg-[#060607] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-stone-50">
            Características principales
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VIGILIA_GAME.features.map((feat, index) => (
              <div
                key={feat.title}
                className="rounded-lg border border-amber-500/15 bg-[#0D0B09] p-6"
              >
                <p className="font-mono-tech text-xs text-amber-400">0{index + 1}</p>
                <h3 className="font-display mt-2 text-base font-semibold text-white">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{feat.detail}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA & Navigation between games */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={VIGILIA_GAME.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-amber-400 px-6 py-2.5 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-300"
              >
                <span>JUGAR AHORA</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={onBackToHub}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-sm text-stone-300 hover:bg-white/5 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Menú principal</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => onSelectGame(prev.id)}
                className="text-stone-400 transition-colors hover:text-white cursor-pointer"
              >
                ← {prev.title}
              </button>
              <span className="text-stone-700" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => onSelectGame(next.id)}
                className="inline-flex items-center gap-1.5 font-medium text-amber-300 transition-colors hover:text-amber-200 cursor-pointer"
              >
                <span>Siguiente: {next.title}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
