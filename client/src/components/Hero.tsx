import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden">
      {/* Background Image with Diagonal Clip */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Content */}
      <div style={{ paddingTop: '7rem' }} className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* Left Column - Text */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {language === 'pt' ? 'Disponível para novos projetos' : 'Available for new projects'}
            </span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-blue-700 text-white gap-2 group"
              onClick={() => scrollToSection('portfolio')}
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2"
              onClick={() => scrollToSection('contact')}
            >
              {language === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://linkedin.com/in/iagomarcelo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-blue-50 hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/iagomarcelo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-blue-50 hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:iagom2911@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-blue-50 hover:text-primary transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary">3+</div>
              <p className="text-sm text-muted-foreground">{t.hero.stats.experience}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <p className="text-sm text-muted-foreground">{t.hero.stats.projects}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1000+</div>
              <p className="text-sm text-muted-foreground">{t.hero.stats.hours}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Decorative Elements */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-md h-96">
            {/* Floating Cards */}
            <div className="absolute top-0 right-0 w-48 h-32 bg-white rounded-xl shadow-lg p-4 border border-border transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-sm font-semibold text-primary mb-2">Power Platform</div>
              <p className="text-xs text-muted-foreground">Dynamics 365, Power Automate, Copilot Studio</p>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-32 bg-white rounded-xl shadow-lg p-4 border border-border transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-sm font-semibold text-primary mb-2">RPA & Python</div>
              <p className="text-xs text-muted-foreground">Automação, Pandas, Selenium, PyAutoGUI</p>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
