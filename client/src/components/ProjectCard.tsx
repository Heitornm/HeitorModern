import React from 'react';

// Define a interface para as propriedades do componente ProjectCard,
// garantindo a tipagem segura dos dados.
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: { name: string; color: string }[];
  iconClass: string;
  iconBackground: string;
  projectLink: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  iconClass,
  iconBackground,
  projectLink,
  githubLink,
  liveLink,
}) => {
  return (
    // Adiciona a classe 'dark:' para o fundo e sombra do card
    <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-xl overflow-hidden transition-colors duration-300">
      <div className={`h-48 ${iconBackground} flex items-center justify-center`}>
        <i className={`${iconClass} text-5xl text-white`}></i>
      </div>
      <div className="p-6">
        {/* Adiciona a classe 'dark:' para a cor do título */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        {/* Adiciona a classe 'dark:' para a cor da descrição */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            {/* Adiciona classes 'dark:' para as tags de tecnologia */ }
            < span key = { tech.name } className = {`${tech.color} text-xs px-3 py-1 rounded-full font-medium dark:bg-gray-700 dark:text-gray-300`}>
          {tech.name}
        </span>
          ))}
      </div>
      <div className="flex justify-between items-center">
        {/* Adiciona a classe 'dark:' para o link principal */}
        <a href={projectLink} className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-600 font-medium text-sm flex items-center" target="_blank" rel="noopener noreferrer">
          Ver projeto <i className="fas fa-arrow-right ml-2"></i>
        </a>
        <div className="flex space-x-3">
          {/* Adiciona a classe 'dark:' para o ícone do GitHub */}
          <a href={githubLink} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {/* Adiciona a classe 'dark:' para o ícone de link externo */}
          <a href={liveLink} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
    </div >
  );
};

export default ProjectCard;