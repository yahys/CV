import React from 'react';

function CV() {
  // Gestion de l'état pour les expériences développées
  const [expandedExperiences, setExpandedExperiences] = React.useState({});

  // Fonction pour basculer l'état d'affichage des missions
  const toggleExperience = (id) => {
    setExpandedExperiences((prev) => ({
      ...prev,
      [id]: !prev[id], // Bascule de l'état pour une expérience spécifique
    }));
  };

  // Liste des expériences professionnelles
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
          description: "Accompagnement pour maintenir la solution (évolutions et correctifs)",
          tasks: [
            "Cadrage des besoins",
            "Expression des besoins",
            "Pilotage des équipes transverses internes et externes",
            "Animation des comités",
            "Suivi du planning et communication",
            "Rédaction de la stratégie de recette",
            "Participation à la recette et animation des ateliers",
            "Mise en production et Vérification du Service Régulier",
          ],
        },
        {
          title: "Pilotage et AMOA dans le cadre du projet de déploiement de SAP S4/HANA",
          description: "Déploiement de SAP S4/HANA pour la gestion financière.",
          tasks: [
            "Cadrage des besoins",
            "Pilotage des équipes transverses internes et externes",
            "Animation des comités",
            "Suivi du planning et communication",
          ],
        },
      ],
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
          description: "Adaptation et déploiement du SI suite à la Réforme Ferroviaire de 2020.",
          tasks: [
            "Cadrage du besoin",
            "Expression de besoin",
            "Pilotage des équipes transverses internes et externes",
            "Suivi du planning et communication",
          ],
        },
      ],
    },
  ];

  // Composant pour afficher une mission
  const Mission = ({ mission }) => (
    <div>
      <h4>{mission.title}</h4>
      {mission.description && <p>{mission.description}</p>}
      {mission.tasks.length > 0 && (
        <ul>
          {mission.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );

  // Composant pour afficher une expérience
  const Experience = ({ experience }) => (
    <div>
      <h3>{experience.company}</h3>
      <p>
        <strong>{experience.title}</strong> - {experience.period}
      </p>
      <p>{experience.location}</p>
      <button onClick={() => toggleExperience(experience.id)}>
        {expandedExperiences[experience.id] ? 'Réduire' : 'Voir plus'}
      </button>
      {expandedExperiences[experience.id] &&
        experience.missions.map((mission, index) => <Mission key={index} mission={mission} />)}
    </div>
  );

  return (
    <div>
      <h1>Curriculum Vitae</h1>
      {experiences.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

export default CV;
