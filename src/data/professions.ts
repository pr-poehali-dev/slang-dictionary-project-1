
import { Profession } from "@/types";
import { itProfession } from "./professions/it";
import { designProfession } from "./professions/design";
import { marketingProfession } from "./professions/marketing";
import { financeProfession } from "./professions/finance";
import { medicineProfession } from "./professions/medicine";
import { lawProfession } from "./professions/law";

/**
 * Основной массив профессий
 * Импортирует и объединяет данные из отдельных файлов
 */
export const professions: Profession[] = [
  itProfession,
  designProfession,
  marketingProfession,
  financeProfession,
  medicineProfession,
  lawProfession
];

/**
 * Получает профессию по идентификатору
 * @param id Идентификатор профессии
 * @returns Профессия или undefined, если не найдена
 */
export const getProfessionById = (id: string): Profession | undefined => {
  return professions.find(profession => profession.id === id);
};

/**
 * Получает все термины из всех профессий
 * @returns Массив всех терминов
 */
export const getAllTerms = () => {
  return professions.flatMap(profession => profession.terms);
};

/**
 * Получает общее количество терминов во всех профессиях
 * @returns Общее количество терминов
 */
export const getTotalTermsCount = (): number => {
  return getAllTerms().length;
};

export default professions;
