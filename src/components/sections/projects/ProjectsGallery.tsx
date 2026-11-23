import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Media from "@/components/kit/Media";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, CheckCircle2 } from "lucide-react";

type ProjectItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
};

const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Външна топлоизолация на многоетажна сграда",
    category: "Външна топлоизолация",
    description: "Монтаж на висок клас EPS топлоизолация, армираща мрежа, шпакловка и завършваща водоотблъскваща минерална мазилка.",
    location: "гр. София, кв. Манастирски ливади",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959258-j48y2v4q.jpg",
    imageAlt: "Външна топлоизолация на сграда",
    highlights: ["10 см EPS изолационна система", "Армирана защитна мрежа", "Водоотблъскваща минерална мазилка"]
  },
  {
    id: "proj-2",
    title: "Алпинистки ремонт и топлоизолация на високи етажи",
    category: "Алпинистки услуги",
    description: "Работа по въжен способ за бърз и сигурен монтаж на топлоизолация без необходимост от изграждане на скъпоструващо скеле.",
    location: "гр. София, кв. Младост",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-00t7s5eg.jpg",
    imageAlt: "Работа на алпинисти по фасада",
    highlights: ["Без необходимост от скеле", "Бърз и сигурен въжен достъп", "Сертифицирани височинни алпинисти"]
  },
  {
    id: "proj-3",
    title: "Фасадно реновиране и декоративна мазилка",
    category: "Фасадни дейности",
    description: "Цялостно възстановяване на компрометирана мазилка, полагане на дълбокопроникващ грунд и завършващ устойчив слоен финиш.",
    location: "гр. София, кв. Лозенец",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-p48ckzpq.jpg",
    imageAlt: "Фасаден ремонт и изолационна система",
    highlights: ["Пълна защита от влага и мухъл", "Естетичен и модерен екстериор", "Гаранция за качество"]
  },
  {
    id: "proj-4",
    title: "Топлоизолация по въжен способ на калкан",
    category: "Работа на височина",
    description: "Прецизно залепване на XPS/EPS топлоизолационни плоскости, дюбелиране и защитно шпакловане на труднодостъпен калкан.",
    location: "гр. София, кв. Витоша",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-iysdowws.jpg",
    imageAlt: "Алпинист извършва топлоизолация на височина",
    highlights: ["Обслужване на труднодостъпни зони", "Пълно дюбелиране за стабилност", "Плътна термозащита без термомостове"]
  },
  {
    id: "proj-5",
    title: "Строително-ремонтни дейности и хидроизолация",
    category: "Строителни ремонти",
    description: "Саниране на фасадни елементи, фугиране, топлоизолация и грундиране с висок клас устойчиви строителни разтвори.",
    location: "гр. София, кв. Овча купел",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-wsom0fct.jpg",
    imageAlt: "Монтаж на топлоизолация и мазилки",
    highlights: ["Пълна хидро- и топлоизолация", "Възстановена здравина на фасадата", "Повишена енергийна ефективност"]
  }
];

const CATEGORIES = [
  "Всички",
  "Външна топлоизолация",
  "Алпинистки услуги",
  "Фасадни дейности",
  "Строителни ремонти"
];

type ProjectsGalleryProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function ProjectsGallery({
  title = "Нашите проекти",
  subtitle = "Реално изпълнени обекти за външна топлоизолация, фасадни ремонти и алпинистки услуги в София.",
  className = ""
}: ProjectsGalleryProps) {
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "Всички"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory || (selectedCategory === "Алпинистки услуги" && p.category === "Работа на височина"));

  const openLightbox = (index: number) => {
    setActiveModalIndex(index);
  };

  const closeLightbox = () => {
    setActiveModalIndex(null);
  };

  const nextProject = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filteredProjects.length);
    }
  }, [activeModalIndex, filteredProjects.length]);

  const prevProject = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  }, [activeModalIndex, filteredProjects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, nextProject, prevProject]);

  const currentModalProject = activeModalIndex !== null ? filteredProjects[activeModalIndex] : null;

  return (
    <section
      id="projects"
      data-section="projects"
      data-webild-section="ProjectsGallery"
      className={`relative py-[var(--section-space)] bg-background text-foreground ${className}`}
    >
      <div className="mx-auto w-[var(--container)] px-4">
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-semibold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
            Галерия
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-[length:var(--text-body-lg)] text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-card-foreground hover:bg-muted border border-border/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group kit-card overflow-hidden border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col h-full bg-card shadow-sm hover:shadow-lg"
            >
              {/* Image Box */}
              <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-neutral-900"
                onClick={() => openLightbox(idx)}
              >
                <Media
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Badge & Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                  {project.category}
                </div>

                <div className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-1.5 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-body-lg)] font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[length:var(--text-small)] text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-border/50 text-xs font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors"
                >
                  <span>Преглед на снимката</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentModalProject && activeModalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-card border border-border text-card-foreground rounded-lg overflow-hidden shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 text-white border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-primary px-2.5 py-0.5 rounded text-white font-bold">
                    {activeModalIndex + 1} / {filteredProjects.length}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                    {currentModalProject.category}
                  </span>
                </div>
                
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Затвори"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-neutral-950">
                {/* Large Image Box with Nav Arrows */}
                <div className="relative lg:col-span-3 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
                  <Media
                    src={currentModalProject.imageSrc}
                    alt={currentModalProject.imageAlt}
                    className="w-full h-full max-h-[70vh] object-contain"
                  />

                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); prevProject(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer"
                    aria-label="Предишна снимка"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); nextProject(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer"
                    aria-label="Следваща снимка"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Project Info Panel */}
                <div className="lg:col-span-2 p-6 flex flex-col justify-between bg-card border-t lg:border-t-0 lg:border-l border-border">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{currentModalProject.location}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] font-bold text-foreground mb-3">
                      {currentModalProject.title}
                    </h3>

                    <p className="text-[length:var(--text-small)] text-muted-foreground leading-relaxed mb-6">
                      {currentModalProject.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-3">
                        Основни характеристики:
                      </h4>
                      <ul className="space-y-2">
                        {currentModalProject.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <a
                      href="#contact"
                      onClick={closeLightbox}
                      className="btn-primary w-full text-center"
                    >
                      Запитване за подобен обект
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
