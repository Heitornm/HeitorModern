import React from 'react';

// O componente principal App que renderiza a seção de projetos
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <ProjetosSection />
    </div>
  );
};

// Dados de exemplo para os projetos
const projetos = [
  {
    title: "E-commerce Website",
    description: "Desenvolvimento de uma plataforma completa de e-commerce com sistema de pagamento integrado, gerenciamento de estoque e painel administrativo.",
    iconClass: "fas fa-shopping-cart",
    iconBgClass: "bg-gradient-to-br from-blue-500 to-purple-600",
    techs: [
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "MongoDB", color: "purple" }
    ],
    projectLink: "#",
    githubLink: "#",
    externalLink: "#"
  },
  {
    title: "Task Manager App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de categorização, lembretes e estatísticas de produtividade.",
    iconClass: "fas fa-tasks",
    iconBgClass: "bg-gradient-to-br from-green-500 to-teal-600",
    techs: [
      { name: "JavaScript", color: "yellow" },
      { name: "Express", color: "red" },
      { name: "PostgreSQL", color: "blue" }
    ],
    projectLink: "#",
    githubLink: "#",
    externalLink: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Painel de análise de dados com visualizações interativas e relatórios personalizáveis para empresas.",
    iconClass: "fas fa-chart-line",
    iconBgClass: "bg-gradient-to-br from-purple-500 to-pink-600",
    techs: [
      { name: "React", color: "blue" },
      { name: "D3.js", color: "orange" },
      { name: "Firebase", color: "yellow" }
    ],
    projectLink: "#",
    githubLink: "#",
    externalLink: "#"
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi utilizando tecnologias modernas
          </p>
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
                  <a href={projeto.projectLink} className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center">
                    Ver projeto <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                  <div className="flex space-x-3">
                    <a href={projeto.githubLink} className="text-gray-400 hover:text-gray-600">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={projeto.externalLink} className="text-gray-400 hover:text-gray-600">
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
