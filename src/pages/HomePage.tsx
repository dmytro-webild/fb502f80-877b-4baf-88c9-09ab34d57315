import HeroColumnGrid from "@/components/sections/hero/HeroColumnGrid";
import ServicesIndustryTiles from "@/components/sections/features/ServicesIndustryTiles";
import ProjectsGallery from "@/components/sections/projects/ProjectsGallery";
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
          title="Алпинистки услуги и топлоизолации"
          description="Професионални решения за вътрешна и външна топлоизолация, ремонти и довършителни дейности."
          primaryButton={{
            text: "Разгледай услугите",
            href: "#services"
          }}
          imageSrc="https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-00t7s5eg.jpg?_wi=1"
          imageAlt="Алпинистки услуги и топлоизолация по въжен способ"
          introDelay={1.7}
        />
      </div>

      <div id="services" data-webild-section="ServicesIndustryTiles" data-webild-section-id="ServicesIndustryTiles-1" data-section="services">
        <ServicesIndustryTiles
          title="Майсторска работа по фасади и интериор"
          linkText="Обадете се"
          items={[
            {
              title: "Вътрешна топлоизолация",
              description: "Ефективни решения за запазване на топлината у дома.",
              facts: [
                "Спира появата на мухъл",
                "Задържа топлината в стаята",
                "Бърз и чист монтаж"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959258-j48y2v4q.jpg?_wi=1",
              imageAlt: "Вътрешна и външна топлоизолация",
              href: "#contact"
            },
            {
              title: "Външна топлоизолация",
              description: "Дълготрайна защита и спестяване от сметки за ток.",
              facts: [
                "Качествени EPS и XPS системи",
                "Устойчивост на атмосферата",
                "Спестява разходи за ток"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959258-j48y2v4q.jpg?_wi=2",
              imageAlt: "Външна топлоизолация на фасада",
              href: "#contact"
            },
            {
              title: "Алпинистки услуги",
              description: "Работа на труднодостъпни височини без скеле.",
              facts: [
                "Безопасен въжен достъп",
                "Ремонт на високи фасади",
                "Бърза работа без скеле"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-00t7s5eg.jpg?_wi=2",
              imageAlt: "Алпинистки услуги по фасади",
              href: "#contact"
            },
            {
              title: "Строителни ремонти",
              description: "Цялостни довършителни и ремонтни дейности.",
              facts: [
                "Качествени строителни материали",
                "Внимание към всеки детайл",
                "Спазване на уговорени срокове"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-p48ckzpq.jpg?_wi=1",
              imageAlt: "Фасаден ремонт и изолационна система",
              href: "#contact"
            },
            {
              title: "Работа на височина",
              description: "Професионални фасадни ремонти по калкани и труднодостъпни зони.",
              facts: [
                "Пълно дюбелиране на плоскости",
                "Възстановяване на фуги и мазилки",
                "Гарантирана безопасност"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-iysdowws.jpg?_wi=1",
              imageAlt: "Монтаж на топлоизолация на височина",
              href: "#contact"
            },
            {
              title: "Ремонт на входове",
              description: "Освежаване и поддръжка на жилищни входове.",
              facts: [
                "Шпакловка и боядисване на вход",
                "Възстановяване на мазилки",
                "Чистота по време на работа"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-wsom0fct.jpg?_wi=1",
              imageAlt: "Възстановяване и мазилки на фасади",
              href: "#contact"
            },
            {
              title: "Окачени тавани",
              description: "Изграждане на съвременни конструкции с осветление.",
              facts: [
                "Прецизен монтаж на скара",
                "Вграждане на LED осветление",
                "Естетичен краен резултат"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-p48ckzpq.jpg?_wi=2",
              imageAlt: "Окачени тавани и сухо строителство",
              href: "#contact"
            },
            {
              title: "Шпакловка и боядисване",
              description: "Идеално гладки стени и прецизно боядисване.",
              facts: [
                "Фино шпакловане на стени",
                "Качествени латексови бои",
                "Безпрекорно гладък финиш"
              ],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-wsom0fct.jpg?_wi=2",
              imageAlt: "Шпакловка и нанасяне на декоративна мазилка",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="projects" data-webild-section="ProjectsGallery" data-webild-section-id="ProjectsGallery-1" data-section="projects">
        <ProjectsGallery />
      </div>

      <div id="contact" data-webild-section="ContactColumnWindow" data-webild-section-id="ContactColumnWindow-1" data-section="contact">
        <ContactColumnWindow
          title="Запитване за ремонт"
          submitText="Изпрати запитване"
          successText="Благодарим ви! Ще се свържем с вас възможно най-скоро."
          images={[
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959258-j48y2v4q.jpg?_wi=3",
              imageAlt: "Външна топлоизолация на сграда"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959259-00t7s5eg.jpg?_wi=3",
              imageAlt: "Алпинистки ремонт по фасада"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFIrpFWln4b6ycM0NgHaRaz7g7/uploaded-1795457959261-iysdowws.jpg?_wi=2",
              imageAlt: "Топлоизолация по въжен способ"
            }
          ]}
          labels={{
            name: "Вашето име",
            company: "Населено място",
            email: "Телефон за връзка",
            message: "Описание на обекта"
          }}
        />
      </div>
    </>
  );
}
