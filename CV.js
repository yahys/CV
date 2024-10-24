const { useState } = React;

function CV() {
  const [expandedExperiences, setExpandedExperiences] = useState({});

  const toggleExperience = (id) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const skills = {
    functional: [
      "Gestion de projets",
      "Gestion d'équipes",
      "Gestion des risques",
      "Prise de décisions",
      "Méthodologie",
    ],
    technical: {
      finance: [
        "CASHSOLUTIONS",
        "KYRIBA",
        "TITAN",
        "Kondor Trade Processing",
        "Business Objects",
        "Communications bancaires",
        "Bloomberg",
        "Eikon Refinitiv",
        "DataScope Refinitiv",
      ],
      it: [
        "BDD : Oracle, MySQL",
        "ETL : Xchange",
        "CUBICUS",
        "ADIORYX",
        "TAIGA",
        "WYNBE",
        "Qualiac",
        "Open Trade",
        "Flex pro",
        "3SKEY",
      ],
    }
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
    // ... autres expériences ...
  ];

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
    {
      lang: "Français",
      level: "Langue maternelle",
      percent: "100%"
    },
    {
      lang: "Anglais",
      level: "B2",
      percent: "80%"
    },
    {
      lang: "Espagnol",
      level: "Intermédiaire",
      percent: "60%"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="mb-8 flex gap-8">
        <img
          src="https://via.placeholder.com/200"
          alt="Yahya Benabdelkrim"
          className="rounded-full w-32 h-32 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Yahya BENABDELKRIM</h1>
          <h2 className="text-xl text-gray-600 mb-4">
            Chef de projets AMOA spécialisé en SI Finance & Trésorerie
          </h2>
          <div className="space-y-1 text-gray-600">
            <p>+33 (0)6 99 23 32 20</p>
            <p>Benabdelkrim.yahya@gmail.com</p>
            <p>Boulogne-Billancourt</p>
          </div>
        </div>
      </header>

      {/* Compétences */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Compétences</h2>
        </div>

        {/* Compétences fonctionnelles */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Compétences fonctionnelles</h3>
          <div className="flex flex-wrap gap-2">
            {skills.functional.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Compétences techniques - Outils Finance */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Outils Finance & Trésorerie</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.finance.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Compétences techniques - Outils IT */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Outils IT & SI</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.it.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Expériences Professionnelles */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Expériences Professionnelles</h2>
        </div>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="border rounded-lg">
              <button
                onClick={() => toggleExperience(exp.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-bold">{exp.company}</h3>
                  <p className="text-lg">{exp.title}</p>
                  <p className="text-gray-600">{exp.period}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <span>{expandedExperiences[exp.id] ? '▲' : '▼'}</span>
              </button>
              {expandedExperiences[exp.id] && (
                <div className="p-4 border-t space-y-6">
                  {exp.missions.map((mission, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="font-semibold mb-2 text-blue-800">{mission.title}</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
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

      {/* Formation */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Formation</h2>
        </div>
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

      {/* Langues */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Langues</h2>
        </div>
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
