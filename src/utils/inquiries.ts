export interface Inquiry {
  id: string;
  name: string;
  company: string; // Location / Company
  email: string;   // Phone / Contact email
  message: string;
  createdAt: string;
  status: "Нова" | "В процес на обработка" | "Обработена";
}

const STORAGE_KEY = "toploizolaciq_inquiries";
const NOTIFICATION_EMAIL_KEY = "toploizolaciq_notification_email";
export const DEFAULT_NOTIFICATION_EMAIL = "info@toploizolaciq.bg";

const initialSampleInquiries: Inquiry[] = [
  {
    id: "inq-1795459000001",
    name: "Иван Георгиев",
    company: "гр. София, к-с Младост 4",
    email: "0888 123 456",
    message: "Здравейте, интересувам се от оферта за външна топлоизолация на апартамент на 5-ти етаж (около 65 кв.м). Моля за оглед и консултация.",
    createdAt: "23.11.2026 г., 09:15 ч.",
    status: "Нова",
  },
  {
    id: "inq-1795459000002",
    name: "Петър Димитров",
    company: "гр. София, кв. Лозенец",
    email: "0899 765 432",
    message: "Търсим екип от алпинисти за саниране и топлоизолация на калканна стена на жилищна сграда. Моля свържете се с нас по телефона.",
    createdAt: "22.11.2026 г., 16:40 ч.",
    status: "В процес на обработка",
  },
];

export function getNotificationEmail(): string {
  try {
    const email = localStorage.getItem(NOTIFICATION_EMAIL_KEY);
    return email || DEFAULT_NOTIFICATION_EMAIL;
  } catch {
    return DEFAULT_NOTIFICATION_EMAIL;
  }
}

export function setNotificationEmail(email: string): void {
  try {
    localStorage.setItem(NOTIFICATION_EMAIL_KEY, email);
    window.dispatchEvent(new CustomEvent("inquiries_updated"));
  } catch {
    // localStorage unavailable
  }
}

export function getInquiries(): Inquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSampleInquiries));
      return initialSampleInquiries;
    }
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      return data as Inquiry[];
    }
    return [];
  } catch {
    return initialSampleInquiries;
  }
}

export function saveInquiries(inquiries: Inquiry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
    window.dispatchEvent(new CustomEvent("inquiries_updated"));
  } catch {
    // localStorage unavailable
  }
}

export function addInquiry(input: { name: string; company: string; email: string; message: string }): Inquiry {
  const currentInquiries = getInquiries();
  const now = new Date();
  const dateStr = now.toLocaleDateString("bg-BG", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("bg-BG", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const newInquiry: Inquiry = {
    id: `inq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: input.name.trim() || "Анонимен клиент",
    company: input.company.trim() || "Не е посочено",
    email: input.email.trim() || "Не е посочен",
    message: input.message.trim() || "Без съобщение",
    createdAt: `${dateStr} г., ${timeStr} ч.`,
    status: "Нова",
  };

  const updated = [newInquiry, ...currentInquiries];
  saveInquiries(updated);

  // Trigger custom event for new inquiry notification
  window.dispatchEvent(
    new CustomEvent("new_inquiry_received", {
      detail: newInquiry,
    })
  );

  return newInquiry;
}

export function updateInquiryStatus(id: string, status: Inquiry["status"]): void {
  const current = getInquiries();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  saveInquiries(updated);
}

export function deleteInquiry(id: string): void {
  const current = getInquiries();
  const updated = current.filter((item) => item.id !== id);
  saveInquiries(updated);
}

export function createTestInquiry(): Inquiry {
  const names = ["Стефан Николов", "Мария Иванова", "Георги Василев", "Елена Тодорова"];
  const locations = ["София, Люлин", "София, Бояна", "София, Изток", "София, Овча Купел"];
  const phones = ["0877 112 233", "0885 998 877", "0896 554 433", "0888 334 455"];
  const messages = [
    "Здравейте, искам оферта за цялостно саниране и изолация с 10см EPS на къща.",
    "Моля за консултация и оглед на обект за хидро и топлоизолация на покривна тераса.",
    "Интересувам се от цените на квадрат за алпинистки топлоизолационни услуги.",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);
  return addInquiry({
    name: names[randomIndex],
    company: locations[randomIndex],
    email: phones[randomIndex],
    message: messages[Math.floor(Math.random() * messages.length)],
  });
}
