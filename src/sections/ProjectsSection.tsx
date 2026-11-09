import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../data/projects";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = [
    "Todos",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "Todos" || project.category === activeCategory,
  );

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="bg-[#f8f6f2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#b9825b]">
            HISTÓRIAS QUE MERECEM SER LEMBRADAS
          </p>

          <h2 className="font-editorial text-4xl text-[#242424] md:text-6xl">
            Nossos <span className="italic">Projetos</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-[#77716c]">
            Cada fotografia carrega uma emoção. Cada história merece ser
            eternizada.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`border px-5 py-3 text-xs transition ${
                activeCategory === category
                  ? "border-[#b9825b] bg-[#b9825b] text-white"
                  : "border-[#e5ded5] text-[#77716c] hover:border-[#b9825b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Galeria de projetos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden bg-white"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`Abrir projeto ${project.title}`}
                className="block w-full cursor-pointer text-left"
              >
                {project.photos.length > 0 ? (
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#eee8df]">
                    <img
                      src={project.photos[0]}
                      alt={`Fotografia de ${project.category}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white">
                        {project.photos.length} fotografias
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-[4/5] flex-col items-center justify-center border border-dashed border-[#c9b9a8] bg-[#eee8df] p-6 text-center">
                    <p className="font-editorial text-xl text-[#242424]">
                      Galeria de {project.category}
                    </p>

                    <p className="mt-4 text-sm text-[#77716c]">
                      Fotografias e vídeos em breve.
                    </p>
                  </div>
                )}

                <div className="p-6">
                  <p className="mb-3 text-xs tracking-[0.2em] text-[#b9825b]">
                    {project.category.toUpperCase()}
                  </p>

                  <h3 className="font-editorial text-2xl text-[#242424]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#77716c]">
                    {project.description}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
