import { useLanguage } from '@/contexts/LanguageContext';
import { translations, technologies } from '@/lib/i18n';

export function Technologies() {
  const { language } = useLanguage();
  const t = translations[language];

  const categoryLabels = {
    microsoft: t.technologies.categories.microsoft,
    python: t.technologies.categories.python,
    database: t.technologies.categories.database,
    other: t.technologies.categories.other,
  };

  return (
    <section id="technologies" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.technologies.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.technologies.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              {categoryLabels.microsoft}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.microsoft.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              {categoryLabels.python}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.python.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              {categoryLabels.database}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.database.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              {categoryLabels.other}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.other.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
        clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
      }} />
    </section>
  );
}
