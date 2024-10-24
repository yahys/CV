function CV() {
  const experiences = [
    {
      id: 1,
      company: "Société des Grands Projets (ex-Société du Grand Paris)",
      title: "Chef de projets AMOA SI du domaine Achats Gestion",
      period: "Mars 2022 - Present",
      location: "Saint-Denis (93)",
    },
    {
      id: 2,
      company: "SNCF SA",
      title: "Chef de projets AMOA SI",
      period: "Janvier 2020 - Février 2022",
      location: "Saint-Denis (93)",
    },
    // Ajoutez d'autres expériences ici
  ];

  const skills = {
    functional: ["Gestion de projets", "Gestion d'équipes", "Gestion des risques", "Prise de décisions", "Méthodologie"],
    technical: {
      finance: ["CASHSOLUTIONS", "KYRIBA", "TITAN", "Kondor Trade Processing", "Business Objects"],
      it: ["BDD : Oracle, MySQL", "ETL : Xchange", "CUBICUS", "ADIORYX", "TAIGA"]
    }
  };

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

      <section>
        <h2 className="text-2xl font-bold mb-4">Expériences Professionnelles</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="border rounded-lg p-4">
              <h3 className="font-bold">{exp.company}</h3>
              <p className="text-lg">{exp.title}</p>
              <p className="text-gray-600">{exp.period}</p>
              <p className="text-gray-600">{exp.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<CV />, document.getElementById('root'));
