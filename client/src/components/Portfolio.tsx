import { useLanguage } from '@/contexts/LanguageContext';
import { translations, projects } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language];
  const projectList = projects[language];

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.company}</p>
                  </div>
                </div>

                <p className="text-sm text-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary mb-3">
                    {language === 'pt' ? 'Impacto:' : 'Impact:'} {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 gap-2"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {language === 'pt' ? 'Ver Demonstração' : 'View Demo'}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>

              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary to-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-blue-50" style={{
        clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0 100%)',
      }} />
    </section>
  );
}
