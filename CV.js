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
          title: "Appui au support et évolutions du Treasury Management System",
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
          title: "Sécurisation de l'actuelle ERP Qualiac",
          tasks: [
            "Solutions paliatives de secours pour garantir la continuité de service"
          ]
        },
        {
          title: "Plan de Continuité Métiers",
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
          tasks: [
            "Cadrage et expression du besoin",
            "Pilotage des équipes transverses",
            "Migration des données vers le SI cible",
            "Animation des comités",
            "Rédaction de la stratégie de recette",
            "Pilotage du décommissionnement du SI existant"
          ]
        },
        {
          title: "Multi-entités - gestion des opérations de financements",
          tasks: [
            "Implémentation du processus de prêts/emprunts",
            "PMO et coordination des acteurs",
            "Evolution des interfaces",
            "Développement des interfaces KTP en SQL",
            "Recette technico-fonctionnelle"
          ]
        },
        {
          title: "Remplacement de la solution de téléphonies de marché",
          tasks: [
            "Cadrage du besoin",
            "Expression de besoin",
            "Benchmark des solutions",
            "Rédaction du cahier des charges dans le cadre du lancement de l'appel d'offres au Journal Officiel de l'Union Européenne",
            "Aide à la prise de décision pour le choix de la solution cible"
          ]
        },
        {
          title: "Rationalisation des licences de la Salle des Marchés",
          tasks: [
            "Revue contrats",
            "Collecte du besoins Métiers",
            "Revue du besoin et adaptation en terme de services à contractualiser"
          ]
        },
        {
          title: "Suivi et accompagnement des audits CAC annuels",
          tasks: [
            "Pilotage interne des demandes des auditeurs",
            "Mise à dispositions des livrables"
          ]
        },
        {
          title: "Déploiement de nouveaux processus de gestion et de revue des habilitations",
          tasks: [
            "Revue des processus d'habilitations",
            "Mise en place de nouveaux workflow validation des habilitations",
            "Proposition de solutions pour automatiser la gestion des habilitations"
          ]
        },
        {
          title: "Industrialisation des données de marché",
          tasks: [
            "Analyse du besoin",
            "Rédaction des spécifications technico-fonctionnelles",
            "Déploiement de la solution DataScope de Refinitiv (paramétrage et ordonnancement)",
            "Paramétrage des courbes de taux, fixings dans les SI avals",
            "Contractualisation avec les fournisseurs de données",
            "Interfaçages avec l'ensemble des applications du SI",
            "Stratégie de recette et tests",
            "Recette",
            "Mise en production et Vérification du Service Régulier"
          ]
        },
        {
          title: "Refonte d'interfaces des opérations financières dans le cadre du décommissionnement de l'ETL DataStage",
          tasks: [
            "Cadrage du besoin",
            "Rédaction des spécifications fonctionnelles",
            "Paramétrages et déploiements",
            "Stratégie de recette et tests",
            "Recette",
            "Mise en production et Vérification du Service Régulier",
            "Rédaction de la documentation"
          ]
        }
      ]
    },
    {
      id: 3,
      company: "Sodexo / DSI département Facilities Management Qualité Tranverse",
      title: "Responsable applicatifs",
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
      company: "SNCF Réseau / DSI département Etudes Finances et Gestion",
      title: "Consultant stagiaire AMOA SI",
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
    }
  ];

  const skills = {
    functional: ["Gestion de projets", "Gestion d'équipes", "Gestion des risques", "Prise de décisions", "Méthodologie"],
    technical: {
      finance: ["CASHSOLUTIONS", "KYRIBA", "TITAN", "Kondor Trade Processing", "Business Objects", "Communications bancaires", "Bloomberg", "Eikon Refinitiv", "DataScope Refinitiv"],
      it: ["BDD : Oracle, MySQL", "ETL : Xchange", "CUBICUS", "ADIORYX", "TAIGA", "WYNBE", "Qualiac", "Open Trade", "Flex pro", "3SKEY"]
    }
  };

  const education = [
    {
      degree: "Master 2 Systèmes d'information pour la finance de marché",
      school: "Institut Mines Télécom (Business School) - Evry, France",
      period: "2013-2017"
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
    { lang: "Anglais", level: "B2", percent: "80%" },
    { lang: "Espagnol", level: "Intermédiaire", percent: "60%" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Yahya BENABDELKRIM</h1>
        <h2 className="text-xl text-gray-600 mb-4">Chef de projets AMOA spécialisé en SI Finance & Trésorerie</h2>
        <div className="text-gray-600">
          <p>+33 (0)6 99 23 32 20</p>
          <p>Benabdelkrim.yahya@gmail.com</p>
          <p>Boulogne-Billancourt</p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Compétences</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Compétences fonctionnelles</h3>
          <div className="flex flex-wrap gap-2">
            {skills.functional.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Compétences techniques</h3>
          <div className="mb-2">
            <h4 className="font-medium">Finance & Trésorerie</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.finance.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium">IT & SI</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.it.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Expériences Professionnelles</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExperience(exp.id)}>
                <div>
                  <h3 className="font-bold">{exp.company}</h3>
                  <p className="text-lg">{exp.title}</p>
                  <p className="text-gray-600">{exp.period}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <span>{expandedExperiences[exp.id] ? '▲' : '▼'}</span>
              </div>
              {expandedExperiences[exp.id] && (
                <div className="mt-4">
                  {exp.missions.map((mission, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-semibold">{mission.title}</h4>
                      {mission.description && <p className="text-gray-600 mb-2">{mission.description}</p>}
                      <ul className="list-disc pl-5">
                        {mission.tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Formation</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-blue-800">{edu.degree}</h3>
              <p className="text-gray-600">{edu.period}</p>
              <p>{edu.school}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Langues</h2>
        <div className="space-y-4">
          {languages.map((item) => (
            <div key={item.lang} className="bg-white p-4 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{item.lang}</span>
                <span className="text-gray-600">{item.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className="bg-blue-600 rounded h-2 transition-all duration-300"
                  style={{ width: item.percent }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<CV />, document.getElementById('root'));
