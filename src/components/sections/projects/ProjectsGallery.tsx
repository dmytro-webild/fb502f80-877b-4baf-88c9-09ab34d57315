import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Media from "@/components/kit/Media";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  CheckCircle2,
  ArrowRightLeft,
  Sparkles,
  Clock,
  Check
} from "lucide-react";

type BeforeAfterItem = {
  id: string;
  title: string;
  label: "Преди ремонта" | "След ремонта";
  type: "before" | "after";
  description: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
};

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

const BEFORE_AFTER_PROJECTS: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Преди ремонта – Страничен изглед",
    label: "Преди ремонта",
    type: "before",
    description: "Начално състояние на фасадата и калкана преди започване на подготвителните и изолационни работи.",
    location: "гр. София, кв. Лозенец",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795458231802-4095brrs.jpg",
    imageAlt: "Преди ремонта - първа снимка на фасадата",
    highlights: [
      "Компрометирана външна повърхност",
      "Нужда от топлоизолация и грундиране",
      "Подготовка за въжен достъп"
    ]
  },
  {
    id: "ba-2",
    title: "Преди ремонта – Челен изглед",
    label: "Преди ремонта",
    type: "before",
    description: "Подробен оглед на компрометираните фасадни зони и фуги преди монтажа на топлоизолационната система.",
    location: "гр. София, кв. Лозенец",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795458231803-5knjiibf.jpg",
    imageAlt: "Преди ремонта - втора снимка на фасадата",
    highlights: [
      "Неизолирана стена с топлинни загуби",
      "Подготовка на основата за залепване",
      "Оглед на фасадни дефекти"
    ]
  },
  {
    id: "ba-3",
    title: "След ремонта – Завършена топлоизолация",
    label: "След ремонта",
    type: "after",
    description: "Напълно изградена EPS топлоизолационна система с дюбелиране, армирана шпакловка и завършваща водоотблъскваща мазилка.",
    location: "гр. София, кв. Лозенец",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795458231804-7v6y5se4.jpg",
    imageAlt: "След ремонта - напълно завършен обект",
    highlights: [
      "100% запечатана и изолирана фасада",
      "Висока енергийна ефективност",
      "Естетичен и устойчив краен финиш"
    ]
  }
];

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
  "Преди и след",
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

type ActiveModal = 
  | { type: "before-after"; index: number }
  | { type: "project"; index: number }
  | null;

export default function ProjectsGallery({
  title = "Нашите проекти",
  subtitle = "Реално изпълнени обекти за външна топлоизолация, фасадни ремонти и алпинистки услуги в София.",
  className = ""
}: ProjectsGalleryProps) {
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [baFilter, setBaFilter] = useState<"all" | "before" | "after">("all");
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const filteredProjects = selectedCategory === "Всички"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory || (selectedCategory === "Алпинистки услуги" && p.category === "Работа на височина"));

  const filteredBaProjects = baFilter === "all"
    ? BEFORE_AFTER_PROJECTS
    : BEFORE_AFTER_PROJECTS.filter(item => item.type === baFilter);

  const openBaLightbox = (index: number) => {
    setActiveModal({ type: "before-after", index });
  };

  const openProjectLightbox = (index: number) => {
    setActiveModal({ type: "project", index });
  };

  const closeLightbox = () => {
    setActiveModal(null);
  };

  const nextItem = useCallback(() => {
    if (!activeModal) return;
    if (activeModal.type === "before-after") {
      setActiveModal({
        type: "before-after",
        index: (activeModal.index + 1) % BEFORE_AFTER_PROJECTS.length
      });
    } else {
      setActiveModal({
        type: "project",
        index: (activeModal.index + 1) % filteredProjects.length
      });
    }
  }, [activeModal, filteredProjects.length]);

  const prevItem = useCallback(() => {
    if (!activeModal) return;
    if (activeModal.type === "before-after") {
      setActiveModal({
        type: "before-after",
        index: (activeModal.index - 1 + BEFORE_AFTER_PROJECTS.length) % BEFORE_AFTER_PROJECTS.length
      });
    } else {
      setActiveModal({
        type: "project",
        index: (activeModal.index - 1 + filteredProjects.length) % filteredProjects.length
      });
    }
  }, [activeModal, filteredProjects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModal) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, nextItem, prevItem]);

  const isBaCategorySelected = selectedCategory === "Преди и след";
  const showBeforeAfterBlock = selectedCategory === "Всички" || isBaCategorySelected;
  const showStandardProjects = selectedCategory !== "Преди и след";

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
            Галерия & Резултати
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
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-card-foreground hover:bg-muted border border-border/50"
                }`}
              >
                {cat === "Преди и след" && <ArrowRightLeft className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* DEDICATED BEFORE AND AFTER SHOWCASE BLOCK */}
        {showBeforeAfterBlock && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 p-6 md:p-8 rounded-2xl bg-card border-2 border-primary/20 shadow-xl overflow-hidden relative"
          >
            {/* Top Bar for Before & After Block */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/60">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-primary text-primary-foreground rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Специален проект
                  </span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Преди и след ремонта
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] font-bold text-foreground">
                  Сравнение: Преди и след топлоизолацията
                </h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                  Вижте реалния резултат от нашата работа. Натиснете върху снимка, за да я разгледате в пълен размер.
                </p>
              </div>

              {/* Sub-filters for Before/After */}
              <div className="flex items-center gap-1.5 bg-neutral-900/60 p-1.5 rounded-full border border-border/40 shrink-0 self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setBaFilter("all")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                    baFilter === "all"
                      ? "bg-primary text-white shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Всички (3)
                </button>
                <button
                  type="button"
                  onClick={() => setBaFilter("before")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer flex items-center gap-1 ${
                    baFilter === "before"
                      ? "bg-amber-600 text-white shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  Преди ремонта (2)
                </button>
                <button
                  type="button"
                  onClick={() => setBaFilter("after")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer flex items-center gap-1 ${
                    baFilter === "after"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Check className="w-3 h-3" />
                  След ремонта (1)
                </button>
              </div>
            </div>

            {/* Before & After Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredBaProjects.map((item) => {
                const globalIndex = BEFORE_AFTER_PROJECTS.findIndex(b => b.id === item.id);
                const isAfter = item.type === "after";
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => openBaLightbox(globalIndex)}
                    className={`group relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer flex flex-col bg-neutral-900 shadow-md hover:shadow-xl ${
                      isAfter
                        ? "border-emerald-500/50 ring-2 ring-emerald-500/20"
                        : "border-amber-500/30 hover:border-amber-500/60"
                    }`}
                  >
                    {/* Image Box */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                      <Media
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                      {/* Prominent Tag Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        {isAfter ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600 rounded-full shadow-lg backdrop-blur-md">
                            <Check className="w-3.5 h-3.5" />
                            {item.label}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-white bg-amber-600 rounded-full shadow-lg backdrop-blur-md">
                            <Clock className="w-3.5 h-3.5" />
                            {item.label}
                          </span>
                        )}
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-medium">
                        <span className="truncate text-white/90 font-mono">{item.location}</span>
                        <span className="text-primary-foreground bg-primary/80 px-2 py-0.5 rounded text-[10px] uppercase font-bold shrink-0">
                          Кликни за преглед
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between bg-card">
                      <div>
                        <h4 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                          <span>{item.title}</span>
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-accent transition-colors">
                        <span className="uppercase tracking-wider text-[11px]">
                          {isAfter ? "Виж крайния резултат" : "Виж началния изглед"}
                        </span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STANDARD PROJECTS GALLERY GRID */}
        {showStandardProjects && (
          <>
            {isBaCategorySelected === false && (
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] font-bold text-foreground">
                  Други изпълнени обекти
                </h3>
                <span className="text-xs font-mono text-muted-foreground">
                  Показани: {filteredProjects.length} проекта
                </span>
              </div>
            )}

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
                    onClick={() => openProjectLightbox(idx)}
                  >
                    <Media
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
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
                      onClick={() => openProjectLightbox(idx)}
                      className="inline-flex items-center justify-between w-full pt-3 border-t border-border/50 text-xs font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors cursor-pointer"
                    >
                      <span>Преглед на снимката</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeModal !== null && (
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
              className="relative w-full max-w-4xl bg-card border border-border text-card-foreground rounded-xl overflow-hidden shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* BEFORE-AFTER LIGHTBOX CONTENT */}
              {activeModal.type === "before-after" && (() => {
                const item = BEFORE_AFTER_PROJECTS[activeModal.index];
                const isAfter = item.type === "after";
                return (
                  <>
                    {/* Top Control Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 text-white border-b border-neutral-800">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono bg-primary px-2.5 py-0.5 rounded text-white font-bold">
                          Снимка {activeModal.index + 1} от {BEFORE_AFTER_PROJECTS.length}
                        </span>
                        {isAfter ? (
                          <span className="inline-flex items-center gap-1 text-xs font-mono bg-emerald-600 px-2.5 py-0.5 rounded text-white font-bold uppercase">
                            <Check className="w-3 h-3" />
                            {item.label}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-mono bg-amber-600 px-2.5 py-0.5 rounded text-white font-bold uppercase">
                            <Clock className="w-3 h-3" />
                            {item.label}
                          </span>
                        )}
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

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-neutral-950">
                      {/* Image Viewer */}
                      <div className="relative lg:col-span-3 bg-black flex flex-col items-center justify-center min-h-[320px] sm:min-h-[420px]">
                        <Media
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="w-full h-full max-h-[65vh] object-contain"
                        />

                        {/* Top Label Banner on Photo */}
                        <div className="absolute top-4 left-4">
                          {isAfter ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600 rounded-full shadow-lg">
                              <Check className="w-4 h-4" />
                              {item.label}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-amber-600 rounded-full shadow-lg">
                              <Clock className="w-4 h-4" />
                              {item.label}
                            </span>
                          )}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); prevItem(); }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-primary text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer"
                          aria-label="Предишна снимка"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); nextItem(); }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-primary text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer"
                          aria-label="Следваща снимка"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Quick Thumbnail Selector Bar */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md p-1.5 rounded-full border border-neutral-700 flex items-center gap-2">
                          {BEFORE_AFTER_PROJECTS.map((baItem, idx) => {
                            const isSelected = idx === activeModal.index;
                            return (
                              <button
                                key={baItem.id}
                                type="button"
                                onClick={() => setActiveModal({ type: "before-after", index: idx })}
                                className={`px-2.5 py-1 text-[11px] font-mono rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                                  isSelected
                                    ? baItem.type === "after"
                                      ? "bg-emerald-600 text-white font-bold shadow"
                                      : "bg-amber-600 text-white font-bold shadow"
                                    : "text-neutral-300 hover:bg-neutral-800"
                                }`}
                              >
                                {baItem.label} ({idx + 1})
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Info Panel */}
                      <div className="lg:col-span-2 p-6 flex flex-col justify-between bg-card border-t lg:border-t-0 lg:border-l border-border">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-2">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{item.location}</span>
                          </div>

                          <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] font-bold text-foreground mb-3">
                            {item.title}
                          </h3>

                          <p className="text-[length:var(--text-small)] text-muted-foreground leading-relaxed mb-6">
                            {item.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-3">
                              Характеристики на обекта:
                            </h4>
                            <ul className="space-y-2">
                              {item.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <a
                            href="#contact"
                            onClick={closeLightbox}
                            className="btn-primary w-full text-center block py-2.5 text-sm font-semibold rounded-lg"
                          >
                            Запитване за оферта
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}

              {/* STANDARD PROJECT LIGHTBOX CONTENT */}
              {activeModal.type === "project" && (() => {
                const project = filteredProjects[activeModal.index];
                if (!project) return null;
                return (
                  <>
                    {/* Top Bar Controls */}
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 text-white border-b border-neutral-800">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono bg-primary px-2.5 py-0.5 rounded text-white font-bold">
                          {activeModal.index + 1} / {filteredProjects.length}
                        </span>
                        <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                          {project.category}
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
                      {/* Image Box */}
                      <div className="relative lg:col-span-3 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
                        <Media
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          className="w-full h-full max-h-[70vh] object-contain"
                        />

                        {/* Navigation Arrows */}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); prevItem(); }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer"
                          aria-label="Предишна снимка"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); nextItem(); }}
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
                            <span>{project.location}</span>
                          </div>

                          <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] font-bold text-foreground mb-3">
                            {project.title}
                          </h3>

                          <p className="text-[length:var(--text-small)] text-muted-foreground leading-relaxed mb-6">
                            {project.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-3">
                              Основни характеристики:
                            </h4>
                            <ul className="space-y-2">
                              {project.highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <a
                            href="#contact"
                            onClick={closeLightbox}
                            className="btn-primary w-full text-center block py-2.5 text-sm font-semibold rounded-lg"
                          >
                            Запитване за подобен обект
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
