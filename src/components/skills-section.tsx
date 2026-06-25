import React from 'react';

interface Skill {
  name: string;
  level?: number;
}

interface Technology {
  name: string;
  badgeStyle: string; // Guardará a classe Tailwind completa para evitar concatenação dinâmica
}

interface SkillCategory {
  title: string;
  icon: string;
  cardBg: string;      // Classe de fundo completa
  iconColor: string;   // Classe de cor do ícone completa
  skills?: Skill[];
  technologies?: Technology[];
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Linguagens",
      icon: "fas fa-code",
      cardBg: "bg-blue-600/10",
      iconColor: "text-blue-500",
      skills: [
        { name: "JavaScript", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "Kotlin", level: 3 },
      ]
    },
    {
      title: "Frontend",
      icon: "fas fa-palette",
      cardBg: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
      technologies: [
        { name: "React", badgeStyle: "bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-200" },
        { name: "Next.js", badgeStyle: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" },
        { name: "Tailwind CSS", badgeStyle: "bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-200" },
        { name: "HTML5 & CSS3", badgeStyle: "bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-200" }
      ]
    },
    {
      title: "Backend & DB",
      icon: "fas fa-database",
      cardBg: "bg-green-500/10",
      iconColor: "text-green-500",
      technologies: [
        { name: "Node.js", badgeStyle: "bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-200" },
        { name: "PostgreSQL (Neon)", badgeStyle: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200" },
        { name: "Firebase / Firestore", badgeStyle: "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200" },
        { name: "APIs REST", badgeStyle: "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200" }
      ]
    },
    {
      title: "Mobile",
      icon: "fas fa-mobile-alt",
      cardBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
      technologies: [
        { name: "Jetpack Compose", badgeStyle: "bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200" },
        { name: "Android Nativo", badgeStyle: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200" },
        { name: "React Native", badgeStyle: "bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-200" }
      ]
    }
  ];

  const renderSkillLevel = (level: number) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= level ? 'bg-blue-600 dark:bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'
          }`}
        ></div>
      ))}
    </div>
  );

  const renderTechnology = (tech: Technology) => (
    <span
      key={tech.name}
      className={`${tech.badgeStyle} px-3 py-1 rounded-full text-sm font-medium transition-colors`}
    >
      {tech.name}
    </span>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Habilidades Técnicas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-hover bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
              <div className="flex items-center mb-5">
                <div className={`w-12 h-12 ${category.cardBg} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} ${category.iconColor} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              
              {category.skills && (
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                      <span className="font-medium">{skill.name}</span>
                      {skill.level && renderSkillLevel(skill.level)}
                    </div>
                  ))}
                </div>
              )}
              
              {category.technologies && (
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map(renderTechnology)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}