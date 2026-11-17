import { useState } from 'react';
import { ArrowLeft, ArrowRight, Award, Crosshair, ExternalLink, Shield } from 'lucide-react';
import { AFTER_FALL_GAME, type GameId } from '../../data/games';
import { getAdjacentGames } from '../../utils/navigation';
import { ResilientImage } from '../ResilientImage';

interface AfterFallPresentationProps {
  onBackToHub: () => void;
  onSelectGame: (id: GameId) => void;
}

type SectorTab = 'arsenal' | 'logros' | 'controles';

export function AfterFallPresentation({ onBackToHub, onSelectGame }: AfterFallPresentationProps) {
  const [activeTab, setActiveTab] = useState<SectorTab>('arsenal');
  const { prev, next } = getAdjacentGames('after-the-fall');

  return (
    <article className="min-h-screen bg-[#08090A] text-zinc-100">
      {/* Top Quarantine Bar */}
      <div className="border-b border-yellow-500/20 bg-[#0D0F11]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackToHub}
            className="inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-zinc-300 transition-colors hover:text-yellow-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver al menú principal</span>
          </button>

          <p className="font-mono-tech text-xs text-yellow-400">
            03 · {AFTER_FALL_GAME.sectorBriefing.zone}
          </p>
        </div>
      </div>

      {/* Post-apocalyptic Hero */}
      <section className="relative border-b border-white/10 bg-[#0A0C0E]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="font-mono-tech text-xs tracking-[0.18em] text-yellow-400 uppercase">
                  Supervivencia FPS · Zona en Cuarentena
                </p>
                <h1 className="font-display mt-4 text-[clamp(2.35rem,4.4vw,3.9rem)] font-bold leading-[1.03] tracking-tight text-white text-balance">
                  {AFTER_FALL_GAME.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-zinc-300">
                  {AFTER_FALL_GAME.narrativeLead}
                </p>

                <div className="mt-6 rounded-lg border border-yellow-500/20 bg-[#111417] p-4">
                  <p className="font-mono-tech text-xs text-yellow-400">
                    RED OCULTA · {AFTER_FALL_GAME.sectorBriefing.network}
                  </p>
                  <p className="mt-2 font-mono-tech text-xs text-zinc-300">
                    Dotación inicial: {AFTER_FALL_GAME.sectorBriefing.initialLoadout.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={AFTER_FALL_GAME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-md bg-yellow-400 px-7 py-3 text-sm font-bold tracking-wide text-neutral-950 transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                >
                  <span>JUGAR AHORA</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={onBackToHub}
                  className="inline-flex min-h-[48px] items-center rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/[0.05] cursor-pointer"
                >
                  Volver al menú principal
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-yellow-500/20 bg-black">
                <ResilientImage
                  src={AFTER_FALL_GAME.coverImage}
                  alt={AFTER_FALL_GAME.coverAlt}
                  fallbackTitle={AFTER_FALL_GAME.title}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0C0E]/90 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 p-6">
                  <span className="font-mono-tech text-xs text-yellow-300">
                    NIEBLA DENSA · LLUVIA ÁCIDA · OLEADAS
                  </span>
                  <span className="font-mono-tech text-xs text-zinc-300">
                    23 ARMAS REGISTRADAS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Briefing & Interactive Dead Sector Dossier */}
      <section className="border-b border-white/10 bg-[#0C0E11] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Supervivencia dentro de Dead Sector
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-300">
                {AFTER_FALL_GAME.storyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                <div>
                  <h3 className="font-display text-base font-semibold text-yellow-400">
                    Objetivo del operador
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                    {AFTER_FALL_GAME.objective}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-yellow-400">
                    Experiencia de juego
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                    {AFTER_FALL_GAME.experience}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-yellow-500/20 bg-[#121519] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    Archivo táctico del sector
                  </h3>
                  <div
                    role="tablist"
                    aria-label="Archivo táctico de After the Fall"
                    className="flex flex-wrap items-center gap-1 rounded-lg bg-black/50 p-1"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'arsenal'}
                      onClick={() => setActiveTab('arsenal')}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === 'arsenal'
                          ? 'bg-yellow-400 text-neutral-950'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Crosshair className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Mercado Negro</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'logros'}
                      onClick={() => setActiveTab('logros')}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === 'logros'
                          ? 'bg-yellow-400 text-neutral-950'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Logros (8)</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'controles'}
                      onClick={() => setActiveTab('controles')}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                        activeTab === 'controles'
                          ? 'bg-yellow-400 text-neutral-950'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Controles</span>
                    </button>
                  </div>
                </div>

                {activeTab === 'arsenal' && (
                  <div className="mt-6 space-y-3">
                    {AFTER_FALL_GAME.arsenal.map((weapon) => (
                      <div
                        key={weapon.name}
                        className="rounded-lg border border-white/10 bg-black/35 p-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-display text-sm font-bold text-white">{weapon.name}</p>
                          <span className="font-mono-tech text-xs text-yellow-400">{weapon.caliber}</span>
                        </div>
                        <p className="mt-1 text-xs text-zinc-400">{weapon.role}</p>
                        <p className="font-mono-tech mt-2 text-xs text-zinc-300">{weapon.stats}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'logros' && (
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {AFTER_FALL_GAME.achievements.map((ach) => (
                      <div
                        key={ach.name}
                        className="rounded-lg border border-white/10 bg-black/35 p-4"
                      >
                        <p className="font-display text-sm font-bold text-yellow-300">{ach.name}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-zinc-300">
                          {ach.requirement}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'controles' && (
                  <div className="mt-6 space-y-3">
                    {AFTER_FALL_GAME.controls.map((ctrl) => (
                      <div
                        key={ctrl.key}
                        className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-sm"
                      >
                        <span className="font-mono-tech text-xs text-yellow-400">{ctrl.key}</span>
                        <span className="text-right text-zinc-200">{ctrl.action}</span>
                      </div>
                    ))}
                    <p className="pt-2 text-xs leading-relaxed text-zinc-400">
                      En Celular / Móvil la interfaz reemplaza las teclas de PC por un joystick virtual izquierdo, deslizamiento de cámara y botones táctiles ergonómicos.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Footer Nav */}
      <section className="bg-[#08090A] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white">Características principales</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AFTER_FALL_GAME.features.map((feat, index) => (
              <div
                key={feat.title}
                className="rounded-lg border border-white/10 bg-[#111417] p-6"
              >
                <p className="font-mono-tech text-xs text-yellow-400">0{index + 1}</p>
                <h3 className="font-display mt-2 text-base font-semibold text-white">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feat.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={AFTER_FALL_GAME.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-yellow-400 px-6 py-2.5 text-sm font-bold text-neutral-950 transition-colors hover:bg-yellow-300"
              >
                <span>JUGAR AHORA</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={onBackToHub}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/5 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Menú principal</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => onSelectGame(prev.id)}
                className="text-zinc-400 transition-colors hover:text-white cursor-pointer"
              >
                ← {prev.title}
              </button>
              <span className="text-zinc-700" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => onSelectGame(next.id)}
                className="inline-flex items-center gap-1.5 font-medium text-yellow-400 transition-colors hover:text-yellow-300 cursor-pointer"
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
