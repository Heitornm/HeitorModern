import React from 'react';

// Tipagem para manter o TypeScript feliz
interface Technology {
  name: string;
  color: 'yellow' | 'blue' | 'red' | 'green';
}

interface Projeto {
  title: string;
  description: string;
  iconClass: string;
  iconBgClass: string;
  techs: Technology[];
  projectLink: string;
  githubLink: string;
  externalLink: string;
}

const projetos: Projeto[] = [
  {
    title: "Gerenciador de tarefas",
    description: "Aplicativo de gerenciamento de tarefas básico, com recursos de categorização, lembretes e estatísticas de produtividade.",
    iconClass: "fas fa-tasks",
    iconBgClass: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    techs: [
      { name: "JavaScript", color: "yellow" },
      { name: "Express", color: "red" },
      { name: "PostgreSQL", color: "blue" }
    ],
    projectLink: "https://heitornm.github.io/taskManager/",
    githubLink: "https://github.com/Heitornm/taskManager",
    externalLink: "https://heitornm.github.io/taskManager/"
  },
  {
    title: "Darth Barber",
    description: "Desenvolvimento de site para agendamento de serviços de barbearia e cabeleireiro.",
    iconClass: "fas fa-cut", // Trocado para combinar mais com barbearia!
    iconBgClass: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    techs: [
      { name: "JavaScript", color: "yellow" },
      { name: "Express", color: "red" },
      { name: "PostgreSQL", color: "blue" }
    ],
    projectLink: "https://darthbarbers.onrender.com",
    githubLink: "https://github.com/Heitornm/Darth",
    externalLink: "https://darthbarbers.onrender.com"
  }
];

// Dicionário de cores estáticas para garantir que o Tailwind não ignore o estilo no build
const colorMap = {
  yellow: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  red: "bg-red-500/10 text-red-500 border-red-500/20",
  green: "bg-green-500/10 text-green-500 border-green-500/20"
};

export function ProjetosSection() {
  return (
    <section id="projetos" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Projetos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-blue-500/40 transform hover:-translate-y-1"
            >
              <div className={`h-48 ${projeto.iconBgClass} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <i className={`${projeto.iconClass} text-5xl text-white transform group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors">
                  {projeto.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed min-h-[60px]">
                  {projeto.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.techs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`text-xs px-3 py-1 rounded-full border font-medium ${colorMap[tech.color] || colorMap.blue}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-slate-700/30">
                  <a 
                    href={projeto.projectLink} 
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver projeto <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                  </a>
                  <div className="flex space-x-4">
                    <a 
                      href={projeto.githubLink} 
                      className="text-slate-400 hover:text-slate-200 text-lg transition-colors" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Código Fonte"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href={projeto.externalLink} 
                      className="text-slate-400 hover:text-slate-200 text-lg transition-colors" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Link Externo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}