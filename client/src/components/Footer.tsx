import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IM</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Iago Marcelo</p>
              <p className="text-xs text-muted-foreground">
                {language === 'pt' 
                  ? 'Desenvolvedor Power Platform & RPA'
                  : 'Power Platform & RPA Developer'}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
