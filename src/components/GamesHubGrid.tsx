import { ArrowRight, ExternalLink } from 'lucide-react';
import { ALL_GAMES, type GameId } from '../data/games';
import { ResilientImage } from './ResilientImage';

interface GamesHubGridProps {
  onSelectGame: (id: GameId) => void;
}

const CARD_THEME: Record<
  GameId,
  {
    hoverBorder: string;
    accentText: string;
    primaryBtn: string;
    fallbackGradient: string;
  }
> = {
  vigilia: {
    hoverBorder: 'hover:border-amber-500/50',
    accentText: 'text-amber-300',
    primaryBtn: 'bg-amber-400 text-neutral-950 hover:bg-amber-300',
    fallbackGradient: 'from-stone-900 via-neutral-950 to-black',
  },
  'ynsanity-racing': {
    hoverBorder: 'hover:border-rose-500/50',
    accentText: 'text-rose-400',
    primaryBtn: 'bg-rose-500 text-white hover:bg-rose-400',
    fallbackGradient: 'from-rose-950 via-neutral-950 to-black',
  },
  'after-the-fall': {
    hoverBorder: 'hover:border-yellow-500/50',
    accentText: 'text-yellow-400',
    primaryBtn: 'bg-yellow-400 text-neutral-950 hover:bg-yellow-300',
    fallbackGradient: 'from-zinc-800 via-neutral-950 to-black',
  },
};

export function GamesHubGrid({ onSelectGame }: GamesHubGridProps) {
  return (
    <section
      id="juegos"
      className="border-b border-white/10 bg-[#0A0B0E] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-neutral-400 uppercase">
              Catálogo oficial
            </p>
            <h2 className="font-display mt-2 text-[clamp(1.75rem,3vw,2.6rem)] font-bold tracking-tight text-white text-balance">
              Tres títulos creados para jugarse directo en la web
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            Seleccioná cualquier proyecto para entrar a su presentación exclusiva o iniciá el juego original en una nueva pestaña.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {ALL_GAMES.map((game) => {
            const theme = CARD_THEME[game.id];
            return (
              <article
                key={game.id}
                className={`group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101217] transition-all duration-200 hover:-translate-y-1 ${theme.hoverBorder}`}
              >
                {/* Visual cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <ResilientImage
                    src={game.coverImage}
                    alt={game.coverAlt}
                    fallbackTitle={game.title}
                    fallbackGradient={theme.fallbackGradient}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101217] via-[#101217]/30 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-3">
                    <p className={`font-mono-tech text-xs font-medium ${theme.accentText}`}>
                      {game.indexLabel} · {game.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                      {game.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400">{game.genreLine}</p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                      {game.shortHook}
                    </p>

                    <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                      {game.specs.map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-[11px] text-neutral-500">{spec.label}</dt>
                          <dd className="font-mono-tech mt-0.5 text-xs font-medium text-neutral-200">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectGame(game.id)}
                      className={`inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${theme.primaryBtn}`}
                    >
                      <span>Descubrir universo</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <a
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Jugar ahora a ${game.title} (abre en una nueva pestaña)`}
                      className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-neutral-100 transition-colors duration-150 hover:border-white/30 hover:bg-white/10 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>Jugar ahora</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
