import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Flag, Gauge, MapPin } from 'lucide-react';
import { YNSANITY_GAME, type GameId } from '../../data/games';
import { getAdjacentGames } from '../../utils/navigation';
import { ResilientImage } from '../ResilientImage';

interface YnsanityPresentationProps {
  onBackToHub: () => void;
  onSelectGame: (id: GameId) => void;
}

type PaddockTab = 'modos' | 'circuitos' | 'garaje';

export function YnsanityPresentation({ onBackToHub, onSelectGame }: YnsanityPresentationProps) {
  const [activeTab, setActiveTab] = useState<PaddockTab>('modos');
  const { prev, next } = getAdjacentGames('ynsanity-racing');

  return (
    <article className="min-h-screen bg-[#07080B] text-neutral-100">
      {/* Top Paddock Bar */}
      <div className="border-b border-rose-500/25 bg-[#0A0B10]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackToHub}
            className="inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-neutral-300 transition-colors hover:text-rose-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver al menú principal</span>
          </button>

          <p className="font-mono-tech text-xs text-rose-400">
            02 · SIMULADOR DE CARRERAS ARCADE 3D EN TU NAVEGADOR
          </p>
        </div>
      </div>

      {/* High-Velocity Hero */}
      <section className="relative border-b border-white/10 bg-gradient-to-b from-[#13090E] via-[#090A0E] to-[#07080B]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="font-mono-tech text-xs tracking-[0.2em] text-rose-400 uppercase">
                  Parrilla de Salida · Clases D a S+
                </p>
                <h1 className="font-display mt-4 text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold leading-[1.02] tracking-tight text-white text-balance">
                  {YNSANITY_GAME.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                  {YNSANITY_GAME.narrativeLead}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-4 border-y border-white/10 py-4">
                  <div>
                    <p className="font-mono-tech text-2xl font-bold text-white">7</p>
                    <p className="text-xs text-neutral-400">Modos de juego</p>
                  </div>
                  <div>
                    <p className="font-mono-tech text-2xl font-bold text-rose-400">10</p>
                    <p className="text-xs text-neutral-400">Circuitos únicos</p>
                  </div>
                  <div>
                    <p className="font-mono-tech text-2xl font-bold text-white">1600 HP</p>
                    <p className="text-xs text-neutral-400">Potencia máxima</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={YNSANITY_GAME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-md bg-rose-500 px-7 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                >
                  <span>JUGAR AHORA</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={onBackToHub}
                  className="inline-flex min-h-[48px] items-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.05] cursor-pointer"
                >
                  Volver al menú principal
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-rose-500/25 bg-black">
                <ResilientImage
                  src={YNSANITY_GAME.coverImage}
                  alt={YNSANITY_GAME.coverAlt}
                  fallbackTitle={YNSANITY_GAME.title}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080B]/90 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 p-6">
                  <span className="font-mono-tech text-xs text-rose-300">
                    TECLADO WASD · MANDO · CONTROLES TÁCTILES
                  </span>
                  <span className="font-mono-tech text-xs text-neutral-300">
                    DESPEJADO / NUBLADO / LLUVIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative, Objective & Interactive Paddock Explorer */}
      <section className="border-b border-white/10 bg-[#0A0B0F] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                De qué trata y qué te espera en pista
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-300">
                {YNSANITY_GAME.storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                <div>
                  <h3 className="font-display text-base font-semibold text-rose-400">
                    Objetivo del jugador
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-300">
                    {YNSANITY_GAME.objective}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-rose-400">
                    Experiencia en carrera
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-300">
                    {YNSANITY_GAME.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Paddock Tabs: Modos / Circuitos / Garaje */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-white/10 bg-[#101218] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    Datos reales del paddock
                  </h3>
                  <div
                    role="tablist"
                    aria-label="Secciones de Ynsanity Racing"
                    className="flex items-center gap-1 rounded-lg bg-black/50 p-1"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'modos'}
                      onClick={() => setActiveTab('modos')}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === 'modos'
                          ? 'bg-rose-500 text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Flag className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Modos (7)</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'circuitos'}
                      onClick={() => setActiveTab('circuitos')}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === 'circuitos'
                          ? 'bg-rose-500 text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Circuitos</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'garaje'}
                      onClick={() => setActiveTab('garaje')}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === 'garaje'
                          ? 'bg-rose-500 text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Garaje</span>
                    </button>
                  </div>
                </div>

                {activeTab === 'modos' && (
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {YNSANITY_GAME.modes.map((mode) => (
                      <div
                        key={mode.name}
                        className="rounded-lg border border-white/10 bg-black/30 p-4"
                      >
                        <p className="font-display text-sm font-bold text-white">{mode.name}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
                          {mode.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'circuitos' && (
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {YNSANITY_GAME.tracks.map((track) => (
                      <div
                        key={track.name}
                        className="rounded-lg border border-white/10 bg-black/30 p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-display text-sm font-bold text-white">{track.name}</p>
                          <span className="font-mono-tech text-xs text-rose-400">{track.distance}</span>
                        </div>
                        <p className="mt-1 text-[11px] text-neutral-400">
                          {track.timeOfDay} · {track.unlock}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                          {track.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'garaje' && (
                  <div className="mt-6 space-y-3">
                    {YNSANITY_GAME.vehicles.map((car) => (
                      <div
                        key={car.name}
                        className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/30 px-4 py-3"
                      >
                        <div>
                          <p className="font-display text-sm font-bold text-white">{car.name}</p>
                          <p className="text-xs text-neutral-400">
                            {car.tier} · {car.category}
                          </p>
                        </div>
                        <div className="font-mono-tech text-right text-xs text-rose-300">
                          {car.power} · {car.drivetrain}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features + Navigation Footer */}
      <section className="bg-[#07080B] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">Características principales</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {YNSANITY_GAME.features.map((feat, index) => (
              <div
                key={feat.title}
                className="rounded-lg border border-white/10 bg-[#101218] p-6"
              >
                <p className="font-mono-tech text-xs text-rose-400">0{index + 1}</p>
                <h3 className="font-display mt-2 text-base font-semibold text-white">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{feat.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={YNSANITY_GAME.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-rose-500 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rose-400"
              >
                <span>JUGAR AHORA</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={onBackToHub}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-sm text-neutral-300 hover:bg-white/5 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Menú principal</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => onSelectGame(prev.id)}
                className="text-neutral-400 transition-colors hover:text-white cursor-pointer"
              >
                ← {prev.title}
              </button>
              <span className="text-neutral-700" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => onSelectGame(next.id)}
                className="inline-flex items-center gap-1.5 font-medium text-rose-400 transition-colors hover:text-rose-300 cursor-pointer"
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
