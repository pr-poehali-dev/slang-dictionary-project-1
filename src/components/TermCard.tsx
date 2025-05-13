import React, { useState, useEffect } from "react";
import { Term } from "@/types";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface TermCardProps {
  term: Term;
  color: string;
  index?: number; // Добавим индекс для анимации с задержкой
}

const TermCard: React.FC<TermCardProps> = ({ term, color, index = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Добавляем эффект появления с задержкой
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsVisible(true);
      },
      50 * (index + 1),
    ); // Задержка по индексу, чтобы термины появлялись последовательно

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={cn(
        "card-hover rounded-xl border bg-white shadow-sm transition-all duration-300",
        isExpanded ? "p-6" : "p-4",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
      style={{ transitionDelay: `${50 * (index + 1)}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{term.term}</h3>
          <p className="mt-2 text-gray-700">{term.definition}</p>

          {isExpanded && term.example && (
            <div className="mt-4">
              <p className="font-medium text-sm text-gray-700">Пример:</p>
              <p className="mt-1 text-gray-600 italic">«{term.example}»</p>
            </div>
          )}

          {isExpanded && term.related && term.related.length > 0 && (
            <div className="mt-4">
              <p className="font-medium text-sm text-gray-700">
                Связанные термины:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {term.related.map((relatedTerm, index) => (
                  <span
                    key={index}
                    className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm"
                  >
                    {relatedTerm}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1 rounded-full p-1 hover:bg-gray-100"
          style={{ color }}
          aria-label={isExpanded ? "Свернуть" : "Развернуть"}
        >
          <Icon
            name={isExpanded ? "ChevronUp" : "ChevronDown"}
            className="h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
};

export default TermCard;
