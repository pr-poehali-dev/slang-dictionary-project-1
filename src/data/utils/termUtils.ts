
import { Term } from "@/types";

/**
 * Генерирует уникальный идентификатор для термина
 * @param professionId ID профессии
 * @param index Индекс термина в массиве
 * @returns Уникальный ID термина
 */
export const generateTermId = (professionId: string, index: number): string => {
  return `${professionId}-${index + 1}`;
};

/**
 * Сортирует термины по алфавиту
 * @param terms Массив терминов
 * @returns Отсортированный массив терминов
 */
export const sortTermsAlphabetically = (terms: Term[]): Term[] => {
  return [...terms].sort((a, b) => a.term.localeCompare(b.term));
};

/**
 * Фильтрует термины по поисковому запросу
 * @param terms Массив терминов
 * @param searchQuery Поисковый запрос
 * @returns Отфильтрованный массив терминов
 */
export const filterTermsByQuery = (terms: Term[], searchQuery: string): Term[] => {
  if (!searchQuery) return terms;
  
  const query = searchQuery.toLowerCase();
  return terms.filter(term => 
    term.term.toLowerCase().includes(query) || 
    term.definition.toLowerCase().includes(query)
  );
};

/**
 * Находит связанные термины между собой
 * @param allTerms Все термины
 * @param currentTerm Текущий термин
 * @returns Массив связанных терминов
 */
export const findRelatedTerms = (allTerms: Term[], currentTerm: Term): Term[] => {
  if (!currentTerm.related || currentTerm.related.length === 0) return [];
  
  return allTerms.filter(term => 
    currentTerm.related?.includes(term.term)
  );
};
