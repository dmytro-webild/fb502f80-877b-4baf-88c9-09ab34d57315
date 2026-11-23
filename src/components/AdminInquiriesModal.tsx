import { useEffect, useState } from "react";
import {
  type Inquiry,
  createTestInquiry,
  deleteInquiry,
  getInquiries,
  getNotificationEmail,
  setNotificationEmail,
  updateInquiryStatus,
} from "@/utils/inquiries";

type AdminInquiriesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FilterTab = "Всички" | "Нова" | "В процес на обработка" | "Обработена";

export default function AdminInquiriesModal({ isOpen, onClose }: AdminInquiriesModalProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState<FilterTab>("Всички");
  const [notificationEmail, setEmail] = useState<string>("");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const reloadData = () => {
    setInquiries(getInquiries());
    setEmail(getNotificationEmail());
  };

  useEffect(() => {
    if (isOpen) {
      reloadData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => {
      reloadData();
    };
    window.addEventListener("inquiries_updated", handleUpdate);
    return () => window.removeEventListener("inquiries_updated", handleUpdate);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  if (!isOpen) return null;

  const newCount = inquiries.filter((i) => i.status === "Нова").length;
  const inProgressCount = inquiries.filter((i) => i.status === "В процес на обработка").length;
  const processedCount = inquiries.filter((i) => i.status === "Обработена").length;

  const filteredInquiries = inquiries.filter((item) => {
    if (filter === "Всички") return true;
    return item.status === filter;
  });

  const handleStatusChange = (id: string, newStatus: Inquiry["status"]) => {
    updateInquiryStatus(id, newStatus);
    showToast(`Статусът бе променен на "${newStatus}"`);
  };

  const handleDelete = (id: string) => {
    if (confirm("Сигурни ли сте, че искате да изтриете това запитване?")) {
      deleteInquiry(id);
      showToast("Запитването бе изтрито успешно.");
    }
  };

  const handleAddTest = () => {
    const created = createTestInquiry();
    showToast(`Създадено е ново тестово запитване от ${created.name}!`);
  };

  const handleSaveEmail = () => {
    if (emailInput.trim()) {
      setNotificationEmail(emailInput.trim());
      setIsEditingEmail(false);
      showToast(`Имейлът за известия е обновен на: ${emailInput.trim()}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-background border border-border shadow-2xl overflow-hidden text-foreground">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-5 bg-card/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="text-[length:var(--text-h3)] font-bold tracking-tight">
                Административен панел — Клиентски запитвания
              </h2>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Управление на онлайн запитванията от toploizolaciq.bg
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            aria-label="Затвори"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Email settings & notification banner */}
        <div className="p-4 bg-accent/40 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <svg className="size-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              Автоматични известия до имейл: <strong className="font-semibold text-foreground">{notificationEmail}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isEditingEmail ? (
              <button
                onClick={() => {
                  setEmailInput(notificationEmail);
                  setIsEditingEmail(true);
                }}
                className="px-2.5 py-1 rounded bg-background border border-border text-xs font-medium hover:bg-accent transition-colors"
              >
                Промени имейл
              </button>
            ) : (
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-2 py-1 border border-border rounded text-xs bg-background outline-none"
                  placeholder="name@company.com"
                />
                <button
                  onClick={handleSaveEmail}
                  className="px-2.5 py-1 rounded bg-primary text-primary-foreground text-xs font-medium"
                >
                  Запази
                </button>
                <button
                  onClick={() => setIsEditingEmail(false)}
                  className="px-2 py-1 rounded text-xs text-muted-foreground hover:bg-accent"
                >
                  Отказ
                </button>
              </div>
            )}

            <button
              onClick={handleAddTest}
              className="px-3 py-1 rounded-full bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition-colors shadow-sm ml-auto md:ml-2"
            >
              + Симулирай ново запитване
            </button>
          </div>
        </div>

        {/* Toast Alert */}
        {toast && (
          <div className="bg-emerald-500 text-white px-4 py-2 text-xs font-medium text-center animate-fadeIn">
            {toast}
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-4 border-b border-border bg-card/20">
          {(["Всички", "Нова", "В процес на обработка", "Обработена"] as const).map((tab) => {
            const count =
              tab === "Всички"
                ? inquiries.length
                : tab === "Нова"
                ? newCount
                : tab === "В процес на обработка"
                ? inProgressCount
                : processedCount;

            const isActive = filter === tab;

            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive ? "bg-background/20 text-background" : "bg-border text-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Inquiry List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredInquiries.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <svg className="size-12 mx-auto text-muted-foreground/40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-sm font-medium">Няма намерени клиентски запитвания.</p>
              <p className="text-xs mt-1">Всички нови заявки от контактната форма ще се появяват тук.</p>
            </div>
          ) : (
            filteredInquiries.map((inquiry) => {
              return (
                <div
                  key={inquiry.id}
                  className="p-4 rounded-xl border border-border bg-card/60 hover:border-foreground/30 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-2.5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-sm">{inquiry.name}</h3>
                        <span className="text-xs font-mono text-muted-foreground">({inquiry.company})</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-3 flex-wrap">
                        <span>📞 {inquiry.email}</span>
                        <span>🗓️ {inquiry.createdAt}</span>
                      </div>
                    </div>

                    {/* Status Selector */}
                    <div className="flex items-center gap-2">
                      <label className="text-xs font-medium text-muted-foreground shrink-0">Статус:</label>
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value as Inquiry["status"])}
                        className={`text-xs rounded-lg px-2.5 py-1 font-semibold outline-none cursor-pointer border ${
                          inquiry.status === "Нова"
                            ? "bg-rose-500/10 text-rose-600 border-rose-500/30"
                            : inquiry.status === "В процес на обработка"
                            ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                            : "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
                        }`}
                      >
                        <option value="Нова">🔴 Нова</option>
                        <option value="В процес на обработка">🟡 В процес на обработка</option>
                        <option value="Обработена">🟢 Обработена</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="bg-background/80 p-3 rounded-lg border border-border/40 text-xs leading-relaxed text-foreground/90 whitespace-pre-wrap">
                    {inquiry.message}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-3">
                      <a
                        href={`tel:${inquiry.email.replace(/[^\d+]/g, "")}`}
                        className="text-emerald-600 hover:underline font-medium flex items-center gap-1"
                      >
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Обади се
                      </a>
                      <a
                        href={`mailto:${notificationEmail}?subject=Относно запитване от ${encodeURIComponent(inquiry.name)}&body=${encodeURIComponent(inquiry.message)}`}
                        className="text-blue-600 hover:underline font-medium flex items-center gap-1"
                      >
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Отговори по имейл
                      </a>
                    </div>

                    <button
                      onClick={() => handleDelete(inquiry.id)}
                      className="text-rose-600 hover:underline text-xs flex items-center gap-1"
                    >
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Изтрий
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-card/40 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            Общо запитвания: <strong>{inquiries.length}</strong> (Нови: <span className="text-rose-500 font-bold">{newCount}</span>)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            Затвори панела
          </button>
        </div>
      </div>
    </div>
  );
}
