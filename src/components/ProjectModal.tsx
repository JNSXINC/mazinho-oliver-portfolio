import { useEffect, useRef, useState } from "react";
import {
  X,
  ImageIcon,
  Video,
  LockKeyhole,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activePhoto, setActivePhoto] = useState(0);

  const totalPhotos = project?.photos.length ?? 0;

  const nextPhoto = () => {
    setActivePhoto((current) =>
      totalPhotos > 0 ? (current + 1) % totalPhotos : 0,
    );
  };

  const previousPhoto = () => {
    setActivePhoto((current) =>
      totalPhotos > 0 ? (current - 1 + totalPhotos) % totalPhotos : 0,
    );
  };

  // Reinicia a galeria ao trocar de projeto.
  useEffect(() => {
    setActivePhoto(0);
  }, [project?.id]);

  // Controla o modal, o foco e os atalhos do teclado.
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight" && project.photos.length > 1) {
        setActivePhoto((current) => (current + 1) % project.photos.length);
      }

      if (event.key === "ArrowLeft" && project.photos.length > 1) {
        setActivePhoto(
          (current) =>
            (current - 1 + project.photos.length) % project.photos.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const showPhotos = project.mediaType !== "videos";
  const showVideos = project.mediaType !== "photos";

  const currentPhoto = project.photos[activePhoto] ?? project.photos[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[#f8f6f2] p-6 shadow-2xl md:p-10"
      >
        {/* Cabeçalho */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-[#b9825b]">
              {project.category.toUpperCase()}
            </p>

            <h2
              id="project-modal-title"
              className="font-editorial text-3xl text-[#242424] md:text-5xl"
            >
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar projeto"
            className="shrink-0 rounded-full p-2 text-[#242424] transition hover:bg-[#e5ded5]"
          >
            <X size={24} />
          </button>
        </div>

        <p className="mb-8 leading-7 text-[#77716c]">{project.description}</p>

        {/* Galeria de fotografias e vídeos */}
        <div
          className={`grid gap-6 ${
            showPhotos && showVideos ? "md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {showPhotos && (
            <div className="min-w-0 space-y-4">
              {project.photos.length > 0 ? (
                <div className="space-y-5">
                  {/* Fotografia principal */}
                  <div className="flex min-h-[300px] items-center justify-center bg-[#191919]">
                    <img
                      src={currentPhoto}
                      alt={`${project.title} - fotografia ${activePhoto + 1}`}
                      className="max-h-[65vh] w-full object-contain"
                    />
                  </div>

                  {/* Navegação */}
                  {project.photos.length > 1 && (
                    <>
                      <div className="flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={previousPhoto}
                          aria-label="Fotografia anterior"
                          className="rounded-full border border-[#e5ded5] p-3 text-[#242424] transition hover:border-[#b9825b] hover:bg-[#e5ded5]"
                        >
                          <ChevronLeft size={20} />
                        </button>

                        <span className="text-sm text-[#77716c]">
                          {activePhoto + 1} / {project.photos.length}{" "}
                          fotografias
                        </span>

                        <button
                          type="button"
                          onClick={nextPhoto}
                          aria-label="Próxima fotografia"
                          className="rounded-full border border-[#e5ded5] p-3 text-[#242424] transition hover:border-[#b9825b] hover:bg-[#e5ded5]"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      {/* Miniaturas */}
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {project.photos.map((photo, index) => (
                          <button
                            key={`${photo}-${index}`}
                            type="button"
                            onClick={() => setActivePhoto(index)}
                            aria-label={`Visualizar fotografia ${index + 1}`}
                            aria-pressed={activePhoto === index}
                            className={`h-20 w-16 shrink-0 overflow-hidden border-2 transition ${
                              activePhoto === index
                                ? "border-[#b9825b]"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={photo}
                              alt=""
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 border border-dashed border-[#c9b9a8] bg-[#eee8df] p-6 text-center">
                  <ImageIcon
                    size={36}
                    strokeWidth={1.4}
                    className="text-[#b9825b]"
                  />

                  <p className="text-sm text-[#77716c]">Fotografias em breve</p>

                  <div className="flex items-center gap-2 text-[#a68c78]">
                    <LockKeyhole size={13} />
                    <span className="text-[10px] uppercase tracking-widest">
                      Conteúdo reservado
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Vídeos */}
          {showVideos && (
            <div className="min-w-0 space-y-4">
              {project.videos.length > 0 ? (
                project.videos.map((video, index) => (
                  <video
                    key={`${video}-${index}`}
                    src={video}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full bg-black object-contain"
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                ))
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 border border-dashed border-[#c9b9a8] bg-[#eee8df] p-6 text-center">
                  <Video
                    size={36}
                    strokeWidth={1.4}
                    className="text-[#b9825b]"
                  />

                  <p className="text-sm text-[#77716c]">Vídeos em breve</p>

                  <div className="flex items-center gap-2 text-[#a68c78]">
                    <LockKeyhole size={13} />
                    <span className="text-[10px] uppercase tracking-widest">
                      Conteúdo reservado
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Contato */}
        <div className="mt-10 border-t border-[#e5ded5] pt-8 text-center">
          <p className="font-editorial text-xl text-[#242424]">
            Gostou deste estilo de fotografia?
          </p>

          <a
            href={`https://wa.me/5521993218078?text=${encodeURIComponent(
              `Olá, Mazinho! Vi seu portfólio de ${project.category} e gostaria de um orçamento.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-[#b9825b] px-7 py-4 text-xs font-semibold tracking-wider text-white transition hover:bg-[#a36d49]"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </div>
  );
}
