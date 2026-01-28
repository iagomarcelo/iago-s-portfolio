import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IM</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg text-foreground">Iago Marcelo</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('technologies')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {t.nav.technologies}
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {t.nav.portfolio}
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {t.nav.experience}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Language Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="flex items-center gap-2"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-medium">{language.toUpperCase()}</span>
        </Button>
      </div>
    </nav>
  );
}
