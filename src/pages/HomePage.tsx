import HeroColumnGrid from "@/components/sections/hero/HeroColumnGrid";
import ServicesIndustryTiles from "@/components/sections/features/ServicesIndustryTiles";
import ProjectsGallery from "@/components/sections/projects/ProjectsGallery";
import FaqAccordion from "@/components/sections/faq/FaqAccordion";
import SeoResourcesSection from "@/components/sections/seo/SeoResourcesSection";
import ContactColumnWindow from "@/components/sections/contact/ContactColumnWindow";
import LoaderHairlineColumns from "@/components/loaders/LoaderHairlineColumns";

export default function HomePage() {
  return (
    <>
      <LoaderHairlineColumns
        brand="София Алпинист"
      />

      <div id="hero" data-webild-section="HeroColumnGrid" data-webild-section-id="HeroColumnGrid-1" data-section="hero" data-scene>
        <HeroColumnGrid
          title="Външна топлоизолация и алпинистки услуги в София"
          description="Професионално саниране на сгради, фасадни ремонти по въжен способ и топлоизолационни системи с дълготрайна писмена гаранция."
          primaryButton={{
            text: "Разгледай нашите услуги",
            href: "#services"
          }}
          imageSrc="https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795456367815-4kjsrvbu.png"
          imageAlt="Професионална външна топлоизолация на фасада и алпинистки услуги по въжен способ в София"
          introDelay={1.7}
        />
      </div>

      <div id="services" data-webild-section="ServicesIndustryTiles" data-webild-section-id="ServicesIndustryTiles-1" data-section="services">
        <ServicesIndustryTiles
          title="Професионални алпинистки услуги и топлоизолации в София"
          description="Изпълнение на изолационни системи, ремонт на високи фасади, калкани, покриви и довършителни дейности от опитни майстори."
          linkText="Поискай оферта"
          items={[
            {
              title: "Външна топлоизолация на фасади",
              description: "Дълготрайна защита с висок клас EPS и XPS плоскости, армираща мрежа и минерална мазилка.",
              facts: [
                "Спестява до 40% от сметките за ток",
                "Сертифицирани EPS и XPS системи",
                "Устойчивост на дъжд, студ и слънце"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959258-j48y2v4q.jpg?_wi=2",
              imageAlt: "Външна топлоизолация на фасада с EPS и XPS плоскости в София",
              href: "#contact"
            },
            {
              title: "Алпинистки услуги по въжен способ",
              description: "Промишлен алпинизъм за работа на труднодостъпни височини без наем и монтаж на скеле.",
              facts: [
                "Безопасен въжен алпинистки достъп",
                "Бързо изпълнение без излишно скеле",
                "Ремонт на високи сгради и калкани"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-00t7s5eg.jpg?_wi=2",
              imageAlt: "Алпинистки услуги по въжен способ за фасадни ремонти в София",
              href: "#contact"
            },
            {
              title: "Вътрешна топлоизолация",
              description: "Ефективни термични системи за спиране на влагата, конденза и мухъла у дома.",
              facts: [
                "Спира трайно появата на мухъл",
                "Задържа топлината в помещенията",
                "Чист и бърз монтаж с гипсокартон"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959258-j48y2v4q.jpg?_wi=1",
              imageAlt: "Вътрешна топлоизолация на стени и тавани в апартаменти в София",
              href: "#contact"
            },
            {
              title: "Почистване и ремонт на фасади",
              description: "Възстановяване на компрометирани мазилки, тухли, бетони и измиване на стъклени фасади.",
              facts: [
                "Възстановяване на стари мазилки",
                "Почистване на стъкла на височина",
                "Грундиране и боядисване на фасада"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-p48ckzpq.jpg?_wi=1",
              imageAlt: "Почистване и фасадни ремонти от промишлени алпинисти в София",
              href: "#contact"
            },
            {
              title: "Хидроизолация на покриви и комини",
              description: "Професионално запечатване на покривни повърхности, панелни фуги и ремонт на комини.",
              facts: [
                "Отстраняване на влага и течове",
                "Запечатване на панелни фуги",
                "Изграждане и обзиждане на комини"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-iysdowws.jpg?_wi=1",
              imageAlt: "Хидроизолация на покриви и ремонт на комини по въжен способ в София",
              href: "#contact"
            },
            {
              title: "Ремонт на входове и общи части",
              description: "Цялостно саниране и освежаване на входове в жилищни сгради и етажна собственост.",
              facts: [
                "Шпакловка и боядисване на входове",
                "Възстановяване на мазилки и цокъл",
                "Чистота и ред по време на работа"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-wsom0fct.jpg?_wi=1",
              imageAlt: "Саниране и ремонт на входове на етажна собственост в София",
              href: "#contact"
            },
            {
              title: "Окачени тавани и сухо строителство",
              description: "Прецизно изграждане на съвременни гипсокартон конструкции с топло- и шумоизолация.",
              facts: [
                "Прецизен монтаж на носеща скара",
                "Вграждане на LED осветителни тела",
                "Естетичен и гладък завършек"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-p48ckzpq.jpg?_wi=2",
              imageAlt: "Окачени тавани и изграждане на сухо строителство в София",
              href: "#contact"
            },
            {
              title: "Шпакловка, боядисване и мазилки",
              description: "Идеално гладки стени, нанасяне на водоотблъскващи бои и минерални декоративни мазилки.",
              facts: [
                "Фино шпакловане на стени и тавани",
                "Качествени фасадни и интериорни бои",
                "Дълготраен и перфектен финиш"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-wsom0fct.jpg?_wi=2",
              imageAlt: "Шпакловка и полагане на минерална топлоизолационна мазилка в София",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="projects" data-webild-section="ProjectsGallery" data-webild-section-id="ProjectsGallery-1" data-section="projects">
        <ProjectsGallery />
      </div>

      <div id="faq" data-webild-section="FaqAccordion" data-webild-section-id="FaqAccordion-1" data-section="faq">
        <FaqAccordion />
      </div>

      <div id="blog-tips" data-webild-section="SeoResourcesSection" data-webild-section-id="SeoResourcesSection-1" data-section="blog-tips">
        <SeoResourcesSection />
      </div>

      <div id="contact" data-webild-section="ContactColumnWindow" data-webild-section-id="ContactColumnWindow-1" data-section="contact">
        <ContactColumnWindow
          title="Запитване за оферта и консултация"
          submitText="Изпрати запитване"
          successText="Благодарим ви! Ще се свържем с вас възможно най-скоро."
          images={[
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959258-j48y2v4q.jpg?_wi=3",
              imageAlt: "Външна топлоизолация на сграда в град София"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-00t7s5eg.jpg?_wi=3",
              imageAlt: "Алпинистки ремонт по височинна фасада в София"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-iysdowws.jpg?_wi=2",
              imageAlt: "Топлоизолация по въжен способ в град София"
            }
          ]}
          labels={{
            name: "Вашето име",
            company: "Населено място / Район в София",
            email: "Телефон за връзка или имейл",
            message: "Описание на обекта и желаната услуга"
          }}
        />
      </div>
    </>
  );
}
