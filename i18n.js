export const LANGUAGES = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "es", label: "ES", name: "Español" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "pt", label: "PT", name: "Português" },
];

export const DEFAULT_CATEGORY_NAMES = {
  fr: ["Logement", "Alimentation", "Transport", "Loisirs"],
  en: ["Housing", "Food", "Transport", "Leisure"],
  de: ["Wohnen", "Lebensmittel", "Transport", "Freizeit"],
  es: ["Vivienda", "Alimentación", "Transporte", "Ocio"],
  it: ["Alloggio", "Alimentazione", "Trasporti", "Svago"],
  ar: ["السكن", "الغذاء", "النقل", "الترفيه"],
  pt: ["Moradia", "Alimentação", "Transporte", "Lazer"],
};

const STRINGS = {
  eyebrow: {
    fr: "GRAND LIVRE MENSUEL", en: "MONTHLY LEDGER", de: "MONATSBUCH", es: "LIBRO MENSUAL",
    it: "LIBRO MENSILE", ar: "السجل الشهري", pt: "LIVRO MENSAL",
  },
  appTitle: {
    fr: "Calculateur de budget", en: "Budget Calculator", de: "Budgetrechner", es: "Calculadora de presupuesto",
    it: "Calcolatore di budget", ar: "حاسبة الميزانية", pt: "Calculadora de orçamento",
  },
  trialBadge: {
    fr: (d) => `Essai — ${d} j`, en: (d) => `Trial — ${d} d`, de: (d) => `Test — ${d} T`,
    es: (d) => `Prueba — ${d} d`, it: (d) => `Prova — ${d} g`, ar: (d) => `تجربة — ${d} يوم`,
    pt: (d) => `Teste — ${d} d`,
  },
  paidBadge: {
    fr: "Abonné", en: "Subscribed", de: "Abonniert", es: "Suscrito", it: "Abbonato", ar: "مشترك", pt: "Assinante",
  },
  balanceLabel: {
    fr: "SOLDE RESTANT", en: "REMAINING BALANCE", de: "VERBLEIBENDES GUTHABEN", es: "SALDO RESTANTE",
    it: "SALDO RIMANENTE", ar: "الرصيد المتبقي", pt: "SALDO RESTANTE",
  },
  pctSpent: {
    fr: (p) => `${p}% du revenu dépensé`, en: (p) => `${p}% of income spent`, de: (p) => `${p}% des Einkommens ausgegeben`,
    es: (p) => `${p}% de ingresos gastado`, it: (p) => `${p}% del reddito speso`, ar: (p) => `${p}% من الدخل تم إنفاقه`,
    pt: (p) => `${p}% da renda gasta`,
  },
  incomeSuffix: {
    fr: "revenu", en: "income", de: "Einkommen", es: "ingreso", it: "reddito", ar: "الدخل", pt: "renda",
  },
  incomeFieldLabel: {
    fr: "Revenu mensuel", en: "Monthly income", de: "Monatliches Einkommen", es: "Ingreso mensual",
    it: "Reddito mensile", ar: "الدخل الشهري", pt: "Renda mensal",
  },
  categoriesLabel: {
    fr: "POSTES DE DÉPENSE", en: "EXPENSE CATEGORIES", de: "AUSGABENPOSTEN", es: "CATEGORÍAS DE GASTO",
    it: "CATEGORIE DI SPESA", ar: "بنود المصروفات", pt: "CATEGORIAS DE DESPESA",
  },
  newCategoryPlaceholder: {
    fr: "Nouveau poste", en: "New category", de: "Neuer Posten", es: "Nueva categoría",
    it: "Nuova categoria", ar: "بند جديد", pt: "Nova categoria",
  },
  totalLabel: {
    fr: "Total dépenses", en: "Total expenses", de: "Gesamtausgaben", es: "Gastos totales",
    it: "Spese totali", ar: "إجمالي المصروفات", pt: "Despesas totais",
  },
  breakdownLabel: {
    fr: "RÉPARTITION", en: "BREAKDOWN", de: "AUFTEILUNG", es: "DESGLOSE", it: "RIPARTIZIONE",
    ar: "التوزيع", pt: "DISTRIBUIÇÃO",
  },
  paywallTitle: {
    fr: "Accès abonné", en: "Subscriber access", de: "Abo-Zugang", es: "Acceso de suscriptor",
    it: "Accesso abbonato", ar: "وصول المشترك", pt: "Acesso de assinante",
  },
  paywallExpired: {
    fr: "Votre essai gratuit de 2 jours est terminé. Continuez avec un abonnement à 500 FCFA/mois.",
    en: "Your 2-day free trial has ended. Continue with a subscription at 500 FCFA/month.",
    de: "Ihre kostenlose 2-Tage-Testphase ist beendet. Fahren Sie mit einem Abo für 500 FCFA/Monat fort.",
    es: "Tu prueba gratuita de 2 días ha terminado. Continúa con una suscripción de 500 FCFA/mes.",
    it: "La tua prova gratuita di 2 giorni è terminata. Continua con un abbonamento a 500 FCFA/mese.",
    ar: "انتهت فترة تجربتك المجانية لمدة يومين. تابع بالاشتراك مقابل 500 فرنك أفريقي شهريًا.",
    pt: "Seu teste gratuito de 2 dias terminou. Continue com uma assinatura de 500 FCFA/mês.",
  },
  paywallDefault: {
    fr: "Payez avec le Code Marchand Orange Money — vous entrez uniquement votre propre code secret, jamais de numéro personnel.",
    en: "Pay with the Orange Money Merchant Code — you only enter your own secret code, never a personal phone number.",
    de: "Zahlen Sie mit dem Orange Money Händlercode — Sie geben nur Ihren eigenen Geheimcode ein, niemals eine persönliche Nummer.",
    es: "Paga con el Código Comerciante de Orange Money — solo introduces tu propio código secreto, nunca un número personal.",
    it: "Paga con il Codice Commerciante Orange Money — inserisci solo il tuo codice segreto, mai un numero personale.",
    ar: "ادفع باستخدام رمز التاجر لـ Orange Money — أنت تُدخل رمزك السري الخاص فقط، وليس رقم هاتف شخصي.",
    pt: "Pague com o Código de Comerciante Orange Money — você insere apenas seu próprio código secreto, nunca um número pessoal.",
  },
  step1: {
    fr: "1. Composez ce code sur votre téléphone :", en: "1. Dial this code on your phone:",
    de: "1. Wählen Sie diesen Code auf Ihrem Telefon:", es: "1. Marca este código en tu teléfono:",
    it: "1. Componi questo codice sul tuo telefono:", ar: "١. اطلب هذا الرمز على هاتفك:",
    pt: "1. Disque este código no seu telefone:",
  },
  step2: {
    fr: "2. Validez avec votre code secret Orange Money (à l'abri des regards)",
    en: "2. Confirm with your Orange Money secret code (out of sight)",
    de: "2. Bestätigen Sie mit Ihrem geheimen Orange Money-Code (vor Blicken geschützt)",
    es: "2. Confirma con tu código secreto de Orange Money (fuera de la vista)",
    it: "2. Conferma con il tuo codice segreto Orange Money (al riparo da sguardi)",
    ar: "٢. أكّد باستخدام رمزك السري لـ Orange Money (بعيدًا عن الأنظار)",
    pt: "2. Confirme com seu código secreto Orange Money (longe de olhares)",
  },
  payButton: {
    fr: "J'ai effectué le paiement", en: "I've made the payment", de: "Ich habe bezahlt",
    es: "He realizado el pago", it: "Ho effettuato il pagamento", ar: "لقد قمت بالدفع",
    pt: "Efetuei o pagamento",
  },
  paidButton: {
    fr: "Paiement effectué", en: "Payment made", de: "Zahlung erfolgt", es: "Pago realizado",
    it: "Pagamento effettuato", ar: "تم الدفع", pt: "Pagamento efetuado",
  },
  accessButton: {
    fr: "Accéder à l'application", en: "Access the app", de: "App öffnen", es: "Acceder a la aplicación",
    it: "Accedi all'app", ar: "الدخول إلى التطبيق", pt: "Acessar o aplicativo",
  },
  disclaimer: {
    fr: "Cet écran ne vérifie pas automatiquement la réception du paiement. Une vérification en temps réel nécessite un serveur connecté à l'API marchand Orange Money.",
    en: "This screen does not automatically verify payment receipt. Real-time verification requires a server connected to the Orange Money merchant API.",
    de: "Dieser Bildschirm überprüft den Zahlungseingang nicht automatisch. Eine Echtzeitprüfung erfordert einen Server, der mit der Orange Money Händler-API verbunden ist.",
    es: "Esta pantalla no verifica automáticamente la recepción del pago. La verificación en tiempo real requiere un servidor conectado a la API de comerciante de Orange Money.",
    it: "Questa schermata non verifica automaticamente la ricezione del pagamento. La verifica in tempo reale richiede un server collegato all'API commerciante Orange Money.",
    ar: "لا تتحقق هذه الشاشة تلقائيًا من استلام الدفع. يتطلب التحقق الفوري خادمًا متصلاً بواجهة برمجة تطبيقات تاجر Orange Money.",
    pt: "Esta tela não verifica automaticamente o recebimento do pagamento. A verificação em tempo real requer um servidor conectado à API de comerciante Orange Money.",
  },
  subscriptionPrice: {
    fr: "500 FCFA / mois", en: "500 FCFA / month", de: "500 FCFA / Monat", es: "500 FCFA / mes",
    it: "500 FCFA / mese", ar: "500 فرنك أفريقي / شهريًا", pt: "500 FCFA / mês",
  },
  languageLabel: {
    fr: "Langue", en: "Language", de: "Sprache", es: "Idioma", it: "Lingua", ar: "اللغة", pt: "Idioma",
  },
};

export function t(lang, key, param) {
  const entry = STRINGS[key];
  if (!entry) return key;
  const value = entry[lang] ?? entry.fr;
  return typeof value === "function" ? value(param) : value;
}
