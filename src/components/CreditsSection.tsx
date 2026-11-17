import { ExternalLink, Sparkles } from 'lucide-react';
import { ALL_GAMES, CREATOR_CREDITS } from '../data/games';

export function CreditsSection() {
  return (
    <section
      id="creditos"
      className="border-b border-white/10 bg-[#08090C] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Créditos del creador
            </p>
            <h2 className="font-display mt-3 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-white text-balance">
              {CREATOR_CREDITS.headline}
            </h2>
            <p className="mt-4 text-lg font-medium text-amber-300">
              {CREATOR_CREDITS.subheadline}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-300">
              <p>{CREATOR_CREDITS.body}</p>
              <p className="text-neutral-200">{CREATOR_CREDITS.clarification}</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/10 bg-[#0E1015] p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-amber-300">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono-tech text-xs uppercase tracking-wider">
                  Créditos y enlaces oficiales
                </span>
              </div>

              <dl className="mt-6 space-y-4 border-b border-white/10 pb-6 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-neutral-400">Idea, dirección y creación</dt>
                  <dd className="font-display font-semibold text-white">YNSA (6.° año)</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-neutral-400">Estudio</dt>
                  <dd className="font-display font-semibold text-white">YNSA STUDIOS</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-neutral-400">Apoyo técnico y creativo</dt>
                  <dd className="text-right text-neutral-300">Herramientas de Inteligencia Artificial</dd>
                </div>
              </dl>

              <div className="mt-6">
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Acceso directo a los juegos originales
                </p>
                <ul className="mt-3 space-y-2.5">
                  {ALL_GAMES.map((game) => (
                    <li key={game.id}>
                      <a
                        href={game.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[44px] items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-amber-400/40 hover:text-white"
                      >
                        <span className="truncate">{game.title}</span>
                        <ExternalLink className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
