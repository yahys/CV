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
    // Reste des expériences identique au code précédent
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

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">🔧 Niveaux d'interventions en conseil et AMOA</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Pilotage de projets</li>
          <li>Coordination des équipes (multi-services, acteurs, interdépendances projets)</li>
          <li>Méthodologie Projet</li>
          <li>Expression de besoins : études préalables, études d'opportunités, spécifications fonctionnelles & élaboration de cahiers des charges fonctionnels</li>
          <li>Recette fonctionnelle (stratégie, plan et cahier de recette, suivi et coordination)</li>
          <li>Revue des processus métiers</li>
          <li>Suivi de mise en production et support utilisateurs</li>
          <li>Plan de formation et formation utilisateurs</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Secteurs d'activités</h3>
        <ul className="list-disc pl-5">
          <li>Salle des marchés : financements court/long terme, opérations de couverture (dérivés), placements</li>
          <li>Salle de trésorerie : cash management</li>
          <li>Corporate</li>
          <li>TPE / PME</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">🛠️ Compétences</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Expertises </h3>
          <div className="flex flex-wrap gap-2">
            {skills.functional.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Expertises technico-fonctionnelles</h3>
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
        <h2 className="text-2xl font-bold mb-4">💼 Expériences Professionnelles</h2>
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
                      {mission.useCases && (
                        <div className="mt-2">
                          <h5 className="font-medium text-gray-700">Cas d'usage :</h5>
                          <ul className="list-disc pl-5">
                            {mission.useCases.map((useCase, useCaseIndex) => (
                              <li key={useCaseIndex} className="text-gray-600">{useCase}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">🎓 Formation</h2>
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
        <h2 className="text-2xl font-bold mb-4">🌐 Langues</h2>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CV />);
