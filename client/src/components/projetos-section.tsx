export function ProjetosSection() {

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

}
  /*
  const skillCategories = [
    {
      title: "Gerenciador de Tarefas",
      color: "blue-600/10",
      iconColor: "blue-600",
      skills: [
        { name: "JavaScript", level: 4 },
        { name: "Python", level: 4 },
        { name: "Java", level: 3 },
        { name: "PHP", level: 3 }
      ]
    },
    {
      title: "Frontend",
      icon: "fas fa-palette",
      color: "cyan-500/10",
      iconColor: "cyan-500",
      technologies: [
        { name: "HTML5", color: "orange" },
        { name: "CSS3", color: "blue" },
        { name: "JavaScript", color: "yellow" },
        { name: "React Native", color: "cyan" },
        { name: "Tailwind CSS", color: "blue" },
        { name: "WordPress", color: "purple" }
      ]
    },
    {
      title: "Backend & DB",
      icon: "fas fa-database",
      color: "green-500/10",
      iconColor: "green-500",
      technologies: [
        { name: "PostgreSQL", color: "blue" },
        { name: "MySQL", color: "orange" },
        { name: "Firebase", color: "yellow" },
        { name: "APIs REST", color: "red" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      color: "purple-500/10",
      iconColor: "purple-500",
      technologies: [
        { name: "Azure", color: "blue" },
        { name: "AWS", color: "orange" },
        { name: "Google Cloud", color: "red" },
        { name: "Git", color: "gray" }
      ]
    },
    {
      title: "Mobile",
      icon: "fas fa-mobile-alt",
      color: "green-500/10",
      iconColor: "green-500",
      technologies: [
        { name: "React Native", color: "cyan" },
        { name: "Android", color: "green" },
        { name: "Kotlin", color: "orange" },
        { name: "Jetpack", color: "purple" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      color: "pink-500/10",
      iconColor: "pink-500",
      skills: [
        "Relacionamento interpessoal",
        "Pensamento crítico",
        "Resolução de problemas",
        "Inteligência emocional",
        "Comunicação clara",
        "Trabalho em equipe"
      ]
    }
  ]

  const renderSkillLevel = (level: number) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= level ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
          }`}
        ></div>
      ))}
    </div>
  )

  const renderTechnology = (tech: { name: string; color: string }) => (
    <span
      key={tech.name}
      className={`bg-${tech.color}-100 dark:bg-${tech.color}-900 text-${tech.color}-800 dark:text-${tech.color}-200 px-3 py-1 rounded-full text-sm`}
    >
      {tech.name}
    </span>
  )

  return (
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-hover bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} text-${category.iconColor} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              {category.skills && (
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span>{typeof skill === 'string' ? skill : skill.name}</span>
                      {typeof skill === 'object' && skill.level && renderSkillLevel(skill.level)}
                    </div>
                  ))}
                </div>
              )}
              
              {category.technologies && (
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map(renderTechnology)}
                </div>
              )}
              
              {category.title === "Soft Skills" && category.skills && (
                <div className="space-y-2 text-sm">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>• {typeof skill === 'string' ? skill : skill.name}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
*/