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
        }
      ]
    },
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
