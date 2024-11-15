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
      period: "Mars 2022 - Present",
      location: "Saint-Denis (93)",
      missions: [
        {
          title: "Appui au support et évolutions du Treasury Management System - Titantreasury",
          description: "Dans le cadre des activités de la Société du Grand Paris et au vu de ses besoins de financement, a été déployé au sein de son SI le progiciel Titan pour la gestion de sa dette, du risque et de sa trésorerie. L'objectif étant d'accompagner le Client pour maintenir la solution (évolutions et correctifs)",
          tasks: [
            "Cadrage des besoins",
            "Expression des besoin",
            "Pilotage des équipes transverses internes et externes",
            "Animation des comités",
            "Suivi du planning et communication",
            "Rédaction de la stratégie de recette",
            "Participation à la recette et animation des ateliers",
            "Mise en production et Vérification du Service Régulier"
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
          ],
          useCases: [
            "Gestion des frais financiers prévisionnels",
            "Déploiement du module de comptabilité auxiliaire",
            "Refonte des interfaces comptables vers SAP",
            "Refonte de l'interface de prévisions court/moyen/long terme",
            "Gestion des prêts intragroupes"
          ]
        },
        {
          title: "Optimisation de la gestion des irritants fournisseurs",
          description: "Dans le cadre de l'amélioration de la chaîne de dépense en finance et comptabilité, un audit des processus métiers a été lancé pour réduire et anticiper les irritants internes et externes. Ce dispositif combine le renforcement des équipes et la mise en place d'un processus outillé pour automatiser, fiabiliser et optimiser les tâches.",
          tasks: [
            "Audit des processus métiers",
            "Identification et analyse des irritants",
            "Mise en place de solutions d'automatisation",
            "Optimisation des processus existants"
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
    // ... autres expériences identiques au code précédent
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
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <header className="mb-8 flex items-center">
        <img src="./IMG_5847.jpg" alt="Yahya BENABDELKRIM" className="w-32 h-32 rounded-full mr-8 object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-2">Yahya BENABDELKRIM</h1>
          <h2 className="text-xl text-blue-600 mb-4">Chef de projets AMOA spécialisé en SI Finance & Trésorerie</h2>
          <div className="text-gray-600">
            <p>📞 +33 (0)6 99 23 32 20</p>
            <p>✉️ Benabdelkrim.yahya@gmail.com</p>
            <p>📍 Boulogne-Billancourt</p>
            <p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="inline w-5 h-5 mr-1" />
              <a href="https://www.linkedin.com/in/yahyabenabdelkrim/" className="text-blue-600">LinkedIn</a>
            </p>
            <p>🇫🇷 Nationalité : Française</p>
          </div>
        </div>
      </header>

      {/* Reste du JSX identique au code précédent */}
    </div>
  );
}

export default CV;
