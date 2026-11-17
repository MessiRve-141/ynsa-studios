import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_GAMES } from '../data/games';
import {
  getAdjacentGames,
  getGameById,
  isTrustedGameUrl,
  isValidGameId,
  parseGameFromHash,
} from './navigation';

test('parseGameFromHash parses valid game hashes and ignores section anchors', () => {
  assert.equal(parseGameFromHash('#vigilia'), 'vigilia');
  assert.equal(parseGameFromHash('#/ynsanity-racing'), 'ynsanity-racing');
  assert.equal(parseGameFromHash('#AFTER-THE-FALL'), 'after-the-fall');
  assert.equal(parseGameFromHash('#historia'), null);
  assert.equal(parseGameFromHash(''), null);
});

test('isValidGameId validates strictly against the 3 studio titles', () => {
  assert.equal(isValidGameId('vigilia'), true);
  assert.equal(isValidGameId('ynsanity-racing'), true);
  assert.equal(isValidGameId('after-the-fall'), true);
  assert.equal(isValidGameId('unknown-game'), false);
  assert.equal(isValidGameId(null), false);
});

test('getAdjacentGames cycles cleanly across the 3 games', () => {
  const vigiliaAdj = getAdjacentGames('vigilia');
  assert.equal(vigiliaAdj.prev.id, 'after-the-fall');
  assert.equal(vigiliaAdj.next.id, 'ynsanity-racing');

  const racingAdj = getAdjacentGames('ynsanity-racing');
  assert.equal(racingAdj.prev.id, 'vigilia');
  assert.equal(racingAdj.next.id, 'after-the-fall');
});

test('all three games resolve and point to their exact original HTTPS URLs', () => {
  assert.equal(ALL_GAMES.length, 3);
  for (const game of ALL_GAMES) {
    assert.equal(getGameById(game.id).title, game.title);
    assert.equal(isTrustedGameUrl(game.url), true);
  }
  assert.equal(getGameById('vigilia').url, 'https://vigilia-terror.lovable.app');
  assert.equal(getGameById('ynsanity-racing').url, 'https://ynsanity-racing.lovable.app');
  assert.equal(getGameById('after-the-fall').url, 'https://after-the-fall.lovable.app');
  assert.equal(isTrustedGameUrl('https://example.com'), false);
});
