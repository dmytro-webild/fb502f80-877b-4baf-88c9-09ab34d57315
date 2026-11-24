import { BookOpen, MapPin, Sparkles, TrendingUp } from "lucide-react";
import MaskedLineReveal from "@/components/animation/MaskedLineReveal";

type BlogTopic = {
  id: number;
  title: string;
  category: string;
  summary: string;
  keywords: string[];
};

type GbpRec = {
  num: number;
  title: string;
  details: string;
};

const BLOG_TOPICS: BlogTopic[] = [
  {
    id: 1,
    title: "Кога е най-доброто време за полагане на външна топлоизолация в София?",
    category: "Сезонност & Технология",
    summary: "Подробен анализ на метеорологичните условия в София. Защо пролетните и есенните месеци осигуряват перманентно залепване и бързо съхнене на минералните мазилки.",
    keywords: ["външна топлоизолация София", "сезон за топлоизолация", "температури за мазилка"]
  },
  {
    id: 2,
    title: "Алпинисти или скеле: Кой метод е по-изгоден и бърз за фасадни ремонти?",
    category: "Алпинистки Услуги",
    summary: "Сравнение на разходите, времето за монтаж и гъвкавостта при работа по въжен способ срещу изграждане на класическо фасадно скеле при височинни обекти.",
    keywords: ["алпинисти София", "промишлен алпинизъм", "ремонт без скеле", "цена алпинисти"]
  },
  {
    id: 3,
    title: "Как да изберем дебелина и плътност на EPS/XPS изолацията за апартамент в София?",
    category: "Изолационни Материали",
    summary: "Ръководство за избор между 8 см, 10 см или 12 см EPS плочи, коефициенти на топлопроводимост (λ) и спестяване на разходи за отопление през зимата.",
    keywords: ["EPS изолация София", "XPS фибран", "дебелина на изолация", "енергийна ефективност"]
  },
  {
    id: 4,
    title: "Стъпки за трайно премахване на влага и мухъл чрез фасадни изолации",
    category: "Вътрешен Климат",
    summary: "Практически съвети как качествената външна и вътрешна изолация премахва термомостовете, конденза и образуването на опасни плесени в панелни и тухлени жилища.",
    keywords: ["премахване на мухъл", "влага в апартамента", "вътрешна топлоизолация", "термомост"]
  },
  {
    id: 5,
    title: "Ремонт на калкани, фуги и комини по въжен способ при етажна собственост",
    category: "Поддръжка на Сгради",
    summary: "Как управителите на етажна собственост и домоуправителите могат организирано да санират неизолирани калкани и панелни фуги без високи разходи.",
    keywords: ["ремонт на калкани София", "запечатване на фуги", "етажна собственост", "ремонт на комини"]
  }
];

const GBP_RECOMMENDATIONS: GbpRec[] = [
  {
    num: 1,
    title: "Оптимизиране на бизнес наименованието и категориите",
    details: "Задайте точно име: 'София Алпинист - Топлоизолация & Алпинистки Услуги'. Изберете основна категория 'Insulation Contractor' и допълнителни 'General Contractor' и 'Building Restoration Service'. Включете района София и областта."
  },
  {
    num: 2,
    title: "Редовно публикуване на висококачествени снимки от обекти",
    details: "Качвайте напредъка на обектите (Преди и След) с висока резолюция. Снимките на промишлени алпинисти в акция по високите фасади и детайли от положената мазилка изграждат силно доверие у бъдещите клиенти."
  },
  {
    num: 3,
    title: "Активно събиране и обработка на клиентски отзиви (Reviews)",
    details: "Изпращайте директен линк за отзив на всеки доволен клиент. В отговорите си включвайте ключови думи (напр. 'Благодарим, че ни доверихте външната топлоизолация на вашия апартамент в София!')."
  },
  {
    num: 4,
    title: "Ежеседмични публикации и промоционални оферти (GBP Posts)",
    details: "Публикувайте кратки новини всяка седмица за нови завършени проекти, безплатни огледи за етажна собственост или съвети за поддръжка на фасади. Това поддържа профила ви активен в алгоритъма на Google Maps."
  },
  {
    num: 5,
    title: "Детайлно описване на всички предлагани услуги",
    details: "Добавете всяка услуга в раздела 'Services' с ясно описание и ценови диапазон: 'Външна топлоизолация', 'Алпинистки услуги', 'Ремонт на калкани', 'Хидроизолация на покриви' и 'Почистване на фасади'."
  }
];

export default function SeoResourcesSection() {
  return (
    <section aria-label="SEO Ресурси и Блог Теми" className="relative bg-background py-[var(--section-space)] text-foreground border-t border-border/40">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-mono uppercase tracking-[var(--label-tracking)] text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            <span>SEO Стратегия & Маркетинг</span>
          </div>
          <MaskedLineReveal
            tag="h2"
            text="Идеи за блог статии и Google Business Profile препоръки"
            className="text-balance text-[length:var(--text-h2)] leading-[1.1]"
          />
          <p className="max-w-2xl text-[length:var(--text-body)] text-muted-foreground">
            Разработени теми за съдържание и насоки за локално присъствие в София, които ще увеличат органичните посещения и запитванията за оферти.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Column 1: Blog Topics */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="size-5" />
              </div>
              <h3 className="text-[length:var(--text-body-lg)] font-bold text-foreground">
                5 Избрани теми за Блог / Статии
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {BLOG_TOPICS.map((topic) => (
                <div
                  key={topic.id}
                  className="group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                      Тема #{topic.id} • {topic.category}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {topic.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {topic.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {topic.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-accent/60 px-2 py-0.5 text-[10px] font-mono text-foreground/80"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: GBP Recommendations */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <h3 className="text-[length:var(--text-body-lg)] font-bold text-foreground">
                Препоръки за Google Business Profile (София)
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {GBP_RECOMMENDATIONS.map((rec) => (
                <div
                  key={rec.num}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-bold text-primary">
                    {rec.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {rec.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {rec.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 rounded-xl border border-primary/30 bg-primary/5 p-5 flex items-start gap-3">
              <TrendingUp className="size-5 text-primary shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed text-foreground/90">
                <span className="font-bold text-primary block mb-0.5">Локален SEO Ефект:</span>
                Спазването на тези 5 стъпки в Google Business Profile гарантира класиране в челните 3 резултата на Google Maps при търсения от типа "алпинисти София" и "топлоизолация София".
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
