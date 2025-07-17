// components/ProjectModal.tsx
import React from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  tags,
  liveLink,
  codeLink,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-deepSpace border border-starWhite/20 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-lg animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-starWhite/60 hover:text-nebulaPink transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-nebulaPink">{title}</h2>
          <p className="text-starWhite/80 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-deepSpace/50 text-gray-300 border border-starWhite/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-nebulaPink hover:text-nebulaPink/80"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cosmicBlue hover:text-cosmicBlue/80"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
