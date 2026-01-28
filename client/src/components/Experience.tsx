import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  const experiences = [
    {
      icon: Briefcase,
      title: t.experience.cogna.title,
      company: t.experience.cogna.company,
      period: t.experience.cogna.period,
      description: t.experience.cogna.description,
      current: true,
    },
    {
      icon: Briefcase,
      title: t.experience.fsbr.title,
      company: t.experience.fsbr.company,
      period: t.experience.fsbr.period,
      description: t.experience.fsbr.description,
    },
    {
      icon: Briefcase,
      title: t.experience.tpf.title,
      company: t.experience.tpf.company,
      period: t.experience.tpf.period,
      description: t.experience.tpf.description,
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.experience.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex gap-6">
                      {/* Timeline dot and line */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 relative z-10">
                          {index + 1}
                        </div>
                        {index < experiences.length - 1 && (
                          <div className="w-1 h-24 bg-gradient-to-b from-primary to-transparent mt-2" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-6 pt-2">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-xl font-bold text-foreground">
                              {exp.title}
                            </h4>
                            <p className="text-sm text-primary font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                              {t.experience.current}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exp.period}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 border-t border-border pt-12">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              {t.education.title}
            </h3>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg border border-border hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {t.education.postgrad}
                    </h4>
                    <p className="text-sm text-primary font-semibold">
                      {t.education.postgrad_school}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.education.postgrad_year}
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-border hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {t.education.tech}
                    </h4>
                    <p className="text-sm text-primary font-semibold">
                      {t.education.tech_school}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.education.tech_year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
