const ProjectCard = ({ title, desc, tech, github, image }) => {
  return (
    <div className="group rounded-2xl border border-[#1C2233] bg-[#0F1420] overflow-hidden transition hover:border-[#7C7CFF]/60 hover:shadow-[0_10px_40px_-15px_rgba(124,124,255,0.25)]">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2">{title}</h3>

        <p className="text-sm text-[#9AA1B2] leading-relaxed mb-4">
          {desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-[#1C2233] text-[#9AA1B2]"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-[#7C7CFF] hover:gap-2 transition-all"
        >
          View source
          <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
