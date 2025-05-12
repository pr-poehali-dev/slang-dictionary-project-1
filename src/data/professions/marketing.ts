
import { Profession } from "@/types";

export const marketingProfession: Profession = {
  id: "marketing",
  title: "Маркетинг",
  icon: "TrendingUp",
  description: "Жаргон маркетологов, SMM-специалистов и рекламщиков",
  color: "#10B981", // зеленый
  terms: [
    {
      id: "marketing-1",
      term: "Лид",
      definition: "Потенциальный клиент, проявивший интерес к продукту или услуге",
      example: "За неделю кампания привлекла 200 лидов",
      related: ["Конверсия", "Воронка продаж"]
    },
    {
      id: "marketing-2",
      term: "Таргет",
      definition: "Целевая аудитория рекламной кампании",
      example: "Наш таргет - мужчины 25-45 лет, интересующиеся автомобилями",
      related: ["Сегмент", "ЦА"]
    },
    {
      id: "marketing-3",
      term: "CPM",
      definition: "Cost Per Mille - стоимость за 1000 показов рекламы",
      example: "У нас CPM около 300 рублей",
      related: ["CPC", "CPA"]
    },
    {
      id: "marketing-4",
      term: "CTR",
      definition: "Click-Through Rate - процент кликов по отношению к показам",
      example: "CTR у баннера всего 0.5%, нужно оптимизировать",
      related: ["Конверсия", "CPM"]
    },
    {
      id: "marketing-5",
      term: "Инсайт",
      definition: "Неочевидное понимание мотивов и потребностей целевой аудитории",
      example: "Нашли отличный инсайт для новой кампании",
      related: ["ЦА", "Позиционирование"]
    }
  ]
};
