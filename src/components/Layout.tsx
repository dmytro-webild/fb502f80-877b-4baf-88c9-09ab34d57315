import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarBoxLinks from "@/components/navbars/NavbarBoxLinks";
import FooterLimeWordmark from "@/components/sections/footer/FooterLimeWordmark";
import AdminInquiriesModal from "@/components/AdminInquiriesModal";
import { type Inquiry, getInquiries } from "@/utils/inquiries";

export default function Layout() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [newCount, setNewCount] = useState(0);
  const [toastNotification, setToastNotification] = useState<string | null>(null);

  const updateBadge = () => {
    const list = getInquiries();
    const count = list.filter((i) => i.status === "Нова").length;
    setNewCount(count);
  };

  useEffect(() => {
    updateBadge();

    const handleUpdate = () => {
      updateBadge();
    };

    const handleNewInquiry = (e: Event) => {
      const customEvent = e as CustomEvent<Inquiry>;
      const inquiry = customEvent.detail;
      setToastNotification(`🔔 Ново запитване от ${inquiry.name} (${inquiry.email})!`);
      updateBadge();
      setTimeout(() => setToastNotification(null), 5000);
    };

    window.addEventListener("inquiries_updated", handleUpdate);
    window.addEventListener("new_inquiry_received", handleNewInquiry);

    return () => {
      window.removeEventListener("inquiries_updated", handleUpdate);
      window.removeEventListener("new_inquiry_received", handleNewInquiry);
    };
  }, []);

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
              name: "Проекти",
              href: "#projects"
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

      {/* Floating Notification Toast */}
      {toastNotification && (
        <div className="fixed bottom-20 right-4 z-40 max-w-sm rounded-xl bg-card border border-emerald-500/50 p-4 shadow-2xl animate-bounce text-foreground">
          <div className="flex items-start gap-3">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500 mt-1 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-bold text-emerald-500">Ново клиентско запитване</p>
              <p className="text-xs mt-0.5">{toastNotification}</p>
              <button
                onClick={() => {
                  setToastNotification(null);
                  setIsAdminOpen(true);
                }}
                className="mt-2 text-[11px] font-semibold text-primary hover:underline"
              >
                Отвори в административния панел &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discreet Floating Admin Panel Trigger Button */}
      <button
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-card/90 hover:bg-card border border-border px-3.5 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur transition-all hover:scale-105"
        title="Административен панел — Клиентски запитвания"
      >
        <svg className="size-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <span>Админ панел</span>
        {newCount > 0 && (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
            {newCount}
          </span>
        )}
      </button>

      {/* Admin Panel Modal */}
      <AdminInquiriesModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

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
                  text: "Проекти",
                  href: "#projects"
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
