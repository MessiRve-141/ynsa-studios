import { useEffect, useState } from 'react';
import { CreditsSection } from './components/CreditsSection';
import { CreatorStorySection } from './components/CreatorStorySection';
import { Footer } from './components/Footer';
import { GamesHubGrid } from './components/GamesHubGrid';
import { GameUniversesShowcase } from './components/GameUniversesShowcase';
import { HeroSection } from './components/HeroSection';
import { Navbar, type HubSectionId } from './components/Navbar';
import { AfterFallPresentation } from './components/games/AfterFallPresentation';
import { VigiliaPresentation } from './components/games/VigiliaPresentation';
import { YnsanityPresentation } from './components/games/YnsanityPresentation';
import type { GameId } from './data/games';
import { parseGameFromHash } from './utils/navigation';

export default function App() {
  const [activeGameId, setActiveGameId] = useState<GameId | null>(() => {
    if (typeof window === 'undefined') return null;
    return parseGameFromHash(window.location.hash);
  });

  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseGameFromHash(window.location.hash);
      setActiveGameId(parsed);
      if (parsed) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectGame = (id: GameId) => {
    setActiveGameId(id);
    window.history.pushState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHub = () => {
    setActiveGameId(null);
    window.history.pushState(null, '', '#inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (section: HubSectionId) => {
    if (activeGameId !== null) {
      setActiveGameId(null);
      window.history.pushState(null, '', `#${section}`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = document.getElementById(section);
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      return;
    }

    window.history.replaceState(null, '', `#${section}`);
    const target = document.getElementById(section);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F3F4F6]">
      <Navbar
        activeGameId={activeGameId}
        onNavigateSection={navigateToSection}
        onBackToHub={backToHub}
      />

      <main>
        {activeGameId === 'vigilia' && (
          <VigiliaPresentation onBackToHub={backToHub} onSelectGame={selectGame} />
        )}

        {activeGameId === 'ynsanity-racing' && (
          <YnsanityPresentation onBackToHub={backToHub} onSelectGame={selectGame} />
        )}

        {activeGameId === 'after-the-fall' && (
          <AfterFallPresentation onBackToHub={backToHub} onSelectGame={selectGame} />
        )}

        {activeGameId === null && (
          <>
            <HeroSection onExploreGames={() => navigateToSection('juegos')} />
            <GamesHubGrid onSelectGame={selectGame} />
            <GameUniversesShowcase onSelectGame={selectGame} />
            <CreatorStorySection />
            <CreditsSection />
          </>
        )}
      </main>

      <Footer onSelectGame={selectGame} onBackToHub={backToHub} />
    </div>
  );
}
