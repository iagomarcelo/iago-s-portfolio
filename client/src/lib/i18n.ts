export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      technologies: 'Tecnologias',
      portfolio: 'Portfólio',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      title: 'Desenvolvedor Microsoft Power Platform & RPA',
      subtitle: 'Transformando Processos Manuais em Automações Inteligentes',
      description: 'Especialista em Microsoft Power Platform, Dynamics 365, RPA com Python e análise de requisitos. Criando soluções escaláveis que economizam tempo e aumentam produtividade.',
      cta: 'Ver Projetos',
      stats: {
        experience: 'Anos de Experiência',
        projects: 'Projetos Entregues',
        hours: 'Horas Economizadas',
      },
    },
    technologies: {
      title: 'Stack Técnica',
      subtitle: 'Tecnologias consolidadas para criar soluções robustas',
      categories: {
        microsoft: 'Microsoft & Power Platform',
        python: 'Python & Automação',
        database: 'Banco de Dados',
        other: 'Outras Tecnologias',
      },
    },
    portfolio: {
      title: 'Portfólio',
      subtitle: 'Projetos que transformaram processos manuais em soluções eficientes',
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Trajetória profissional com foco em inovação e resultados',
      current: 'Atual',
      cogna: {
        title: 'Desenvolvedor Microsoft Power Platform',
        company: 'Cogna Educação',
        period: 'Março/2024 - Atual',
        description: 'Automação de processos em Power Platform, desenvolvimento de chatbots com Copilot Studio, integração com OpenAI, customização de Dynamics 365.',
      },
      fsbr: {
        title: 'Analista de Requisitos & DBA',
        company: 'FSBR - Fábrica de Software do Brasil',
        period: 'Julho/2023 - Março/2024',
        description: 'Elicitação de requisitos, análise de necessidades do cliente, estruturação de banco de dados Oracle SQL.',
      },
      tpf: {
        title: 'Engenheiro de Software RPA',
        company: 'TPF Engenharia',
        period: 'Maio/2022 - Maio/2023',
        description: 'Desenvolvimento Python com bibliotecas de automação, Power Automate, Sharepoint Lists, desde definição de requisitos até apresentação ao cliente.',
      },
    },
    education: {
      title: 'Formação Acadêmica',
      postgrad: 'Pós-Graduado Lato Sensu em Engenharia da Computação',
      postgrad_school: 'Faculdade Anhanguera',
      postgrad_year: '2025',
      tech: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      tech_school: 'Faculdade SENAC Pernambuco',
      tech_year: '2021 - 2023',
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Estou aberto a novas oportunidades e desafios',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      send: 'Enviar Email',
    },
    footer: {
      copyright: '© 2025 Iago Marcelo. Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      technologies: 'Technologies',
      portfolio: 'Portfolio',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      title: 'Microsoft Power Platform & RPA Developer',
      subtitle: 'Transforming Manual Processes into Intelligent Automation',
      description: 'Expert in Microsoft Power Platform, Dynamics 365, RPA with Python and requirements analysis. Creating scalable solutions that save time and increase productivity.',
      cta: 'View Projects',
      stats: {
        experience: 'Years of Experience',
        projects: 'Projects Delivered',
        hours: 'Hours Saved',
      },
    },
    technologies: {
      title: 'Tech Stack',
      subtitle: 'Consolidated technologies for building robust solutions',
      categories: {
        microsoft: 'Microsoft & Power Platform',
        python: 'Python & Automation',
        database: 'Databases',
        other: 'Other Technologies',
      },
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Projects that transformed manual processes into efficient solutions',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Professional journey focused on innovation and results',
      current: 'Current',
      cogna: {
        title: 'Microsoft Power Platform Developer',
        company: 'Cogna Educação',
        period: 'March/2024 - Current',
        description: 'Process automation in Power Platform, chatbot development with Copilot Studio, OpenAI integration, Dynamics 365 customization.',
      },
      fsbr: {
        title: 'Requirements Analyst & DBA',
        company: 'FSBR - Fábrica de Software do Brasil',
        period: 'July/2023 - March/2024',
        description: 'Requirements elicitation, client needs analysis, Oracle SQL database structuring.',
      },
      tpf: {
        title: 'RPA Software Engineer',
        company: 'TPF Engineering',
        period: 'May/2022 - May/2023',
        description: 'Python development with automation libraries, Power Automate, Sharepoint Lists, from requirements definition to client presentation.',
      },
    },
    education: {
      title: 'Education',
      postgrad: 'Lato Sensu Postgraduate in Computer Engineering',
      postgrad_school: 'Anhanguera University',
      postgrad_year: '2025',
      tech: 'Technologist in Systems Analysis and Development',
      tech_school: 'SENAC Pernambuco',
      tech_year: '2021 - 2023',
    },
    contact: {
      title: 'Let\'s Talk',
      subtitle: 'I\'m open to new opportunities and challenges',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      send: 'Send Email',
    },
    footer: {
      copyright: '© 2025 Iago Marcelo. All rights reserved.',
    },
  },
};

export const technologies = {
  microsoft: [
    { name: 'Power Platform', icon: '⚡' },
    { name: 'Dynamics 365', icon: '🔄' },
    { name: 'Power Automate', icon: '🤖' },
    { name: 'Power Apps', icon: '📱' },
    { name: 'Copilot Studio', icon: '🤖' },
    { name: 'Dataverse', icon: '💾' },
  ],
  python: [
    { name: 'Python', icon: '🐍' },
    { name: 'Pandas', icon: '📊' },
    { name: 'Selenium', icon: '🌐' },
    { name: 'PyAutoGUI', icon: '🖱️' },
    { name: 'OpenPyXL', icon: '📑' },
    { name: 'NumPy', icon: '🔢' },
  ],
  database: [
    { name: 'Oracle SQL', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🔵' },
    { name: 'SQL Server', icon: '📊' },
    { name: 'SQLAlchemy', icon: '🔗' },
  ],
  other: [
    { name: 'REST APIs', icon: '🔌' },
    { name: 'JavaScript', icon: '⚙️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git/GitHub', icon: '🐙' },
    { name: 'Azure AD', icon: '🔐' },
    { name: 'OpenAI', icon: '🧠' },
  ],
};

export const projects = {
  pt: [
    {
      id: 1,
      title: 'Automação Excel para Word',
      company: 'Autônomo',
      description: 'Desenvolvimento de automação usando Power Automate para extrair dados de planilha Excel e preencher templates de contratos em Word. Integração com Power Apps para disparo de gatilhos.',
      impact: 'Economizou mais de 10h semanais de trabalho manual',
      technologies: ['Power Automate', 'Power Apps', 'Python', 'Excel'],
      link: 'https://bit.ly/robo-excel-para-docx',
    },
    {
      id: 2,
      title: 'Chatbot RAFA - Assistente Virtual',
      company: 'Cogna Educação',
      description: 'Desenvolvimento de tópicos no Copilot Studio para assistente virtual que fornece suporte 24h para mais de 24 mil colaboradores. Integração com OpenAI e Dynamics 365.',
      impact: 'Atendimento humanizado com IA para 24+ mil usuários',
      technologies: ['Copilot Studio', 'OpenAI', 'Dynamics 365', 'Power Automate'],
    },
    {
      id: 3,
      title: 'Automação de Processos RPA',
      company: 'Cogna Educação',
      description: 'Automação de processos no setor de gente e cultura, incluindo fluxos de Pré-Onboarding, Onboarding e mensagerias de alertas.',
      impact: 'Redução significativa de tempo em processos manuais',
      technologies: ['Power Automate', 'Dataverse', 'Power Apps', 'JavaScript'],
    },
  ],
  en: [
    {
      id: 1,
      title: 'Excel to Word Automation',
      company: 'Freelance',
      description: 'Automation development using Power Automate to extract data from Excel spreadsheets and fill contract templates in Word. Integration with Power Apps for trigger dispatch.',
      impact: 'Saved over 10 hours per week of manual work',
      technologies: ['Power Automate', 'Power Apps', 'Python', 'Excel'],
      link: 'https://bit.ly/robo-excel-para-docx',
    },
    {
      id: 2,
      title: 'RAFA Chatbot - Virtual Assistant',
      company: 'Cogna Educação',
      description: 'Development of topics in Copilot Studio for virtual assistant providing 24/7 support to over 24 thousand employees. Integration with OpenAI and Dynamics 365.',
      impact: 'Humanized AI-powered support for 24+ thousand users',
      technologies: ['Copilot Studio', 'OpenAI', 'Dynamics 365', 'Power Automate'],
    },
    {
      id: 3,
      title: 'RPA Process Automation',
      company: 'Cogna Educação',
      description: 'Process automation in the people and culture department, including Pre-Onboarding, Onboarding flows and alert messaging.',
      impact: 'Significant reduction in manual process time',
      technologies: ['Power Automate', 'Dataverse', 'Power Apps', 'JavaScript'],
    },
  ],
};
