import HeroColumnGrid from "@/components/sections/hero/HeroColumnGrid";
import ServicesIndustryTiles from "@/components/sections/features/ServicesIndustryTiles";
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
          imageSrc="https://img.b2bpic.net/free-photo/detail-urban-stairs_23-2148107043.jpg"
          imageAlt="detail of urban staircase"
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
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-construction-worker-ladder_23-2149366649.jpg",
              imageAlt: "Medium shot construction worker on ladder",
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
              imageSrc: "https://img.b2bpic.net/free-photo/female-construction-worker-with-helmet-tape-measurer_23-2148813392.jpg",
              imageAlt: "woman measuring wall with tape",
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
              imageSrc: "https://img.b2bpic.net/free-photo/man-bouldering-spot_23-2151734253.jpg",
              imageAlt: "Man at bouldering spot",
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
              imageSrc: "https://img.b2bpic.net/free-photo/electrician-installer-with-tool-his-hands-working-with-cable-construction-site_169016-5885.jpg",
              imageAlt: "Electrician installer with a tool in his hands, working with cable on the construction site.",
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
              imageSrc: "https://img.b2bpic.net/free-photo/empty-concrete-pedestrian-underpass-tunnel-with-fluorescent-lighting-kanazawa-japan_1308-188871.jpg",
              imageAlt: "Empty Concrete Pedestrian Underpass Tunnel with Fluorescent Lighting in Kanazawa Japan",
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
              imageSrc: "https://img.b2bpic.net/free-photo/construction-worker-carrying-placard_23-2149328065.jpg",
              imageAlt: "Construction worker carrying placard",
              href: "#contact"
            },
            {
              title: "Монтаж на гипсокартон",
              description: "Сухо строителство, преградни стени и предстени.",
              facts: [
                "Изграждане на нови стени",
                "Идеално равни повърхности",
                "Бързо сухо строителство"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/construction-worker-holding-tool-full-shot_23-2149328044.jpg",
              imageAlt: "Construction worker holding tool full shot",
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
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-paint-roller-isolated-white-background_53876-31283.jpg",
              imageAlt: "Flat lay of paint roller isolated on white background",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactColumnWindow" data-webild-section-id="ContactColumnWindow-1" data-section="contact">
        <ContactColumnWindow
          title="Запитване за ремонт"
          submitText="Изпрати запитване"
          successText="Благодарим ви! Ще се свържем с вас възможно най-скоро."
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/plasterboard-ceiling-installed-profile-frame-apartment-office-renovation-cheap-quick-way-make-partition-ceiling-room-warehouse_166373-1914.jpg",
              imageAlt: "plasterboard ceiling installation"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-engineer-talking-phone_23-2148233674.jpg",
              imageAlt: "Close-up portrait of engineer talking on the phone"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/full-shot-people-holding-brushes_23-2149394459.jpg",
              imageAlt: "Full shot people holding brushes"
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
