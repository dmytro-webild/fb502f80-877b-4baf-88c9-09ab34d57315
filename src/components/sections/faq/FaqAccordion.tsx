import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown, HelpCircle, ShieldCheck, Wrench } from "lucide-react";
import MaskedLineReveal from "@/components/animation/MaskedLineReveal";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Кога е най-подходящото време за поставяне на външна топлоизолация в София?",
    answer: "Най-добрите сезони за полагане на външна топлоизолация са пролетта, лятото и есента при сухо време и температури между +5°C и +30°C. Спазването на температурния режим гарантира правилното съхнене на лепилата, армиращите шпакловки и минералните мазилки."
  },
  {
    question: "Защо да изберем алпинистки услуги по въжен способ пред монтиране на скеле?",
    answer: "Алпинисткият въжен способ е значително по-бърз, по-гъвкав и по-изгоден вариант за ремонти на високи сгради, калкани и отделни апартаменти в София. Избягват се високите такси за наем и монтаж на скеле, а достъпът до труднодостъпни фасадни зони е незабавен."
  },
  {
    question: "Каква е разликата между EPS (стиропор) и XPS (фибран) при изолация на фасади?",
    answer: "EPS (експандиран полистирол) притежава отлична паропропускливост, позволявайки на стените да дишат, което го прави стандартен избор за фасадни стени. XPS (екструдиран полистирол) е водонепропусклив материал с висока якост на натиск, подходящ за цокли, фундаментални стени, тераси и подпрозоречни первази."
  },
  {
    question: "Предоставяте ли гаранция за извършените фасадни и алпинистки ремонти?",
    answer: "Да, за всички изградени топлоизолационни системи и височинни ремонти в София предоставяме писмена гаранция. Работим със сертифицирани лепила, мрежи и декоративни мазилки на утвърдени маркови производители като Baumit, Ceresit и Weber."
  },
  {
    question: "Колко време отнема полагането на външна топлоизолация на един апартамент?",
    answer: "Стандартен фасаден ремонт и изграждане на топлоизолация на един апартамент обикновено отнема между 3 и 6 работни дни. Времето зависи от квадратурата, атмосферните условия и технологичното време за съхнене на шпакловките."
  },
  {
    question: "Извършвате ли хидроизолация на покриви, почистване на стъкла и ремонт на фуги?",
    answer: "Да! Екипът на София Алпинист изпълнява пълната гама височинни дейности в град София: хидроизолация на покриви и комини, запечатване на панелни фуги, подмяна на водосточни тръби и измиване на стъклени фасади."
  }
];

export default function FaqAccordion() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section aria-label="Често задавани въпроси" className="relative bg-background py-[var(--section-space)] text-foreground">
      <div className="mx-auto w-[var(--container)]">
        <div className="mb-12 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-mono uppercase tracking-[var(--label-tracking)] text-muted-foreground">
            <HelpCircle className="size-3.5 text-primary" />
            <span>Въпроси & Отговори</span>
          </div>
          <MaskedLineReveal
            tag="h2"
            text="Често задавани въпроси за топлоизолация и алпинистки услуги в София"
            className="text-balance text-[length:var(--text-h2)] leading-[1.1]"
          />
          <p className="max-w-2xl text-[length:var(--text-body)] text-muted-foreground">
            Събрахме най-важните въпроси от нашите клиенти относно цени, материали, гаранции и технология за изпълнение по въжен способ.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 max-w-4xl">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-card transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium hover:bg-accent/40 focus:outline-none"
                >
                  <h3 className="text-[length:var(--text-body-lg)] text-foreground flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">
                      {index + 1}
                    </span>
                    <span>{item.question}</span>
                  </h3>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <div className="border-t border-border/50 px-5 py-4 text-[length:var(--text-body)] leading-relaxed text-muted-foreground bg-accent/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Писмена гаранция за качество</p>
              <p className="text-xs text-muted-foreground">До 10 години за изпълнените изолационни системи</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
              <Wrench className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Безплатен оглед и съвет</p>
              <p className="text-xs text-muted-foreground">За района на гр. София и близката околност</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
