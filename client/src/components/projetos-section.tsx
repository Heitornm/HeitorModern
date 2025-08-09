import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Desenvolvimento de uma plataforma completa de e-commerce com sistema de pagamento integrado, gerenciamento de estoque e painel administrativo.',
    technologies: [
      { name: 'React', color: 'bg-blue-100 text-blue-800' },
      { name: 'Node.js', color: 'bg-green-100 text-green-800' },
      { name: 'MongoDB', color: 'bg-purple-100 text-purple-800' },
    ],
    iconClass: 'fas fa-shopping-cart',
    iconBackground: 'bg-gradient-to-br from-blue-500 to-purple-600',
    projectLink: '#',
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Aplicativo de gerenciamento de tarefas com recursos de categorização, lembretes e estatísticas de produtividade.',
    technologies: [
      { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'Express', color: 'bg-red-100 text-red-800' },
      { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800' },
    ],
    iconClass: 'fas fa-tasks',
    iconBackground: 'bg-gradient-to-br from-green-500 to-teal-600',
    projectLink: '#',
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Painel de análise de dados com visualizações interativas e relatórios personalizáveis para empresas.',
    technologies: [
      { name: 'React', color: 'bg-blue-100 text-blue-800' },
      { name: 'D3.js', color: 'bg-orange-100 text-orange-800' },
      { name: 'Firebase', color: 'bg-yellow-100 text-yellow-800' },
    ],
    iconClass: 'fas fa-chart-line',
    iconBackground: 'bg-gradient-to-br from-purple-500 to-pink-600',
    projectLink: '#',
    githubLink: '#',
    liveLink: '#',
  },
];

const ProjectsSection: React.FC = () => {
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
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;