
/**
 * Константы с названиями иконок для профессий
 * Используются с компонентом Icon
 */
export const PROFESSION_ICONS = {
  IT: "Code",
  DESIGN: "Palette",
  MARKETING: "TrendingUp",
  FINANCE: "DollarSign",
  MEDICINE: "Stethoscope",
  LAW: "Scale",
} as const;

// Тип для значений из объекта PROFESSION_ICONS
export type ProfessionIcon = typeof PROFESSION_ICONS[keyof typeof PROFESSION_ICONS];
