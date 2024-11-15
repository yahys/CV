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

     "Gestion de projet",

     "Coordination d'équipes",

     "Analyse des besoins",

     "Spécifications fonctionnelles",

     "Recette",

     "Support utilisateurs"

   ],

   technical: {

     finance: [

       "TITAN Treasury",

       "SAP S4/HANA",

       "Qualiac",

       "KTP",

       "DataScope",

       "Kyriba"

     ],

     it: [

       "SQL",

       "ETL",

       "Interfaces bancaires",

       "AFB320/160",

       "MT101"

     ]

   }

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

         description: "Dans le cadre des activités de la Société du Grand Paris et au vu de ses besoins de financement, a été déployé au sein de son SI le progiciel Titan pour la gestion de sa dette, du risque et de sa trésorerie. L'objectif étant d'accompagner
 le Client pour maintenir la solution (évolutions et correctifs)",

         tasks: [

           "Cadrage des besoins",

           "Expression des besoins",

           "Pilotage des équipes transverses internes et externes",

           "Animation des comités",

           "Suivi du planning et communication",

           {

             type: 'special',

             content: "Quelques cas d'usages : gestion des frais financiers prévisionnels, déploiement du module de comptabilité auxiliaire, refonte des interfaces comptables vers SAP, refonte de l'interface de prévisions court/moyen/long terme, gestion des
 prêts intragroupe..."

           }

         ]

       },

       {

         title: "Pilotage et AMOA dans le cadre du projet de déploiement de SAP S4/HANA modules FM, CO/PS, MM, FI",

         description: "La SGP Dev a été créée afin de valoriser les savoirs et savoir-faire acquis dans la conception et la réalisation du Grand Paris Express. Dans le cadre de ses missions, la filiale de la SGP avait exprimé le besoin de se doter d'un outil
 d'appui à la gestion financière",

         tasks: [

           "Cadrage des besoins",

           "Pilotage des équipes transverses internes et externes",

           "Animation des comités",

           "Suivi du planning et communication",

           "Mise en production et Vérification du Service Régulier"

         ]

       },

       {

         title: "Optimisation de la gestion des irritants fournisseurs",

         description: "Dans le cadre de l'amélioration de la chaîne de dépense des domaines finance et comptabilité, notamment pour le suivi des paiements fournisseurs et des engagements, un audit des processus métiers a été initié. L'objectif est de réduire
 et d'anticiper les irritants rencontrés aussi bien en interne qu'en externe. Ce dispositif repose à la fois sur le renforcement des ressources humaines et sur la mise en place d'un processus structuré et outillé, visant à automatiser, fiabiliser et contrôler
 efficacement les tâches, afin de gagner en agilité et en performance opérationnelle",

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

     title: "Chef de projets SI Finance & Trésorerie",

     period: "Janvier 2019 - Mars 2022",

     location: "La Défense (92)",

     missions: [

       {

         title: "SI 1 émetteur",

         description: "Suite à la Réforme Ferroviaire de 2020, l'objectif était d'adapter et déployer le SI en adéquation avec la politique d'avoir un seul émetteur sur les marchés financiers.",

         tasks: [

           "Cadrage du besoin",

           "Expression de besoin",

           "Pilotage des équipes transverses internes et externes",

           "Animation des comités",

           "Suivi du planning et communication auprès de la Direction des Systèmes d'Information et Direction Finance et Trésorerie",

           "Migration des données vers le SI cible (référentiels, stock d'opérations)",

           "Rédaction de la stratégie de recette",

           "Participation à la recette et animation des ateliers",

           "Pilotage du décommissionnement du SI existant"

         ]

       }

     ]

   }

 ];


 const education = [

   {

     degree: "Master 2 Management des Systèmes d'Information",

     period: "2016 - 2018",

     school: "ISG Paris"

   },

   {

     degree: "Licence Économie et Gestion",

     period: "2013 - 2016",

     school: "Université Paris Dauphine"

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

       <img src="/api/placeholder/320/320" alt="Yahya BENABDELKRIM"
className="w-32 h-32 rounded-full mr-8 object-cover" />

       <div>

         <h1 className="text-3xl font-bold mb-2">Yahya BENABDELKRIM</h1>

         <h2 className="text-xl text-blue-600 mb-4">Chef de projets AMOA spécialisé en SI Finance & Trésorerie</h2>

         <div className="text-gray-600">

           <p>📞 +33 (0)6 99 23 32 20</p>

           <p>✉️ benabdelkrim.yahya@gmail.com</p>

           <p>📍 Boulogne-Billancourt</p>

           <p>🇫🇷 Nationalité : Française</p>

         </div>

       </div>

     </header>


     <section className="mb-8">

       <h2 className="text-2xl font-bold mb-4">🔧 Niveaux d'interventions en conseil et AMOA</h2>

       <ul className="list-disc pl-5 mb-4">

         <li>Pilotage de projets</li>

         <li>Coordination des équipes</li>

         <li>Méthodologie Projet</li>

         <li>Expression de besoins</li>

         <li>Recette fonctionnelle</li>

         <li>Revue des processus métiers</li>

         <li>Support utilisateurs</li>

         <li>Formation utilisateurs</li>

       </ul>

     </section>


     <section className="mb-8">

       <h2 className="text-2xl font-bold mb-4">🛠️ Compétences</h2>

       <div className="mb-4">

         <h3 className="text-lg font-semibold mb-2">Expertises</h3>

         <div className="flex flex-wrap gap-2">

           {skills.functional.map((skill, index) => (

             <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">

               {skill}

             </span>

           ))}

         </div>

       </div>

       <div>

         <h3 className="text-lg font-semibold mb-2">Expertises technico-fonctionnelles</h3>

         <div className="mb-2">

           <h4 className="font-medium">Finance & Trésorerie</h4>

           <div className="flex flex-wrap gap-2">

             {skills.technical.finance.map((skill, index) => (

               <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">

                 {skill}

               </span>

             ))}

           </div>

         </div>

         <div>

           <h4 className="font-medium">IT & SI</h4>

           <div className="flex flex-wrap gap-2">

             {skills.technical.it.map((skill, index) => (

               <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">

                 {skill}

               </span>

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

             <div 

               className="flex justify-between items-center cursor-pointer"
 

               onClick={() => toggleExperience(exp.id)}

             >

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

                     {mission.description && (

                       <p className="text-gray-600 mb-2">{mission.description}</p>

                     )}

                     <ul className="list-disc pl-5">

                       {mission.tasks.map((task, taskIndex) => (

                         typeof task === 'string' ? (

                           <li key={taskIndex}>{task}</li>

                         ) : (

                           <p key={taskIndex} className="mt-2">{task.content}</p>

                         )

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


export default CV;
