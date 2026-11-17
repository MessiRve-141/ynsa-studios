import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export type HubSectionId = 'inicio' | 'juegos' | 'acerca' | 'historia' | 'creditos';

interface NavbarProps {
  activeGameId: string | null;
  onNavigateSection: (section: HubSectionId) => void;
  onBackToHub: () => void;
}

const NAV_ITEMS: { id: HubSectionId; label: string }[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'juegos', label: 'Explorar juegos' },
  { id: 'acerca', label: 'Acerca de los juegos' },
  { id: 'historia', label: 'Historia del creador' },
  { id: 'creditos', label: 'Créditos' },
];

export function Navbar({ activeGameId, onNavigateSection, onBackToHub }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (section: HubSectionId) => {
    setMobileOpen(false);
    onNavigateSection(section);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            if (activeGameId) {
              onBackToHub();
            } else {
              handleNavClick('inicio');
            }
          }}
          className="font-display text-lg font-bold tracking-wide text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
        >
          YNSA STUDIOS
        </a>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="relative py-1 text-neutral-300 transition-colors duration-150 hover:text-white whitespace-nowrap shrink-0 cursor-pointer after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('juegos')}
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2 text-xs font-semibold tracking-wide text-neutral-950 transition-colors duration-150 hover:bg-amber-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Explorar juegos
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-neutral-200 transition-colors hover:bg-white/10 lg:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Responsive mobile & tablet menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-white/10 bg-[#0A0B0E] px-4 py-4 lg:hidden"
        >
          <nav aria-label="Menú móvil" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="flex min-h-[44px] items-center rounded-md px-3 text-left text-sm font-medium text-neutral-200 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
