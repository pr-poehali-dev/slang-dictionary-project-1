
/**
 * Константы с цветами для профессий
 * Используются для стилизации карточек и элементов
 */
export const PROFESSION_COLORS = {
  IT: "#8B5CF6", // фиолетовый
  DESIGN: "#F97316", // оранжевый
  MARKETING: "#10B981", // зеленый
  FINANCE: "#0EA5E9", // голубой
  MEDICINE: "#EC4899", // розовый
  LAW: "#6366F1", // индиго
} as const;

// Тип для значений из объекта PROFESSION_COLORS
export type ProfessionColor = typeof PROFESSION_COLORS[keyof typeof PROFESSION_COLORS];
