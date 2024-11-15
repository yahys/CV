function CV() {
  const [expandedExperiences, setExpandedExperiences] = React.useState({});

  const toggleExperience = (id) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const experiences = [
    {
      id: 1,
      company: "Société des Grands Projets (ex-Société du Grand Paris)",
      title: "Chef de projets AMOA SI du domaine Achats Gestion",
      period: "Mars 2022 - Présent",
      location: "Saint-Denis (93)",
      missions: [
        {
          title: "Appui au support et évolutions du Treasury Management System - Titantreasury",
          description: "Dans le cadre des activités de la Société du Grand Paris et au vu de ses besoins de financement, a été déployé au sein de son SI le progiciel Titan pour la gestion de sa dette, du risque et de sa trésorerie. L'objectif étant d'accompagner le Client pour maintenir la solution (évolutions et correctifs)",
          tasks: [
            "Cadrage des besoins",
            "Expression des besoins",
            "Pilotage des équipes transverses internes et externes",
            "Animation des comités",
            "Suivi du planning et communication",
            "Rédaction de la stratégie de recette",
            "Participation à la recette et animation des ateliers",
            "Mise en production et Vérification du Service Régulier",
            "Quelques cas d'usages : gestion des frais financiers prévisionnels, déploiement du module de comptabilité auxiliaire, refonte des interfaces comptables vers SAP, refonte de l'interface de prévisions court/moyen/long terme, gestion des prêts intragroupe..."
          ]
        },
        {
          title: "Pilotage et AMOA dans le cadre du projet de déploiement de SAP S4/HANA modules FM, CO/PS, MM, FI",
          description: "La SGP Dev a été créée afin de valoriser les savoirs et savoir-faire acquis dans la conception et la réalisation du Grand Paris Express. Dans le cadre de ses missions, la filiale de la SGP avait exprimé le besoin de se doter d'un outil d'appui à la gestion financière",
          tasks: [
            "Cadrage des besoins",
            "Pilotage des équipes transverses internes et externes",
            "Animation des comités",
            "Suivi du planning et communication",
            "Rédaction de la stratégie de recette",
            "Participation à la recette et animation des ateliers",
            "Mise en production et Vérification du Service Régulier"
          ]
        },
        {
          title: "Optimisation de la gestion des irritants fournisseurs",
          description: "Dans le cadre de l'amélioration de la chaîne de dépense des domaines finance et comptabilité, notamment pour le suivi des paiements fournisseurs et des engagements, un audit des processus métiers a été initié. L'objectif est de réduire et d'anticiper les irritants rencontrés aussi bien en interne qu'en externe. Ce dispositif repose à la fois sur le renforcement des ressources humaines et sur la mise en place d'un processus structuré et outillé, visant à automatiser, fiabiliser et contrôler efficacement les tâches, afin de gagner en agilité et en performance opérationnelle",
          tasks: [
            "Cadrage des besoins",
            "Conception de la solution"
          ]
        },
        {
          title: "Sécurisation de l'actuelle ERP Qualiac",
          description: "En pleine migration d'outil de gestion entre Qualiac vers SAP S4/HANA, des solutions palliatives de secours doivent être déployées pour garantir la continuité de service opérationnelle jusqu'à la bascule",
          tasks: [
            "Solutions palliatives de secours pour garantir la continuité de service"
          ]
        },
        {
          title: "Plan de Continuité Métiers (PCM)",
          description: "Déploiement d'un plan de gestion de crise en fonction de la criticité des flux des domaines Achats, Finance et Comptables pour permettre la continuité de service",
          tasks: [
            "Déploiement d'un plan de gestion de crise",
            "Analyse de la criticité des flux des domaines Achats, Finance et Comptables"
          ]
        }
      ]
    },
    {
      id: 2,
      company: "SNCF SA",
      title: "Chef de projets AMOA SI",
      period: "Janvier 2020 - Février 2022",
      location: "Saint-Denis (93)",
      missions: [
        {
          title: "SI 1 émetteur",
          description: "Suite à la Réforme Ferroviaire de 2020, l'objectif était d'adapté et déployé le SI en adéquation avec la politique d'avoir un seul émetteur sur les marchés financiers.",
          tasks: [
            "Cadrage du besoin",
            "Expression de besoin",
            "Pilotage des équipes transverses internes et externes",
            "Animation des comités",
            "Suivi du planning et communication auprès de la Direction des Systèmes d'Information et Direction Finance et Trésorerie",
            "Migration des données vers le SI cible (référentiels, stock d'opérations)",
            "Rédaction de la stratégie de recette",
            "Participation à la recette et animation des ateliers",
            "Pilotage du décommissionnement du SI existant (progiciels, interfaces, licences)",
            "Mise en production et Vérification du Service Régulier"
          ]
        },
        {
          title: "Multi-entités – gestion des opérations de financements entre la Holding et ses filiales",
          description: "Implémentation du processus de prêts/emprunts et cashpooling entre la Holding et ses filiales dans KTP.",
          tasks: [
            "Participation à l'expression de besoin",
            "PMO (animation des comités, suivi de planning et respect des jalons, coordination des acteurs Métiers et techniques)",
            "Evolution des interfaces avec les SI amonts et avals (Sage XRT, Sage Rappro, PeopleSoft GL)",
            "Développement des interfaces KTP en SQL",
            "Correction des anomalies",
            "Rédaction de la stratégie de recette",
            "Recette technico-fonctionnelle",
            "Mise en production et Vérification du Service Régulier"
          ]
        },
        {
          title: "Automatisation du contrôle des risques financiers",
          description: "Mise à disposition d'une solution reflétant la stratégie validée en Conseil d'Administration dans les outils permettant au Middle-Office d'avoir un outil unique pour le contrôle des risques financiers.",
          tasks: [
            "Paramétrage de DataScope : récupération des données financières pour alimenter TITAN",
            "Modélisation des processus Métiers",
            "Conception : développement ETL Xchange de 3V Finance",
            "Rédaction de la documentation (livrables développés, processus Métiers)",
            "Livraison du package",
            "Recette",
            "Mise en production",
            "Vérification du Service Régulier"
          ]
        },
        {
          title: "Migration Saas TITAN",
          description: "Dans le cadre du décommissionnement de l'infogérant dédié SI Trésorerie et Salle des Marchés, il y a eu une volonté de migrer les applications en Saas.",
          tasks: [
            "Rédaction du plan batch",
            "Recette applicatives et des interfaces"
          ]
        },
        {
          title: "Migration des flux de paiements et de prévisions de trésorerie",
          description: "Dans le cadre du décommissionnement de CashSolutions (centrale de paiements), migration des flux financiers et prévisions de trésorerie de TITAN à destination de Kyriba.",
          tasks: [
            "Etude d'impacts du changement de format de fichier bancaire (MT101 vers de l'AFB320/160) dans TITAN",
            "Animation d'ateliers",
            "Rédaction des spécifications techniques",
            "Développement des nouveaux formats de fichiers bancaires l'AFB320/160 dans l'ETL Xchange",
            "Développement de l'interface de prévisions de Trésorerie à destination de Kyriba",
            "Recette",
            "Communication avec les équipes (éditeurs, banques)"
          ]
        },
        {
          title: "Changement de la banque principale émettant les flux financiers",
          description: "Changement du compte financier principal de SNCF SA.",
          tasks: [
            "Etude d'impacts",
            "Animations des ateliers DSI/Métiers",
            "Conception : Développements applicatifs et d'interfaces (paramétrages, SQL)",
            "Recette"
          ]
        },
        {
          title: "Taux Risk free rates",
          description: "Adaptation du SI dans le cadre du changement réglementaire des taux LIBOR.",
          tasks: [
            "Etude d'impacts",
            "Evolution des outils (TITAN, KTP, DataScope) conjointement avec les éditeurs",
            "Montée de version applicative de TITAN",
            "Accompagnement à la recette fonctionnelle"
          ]
        }
      ]
    },
    {
      id: 3,
      company: "Sodexo",
      title: "Responsable applicatifs Facilities Management Qualité Tranverse",
      period: "Octobre 2017 à Décembre 2017",
      location: "Guyancourt (78)",
      missions: [
        {
          title: "Maintien en condition opérationnelle du SI",
          tasks: [
            "Pilotage et suivi de planning",
            "Animation des ateliers de travail entre les différents acteurs (MOA, éditeurs, Métiers)",
            "Animations hebdomadaires d'ateliers",
            "Recueil des besoins",
            "Rédaction d'expressions de besoins",
            "Implémentation (paramétrages technico-fonctionnel)",
            "Tests unitaires et de bout en bout",
            "Rédaction de plans de formations",
            "Rédaction de documentations",
            "Support N2",
            "Gestion du back log",
            "Suivi de la bonne application des SLA",
            "Suivi des livraisons (versions, patch...)",
            "Tests unitaires et de bout en bout des livraisons",
            "Validation des Mise en Production",
            "Mise en place de Vérification de Service Régulier"
          ]
        }
      ]
    },
    {
      id: 4,
      company: "SNCF Réseau",
      title: "Consultant stagiaire AMOA SI département Etudes Finances et Gestion",
      period: "Avril 2017 à Septembre 2017",
      location: "Saint-Denis (93)",
      missions: [
        {
          title: "Pilotage et coordination projet",
          description: "Pilotage d'un projet de décommissionnement du SI amont comptable (JD Edwards et migration vers PeopleSoft) alimentant l'application de Credit Management « Wynbe »",
          tasks: [
            "Pilotage et coordination du projet multi-acteurs afin de respecter les jalons du planning",
            "Animation des instances projets (comités projets, comités de pilotage, points d'avancements)",
            "Rédaction d'expressions de besoins",
            "Stratégie de recette (cahier de recette, plan de charges)",
            "Recette et pilotage de la recette de bout en bout",
            "Conduite du changement et formations utilisateurs",
            "Suivi de la mise en production",
            "Vérification du service régulier"
          ]
        },
        {
          title: "Accompagnement utilisateurs et veille réglementaire",
          tasks: [
            "Rédaction d'un guide utilisateurs « Front to back » de l'application Titan Treasury",
            "Veille réglementaire (IFRS 9, EMIR) afin d'anticiper les évolutions impactant Titan Treasury"
          ]
        }
      ]
    },
    {
      id: 5,
      company: "American Express / Global Business Travel",
      title: "Assistant Project Manager",
      period: "Avril 2016 à Septembre 2016",
      location: "Rueil-Malmaison (92)",
      missions: [
        {
          title: "Organisation et planification d'évènements pour les leaders mondiaux des laboratoires pharmaceutiques",
          tasks: [
            "Pilotage et coordination des évènements à échelle internationale",
            "Recueil et analyse des besoins",
            "Négociation avec les parties prenantes",
            "Organisation des appels d'offres",
            "Logistique",
            "Suivi des budgets et de la refacturation"
          ]
        }
      ]
    }
  ];

  const skills = {
    functional: ["Gestion de projets", "Gestion d'équipes", "Gestion des risques", "Prise de décisions", "Méthodologie"],
    technical: {
      finance: ["TITANTreasury", "Kondor Trade Processing (KTP)", "Bloomberg", "Eikon Refinitiv", "DataScope Refinitiv", "CASHSOLUTIONS", "KYRIBA", "CUBICUS", "ADIORYX", "TAIGA", "WYNBE", "SAP 4/HANA", "Qualiac", "Open Trade", "Flex pro", "3SKEY", "Business Objects"],
      it: ["Base de données", "ETL","Ticketing", "Ordonnaceurs", "Scripts", "Communications bancaires"]
    }
  };

  const education = [
    {
      degree: "Master 2 Systèmes d'information pour la finance de marché",
      school: "Institut Mines Télécom (Business School) - Evry, France",
      period: "2013-2017"
    },
    {
      degree: "Mentor Language Institute",
      school: "Los Angeles, Etats-Unis",
      period: "2015-2016"
    },
    {
      degree: "Classe Préparatoire aux Grandes Ecoles de Commerce ECT",
      school: "Ecole Nationale de Commerce - Paris, France",
      period: "2011-2013"
    },
    {
      degree: "Baccalauréat STG option comptabilité et finance d'entreprise",
      school: "Lycée Jean-Pierre Vernant - Sèvres, France",
      period: "2010-2011"
    }
  ];

  const languages = [
    { lang: "Français", level: "Langue maternelle", percent: "100%" },
    { lang: "Anglais", level: "C1", percent: "80%" },
    { lang: "Espagnol", level: "Intermédiaire", percent: "60%" }
