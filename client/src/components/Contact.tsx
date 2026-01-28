import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t.contact.subtitle}
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:iagom2911@gmail.com"
              className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.contact.email}</h3>
              <p className="text-sm text-muted-foreground break-all">
                iagom2911@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/iagomarcelo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.contact.linkedin}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'pt' ? 'Conecte comigo' : 'Connect with me'}
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/iagomarcelo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.contact.github}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'pt' ? 'Veja meus projetos' : 'View my projects'}
              </p>
            </a>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-blue-700 text-white gap-2"
            asChild
          >
            <a href="mailto:iagom2911@gmail.com">
              <Mail className="w-5 h-5" />
              {t.contact.send}
            </a>
          </Button>

          {/* Additional Contact Info */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {language === 'pt' 
                ? 'Também disponível por WhatsApp e ligações'
                : 'Also available via WhatsApp and calls'}
            </p>
            <a
              href="https://wa.me/5581982793525"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00bf16ff' }}
              className="inline-flex items-center gap-2 mt-4 text-primary hover:text-blue-700 font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              +55 (81) 98279-3525
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-blue-50" style={{
        clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0 100%)',
      }} />
    </section>
  );
}
