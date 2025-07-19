import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'fr' | 'es' | 'ru' | 'zh' | 'ja' | 'de' | 'it' | 'pt' | 'sq';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      services: 'Services',
      contact: 'Contact',
      letsTalk: 'Let\'s Talk'
    },
    hero: {
      subtitle: 'Creative Solutions',
      greeting: 'Hello, I\'m',
      title1: 'Theo',
      title2: 'Blondel',
      title3: 'Mediamatician',
      description: 'Versatile creative solutions - Mediamatician based in Switzerland. Creating authentic visual experiences and brand identities.',
      contactMe: 'Contact Me',
      watchDemo: 'Watch Demo',
      yearsExperience: 'Years Experience',
      projectsDelivered: 'Projects Delivered',
      clientSatisfaction: 'Client Satisfaction',
      clientsWorldwide: 'Clients Worldwide',
      service1: {
        title: 'Brand Identity',
        desc: 'Complete visual identity creation'
      },
      service2: {
        title: 'UI/UX Design',
        desc: 'Intuitive user experiences'
      },
      service3: {
        title: 'Web Development',
        desc: 'Modern responsive websites'
      },
      service4: {
        title: 'Creative Direction',
        desc: 'Strategic visual guidance'
      }
    },
    about: {
      subtitle: 'About Me',
      title1: 'Creative',
      title2: 'Solutions',
      description1: 'Passionate mediamatician based in Switzerland, I combine artistic creativity with technical expertise to create authentic visual experiences. My holistic approach to design allows me to develop creative solutions that tell your story uniquely.',
      description2: 'Specialized in brand identity and interface design, I support my clients in creating memorable experiences that leave a mark and generate concrete results.',
      learnMore: 'Learn More',
      whatAmIFor: 'What am I for?',
      skill1: {
        title: 'Brand Design',
        desc: 'Complete visual identity creation'
      },
      skill2: {
        title: 'UI/UX Design',
        desc: 'Intuitive user experiences'
      },
      skill3: {
        title: 'Web Development',
        desc: 'Modern responsive websites'
      },
      skill4: {
        title: 'Creative Direction',
        desc: 'Strategic visual guidance'
      }
    },
    portfolio: {
      subtitle: 'My Work',
      title1: 'Selected',
      title2: 'Projects',
      description: 'Discover some of my recent projects and creative realizations.',
      viewAllBehance: 'View All on Behance'
    },
    process: {
      subtitle: 'My Process',
      title: 'How I Work',
      step1: {
        title: 'Discovery',
        desc: 'Understanding your needs and objectives'
      },
      step2: {
        title: 'Research',
        desc: 'Market analysis and inspiration gathering'
      },
      step3: {
        title: 'Concept',
        desc: 'Creative ideation and concept development'
      },
      step4: {
        title: 'Design',
        desc: 'Visual creation and refinement'
      },
      step5: {
        title: 'Feedback',
        desc: 'Collaboration and iterative improvements'
      },
      step6: {
        title: 'Delivery',
        desc: 'Final delivery and implementation support'
      },
      exampleSubtitle: 'Concrete Example',
      exampleTitle: 'Concrete Example',
      exampleDescription: 'Discover how I transform an idea into concrete realization.'
    },
    services: {
      subtitle: 'Services',
      title: 'What I Offer',
      description: 'Complete creative solutions for your digital and print projects.',
      startProject: 'Start a Project',
      brandIdentity: {
        title: 'Brand Identity',
        desc: 'Complete visual identity creation for your brand',
        feature1: 'Logo Design',
        feature2: 'Brand Guidelines',
        feature3: 'Visual Identity',
        feature4: 'Brand Strategy'
      },
      uiux: {
        title: 'UI/UX Design',
        desc: 'Intuitive and engaging user experiences',
        feature1: 'User Research',
        feature2: 'Wireframing',
        feature3: 'Prototyping',
        feature4: 'User Testing'
      },
      webDev: {
        title: 'Web Development',
        desc: 'Modern and responsive websites',
        feature1: 'Responsive Design',
        feature2: 'Performance Optimization',
        feature3: 'SEO Integration',
        feature4: 'CMS Integration'
      },
      mobile: {
        title: 'Mobile Design',
        desc: 'Native and cross-platform mobile applications',
        feature1: 'iOS Design',
        feature2: 'Android Design',
        feature3: 'App Prototyping',
        feature4: 'User Flow Design'
      },
      creative: {
        title: 'Creative Direction',
        desc: 'Strategic visual guidance for your projects',
        feature1: 'Art Direction',
        feature2: 'Creative Strategy',
        feature3: 'Visual Storytelling',
        feature4: 'Brand Positioning'
      },
      motion: {
        title: 'Motion Graphics',
        desc: 'Dynamic animations and video content',
        feature1: 'Animation Design',
        feature2: 'Video Editing',
        feature3: 'Motion Branding',
        feature4: 'Interactive Media'
      }
    },
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What Clients Say',
      description: 'Feedback from clients I\'ve had the pleasure to work with.',
      trustedBy: 'Trusted By',
      trustedByDesc: 'I\'ve had the privilege of working with amazing clients worldwide.',
      googleReviewTitle: 'Leave a Review',
      googleReviewDescription: 'Your feedback helps me improve and helps others discover my services.',
      googleReviewButton: 'Write a Review',
      googleReviewFooter: 'Based on Google Reviews'
    },
    contact: {
      subtitle: 'Contact',
      title1: 'Let\'s Work',
      title2: 'Together',
      description: 'Ready to start your next project? Let\'s discuss how I can help bring your vision to life.',
      getInTouch: 'Get in Touch',
      getInTouchDesc: 'I\'m always excited to discuss new projects and creative opportunities.',
      email: 'Email',
      emailDesc: 'Send me a message anytime',
      location: 'Location',
      locationValue: 'Zurich, Switzerland',
      locationDesc: 'Available for remote and on-site work',
      followMe: 'Follow Me',
      sendMessage: 'Send a Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Project inquiry',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendBtn: 'Send Message'
    },
    footer: {
      madeWith: 'Made with',
      inSwitzerland: 'in Switzerland',
      backToTop: 'Back to Top'
    },
    fakeChat: {
      clientName: 'NOIRBRUME Client',
      onlineStatus: 'Online',
      typingIndicator: 'typing...',
      message1: 'Hi Theo! We need a complete brand identity for our new luxury hotel concept.',
      message2: 'Perfect! I\'d love to help you create something unique. Can you tell me more about your vision?',
      message3: 'We want something that balances Greek tradition with modern luxury. Think sophisticated but approachable.',
      message4: 'That sounds fascinating! Let me create some initial concepts that capture that balance.',
      message5: 'Here are some inspiration images we found that represent our aesthetic.',
      message6: 'Excellent references! I can see the direction clearly now.',
      message7: 'Here\'s the first concept - ATHENIS. What do you think?',
      message8: 'This is exactly what we envisioned! The balance is perfect. Let\'s move forward with this.',
      timestamp1: '10:30 AM',
      timestamp2: '10:32 AM',
      timestamp3: '10:35 AM',
      timestamp4: '10:37 AM',
      timestamp5: '10:40 AM',
      timestamp6: '10:42 AM',
      timestamp7: '2:15 PM',
      timestamp8: '2:18 PM',
      attachmentName1: 'inspiration-images.zip',
      attachmentName2: 'athenis-concept-v1.pdf',
      attachmentLabel: 'File attachment',
      downloadButton: 'Download'
    },
    testimonial1: {
      name: 'Sarah Mitchell',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      project: 'Complete Brand Redesign',
      date: 'March 2024',
      content: 'Theo transformed our outdated brand into something modern and compelling. His attention to detail and creative vision exceeded our expectations.'
    },
    testimonial2: {
      name: 'Marcus Weber',
      role: 'CEO',
      company: 'Alpine Ventures',
      project: 'Website & Mobile App',
      date: 'February 2024',
      content: 'Working with Theo was a game-changer for our startup. He delivered a stunning website and mobile app that perfectly represents our brand.'
    },
    testimonial3: {
      name: 'Elena Rodriguez',
      role: 'Creative Director',
      company: 'Studio Lumina',
      project: 'Motion Graphics Campaign',
      date: 'January 2024',
      content: 'Theo\'s motion graphics work brought our campaign to life. His creativity and technical skills are truly impressive.'
    },
    testimonial4: {
      name: 'David Chen',
      role: 'Product Manager',
      company: 'InnovateLab',
      project: 'UI/UX Redesign',
      date: 'December 2023',
      content: 'The UI/UX redesign Theo created increased our user engagement by 40%. His user-centered approach is exceptional.'
    },
    testimonial5: {
      name: 'Sophie Laurent',
      role: 'Founder',
      company: 'Eco Fashion Co.',
      project: 'Brand Identity & Packaging',
      date: 'November 2023',
      content: 'Theo understood our sustainable fashion brand perfectly. The identity he created resonates with our eco-conscious audience.'
    },
    testimonial6: {
      name: 'James Thompson',
      role: 'Marketing Lead',
      company: 'FinTech Pro',
      project: 'Dashboard Interface',
      date: 'October 2023',
      content: 'The dashboard interface Theo designed is both beautiful and functional. Our users love the intuitive experience.'
    },
    testimonial7: {
      name: 'Anna Kowalski',
      role: 'Brand Manager',
      company: 'Luxury Hotels Group',
      project: 'Digital Experience',
      date: 'September 2023',
      content: 'Theo created a digital experience that perfectly captures our luxury brand essence. Absolutely outstanding work.'
    }
  },
  fr: {
    nav: {
      about: 'À Propos',
      work: 'Projets',
      services: 'Services',
      contact: 'Contact',
      letsTalk: 'Discutons'
    },
    hero: {
      subtitle: 'Solutions Créatives',
      greeting: 'Salut, je suis',
      title1: 'Theo',
      title2: 'Blondel',
      title3: 'Médiamaticien',
      description: 'Solutions créatives polyvalente - Médiamaticien basé en Suisse. Création d\'expériences visuelles authentiques et d\'identités de marque.',
      contactMe: 'Me Contacter',
      watchDemo: 'Voir la Démo',
      yearsExperience: 'Années d\'Expérience',
      projectsDelivered: 'Projets Livrés',
      clientSatisfaction: 'Satisfaction Client',
      clientsWorldwide: 'Clients dans le Monde',
      service1: {
        title: 'Identité de Marque',
        desc: 'Création d\'identité visuelle complète'
      },
      service2: {
        title: 'Design UI/UX',
        desc: 'Expériences utilisateur intuitives'
      },
      service3: {
        title: 'Développement Web',
        desc: 'Sites web modernes et responsifs'
      },
      service4: {
        title: 'Direction Créative',
        desc: 'Guidance visuelle stratégique'
      }
    },
    about: {
      subtitle: 'À Propos',
      title1: 'Solutions',
      title2: 'Créatives',
      description1: 'Médiamaticien passionné basé en Suisse, je combine créativité artistique et expertise technique pour créer des expériences visuelles authentiques. Mon approche holistique du design me permet de développer des solutions créatives qui racontent votre histoire de manière unique.',
      description2: 'Spécialisé en identité de marque et design d\'interface, j\'accompagne mes clients dans la création d\'expériences mémorables qui marquent les esprits et génèrent des résultats concrets.',
      learnMore: 'En Savoir Plus',
      whatAmIFor: 'À quoi je sers ?',
      skill1: {
        title: 'Design de Marque',
        desc: 'Création d\'identité visuelle complète'
      },
      skill2: {
        title: 'Design UI/UX',
        desc: 'Expériences utilisateur intuitives'
      },
      skill3: {
        title: 'Développement Web',
        desc: 'Sites web modernes et responsifs'
      },
      skill4: {
        title: 'Direction Créative',
        desc: 'Guidance visuelle stratégique'
      }
    },
    portfolio: {
      subtitle: 'Mes Projets',
      title1: 'Projets',
      title2: 'Sélectionnés',
      description: 'Découvrez quelques-uns de mes projets récents et réalisations créatives.',
      viewAllBehance: 'Voir Tout sur Behance'
    },
    process: {
      subtitle: 'Mon Processus',
      title: 'Comment Je Travaille',
      step1: {
        title: 'Découverte',
        desc: 'Comprendre vos besoins et objectifs'
      },
      step2: {
        title: 'Recherche',
        desc: 'Analyse du marché et collecte d\'inspiration'
      },
      step3: {
        title: 'Concept',
        desc: 'Idéation créative et développement de concept'
      },
      step4: {
        title: 'Design',
        desc: 'Création visuelle et raffinement'
      },
      step5: {
        title: 'Feedback',
        desc: 'Collaboration et améliorations itératives'
      },
      step6: {
        title: 'Livraison',
        desc: 'Livraison finale et support d\'implémentation'
      },
      exampleSubtitle: 'Exemple Concret',
      exampleTitle: 'Exemple Concret',
      exampleDescription: 'Découvrez comment je transforme une idée en réalisation concrète.'
    },
    services: {
      subtitle: 'Services',
      title: 'Ce Que J\'Offre',
      description: 'Solutions créatives complètes pour vos projets digitaux et print.',
      startProject: 'Démarrer un Projet',
      brandIdentity: {
        title: 'Identité de Marque',
        desc: 'Création d\'identité visuelle complète pour votre marque',
        feature1: 'Design de Logo',
        feature2: 'Guidelines de Marque',
        feature3: 'Identité Visuelle',
        feature4: 'Stratégie de Marque'
      },
      uiux: {
        title: 'Design UI/UX',
        desc: 'Expériences utilisateur intuitives et engageantes',
        feature1: 'Recherche Utilisateur',
        feature2: 'Wireframing',
        feature3: 'Prototypage',
        feature4: 'Tests Utilisateur'
      },
      webDev: {
        title: 'Développement Web',
        desc: 'Sites web modernes et responsifs',
        feature1: 'Design Responsif',
        feature2: 'Optimisation Performance',
        feature3: 'Intégration SEO',
        feature4: 'Intégration CMS'
      },
      mobile: {
        title: 'Design Mobile',
        desc: 'Applications mobiles natives et cross-platform',
        feature1: 'Design iOS',
        feature2: 'Design Android',
        feature3: 'Prototypage App',
        feature4: 'Design de Flux Utilisateur'
      },
      creative: {
        title: 'Direction Créative',
        desc: 'Guidance visuelle stratégique pour vos projets',
        feature1: 'Direction Artistique',
        feature2: 'Stratégie Créative',
        feature3: 'Storytelling Visuel',
        feature4: 'Positionnement de Marque'
      },
      motion: {
        title: 'Motion Graphics',
        desc: 'Animations dynamiques et contenu vidéo',
        feature1: 'Design d\'Animation',
        feature2: 'Montage Vidéo',
        feature3: 'Branding en Mouvement',
        feature4: 'Médias Interactifs'
      }
    },
    testimonials: {
      subtitle: 'Témoignages',
      title: 'Ce Que Disent les Clients',
      description: 'Retours de clients avec qui j\'ai eu le plaisir de travailler.',
      trustedBy: 'Ils Me Font Confiance',
      trustedByDesc: 'J\'ai eu le privilège de travailler avec des clients formidables dans le monde entier.',
      googleReviewTitle: 'Laisser un Avis',
      googleReviewDescription: 'Vos commentaires m\'aident à m\'améliorer et aident les autres à découvrir mes services.',
      googleReviewButton: 'Écrire un Avis',
      googleReviewFooter: 'Basé sur les Avis Google'
    },
    contact: {
      subtitle: 'Contact',
      title1: 'Travaillons',
      title2: 'Ensemble',
      description: 'Prêt à démarrer votre prochain projet ? Discutons de la façon dont je peux vous aider à donner vie à votre vision.',
      getInTouch: 'Entrer en Contact',
      getInTouchDesc: 'Je suis toujours ravi de discuter de nouveaux projets et d\'opportunités créatives.',
      email: 'Email',
      emailDesc: 'Envoyez-moi un message à tout moment',
      location: 'Localisation',
      locationValue: 'Zurich, Suisse',
      locationDesc: 'Disponible pour le travail à distance et sur site',
      followMe: 'Me Suivre',
      sendMessage: 'Envoyer un Message',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre.email@exemple.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Demande de projet',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      sendBtn: 'Envoyer le Message'
    },
    footer: {
      madeWith: 'Fait avec',
      inSwitzerland: 'en Suisse',
      backToTop: 'Retour en Haut'
    },
    fakeChat: {
      clientName: 'Client NOIRBRUME',
      onlineStatus: 'En ligne',
      typingIndicator: 'en train d\'écrire...',
      message1: 'Salut Theo ! Nous avons besoin d\'une identité de marque complète pour notre nouveau concept d\'hôtel de luxe.',
      message2: 'Parfait ! J\'adorerais vous aider à créer quelque chose d\'unique. Pouvez-vous me parler davantage de votre vision ?',
      message3: 'Nous voulons quelque chose qui équilibre la tradition grecque avec le luxe moderne. Pensez sophistiqué mais accessible.',
      message4: 'Cela semble fascinant ! Laissez-moi créer quelques concepts initiaux qui capturent cet équilibre.',
      message5: 'Voici quelques images d\'inspiration que nous avons trouvées qui représentent notre esthétique.',
      message6: 'Excellentes références ! Je vois clairement la direction maintenant.',
      message7: 'Voici le premier concept - ATHENIS. Qu\'en pensez-vous ?',
      message8: 'C\'est exactement ce que nous avions imaginé ! L\'équilibre est parfait. Allons de l\'avant avec ceci.',
      timestamp1: '10h30',
      timestamp2: '10h32',
      timestamp3: '10h35',
      timestamp4: '10h37',
      timestamp5: '10h40',
      timestamp6: '10h42',
      timestamp7: '14h15',
      timestamp8: '14h18',
      attachmentName1: 'images-inspiration.zip',
      attachmentName2: 'concept-athenis-v1.pdf',
      attachmentLabel: 'Pièce jointe',
      downloadButton: 'Télécharger'
    },
    testimonial1: {
      name: 'Sarah Mitchell',
      role: 'Directrice Marketing',
      company: 'TechFlow Solutions',
      project: 'Refonte Complète de Marque',
      date: 'Mars 2024',
      content: 'Theo a transformé notre marque dépassée en quelque chose de moderne et convaincant. Son attention aux détails et sa vision créative ont dépassé nos attentes.'
    },
    testimonial2: {
      name: 'Marcus Weber',
      role: 'PDG',
      company: 'Alpine Ventures',
      project: 'Site Web & App Mobile',
      date: 'Février 2024',
      content: 'Travailler avec Theo a été un tournant pour notre startup. Il a livré un site web et une app mobile magnifiques qui représentent parfaitement notre marque.'
    },
    testimonial3: {
      name: 'Elena Rodriguez',
      role: 'Directrice Créative',
      company: 'Studio Lumina',
      project: 'Campagne Motion Graphics',
      date: 'Janvier 2024',
      content: 'Le travail de motion graphics de Theo a donné vie à notre campagne. Sa créativité et ses compétences techniques sont vraiment impressionnantes.'
    },
    testimonial4: {
      name: 'David Chen',
      role: 'Chef de Produit',
      company: 'InnovateLab',
      project: 'Refonte UI/UX',
      date: 'Décembre 2023',
      content: 'La refonte UI/UX créée par Theo a augmenté l\'engagement de nos utilisateurs de 40%. Son approche centrée utilisateur est exceptionnelle.'
    },
    testimonial5: {
      name: 'Sophie Laurent',
      role: 'Fondatrice',
      company: 'Eco Fashion Co.',
      project: 'Identité de Marque & Packaging',
      date: 'Novembre 2023',
      content: 'Theo a parfaitement compris notre marque de mode durable. L\'identité qu\'il a créée résonne avec notre audience éco-consciente.'
    },
    testimonial6: {
      name: 'James Thompson',
      role: 'Responsable Marketing',
      company: 'FinTech Pro',
      project: 'Interface Dashboard',
      date: 'Octobre 2023',
      content: 'L\'interface dashboard conçue par Theo est à la fois belle et fonctionnelle. Nos utilisateurs adorent l\'expérience intuitive.'
    },
    testimonial7: {
      name: 'Anna Kowalski',
      role: 'Responsable de Marque',
      company: 'Luxury Hotels Group',
      project: 'Expérience Digitale',
      date: 'Septembre 2023',
      content: 'Theo a créé une expérience digitale qui capture parfaitement l\'essence de notre marque de luxe. Travail absolument remarquable.'
    }
  },
  // Add other languages with the same structure...
  es: {
    // Spanish translations would go here
    nav: {
      about: 'Acerca de',
      work: 'Trabajo',
      services: 'Servicios',
      contact: 'Contacto',
      letsTalk: 'Hablemos'
    },
    process: {
      subtitle: 'Mi Proceso',
      title: 'Cómo Trabajo',
      step1: {
        title: 'Descubrimiento',
        desc: 'Entender tus necesidades y objetivos'
      },
      step2: {
        title: 'Investigación',
        desc: 'Análisis de mercado y recopilación de inspiración'
      },
      step3: {
        title: 'Concepto',
        desc: 'Ideación creativa y desarrollo de concepto'
      },
      step4: {
        title: 'Diseño',
        desc: 'Creación visual y refinamiento'
      },
      step5: {
        title: 'Retroalimentación',
        desc: 'Colaboración y mejoras iterativas'
      },
      step6: {
        title: 'Entrega',
        desc: 'Entrega final y soporte de implementación'
      },
      exampleSubtitle: 'Ejemplo Concreto',
      exampleTitle: 'Ejemplo Concreto',
      exampleDescription: 'Descubre cómo transformo una idea en realización concreta.'
    },
    // ... other sections
  },
  // Add other languages (ru, zh, ja, de, it, pt, sq) with similar structure
};

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved && Object.keys(translations).includes(saved)) return saved as Language;
      const browserLang = navigator.language.split('-')[0];
      if (Object.keys(translations).includes(browserLang)) return browserLang as Language;
    }
    return 'fr'; // Default to French
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: AppContextType = {
    theme,
    language,
    toggleTheme,
    setLanguage,
    t
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}