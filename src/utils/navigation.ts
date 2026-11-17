import { ALL_GAMES, type GameEntry, type GameId } from '../data/games';

export const VALID_GAME_IDS: readonly GameId[] = [
  'vigilia',
  'ynsanity-racing',
  'after-the-fall',
];

export function isValidGameId(value: string | null | undefined): value is GameId {
  return Boolean(value && VALID_GAME_IDS.includes(value as GameId));
}

export function parseGameFromHash(hash: string): GameId | null {
  const cleaned = hash.replace(/^#\/?/, '').trim().toLowerCase();
  if (isValidGameId(cleaned)) {
    return cleaned;
  }
  return null;
}

export function getGameById(id: GameId): GameEntry {
  const found = ALL_GAMES.find((game) => game.id === id);
  if (!found) {
    return ALL_GAMES[0];
  }
  return found;
}

export function getAdjacentGames(id: GameId): { prev: GameEntry; next: GameEntry } {
  const index = ALL_GAMES.findIndex((game) => game.id === id);
  const safeIndex = index === -1 ? 0 : index;
  const prevIndex = (safeIndex - 1 + ALL_GAMES.length) % ALL_GAMES.length;
  const nextIndex = (safeIndex + 1) % ALL_GAMES.length;
  return {
    prev: ALL_GAMES[prevIndex],
    next: ALL_GAMES[nextIndex],
  };
}

export function isTrustedGameUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === 'https:' &&
      (parsed.hostname === 'vigilia-terror.lovable.app' ||
        parsed.hostname === 'ynsanity-racing.lovable.app' ||
        parsed.hostname === 'after-the-fall.lovable.app')
    );
  } catch {
    return false;
  }
}
