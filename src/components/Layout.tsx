import { Outlet } from "react-router-dom";
import NavbarBoxLinks from "@/components/navbars/NavbarBoxLinks";
import FooterLimeWordmark from "@/components/sections/footer/FooterLimeWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="default" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarBoxLinks
          brand="София Алпинист"
          navItems={[
            {
              name: "Начало",
              href: "#hero"
            },
            {
              name: "Услуги",
              href: "#services"
            },
            {
              name: "Контакт",
              href: "#contact"
            }
          ]}
          primaryButton={{
            text: "0888 98 33 68",
            href: "tel:0888 98 33 68"
          }}
          introDelay={1.7}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="default" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterLimeWordmark
          description="Работим в град София, околните населени места и София област. Свържете се с нас за информация относно предлаганите услуги."
          primaryButton={{
            text: "ОБАДИ СЕ СЕГА",
            href: "tel:0888 98 33 68"
          }}
          columns={[
            {
              title: "Навигация",
              links: [
                {
                  text: "Начало",
                  href: "#hero"
                },
                {
                  text: "Услуги",
                  href: "#services"
                },
                {
                  text: "Контакт",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Контакти",
              links: [
                {
                  text: "Телефон: 0888 98 33 68",
                  href: "tel:0888 98 33 68"
                },
                {
                  text: "Имейл: info@sofia-alpinist.bg",
                  href: "mailto:info@sofia-alpinist.bg"
                },
                {
                  text: "Район: София и София област",
                  href: "#contact"
                }
              ]
            }
          ]}
          wordmark="София Алпинист"
          city="София"
          timeZone="Europe/Sofia"
          copyright="© 2026 София Алпинист. Всички права запазени."
        />
      </footer>
    </div>
  );
}
