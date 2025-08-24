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
    <div className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`h-48 ${iconBackground} flex items-center justify-center`}>
        <i className={`${iconClass} text-5xl text-white`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech.name} className={`${tech.color} text-xs px-3 py-1 rounded-full font-medium`}>
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a href={projectLink} className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center">
            Ver projeto <i className="fas fa-arrow-right ml-2"></i>
          </a>
          <div className="flex space-x-3">
            <a href="https://github.com/Heitornm/taskManager" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-github"></i>
            </a>
            <a href={liveLink} className="text-gray-400 hover:text-gray-600">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;