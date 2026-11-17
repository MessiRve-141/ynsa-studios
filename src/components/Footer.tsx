import { ALL_GAMES, type GameId } from '../data/games';

interface FooterProps {
  onSelectGame: (id: GameId) => void;
  onBackToHub: () => void;
}

export function Footer({ onSelectGame, onBackToHub }: FooterProps) {
  return (
    <footer className="bg-[#050608] py-12 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <button
            type="button"
            onClick={onBackToHub}
            className="font-display text-base font-bold tracking-tight text-white hover:text-amber-300 transition-colors cursor-pointer"
          >
            YNSA STUDIOS — Beyond Imagination
          </button>
          <p className="mt-1.5 text-xs text-neutral-500">
            Tres mundos independientes creados por YNSA.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          {ALL_GAMES.map((game) => (
            <button
              key={game.id}
              type="button"
              onClick={() => onSelectGame(game.id)}
              className="text-neutral-400 transition-colors hover:text-white cursor-pointer"
            >
              {game.title}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
