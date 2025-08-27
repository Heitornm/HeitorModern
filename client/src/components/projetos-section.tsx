import React from 'react';

// O componente principal App que renderiza a seção de projetos
const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <ProjetosSection />
    </div>
  );
};

// Dados de exemplo para os projetos
const projetos = [
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
    title: "Landin Page - Ve_Tattoo",
    description: "Desenvolvimento de uma landing page. Sob desenvolvimento.",
    iconClass: "fas fa-tasks",
    iconBgClass: "bg-gradient-to-br from-green-500 to-teal-600",
    techs: [
      { name: "JavaScript", color: "yellow" },
      { name: "Express", color: "red" },
      { name: "PostgreSQL", color: "blue" }
    ],
    projectLink: "https://veronicaxavierruiz.github.io/Ve_Tattoo/",
    githubLink: "https://github.com/Heitornm/Ve_Tattoo",
    externalLink: "https://veronicaxavierruiz.github.io/Ve_Tattoo/"
  },
  {
    title: "Loja - Monica Viviane Fragrancias",
    description: "Desenvolvimento de uma loja online. Sob desenvolvimento.",
    iconClass: "fas fa-tasks",
    iconBgClass: "bg-gradient-to-br from-indigo-500 to-indigo -600",
    techs: [
      { name: "JavaScript", color: "yellow" },
      { name: "Express", color: "red" },
      { name: "PostgreSQL", color: "blue" }
    ],
    projectLink: "",
    githubLink: "",
    externalLink: ""
  }
];

// Componente ProjetosSection atualizado para renderizar a galeria de projetos
export function ProjetosSection() {
  const renderTechnology = (tech) => (
    <span
      key={tech.name}
      className={`bg-${tech.color}-100 text-${tech.color}-800 text-xs px-3 py-1 rounded-full font-medium`}
    >
      {tech.name}
    </span>
  );

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projetos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div key={index} className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className={`h-48 ${projeto.iconBgClass} flex items-center justify-center`}>
                <i className={`${projeto.iconClass} text-5xl text-white`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{projeto.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {projeto.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.techs.map(renderTechnology)}
                </div>
                <div className="flex justify-between items-center">
                  <a href={projeto.projectLink} className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center" target="_blank">
                    Ver projeto <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                  <div className="flex space-x-3">
                    <a href={projeto.githubLink} className="text-gray-400 hover:text-gray-600" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={projeto.externalLink} className="text-gray-400 hover:text-gray-600" target="_blank">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Adiciona o link para o Font Awesome para que os ícones funcionem */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" xintegrity="sha512-iBBXm8fW90+z7j5uD7s1D/qQ1W9yTjC8M7p4r+Z9O6F+2x0B3kC1R7q/p7L4yI6zG8w4vF6zP7J8y8O6/A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </section>
  );
}

export default App;
