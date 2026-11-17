import { ArrowUpRight, Compass, Gauge, Headphones, ShieldAlert } from 'lucide-react';
import {
  AFTER_FALL_GAME,
  VIGILIA_GAME,
  YNSANITY_GAME,
  type GameId,
} from '../data/games';
import { ResilientImage } from './ResilientImage';

interface GameUniversesShowcaseProps {
  onSelectGame: (id: GameId) => void;
}

export function GameUniversesShowcase({ onSelectGame }: GameUniversesShowcaseProps) {
  return (
    <section
      id="acerca"
      className="border-b border-white/10 bg-[#07080A] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.16em] text-neutral-400 uppercase">
            Acerca de los juegos
          </p>
          <h2 className="font-display mt-2 text-[clamp(1.75rem,3vw,2.6rem)] font-bold tracking-tight text-white text-balance">
            Cada mundo conserva su propia atmósfera, reglas y lenguaje visual
          </h2>
        </div>

        <div className="mt-14 space-y-12">
          {/* 01. VIGILIA — Rosario 1988 analog horror atmosphere */}
          <article className="overflow-hidden rounded-xl border border-amber-900/40 bg-[#090807]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              <div className="relative min-h-[260px] lg:col-span-5">
                <ResilientImage
                  src={VIGILIA_GAME.coverImage}
                  alt={VIGILIA_GAME.coverAlt}
                  fallbackTitle={VIGILIA_GAME.title}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#090807]/20 to-[#090807]/90 hidden lg:block"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent lg:hidden"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-amber-300/90">
                    <span className="font-mono-tech">01 · ROSARIO, INVIERNO DE 1988</span>
                    <span aria-hidden="true">/</span>
                    <span>12:00 AM · PRÓLOGO</span>
                  </div>

                  <h3 className="font-display mt-3 text-3xl font-bold tracking-tight text-stone-100">
                    {VIGILIA_GAME.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-stone-300">
                    {VIGILIA_GAME.narrativeLead}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 border-t border-amber-500/15 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-amber-200/80">Protagonista y escenario</p>
                      <p className="mt-1 text-sm text-stone-400">
                        {VIGILIA_GAME.protagonist.name} dentro de su casa mientras algo se mueve en el pasillo antes de un día de escuela.
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-medium text-amber-200/80">
                        <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Supervivencia auditiva</span>
                      </p>
                      <p className="mt-1 text-sm text-stone-400">
                        «{VIGILIA_GAME.audioNotice}». Linterna con F, examinar con E y cerrar con Espacio.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectGame('vigilia')}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-amber-400 px-5 py-2.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-amber-300 cursor-pointer"
                  >
                    <span>Ver presentación de Vigilia</span>
                  </button>
                  <a
                    href={VIGILIA_GAME.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md border border-amber-400/30 px-5 py-2.5 text-xs font-semibold text-amber-200 transition-colors hover:bg-amber-400/10"
                  >
                    <span>JUGAR AHORA</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 02. YNSANITY RACING — Motorsport telemetry & crimson carbon aesthetic */}
          <article className="overflow-hidden rounded-xl border border-rose-500/30 bg-[#0B0C10]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              <div className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:col-span-7 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-rose-400">
                    <span className="font-mono-tech">02 · CARRERAS 3D EN LÍNEA</span>
                    <span aria-hidden="true">/</span>
                    <span>7 MODOS · 10 CIRCUITOS</span>
                  </div>

                  <h3 className="font-display mt-3 text-3xl font-bold tracking-tight text-white">
                    {YNSANITY_GAME.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-neutral-300">
                    {YNSANITY_GAME.narrativeLead}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-medium text-rose-300">
                        <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Garaje progresivo</span>
                      </p>
                      <p className="mt-1 text-sm text-neutral-400">
                        Desde el Rabbit GTI Mk-S (245 HP) hasta el Ängelholm Apex One (1600 HP) con cámara libre 360°.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-rose-300">Competencia y clima dinámico</p>
                      <p className="mt-1 text-sm text-neutral-400">
                        Carrera contra 5 rivales, Contrarreloj, Fantasma, Campeonato, 1v1 pantalla dividida y salas online.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectGame('ynsanity-racing')}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-rose-500 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-rose-400 cursor-pointer"
                  >
                    <span>Ver presentación de Ynsanity Racing</span>
                  </button>
                  <a
                    href={YNSANITY_GAME.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md border border-rose-500/40 px-5 py-2.5 text-xs font-semibold text-rose-200 transition-colors hover:bg-rose-500/10"
                  >
                    <span>JUGAR AHORA</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="relative order-1 min-h-[260px] lg:order-2 lg:col-span-5">
                <ResilientImage
                  src={YNSANITY_GAME.coverImage}
                  alt={YNSANITY_GAME.coverAlt}
                  fallbackTitle={YNSANITY_GAME.title}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-[#0B0C10]/20 to-[#0B0C10]/90 hidden lg:block"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent lg:hidden"
                />
              </div>
            </div>
          </article>

          {/* 03. AFTER THE FALL — Dead Sector tactical survival dossier */}
          <article className="overflow-hidden rounded-xl border border-yellow-500/25 bg-[#0C0E0F]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              <div className="relative min-h-[260px] lg:col-span-5">
                <ResilientImage
                  src={AFTER_FALL_GAME.coverImage}
                  alt={AFTER_FALL_GAME.coverAlt}
                  fallbackTitle={AFTER_FALL_GAME.title}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#0C0E0F]/20 to-[#0C0E0F]/90 hidden lg:block"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0E0F] via-transparent to-transparent lg:hidden"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-yellow-400">
                    <span className="font-mono-tech">03 · DEAD SECTOR</span>
                    <span aria-hidden="true">/</span>
                    <span>SUPERVIVENCIA FPS POSTAPOCALÍPTICA</span>
                  </div>

                  <h3 className="font-display mt-3 text-3xl font-bold tracking-tight text-white">
                    {AFTER_FALL_GAME.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-neutral-300">
                    {AFTER_FALL_GAME.narrativeLead}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-medium text-yellow-300">
                        <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Mercado Negro clandestino</span>
                      </p>
                      <p className="mt-1 text-sm text-neutral-400">
                        Terminal oscura con 23 armas registradas, visor táctico 3D 360°, chalecos y munición FMJ.
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-medium text-yellow-300">
                        <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Registro del Superviviente</span>
                      </p>
                      <p className="mt-1 text-sm text-neutral-400">
                        Oleadas continuas, brújula de hostiles y botín, misiones diarias y 8 logros desbloqueables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectGame('after-the-fall')}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-yellow-400 px-5 py-2.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-yellow-300 cursor-pointer"
                  >
                    <span>Ver presentación de After the Fall</span>
                  </button>
                  <a
                    href={AFTER_FALL_GAME.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md border border-yellow-400/35 px-5 py-2.5 text-xs font-semibold text-yellow-200 transition-colors hover:bg-yellow-400/10"
                  >
                    <span>JUGAR AHORA</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
